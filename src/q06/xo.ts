const input = Number(process.argv[2]);
if (Number.isNaN(input)||input <= 0) {
  console.log("Invalid Input");
  process.exit();
}
for(let row=0;row<input;row++){
    let line = '';
    for(let col=0;col<input;col++){
        if(row===0||row===input-1||col===0||col===input-1){
            line += 'X';
        }else{
            line += 'O';
        }
    }
    console.log(line);
}