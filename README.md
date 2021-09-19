Practice_for_M
# Required
- PHP >= 7.3.0
- node.js
- docker
- docker-compose
- composer
# See
- [Laravel](https://laravel.com/)
- [Vue.js](https://jp.vuejs.org/index.html)
- [MDB v4](https://mdbootstrap.com/)
# Setup
```bash
composer global require friendsofphp/php-cs-fixer
export PATH="$PATH:$HOME/.composer/vendor/bin"
```
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
make npm-run-watch
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
## generate API docs
```bash
make api-test
```
## run front auto test
```bash
cp cypress.env.example.json cypress.env.json
make run-front-auto-test
```
## output ER
```bash
make er-output
schemaspy/index.html
をブラウザーで開いてください
```
## memo
### ブランチの運用
git flowに従う
ブランチ名のフォーマットは以下とする
```
feat/{issue no.}/{prefix}-{work-content}
例）
feat/#1/create-home-view
```
### commit message
フォーマットは以下とする
```
{prefix}: {frontend or backend} {message} {issue no.}
例）
create: frontend ホーム画面作成 #1
```
### PR
- titleには、ブランチ名を記載すること。
- 本文は、テンプレートに従って記載し、レビュワーが確認しやすいように確認対象の画面URLやエンドポイント、リクエスト、期待レスポンス等を詳細に記載すること。