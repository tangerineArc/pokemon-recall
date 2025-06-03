# Pokémon Recall · Memory Game

A slick little memory game built with React and powered by PokéAPI. Click unique Pokémon to rack up your score; click one twice, and it's game over. Gotta click 'em all (but only once).

## Features

- 3 levels: _easy_ (5 cards), _medium_ (10 cards), _hard_ (20 cards)
- features over a thousand pokémon
- slick animations and sound effects
- track high score at each level

## Tech Stack

- **React.js** - front-end JavaScript library for building user interfaces
- **Vite** - (dev) build tool and development server
- **JavaScript** - scripting language for the web
- **React Parallax Tilt** - lib for tilt effect and animation
- **PokéAPI** - pokémon data and image provider
- **CSS** - stylesheet language for the web
- **ESLint** - (dev) JavaScript linter

## Repo Structure

- `public/` - contains public assets
- `src/`
  - `assets/` - contains game assets (sounds and backgrounds)
  - `components/` - contains primary UI components
  - `styles/` - contains CSS stylesheets for each component
  - `utils/`
    - `fetch-data.js` - fetch pokémon data
    - `shuffle-array.js` - function to randomly shuffle an array
    - `storage.js` - check local-storage availability
  - `App.jsx` - primary assimilator component
  - `index.css` - default and global styles
  - `main.jsx` - primary file with driver code
- `eslint.config.js` - linter configuration
- `index.html` - main HTML page
- `index.css` - base styles
- `vite.config.js` - build configuration

## Snapshots

[![recall-1.png](https://i.postimg.cc/Nfp2z82d/recall-1.png)](https://postimg.cc/CznKZqN8)

[![recall-2.png](https://i.postimg.cc/WbgTDsTg/recall-2.png)](https://postimg.cc/nCF6gbsh)
