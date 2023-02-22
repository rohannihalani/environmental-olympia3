import "./App.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <main>
      <div className="top">
        <section className="left">
          <h1>
            Environmental <br />
            Science <br />
            Olympia
          </h1>
        </section>
        <section className="right">
          <a className="btn learn-btn" href="#bottomID">
            Learn More
          </a>
        </section>
      </div>
      <div className="bottom" id="bottomID">
        <section className="info">
          <article>
            <h2>What is the Environmental Olympia?</h2>
            <p className="info-text">
              The Environmental Olympia is a competition run by the
              environmental advocacy group in the Dublin Mayor's Council. Our
              goal is to help spread environmental awareness in our community
              and help our local environment. The Olympia will have three
              different stages: two testing stages, then one presentation stage,
              where a participant will present a solution they have for helping
              their local environment.
            </p>
          </article>
          <article>
            <h2>Who can participate in the Environmental Olympia?</h2>
            <p className="info-text">Anyone in grades K-12!</p>
          </article>
          <article>
            <h2>Who should I contact if I have any more questions?</h2>
            <p className="info-text">
              Feel free to email{" "}
              <a className="email">dmcenvironmentaladvocacy@gmail.com</a> if you
              have any questions about the Environmental Olympia, or just the
              environment in general!
            </p>
          </article>
        </section>
        <section className="footer-section">
          <Link to="/quiz" className="quiz-btn btn">
            Start Test
          </Link>
        </section>
      </div>
    </main>
  );
}

export default Home;
