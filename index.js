//const { Triangle, Circle, Square } = require('./lib/shapes');

const inquirer = require('inquirer');
const fs = require('fs');

const saveSVG = (mySVG) => {
    fs.writeFile('./examples/logo.svg', mySVG, (err) => {
        console.log(err)
    });
};

inquirer.prompt([
    {
        type: 'input',
        message: 'Enter up to 3 characters to display in the logo',
        name: 'characters'
    },
    {
        type: 'input',
        message: 'Enter a color by keyword (red, blue, etc.) or hex value for the characters:',
        name: 'characterColor'
    },
    {
        type: 'list',
        message: 'Choose a shape from the following:',
        choices: ['Triangle', 'Circle', 'Square'],
        name: 'shape'
    },
    {
        type: 'input',
        message: 'Enter a color by keyword (red, blue, etc.) or hex value for the shape:',
        name: 'shapeColor'
    }
])

//take user data, insert as template literals to make text, shape, colors
.then((data) => {
    console.log(data)
    const mySVG = `<svg width="100" height="100">
  <${data.shape} cx="50" cy="50" r="40" fill="${data.shapeColor}" />

<text x="100" y="75" font-size="40" text-anchor="middle" fill="${data.characterColor}">${data.characters}</text>

  </svg>
`
//then save to a .svg in examples
    saveSVG(mySVG);
});




