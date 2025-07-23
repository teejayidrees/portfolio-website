import React, { useState, useEffect } from "react";
import { Menu, X, Download, Github, Linkedin, Mail } from "lucide-react"; //imports neccesary stuffs

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); //used to configure when menu should be open or closed
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-gray-900/95 backdrop-blur-md border-b border-gray-800"
          : "bg-transparent"
      }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button
              onClick={() => scrollToSection("hero")}
              className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent hover:from-blue-300 hover:to-purple-400 transition-all duration-300">
              &lt;Ahmad/&gt;
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {["About", "Skills", "Projects", "Experience", "Contact"].map(
              (item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-gray-300 hover:text-blue-400 transition-colors duration-300 font-medium">
                  {item}
                </button>
              )
            )}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="https://github.com/teejayidrees"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://linkedin.com/in/teejayidrees"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
              <Linkedin className="h-5 w-5" />
            </a>
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white px-4 py-2 rounded-lg font-medium transition-all duration-300 flex items-center space-x-2">
              <Download className="h-4 w-4" />
              <span>Resume</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-400 hover:text-white transition-colors duration-300">
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-900/95 backdrop-blur-md border-t border-gray-800">
              {["About", "Skills", "Projects", "Experience", "Contact"].map(
                (item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="block w-full text-left px-3 py-2 text-gray-300 hover:text-blue-400 hover:bg-gray-800/50 rounded-md transition-all duration-300">
                    {item}
                  </button>
                )
              )}
              <div className="flex items-center space-x-4 px-3 py-2">
                <a
                  href="https://github.com/teejayidrees"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href="https://linkedin.com/in/teejayidrees"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                  <Linkedin className="h-5 w-5" />
                </a>
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white px-4 py-2 rounded-lg font-medium transition-all duration-300 flex items-center space-x-2">
                  <Download className="h-4 w-4" />
                  <span>Resume</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
