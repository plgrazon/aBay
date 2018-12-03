version: "3"

services:
  web:
    build: .
    command: bash -c "npm start && npm run setup:db"
    image: hdempsey/ratings
    ports:
      - "1111:1111"
    volumes:
      - ./package.json:/root/app/package.json
    depends_on:
      - db
    links:
      - db
    environment:
      PORT: 1111

  db: 
    image: postgres
    ports:
      - "5432:5432"
    environment:
      - POSTGRES_PASSWORD=11
      - POSTGRES_USER=hodempsey
      - POSTGRES_DB=ratings
      