# React-Exercises
Repository for react exercises

# Day 1

1. Create a class Student having two fields name and roll number and a method to print the student detail. Create two objects of the class and use display method to print the user detail. perform the above tast using **ES6**

2. Create a simple component called HelloWorld. This component only renders "Hello World" on the screen

* Create a component called "Header" which either displays the current logged in username (if a user is logged in) or a "Login" button (if no user is logged in) in the navbar.
Use a hardcoded global variable "isUserLoggedIn" to check if user is logged in or not. 

**NOTE**: use ternary operator to achieve this 

* Create a component called "Users". Use the below mentioned list to display user details for all the users.

```json[
  {
    "_id": "58613042d144513fd8c03bbc",
    "isActive": true,
    "age": 38,
    "name": "Noelle Finch",
    "gender": "female",
    "email": "noellefinch@codax.com"
  },
  {
    "_id": "58613042f1ddd22998f7c02f",
    "isActive": false,
    "age": 40,
    "name": "Dominique Middleton",
    "gender": "female",
    "email": "dominiquemiddleton@codax.com"
  },
  {
    "_id": "58613042b6f22acfb34097da",
    "isActive": true,
    "age": 21,
    "name": "Beulah Hoover",
    "gender": "female",
    "email": "beulahhoover@codax.com"
  },
  {
    "_id": "5861304228670a96b75bde35",
    "isActive": false,
    "age": 26,
    "name": "Casey Acosta",
    "gender": "male",
    "email": "caseyacosta@codax.com"
  },
  {
    "_id": "586130424d77931fe3e26704",
    "isActive": true,
    "age": 36,
    "name": "Kathleen Parsons",
    "gender": "female",
    "email": "kathleenparsons@codax.com"
  },
  {
    "_id": "58613042b81ed4aea4f8bdd1",
    "isActive": true,
    "age": 32,
    "name": "Tami Morse",
    "gender": "female",
    "email": "tamimorse@codax.com"
  },
  {
    "_id": "5861304235cd4776fd7ce5a7",
    "isActive": false,
    "age": 28,
    "name": "Annette Whitaker",
    "gender": "female",
    "email": "annettewhitaker@codax.com"
  }
]
```

* Create a component called BasicPage. This component should internally use 3 components namely "Header", "Content" and "Footer".
The "Header" component should render the header of the page
The "Footer" component should render the footer of the page
The "Content" should render some dummy text
Use the above mentioned 3 components to create a basic page

* Abstract away the map logic from the above created component "Users" into a new component called "UserDetail". Use this new component for every user in the above list and refactor the "Users" component to use "UserDetail" inside it.

* Create a page called UserPage. Use the "Header", "Users" and "Footer" components created above to create a complete page for the user details including header, footer and the content.
