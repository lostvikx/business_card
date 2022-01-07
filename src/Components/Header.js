import React from "react";

export default function Header() {
  return (
    <header>
      <section>
        <h1 className="full-name">Vikram S. Negi</h1>
        <h2 className="job">Full-Stack Web Developer 👋</h2>
        <a href="#" className="web-link">Website ↗</a>
      </section>
      <section className="two-btns">
        <div className="btn">
          <a href="mailto:viknegi0@gmail.com" className="cta-btn white-btn">
            <ion-icon name="mail"></ion-icon> <span>Email</span>
          </a>
        </div>
        <div className="btn">
          <a href="https://www.linkedin.com/in/vikram-singh-negi/" className="cta-btn blue-btn">
            <ion-icon name="logo-linkedin"></ion-icon> <span>LinkedIn</span>
          </a>
        </div>
      </section>
    </header>
  );
}