const sections = Array.from(document.querySelectorAll<HTMLElement>('main section[id]'));
const tabs = Array.from(document.querySelectorAll<HTMLAnchorElement>('.tab'));
const lineNumbers = document.querySelector<HTMLElement>('#line-numbers')!;
const sectionLabel = document.querySelector<HTMLElement>('#status-section')!;
const percentLabel = document.querySelector<HTMLElement>('#status-percent')!;
const positionLabel = document.querySelector<HTMLElement>('#status-position')!;
const modeLabel = document.querySelector<HTMLElement>('#mode-label')!;
const overlay = document.querySelector<HTMLElement>('#command-overlay')!;
const commandInput = document.querySelector<HTMLInputElement>('#command-input')!;
const commandPrefix = document.querySelector<HTMLElement>('#command-prefix')!;
const projectOptions = Array.from(document.querySelectorAll<HTMLButtonElement>('.project-option'));
const previews = Array.from(document.querySelectorAll<HTMLElement>('.preview-item'));
const emptySearch = document.querySelector<HTMLElement>('.search-empty')!;
const base = document.body.dataset.base || '/Portfolio/';
const language = document.body.dataset.language || 'en';
let currentSection = 'home';
let pendingG = false;
let activeProject = 0;
let commandMode: 'search' | 'command' = 'command';

function setMode(mode: 'NORMAL' | 'COMMAND' | 'INSERT') {
  modeLabel.textContent = mode;
  modeLabel.dataset.mode = mode;
}

function showProject(index: number) {
  activeProject = index;
  projectOptions.forEach((option, i) => {
    option.classList.toggle('selected', i === index);
    option.setAttribute('aria-selected', String(i === index));
  });
  previews.forEach((preview, i) => preview.classList.toggle('selected', i === index));
}

function updateEditor() {
  const documentHeight = document.documentElement.scrollHeight - innerHeight;
  const percent = documentHeight > 0 ? Math.round(scrollY / documentHeight * 100) : 100;
  const line = Math.max(1, Math.round(scrollY / 26) + 1);
  percentLabel.textContent = `${percent}%`;
  positionLabel.textContent = `${line}:${Math.round(scrollY % 26 / 4) + 1}`;
  const focalPoint = scrollY + Math.min(innerHeight * .38, 300);
  currentSection = sections.reduce((active, section) => section.offsetTop <= focalPoint ? section.id : active, 'home');
  sectionLabel.textContent = sections.find(section => section.id === currentSection)?.dataset.file || 'dashboard';
  tabs.forEach(tab => tab.classList.toggle('active', tab.dataset.tab === currentSection));
  const lineHeight = 26;
  const count = Math.ceil(innerHeight / lineHeight) + 2;
  const firstLine = Math.max(1, line - 2);
  lineNumbers.innerHTML = Array.from({ length: count }, (_, i) => {
    const value = firstLine + i;
    const relative = Math.abs(value - line);
    return `<div class="${relative === 0 ? 'current' : ''}">${relative === 0 ? value : relative}</div>`;
  }).join('');
}

function openCommand(mode: 'search' | 'command') {
  commandMode = mode;
  overlay.hidden = false;
  commandPrefix.textContent = mode === 'search' ? '/' : ':';
  commandInput.value = '';
  commandInput.placeholder = mode === 'search' ? 'search projects' : 'projects · contact · lang pt';
  commandInput.focus();
  setMode('COMMAND');
  if (mode === 'search') document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
}

function closeCommand() {
  overlay.hidden = true;
  commandInput.blur();
  setMode('NORMAL');
  if (commandMode === 'search') filterProjects('');
}

function filterProjects(query: string) {
  const normalized = query.trim().toLowerCase();
  let firstVisible = -1;
  projectOptions.forEach((option, index) => {
    const visible = option.dataset.search?.includes(normalized) ?? false;
    option.hidden = !visible;
    if (visible && firstVisible < 0) firstVisible = index;
  });
  emptySearch.hidden = firstVisible >= 0;
  if (firstVisible >= 0) showProject(firstVisible);
}

function goToSection(id: string) {
  document.querySelector(`#${id}`)?.scrollIntoView({ behavior: 'smooth' });
}

projectOptions.forEach((option, index) => {
  option.addEventListener('click', () => showProject(index));
  option.addEventListener('keydown', event => {
    if (event.key !== 'ArrowDown' && event.key !== 'ArrowUp') return;
    event.preventDefault();
    const visible = projectOptions.filter(item => !item.hidden);
    const current = visible.indexOf(option);
    const next = visible[(current + (event.key === 'ArrowDown' ? 1 : -1) + visible.length) % visible.length];
    next?.focus();
    if (next) showProject(Number(next.dataset.project));
  });
});

commandInput.addEventListener('input', () => {
  if (commandMode === 'search') filterProjects(commandInput.value);
});
commandInput.addEventListener('keydown', event => {
  if (event.key === 'Escape') { closeCommand(); return; }
  if (event.key !== 'Enter') return;
  event.preventDefault();
  if (commandMode === 'search') {
    projectOptions[activeProject]?.focus();
    overlay.hidden = true;
    setMode('NORMAL');
    return;
  }
  const command = commandInput.value.trim().toLowerCase();
  if (['about', 'experience', 'projects', 'skills', 'stack', 'contact', 'home'].includes(command)) {
    goToSection(command === 'stack' ? 'skills' : command);
  } else if (command === 'lang pt' || command === 'lang en') {
    const target = command === 'lang pt' ? `${base}pt/` : base;
    location.assign(target + location.hash);
  }
  closeCommand();
});

document.addEventListener('keydown', event => {
  const target = event.target as HTMLElement;
  if (event.key === 'Escape' && !overlay.hidden) { closeCommand(); return; }
  if (!overlay.hidden || event.altKey || event.ctrlKey || event.metaKey || target.matches('input, textarea, select, [contenteditable]')) return;
  if (event.key === '/') { event.preventDefault(); openCommand('search'); return; }
  if (event.key === ':') { event.preventDefault(); openCommand('command'); return; }
  if (event.key === 'j') { event.preventDefault(); scrollBy({ top: 110, behavior: 'smooth' }); }
  if (event.key === 'k') { event.preventDefault(); scrollBy({ top: -110, behavior: 'smooth' }); }
  if (event.key === 'G') { event.preventDefault(); scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' }); }
  if (event.key === 'g') {
    if (pendingG) { event.preventDefault(); scrollTo({ top: 0, behavior: 'smooth' }); pendingG = false; }
    else { pendingG = true; setTimeout(() => { pendingG = false; }, 650); }
  }
  if (event.key === 'p') goToSection('projects');
  if (event.key === 'c') goToSection('contact');
});

document.querySelectorAll<HTMLInputElement | HTMLTextAreaElement>('#contact-form input, #contact-form textarea').forEach(field => {
  field.addEventListener('focus', () => setMode('INSERT'));
  field.addEventListener('blur', () => setMode('NORMAL'));
});

document.querySelector<HTMLFormElement>('#contact-form')?.addEventListener('submit', event => {
  event.preventDefault();
  const name = document.querySelector<HTMLInputElement>('#contact-name')!.value.trim();
  const message = document.querySelector<HTMLTextAreaElement>('#contact-message')!.value.trim();
  if (!name || !message) return;
  const subject = encodeURIComponent(language === 'pt' ? `Contato do portfólio — ${name}` : `Portfolio contact — ${name}`);
  const body = encodeURIComponent(`${message}\n\n— ${name}`);
  location.href = `mailto:lucasnarloch123@gmail.com?subject=${subject}&body=${body}`;
});

addEventListener('scroll', updateEditor, { passive: true });
addEventListener('resize', updateEditor);
updateEditor();
