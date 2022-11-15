
let ip;
let newIp=[];
let sum=0;
do{
    ip=prompt("Antre adres ip a");
}while(ip=='');
ip=ip.split('.');
newIp=ip.join('');
for(let i=0;i<newIp.length;i++){
    sum+=Number(newIp[i])*newIp[0];
}

console.log(sum);
// console.log(ip);

