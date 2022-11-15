let a=2, b=3;
let tab=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
let total=0,total2=0,total3=0,total4=0;
let tabNonb1=[], tabNonb2=[], tabNonb3=[], tabNonb4=[];
for(let i=0;i<tab.length;i++)
{
    if(tab[i]%a==0 && tab[i]%b!=0){
        total=total+1;
        tabNonb1.push(tab[i]);
    }else if(tab[i]%a!=0 && tab[i]%b==0){
        total2=total2+1;
        tabNonb2.push(tab[i]);
    }else if(tab[i]%a==0 &&  tab[i]%b==0){
        total3=total3+1;
        tabNonb3.push(tab[i]);
    }else{
        total4=total4+1;
        tabNonb4.push(tab[i]);
    }

}

console.log("Miltip 2, men ki pa miltip 3:"+tabNonb1+"->Total nonb:"+total);
console.log("Miltip 3, men ki pa miltip 2:"+tabNonb2+" ->Total nonb:"+total2);
console.log("Miltip 2 ak 3:"+tabNonb3+"->Total nonb:"+total3);
console.log("Ki pa miltip ni 2 ni 3:"+tabNonb4+"->Total nonb:"+total4);