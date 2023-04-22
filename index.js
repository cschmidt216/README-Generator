import inquirer from 'inquirer';
import fs from 'fs';

inquirer
  .prompt([
    {
      type: 'input',
      name: 'projectTitle',
      message: 'What is the title of your project?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Please provide a brief description of your project:',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Please provide installation instructions for your project:',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Please provide usage information for your project:',
    },
    {
      type: 'list',
      name: 'license',
      message: 'Which license would you like to use?',
      choices: ['MIT', 'Apache 2.0', 'GPLv3', 'BSD 3-Clause'],
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'Please provide guidelines for contributing to your project:',
    },
    {
      type: 'input',
      name: 'tests',
      message: 'Please provide instructions for testing your project:',
    },
    {
      type: 'input',
      name: 'githubUsername',
      message: 'What is your GitHub username?',
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your email address?',
    },
  ])
  .then((answers) => {
    const {
      projectTitle,
      description,
      installation,
      usage,
      license,
      contributing,
      tests,
      githubUsername,
      email,
    } = answers;

    const readmeContent = `# ${projectTitle}

${description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation

${installation}

## Usage

${usage}

## License

![${license} License](https://img.shields.io/badge/license-${encodeURIComponent(
      license
    )}-blue.svg)

This project is covered under the ${license} license.

## Contributing

${contributing}

## Tests

${tests}

## Questions

If you have any questions or concerns about this project, please contact the author:

- GitHub: [${githubUsername}](https://github.com/${githubUsername})
- Email: ${email}`;

    fs.writeFile('README.md', readmeContent, (err) => {
      if (err) throw err;
      console.log('README.md file has been successfully generated!');
    });
  });