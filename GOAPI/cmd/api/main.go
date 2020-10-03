package main

import (
	"fmt"
	"log"
	"net/http"
)

func main() {
	fmt.Println("GO API Running!")

	http.HandleFunc("/", func (w http.ResponseWriter, r* http.Request) {
		/* We might not even need to implement a fully functional backend -- But we might want to interact with it as a third-party*/
		w.Header().Set("Authorization", "Bearer <Token>")
		fmt.Fprintf(w, "Endpoint Reached")
	})

	log.Fatal(http.ListenAndServe(":8080", nil))
}