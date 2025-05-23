# React TODO App Challenge

## Overview
This is a React TODO app built with functional components and hooks. It supports adding, editing (via a Bootstrap modal), deleting, and toggling task completion status. The project uses Create React App (CRA) for setup and Bootstrap 5 for styling.

## Features
- List all TODO items dynamically
- Add new TODO tasks
- Edit existing tasks using a Bootstrap modal for better user experience
- Mark tasks as complete or incomplete
- Delete tasks
- Responsive UI with Bootstrap 5 components and styling

## Testing
- Jest and React Testing Library are used for unit and component tests
- Tests cover component rendering, event handling (add, edit, delete), and modal behavior
- All test suites pass successfully to ensure reliable functionality

## Assumptions & Improvements
- The app currently uses local React state; no backend or persistent storage is integrated
- Possible improvements:
  - Add localStorage or backend integration for data persistence
  - Add more detailed validations for task input

## How to Run  
- Clone the repository:  
  - git clone <repository-url>  
  - cd <repository-folder>  
- npm install
- npm start
- npm test
