import { createModal } from "./Modal.js";

export class CourseCard {
  #data;
  #body;
  #modal;

  constructor(courseData) {
    this.#data = courseData;
    this.#body = document.getElementById('body');
    this.#modal = this.#generateModalInfos();
  }

  #generateModalInfos() {
    const { cover, title, description, authors, info } = this.#data;

    const modalContent = document.createElement('div');
    modalContent.className = `
      bg-white lg:rounded-xl shadow-xl p-6 lg:max-w-3xl max-h-screen lg:max-h-[95vh] overflow-y-auto
      text-gray-800 space-y-6
    `;

    const img = document.createElement('img');
    img.src = cover;
    img.className = 'w-full max-h-[600px] h-full object-cover rounded-lg shadow';
    modalContent.appendChild(img);

    const t = document.createElement('h2');
    t.textContent = title;
    t.className = 'text-3xl font-bold';
    modalContent.appendChild(t);

    const d = document.createElement('p');
    d.textContent = description;
    d.className = 'text-gray-700 text-sm';
    modalContent.appendChild(d);

    const authorsBox = document.createElement('div');
    authorsBox.className = 'border-t pt-4 space-y-2';

    const authorsTitle = document.createElement('h3');
    authorsTitle.textContent = 'Instrutores';
    authorsTitle.className = 'font-semibold text-xl';
    authorsBox.appendChild(authorsTitle);

    authors.forEach(author => {
      const p = document.createElement('p');
      p.textContent = `👤 ${author.name} — Matrícula: ${author.mat}`;
      p.className = 'text-gray-700';
      authorsBox.appendChild(p);
    });

    modalContent.appendChild(authorsBox);

    if (info) {
      const infoBox = document.createElement('div');
      infoBox.className = 'border-t pt-4 space-y-4';

      const addInfoTitle = document.createElement('h3');
      addInfoTitle.textContent = 'Informações do Curso';
      addInfoTitle.className = 'text-xl font-semibold';
      infoBox.appendChild(addInfoTitle);

      const addField = (label, value) => {
        if (!value) return;

        const wrapper = document.createElement('div');
        wrapper.className = 'space-y-1';

        const l = document.createElement('p');
        l.textContent = label;
        l.className = 'font-medium text-gray-900';

        const v = document.createElement('p');
        v.textContent = value;
        v.className = 'text-gray-700 text-sm';

        wrapper.appendChild(l);
        wrapper.appendChild(v);
        infoBox.appendChild(wrapper);
      };

      addField("Nome da Disciplina:", info.subject);
      addField("Semestre:", info.semester);
      addField("Resumo Detalhado:", info.summary);
      addField("Objetivos:", info.objectives);
      addField("Ementa:", info.syllabus);
      addField("Carga Horária:", info.workload);
      addField("Pré-requisitos:", info.prerequisites);
      addField("Média de Aprovação:", info.approval);

      modalContent.appendChild(infoBox);
    }

    return createModal(modalContent);
  }

  render() {
    const { cover, title, description, time, authors, startDate, endDate } = this.#data;

    const card = document.createElement('div');
    card.className =
      'w-full max-w-[600px] h-[740px] bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300';

    const cardImg = document.createElement('img');
    cardImg.src = cover;
    cardImg.alt = title;
    cardImg.className = 'w-full h-[400px] object-cover cursor-pointer';

    card.addEventListener('click', () => {
      this.#modal.classList.replace('hidden', 'flex');
      this.#body.classList.add('overflow-hidden');
    });

    const cardBody = document.createElement('div');
    cardBody.className = 'p-4';

    const cardTitle = document.createElement('h3');
    cardTitle.textContent = title;
    cardTitle.className = 'text-xl font-semibold mb-2 text-gray-800';

    const cardDescription = document.createElement('p');
    cardDescription.textContent = description;
    cardDescription.className = 'text-gray-600 text-sm mb-3';

    const cardTime = document.createElement('p');
    cardTime.textContent = `⏱️ ${time} horas`;
    cardTime.className = 'text-gray-700 text-sm font-medium mb-3';

    const datesWrapper = document.createElement('div');
    datesWrapper.className = 'flex items-center justify-between mb-3';

    const start = document.createElement('p');
    start.textContent = `📅 Início: ${startDate}`;
    start.className = 'text-gray-700 text-sm font-medium';

    const end = document.createElement('p');
    end.textContent = `🏁 Fim: ${endDate}`;
    end.className = 'text-gray-700 text-sm font-medium';

    datesWrapper.appendChild(start);
    datesWrapper.appendChild(end);

    const authorsContainer = document.createElement('div');
    authorsContainer.className = 'mt-2 space-y-1';

    authors.forEach(author => {
      const auth = document.createElement('p');
      auth.textContent = `👤 ${author.name} — Matrícula: ${author.mat}`;
      auth.className = 'text-gray-700 text-sm';
      authorsContainer.appendChild(auth);
    });

    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardDescription);
    cardBody.appendChild(cardTime);
    cardBody.appendChild(datesWrapper);
    cardBody.appendChild(authorsContainer);

    card.appendChild(cardImg);
    card.appendChild(cardBody);

    return card;
  }
}
