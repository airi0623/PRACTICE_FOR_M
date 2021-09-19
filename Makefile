set-up:
	docker network create practice-for-m-dev
	docker-compose -f ./docker-compose.yml build

set-up-app:
	make up || true
	docker-compose -f ./docker-compose.yml run --rm app composer install
	docker-compose -f ./docker-compose.yml run --rm app npm i
	docker-compose -f ./docker-compose.yml run --rm app chmod -R 777 bootstrap/
	docker-compose -f ./docker-compose.yml run --rm app chmod -R 777 ./storage/logs/
	docker-compose -f ./docker-compose.yml run --rm app chmod -R 777 ./storage/framework/
	docker-compose -f ./docker-compose.yml run --rm app php artisan key:generate
	docker-compose -f ./docker-compose.yml run --rm app php artisan config:cache
	# docker-compose -f ./docker-compose.yml run --rm app php artisan migrate --seed

build:
	docker-compose -f ./docker-compose.yml build

up:
	docker-compose -f ./docker-compose.yml up -d

down:
	docker-compose -f ./docker-compose.yml down

exec-app:
	make up || true
	docker-compose -f ./docker-compose.yml exec app bash || true

er-output:
	docker run --rm --net practice-for-m-dev -v "`pwd`/schemaspy:/output" -v "`pwd`/drivers:/drivers" schemaspy/schemaspy:snapshot -t mysql -host db:3306 -db practice_for_m_db -u root -p root -s practice_for_m_db

autoload:
	make up || true
	docker-compose -f ./docker-compose.yml run --rm app composer dump-autoload
