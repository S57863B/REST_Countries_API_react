# Where in the World? - REST Countries SPA

A responsive Single Page Application (SPA) that integrates with the REST Countries dataset to display comprehensive global data. Built with a focus on deep architectural modularity, strict type safety, and custom UI/UX design without relying on external CSS frameworks.

## 🚀 Features

* **Interactive Dashboard:** Search by country name or filter dynamically by Region, Subregion, and alphabetical order.
* **Global State Management:** Features a persistent "Want to Visit" list utilizing the React Context API and `localStorage`.
* **Custom Theming:** Pure CSS variable implementation for seamless Dark/Light mode toggling.
* **Deep Routing:** Dynamic routes using React Router to view detailed country statistics and navigate interactively through bordering nations.
* **Bespoke UI/UX:** Designed entirely with pure CSS, featuring heavy border-radiuses, glassmorphism effects, and smooth state-change animations.

## Tech Stack

* **Core:** React 18, TypeScript, Vite
* **Routing:** React Router v6
* **Styling:** CSS only
* **State Management:** React Context API, Custom Hooks (`useFilters`, `useCountries`, `useTheme`)

## Getting Started

### Prerequisites
* Node.js
* npm

### Installation

1. Clone the repository
2. Install dependencies: `npm install`
3. Start the development server: `npm run dev`