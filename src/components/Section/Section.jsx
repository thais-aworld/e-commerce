import React from 'react';
import { Link } from 'react-router-dom';
import './Section.css';

const Section = ({ title, titleAlign = 'left', link, children }) => {
  const titleClasses = `section-title ${titleAlign === 'center' ? 'text-center' : 'text-left'}`;

  return (
    <section className="section-container">
      <div className="section-header">
        <h2 className={titleClasses}>{title}</h2>
        {link && (
          <Link to={link.href} className="section-link">
            {link.text}
          </Link>
        )}
      </div>
      <div className="section-content">
        {children}
      </div>
    </section>
  );
};

export default Section;