package config

import (
	"gorm.io/gen"
)

type GenerateConfig struct {
	OutPath    string
	ModelPath  string
	QueryPath  string
}

func DefaultGenConfig() GenerateConfig {
	return GenerateConfig{
		OutPath:   "./internal/query",
		ModelPath: "./internal/model",
		QueryPath: "./internal/query",
	}
}

func CreateGenerator(config GenerateConfig) *gen.Generator {
	return gen.NewGenerator(gen.Config{
		OutPath:      config.OutPath,
		OutFile:      "gen.go",
		ModelPkgPath: config.ModelPath,
		
		Mode: gen.WithoutContext | 
			 gen.WithDefaultQuery | 
			 gen.WithQueryInterface,

		FieldNullable:     true,  // поддержка nullable полей
		FieldCoverable:    false, // не генерировать методы покрытия
		FieldSignable:     false, // не генерировать signed/unsigned методы
		FieldWithIndexTag: false, // не добавлять индексные теги
		FieldWithTypeTag:  true,  // добавлять типовые теги
	})
}