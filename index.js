import inquirer from 'inquirer';
import qr from "qr-image";
import fs from "fs";

// 1. Use the inquirer npm package to get user input.

inquirer
  .prompt([
    {
        name: "URL",
        message: "Enter the url",
    }
  ])
  .then((answers) => {
    const url = answers.URL;

    // 2. Use the qr-image npm package to turn the user entered URL into a QR code image.

    var qr_png = qr.image(url);
    qr_png.pipe(fs.createWriteStream('qrCode.png')); 

    // 3. Create a txt file to save the user input using the native fs node module.

    fs.writeFile('myUrl.txt', url, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
      }); 

  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  }); 

  // inquirer
  // .prompt([
  //   {
  //       name: "NAME",
  //       message: "Enter your name: ",
  //   }
  // ])
  // .then((answers) => {
  //   const url = answers.NAME;
  //   console.log(url);


  // })
  // .catch((error) => {
  //   if (error.isTtyError) {
  //     // Prompt couldn't be rendered in the current environment
  //   } else {
  //     // Something else went wrong
  //   }
  // }); 


