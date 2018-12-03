# Seller Info Component

![aug-21-2018 20-07-00](https://user-images.githubusercontent.com/34247773/44440941-42814d80-a57f-11e8-969e-58e689a09361.gif)

My Front End Capstone project for HRLA22. This is a microservice which is meant to mimic Ebays product page. Each person on our team made their own microservice which are rendered altogether through a proxy server.

Images will no longer load as they were hosted within AWS S3 buckets which have since been turned off.

To host service for deployment uncomment and change dburl in client/components, change host name within db/config. Then host and seed a PSQL instance and seed with dummy data.

My Proxy Server: https://github.com/cmichaelsd/Coles-Frontend-Proxy

### Technologies Used:

- React
- Axios
- PSQL
- Jest
- Grunt
- Enzyme

### How To Run:

- Create the database "frontend_capstone" within PSQL, alter username as needed
- Run "npm run seed"
- Build a bundle.js by running "npm run build"
- Run "npm start"
- Connect to localhost:3000
