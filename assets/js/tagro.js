// TAGRO shared behavior — minimal, no animation libraries.

document.addEventListener('DOMContentLoaded', () => {
  // Mobile nav toggle
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('nav.main');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      nav.classList.toggle('open');
      const expanded = nav.classList.contains('open');
      toggle.setAttribute('aria-expanded', expanded);
    });
  }

  // Build the three-chevron rule (echoes the logo mark) inside any .chevron-rule
  document.querySelectorAll('.chevron-rule').forEach(rule => {
    const count = 3;
    const gap = 10;
    for (let i = 0; i < count; i++) {
      const block = document.createElement('span');
      block.style.left = (i * (34 + gap)) + 'px';
      block.style.opacity = 1 - i * 0.28;
      rule.appendChild(block);
    }
  });
});
