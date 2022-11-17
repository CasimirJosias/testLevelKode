let tab=[10,15,1,2,3,4,5,6,7,8,9,11];
min=tab[0];
max=tab[0];
for(let i=0; i<tab.length;i++){
    if(tab[i]<min){
        min=tab[i];
    }
    if(tab[i]> max){
        max=tab[i];
    }
}

console.log("Min:"+min);
console.log("Max:"+max);