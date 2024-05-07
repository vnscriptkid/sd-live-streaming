up:
	docker compose up -d

up_build:
	docker compose up -d --build

down:
	docker compose down --remove-orphans --volumes

mongo:
	docker compose exec mongo mongosh

log-app:
	docker compose logs -f app