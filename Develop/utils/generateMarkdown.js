// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'None') {
    return '';
  } else if (license === 'MIT') {
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]';
  } else if (license === 'Apache 2.0') {
    return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]';
  } else if (license === 'GPL 3.0') {
    return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]';
  }
  
  return ''; // return an empty string if the license is not recognized
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'None') {
    return '';
  } else if (license === 'MIT') {
    return '(https://opensource.org/licenses/MIT)'
  } else if (license === 'Apache 2.0') {
    return '(https://opensource.org/licenses/Apache-2.0)'
  } else if (license === 'GPL 3.0') {
    return '(https://www.gnu.org/licenses/gpl-3.0)'
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  // TODO: Implement the logic to return the license section of README
  // This may include additional information about the license and how it can be found.
  // If there is no license, return an empty string.
  return '';
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const licenseBadge = renderLicenseBadge(data.license);
  const licenseLink = renderLicenseLink(data.license);
  const licenseSection = renderLicenseSection(data.license);

  return `# ${data.title}

${licenseBadge}

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## License
${licenseBadge}
${licenseLink}
${licenseSection}

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
For any questions, please contact [${data.github}](https://github.com/${data.github}) via email at ${data.email}.
`;
}

module.exports = generateMarkdown;
