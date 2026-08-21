import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech Computer Science</h4>
                <h5>PIEMR, Indore</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Pursuing a Bachelor of Technology in Computer Science at Prestige
              Institute of Engineering Management & Research, Indore. Building a strong
              foundation in programming, data structures, algorithms, and software
              development.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>DLCC — Sponsorship Team</h4>
                <h5>DevLeague DSA Campus Chapter · PIEMR</h5>
              </div>
              <h3>2026</h3>
            </div>
            <p>
              Currently part of the Sponsorship Team at the DevLeague DSA Campus
              Chapter, contributing to sponsorship outreach, partner coordination,
              and supporting technical community events and activities.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Freelance Web Developer</h4>
                <h5>Self-Employed / Freelance</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Building modern websites and responsive web experiences for practical
              use cases, focusing on frontend development, website customization,
              and turning ideas into functional digital experiences.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
