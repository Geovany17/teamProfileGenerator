// TODO: Write code to define and export the Employee class

//resources: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/extends
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/super
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes

class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.title = "Employee";
  }

  getName() {
    return this.name;
  }

  getId() {
    return this.id;
  }

  getEmail() {
    return this.email;
  }

  getRole() {
    return this.title;
  }
}
module.exports = Employee;
