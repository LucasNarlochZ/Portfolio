import { useState, type Dispatch } from "react";
import ThemeToggle from "./themeToggle";

interface HeaderProps {
    darkTheme: boolean;
    setDarkTheme: Dispatch<boolean>;
}

function Header({ darkTheme, setDarkTheme }: HeaderProps) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="w-full fixed z-50 bg-gray-100 dark:bg-gray-800 shadow-md">
            <div className="max-w-screen-xl mx-auto px-4 py-3 flex items-center justify-between">
                <div className="flex flex-col">
                    <p className="text-xl dark:text-white text-black">Lucas</p>
                    <p className="text-sm dark:text-white text-black">Fullstack Developer</p>
                </div>

                <button
                    className="md:hidden text-black dark:text-white"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle Menu"
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        {isMenuOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>

                <div className="hidden md:flex gap-8 items-center">
                    <ul className="flex gap-6">
                        {["Home", "AboutMe", "Projects", "Skills", "Contact", "SideProjects"].map((section) => (
                            <li key={section} className="underline-animate group dark:text-white text-black">
                                <a href={`#${section}`}>{section.replace(/([A-Z])/g, ' $1').trim()}</a>
                            </li>
                        ))}
                    </ul>
                    <div className="flex gap-4">
                        <ThemeToggle darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
                    </div>
                </div>
            </div>

            {isMenuOpen && (
                <div className="md:hidden px-4 pb-4">
                    <ul className="flex flex-col gap-3">
                        {["Home", "AboutMe", "Projects", "Skills", "Contact", "SideProjects"].map((section) => (
                            <li key={section} className="underline-animate group">
                                <a
                                    href={`#${section}`}
                                    onClick={() => setIsMenuOpen(false)} // Close menu on click
                                    className="block py-1 text-black dark:text-white"
                                >
                                    {section.replace(/([A-Z])/g, ' $1').trim()}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <div className="flex gap-4 mt-4">
                        <ThemeToggle darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
                    </div>
                </div>
            )}
        </nav>
    );
}

export default Header;
