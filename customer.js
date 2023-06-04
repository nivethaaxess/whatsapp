
// // Requiring the module
// const reader = require('xlsx')
// // Reading our test file
// const file = reader.readFile('./customer.xlsx')
// let data = []
// const sheets = file.SheetNames

// for(let i = 0; i < sheets.length; i++)
// {
//    const temp = reader.utils.sheet_to_json(file.Sheets[file.SheetNames[i]])
//    temp.forEach((res) => {
//       data.push(res)
//    })
// }
  
// // Printing data
// console.log(data)











// const accountSid = 'AC980688e6bd83d51a050de40f7f6888a4';
// const authToken = '2eb9984cd36ae6413eceeb17089e47a0';
// const client = require('twilio')(accountSid, authToken);

// async function sendWhatsAppMediaMessage(to, mediaUrl, caption) {
//     try {
//       const message = await client.messages.create({
//         from: 'whatsapp:+918015992830',
//         to: `whatsapp:${to}`,
//         body: caption,
//         mediaUrl: mediaUrl
//       });
  
//       console.log(`Message sent. SID: ${message.sid}`);
//     } catch (error) {
//       console.error(`Error sending message: ${error}`);
//     }
//   }
//   sendWhatsAppMediaMessage('+919003081075', 'https://tse3.mm.bing.net/th?id=OIP.iSu2RcCcdm78xbxNDJMJSgHaEo&pid=Api&P=0&h=180', 'Check out this image!');


// const ExcelJS = require('exceljs');

// // Read the Excel file
// const workbook = new ExcelJS.Workbook();
// workbook.xlsx.readFile('customer.xlsx')
//   .then(() => {
//     // Select the first sheet
//     const worksheet = workbook.getWorksheet(1);

//     // Regular expression to match phone numbers
//     const phoneNumberRegex = /\b\d{3}[-.]?\d{3}[-.]?\d{4}\b/g;

//     // Array to store matched phone numbers
//     const phoneNumbers = [];

//     // Iterate over each row in the worksheet
//     worksheet.eachRow((row, rowNumber) => {
//       // Iterate over each cell in the row
//       row.eachCell((cell, colNumber) => {
//         const cellValue = cell.value;

//         // Check if the cell value matches the phone number regex
//         if (typeof cellValue === 'string' && phoneNumberRegex.test(cellValue)) {
//           // Add the matched phone number to the array
//           phoneNumbers.push(cellValue);
//         }
//       });
//     });

//     // Output the extracted phone numbers
//     console.log(phoneNumbers);
//   })
//   .catch(err => {
//     console.error('Error reading the Excel file:', err);
//   });


console.log("helooo")