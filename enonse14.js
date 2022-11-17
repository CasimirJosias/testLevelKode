/*pou w teste l,ou k just ranplase a al b pa vale sa yo kite nan enonse a
a=2
b=16            output:4
---
a=3
b=24            output:4
----
a=1
b=1             output:0.5
*/

let a=1;
let b=1;
let result;
if(a>b){
    result=a/b;
    result=result/2;
}else if(a<b){
    result=b/a;
    result=result/2;
}else{
    result=a/b;
    result=result/2;
}

console.log('OutPut:'+result);