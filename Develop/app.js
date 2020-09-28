const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
function runInquirer() {
  const promptArray = [
    {
      type: "input",
      message: "What is your name?",
      name: "name",
    },
    {
      type: "input",
      message: "What is your ID?",
      name: "id",
    },
    {
      type: "input",
      message: "What is your email?",
      name: "email",
    },
    {
      type: "list",
      message: "What is your title",
      choices: ["Manager", "Engineer", "Intern"],
      name: "title",
    },
  ];

  return inquirer.prompt(promptArray);
}

function runInquirerManager() {
  const promptArray = [
    {
      type: "input",
      message: "What is your office number?",
      name: "office number",
    },
  ];

  return inquirer.prompt(promptArray);
}

function runInquirerEngineer() {
  const promptArray = [
    {
      type: "input",
      message: "What is your github?",
      name: "github",
    },
  ];

  return inquirer.prompt(promptArray);
}

function runInquirerIntern() {
  const promptArray = [
    {
      type: "input",
      message: "What school do you attend?",
      name: "school",
    },
  ];

  return inquirer.prompt(promptArray);
}

async function run() {
  let employeeArray = [];

  const maxTimes = 4;

  for (i = 0; i < maxTimes; i++) {
    const promise = new Promise((resolve, reject) => {
      runInquirer()
        .then(function ({ name, id, email, title }) {
          if (title === "Manager") {
            runInquirerManager().then(function (officeNumber) {
              this.Employee = new Manager(name, id, email, officeNumber);

              console.log(officeNumber);

              employeeArray.push(Employee);

              resolve("done");
            });
          } else if (title === "Engineer") {
            runInquirerEngineer().then(function ({ github }) {
              this.Employee = new Engineer(name, id, email, github);

              console.log(github);

              employeeArray.push(Employee);

              resolve("done");
            });
          } else if (title === "Intern") {
            runInquirerIntern().then(function ({ school }) {
              this.Employee = new Intern(name, id, email, school);

              console.log(school);

              employeeArray.push(Employee);

              resolve("done");
            });
          }
        })

        .catch(function (err) {
          console.log("There was an error.");

          console.log(err);
        });
    });

    const result = await promise;

    console.log(result);
  }
}
// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
