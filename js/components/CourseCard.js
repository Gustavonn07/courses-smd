export function createCard({ cover, title, description, time, authors, startDate, endDate }) {
  const card = document.createElement('div');
  card.className =
    'w-full max-w-xl h-[740px] bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300';

  const modal = document.createElement('div');
  modal.style.position = 'fixed';
  modal.style.top = '0';
  modal.style.left = '0';
  modal.style.width = '100vw';
  modal.style.height = '100vh';
  modal.style.background = 'rgba(0,0,0,0.7)';
  modal.style.display = 'none';
  modal.style.alignItems = 'center';
  modal.style.justifyContent = 'center';
  modal.style.zIndex = '999';
  modal.style.padding = '20px';

  const modalImg = document.createElement('img');
  modalImg.src = cover;
  modalImg.style.maxWidth = '90vw';
  modalImg.style.maxHeight = '90vh';
  modalImg.style.borderRadius = '12px';
  modalImg.style.boxShadow = '0 0 20px rgba(0,0,0,0.5)';
  modal.appendChild(modalImg);

  const closeBtn = document.createElement('span');
  closeBtn.textContent = '✖';
  closeBtn.style.position = 'absolute';
  closeBtn.style.top = '20px';
  closeBtn.style.right = '30px';
  closeBtn.style.fontSize = '32px';
  closeBtn.style.color = 'white';
  closeBtn.style.cursor = 'pointer';
  closeBtn.style.fontWeight = 'bold';
  modal.appendChild(closeBtn);

  document.body.appendChild(modal);

  modal.addEventListener('click', (e) => {
    if (e.target === modal) modal.style.display = 'none';
  });

  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  const cardImg = document.createElement('img');
  cardImg.src = cover;
  cardImg.alt = title;
  cardImg.className = 'w-full h-[60vw] max-h-96 object-cover cursor-pointer';

  cardImg.addEventListener('click', () => {
    modal.style.display = 'flex';
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
