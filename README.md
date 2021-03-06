# SCC0219 - Introduction to Web Development - 2021.2<br>
ICMC - Instituto De Ciências Matemáticas e de Computação, USP São Carlos<br>
Subject project to consolidate learning and web development techniques through the creation of an online store, the project will be used as approval criteria.<br>

### Group 5
Mariana Aya Suzuki Uchida - 11236205<br>
Breno Kenji Ogata Bianchi - 10260372<br>
Pedro Fernando Christofoletti dos Santos  - 11218560<br>

---
# Only Geek store
<img src="old-frontend/images/onlyGeek/logo.png" alt="Only Geek logo" style="width:250px;"/>

## Online Preview
<a href="https://only-geek.pedrofernandoch.repl.co/" target="_blank">Only Geek</a>

# Table of Contents
1. [Requirements](#requirements)
2. [Project Description](#project-description)
3. [Comments About the Code](#comments-about-the-code)
4. [Test Plan](#test-plan)
5. [Test Results](#test-results)
6. [Build Procedures](#build-procedures)
7. [Problems](#problems)
8. [Comments](#comments)

## Requirements

* The system must have 2 types of users: Clients and Administrators
  - Administrators are responsible for registering/managing administrators, customers, and products/services provided. The application already comes with an account admin with password admin.
  - Customers are users who access the system to buy products/services.
* The admin record includes, at least: name, id, phone, email.
* Each customer's record includes, at least: name, id, address, phone, email
* Product/services records include, at least: name, id, photo, description, price, quantity (in stock), quantity sold.
* Your store may sell products, services or both (you decide)
* Selling Products (or services): Products are selected, their quantity chosen, and are included in a cart. Products are purchased using a credit card number (any number is accepted by the system). The quantity of product sold is subtracted from the quantity in stock and added to the quantity sold. Carts are emptied only on payment or by customers.
* Product/Service Management: Administrators can create/update/read/delete (crud) new products and services. For example, they can change the stock quantity.
* Your functionality: Create a functionality that is specific to your application. It does not have to be something complicated. For instance, if you are selling cars, you may allow users to use an accelerator to hear how each car engine roars up and down.   
* The system must provide accessibility requirements and provide good usability. 
* The system must be responsive.
* The system must provide filtering functionality to choose products
* Customers can track the shipment of their order through the system
* Customers can have a Wish list
* News board from the Geek World
* User area 

## Project Description

  Only Geek is a geek content store that sells clothing, accessories, toys, posters, games, dvds, decorations and so on. She also has a news board from the geek world, her goal is to bring a little of this universe to the reality of consumers. The store will allow the purchase of several products with different payment methods and option to apply coupon, order tracking, login with user area, wish list, shopping cart, product suggestion based on last purchases filtering and search options of products, always updated news board and for administrators a CRUD platform for database entities.<br><br>
  For the frontend we will use HTML, CSS, JavaScript and the React.js library, we will also have the help of npm packages such as Redux (redux, redux-form, redux-multi, redux-promise, redux-thunk) and recompose to handle the application states, axios for handling requests, redux-toastr to generate notices, react router to handle the distribution of content and the Single Page Application pattern and other libraries that helped in the design such as Material UI as well as Google Fonts, Bootstrap and Jquery. As for the backend we will use Node.js with Express along with cors and body-parser to create the web server and finally we will use moongose to connect to the MongoDB database as well as create tables, perform queries etc. To facilitate dependency injection we will use consign in the backend.<br><br>
  In development environment we will use nodemon library to facilitate the restart of the api as modifications are made. In the production environment, the api will be running with the help of the pm2 library, which is in charge of restarting the api in case of errors and generating logs. For authentication the combination of bcryptjs, jwt-simple, passport and passport-jwt packages will be used to generate and validate access tokens. In addition we will also use regex to validate the data received.

## Comments About the Code

Some of the features such as the checkout page weren't implemented.

## Test Plan

To test the API we will use postman and we will build a table of inputs and their expected outputs to validate the created functions. For the frontend, we will create possible paths between the application's routes ranging from product search and choice, addition to the cart, login or registration and finally the purchase checkout, as well as the crud of the admin page.
The database will be created with MongoDb to provide NoSql storage and retrieval data system. Then routes connecting to the database’s tuples will be created in the backend so the admins can manage the store.

## Test Results

The first test, we tested if it is possible to add a product to the shopping cart. As for now, the shopping cart is not fully implemented, so it is not possible to finalize the operation.

In the second one, we tried to perform a registration/login and purchase the product that we previously added to the cart. So, we tried to perform login and proceed to the ‘checkout’ button present in the cart sidebar. We have not finished the implementation of the checkout functionality, as it depends on the shopping cart. So this functionality is not fully implemented.

For the third test, we entered the admin page and tried to do some operations (save, get and delete) in the data table. This part is fully implemented, so it is possible to do all operations.

The last test is to verify the APIs :
We used Postman to test the API for the methods save, delete and post. For this example, we utilized the ‘subCategory’ section.



## Build Procedures

### Pre-Requisites

- Yarn 1.22.17
- Node 16.13.0

### Installation

```bash
git clone https://github.com/pedrofernandoch/only-geek-store.git
cd only-geek-store/frontend
```

In the project directory, you need to run:

### `yarn install`

Install all project dependencies

To view the project in the browser you have two options:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\

Now you just need to setup an HTTP server that delivers the index.html generated in the build and point the browser to that path  and the client should work.

## Problems

The overlapping CSS files complicated the development at some point. When connecting to the database, MongoDB didn’t recognize the informed IP (solved). Also, the group had some problems operating the database since it was the first time for us using a NoSql database. 

## Comments

No comments yet

## License

The source code is released under the [MIT License](https://github.com/pedrofernandoch/only-geek-store/blob/master/LICENSE).
