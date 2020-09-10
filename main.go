package main

import (
	"github.com/google/logger"
	"github.com/thedevsaddam/renderer"
	"log"
	"net/http"
)

var rnd *renderer.Render

func init() {
	opts := renderer.Options{
		ParseGlobPattern: "./*.html",
	}

	rnd = renderer.New(opts)
}

func main()  {
	http.Handle("/static/", http.StripPrefix("/static/", http.FileServer(http.Dir("static"))))

	http.HandleFunc("/", home)
	log.Fatal(http.ListenAndServe(":8082", nil))
}

func home(writer http.ResponseWriter, request *http.Request) {
	err := rnd.HTML(writer, http.StatusOK, "index", nil)
	if err != nil {
		logger.Error(err)
	}
}
