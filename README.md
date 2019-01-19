# Burger Logger - Node and Express Servers
Assignment 14 -   Application to execute basics of ORM & MVC

Submitted On: 01/18/2019

## Technologies: MySQL, Node, Express, Handlebars, ORM , html, css , bootstrap

This is assignment 14: https://unc.bootcampcontent.com/UNC-Coding-Boot-Camp/UNCHILL201808FSF3/blob/master/homework/14-handlebars/Instructions/homework_instructions.md

Demo Video: https://www.youtube.com/watch?v=msvdn95x9OM&feature=youtu.be

### Application Specific Details:
----------------------------------
Eat-Da-Burger! is a restaurant app that lets users input the names of burgers they'd like to eat.
Whenever a user submits a burger's name, app displays the burger on the left side of the page -- waiting to be devoured.
Each burger in the waiting area also has a Devour it! button. When the user clicks it, the burger will move to the right side of the page.
App stores every burger in a database, whether devoured or not.
			

### Directory Structure:
-----------------------------			
.
├── config
│   ├── connection.js
│   └── orm.js
│ 
├── controllers
│   └── burgers_controller.js
│
├── db
│   ├── schema.sql
│   └── seeds.sql
│
├── models
│   └── burger.js
│ 
├── node_modules
│ 
├── package.json
│
├── public
│   └── assets
│       ├── css
│       │   └── burger_style.css
│       └── img
│           └── burger.png
│   
│
├── server.js
│
└── views
    ├── index.handlebars
    └── layouts
        └── main.handlebars
			
			
### Graphical User Interface:
---------------------------------
