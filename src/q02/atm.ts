const balance = process.argv[2];
const amount = process.argv[3];
let ba = Number(balance);
let am = Number(balance);
if(balance===''||amount===''){
    console.log(`Invalid Input`);
    process.exit();
}
else if(Number.isNaN(ba)||Number.isNaN(am)){
    console.log(`Invalid Input`);
    process.exit();
}
if(am>ba){
    console.log(`Insufficient balance`);
}else if(am>5000){
    console.log(`Exceeds per-withdrawal limit`);
}else{
    console.log(`Withdrawal approved`);
}