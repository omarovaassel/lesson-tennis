import React from 'react';
import s from "./AboutPage.module.scss";
import { Link } from "react-router-dom"

function AboutPage() {
  return (
    <div>
      AboutPage

      {/* навигация по внутренним страницам делается так */}
      <Link to="/about">Link</Link>
      <Link to="/news">Link</Link>
    </div>
  )
}

export default AboutPage