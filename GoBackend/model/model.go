package model

type Profile struct {
	Name string `json:"name"`
	Age int `json:"age"`
	Degree string `json:"degree"`
	Goals []map[string]interface{} `json:"goals"`
}