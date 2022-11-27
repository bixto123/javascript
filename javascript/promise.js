/*
// Part I

// fonction avec deux callbacks attacher.
function dothat(successCallback, failureCallback){
  console.log("C'est fait");
  // réussir une fois sur deux
  if (Math.random() > .5) {
    successCallback("Reussite");
  } else {
    failureCallback("Echec");
  }
}

function successCallback(result) {
  console.log("L'opération a réussi avec le message : " + result);
}

function failureCallback(error) {
  console.error("L'opération a échoué avec le message : " + error);
}

// Chainage de fonctions asynchrones
dothat(function () {
  dothat(function () {
    dothat(successCallback, failureCallback);
    return successCallback;
  }, failureCallback);
  return successCallback;
}, failureCallback);
*/

/*
// Part II

// Fonction qui renvoie une promesse avec deux callbacks attacher.
function dothat(){
  return new Promise((successCallback, failureCallback) => {
    console.log("C'est fait");
    // réussir une fois sur deux
    if (Math.random() > .5) {
      successCallback("Reussite");
    } else {
      failureCallback("Echec");
    }
  })
}

function successCallback(result) {
  console.log("L'opération a réussi avec le message : " + result);
}

function failureCallback(error) {
  console.error("L'opération a échoué avec le message : " + error);
}

// Assignation et de l'object promise par reference à la constante promise
const promise = dothat();

// Chainage de fonctions asynchrones
promise
.then(function (result) {
  console.log("L'opération numéro 1 a réussi avec le message : " + result);
  return dothat();
})
.then(function (result) {
  console.log("L'opération numéro 2 a réussi avec le message : " + result);
  return dothat();
})
.then(function (result) {
  console.log("L'opération numéro 3 a réussi avec le message : " + result);
})
.catch(failureCallback);

// Chainage de fonctions asynchrones
promise
.then(result => {
  console.log("L'opération numéro 1 a réussi avec le message : " + result);
  return dothat();
})
.then(result => {
  console.log("L'opération numéro 2 a réussi avec le message : " + result);
  return dothat();
})
.then(result => {
  console.log("L'opération numéro 3 a réussi avec le message : " + result);
})
.catch(failureCallback);
*/

/*
// Part III
new Promise((resolve, reject) => {
    console.log('Initial');

    resolve();
})
.then(() => {
    throw new Error('Something failed');

    console.log('Do this');
})
.catch(() => {
    console.error('Do that');
})
.then(() => {
    console.log('Do this whatever happened before');
});
*/

// Part IV

function dothat(){
  return new Promise((successCallback, failureCallback) => {
    console.log("C'est fait");
    // réussir une fois sur deux
    if (Math.random() > .5) {
      successCallback("Reussite");
    } else {
      failureCallback("Echec");
    }
  })
}

function successCallback(result) {
  console.log("L'opération a réussi avec le message : " + result);
}

function failureCallback(error) {
  throw new Error("L'opération a échoué avec le message : " + error);
}

/*
try {
  const result = dothat();
  const newResult = dothat(result);
  const finalResult = dothat(newResult);
  console.log('Résultat final : ' + finalResult);
} catch(error) {
  console.error(error);
}
*/

async function toto() {
  try {
    const result = await dothat();
    const newResult = await dothat(result);
    const finalResult = await dothat(newResult);
    console.log('Résultat final : ' + finalResult);
  } catch(error) {
    failureCallback(error);
  }
}

toto();