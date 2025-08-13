<p align="center">
  <img src="https://i.postimg.cc/RZF5Bbzf/etch-a-sketch-github-banner.png" alt="Etch-a-Sketch Banner" width="900" />
</p>

<div align="center">

# Etch-a-Sketch 🎨

A simple browser sketchpad built to practice JavaScript DOM manipulation as part of  
[The Odin Project – Foundations: Etch-a-Sketch](https://www.theodinproject.com/lessons/foundations-etch-a-sketch).

[![HTML](https://img.shields.io/badge/HTML-5-E34F26?logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS](https://img.shields.io/badge/CSS-3-1572B6?logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6-F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

</div>

---

## Table of Contents
- [Live Demo](#live-demo)
- [Features](#features)
- [How to Use](#how-to-use)
- [Run Locally](#run-locally)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Notes](#notes)

---

## Live Demo
- **[View on GitHub Pages](https://younesbardach.github.io/Etch-a-Sketch/)**

---

## Features
- Dynamic grid generated with JavaScript (default **10×10**)
- Resize on demand via the **“Create Grid”** button (up to **100** squares per side)
- Hover to draw: squares color on mouseover with random **RGB** values
- Progressive darkening: each hover reduces brightness by **10%** until fully dark
- Built with **Flexbox** for the grid layout

---

## How to Use
1. **Open** the app.  
2. **Hover** over the grid to draw.  
3. Click **“Create Grid”** to enter a new size (max **100**).

---

## Run Locally
1. **Clone** the repository:
   ~~~bash
   git clone https://github.com/<your-github-username>/Etch-a-Sketch.git
   cd Etch-a-Sketch
   ~~~
2. **Open** `index.html` in your browser.  
   *(Optional)* Use a Live Server extension for automatic reload.

---

## Tech Stack
- **HTML**
- **CSS** (Flexbox)
- **Vanilla JavaScript** (DOM APIs, events)

---

## Project Structure
~~~
.
├── index.html          # Page skeleton and asset wiring
├── style/
│   └── style.css       # Styles for container and grid
└── script/
    └── script.js       # Grid generation, event handling, drawing logic
~~~

---

## Notes
- Drawing surface is **500×500 px**; cell sizes are computed from the chosen grid size.
- Inputs larger than **100** are rejected to avoid performance issues.
