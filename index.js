const inquirer = require('inquirer');
const fs = require('fs');

//writes to file in examples folder
const saveSVG = (mySVG) => {
    fs.writeFile('./examples/logo.svg', mySVG, (err) => {
        console.log(err)
    });
};

//solves for shape to pass
const shapeSolver = (shape) => {
    if (shape === 'Circle') {
        return 'circle cx="50" cy="45" r="45"'
    }
    else if (shape === 'Triangle') {
        return 'polygon points="50,0 100,50 0,50"'
    }
    else return 'rect width="100" height="100"'

}


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
    const shape = shapeSolver(data.shape);
    const mySVG = `<svg width="100" height="100">
  <${shape} fill="${data.shapeColor}" />

<text x="50" y="50" font-size="40" text-anchor="middle" fill="${data.characterColor}">${data.characters}</text>

  </svg>
`
//then save to a .svg in examples
    saveSVG(mySVG);
});



