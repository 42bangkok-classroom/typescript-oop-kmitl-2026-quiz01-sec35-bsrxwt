const number = Number(process.argv[2]);
if(Number.isNaN(number)||number<=0){
    console.log(`Invalid Input`);
    process.exit();
}
if(number%1!==0){
    console.log(`Invalid Input`);
    process.exit();
}
for(let i=1;i<=number;i++){
if(i%3===0 && i%7===0){
    console.log(`FooBar`);
}else if(i%3===0){
    console.log(`Foo`);
}else if(i%7===0){
    console.log(`Bar`);
}else{
    console.log(`${i}`);
}
}