# Name
 
Laravel_Vue.js Starter

# Required
- PHP >= 7.3.0
- node.js
- docker
- composer

# Setup
```bash
composer install
```

```bash
npm i
```

```bash
cp .env.example .env
```

```bash
php artisan key:generate
```

```bash
make set-up
```

```bash
make set-up-app
```

# Usage

## run application
```bash
make exec-app
```

```bash
npm run hot
```
access to [localhost:8080](localhost:8080)

## phpMyadmin
[localhost:8888](localhost:8888)
```bash
id: root
pass: root
```

## stop application
```bash
make down
```

## output ER
```bash
make er-output

schemaspy/index.html
をブラウザーで開いてください
```
