const number = Number(process.argv[2]);
if(Number.isNaN(number)||number<=0){
    console.log(`Invalid Input`);
    process.exit();
}
if(number%1!==0){
    console.log(`Invalid Input`);
    process.exit();
}
if(number%3===0 && number%7===0){
    console.log(`Foobar`);
}else if(number%3===0){
    console.log(`Foo`);
}else if(number%7===0){
    console.log(`Bar`);
}else{
    console.log(`Invalid Input`);
}