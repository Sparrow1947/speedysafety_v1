
# Speed Safety Nets - Setup Guide

This project is built using **React 19**, **TypeScript**, and **Tailwind CSS**. To run this application on your local machine, follow the flow below.

## 🛠 Prerequisites
Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (Version 18 or higher recommended)
- A code editor like [VS Code](https://code.visualstudio.com/)

## 🚀 How to Start the App

### 1. Extract the Zip
Download and extract the project files to a folder of your choice.

### 2. Open Terminal
Open your terminal (CMD, PowerShell, or Terminal) and navigate to the project root directory:
```bash
cd path/to/extracted-folder
```

### 3. Install Dependencies
Run the following command to install the required libraries (React, Vite, etc.):
```bash
npm install
```

### 4. Launch Development Server
Start the local development server by running:
```bash
npm run dev
```

### 5. Access the Website
Once the server starts, you will see a link in your terminal (usually `http://localhost:5173`). 
- **Ctrl + Click** the link or open your browser and enter the address.

---

## 🏗 Project Architecture
- `index.html`: The main entry point.
- `App.tsx`: Handles the routing logic.
- `pages/`: Contains the individual views (Home, Products, Inquiry, etc.).
- `components/`: Reusable UI elements like `Navbar` and `ProductCard`.
- `store/`: LocalStorage-based inquiry management.

## 📝 Note
This is a **Product Inquiry Portal**. The "Inquiry List" data is stored in your browser's `localStorage`, meaning it persists even if you refresh the page.
