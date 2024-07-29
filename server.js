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
                "View all employees",
                "Add a department",
                "Add an employee",
                "Add a Manager",
                "Delete Departments | Role | Employees",
                "View Employees by Department",
                "Update an employee role",
                "Exit",
            ],
        })
        .then((answer) => {
            switch (answer.action) {
                case "View all departments":
                    viewAllDepartments();
                    break;
                case "View all employees":
                    viewAllEmployees();
                    break;
                case "Add a department":
                    addDepartment();
                    break;
                case "Add an employee":
                    addEmployee();
                    break;
                case "add a manager":
                    addManager();
                    break;
                case "Delete Departments | Role | Employees":
                    deleteDepartmentsRolesEmployees();
                    break;
                case "View employees by department":
                    viewemployeesdepartment();
                    break;
                case "Update an employee role":
                    updaterole();
                    break;
                case "Exit":
                    connection.end();
                    console.log("Goodbye");
                    break;
            }
        });
}

function viewAllDepartments() {
    const query ="SELECT * FROM departments";
    connection.query =(query, (err, res) => {
        if (err) throw err;
        console.table(res);
        start();
    }); 
}

