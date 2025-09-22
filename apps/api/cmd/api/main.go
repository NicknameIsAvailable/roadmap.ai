package main

import (
	"api/internal/config"
	"api/internal/database"
	"context"
	"fmt"
	"log"
	"net/http"
)

func loadConfigAndCreateContext(ctx context.Context) {
	config := config.MustLoad()
	ctx = context.WithValue(ctx, "config", config)
}

func main() {
	http.HandleFunc("/hello", func(w http.ResponseWriter, r *http.Request) {
		fmt.Fprintln(w, "Hello from Go API 🚀")
	})

	log.Println("Starting API on :8080")
	log.Fatal(http.ListenAndServe(":8080", nil))

	ctx := context.Background()
	loadConfigAndCreateContext(ctx)

	db, _ := database.Init(ctx)
	database.Migrate(db)
}