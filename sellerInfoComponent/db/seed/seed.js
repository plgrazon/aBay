const Sequelize = require("sequelize");
const { db } = require("../config/index");
const { Product, Seller, SellerRating, Image } = require("../schema/schema");

const productSeed = [
  {
    name: "Tooth Brush",
    price: 20,
    description: "Hey its a toothbrush",
    sellerId: 1
  },
  { name: "Potato", price: 100, description: "Im a potato", sellerId: 1 },
  {
    name: "Turn Table",
    price: 1000,
    description: "Turns and tables!",
    sellerId: 1
  },
  { name: "Dog", price: 10000, description: "Woof woof!", sellerId: 1 },
  {
    name: "Cat",
    price: 5,
    description: "Havent seen it for weeks",
    sellerId: 1
  },
  {
    name: "Hamster",
    price: 20,
    description: "Its a hamster alright",
    sellerId: 1
  },
  { name: "Fork", price: 5, description: "You can eat with it", sellerId: 1 },
  {
    name: "Action Figure",
    price: 10,
    description: "Its a guy that does stuff",
    sellerId: 1
  },
  {
    name: "Coffee",
    price: 20,
    description: "It make you go fast",
    sellerId: 1
  },
  { name: "Water", price: 2, description: "Drink it, its good!", sellerId: 1 },

  {
    name: "Car Brush",
    price: 20,
    description: "Hey its a car brush",
    sellerId: 1
  },
  { name: "Squash", price: 100, description: "Im a Squash", sellerId: 1 },
  {
    name: "Record",
    price: 1000,
    description: "Play Me!",
    sellerId: 1
  },
  { name: "Pen", price: 10000, description: "Write fast", sellerId: 1 },
  {
    name: "Computer",
    price: 500,
    description: "Go to a bootcamp they said, Itll be fun they said",
    sellerId: 1
  },
  {
    name: "Chicken",
    price: 200,
    description: "Its a chicken alright",
    sellerId: 1
  },
  { name: "Spoon", price: 5, description: "You can eat with it", sellerId: 1 },
  {
    name: "Toy Plane",
    price: 15,
    description: "Its a plane that does stuff",
    sellerId: 1
  },
  {
    name: "Coffee Maker",
    price: 20,
    description: "Make coffee",
    sellerId: 1
  },
  {
    name: "Orange Juice",
    price: 2,
    description: "Drink it, its good!",
    sellerId: 1
  },
  {
    name: "Peppers",
    price: 2,
    description: "Eat it, its good!",
    sellerId: 1
  },
  {
    name: "Milk",
    price: 200,
    description: "Drink it, its good!",
    sellerId: 1
  },
  {
    name: "Ice",
    price: 1,
    description: "Couple of cold boys",
    sellerId: 1
  },
  {
    name: "The color red",
    price: 2000,
    description: "A conceptual and physical property!",
    sellerId: 1
  }
];

const sellerSeed = [{ name: "John Smith", email: "johnsmith@gmail.com" }];

const sellerRatingSeed = [
  { user: "Bob Thomp", rating: 4, sellerId: 1 },
  { user: "Rob Me", rating: 3, sellerId: 1 },
  { user: "Sury Vlobos", rating: 5, sellerId: 1 },
  { user: "Sendit Tome", rating: 4, sellerId: 1 },
  { user: "Kills Alot", rating: 4, sellerId: 1 },
  { user: "Boblob Law", rating: 3, sellerId: 1 },
  { user: "Dark Chocolate", rating: 5, sellerId: 1 },
  { user: "Send To", rating: 4, sellerId: 1 },
  { user: "Karl Truckstop", rating: 4, sellerId: 1 },
  { user: "Ghotta Javit", rating: 4, sellerId: 1 },
  { user: "Roy Royson", rating: 4, sellerId: 1 },
  { user: "Had Todoet", rating: 3, sellerId: 1 },
  { user: "Fun Ishere", rating: 5, sellerId: 1 },
  { user: "True Purple", rating: 4, sellerId: 1 },
  { user: "Kills Alittle", rating: 4, sellerId: 1 },
  { user: "Hasbeen Nowis", rating: 3, sellerId: 1 },
  { user: "Light Chocolate", rating: 5, sellerId: 1 },
  { user: "Send Foret", rating: 4, sellerId: 1 },
  { user: "Karl Newave", rating: 4, sellerId: 1 },
  { user: "Ghotta Seet", rating: 4, sellerId: 1 },
  { user: "Egg Saaled", rating: 4, sellerId: 1 },
  { user: "Helps Forlittle", rating: 3, sellerId: 1 },
  { user: "Big Fun", rating: 5, sellerId: 1 },
  { user: "Some Dude", rating: 4, sellerId: 1 },
  { user: "Joe Joeby", rating: 4, sellerId: 1 }
];

const imageSeed = [
  {
    imageUrl:
      "https://s3-us-west-1.amazonaws.com/colesfec/rexall_toothbrush_4.jpg",
    productId: 1
  },
  {
    imageUrl: "https://s3-us-west-1.amazonaws.com/colesfec/toothbrush2.jpg",
    productId: 1
  },
  {
    imageUrl: "https://s3-us-west-1.amazonaws.com/colesfec/potato1.jpg",
    productId: 2
  },
  {
    imageUrl: "https://s3-us-west-1.amazonaws.com/colesfec/potato2.jpg",
    productId: 2
  },
  {
    imageUrl: "https://s3-us-west-1.amazonaws.com/colesfec/turntable1.jpg",
    productId: 3
  },
  {
    imageUrl: "https://s3-us-west-1.amazonaws.com/colesfec/turntable2.jpg",
    productId: 3
  },
  {
    imageUrl: "https://s3-us-west-1.amazonaws.com/colesfec/dog1.jpg",
    productId: 4
  },
  {
    imageUrl: "https://s3-us-west-1.amazonaws.com/colesfec/dog2.jpg",
    productId: 4
  },
  {
    imageUrl: "https://s3-us-west-1.amazonaws.com/colesfec/cat1.jpg",
    productId: 5
  },
  {
    imageUrl: "https://s3-us-west-1.amazonaws.com/colesfec/cat2.jpg",
    productId: 5
  },
  {
    imageUrl: "https://s3-us-west-1.amazonaws.com/colesfec/hamster1.jpg",
    productId: 6
  },
  {
    imageUrl: "https://s3-us-west-1.amazonaws.com/colesfec/hamster2.jpg",
    productId: 6
  },
  {
    imageUrl: "https://s3-us-west-1.amazonaws.com/colesfec/fork1.jpg",
    productId: 7
  },
  {
    imageUrl: "https://s3-us-west-1.amazonaws.com/colesfec/fork2.jpg",
    productId: 7
  },
  {
    imageUrl: "https://s3-us-west-1.amazonaws.com/colesfec/actionfigure1.jpg",
    productId: 8
  },
  {
    imageUrl: "https://s3-us-west-1.amazonaws.com/colesfec/actionfigure2.jpg",
    productId: 8
  },
  {
    imageUrl: "https://s3-us-west-1.amazonaws.com/colesfec/coffee1.jpg",
    productId: 9
  },
  {
    imageUrl: "https://s3-us-west-1.amazonaws.com/colesfec/coffee2.jpg",
    productId: 9
  },
  {
    imageUrl: "https://s3-us-west-1.amazonaws.com/colesfec/water1.jpg",
    productId: 10
  },
  {
    imageUrl: "https://s3-us-west-1.amazonaws.com/colesfec/water2.jpg",
    productId: 10
  },
  {
    imageUrl: "https://s3-us-west-1.amazonaws.com/colesfec/carbrush1.jpg",
    productId: 11
  },
  {
    imageUrl: "https://s3-us-west-1.amazonaws.com/colesfec/carbrush2.jpg",
    productId: 11
  },
  {
    imageUrl: "https://s3-us-west-1.amazonaws.com/colesfec/squash1.jpg",
    productId: 12
  },
  {
    imageUrl: "https://s3-us-west-1.amazonaws.com/colesfec/squash2.jpg",
    productId: 12
  },
  {
    imageUrl: "https://s3-us-west-1.amazonaws.com/colesfec/record1.jpg",
    productId: 13
  },
  {
    imageUrl: "https://s3-us-west-1.amazonaws.com/colesfec/record2.jpg",
    productId: 13
  },
  {
    imageUrl: "https://s3-us-west-1.amazonaws.com/colesfec/pen1.jpg",
    productId: 14
  },
  {
    imageUrl: "https://s3-us-west-1.amazonaws.com/colesfec/pen2.jpg",
    productId: 14
  },
  {
    imageUrl: "https://s3-us-west-1.amazonaws.com/colesfec/computer1.jpg",
    productId: 15
  },
  {
    imageUrl: "https://s3-us-west-1.amazonaws.com/colesfec/computer2.jpg",
    productId: 15
  },
  {
    imageUrl: "https://s3-us-west-1.amazonaws.com/colesfec/chicken1.jpg",
    productId: 16
  },
  {
    imageUrl: "https://s3-us-west-1.amazonaws.com/colesfec/chicken2.jpg",
    productId: 16
  },
  {
    imageUrl: "https://s3-us-west-1.amazonaws.com/colesfec/spoon1.jpg",
    productId: 17
  },
  {
    imageUrl: "https://s3-us-west-1.amazonaws.com/colesfec/spoon2.jpg",
    productId: 17
  },
  {
    imageUrl: "https://s3-us-west-1.amazonaws.com/colesfec/toyplane1.jpg",
    productId: 18
  },
  {
    imageUrl: "https://s3-us-west-1.amazonaws.com/colesfec/toyplane2.jpg",
    productId: 18
  },
  {
    imageUrl: "https://s3-us-west-1.amazonaws.com/colesfec/coffeemaker1.jpg",
    productId: 19
  },
  {
    imageUrl: "https://s3-us-west-1.amazonaws.com/colesfec/coffeemaker2.jpg",
    productId: 19
  },
  {
    imageUrl: "https://s3-us-west-1.amazonaws.com/colesfec/orangejuice1.JPG",
    productId: 20
  },
  {
    imageUrl: "https://s3-us-west-1.amazonaws.com/colesfec/orangejuice2.jpg",
    productId: 20
  },
  {
    imageUrl: "https://s3-us-west-1.amazonaws.com/colesfec/peppers1.jpg",
    productId: 21
  },
  {
    imageUrl: "https://s3-us-west-1.amazonaws.com/colesfec/peppers2.jpg",
    productId: 21
  },
  {
    imageUrl: "https://s3-us-west-1.amazonaws.com/colesfec/milk1.jpg",
    productId: 22
  },
  {
    imageUrl: "https://s3-us-west-1.amazonaws.com/colesfec/milk2.jpg",
    productId: 22
  },
  {
    imageUrl: "https://s3-us-west-1.amazonaws.com/colesfec/ice1.jpg",
    productId: 23
  },
  {
    imageUrl: "https://s3-us-west-1.amazonaws.com/colesfec/ice2.jpg",
    productId: 23
  },
  {
    imageUrl: "https://s3-us-west-1.amazonaws.com/colesfec/thecolorred1.png",
    productId: 24
  },
  {
    imageUrl: "https://s3-us-west-1.amazonaws.com/colesfec/thecolorred2.png",
    productId: 24
  },
  {
    imageUrl: "https://s3-us-west-1.amazonaws.com/colesfec/thecolorred3.jpg",
    productId: 24
  },
  {
    imageUrl: "https://s3-us-west-1.amazonaws.com/colesfec/thecolorred4.jpg",
    productId: 24
  }
];

db.sync({ force: true })
  .then(() => {
    Image.bulkCreate(imageSeed);
    Seller.bulkCreate(sellerSeed);
    Product.bulkCreate(productSeed);
    SellerRating.bulkCreate(sellerRatingSeed);
  })
  .then(() => console.log("Database Seeded!"))
  .catch(err => console.log(`Error Seeding Database ${err}`));
