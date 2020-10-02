package main

import (
	"fmt"
	"log"
	"net/http"
)

func main() {
	fmt.Println("GO API Running!")

	http.HandleFunc("/", func (w http.ResponseWriter, r* http.Request) {
		fmt.Fprintf(w, "Endpoint Reached")
	})

	log.Fatal(http.ListenAndServe(":8080", nil))
}