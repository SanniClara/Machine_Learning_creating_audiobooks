// Imports the Google Cloud client library
const textToSpeech = require('@google-cloud/text-to-speech');
const fs = require('fs');
const util = require('util');
const fetch = require('node-fetch');
const File = require('FileReader'); 
var content;
var data;
var text;




async function main() {

await text == fs.readFile('text_files/Output.txt', function read(err, data) {
  if (err) 
      throw err;
    // Invoke the next step here however you like
    // Or put the next step in a function and invoke it
});
//console.log(text); 
  // Creates a client
  const client = new textToSpeech.TextToSpeechClient();
  
  // The text to synthesize
  //const text =  'Now, the other thing: In addition to recognizable objects, the researchers also brought people into the room. Four women, actresses—two of them of European descent, which is to say, under white light people with color-normal vision identify their skin as being on the lighter side of the distribution, with more pinks and cream tones. And two of them were of African descent, so under white light most people identify their skin as being darker, with more browns and deeper reddish shades. Are the distributions wide? Yes. Is this racially fraught? Probably. But stick with me, because then the researchers switched from white light to low-pressure sodium.';
  //console.log('debugger');
  // Construct the request
  
  const request = {
    input: {text: text},
    // Select the language and SSML Voice Gender (optional)
    voice: {languageCode: 'en-US', ssmlGender: 'FEMALE'},
    // Select the type of audio encoding
    audioConfig: {audioEncoding: 'MP3'},
  };


  // Performs the Text-to-Speech request
  const [response] = await client.synthesizeSpeech(request);

  // Write the binary audio content to a local file
  const writeFile = util.promisify(fs.writeFile);
  await writeFile('output.mp3', response.audioContent, 'binary');
  console.log('Audio content written to file: output.mp3');

}


main();


