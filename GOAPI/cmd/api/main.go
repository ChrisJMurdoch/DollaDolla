package main

import (
	"github.com/ChrisJMurdoch/Mula/database"
	"github.com/ChrisJMurdoch/Mula/third-party"
	"github.com/gorilla/mux"
	"log"
	"net/http"
)

func main() {

	/* Connect to MongoDB */
	err := database.ConnectToDB()

	if err != nil {
		log.Fatal("Database Connection failed: ")
	}

	err = database.PingDatabase()

	if err != nil {
		log.Fatal("Can't Ping Database - Issue with Auth or Docker")
	}

	log.Println("GO API Running!")

	/* ******************************************************************************** */

	// We'll have a separate prefixed end point for everything we've been given in the hackathon collection
	thirdPartyApp := mux.NewRouter()

	third_party.ThirdPartyAPIHandler(thirdPartyApp)

	thirdPartyApp.Use(appendToHeaderMiddleware)

	http.Handle("/third_party/", thirdPartyApp)

	log.Fatal(http.ListenAndServe(":8080", nil))
}


func appendToHeaderMiddleware(n http.Handler)  http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Access-Control-Allow-Headers", "Content-Type")
		w.Header().Set("Content-Type", "application/json")
		w.Header().Set("Accept-Encoding", "gzip, deflate, br")
		w.Header().Set("Access-Control-Allow-Origin", "*")

		if r.Method == http.MethodOptions {
			return
		}

		log.Println(r.RequestURI)
		n.ServeHTTP(w, r)
	})
}
