package main

import (
	"api/internal/config"
	"api/internal/database"
	"context"
)

func loadConfigAndCreateContext(ctx context.Context) {
	config := config.MustLoad()
	ctx = context.WithValue(ctx, "config", config)
}

func main() {
	ctx := context.Background()
	loadConfigAndCreateContext(ctx)

	db, _ := database.Init(ctx)
	database.Migrate(db)
}