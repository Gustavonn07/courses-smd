import { createCard } from './components/CourseCard.js'

const main = document.getElementById('main');

async function loadCourses() {
  try {
    const res = await fetch('./../courses.json');
    const courses = await res.json();

    courses.forEach(course => {
      const card = createCard(course);
      main.appendChild(card);
    });

  } catch (err) {
    console.error("Erro ao carregar courses.json:", err);
  }
}

loadCourses();
