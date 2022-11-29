const image = document.querySelector(`img`);
const request1 = new Request(`../images/nahida_draw.png`);

if (window.fetch) {
  fetch(request1)
	.then(response => {
    if(response.ok)
      return response.blob();
		else
      console.error(`Mauvaise réponse du réseau`);
  })
	.then(blob => {
		var objectURL = URL.createObjectURL(blob);
		image.src = objectURL;
	})
  .catch(error => {
		console.error(`Il y a eu un problème avec l'opération fetch: ` + error.message)
	});
}
else {
  console.error(`L'api fetch n'est pas implémenter pour cette version de votre client web`);
}

const request2 = new Request(`../json/superhero.json`);

if (window.fetch) {
	fetch(request2)
	.then(response => {
		if(response.ok)
			return response.json();
		else
			console.error(`Mauvaise réponse du réseau`);
	})
	//	Conversion des tableaux .json en object literal javascript.
	.then(data => {
		data.members.forEach(member => {
			console.log(`>\\O-o/>------------------------<\\o-O/<`);
			console.log(`name: ` + member.name);
			console.log(`age: ` + member.age);
			console.log(`secretIdentity: ` + member.secretIdentity);
			let i = 1;
			member.powers.forEach(power => {
				console.log(`power` + i++ + `: ` + power);
			});
		});
	})
	.catch(error => {
		console.error(`Il y a eu un problème avec l'opération fetch: ` + error.message);
	});
}
else {
	console.error(`L'api fetch n'est pas implémenter pour cette version de votre client web`);
}