const fs = require("fs/promises");
const fileName = "myfile.txt";
const fileContent = "Newton School";
const writeFile = async (fileName, fileContent) => {
    //Write your code here
    //Don't change function name
    fs.writeFile(fileName,fileContent,(err)=>{
        if(err){
            console.log(err);
        }
    });
  
};
module.exports =  writeFile ;
