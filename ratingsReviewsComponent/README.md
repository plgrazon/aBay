# ratings-reviews-component

Database: 
1. npm install

2. Create database by going into psql postgres and creating a database named " ratings "

3. npm run setup:db

4. run this code before seeding:
- use ratings database: \c ratings
Alter table users alter column "createdAt" set default now();
Alter table users alter column "updatedAt" set default now();
Alter table ratings alter column "createdAt" set default now();
Alter table ratings alter column "updatedAt" set default now();
Alter table products alter column "createdAt" set default now();
Alter table products alter column "updatedAt" set default now();

5. seed my database: psql ratings hodempsey < db/sql/seed.sql

6. npm start / npm run build


