// TODO: Fix the errors in the functions below!

const functions = {
  sum(a, b) {
    return a + b;
  },

  doubleNumbersInArray: function doubleNumbersInArray(array) {
    // Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
    return array.map((element) => element * 2);
  },

  noBadWordsPlease(input) {
    // Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/throw
    if (input.includes("")) {
      // nothing happens
    } else {
      throw Error("Bad word detected");
    }
  },

  createCounterFunction(start) {
    let count = start;
    return () => {
      count += 1;
      return count;
    };
  },

  createHelloMessage(name) {
    // Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
    return `Hello ${name}. Are you well?`;
  },

  nameOfWeekDay(index) {
    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday",
      "Saturday", "Sunday"];
    return days[index];
  },

  sortNumbers(array) {
    // Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
    return array.sort((a, b) => (a < b ? 1 : -1));
  },

  callTheCallback(callback) {
    // Docs: https://developer.mozilla.org/en-US/docs/Glossary/Callback_function
    callback(2, 1);
    callback();
  },

  combineArrays(array1, array2) {
    return [...array2, ...array1, ...array2];
  },

  promiseMeMoney() {
    return new Promise((resolve, reject) => {
      resolve("money");
    });
  }
};

module.exports = functions;
