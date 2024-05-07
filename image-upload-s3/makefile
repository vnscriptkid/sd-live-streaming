up:
	docker-compose up -d

up_build:
	docker-compose up -d --build

down:
	docker-compose down --remove-orphans --volumes

mongo:
	docker-compose exec mongo mongosh

log-app:
	docker-compose logs -f app

ssh:
	ssh -i "macos-carousell.pem" ec2-user@47.129.30.245

chmod:
	chmod 600 macos-carousell.pem

prod:
	open 47.129.30.245

web:
	open photogram.store

cli-app:
	docker-compose exec app sh
