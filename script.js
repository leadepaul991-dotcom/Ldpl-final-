(() => {
  const menu = document.querySelector('.menu-overlay');
  const openButton = document.querySelector('.menu-toggle');
  const closeButton = document.querySelector('.menu-close');

  function setMenu(open) {
    if (!menu || !openButton) return;
    menu.hidden = !open;
    document.body.classList.toggle('menu-open', open);
    openButton.setAttribute('aria-expanded', String(open));
    openButton.setAttribute('aria-label', open ? 'Fermer le menu' : 'Ouvrir le menu');
    if (open) closeButton?.focus();
    else openButton.focus();
  }

  openButton?.addEventListener('click', () => setMenu(true));
  closeButton?.addEventListener('click', () => setMenu(false));
  menu?.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => setMenu(false)));
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && menu && !menu.hidden) setMenu(false);
  });

  document.querySelectorAll('[data-year]').forEach((node) => {
    node.textContent = new Date().getFullYear();
  });

  const form = document.querySelector('[data-contact-form]');
  form?.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    const notice = form.querySelector('[role="status"]');
    if (notice) {
      notice.textContent = 'Merci, vos champs sont renseignés. Le formulaire ne peut pas transmettre votre demande : LDPL doit d’abord connecter un service de réception sécurisé.';
    }
  });
})();
