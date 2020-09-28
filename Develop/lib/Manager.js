// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
//resources: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/extends
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/super
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes

const Employee = require("./Employee");

class Manager extends Employee() {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.title = "Manager";
    this.officeNumber = officeNumber;
  }
}

module.exports = Manager;
