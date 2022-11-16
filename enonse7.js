let fraz="Ranplase tout karakte ki plase devan yon vwayel pa asteriks";
let Fraz=fraz.split("");
let newFraz=[];
let vwayel="aeiouy";

for(let i=0; i<Fraz.length;i++){
    if(vwayel.includes(Fraz[i])){
        Fraz[i-1]='*';
    }
}
newFraz= Fraz.join("");

console.log(newFraz);