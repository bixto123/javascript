function dothat(){
  return new Promise((successCallback, failureCallback) => {
    console.log("C'est fait");
    // réussir une fois sur deux
    if (Math.random() > .5) {
      successCallback("Reussite");
    } else {
      failureCallback("Echec")
    }
  })
}

function successCallback(result) {
  console.log("L'opération a réussi avec le message : " + result);
}

function failureCallback(erreur) {
  console.log("L'opération a échoué avec le message : " + erreur);
}

const promise = dothat();
const promise1 = promise.then(successCallback, failureCallback);
const promise2 = promise.then(successCallback, failureCallback);
const promise3 = promise.then(successCallback, failureCallback);