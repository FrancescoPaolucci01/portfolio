(() => {
  const buttons = [...document.querySelectorAll('[data-filter]')];
  const projects = [...document.querySelectorAll('[data-category]')];
  const counter = document.querySelector('[data-project-count]');
  buttons.forEach(button => button.addEventListener('click', () => {
    const category = button.dataset.filter;
    buttons.forEach(item => item.setAttribute('aria-pressed', String(item === button)));
    let visible = 0;
    projects.forEach(project => {
      const show = category === 'Tutti' || project.dataset.category === category;
      project.hidden = !show;
      if (show) visible++;
    });
    if (counter) counter.textContent = String(visible).padStart(2, '0');
    const status = document.querySelector('[data-filter-status]');
    if (status) status.textContent = `${visible} progetti visualizzati. Categoria: ${category}.`;
  }));
})();
