<div align="center">

<img src="docs/rainbow.svg" alt="Orbit Studio — a portfolio in seven chapters" width="100%" />

### Thoughtful design. Creative code. A little curiosity.

A vintage-editorial portfolio template for independent designers and creative developers.

![Nuxt](https://img.shields.io/badge/Nuxt-3-00DC82?style=for-the-badge&logo=nuxtdotjs&logoColor=white)
![Vue](https://img.shields.io/badge/Vue-3-4FC08D?style=for-the-badge&logo=vuedotjs&logoColor=white)
![GSAP](https://img.shields.io/badge/GSAP-motion-88CE02?style=for-the-badge)
![Three.js](https://img.shields.io/badge/Three.js-interaction-black?style=for-the-badge&logo=threedotjs)

</div>

---

## ✳ The idea

Orbit Studio tells the story of a creative practice through seven chapters: an editorial opening, approach, work, process, motion, signal and a closing invitation. It includes a draggable 3D sculpture, interactive television controls (power, brightness, hue, monochrome and focus) and a small keyboard-accessible orbit game.

## ↗ Get started

Requires Node.js 22 or newer.

```bash
npm ci
npm run dev
```

Open the local URL printed in your terminal. To generate a static site:

```bash
npm run generate
npx serve .output/public
```

## ✦ Make it yours

- Edit copy, navigation, and email addresses in `pages/index.vue`.
- Change game rules in `pages/game.vue`.
- Adjust colors, typography, layouts, and animations in `assets/css/main.css`.
- Replace the portfolio imagery in `public/assets/` with your own appropriately licensed work.
- Edit the 3D sculpture in `components/OrbitScene.client.vue`.
- Update page metadata in `nuxt.config.ts` and this README with your details.

The portfolio's name, email and project copy are placeholders. Replace them before publishing. The included editorial images are AI-generated placeholders, not documentary photographs.

## ◌ Structure

```text
assets/css/            Global styling
components/            Interactive 3D scene
pages/                 Portfolio and game routes
public/assets/         Portfolio imagery
.github/workflows/     GitHub Pages deployment
```

## ♥ A note on motion

This project reduces CSS and scroll-triggered motion when `prefers-reduced-motion` is enabled. Review and test any new motion and keyboard interactions before launch.

---

<div align="center"><b>MADE FOR THE CURIOUS ✳</b><br/><sub>Design, develop, explore.</sub></div>
