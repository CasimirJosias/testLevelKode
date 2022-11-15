let chen="5 45 123 12";
let result;
let multiplication=1;
chen=chen.split(' ');
console.log(chen);
for(let i=0;i<chen.length;i++){
    result=0;
    for(let j=0;j<chen[i].length;j++){
        result+=Number(chen[i][j]);
    }
    multiplication=multiplication*result;
}
console.log(multiplication);