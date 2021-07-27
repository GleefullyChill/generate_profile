const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const surveyAnswers = [];



rl.question('What\'s your name? Nicknames are also acceptable :) ', (answer) => {
  // TODO: Log the answer in a database
  surveyAnswers.push(answer);

  rl.question('What\'s an activity you like doing? ', (answer) => {
  // TODO: Log the answer in a database
    surveyAnswers.push(answer);
  
  rl.question('What do you listen to while doing that? ', (answer) => {
    // TODO: Log the answer in a database
    surveyAnswers.push(answer);
  
  rl.question('Which meal is your favourite (eg: dinner, brunch, etc.) ', (answer) => {
      // TODO: Log the answer in a database
    surveyAnswers.push(answer);
  
  rl.question('What\'s your favourite thing to eat for that meal? ', (answer) => {
      // TODO: Log the answer in a database
    surveyAnswers.push(answer);
  
  rl.question('Which sport is your absolute favourite? ', (answer) => {
      // TODO: Log the answer in a database
    surveyAnswers.push(answer);
  
  rl.question('What is your superpower? In a few words, tell us what you are amazing at! ', (answer) => {
  // TODO: Log the answer in a database
    surveyAnswers.push(answer);
  
  console.log(`Oh Man! that's amazing ${surveyAnswers[0]}!\nYou listen to ${surveyAnswers[2]}, while ${surveyAnswers[1]}, and that's so cool!`);
  console.log(`And it's such an amzing coincidence! I also love to eat ${surveyAnswers[4]} for ${surveyAnswers[3]}!\nDo you think you could ${surveyAnswers[6]} while playing ${surveyAnswers[5]}? That would be quite the sight!`)
  
  rl.close();

})})})})})})});