let alfabe="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let number='1234567890';
let fraz="<1T >7H >3C <5Y >13J <2C <5W >4A",chen=[],idx;
fraz=fraz.split(' ');
for(let i=0; i<fraz.length; i++){
  let d=[];
    for(let j=0; j<fraz[i].length; j++){
      if(number.includes(fraz[i][j])){
        d.push(fraz[i][j]); 
      }
      if(alfabe.includes(fraz[i][j])){
        idx=Number(alfabe.indexOf(fraz[i][j]));
      }
    }
    d=Number(d.join(''));
    if(fraz[i][0]=='>'){
      chen.push(alfabe[idx+d]);
    }else{
        chen.push(alfabe[idx-d]);
    }
}
chen=chen.join('');
console.log("sekans sa "+fraz+" bay : "+chen);
