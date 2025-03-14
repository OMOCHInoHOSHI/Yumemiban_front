# Yumemiban_front

夢見掲示板

typescriptを使おう
アーキテクチャを意識して作成しよう

## OpenAPI Generator

### 前提

- openapi-generatorがインストールされていること
- バックエンドが起動していること

### 生成方法

```sh
openapi-generator-cli generate -i http://localhost:8089/swagger//doc.json -g typescript-axios -o ./src/api
```

