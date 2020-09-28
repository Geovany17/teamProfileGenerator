// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.

//resources: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/extends
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/super
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes

const Employee = require("./Employee");

class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;
    this.title = "Intern";
  }

  getSchool() {
    return this.school;
  }
}

module.exports = Intern;
