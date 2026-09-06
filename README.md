# AI & IoT Quiz Arena

## Overview
AI & IoT Quiz Arena is a browser-based quiz application designed to test knowledge of artificial intelligence, Internet of Things concepts, and their practical intersection. The project is built with HTML5, CSS3, and vanilla JavaScript, and it runs without any backend or database by using localStorage for persistent settings, leaderboard data, and quiz history.

## Features
- Professional landing page with player name and quiz configuration
- Category selection for AI, IoT, and Mixed rounds
- Difficulty levels: Easy, Medium, and Hard
- 20+ quiz questions covering AI and IoT topics
- Randomized question and option ordering for each quiz session
- 15-second timer with visual warning states and auto-advance
- Immediate answer feedback with explanations and correct answer reveal
- Scoring summary including percentage, accuracy, and time taken
- Final results dashboard with performance messages
- Local leaderboard stored in localStorage
- Quiz history tracking with clear history option
- Theme toggle for dark and light mode with persistence
- Responsive layout for desktop, tablet, and mobile devices
- Keyboard-accessible controls and focus-visible states

## Technologies
- HTML5
- CSS3
- JavaScript
- LocalStorage

## How to Run
Open the project by double-clicking index.html in a browser, or run a local web server such as Live Server in VS Code.

## Project Structure
- index.html — Main app structure and page layout
- style.css — All styling, responsiveness, and theme behavior
- script.js — Quiz logic, scoring, timer, localStorage, and app state management
- README.md — Project overview and usage notes

## Future Improvements
The following are potential future enhancements and are not currently implemented features:
- Real-time multiplayer quiz rooms
- Backend API for centralized data storage
- Authentication and user profiles
- Global leaderboard integration
- Admin quiz creation and management tools
- Database-backed persistence with protected data access
- WebSocket-based live rooms for collaborative play
