const fs = require("fs/promises");
const fileName = "myfile.txt";
const fileContent = "Newton School";
const writeFile = async (fileName, fileContent) => {
    //Write your code here
    //Don't change function name
    if()
    fs.writeFileSync(fileName,fileContent);
  
};
module.exports =  writeFile ;
