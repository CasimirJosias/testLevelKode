let tab=[0,1,2,3,4];
let n=3;
let t;
for(let i=0; i<tab.length;i++){
    if(i==0){
        tab=tab.reverse();
    }else{
        tab=tab.join('');
        a=tab.substring(tab.length-Number(i));
        t=tab.substring(0,tab.length-Number(i));
        t=t.split('').reverse().join('');
        t=t+""+a;
        tab=t.split('');
    }
    if(i==tab.length-2){
        break;
    }
}

console.log(tab.indexOf('3'));
console.log(tab);