# Text-to-speech creating audiobooks with Google API 
This repository contains code parts and instructions on how to start with creating your own audiobook files. It is based on the Google text-to-speech API

In addition to that it has a code part where you can transform pdf into txt on your local PC that i wrote myself

You can read about the inspiration, the struggles i had and more accurate information in the repository in the ML_Blog_Post_Susanne.pdf file. 

## Starting
In the following i will shortly list up erery step you need to do to create an audio file using the Google text-to-speech API 

```
1. collect PDF-books you like 
2. create an Google account and sign up at at the Google Cloud Machine Learning platform (they will ask for your Credit Card).
   I was able to avoid this by using a university lience
3. Create a new project on the platform 
4. Download your JSON verification from Google
5. Download the Repository and put it into a local folder 
6. open you command line and navigate into this folder
7. change the pathnames in the code so they fit to your files system
```

## Downloads 

The next thing is to install all the node modules you need for the text-to-speech application 

```
npm install file-system --save
npm install pdf-to-text
npm install util
npm install node-fetch --save
npm install FileReader
```
## Creating a .txt file from a pdf 

Open the PDF_to_text.js Code in your IDE and chance: 
var pdf_path = "Books_I_Like/cfordummies.pdf"; into a book you like and the right path. 
Then run the code in the command line with the following command:
```
node PDF_to_text.js 
```
this will create a Output.txt file in the text_files folder 

## Creating a mp3 file with your text 

Open the Code text-to-speech.js and look for the " var text =''; " variable 
Then copy the text from the text File you just created and paste it into the variable.
This is very clumpsy and funky way to do it but i still havnt found a different way to do it. 

VERY IMPORTANT: before you run the text-to-speech.js Code you need to verify with you JSON verification 
by opening the command line and use the following command:
```
set GOOGLE_APPLICATION_CREDENTIALS=./nameOfYourJsonFile.json
```
Now can run the code with this command: 

```
node text-to-speech.js
```
this will creat a Output.mp3 file that you can listen to 

## Text Summary

I used this code to summarize my text, you will need a coupke of hours to install and get this code to run if you havn't worked wit tensorflow, google Colab or Python before. It was my first time working with these instances so i took me a while to get into it. 

```
https://github.com/theamrzaki/text_summurization_abstractive_methods/tree/master/Implementation%20A%20(seq2seq%20with%20attention%20and%20feature%20rich%20representation)/Model%202
```
if you want to skip the self programming part you can upload you text here:

```
http://eazymind.herokuapp.com/arabic_sum/
```

## Contributing 

Any pull requests are very welcome. There is one problem that i'm hoping to solve with the community. The problem is, that i still can't pass on .txt files to the Google API. It either has to do with async function or the content of the txt file. I'm open for help. :) 

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)

[Google Cloud Platform](https://cloud.google.com/ml-engine/?hl=de) 


