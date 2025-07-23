import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./contexts/ThemeContext";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import Learning from "./pages/Learning";
import Footer from "./components/Footer";
import ReadMore from "./pages/readMore";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./styles/custom.css";

/**
 * Main App Component
 * - Sets up routing between Home and Learning pages
 * - Wraps the entire app with ThemeProvider for dark/light mode functionality
 * - Includes global navigation and footer components
 */
function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="App">
          {/* Global Navigation Component */}
          <Navigation />

          {/* Main Content Area with Route Switching */}
          <main>
            <Routes>
              {/* Home page route - contains all portfolio sections */}
              <Route path="/" element={<Home />} />

              {/* Learning page route - blog/news style page for coding content */}
              <Route path="/learning" element={<Learning />} />
              <Route path="/learning/readMore/:id" element={<ReadMore />} />
            </Routes>
          </main>

          {/* Global Footer Component */}
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
