// This file contains the experiences data for the portfolio.

export interface Experience {
  position: string;
  company: string;
  date: string;
  text: string;
}

const experiences: Experience[] = [
  {
    position: "Front-End Web Developer Intern / Software Tester Intern",
    company: "Highly Succeed Inc. (Mandaluyong City, Philippines)",
    date: "March 2024 - June 2024",
    text: `Developed front-end of web application using HTML, Sass, Bootstrap, and React.js, ensuring it is API-ready. 
        Conducted manual, regression, and user acceptance testing, and filed detailed bug tickets in Jira. 
        Created and executed test cases to ensure coverage of the system requirements and identify potential issues.`,
  },
  {
    position: "Associate Software Engineer",
    company: "Accenture (Taguig City, Philippines)",
    date: "December 2024 - Present",
    text: `...`,
  },
];

export default experiences;
