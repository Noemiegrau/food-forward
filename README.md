# **_Food Forward_**

## **_Table of contents_**
* [Description of the project](#description-of-the-project)
* [Technologies used](#technologies-used)
* [Usage](#usage)
* [Installation](#installation)
* [Credits](#credits)
* [Link URL to GitHub Repository](#link-URL-to-GitHub-repository)
* [Link URL of deployed app to Heroku](#link-URL-of-deployed-app-to-Heroku)

## **_Description of the project_**
This project is a full-stack application using Model-View-Controller (MVC) paradigm and is deployed on Heroku. It is a food bank website directed towards its employees where they will be able to login safely into their account via email and protected password, have access to the food bank customer's personnal information, modify, and delete these database information. The employees also have access to a social media like platform where they can post information concerning their work at the food bank, comment on these posts and like.

## **_Technologies used_**
Project is created using:
* JavaScript
* Nodejs
* Expressjs
* Path
* Express session
* Sequelize
* MYSQL
* MYSQL2
* Handlebarsjs
* Heroku
* dotenv

## **_Usage_**
![Screen Shot 2021-06-01 at 8 28 03 AM](https://user-images.githubusercontent.com/78329298/120350038-7868ca00-c2b3-11eb-9468-eb433a7e9e3c.png)

## **_Installation_**
Here are some guidelines for installing the project on your local machine: 

1. Clone or download the repository to your own local machine and run it from your command line.

2. Then, make sure that your repo includes a package.json with the required dependencies. You can create one by running ```npm init``` in your command line.

3. Run ```npm i``` or ```npm install``` in order to download all the dependencies.

4. Store your variables in an .env file. Some of the variables you will need are: ```DB_NAME```, ```DB_PW``` and ```DB_USER``` for your local database credentials, ```DB_EMAIL``` and ```DB_PASS``` for nodemailer/contact-from credentials. And don't forget to include your .env file into your .gitignore to keep your credentials secret.. 🤫

5. Run ```node server.js```, ```node server``` or ```npm run``` in your terminal to launch the application. Or check the deployed app directly on our heroku link (https://stark-reaches-12893.herokuapp.com/).

6. Enjoy and don't hesitate to contribute! 🙂

## **_Credits_**
Wayne Edwards: https://github.com/WayneEdwards
Noemie Grau: https://github.com/Noemiegrau
Tricia Strickland: https://github.com/tstrickland88

## **_Link URL to GitHub Repository_**
https://github.com/Noemiegrau/food-forward

## **_Link URL of deployed app to Heroku_**
https://stark-reaches-12893.herokuapp.com/
