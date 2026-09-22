# Escuelas económicas: ideas que transformaron nuestra sociedad

Página de reportaje para la sección histórica de la **Expo Revista Digital «Innovación para un Futuro Sostenible»**.
Área de Historia — Tercero de Bachillerato General Unificado (BGU).

Sitio web interactivo construido con **HTML5, CSS3 y JavaScript vanilla** (sin frameworks ni dependencias de build).

---

## Contenido del reportaje

| # | Sección | Requisito de la actividad |
|---|---------|---------------------------|
| 1 | Portada con título llamativo | Punto 1 |
| 2 | Introducción: ¿qué es una escuela económica? y conceptos clave | Contexto |
| 3 | Línea de tiempo interactiva con las 8 escuelas | Punto 2 |
| 4 | Cuadro comparativo (época, representante, idea fundamental y papel del Estado) | Punto 3 |
| 5 | Influencia en América Latina y Ecuador | Análisis |
| 6 | Conclusión de 6 líneas con postura crítica | Punto 4 |
| 7 | Actividad interactiva de refuerzo (4 preguntas) | Extra / TIC |
| 8 | Fuentes consultadas en formato APA 7.ª edición | Punto 5 |

**Escuelas incluidas:** fisiocrática, clásica, marxista, neoclásica, keynesiana, Escuela de Chicago, estructuralista y neoliberal.

**Destreza:** CS.H.5.4.34 · **Indicador:** I.CS.H.5.21.1

---

## Estructura del proyecto

```
ExpoRevista-EscuelasEconomicas/
├── index.html          # Estructura y contenido del reportaje
├── css/
│   └── styles.css      # Diseño, animaciones y responsive
├── js/
│   └── app.js          # Datos de las escuelas, navegación, modal y quiz
└── README.md
```

---

## Funcionalidades interactivas

- **Navegación entre páginas** con botones «Anterior» / «Siguiente».
- Flechas del teclado (`←`, `→`, `Inicio`, `Fin`) y **deslizamiento táctil** (swipe).
- **Puntos de navegación** y contador de página con **barra de progreso** de lectura.
- **Línea de tiempo clicable**: cada hito abre una ficha ampliada en una ventana modal.
- **Cuadro comparativo** con filas interactivas (clic o teclado) y códigos de color según el papel del Estado.
- **Gráfico de barras animado** que compara el grado de intervención estatal.
- **Actividad de refuerzo** con 4 preguntas, retroalimentación y puntaje final.
- Enlaces compartibles por sección mediante el ancla de la URL (por ejemplo `#cuadro-comparativo`).
- Diseño **responsive**, respeto por `prefers-reduced-motion` y **hoja de impresión** para PDF.

---

## Cómo ver el sitio en local

Opción 1 — abrir directamente el archivo `index.html` en el navegador.

Opción 2 — levantar un servidor local (recomendado):

```bash
# Python
python -m http.server 8000

# o Node.js
npx serve .
```

Luego visita `http://localhost:8000`.

---

## Publicación en GitHub Pages

1. Crear el repositorio en GitHub y subir el contenido:

```bash
git init
git add .
git commit -m "Reportaje digital: escuelas económicas"
git branch -M main
git remote add origin https://github.com/USUARIO/REPOSITORIO.git
git push -u origin main
```

2. En GitHub: **Settings → Pages → Source: Deploy from a branch → Branch: `main` / `root` → Save**.

3. La página quedará publicada en:

```
https://USUARIO.github.io/REPOSITORIO/
```

> El archivo principal debe llamarse `index.html` (ya lo hace) y no hay carpetas con guion bajo inicial, por lo que **no se necesita** archivo `.nojekyll`.

---

## Fuentes principales

Smith (1776), Marx (1867), Marshall (1890), Keynes (1936), Prebisch (1949), Friedman (1962),
Williamson (1989), Quesnay (1758), MinEduc (2016), Parkin (2018) y CEPAL (2023).
El listado completo con formato APA está en la última sección de la página.

---

## Autoría

Proyecto interdisciplinario de Historia — Tercero de Bachillerato General Unificado.
