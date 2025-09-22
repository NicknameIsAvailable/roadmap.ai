package config

import (
	"os"
)

type PostgresConfig struct {
	Host	 string
	User	 string
	Password string
	Name     string
	Port     string
}

type Config struct {
	Env 	 string
	Postgres PostgresConfig
}

func MustLoad() *Config {
	return &Config{
		Env: os.Getenv("ENV"),
		Postgres: PostgresConfig{
			Host:     os.Getenv("POSTGRES_HOST"),
			User:     os.Getenv("POSTGRES_USER"),
			Password: os.Getenv("POSTGRES_PASSWORD"),
			Name:     os.Getenv("POSTGRES_DB"),
			Port:     os.Getenv("POSTGRES_PORT"),
		},
	}
}