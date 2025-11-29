export function createModal(child) {
    const modal = document.createElement('div');
    modal.className = `
        fixed inset-0 w-screen h-screen 
        bg-black/70 
        hidden 
        items-center justify-center 
        z-[999] 
        lg:p-5
    `;

    const modalChild = child;
    modal.appendChild(modalChild);

    const closeBtn = document.createElement('span');
    closeBtn.textContent = '×';
    closeBtn.className = `
        absolute top-2 lg:top-5 right-1.5 lg:right-8 text-2xl font-bold 
        cursor-pointer 
        select-none
        text-gray-900 lg:text-white
    `;
    modal.appendChild(closeBtn);

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.replace('flex', 'hidden');
            body.classList = 'min-h-screen w-full bg-gradient-to-br from-gray-100 to-gray-200 text-gray-900'
        }   
    });

    closeBtn.addEventListener('click', () => {
        modal.classList.replace('flex', 'hidden');
        body.classList = 'min-h-screen w-full bg-gradient-to-br from-gray-100 to-gray-200 text-gray-900'
    });

    document.body.appendChild(modal);

    return modal;
}
