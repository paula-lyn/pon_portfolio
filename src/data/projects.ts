export interface Project {
  src: string;
  title: string;
  text: string;
  link?: string;
  disabled?: boolean;
  classname?: string;
}

import QuizImage from "../assets/images/Quiz.png";
import EasykayImage from "../assets/images/Easykay.png";

export const projects: Project[] = [
  {
    src: EasykayImage,
    title: "Transport Commuting Guide System",
    text: "EasyKay is a web app for Santa Maria, Bulacan commuters, offering essential info like jeepney terminals, fare costs, ETA, and distance metrics. It also integrates data from the Municipal Tourism Office to promote local tourism.",
    disabled: true,
    classname: "disabled",
  },
  {
    src: QuizImage,
    title: "QuickQuiz App",
    text: "The QuickQuiz App is a React.js web application that lets users test their knowledge with interactive quizzes. It offers real-time feedback and a responsive design for a smooth experience on both desktop and mobile devices.",
    link: "https://paula-lyn.github.io/Quick-Quiz/",
  },
];
