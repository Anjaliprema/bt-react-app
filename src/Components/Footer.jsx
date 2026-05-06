export default function Footer() {
  return (
    <footer className="footer">
      <h3>Better Tomorrow</h3>
      <div className="footer-content">
        <div className="footer-column">
          <div className="footer-links">
            <h4>Reach us</h4>
            <p>+91 9750503595</p>
            <p>+91 8300287195</p>
            <p>training@thebettertomorrow.in</p>
          </div>
        </div>
        <div className="footer-column">
          <h4>Company</h4>
          <a href="#about">About</a>
          <a href="#achievements">Achievements</a>
          <a href="#placements">Placement Status</a>
        </div>
        <div className="footer-column">
          <h4>Support</h4>
          <a href="#">Forums</a>
          <a href="#">JS Documentations</a>
          <a href="#">Quiz</a>
        </div>
        <div className="footer-column">
          <h4>Quick Links</h4>
          <a href="#">React JS</a>
          <a href="#">Node JS</a>
          <a href="#">Javascript</a>
          <a href="#">Feedback</a>
        </div>
      </div>
      <div className="footer-column newsletter" style={{ paddingBottom: "20px" }}>
        <h4>JOIN OUR COMMUNITY</h4>
        <p>Will send you job updates and our community news</p>
        <div className="newsletter-form">
          <input type="email" placeholder="Your email" />
          <button className="btn-2">Subscribe</button>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2025 Better Tomorrow Training Institute. All rights reserved.</p>
      </div>
    </footer>
  );
}