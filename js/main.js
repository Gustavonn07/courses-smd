import { CourseCard } from "./components/CourseCard.js";
import { courses } from "./courses.js";


const main = document.getElementById('main');

  courses.forEach(course => {
    const card = new CourseCard(course).render();
    main.appendChild(card)
  });
