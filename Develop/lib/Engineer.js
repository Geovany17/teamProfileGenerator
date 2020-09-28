// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
//resources: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/extends
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/super
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes

const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    this.title = "Engineer";
    this.github = github;
  }
  getGithub() {
    return this.github;
  }
}
module.exports = Engineer;
