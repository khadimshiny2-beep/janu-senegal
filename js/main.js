// Janu — JavaScript pur, sans dépendance ni build.

// --- En-tête : ombre au scroll + menu mobile -------------------------------
const header = document.querySelector('.site-header');
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.getElementById('nav');

if (header && menuToggle && nav) {
  const setMenu = (open) => {
    menuToggle.setAttribute('aria-expanded', String(open));
    menuToggle.textContent = open ? 'Fermer' : 'Menu';
    if (open) header.dataset.open = 'true';
    else delete header.dataset.open;
  };

  menuToggle.addEventListener('click', () => {
    setMenu(menuToggle.getAttribute('aria-expanded') !== 'true');
  });

  nav.addEventListener('click', (event) => {
    if (event.target.closest('a')) setMenu(false);
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && header.dataset.open) {
      setMenu(false);
      menuToggle.focus();
    }
  });

  const onScroll = () => header.classList.toggle('is-scrolled', window.scrollY > 8);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
}

// --- Apparition au scroll --------------------------------------------------
// Les classes sont ajoutées ici : sans JS, tout le contenu reste visible.
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const revealItems = document.querySelectorAll('[data-reveal]');

if (prefersReducedMotion || !('IntersectionObserver' in window)) {
  revealItems.forEach((el) => el.classList.add('is-visible'));
} else {
  const observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  }, { rootMargin: '0px 0px -10% 0px' });

  revealItems.forEach((el) => {
    el.classList.add('reveal');
    observer.observe(el);
  });
}

// --- Fiche produit ---------------------------------------------------------
const dialog = document.getElementById('piece-dialog');

if (dialog) {
  const pieceImage = document.getElementById('piece-img');
  const pieceFibre = document.getElementById('piece-fibre');
  const pieceTitle = document.getElementById('piece-title');
  const piecePrice = document.getElementById('piece-price');
  const pieceDesc = document.getElementById('piece-desc');
  const pieceMail = document.getElementById('piece-mail');

  document.querySelectorAll('[data-piece]').forEach((button) => {
    button.addEventListener('click', () => {
      const { name, price, fibre, desc, img } = button.dataset;

      pieceImage.src = img;
      pieceImage.alt = name;
      pieceFibre.textContent = fibre;
      pieceTitle.textContent = name;
      piecePrice.textContent = price;
      pieceDesc.textContent = desc;
      pieceMail.href = 'mailto:bonjour@janu.sn'
        + '?subject=' + encodeURIComponent('Commande — ' + name)
        + '&body=' + encodeURIComponent(
          'Bonjour Janu,\n\nJe souhaite commander la ' + name + ' (' + price + ').\n'
          + 'Ma taille :\nMes mesures (buste / taille / hanches) :\n\nMerci.'
        );

      dialog.showModal();
    });
  });

  document.querySelectorAll('[data-close]').forEach((button) => {
    button.addEventListener('click', () => dialog.close());
  });

  // Un clic sur le fond ferme la fiche.
  dialog.addEventListener('click', (event) => {
    if (event.target === dialog) dialog.close();
  });
}

// --- Newsletter ------------------------------------------------------------
// Renseigne SIGNUP_ENDPOINT avec ton fournisseur (Formspree, Buttondown...).
// Pense alors à autoriser son domaine dans connect-src (index.html et _headers).
const SIGNUP_ENDPOINT = '';
const signupForm = document.getElementById('signup');

if (signupForm) {
  const signupNote = document.getElementById('signup-note');

  signupForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const email = signupForm.email.value.trim();
    const valid = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email) && email.length <= 254;

    if (!valid) {
      signupNote.textContent = 'Merci d’entrer une adresse email valide.';
      signupForm.email.focus();
      return;
    }

    if (!SIGNUP_ENDPOINT) {
      signupNote.textContent = 'L’inscription n’est pas encore branchée — écrivez à bonjour@janu.sn.';
      return;
    }

    try {
      const response = await fetch(SIGNUP_ENDPOINT, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: new FormData(signupForm),
      });
      if (!response.ok) throw new Error(String(response.status));
      signupForm.reset();
      signupNote.textContent = 'Vous êtes inscrite. Merci.';
    } catch {
      signupNote.textContent = 'Une erreur est survenue — merci de réessayer.';
    }
  });
}

// --- Formulaire de contact / commande sur mesure ---------------------------
// Le site est statique : le formulaire ouvre la messagerie du visiteur.
const orderForm = document.getElementById('order-form');

if (orderForm) {
  const orderNote = document.getElementById('order-note');

  orderForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = orderForm.nom.value.trim();
    const email = orderForm.email.value.trim();
    const message = orderForm.message.value.trim();
    const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email) && email.length <= 254;

    if (!name || !validEmail || message.length < 5) {
      orderNote.textContent = 'Merci de remplir votre nom, un email valide et un message.';
      return;
    }

    if (message.length > 2000) {
      orderNote.textContent = 'Message trop long (2 000 caractères maximum).';
      return;
    }

    orderNote.textContent = 'Votre logiciel de messagerie va s’ouvrir…';

    window.location.href = 'mailto:bonjour@janu.sn'
      + '?subject=' + encodeURIComponent('Site Janu — message de ' + name)
      + '&body=' + encodeURIComponent(message + '\n\n— ' + name + '\n' + email);
  });
}
