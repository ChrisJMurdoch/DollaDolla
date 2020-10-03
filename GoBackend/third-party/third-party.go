package third_party

import (
	"errors"
	"fmt"
	_ "github.com/ChrisJMurdoch/Mula/model"
	"github.com/gorilla/mux"
	"io"
	"io/ioutil"
	"log"
	"net/http"
	"net/url"
)

type IThirdParty struct {
	BaseUrl     string
	EndPoint    *url.URL
	Method      string
	Token       string
	RequestObj  *http.Request
	RequestBody io.ReadCloser
}

type IResponseFromThirdParty struct {
	Body *http.ResponseWriter
}

func (thirdP *IThirdParty) makeExternalAPICall(endPoint string, method string, token string) (string, error) {
	thirdP.appendBaseAndHost()
	thirdP.appendMethod(method)
	thirdP.EndPoint, _ = url.Parse(thirdP.BaseUrl + endPoint)
	thirdP.Token = "Bearer " + token


	req := &http.Request {
		Method: thirdP.Method,
		URL: thirdP.EndPoint,
		Header: map[string][]string {
			"Authorization": { thirdP.Token },
		},
	}

	if thirdP.Method == "POST" || thirdP.Method == "PUT" {
		req.Body = thirdP.RequestBody
	}

	res, err := http.DefaultClient.Do(req)

	if err != nil {
		return "", err
	}

	data , _ := ioutil.ReadAll(res.Body)

	_ = res.Body.Close()


	log.Println(thirdP.EndPoint)
	log.Println(thirdP.Token)
	log.Println(thirdP.Method)
	log.Printf("Status: %d", res.StatusCode)
	log.Printf("Body: %s\n", data)

	if res.StatusCode != http.StatusOK {
		return "", errors.New(string(data) )
	}

	return string(data), nil

}

func (thirdP *IThirdParty) appendBaseAndHost() {
	thirdP.BaseUrl = "https://sv74mk82x3.execute-api.eu-west-1.amazonaws.com/Prod"
}

func (thirdP *IThirdParty) appendMethod(method string) {
	thirdP.Method = method
}

func sendBadError(w http.ResponseWriter, err error) {
	w.WriteHeader(http.StatusBadRequest)
	_, _ = w.Write([]byte(err.Error()))
}


func ThirdPartyAPIHandler(route *mux.Router) {

	s := route.PathPrefix("/third_party/").Subrouter()
	s.HandleFunc("/login/{boolean}", loginHandler)
	s.HandleFunc("/{member}/{action}", memberHandler)
	s.HandleFunc("/{external}/{hackathon}/{action}", externalActionHandler)
}

func loginHandler(w http.ResponseWriter, r *http.Request) {
	vars := mux.Vars(r)
	loginOrOut := vars["boolean"]

	var externalAPI IThirdParty
	externalAPI.RequestBody = r.Body

	if loginOrOut == "true" {
		response, err := externalAPI.makeExternalAPICall("/login", r.Method, r.URL.Query().Get("token"))

		if err != nil {
			sendBadError(w, err)
		}

		_, _ = w.Write([]byte(response))
	} else {
		_, _ = externalAPI.makeExternalAPICall("/logout", r.Method, r.URL.Query().Get("token"))
		w.WriteHeader(http.StatusOK)
	}
}

func memberHandler(w http.ResponseWriter, r *http.Request) {
	vars := mux.Vars(r)
	action := vars["action"]

	var externalAPI IThirdParty
	externalAPI.RequestBody = r.Body

	response , err := externalAPI.makeExternalAPICall("/member/" + action, r.Method, r.URL.Query().Get("token"))

	if err != nil {
		sendBadError(w, err)
		return
	}
	w.WriteHeader(http.StatusOK)
	_, _ = w.Write([]byte(response))

}

func externalActionHandler(w http.ResponseWriter, r *http.Request) {
	fmt.Println("I've been called")
}
