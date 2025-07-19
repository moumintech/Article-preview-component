# Frontend Mentor - Article preview component

![Design preview for the Article preview component coding challenge](./design/desktop-preview.jpg)

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [How I Solved It](#how-i-solved-it)
  - [CSS Architecture](#css-architecture)
  - [Biggest Challenge](#biggest-challenge)
- [Deploy](#deploy)

## Overview

This project is a responsive article preview card with interactive sharing functionality.  
It adapts to both desktop and mobile layouts, based on a challenge from [Frontend Mentor](https://www.frontendmentor.io/).

## Features

| Feature           | Description                                                           |
| ----------------- | --------------------------------------------------------------------- |
| Responsive Layout | Built with CSS Grid and Flexbox, adapting to screen size              |
| Share Interaction | Share buttons dynamically appear and disappear using JavaScript       |
| Adaptive Behavior | Share popup changes layout depending on viewport (desktop vs. mobile) |

## Tech Stack

- **HTML5**
- **CSS3** (Grid, Flexbox, Media Queries)
- **JavaScript** (DOM manipulation, class toggling)

## How I Solved It

### CSS Architecture

- I used **CSS Grid** for the main layout inside the `<article>` element: two columns (image + text) on desktop, one column on mobile.
- The `.card` (article container) was built with Grid in both mobile and desktop layouts.
- **Flexbox** was used:
  - In the `body` to center the card
  - In the author section to align the avatar, name, and date
  - In the share button and container elements
- I followed a **mobile-first approach**, using breakpoints at `375px` and `1440px`.

### Biggest Challenge

The biggest challenge was handling the **mobile share popup visibility and positioning**:

- I used conditional class toggling via JavaScript: `.sharing` and `.no-sharing`
- The gray share bar had to be positioned at the bottom using `position: absolute`, while the parent container was set to `relative`
- It was tricky to ensure the share button didn’t overflow the card in mobile mode
- Adjustments like `margin-left: 0`, `justify-content: center`, and `pointer` cursor were needed to keep everything clean and aligned

> This took a lot of testing to get right, especially in `.share-container` and `.author.sharing` on mobile.

## Deploy

You can view the live demo here: [Live Site](https://arcticle.netlify.app/)
