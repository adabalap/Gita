# Srimad Bhagavad Gita - A Modern Web App

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Welcome to the Srimad Bhagavad Gita web application project! This is a modern, responsive, and installable Progressive Web App (PWA) designed to bring the sacred teachings of the Bhagavad Gita to a global audience, starting with a beautiful presentation in Telugu and English.

Our goal is to create an accessible, feature-rich, and serene digital experience for anyone interested in exploring the timeless wisdom of the Gita. We believe in the power of open-source to build something truly special and invite you to be a part of this journey.

**[Live Demo](https://adabala.com/Gita/)**

---

## ✨ Features

This application is packed with features to provide a comprehensive and immersive experience:

-   **Complete 18 Chapters**: Access all chapters and verses of the Srimad Bhagavad Gita.
-   **Bilingual Support**: Seamlessly toggle between **Telugu** and **English** for verses, meanings, and descriptions.
-   **Text-to-Speech Audio**: Listen to the verses and their explanations in the selected language with word-by-word highlighting.
-   **Random Verse**: Discover a new verse with a single click to receive a moment of wisdom.
-   **Specific Verse Navigation**: Easily jump to any chapter and verse.
-   **Favorites**: Save your favorite verses for quick access and reflection.
-   **Progressive Web App (PWA)**: Install the app on your mobile or desktop device for an offline, native-app-like experience.
-   **Social Sharing**: Share the wisdom with friends and family on platforms like WhatsApp, Facebook, and Twitter.
-   **Modern & Serene UI**: A beautiful, calming interface with divine-inspired aesthetics and smooth animations.
-   **Responsive Design**: Enjoy a seamless experience on any device, from mobile phones to desktop computers.
-   **Client-Side Caching**: Verses are cached locally for faster loading and offline access.

## 📸 Screenshots

*(Add screenshots of the application here to showcase the UI. For example: a screenshot of the main verse display, the side menu, and the app on a mobile device.)*

| Mobile View | Desktop View |
| :---: | :---: |
| *Mobile Screenshot* | *Desktop Screenshot* |

---

## 🛠️ Tech Stack

The project leverages modern web technologies to deliver a fast and reliable experience.

-   **Frontend**:
    -   HTML5
    -   CSS3 (with Tailwind CSS for utility-first styling)
    -   Vanilla JavaScript (ES6+)
-   **Backend API**:
    -   A public Flask-based API hosted at `https://gita.adabala.com` provides the verse data and translation services.
-   **PWA & Offline Support**:
    -   Service Workers for caching and offline functionality.
    -   Web App Manifest for installability.
-   **APIs**:
    -   Web Speech API for Text-to-Speech.
    -   Web Share API for native sharing.

---

## 🚀 Getting Started

Want to run the project locally? Follow these simple steps.

### Prerequisites

Since the app fetches data from a live API, you don't need to set up a local backend. You only need a local web server to serve the `index.html` file. Many tools can do this, such as:

-   Live Server extension for VS Code.
-   Node.js `http-server` package (`npm install -g http-server`).
-   Python's built-in server (`python -m http.server`).

### Installation

1.  **Fork the repository:**
    Click the "Fork" button at the top right of this page.

2.  **Clone your fork:**
    ```sh
    git clone https://github.com/YOUR_USERNAME/Gita.git
    ```

3.  **Navigate to the project directory:**
    ```sh
    cd Gita
    ```

4.  **Start a local server:**
    If you're using Python 3, for example:
    ```sh
    python -m http.server
    ```
    Now, open your browser and go to `http://localhost:8000`. The app should be running!

---

## 🤝 How to Contribute

We welcome contributions from everyone! Whether you're fixing a bug, adding a new feature, or improving documentation, your help is valuable. Here’s how you can contribute:

1.  **Find an issue or suggest an idea:**
    -   Look through the existing issues to find something to work on.
    -   If you have a new idea or find a bug, please open a new issue.

2.  **Follow the development process:**
    -   Fork the repository and clone it locally.
    -   Create a new branch for your feature or bugfix:
        ```sh
        git checkout -b feature/your-amazing-feature
        ```
    -   Make your changes. Write clean, readable code.
    -   Commit your changes with a descriptive message:
        ```sh
        git commit -m "feat: Add your amazing feature"
        ```
    -   Push your branch to your fork:
        ```sh
        git push origin feature/your-amazing-feature
        ```
    -   Open a **Pull Request** to the `main` branch of the original repository.

### Areas for Contribution

-   **Improve Accessibility (a11y)**: Enhance ARIA attributes and keyboard navigation.
-   **Add New Features**: Ideas include a search functionality, user notes on verses, or theming options.
-   **Enhance UI/UX**: Suggest and implement design improvements.
-   **Refactor Code**: Improve code quality, performance, and readability.
-   **Fix Bugs**: Tackle any of the open issues.

---

## 📜 License

This project is licensed under the MIT License. See the LICENSE file for details.

---

Made with ❤️ and reverence. Jai Shri Krishna!