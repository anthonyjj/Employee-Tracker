const inquirer = require("inquirer");
const mysql = require("mysql2");
const cfonts = require ('cfonts');

const connection = mysql.createConnection({
    host: "localhost",
    port: 
    user: "",
    password: "",
    database: "",
});

connection.connect((err) => {
    if (err) throw err;
    console.log("Connected to the database!");
    start();
});

cfonts.say('Employee Manager', {
    font: 'block',
    align: 'center',
    colors: ['white'],
    background: 'transparent',
    letterSpacing: 1,
    lineHeight: 1,
    space: true,
    maxLength: '0',
    gradient: false,
    independentGradient: false,
    transitionGradient: false,
    env: 'node'
});

function start () {
    inquirer
        .prompt({
            type:"list",
            name: "pick",
            message: "What would you like to do?",
            choices: [
                "View all departments",
                "view all employees",
                "add a department",
                "add an employee",
                "Add a Manager",
                "Delete Departments | Role | Employees",
                "View Employees by Department",
                "Update an employee role",
                "Exit",
            ],
        })
        .then((answer) => {
            
        })
}

