// GET license badge if user choose any licence option 

function getBadge(license) {
  if (license !== "None") {
    return `![Badge](https://img.shields.io/badge/License-${license}-blue.svg)`
  }
  return ``;
}



// function to generate markdown for README
function generateMarkdown(data) {

  return `# ${data.title}


  ${data.name}

  ${getBadge(data.license)}
  

  ## Description 
  ${data.description}
  
  ## Table of Contents 
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Credits](#credits)
  - [Test](#tests)
  - [Questions](#questions)
  - [Deployed Application](#deployed-application)

  ## Installation 
  ${data.install}

  ## Usage 
  ${data.usage}

  ## Licence
  Application covered by ${data.license} license

  ## Credits 
  ${data.credits}
  
  ## Tests 
  ${data.test}


  ## Questions 
  If there are any questions, feel free to contact me via email at: ${data.email}
  
  You can also find me on GitHub at: [${data.github}](https://www.github.com/${data.github})
  
  ## Deployed Application 
  This application was deplopyed at [${data.deploy}](${data.deploy})


`;
}

module.exports = generateMarkdown;
