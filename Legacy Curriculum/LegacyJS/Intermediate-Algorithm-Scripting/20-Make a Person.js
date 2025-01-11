const Person = function (first, last) {
  let firstName = first;
  let lastName = last;

  this.getFirstName = function () {
    return firstName;
  };

  this.getLastName = function () {
    return lastName;
  };

  this.getFullName = function () {
    return firstName + " " + lastName;
  };

  this.setFirstName = function (str) {
    firstName = str;
  };

  this.setLastName = function (str) {
    lastName = str;
  };

  this.setFullName = function (first, last) {
    firstName = first;
    lastName = last;
  };
};
