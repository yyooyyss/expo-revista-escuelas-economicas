/* ==========================================================================
   Expo Revista Digital · "Escuelas económicas"
   Lógica de la aplicación: datos, renderizado, navegación, modal y actividad.
   ========================================================================== */

'use strict';

/* --------------------------------------------------------------------------
   1. DATOS · Las ocho escuelas económicas
   level: min = Estado limitado | mid = moderado | max = activo
   value: grado de intervención estatal en escala 1–5 (gráfico de barras)
   -------------------------------------------------------------------------- */
const ESCUELAS = [
  {
    id: 'fisiocratica',
    year: '1750',
    era: 'Siglo XVIII · Francia',
    name: 'Fisiocrática',
    rep: 'François Quesnay',
    idea: 'La riqueza proviene principalmente de la tierra y de la agricultura; existe un orden natural que el ser humano no debe alterar.',
    state: 'Limitada',
    level: 'min',
    value: 1,
    color: '#2f8f7b',
    detail: [
      'Los fisiócratas fueron los primeros en pensar la economía como un sistema con leyes propias, anteriores a la voluntad del rey. Para Quesnay, solo la agricultura generaba valor nuevo; la industria y el comercio simplemente transformaban o trasladaban esa riqueza.',
      'Su lema «laissez faire, laissez passer» (dejar hacer, dejar pasar) es el primer antecedente del liberalismo económico: el Estado debía limitarse a proteger la propiedad y no entorpecer el orden natural del mercado.',
      'En América Latina esta idea se refleja en las economías coloniales y en el peso histórico de la hacienda y del latifundio, donde la posesión de la tierra definió durante siglos quién tenía poder económico.'
    ]
  },
  {
    id: 'clasica',
    year: '1776',
    era: 'Fines del siglo XVIII · Escocia',
    name: 'Clásica',
    rep: 'Adam Smith',
    idea: 'La libertad económica y el funcionamiento del mercado: la búsqueda del interés individual genera beneficio colectivo mediante la «mano invisible».',
    state: 'Limitado',
    level: 'min',
    value: 2,
    color: '#d4a537',
    detail: [
      'Con «La riqueza de las naciones» (1776), Adam Smith fundó la primera escuela económica moderna. Sostuvo que la riqueza no viene de acumular oro, sino del trabajo y de su división en tareas especializadas.',
      'Su idea central es que el mercado se autorregula: los precios funcionan como señales que orientan la producción sin necesidad de que un rey o un gobierno decida qué producir. El Estado debe limitarse a la defensa, la justicia y ciertas obras públicas.',
      'Es la base de casi todo el pensamiento económico posterior: las escuelas neoclásica, de Chicago y neoliberal son, en gran medida, desarrollos de sus principios. Influyó en la apertura comercial y en los tratados de libre comercio que América Latina firmó desde los años 90.'
    ]
  },
  {
    id: 'marxista',
    year: '1848',
    era: 'Siglo XIX · Alemania',
    name: 'Marxista',
    rep: 'Karl Marx (con F. Engels)',
    idea: 'Crítica al capitalismo y a la desigualdad entre clases: el trabajador produce valor que el capitalista no le paga (plusvalía).',
    state: 'Amplia / activa',
    level: 'max',
    value: 5,
    color: '#e05a4f',
    detail: [
      'Marx no solo analizó la economía: propuso una interpretación histórica según la cual cada sociedad se organiza alrededor de quién posee los medios de producción. La lucha entre clases sería el motor del cambio histórico.',
      'Su crítica a la explotación y a la concentración de la riqueza dio fundamento teórico a los movimientos obreros, sindicales y campesinos del siglo XX, y a proyectos de economía planificada donde el Estado asume la propiedad de los medios de producción.',
      'En el Ecuador y la región, el marxismo alimentó las luchas por la tierra y las reformas agrarias de 1964 y 1973, el movimiento sindical y, hoy, los debates sobre desigualdad, redistribución y derechos sociales.'
    ]
  },
  {
    id: 'neoclasica',
    year: '1870',
    era: '1870–1890 · Europa',
    name: 'Neoclásica',
    rep: 'Alfred Marshall',
    idea: 'Oferta, demanda y decisiones individuales: el valor depende de la utilidad marginal y el equilibrio se logra donde se cruzan ambas curvas.',
    state: 'Limitado',
    level: 'min',
    value: 2,
    color: '#e8c66a',
    detail: [
      'Marshall, junto a Jevons, Walras y Menger, matematizó la economía. Dejó de preguntar por el origen de la riqueza y se concentró en cómo se forman los precios en el punto de equilibrio entre oferta y demanda.',
      'Introdujo el concepto de utilidad marginal: el valor de un bien depende de la satisfacción que aporta la última unidad consumida. El consumidor aparece como un actor racional que maximiza su beneficio.',
      'Es la base de la microeconomía que se enseña hoy. Sus herramientas (elasticidad, equilibrio de mercado, costo marginal) se aplican a diario en las políticas de precios, impuestos y regulación de mercados en Ecuador y América Latina.'
    ]
  },
  {
    id: 'keynesiana',
    year: '1936',
    era: '1936 · Reino Unido',
    name: 'Keynesiana',
    rep: 'John Maynard Keynes',
    idea: 'El Estado debe actuar frente a las crisis económicas estimulando la demanda para sostener el empleo y la producción.',
    state: 'Activo',
    level: 'max',
    value: 4,
    color: '#5b8def',
    detail: [
      'Tras la Gran Depresión de 1929, Keynes demostró que el mercado no siempre se corrige solo: puede quedarse en un equilibrio con desempleo masivo y baja inversión.',
      'Su propuesta fue revolucionaria: ante una recesión, el Estado debe gastar e invertir para reactivar la economía, incluso con déficit temporal. Creó además los fundamentos de la contabilidad nacional y del sistema financiero internacional de posguerra.',
      'En la región inspiró el Estado planificador y benefactor: en Ecuador, la planificación estatal desde los años 60 y sobre todo el gasto público del boom petrolero (1972) financiaron escuelas, carreteras y hospitales.'
    ]
  },
  {
    id: 'estructuralista',
    year: '1950',
    era: '1949–1950 · CEPAL, América Latina',
    name: 'Estructuralista',
    rep: 'Raúl Prebisch',
    idea: 'Explica las desigualdades entre economías centrales y periféricas: la periferia vende materia prima barata y compra productos industrializados caros.',
    state: 'Importante',
    level: 'mid',
    value: 3,
    color: '#2f8f7b',
    detail: [
      'Prebisch y la CEPAL describieron el deterioro de los términos de intercambio: con el tiempo, la periferia necesita exportar cada vez más para comprar lo mismo, porque el progreso técnico se concentra en el centro.',
      'Su receta fue la industrialización por sustitución de importaciones (ISI): producir internamente lo que antes se importaba, con apoyo del Estado mediante crédito, aranceles y planificación.',
      'Es la escuela latinoamericana por excelencia. Marcó a Brasil, Argentina, México y Chile, y en Ecuador orientó la industrialización desde los años 60 y el papel del Estado como motor del desarrollo durante el auge petrolero.'
    ]
  },
  {
    id: 'chicago',
    year: '1960',
    era: '1950–1970 · Universidad de Chicago',
    name: 'Escuela de Chicago',
    rep: 'Milton Friedman',
    idea: 'Defensa del libre mercado y del monetarismo: la inflación se controla regulando la cantidad de dinero, no con más gasto público.',
    state: 'Reducido',
    level: 'min',
    value: 2,
    color: '#c98a2b',
    detail: [
      'Friedman cuestionó las recetas keynesianas y sostuvo que la intervención estatal suele generar más problemas de los que resuelve. Su tesis central: «la inflación es siempre y en todo lugar un fenómeno monetario».',
      'Propuso que el banco central crezca la masa monetaria a un ritmo fijo y predecible, y defendió la libertad individual y la desregulación de los mercados.',
      'Sus ideas se aplicaron en Chile (los «Chicago Boys») y se convirtieron en el sustento teórico del giro neoliberal de los años 80 y 90 en toda América Latina, incluido el ajuste aplicado en Ecuador antes de la dolarización.'
    ]
  },
  {
    id: 'neoliberal',
    year: '1989',
    era: '1970–1990 · Consenso de Washington',
    name: 'Neoliberal',
    rep: 'Diversos autores (Hayek, Friedman, Williamson)',
    idea: 'Apertura económica, privatización y reducción del Estado: el mercado asignado de forma más eficiente los recursos.',
    state: 'Reducido',
    level: 'min',
    value: 1,
    color: '#8b5cf6',
    detail: [
      'No es una teoría con un solo autor, sino un programa de política económica difundido por el Fondo Monetario Internacional y el Banco Mundial, sistematizado por John Williamson en 1989 como «Consenso de Washington».',
      'Sus diez recetas incluyen disciplina fiscal, liberalización de precios y del comercio, privatización de empresas públicas, desregulación y apertura a la inversión extranjera.',
      'En América Latina produjo las grandes privatizaciones de los 90, la firma de tratados de libre comercio y, en Ecuador, la crisis financiera de 1998–2000 que culminó con la dolarización en el año 2000 durante el gobierno de Jamil Mahuad.'
    ]
  }
];

/* --------------------------------------------------------------------------
   2. ACTIVIDAD · Preguntas de refuerzo
   -------------------------------------------------------------------------- */
const PREGUNTAS = [
  {
    q: '¿Quién es el representante principal de la escuela clásica y qué obra publicó en 1776?',
    opts: [
      'Adam Smith, con «La riqueza de las naciones».',
      'François Quesnay, con el «Tableau économique».',
      'Karl Marx, con «El capital».',
      'Milton Friedman, con «Capitalismo y libertad».'
    ],
    ok: 0,
    fb: 'Correcto: la escuela clásica nace con Adam Smith y «La riqueza de las naciones» (1776), donde expone la «mano invisible» del mercado.'
  },
  {
    q: '¿Qué escuela sostiene que la riqueza proviene principalmente de la tierra y la agricultura?',
    opts: ['La neoclásica', 'La fisiocrática', 'La keynesiana', 'La estructuralista'],
    ok: 1,
    fb: 'Correcto: la fisiocrática (Quesnay) consideraba a la agricultura como la única actividad generadora de riqueza nueva.'
  },
  {
    q: '¿Qué autor explicó, desde la CEPAL, la desigualdad entre economías centrales y periféricas?',
    opts: ['Alfred Marshall', 'Raúl Prebisch', 'John Maynard Keynes', 'Friedrich Hayek'],
    ok: 1,
    fb: 'Correcto: Raúl Prebisch desarrolló la teoría centro–periferia y propuso la industrialización por sustitución de importaciones.'
  },
  {
    q: '¿En qué año el Ecuador adoptó el dólar como moneda oficial?',
    opts: ['1989', '1995', '2000', '2008'],
    ok: 2,
    fb: 'Correcto: la dolarización se adoptó en el año 2000, en el contexto de la crisis financiera de 1998–2000 y del giro neoliberal de esos años.'
  }
];

/* --------------------------------------------------------------------------
   3. UTILIDADES
   -------------------------------------------------------------------------- */
const $  = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));
const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* --------------------------------------------------------------------------
   4. RENDER · Línea de tiempo
   -------------------------------------------------------------------------- */
function renderTimeline() {
  const box = $('#timeline');
  if (!box) return;

  ESCUELAS.forEach((e, i) => {
    const wrap = document.createElement('div');
    wrap.className = 'tl-item';
    wrap.dataset.level = e.level;
    wrap.style.animationDelay = `${i * 60}ms`;

    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'tl-btn';
    btn.setAttribute('aria-label', `Ver ficha de la escuela ${e.name}`);
    btn.innerHTML = `
      <span class="tl-year">${e.year}</span>
      <span class="tl-name">${e.name}</span>
      <span class="tl-rep">${e.rep}</span>
      <span class="tl-arrow" aria-hidden="true">›</span>`;
    btn.addEventListener('click', () => openModal(e));

    wrap.appendChild(btn);
    box.appendChild(wrap);
  });
}

/* --------------------------------------------------------------------------
   5. RENDER · Cuadro comparativo
   -------------------------------------------------------------------------- */
function renderTable() {
  const body = $('#ctableBody');
  if (!body) return;

  ESCUELAS.forEach(e => {
    const tr = document.createElement('tr');
    tr.style.setProperty('--acc', e.color);
    tr.tabIndex = 0;
    tr.setAttribute('role', 'button');
    tr.setAttribute('aria-label', `Ver detalle de la escuela ${e.name}`);
    tr.innerHTML = `
      <td>${e.name}</td>
      <td>${e.era}</td>
      <td>${e.rep}</td>
      <td>${e.idea}</td>
      <td><span class="pill">${e.state}</span></td>`;
    tr.addEventListener('click', () => openModal(e));
    tr.addEventListener('keydown', ev => {
      if (ev.key === 'Enter' || ev.key === ' ') { ev.preventDefault(); openModal(e); }
    });
    body.appendChild(tr);
  });
}

/* --------------------------------------------------------------------------
   6. RENDER · Gráfico de barras
   -------------------------------------------------------------------------- */
function renderChart() {
  const box = $('#chartBars');
  if (!box) return;

  ESCUELAS.forEach(e => {
    const row = document.createElement('div');
    row.className = 'bar';
    row.style.setProperty('--acc', e.color);
    row.innerHTML = `
      <span class="bar__label">${e.name}</span>
      <span class="bar__track"><span class="bar__fill" data-w="${e.value * 20}"></span></span>
      <span class="bar__val">${e.value}</span>`;
    box.appendChild(row);
  });
}

function animateChart() {
  $$('.bar__fill').forEach((el, i) => {
    setTimeout(() => { el.style.width = `${el.dataset.w}%`; }, prefersReduced ? 0 : i * 90);
  });
}

/* --------------------------------------------------------------------------
   7. RENDER · Actividad interactiva
   -------------------------------------------------------------------------- */
let answered = 0;
let score = 0;

function renderQuiz() {
  const box = $('#quiz');
  if (!box) return;

  PREGUNTAS.forEach((p, qi) => {
    const card = document.createElement('article');
    card.className = 'q';

    const txt = document.createElement('p');
    txt.className = 'q__text';
    txt.textContent = `${qi + 1}. ${p.q}`;

    const opts = document.createElement('div');
    opts.className = 'q__opts';

    p.opts.forEach((o, oi) => {
      const b = document.createElement('button');
      b.type = 'button';
      b.className = 'opt';
      b.textContent = o;
      b.addEventListener('click', () => {
        $$('.opt', opts).forEach(x => { x.disabled = true; });
        const fb = card.querySelector('.q__fb');
        if (oi === p.ok) {
          b.classList.add('opt--ok');
          fb.textContent = '✓ ' + p.fb;
          score++;
        } else {
          b.classList.add('opt--bad');
          $$('.opt', opts)[p.ok].classList.add('opt--ok');
          fb.textContent = '✗ ' + p.fb;
        }
        answered++;
        if (answered === PREGUNTAS.length) showQuizResult();
      });
      opts.appendChild(b);
    });

    const fb = document.createElement('p');
    fb.className = 'q__fb';

    card.append(txt, opts, fb);
    box.appendChild(card);
  });
}

function showQuizResult() {
  const res = $('#quizResult');
  const sc = $('#quizScore');
  const msg = $('#quizMsg');
  if (!res || !sc || !msg) return;

  res.hidden = false;
  sc.textContent = `${score} / ${PREGUNTAS.length}`;
  if (score === PREGUNTAS.length) msg.textContent = '¡Excelente! Dominas las escuelas económicas y su influencia en la región.';
  else if (score >= 2) msg.textContent = 'Buen trabajo. Revisa la línea de tiempo y el cuadro comparativo para afinar los detalles.';
  else msg.textContent = 'Vale la pena repasar el reportaje completo antes de volver a intentarlo.';
  res.scrollIntoView({ behavior: prefersReduced ? 'auto' : 'smooth', block: 'nearest' });
}

function resetQuiz() {
  const box = $('#quiz');
  const res = $('#quizResult');
  if (box) box.innerHTML = '';
  if (res) res.hidden = true;
  answered = 0;
  score = 0;
  renderQuiz();
}

/* --------------------------------------------------------------------------
   8. MODAL
   -------------------------------------------------------------------------- */
let lastFocus = null;

function openModal(e) {
  const modal = $('#modal');
  if (!modal) return;

  lastFocus = document.activeElement;
  $('#modalEra').textContent = `${e.year} · ${e.era}`;
  $('#modalTitle').textContent = e.name;

  $('#modalBody').innerHTML = `
    <dl>
      <dt>Representante</dt><dd>${e.rep}</dd>
      <dt>Idea principal</dt><dd>${e.idea}</dd>
      <dt>Papel del Estado</dt><dd>${e.state}</dd>
    </dl>
    ${e.detail.map(p => `<p>${p}</p>`).join('')}`;

  modal.hidden = false;
  document.body.style.overflow = 'hidden';
  $('.modal__close', modal).focus();
}

function closeModal() {
  const modal = $('#modal');
  if (!modal || modal.hidden) return;
  modal.hidden = true;
  document.body.style.overflow = '';
  if (lastFocus && typeof lastFocus.focus === 'function') lastFocus.focus();
}

/* --------------------------------------------------------------------------
   9. NAVEGACIÓN ENTRE PÁGINAS
   -------------------------------------------------------------------------- */
const slides = $$('.slide');
let current = 0;

function buildDots() {
  const dots = $('#dots');
  if (!dots) return;

  slides.forEach((s, i) => {
    const b = document.createElement('button');
    b.type = 'button';
    b.className = 'dotbtn';
    b.setAttribute('role', 'tab');
    b.setAttribute('aria-label', `Ir a: ${s.dataset.title || 'página ' + (i + 1)}`);
    b.setAttribute('aria-selected', i === 0 ? 'true' : 'false');
    b.addEventListener('click', () => goTo(i));
    dots.appendChild(b);
  });
  $('#totPage').textContent = slides.length;
}

function goTo(index, dir) {
  if (index < 0 || index >= slides.length || index === current) return;

  const from = slides[current];
  const to = slides[index];
  const forward = dir !== undefined ? dir > 0 : index > current;

  from.classList.remove('slide--active', 'slide--back');
  to.classList.remove('slide--back');
  if (!forward) to.classList.add('slide--back');
  void to.offsetWidth;
  to.classList.add('slide--active');

  current = index;
  updateUI();
  onSlideShown(to, index);
}

function updateUI() {
  const dots = $$('.dotbtn');
  dots.forEach((d, i) => d.setAttribute('aria-selected', i === current ? 'true' : 'false'));

  const pct = ((current + 1) / slides.length) * 100;
  const fill = $('#progressFill');
  if (fill) fill.style.width = `${pct}%`;

  const bar = $('.progress');
  if (bar) {
    bar.setAttribute('aria-valuenow', current + 1);
    bar.setAttribute('aria-valuemax', slides.length);
  }

  const cur = $('#curPage');
  if (cur) cur.textContent = current + 1;

  const prev = $('#btnPrev');
  const next = $('#btnNext');
  if (prev) prev.disabled = current === 0;
  if (next) next.disabled = current === slides.length - 1;

  // Historial con hash para poder compartir el enlace de cada página
  const slug = (slides[current].dataset.title || 'pagina').toLowerCase()
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/\s+/g, '-');

  // Puede fallar al abrir el archivo con file://, por eso se protege con try/catch
  try { history.replaceState(null, '', `#${slug}`); } catch (err) { /* file:// en algunos navegadores */ }

  window.scrollTo({ top: 0, behavior: prefersReduced ? 'auto' : 'smooth' });
}

function onSlideShown(slide, index) {
  if (slide.classList.contains('slide--cover')) runCounters();
  if ($('#chartBars', slide)) animateChart();
  const dotActive = $$('.dotbtn')[index];
  if (dotActive && dotActive.scrollIntoView) {
    dotActive.scrollIntoView({ block: 'nearest', inline: 'center', behavior: prefersReduced ? 'auto' : 'smooth' });
  }
}

/* --------- Contador animado de la portada --------- */
function runCounters() {
  $$('.stat__num').forEach(el => {
    const target = parseInt(el.dataset.count, 10);
    const suffix = el.dataset.suffix || '';
    if (prefersReduced) { el.textContent = target + suffix; return; }

    const dur = 1200;
    const t0 = performance.now();
    const step = now => {
      const p = Math.min((now - t0) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(target * eased) + suffix;
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  });
}

/* --------------------------------------------------------------------------
   10. EVENTOS GLOBALES
   -------------------------------------------------------------------------- */
function bindEvents() {
  const prev = $('#btnPrev');
  const next = $('#btnNext');
  if (prev) prev.addEventListener('click', () => goTo(current - 1, -1));
  if (next) next.addEventListener('click', () => goTo(current + 1, 1));

  // Botones internos con data-go
  $$('[data-go]').forEach(b => {
    b.addEventListener('click', () => {
      const dir = b.dataset.go;
      if (dir === 'next') goTo(current + 1, 1);
      else if (dir === 'prev') goTo(current - 1, -1);
      else if (dir === 'first') goTo(0, -1);
      else if (dir === 'last') goTo(slides.length - 1, 1);
    });
  });

  // Teclado
  document.addEventListener('keydown', ev => {
    if (!$('#modal').hidden) {
      if (ev.key === 'Escape') closeModal();
      return;
    }
    if (ev.target.matches('input, textarea, select')) return;
    if (ev.key === 'ArrowRight' || ev.key === 'PageDown') { ev.preventDefault(); goTo(current + 1, 1); }
    else if (ev.key === 'ArrowLeft' || ev.key === 'PageUp') { ev.preventDefault(); goTo(current - 1, -1); }
    else if (ev.key === 'Home') { ev.preventDefault(); goTo(0, -1); }
    else if (ev.key === 'End') { ev.preventDefault(); goTo(slides.length - 1, 1); }
  });

  // Modal
  const modal = $('#modal');
  if (modal) {
    $$('[data-close]', modal).forEach(el => el.addEventListener('click', closeModal));
  }

  // Deslizar (swipe) en pantallas táctiles
  let x0 = null, y0 = null;
  document.addEventListener('touchstart', ev => {
    if (ev.touches.length !== 1) return;
    x0 = ev.touches[0].clientX;
    y0 = ev.touches[0].clientY;
  }, { passive: true });

  document.addEventListener('touchend', ev => {
    if (x0 === null || !$('#modal').hidden) return;
    const dx = ev.changedTouches[0].clientX - x0;
    const dy = ev.changedTouches[0].clientY - y0;
    if (Math.abs(dx) > 70 && Math.abs(dx) > Math.abs(dy) * 1.6) {
      goTo(dx < 0 ? current + 1 : current - 1, dx < 0 ? 1 : -1);
    }
    x0 = y0 = null;
  }, { passive: true });

  // Reinicio del quiz
  const rq = $('#quizReset');
  if (rq) rq.addEventListener('click', resetQuiz);

  // Flechas del teclado visibles solo en escritorio
  if (window.matchMedia('(hover: none)').matches) {
    document.documentElement.classList.add('is-touch');
  }
}

/* --------------------------------------------------------------------------
   11. INICIALIZACIÓN
   -------------------------------------------------------------------------- */
function init() {
  const y = $('#year');
  if (y) y.textContent = new Date().getFullYear();

  renderTimeline();
  renderTable();
  renderChart();
  renderQuiz();
  buildDots();
  bindEvents();

  // Abrir en la página indicada por el hash (enlace compartible)
  const hash = decodeURIComponent(location.hash.replace('#', '') || '');
  if (hash) {
    const idx = slides.findIndex(s => {
      const slug = (s.dataset.title || '').toLowerCase()
        .normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/\s+/g, '-');
      return slug === hash;
    });
    if (idx > 0) {
      slides[0].classList.remove('slide--active');
      slides[idx].classList.add('slide--active');
      current = idx;
    }
  }

  updateUI();
  onSlideShown(slides[current], current);
}

document.addEventListener('DOMContentLoaded', init);
