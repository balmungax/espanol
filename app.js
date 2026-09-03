const byId = (id) => document.getElementById(id);

const facts = [
  { input: 'teacherName', card: 'cardName', build: value => `¡Hola! Me llamo ${value || '…'}.` },
  { input: 'teacherColour', card: 'cardColour', build: value => `Mi color favorito es ${value || '…'}.` },
  { input: 'teacherFood', card: 'cardFood', build: value => `Mi comida favorita es ${value || '…'}.` },
  { input: 'teacherBook', card: 'cardBook', build: value => `Mi libro favorito es ${value || '…'}.` },
  { input: 'teacherFilm', card: 'cardFilm', build: value => `Mi película favorita es ${value || '…'}.` },
  { input: 'teacherBirthday', card: 'cardBirthday', build: value => `Mi cumpleaños es ${value || '…'}.` }
];

function updateCards() {
  facts.forEach(({ input, card, build }) => byId(card).textContent = build(byId(input).value.trim()));
  refreshPrompts();
}
facts.forEach(({ input }) => byId(input).addEventListener('input', updateCards));

let currentCard = 0;
const cards = [...document.querySelectorAll('.fact-card')];
function showCard(index) {
  currentCard = (index + cards.length) % cards.length;
  cards.forEach((card, position) => card.classList.toggle('active', position === currentCard));
  byId('cardCounter').textContent = `Tarjeta ${currentCard + 1} de ${cards.length}`;
  byId('nextCard').innerHTML = currentCard === cards.length - 1 ? 'Volver a empezar <span>↺</span>' : 'Muestra la siguiente <span>→</span>';
}
byId('nextCard').addEventListener('click', () => showCard(currentCard + 1));
byId('restartCards').addEventListener('click', () => showCard(0));

const chants = [
  'Di: «¡En español, aprendemos y nos cuidamos!»',
  'Haz el gesto: mano arriba, orejas atentas, manos tranquilas.',
  'Todos juntos: «¡Somos amables y lo intentamos en español!»',
  'Pregunta al grupo: «¿Estamos listos?» Ellos responden: «¡Sí, profe!»'
];
let currentChant = 0;
byId('rulesChant').addEventListener('click', () => {
  currentChant = (currentChant + 1) % chants.length;
  byId('chantOutput').textContent = chants[currentChant];
});

const lessons = {
  2: {
    duration: '30–35 minutos',
    title: '¡Hola, robots!',
    summary: 'Un juego de eco con mucho movimiento. Los niños te conocen, copian a un robot español y después se presentan con una frase valiente.',
    language: ['¡Hola!', 'Me llamo…', 'Me gusta…', 'Adiós'],
    resource: 'Necesitas: una pelota suave o una marioneta, tarjetas con dibujos y la ficha imprimible.',
    phases: [
      ['0–5', 'Círculo de saludo', 'Saluda con la mano y enseña «¡Hola!». Todos se convierten en robots: saludan y repiten contigo.'],
      ['5–10', 'Conoce a la profe', 'Muestra tus tarjetas una por una. Añade un gesto: señalarse, elegir un color, fingir comer o leer.'],
      ['10–20', 'El robot copia', 'Di uno de tus datos. El grupo copia el gesto solo cuando dices «¡Hola, robots!». Mezcla acciones graciosas para que escuchen bien.'],
      ['20–29', 'Pasa y di', 'Pasan la marioneta o la pelota. Cada niño dice «¡Hola! Me llamo…» y la clase contesta «¡Hola, [nombre]!».'],
      ['29–35', 'Salida con saludo', 'En la puerta, cada niño elige: decir «¡Hola!» o «¡Adiós!». Celebra cada intento.']
    ]
  },
  4: {
    duration: '40 minutos',
    title: 'El detective del pasaporte español',
    summary: 'El grupo recoge pistas de tu perfil en español y crea un mini pasaporte para presentarse y resolver un reto en equipo.',
    language: ['Me llamo…', 'Tengo … años', 'Me gusta…', 'Mi color favorito es…'],
    resource: 'Necesitas: un sobre de «detective», tarjetas con tus pistas, papel pequeño o tarjetas para pasaportes.',
    phases: [
      ['0–5', 'Saludo secreto', 'Enseña una respuesta en eco: tú dices «¡Hola, clase!» y el grupo contesta «¡Hola, profe!». Añade un ritmo de palmas.'],
      ['5–12', 'Descifra mi perfil', 'Muestra tus tarjetas y tapa una palabra clave de cada una. Los equipos adivinan con tu gesto o dibujo y después repiten la frase completa.'],
      ['12–23', 'Busca las pistas', 'Esconde cuatro copias de las pistas. En parejas, encuentran una, la leen en voz alta y la llevan a la mesa de pasaportes.'],
      ['23–34', 'Crea un mini pasaporte', 'Completan «Me llamo…», «Me gusta…» y dibujan su color favorito. Una pareja practica una frase.'],
      ['34–40', 'Salida de detective', 'Muestra una pista de tu perfil. Los equipos señalan el dibujo correcto o dicen la frase española que coincide.']
    ]
  },
  5: {
    duration: '45 minutos',
    title: 'Misión de perfiles: encuentra tu equipo',
    summary: 'Una presentación se transforma en una misión oral: los niños usan preguntas cortas en español y pistas de perfil para crear la identidad de su equipo.',
    language: ['¿Cómo te llamas?', 'Me llamo…', '¿Qué te gusta?', 'Me gusta…', 'Mi color favorito es…'],
    resource: 'Necesitas: tus tarjetas de perfil, notas adhesivas o tarjetas pequeñas, rotuladores de colores y la ficha imprimible.',
    phases: [
      ['0–6', 'Instrucciones de la misión', 'Preséntate con tus tarjetas. Escuchan dos datos y los anotan o dibujan en secreto; después comparan sus respuestas.'],
      ['6–14', 'Relevo de pronunciación', 'Practican «¿Cómo te llamas?» / «Me llamo…» y «¿Qué te gusta?» / «Me gusta…». El premio es hablar con valentía, no tener un acento perfecto.'],
      ['14–27', 'Encuentra tu equipo', 'Cada niño recibe una tarjeta secreta de color, animal o afición. Caminan y usan las dos preguntas hasta encontrar a su grupo.'],
      ['27–38', 'Crea el perfil del equipo', 'Cada grupo prepara una presentación de 20 segundos: nombre, dos gustos y un color. Pueden usar gestos, dibujos o un cartel.'],
      ['38–45', 'Galería y frase de salida', 'Los equipos presentan. En la puerta, cada niño comparte una palabra o frase en español que recuerda de ti.']
    ]
  }
};

let selectedYear = 2;
function renderLesson(year) {
  selectedYear = Number(year);
  const lesson = lessons[selectedYear];
  byId('lessonPanel').innerHTML = `
    <div class="lesson-main">
      <div class="lesson-meta"><span class="pill">AÑO ${selectedYear}</span><span>◷ ${lesson.duration}</span></div>
      <h3>${lesson.title}</h3>
      <p class="lesson-summary">${lesson.summary}</p>
      <div class="language-strip">${lesson.language.map(item => `<span>${item}</span>`).join('')}</div>
    </div>
    <div class="lesson-timeline">
      <h4>GUION DE LA CLASE</h4>
      ${lesson.phases.map(([time, title, text]) => `<div class="phase"><time>${time}</time><div><b>${title}</b><p>${text}</p></div></div>`).join('')}
    </div>
    <div class="lesson-footer"><b>NECESITAS</b><p>${lesson.resource}</p></div>`;
  document.querySelectorAll('.year-tab').forEach(tab => {
    const isSelected = Number(tab.dataset.year) === selectedYear;
    tab.classList.toggle('active', isSelected);
    tab.setAttribute('aria-selected', isSelected);
  });
  byId('gameLevelLabel').textContent = `Año ${selectedYear}`;
  refreshPrompts();
}
document.querySelectorAll('.year-tab').forEach(tab => tab.addEventListener('click', () => renderLesson(tab.dataset.year)));

const promptSets = {
  2: [
    ['DILO', 'Saluda con la mano: «¡Hola!»', 'Toda la clase repite tu saludo.'],
    ['MUÉSTRALO', 'Señálate y di: «Me llamo…»', 'Después, di tu propio nombre.'],
    ['HAZLO', 'Finge que comes una pizza.', 'Ahora repite: «Me gusta la pizza».'],
    ['ENCUÉNTRALO', 'Señala algo azul.', 'Azul es uno de los colores que puedes usar hoy.'],
    ['DILO', 'Despídete de tu pareja: «¡Adiós!»', 'Añade una gran sonrisa y un saludo con la mano.']
  ],
  4: [
    ['PISTA DE DETECTIVE', '¿Qué significa «Me llamo»?', 'Cuéntaselo en voz baja a tu pareja.'],
    ['DILO', 'Pregunta: «¿Cómo te llamas?»', 'Tu pareja responde: «Me llamo…»'],
    ['ENCUÉNTRALO', 'Busca algo rojo, azul o verde.', 'Señálalo y di el color si lo recuerdas.'],
    ['MÍMICA', 'Haz mímica de algo que te gusta.', 'Tu equipo adivina: «Te gusta…»'],
    ['REPÍTELO', '«Mi color favorito es…»', 'Termina la frase con un color inventado o real.']
  ],
  5: [
    ['HABLA RÁPIDO', 'Pregunta: «¿Qué te gusta?»', 'Tu pareja responde: «Me gusta…». Después, cambiad.'],
    ['PISTA DE PERFIL', 'Di un dato que recuerdas de tu profe.', 'Usa una palabra en español si puedes.'],
    ['ENCUENTRA TU EQUIPO', 'Busca a alguien con el mismo color favorito.', 'Usa: «Mi color favorito es…»'],
    ['¿VERDAD O TONTERÍA?', 'Haz mímica de una afición.', 'El grupo vota: «¡Sí!» o «¡No!»'],
    ['FRASE DE SALIDA', 'Di: «Me llamo…» con confianza.', 'Si quieres, añade un dato más.']
  ]
};

let lastPrompt = -1;
function refreshPrompts() {
  if (!byId('promptType')) return;
  const list = [...promptSets[selectedYear]];
  const teacherName = byId('teacherName').value.trim();
  const food = byId('teacherFood').value.trim();
  const colour = byId('teacherColour').value.trim();
  const birthday = byId('teacherBirthday').value.trim();
  if (teacherName) list.push(['PISTA DE LA PROFE', `¿Quién es ${teacherName}?`, 'Di a tu pareja un dato en español que recuerdes de tu profe.']);
  if (food) list.push(['DATO DE LA PROFE', `Completa: «Mi comida favorita es ${food}».`, 'Haz el gesto y repite la frase todos juntos.']);
  if (colour) list.push(['DATO DE LA PROFE', `Muestra el color: ${colour}.`, 'Señala o dibuja algo de ese color.']);
  if (birthday) list.push(['DATO DE LA PROFE', `¿Cuándo es el cumpleaños de la profe?`, 'La respuesta está en una de las tarjetas: «Mi cumpleaños es…»']);
  let index = Math.floor(Math.random() * list.length);
  if (list.length > 1 && index === lastPrompt) index = (index + 1) % list.length;
  lastPrompt = index;
  const [type, prompt, help] = list[index];
  byId('promptType').textContent = type;
  byId('gamePrompt').textContent = prompt;
  byId('gameHelp').textContent = help;
}
byId('newPrompt').addEventListener('click', refreshPrompts);

let timerInterval = null;
let seconds = 30;
function renderTimer() {
  const min = String(Math.floor(seconds / 60)).padStart(2, '0');
  const sec = String(seconds % 60).padStart(2, '0');
  byId('timerText').textContent = `${min}:${sec}`;
}
byId('timerButton').addEventListener('click', () => {
  const button = byId('timerButton');
  if (timerInterval) {
    clearInterval(timerInterval);
    timerInterval = null;
    button.classList.remove('running');
    button.querySelector('small').textContent = 'toca para continuar';
    return;
  }
  if (seconds === 0) {
    seconds = 30;
    button.classList.remove('done');
  }
  button.classList.add('running');
  button.querySelector('small').textContent = 'toca para pausar';
  timerInterval = setInterval(() => {
    seconds -= 1;
    renderTimer();
    if (seconds <= 0) {
      clearInterval(timerInterval);
      timerInterval = null;
      button.classList.remove('running');
      button.classList.add('done');
      button.querySelector('small').textContent = '¡tiempo! toca para reiniciar';
    }
  }, 1000);
});

renderLesson(2);
updateCards();

// Fotografías móviles de las normas: arrastrar con ratón, dedo o flechas del teclado.
const dragBoard = byId('dragBoard');
const dragCards = dragBoard ? [...dragBoard.querySelectorAll('.drag-rule-card')] : [];
const photoLightbox = byId('photoLightbox');
const lightboxImage = byId('lightboxImage');
const lightboxTitle = byId('lightboxTitle');
const lightboxText = byId('lightboxText');
let lastFocusedRuleCard = null;
let dragState = null;
let highestLayer = 10;

function limit(value, minimum, maximum) {
  return Math.min(Math.max(value, minimum), Math.max(minimum, maximum));
}
function placeCard(card, left, top) {
  card.style.left = `${Math.round(left)}px`;
  card.style.top = `${Math.round(top)}px`;
}
function organiseRulePhotos() {
  if (!dragBoard || !dragCards.length) return;
  const boardWidth = dragBoard.clientWidth;
  const columns = boardWidth < 600 ? 2 : 3;
  const padding = boardWidth < 600 ? 12 : 18;
  const gap = boardWidth < 600 ? 10 : 16;
  const cardWidth = Math.floor((boardWidth - (padding * 2) - (gap * (columns - 1))) / columns);
  dragCards.forEach(card => { card.style.width = `${cardWidth}px`; });
  const cardHeight = Math.ceil(Math.max(...dragCards.map(card => card.getBoundingClientRect().height)));
  const rows = Math.ceil(dragCards.length / columns);
  dragBoard.style.height = `${(padding * 2) + (rows * cardHeight) + ((rows - 1) * gap)}px`;
  dragCards.forEach((card, index) => {
    const column = index % columns;
    const row = Math.floor(index / columns);
    placeCard(card, padding + column * (cardWidth + gap), padding + row * (cardHeight + gap));
    card.style.zIndex = String(index + 1);
  });
  highestLayer = dragCards.length + 1;
}
function moveCardWithinBoard(card, left, top) {
  const maxLeft = dragBoard.clientWidth - card.offsetWidth - 2;
  const maxTop = dragBoard.clientHeight - card.offsetHeight - 2;
  placeCard(card, limit(left, 2, maxLeft), limit(top, 2, maxTop));
}
function openRulePhoto(card) {
  if (!photoLightbox) return;
  const image = card.querySelector('img');
  const description = card.querySelector('.drag-caption p');
  lastFocusedRuleCard = card;
  lightboxImage.src = image.currentSrc || image.src;
  lightboxImage.alt = image.alt;
  lightboxTitle.textContent = card.dataset.rule;
  lightboxText.textContent = description ? description.textContent : '';
  photoLightbox.hidden = false;
  document.body.classList.add('photo-open');
  byId('closeLightbox').focus();
}
function closeRulePhoto() {
  if (!photoLightbox || photoLightbox.hidden) return;
  photoLightbox.hidden = true;
  lightboxImage.src = '';
  document.body.classList.remove('photo-open');
  lastFocusedRuleCard?.focus();
}
function startDragging(event, card) {
  if (event.button !== undefined && event.button !== 0) return;
  const cardBox = card.getBoundingClientRect();
  dragState = {
    card,
    offsetX: event.clientX - cardBox.left,
    offsetY: event.clientY - cardBox.top,
    startX: event.clientX,
    startY: event.clientY,
    moved: false
  };
  highestLayer += 1;
  card.style.zIndex = String(highestLayer);
  card.classList.add('dragging');
  card.setPointerCapture?.(event.pointerId);
  event.preventDefault();
}
function dragPhoto(event) {
  if (!dragState) return;
  const boardBox = dragBoard.getBoundingClientRect();
  if (Math.hypot(event.clientX - dragState.startX, event.clientY - dragState.startY) > 7) dragState.moved = true;
  moveCardWithinBoard(dragState.card, event.clientX - boardBox.left - dragState.offsetX, event.clientY - boardBox.top - dragState.offsetY);
}
function stopDragging(event) {
  if (!dragState) return;
  const { card, moved } = dragState;
  card.classList.remove('dragging');
  if (event) card.releasePointerCapture?.(event.pointerId);
  dragState = null;
  if (event?.type === 'pointerup' && !moved) openRulePhoto(card);
}
dragCards.forEach(card => {
  card.addEventListener('pointerdown', event => startDragging(event, card));
  card.addEventListener('keydown', event => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      openRulePhoto(card);
      return;
    }
    const step = event.shiftKey ? 40 : 15;
    const left = parseFloat(card.style.left || 0);
    const top = parseFloat(card.style.top || 0);
    const moves = { ArrowLeft: [-step, 0], ArrowRight: [step, 0], ArrowUp: [0, -step], ArrowDown: [0, step] };
    if (!moves[event.key]) return;
    event.preventDefault();
    highestLayer += 1;
    card.style.zIndex = String(highestLayer);
    moveCardWithinBoard(card, left + moves[event.key][0], top + moves[event.key][1]);
    byId('dragHelp').textContent = `${card.dataset.rule}: foto movida. Puedes seguir con las flechas.`;
  });
});
dragBoard?.addEventListener('pointermove', dragPhoto);
dragBoard?.addEventListener('pointerup', stopDragging);
dragBoard?.addEventListener('pointercancel', stopDragging);
byId('resetPhotos')?.addEventListener('click', () => {
  organiseRulePhotos();
  byId('dragHelp').textContent = 'Las fotografías han vuelto a su posición inicial.';
});
byId('closeLightbox')?.addEventListener('click', closeRulePhoto);
photoLightbox?.addEventListener('click', event => { if (event.target === photoLightbox) closeRulePhoto(); });
document.addEventListener('keydown', event => { if (event.key === 'Escape') closeRulePhoto(); });
window.addEventListener('resize', () => {
  clearTimeout(window.rulePhotoResizeTimer);
  window.rulePhotoResizeTimer = setTimeout(organiseRulePhotos, 150);
});
window.addEventListener('load', organiseRulePhotos);
organiseRulePhotos();
