# Etch‑a‑Sketch

A simple browser sketchpad built to practice JavaScript DOM manipulation as part
of
[The Odin Project – Foundations: Etch‑a‑Sketch](https://www.theodinproject.com/lessons/foundations-etch-a-sketch).

## Live demo

- Deployed with GitHub Pages. Visit the deployment badge for this repo or use
  the standard Pages URL format:
  `https://<your-github-username>.github.io/Etch-a-Sketch/`

## Features

- Dynamic grid generated with JavaScript (default 10×10)
- Resize on demand via the "Create Grid" button and a prompt (up to 100 squares
  per side)
- Hover to draw: squares color on mouseover with random RGB values
- Progressive darkening: each hover reduces brightness by 10% until the cell
  becomes fully dark
- Built with Flexbox for the grid layout

## How to use

1. Open the app.
2. Hover over the grid to draw.
3. Click "Create Grid" to enter a new size (max 100). The canvas keeps the same
   overall size while cell dimensions adjust.

## Run locally

1. Clone the repository
   ```bash
   git clone https://github.com/<your-github-username>/Etch-a-Sketch.git
   cd Etch-a-Sketch
   ```
2. Open `index.html` in your browser (no build step required). For a smoother
   experience, you can use an extension like Live Server.

## Tech

- HTML
- CSS (Flexbox)
- Vanilla JavaScript (DOM APIs, events)

## Project structure

- `index.html`: Page skeleton and asset wiring
- `style/style.css`: Styles for the container and grid
- `script/script.js`: Grid generation, event handling, and drawing logic

## Notes

- The drawing surface is 500×500 px; cell sizes are computed from the chosen
  grid size.
- Input larger than 100 is rejected to avoid performance issues.

## Acknowledgements

- Built as a practice project for The Odin Project. Lesson:
  [Project: Etch‑a‑Sketch](https://www.theodinproject.com/lessons/foundations-etch-a-sketch).
