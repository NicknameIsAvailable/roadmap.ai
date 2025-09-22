package main

import (
	"api/internal/config"
	"api/internal/db"
	"context"
	"log"

	"gorm.io/driver/postgres"
	"gorm.io/gorm"

	"api/internal/model"
)

func main() {
	config := config.MustLoad()
	ctx := context.Background()
	ctx = context.WithValue(ctx, "config", config)

	dsn := db.GenerateDsn(ctx)	
	db, err := gorm.Open(postgres.Open(dsn), &gorm.Config{})
	if err != nil {
		// Если нет подключения к БД, создаем генератор без неё
		log.Println("No DB connection, generating from models only")
		// generateFromModels()
		return
	}

	// Автомиграция для создания таблиц
	err = db.AutoMigrate(&model.User{})
	if err != nil {
		log.Fatal("Failed to migrate:", err)
	}

	// generateFromDB(db)
}

// // Генерация на основе подключения к БД
// func generateFromDB(db *gorm.DB) {
// 	g := gen.NewGenerator(gen.Config{
// 		OutPath:           "./internal/query",
// 		Mode:             gen.WithoutContext | gen.WithDefaultQuery | gen.WithQueryInterface,
// 		FieldNullable:    true,
// 		FieldCoverable:   false,
// 		FieldSignable:    false,
// 		FieldWithIndexTag: false,
// 		FieldWithTypeTag:  true,
// 	})

// 	g.UseDB(db)

// 	// Генерируем все таблицы из БД
// 	g.ApplyBasic(g.GenerateAllTable()...)

// 	// Или генерируем конкретные модели
// 	g.ApplyBasic(&model.User{})

// 	// Создаем кастомные методы
// 	user := g.GenerateModel("users")
	
// 	// Добавляем кастомные методы через ApplyInterface
// 	g.ApplyInterface(func(method UserMethod) {
// 		// SELECT * FROM @@table WHERE email = @email
// 		method.FindByEmail("SELECT * FROM @@table WHERE email = ?", "email")
		
// 		// SELECT * FROM @@table WHERE email = @email AND password_hash = @passwordHash  
// 		method.FindByEmailAndPassword("SELECT * FROM @@table WHERE email = ? AND password_hash = ?", "email", "passwordHash")
// 	}, user)

// 	g.Execute()
// }

// // Генерация только на основе моделей (без БД)
// func generateFromModels() {
// 	g := gen.NewGenerator(gen.Config{
// 		OutPath:           "./internal/query",
// 		Mode:             gen.WithoutContext | gen.WithDefaultQuery | gen.WithQueryInterface,
// 		FieldNullable:    true,
// 		FieldWithTypeTag: true,
// 	})

// 	// Генерируем на основе существующих моделей
// 	g.ApplyBasic(&model.User{})

// 	g.Execute()
// }

// // UserMethod интерфейс для кастомных методов User
// type UserMethod interface {
// 	// FindByEmail SELECT * FROM @@table WHERE email = @email
// 	FindByEmail(email string) (*gen.T, error)
	
// 	// FindByEmailAndPassword SELECT * FROM @@table WHERE email = @email AND password_hash = @passwordHash
// 	FindByEmailAndPassword(email, passwordHash string) (*gen.T, error)
// }