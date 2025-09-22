package database

import (
	"api/internal/config"
	"api/internal/model"
	"context"
	"fmt"
	"log/slog"

	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

func generateDsn(ctx context.Context) string {
	config := ctx.Value("config").(*config.Config)

	return fmt.Sprintf("host=%s user=%s password=%s dbname=%s port=%s sslmode=disable",
		config.Postgres.Host,
		config.Postgres.User,
		config.Postgres.Password,
		config.Postgres.Name,
		config.Postgres.Port,
	)
}

func Init(ctx context.Context) (*gorm.DB, error) {
	dsn := generateDsn(ctx)
	db, err := gorm.Open(postgres.Open(dsn), &gorm.Config{})
	if err != nil {
		slog.Error("failed to connect database", "error", err)
		return nil, err
	}

	slog.Info("database connection established")
	return db, nil
}

func Migrate(conn *gorm.DB) error {
	return conn.AutoMigrate(
		&model.User{}, 
		&model.Roadmap{}, 
		&model.RoadmapNode{}, 
		&model.Tag{}, 
		&model.Task{},
	)
}
