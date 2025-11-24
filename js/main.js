import { createCard } from './components/CourseCard.js'
import { courses } from './courses.js'

const main = document.getElementById('main');

function loadCourses() {
    courses.forEach(course => {
      const card = createCard(course);
      main.appendChild(card);
    });

}

loadCourses();
