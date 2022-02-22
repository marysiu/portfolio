import L_HTML5 from '../skills-svg/html-5.svg';
import L_CSS3 from '../skills-svg/css3.svg';
import L_REACT from '../skills-svg/react.svg';
import L_MATERIALUI from '../skills-svg/material-ui-1.svg';
import L_NODE_JS from '../skills-svg/nodejs.svg';
import L_EXPRESS from '../skills-svg/express.svg';
import L_MONGODB from '../skills-svg/mongodb.svg';
import L_MSSQL from '../skills-svg/mssql.svg';
import L_GIT from '../skills-svg/git-icon.svg';
import L_HEROKU from '../skills-svg/heroku.svg';
import L_GITHUB_PAGES from '../skills-svg/github.svg';
import L_JAVASCRIPT from '../skills-svg/javascript.svg';
import L_PYTHON from '../skills-svg/python.svg';
import L_C_PLUS_PLUS from '../skills-svg/C++.svg';


export const skills = {
  frontend: [
    {
      link: 'https://en.wikipedia.org/wiki/HTML5',
      imgAltText: 'HTML 5',
      imgSrc: L_HTML5,
      skillName: 'HTML5',
    },
    {
      link:
        'https://medium.com/beginners-guide-to-mobile-web-development/whats-new-in-css-3-dcd7fa6122e1',
      imgAltText: 'CSS 3',
      imgSrc: L_CSS3,
      skillName: 'CSS3',
    },
    {
      link: 'https://www.javascript.com/',
      imgAltText: 'JavaScript',
      imgSrc: L_JAVASCRIPT,
      skillName: 'JavaScript',
    },
    {
      link: 'https://reactjs.org/',
      imgAltText: 'React JS',
      imgSrc: L_REACT,
      skillName: 'React JS',
    },
    {
      link: 'https://material-ui.com/',
      imgAltText: 'Material-UI',
      imgSrc: L_MATERIALUI,
      skillName: 'Material-UI',
    },
  ],

  backend: [
    {
      link: 'https://nodejs.org/en/',
      imgAltText: 'Node.js',
      imgSrc: L_NODE_JS,
      skillName: 'Node.js',
    },
    {
      link: 'https://expressjs.com/',
      imgAltText: 'Express',
      imgSrc: L_EXPRESS,
      skillName: 'Express',
    },
    // {
    //   link: 'https://flask.palletsprojects.com/',
    //   imgAltText: 'Flask',
    //   imgSrc: L_FLASK,
    //   skillName: 'Flask',
    // },
  ],
  hostingPlatforms: [
    {
      link: 'https://www.heroku.com/',
      imgAltText: 'Heroku',
      imgSrc: L_HEROKU,
      skillName: 'Heroku',
    },
    {
      link: 'https://pages.github.com/',
      imgAltText: 'GitHub Pages',
      imgSrc: L_GITHUB_PAGES,
      skillName: 'GitHub Pages',
    },
  ],
  programmingLanguages: [
    {
      link: 'https://www.javascript.com/',
      imgAltText: 'JavaScript',
      imgSrc: L_JAVASCRIPT,
      skillName: 'JavaScript',
    },
    {
      link: 'https://www.python.org/',
      imgAltText: 'Python',
      imgSrc: L_PYTHON,
      skillName: 'Python',
    },
    {
      link: 'https://www.cplusplus.com/',
      imgAltText: 'C++',
      imgSrc: L_C_PLUS_PLUS,
      skillName: 'C++',
    },
  ],
  databases: [
    {
      link: 'https://www.microsoft.com/en-us/sql-server/sql-server-2019',
      imgAltText: 'MS-SQL',
      imgSrc: L_MSSQL,
      skillName: 'MS-SQL',
    },
    {
      link: 'https://www.mongodb.com/',
      imgAltText: 'MongoDB',
      imgSrc: L_MONGODB,
      skillName: 'MongoDB',
    },
  ],
  versionControl: [
    {
      link: 'https://git-scm.com/',
      imgAltText: 'GIT',
      imgSrc: L_GIT,
      skillName: 'GIT',
    },
  ],
};
