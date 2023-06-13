//const { Triangle, Circle, Square } = require('./lib/shapes');

const inquirer = require('inquirer');
const fs = require('fs');

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

//then take that obj and use data.whatever to fill in the calculation for the svg gen
.then((data) => {
    console.log(data)
})