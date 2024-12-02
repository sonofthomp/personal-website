import React, { useState, useRef } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Experience from "../components/Experience.js";
import EXPERIENCES from "../data/Experiences.js";
import COURSEWORK from "../data/Coursework.js";
import PROJECTS from "../data/Projects.js";

export default function Home() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isProjectsOpen, setIsProjectsOpen] = useState(false);
  const [highlightProjects, setHighlightProjects] = useState(false);
  const [highlightContact, setHighlightContact] = useState(false);
  const contactRef = useRef(null);
  const fullStackRef = useRef(null);

  const handleProjectsClick = () => {
    setHighlightProjects(true);
    setTimeout(() => {
      setHighlightProjects(false);
    }, 1000);
  };

  const handleContactClick = () => {
    setHighlightContact(true);
    setTimeout(() => {
      setHighlightContact(false);
    }, 1000);
  };

  function applyStyling(strHTML, bgColor = "rgb(219, 235, 242)") {
    const italicized = /_(.*?)_/g;
    let result = strHTML.replace(
      italicized,
      (match, p1) => `<b style="background-color: ${bgColor};">${p1}</b>`
    );

    const linkified = /\[([^\]]+)\]\(([^)]+)\)/g;
    result = result.replace(linkified, '<a href="$2">$1</a>');

    return result;
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Gabriel Thompson</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.mainContainer}>
        <main className={styles.main}>
          <br />
          <br />
          <div className={styles.headerContainer}>
            <h1 className={styles.title}>Hi, I'm Gabriel Thompson.</h1>
          </div>
          <div>
            <p className={styles.description}>
              I'm a second-year Computer Science student at the University of
              Toronto, originally from New York City. I'm a{" "}
              <a
                style={{ color: "rgb(1, 0, 228)" }}
                onClick={() => {
                  setIsProjectsOpen(true);
                  handleProjectsClick();
                  setTimeout(
                    () =>
                      fullStackRef.current.scrollIntoView({
                        behavior: "smooth",
                      }),
                    100
                  );
                }}
              >
                full-stack web developer
              </a>
              , music theory nerd, long-distance cyclist, and{" "}
              <a href="https://www.gabe.biz/blog/index.html">
                (occasional) blogger
              </a>
              .
            </p>
            <p className={styles.description}>
              I'm currently looking for Summer 2025 internships, and would love
              to get{" "}
              <a
                style={{ color: "rgb(1, 0, 228)" }}
                onClick={() => {
                  setIsContactOpen(true);
                  handleContactClick();
                  contactRef.current.scrollIntoView({ behavior: "smooth" });
                }}
              >
                in touch
              </a>
              ! You can find my resume <a href="./resume.pdf">here</a>.
            </p>
            <details>
              <summary>
                <span>You can read about my experience here:</span>
              </summary>
              <>
                <ul>
                  <li>
                    <p style={{ marginTop: 0, marginLeft: 0, marginBottom: 0 }}>
                      <span className={styles.highlightedText}>
                        Internships
                      </span>
                    </p>
                  </li>
                  <ul>
                    {EXPERIENCES.map((experienceDetails) =>
                      experienceDetails.experienceType == "internship" ? (
                        <Experience
                          details={experienceDetails}
                          applyStyling={applyStyling}
                        />
                      ) : null
                    )}
                  </ul>
                  <li>
                    <p style={{ marginTop: 0, marginLeft: 0, marginBottom: 0 }}>
                      <span className={styles.highlightedText}>
                        Club Positions
                      </span>
                    </p>
                  </li>
                  <ul>
                    {EXPERIENCES.map((experienceDetails) =>
                      experienceDetails.experienceType == "club" ? (
                        <Experience
                          details={experienceDetails}
                          applyStyling={applyStyling}
                        />
                      ) : null
                    )}
                  </ul>
                  <li>
                    <p style={{ marginTop: 0, marginLeft: 0, marginBottom: 0 }}>
                      <span className={styles.highlightedText}>Mentorship</span>
                    </p>
                  </li>
                  <ul>
                    {EXPERIENCES.map((experienceDetails) =>
                      experienceDetails.experienceType == "mentorship" ? (
                        <Experience
                          details={experienceDetails}
                          applyStyling={applyStyling}
                        />
                      ) : null
                    )}
                  </ul>
                </ul>
              </>
            </details>
            <details
              ref={fullStackRef}
              open={isProjectsOpen}
              onToggle={(e) => {
                setIsProjectsOpen(e.target.open);
                console.log(e.target.open);
              }}
            >
              <summary>
                <span className={highlightProjects ? "highlight" : ""}>
                  You can check out some of my projects here:
                </span>
              </summary>
              <>
                <ul>
                  {PROJECTS.map(({ name, description, imagePath, link }) => (
                    <li>
                      <b>{name}</b> –{" "}
                      <span
                        dangerouslySetInnerHTML={{
                          __html: applyStyling(description),
                        }}
                      />{" "}
                      <a href={link}> Link to project</a>
                      <br />
                      <a href={link}>
                        <Image
                          src={imagePath}
                          className={styles.projectImage}
                          width={0}
                          height={0}
                          sizes="100vw"
                          style={{
                            border: "2px dashed green",
                            borderRadius: 10,
                          }}
                        />
                      </a>
                    </li>
                  ))}
                </ul>
              </>
            </details>
            <details>
              <summary>
                <span>You can check out my coursework here:</span>
              </summary>
              <ul>
                {[
                  ["First-Year", "2023-24"],
                  ["Second-Year", "2024-25"],
                  ["Third-Year", "2025-26"],
                  ["Fourth-Year", "2026-27"],
                ].map((yearInfo) => (
                  <React.Fragment key={yearInfo[1]}>
                    <li>
                      {yearInfo[0]} ({yearInfo[1]})
                    </li>
                    <ul>
                      {COURSEWORK.map(({ code, name, url, grade, session }) =>
                        session == yearInfo[1] ? (
                          <li>
                            <a href={url}>{code}</a> – {name}
                          </li>
                        ) : null
                      )}
                    </ul>
                  </React.Fragment>
                ))}
              </ul>
            </details>
            <br />
            <details>
              <summary>
                <span>You can find some of my professional links here:</span>
              </summary>
              <ul>
                <li>
                  <a href="https://www.gabe.biz/blog/index.html">Blog</a>
                </li>
                <li>
                  <a href="./resume.pdf">Resume</a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/sonofthomp/">LinkedIn</a>
                </li>
                <li>
                  <a href="https://www.github.com/sonofthomp/">GitHub</a>
                </li>
                <li>
                  <a href="https://devpost.com/gabrielezrathompson">Devpost</a>
                </li>
              </ul>
            </details>
            <details>
              <summary>
                <span>You can find some of my personal links here:</span>
              </summary>
              <ul>
                <li>
                  <a href="https://www.threads.net/@thabriel.ghompson">
                    Threads
                  </a>
                </li>
                <li>
                  <a href="https://www.last.fm/user/sonofthomp">Last.fm</a>
                </li>
                <li>
                  <a href="https://musescore.com/user/27451576">Musescore</a>
                </li>
                <li>
                  <a href="https://open.spotify.com/user/31niyjmqktx6m4bndfsm4w62s5gu?si=60d3aa9177194da3">
                    Spotify
                  </a>
                </li>
                <li>
                  <a href="https://instagram.com/thabriel.ghompson">
                    Instagram
                  </a>
                </li>
              </ul>
            </details>
            <details
              ref={contactRef}
              open={isContactOpen}
              onToggle={(e) => {
                setIsContactOpen(e.target.open);
                console.log(e.target.open);
              }}
            >
              <summary>
                <span className={highlightContact ? "highlight" : ""}>
                  You can contact me here:
                </span>
              </summary>
              <ul>
                <li>
                  Email:{" "}
                  <a href="mailto:gabrielezrathompson@gmail.com">
                    gabrielezrathompson [at] gmail [dot] com
                  </a>
                </li>
                <li>Discord: @son.of.mr.green.genes</li>
              </ul>
            </details>
          </div>
        </main>
      </div>

      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          // background-color: rgb(245, 245, 250);
          background-color: white;
          padding: 0;
          margin: 0;
        }
        * {
          box-sizing: border-box;
        }

        p,
        summary,
        li {
          line-height: 1.5;
          font-size: 1.1rem;
          font-family: "Abyssinica SIL", serif;
          font-weight: 400;
          font-style: normal;
          word-spacing: -0.1rem;
          text-align: justify;
          text-justify: inter-word;
        }

        li {
          padding-left: 0px;
        }

        @media only screen and (max-width: 600px) {
          li {
            text-align: left;
          }
        }

        @media only screen and (min-width: 600px) {
          li {
            text-align: justify;
          }
        }

        li,
        ul {
          margin-top: 0;
        }

        li > p {
          margin-top: 0.15em;
          margin-bottom: 0;
        }

        ul ul {
          padding-left: 2vw;
        }

        a {
          text-decoration: none;
        }

        summary > span {
          margin-left: 5px;
        }

        span {
          transition: background-color 0.5s ease;
        }

        .highlight {
          background-color: rgb(238, 239, 139);
        }
      `}</style>
    </div>
  );
}
