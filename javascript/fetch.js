const myImage = document.querySelector('img');
const myRequest = new Request('../images/nahida_draw.png');

/*
fetch(myRequest)
.then(function(response) {
  return response.blob();
})
.then(function(myBlob) {
  const objectURL = URL.createObjectURL(myBlob);
  myImage.src = objectURL;
});
*/

fetch(myRequest).then(response => {
  if(response.ok) {
    response.blob().then(myBlob => {
      var objectURL = URL.createObjectURL(myBlob);
      myImage.src = objectURL;
    });
  } else {
    console.error('Mauvaise réponse du réseau');
  }
})
.catch(function(error) {
  console.error('Il y a eu un problème avec l\'opération fetch: ' + error.message);
});