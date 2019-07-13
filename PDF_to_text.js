var pdfUtil = require('pdf-to-text');
const fs = require('fs');
var pdf_path = "Books_I_Like/war-and-peace.pdf";


// Data which will write in a file. 
 
 
pdfUtil.info(pdf_path, function(err, info) {
    if (err) throw(err);
    console.log(info);
});
 

//Omit option to extract all text from the pdf file
pdfUtil.pdfToText(pdf_path, function(err, data) {
  if (err) throw(err);
  console.log(data); //print all text   
  PDF_fertig_generiert = true;
  console.log('true');
  // Write data in 'Output.txt' . 
fs.writeFile('text_files/Output.txt', data, (err) => { 
      
    // In case of a error throw err. 
    if (err) 
    {throw err; 
    }

    console.log('done creating a text file');
})
});


 




