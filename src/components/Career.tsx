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
                <h4>Digital Marketer & SEO Expert</h4>
                <h5>Home Appliances Warehouse Limited</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Execute SEO, PPC, and data-driven digital marketing strategies to increase online visibility, lead generation, and sales conversions.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Education Content Marketing Specialist</h4>
                <h5>Fine Tutors</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Develop SEO-optimized educational content and digital campaigns to boost student engagement, brand visibility, and lead generation.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Visiting Faculty – Digital Marketing</h4>
                <h5>NMIIS, Mumbai</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              Delivered industry-focused digital marketing training and mentorship, equipping students with practical skills in SEO, social media marketing, and digital strategy.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Lecturer – Computer Science</h4>
                <h5>National Academy of Event Management Institute, Mumbai</h5>
              </div>
              <h3>2022</h3>
            </div>
            <p>
              Conducted lectures and practical sessions in computer science, programming, and software development, fostering analytical and problem-solving skills among students.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Quality Assurance Engineer</h4>
                <h5>Rebel Foods, Mumbai</h5>
              </div>
              <h3>2021</h3>
            </div>
            <p>
              Performed software testing, regression testing, and defect tracking to ensure product quality and improve system performance across software releases.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Manual & Automation Test Engineer</h4>
                <h5>Quality Kiosk Pvt. Ltd., Mumbai</h5>
              </div>
              <h3>2019</h3>
            </div>
            <p>
              Designed and executed manual and automated test cases, identifying software defects and improving application reliability through structured QA processes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
