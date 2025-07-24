import React from "react";
import { Link } from "react-router-dom";

const ContentSections = () => (
  <div className="content">
    <section>
      <h3>Our new Menu</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        voluptatibus, cumque, voluptates, quia quos quisquam voluptatibus
        cumque voluptates quia quos quisquam voluptatibus cumque
        voluptates quia quos.
      </p>
      <a href="#menu">View Menu</a>
    </section>

    <section>
      <h3>Book a Table</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        voluptatibus, cumque, voluptates, quia quos quisquam voluptatibus
        cumque voluptates quia quos quisquam voluptatibus cumque
        voluptates quia quos.
      </p>
      <Link to="/booking">Make a Reservation</Link>
    </section>

    <section>
      <h3>Opening Hours</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        voluptatibus, cumque, voluptates, quia quos quisquam voluptatibus
        cumque voluptates quia quos quisquam voluptatibus cumque
        voluptates quia quos.
        <br />
        <strong>Monday to Friday: 9am - 10pm</strong><br />
        <strong>Saturday: 10am - 11pm</strong><br />
        <strong>Sunday: 11am - 9pm</strong>
      </p>
    </section>
  </div>
);

export default ContentSections;
