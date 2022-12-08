const greetPerson = function (person) {
  console.log(`Hi ${person}, how are you?`);
};

const personEmail = "moarsh861@gmail.com";

module.exports.myEmail = personEmail; //make public to which you 
module.exports.myFunction = greetPerson; //want to use
