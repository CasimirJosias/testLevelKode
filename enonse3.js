let nom=prompt("Antre non w");
nom=nom.split(' ');
for(let i=0; i<nom.length; i++){
    nom[i]=nom[i][0].toUpperCase()+nom[i].substring(1).toLowerCase();
}
nom=nom.join(' ');
console.log(nom);

