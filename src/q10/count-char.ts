const str = process.argv[2];
if(!str||str.length===0){
    process.exit();
}
let ltcounted:number = 0;
let dgcounted:number = 0;
let otcounted:number = 0;
for(let i=0;i<str.length;i++){
    if((str[i]>='a'&&str[i]<='z')||(str[i]>='A'&&str[i]<='Z')){
        ltcounted++;
    }else if(str[i]>='0'&&str[i]<='9'){
        dgcounted++;
    }else{
        otcounted++;
    }   
}
console.log(`Letters: ${ltcounted}`);
console.log(`Digits: ${dgcounted}`);
console.log(`Others: ${otcounted}`);