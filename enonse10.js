// let st= localStorage.setItem('salt','web-insecure;34829sjdfnsj32984madskj');
let stokaj= window.localStorage; 
console.log(stokaj);
let tab=[];
let salt=window.localStorage.getItem('salt');
salt=salt.split(";");
salt=salt[1];
console.log(salt);