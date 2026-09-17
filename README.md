# TP1 — Desarrollo de Sistemas Web Frontend

Sitio web grupal desarrollado para la materia de Desarrollo de Sistemas Web Frontend (Tecnicatura Superior en Desarrollo de Software). El proyecto integra una arquitectura en HTML5 semantico, diseno visual modular con CSS vanilla y dinamismo interactivo con JavaScript puro.

---

## Integrantes del Equipo

- **Judith Grau** — Coordinacion & Portada
  - GitHub: [github.com/JudithGrau](https://github.com/JudithGrau)
  - Pagina: `judith.html`
- **Matias Jara** — Sistema Visual & Perfil
  - GitHub: [github.com/matijara11](https://github.com/matijara11)
  - Pagina: `matias.html`
- **Lucas Luccaroni** — Responsive Design & Testing
  - GitHub: [github.com/lucasluccaroni](https://github.com/lucasluccaroni)
  - Portafolio: [lucasluccaroni-portfolio.vercel.app](https://lucasluccaroni-portfolio.vercel.app/)
  - Pagina: `lucas.html`
- **Mauro Flores** — Bitacora & Documentacion
  - GitHub: [github.com/floresmauroezequiel1992-beep](https://github.com/floresmauroezequiel1992-beep)
  - Pagina: `mauro.html`

---

## Tecnologias Utilizadas

- **HTML5**: Maquetacion semantica accesible (`header`, `nav`, `main`, `section`, `article`, `footer`).
- **CSS3 Vanilla**: Sistema de tokens de diseno mediante variables personalizadas (`:root`), composicion con Flexbox y CSS Grid, estetica double-bezel y glassmorphism.
- **JavaScript Vanilla (ES6+)**: Manipulacion del DOM, scroll programmatico y generacion dinamica de contenidos.
- **Google Fonts**: Familias tipograficas *Sora* (titulos) e *Inter* (cuerpo de texto).
- **FontAwesome 6.7.2**: Iconografia vectorial para perfiles y metadatos.

---

## Guia de Estilos

### Paleta de Colores (Tokens Hexadecimales)
- Fondo Principal (`--color-bg`): `#071A1F`
- Superficie de Tarjetas (`--color-surface`): `#102A30`
- Superficie Interactiva (`--color-surface-hover`): `#163840`
- Acento Primario Azul (`--color-blue`): `#38BDF8`
- Acento Coral / Enlace (`--color-coral`): `#FF8066`
- Texto Principal (`--color-text`): `#F1F5F9`
- Texto Secundario (`--color-text-secondary`): `#A7B8BA`
- Bordes Sutiles (`--color-border`): `rgba(56, 189, 248, 0.15)`

### Tipografia
- Titulos y Encabezados: `Sora`, sans-serif (pesos 600, 700, 800).
- Texto General y Parrafos: `Inter`, sans-serif (pesos 300, 400, 500, 600).

---

## Estructura de Archivos y Carpetas

```
tp1-desarrollo-sistemas-web-frontend/
├── index.html              # Portada principal y presentacion del equipo
├── judith.html             # Perfil individual de Judith Grau
├── matias.html             # Perfil individual de Matias Jara
├── lucas.html              # Perfil individual de Lucas Luccaroni
├── mauro.html              # Perfil individual de Mauro Flores
├── bitacora.html           # Registro cronologico de decisiones y dificultades
│
├── css/
│   └── style.css           # Hoja de estilos compartida, variables y diseno responsive
│
├── js/
│   └── script.js           # Logica interactiva global y de perfiles individuales
│
├── img/                    # Activos graficos y fotografias del equipo
│   ├── judith.png
│   ├── matias.png
│   ├── lucas.png
│   ├── mauro.png
│   └── other/
│       ├── perfil-mati/    # Imagenes de discos y peliculas de Matias
│       └── perfil-lucas/   # Imagenes de discos y peliculas de Lucas
│
└── README.md               # Documentacion tecnica del proyecto
```

---

## Funciones Dinamicas en JavaScript

### 1. Portada (`index.html`) — Selector Aleatorio de Integrantes
Permite seleccionar al azar un integrante del equipo al presionar el boton de dinamica grupal, renderizando una tarjeta destacada con avatar, rol y enlace directo al perfil.

### 2. Perfil de Judith (`judith.html`) — Generador de Recomendaciones
Genera de manera aleatoria consejos tecnicos y combinaciones de peliculas o discos para sesiones de programacion.

### 3. Perfil de Matias (`matias.html`) — Carruseles de Scroll Horizontal
Permite el desplazamiento interactivo horizontal bidireccional mediante botones prev/next sobre las colecciones de cine y musica, complementado con tarjetas con efecto hover y zoom.

### 4. Perfil de Lucas (`lucas.html`) — Carruseles Multimedia de Cine y Musica
Desplazamiento horizontal interactivo bidireccional mediante botones prev/next sobre su coleccion de 6 peliculas y 5 discos musicales, complementado con tarjetas con efecto hover, zoom animado y ficha descriptiva en overlay.

### 5. Perfil de Mauro (`mauro.html`) — Revelador de Informacion Adicional
Expande y alterna datos biograficos y de certificaciones complementarias de forma dinamica.

---

## Diseno Adaptativo (Responsive Design)

El proyecto cuenta con una arquitectura adaptable en `css/style.css` que responde a los tres breakpoints obligatorios de la consigna:

1. **Desktop / Base (1200px)**:
   - Limite de contenedor centrado en 1200px con margenes laterales de proteccion.
   - Grilla del equipo (`.team-grid`) distribuida en 4 columnas equilibradas.
   - Posicionamiento seguro de botones de navegacion en carruseles sin desborde de ventana.

2. **Tablet / Pantallas Medianas (900px)**:
   - Reorganizacion de la grilla de integrantes a 2 columnas.
   - Barra de navegacion en flujo vertical alineado.
   - Adaptacion de componentes hero y tarjetas `double-bezel` para visualizacion legible en orientacion vertical.

3. **Mobile (400px)**:
   - Grilla de tarjetas colapsada a 1 columna (ancho del 100%).
   - Barra de navegacion compacta con wrap de enlaces para prevenir desbordes horizontales (`overflow-x: hidden`).
   - Escala tipografica fluida mediante funciones `clamp()`.
   - Dimensionamiento tactil accesible en botones y enlaces interactivos (minimo 44px de altura segun recomendaciones WCAG).

---

## Uso de Inteligencia Artificial y Criterio de Privacidad

En cumplimiento con la seccion didactica y transversal del trabajo practico:

- **Herramientas y Modelos Utilizados**: Se empleo Antigravity con modelos de lenguaje avanzados como asistente tecnico de programacion en pares (Pair Programming).
- **Alcance de la Asistencia**: Asistencia en la modularizacion de estilos CSS, estructuracion semantica de `lucas.html`, arquitectura de media queries adaptativas y documentacion tecnica.
- **Criterio de Privacidad y Seguridad**: No se incorporaron credenciales reales ni claves privadas en el repositorio. Se mantuvieron las directivas de seguridad locales y el seguimiento incremental en `docs/estado_actual.md` protegido en `.gitignore`.
- **Criterio Propio y Adaptacion**: Cada bloque de codigo generado fue revisado, adaptado a la arquitectura de diseno preexistente definida por el equipo (`double-bezel`, paleta de tokens `:root`, convenciones de nombres) y validado manualmente para asegurar total armonia visual y estructural.
