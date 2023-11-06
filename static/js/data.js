const { displayAlert } = require("./alert");


/*function extractAnswer(event) {
  event.preventDefault();
  fetchAnswersData(event.target.answerInput.value);
  event.target.answerInput.value = "";
}*/

function addAnswer(answer) {
 
}

function fetchAnswerData(fruit) {
  fetch(``)
    .then(processResponse)
    .then((data) => {
      addAnswer(data);
    })
    .catch((e) => console.log(e));
}

function processResponse(resp) {
  if (resp.ok) {
    return resp.json();
  } else {
    displayAlert(resp)
    throw "Error: http status code = " + resp.status;
  }
}

module.exports = { extractAnswer };