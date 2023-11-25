const figlet = require('figlet');

const textToArt = 'Hello, Figlet!';

const options = {
  font: 'Standard',
  horizontalLayout: 'default',
  verticalLayout: 'default'
};

figlet(textToArt, options, (err, data) => {
  if (err) {
    console.log('Algo salió mal...');
    console.dir(err);
    return;
  }
  console.log(data);
});
