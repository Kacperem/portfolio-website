import React from "react";

export default function Footer() {
  return (
    <footer className="mb-10 px-4 text-center text-gray-500">
      <small className="mb-2 block text-xs">
        &copy; 2023 Kacper Rembisz. This is my portfolio website.
      </small>
      <p className="mb-2 text-xs">
        <span className="font-semibold">About this website:</span> built with
        React & Next.js, Typescript, Tailwind CSS, Framer Motion.
      </p>
      <p className="text-xs"><a href="https://github.com/Kacperem/portfolio-website">github repo can be found here</a></p>
    </footer>
  );
}
