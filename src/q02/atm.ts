const balance = process.argv[2];
const amount = process.argv[3];
if(balance===undefined||amount===undefined||balance===''||amount===''){
    console.log(`Invalid Input`);
    process.exit();
}
let ba = Number(balance);
let am = Number(amount);
if(Number.isNaN(ba)||Number.isNaN(am)){
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