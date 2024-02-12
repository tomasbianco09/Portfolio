import "./Contact.css";

function Contact() {
  return (
    <div id="contact" className="contact-container">
      <h2 className="contact-title">Contact</h2>
      <h3 className="contact-subtitle">
        If you are intrested in <span>hiring</span> me, <span>call</span> me,
        <span> email</span> me or <span>connect</span> and chat with me via
        LinkedIn!
      </h3>
      <div className="contact-card">
        <div className="contact-link">
            <i className="bx bx-md bxs-phone"></i>
          <p>+54 261 2068823</p>
        </div>
        <div className="contact-link">
            <i className="bx bx-md bxs-envelope"></i>
          <p>work.tomasbianco@gmail.com</p>
        </div>
        <div className="contact-link">
          <a
            href="https://www.linkedin.com/in/facundo-bianco-2625ab248/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bx bx-md bxl-linkedin-square"></i>
          </a>
          <p>Tomas Bianco</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;