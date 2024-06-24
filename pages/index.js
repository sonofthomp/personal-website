import React from "react";
import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const COURSEWORK = [
  {
    code: "CSC110",
    name: "Foundations of Computer Science I",
    url: "https://artsci.calendar.utoronto.ca/course/csc110y1",
    grade: 4.0,
    session: "2023-24",
  },
  {
    code: "CSC111",
    name: "Foundations of Computer Science II",
    url: "https://artsci.calendar.utoronto.ca/course/csc111h1",
    grade: 4.0,
    session: "2023-24",
  },
  {
    code: "MAT137",
    name: "Calculus with Proofs",
    url: "https://artsci.calendar.utoronto.ca/course/mat137y1",
    grade: 3.7,
    session: "2023-24",
  },
  {
    code: "MAT223",
    name: "Linear Algebra I",
    url: "https://artsci.calendar.utoronto.ca/course/mat223h1",
    grade: -1,
    session: "2023-24",
  },
  {
    code: "VIC172",
    name: "Physical Sciences Today",
    url: "https://artsci.calendar.utoronto.ca/course/vic172y1",
    grade: 4.0,
    session: "2023-24",
  },
  {
    code: "VIC173",
    name: "Philosophy of Science for Physical Scientists",
    url: "https://artsci.calendar.utoronto.ca/course/vic173y1",
    grade: 4.0,
    session: "2023-24",
  },
];

const PROJECTS = [
  {
    name: "PawPoints",
    imagePath: "/pics/pawpoints.png",
    description: `
      _Svelte_, _Google Firebase_, _TypeScript_, and _Tailwind.css_-based website to allow users
      to track and feed local stray cats. Visuals created with _Mapbox_, project containerized
      using _Docker_. Won 1st place overall (out of 54 teams) at NewHacks 2023, for which my
      team was awarded $600.
    `,
    link: "https://devpost.com/software/pawpoints",
  },
  {
    name: "Once Upon a Chat",
    imagePath: "/pics/onceuponachat.jpg",
    description: `
      _React.js_, _Next.js_, _Google Firebase_, _TypeScript_, and _Tailwind.css_-based website
      allowing users to upload WhatsApp group chats and get reports on top messagers and top
      users (it's kind of like Spotify Wrapped, but for WhatsApp). Authentication and database
      done with _Google Firebase_, word cloud done with _react-wordcloud_. Created for
      UofTHacks 2024.
    `,
    link: "https://devpost.com/software/once-upon-a-chat",
  },
  {
    name: "Writing Center Website",
    imagePath: "/pics/writingcenterwebsite.png",
    description: `
      _Python Flask_, _SQLite_ and _Bulma.css_-based website I built for my high school's
      writing center to manage edit requests. Includes authentication system for 300+
      accounts, editor feedback system, and email notification system to send 2,000+ emails to
      500+ email addresses. Has been used by 900+ students to complete edit requests. Hosted
      on DigitalOcean. You can see it in action
      [here](https://www.youtube.com/watch?v=K8xT3u3Lj24) and
      [here](https://www.youtube.com/watch?v=4iq2oe5fs0g).
    `,
    link: "http://198.199.123.9/",
  },
  {
    name: "Layover Calculator",
    imagePath: "/pics/layovercalculator.png",
    description: `
      _Python Flask_, _SQL_, _Bootstrap_, and _Yelp API_-based website allowing users to find
      local activities (restaurants, hotels, and other business) near airports during
      layovers. Includes an account system, and allows users to upvote/downvote attractions.
      Built for my high school Software Development class.
    `,
    link: "https://github.com/SNirloy/p1_api/tree/main",
  },
  {
    name: "Personal Blog",
    imagePath: "/pics/blog.png",
    description: `
      My personal blog. I've written several posts about CS & math-related topics that
      interest me, including SHA-256 encryption, 12-tone equal temperament, and the
      Mandelbrot set.
    `,
    link: "https://devpost.com/software/once-upon-a-chat",
  },
];

export default function Home() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  function applyStyling(html) {
    const italicized = /_(.*?)_/g;
    let result = html.replace(
      italicized,
      (match, p1) =>
        `<b style="background-color: rgb(219, 235, 242);">${p1}</b>`
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
          <br />
          {/* <div className="row">
            <div className={styles.leftNavBar + "col-sm-3"}>
              <p>Hello</p>
            </div>
            <div className="col-sm-9">
              <p>Hello</p>
            </div>
          </div> */}
          <div className={styles.headerContainer}>
            <h1 className={styles.title}>Hi, I'm Gabriel Thompson.</h1>
          </div>
          {/* <Image
            className={styles.picOfMe}
            style={{ marginLeft: "auto" }}
            src="/me.png"
            width={100}
            height={100}
          /> */}
          <div>
            <p className={styles.description}>
              I'm rising second-year Computer Science student at the University
              of Toronto, originally from New York City. I'm a{" "}
              <a href="sdffds">full-stack web developer</a>,{" "}
              <a href="dfshfshjd">music theory nerd</a>,{" "}
              <a href="fdshfdhsj">long-distance cyclist</a>, and (occasional){" "}
              <a href="./blog">blogger</a>.
            </p>

            <p className={styles.description}>
              I'm currently looking for Summer 2025 internships, and would love
              to get{" "}
              <a
                style={{ color: "rgb(1, 0, 228)" }}
                onClick={() => {
                  setIsContactOpen(true);
                  console.log(isContactOpen);
                }}
              >
                in touch
              </a>
              !
            </p>

            {/* <p
              className={styles.description}
              style={{ marginTop: 0, marginBottom: 0 }}
            >
              Currently, I'm:
            </p>
            <ul>
              <li>
                <p>Working as a Software Engineering Intern @ Snorkle Labs</p>
              </li>
              <li>
                <p>A General Council Member and Web Developer @ UofT's CSSU</p>
              </li>
              <li>
                <p>
                  A Technical Writer at{" "}
                  <a href="https://utmist.gitlab.io/">UTMIST</a>
                </p>
              </li>
            </ul> */}
            {/* <p style={{ marginTop: 0 }}>
              Currently, I'm working as a Software Engineering Intern @{" "}
              <a href="https://www.linkedin.com/company/snorkle/">
                Snorkle Labs
              </a>
              . Previously, I created the Stuyvesant Writing Center website and
              was a Research Intern at CUNY Graduate Center. I'm currently a
              General Council member and web developer at UofT's{" "}
              <a href="https://www.cssu.ca/">Computer Science Student Union</a>,
              and a Technical Writer at{" "}
              <a href="https://utmist.gitlab.io/">UTMIST</a>. I also have{" "}
              <a href="./blog">a blog</a>.
            </p> */}

            <details>
              <summary>
                <span>You can read about my experience here:</span>
              </summary>
              <>
                <p style={{ marginTop: 0, marginLeft: 17, marginBottom: 0 }}>
                  <i>Internships:</i>
                </p>
                <ul>
                  <li>
                    Software Engineering Intern @{" "}
                    <a href="https://www.linkedin.com/company/snorkle/">
                      Snorkle Labs
                    </a>{" "}
                    (May 2024 - present)
                  </li>
                  <li>
                    Reserch Intern @ CUNY Graduate Center (June 2023 - Aug 2023)
                  </li>
                </ul>
                <p style={{ marginLeft: 17, marginBottom: 0 }}>
                  <i>Clubs Positions:</i>
                </p>
                <ul>
                  <li>
                    Web Developer and General Council @{" "}
                    <a href="https://www.cssu.ca/">UofT CSSU</a> (Jun 2024 -
                    present)
                  </li>
                  <li>
                    Technical Writer @{" "}
                    <a href="https://utmist.gitlab.io/">UTMIST</a> (Feb 2024 -
                    present)
                  </li>
                  <li>
                    Lead Full-Stack Developer @{" "}
                    <a href="http://198.199.123.9/">
                      Stuyvesant Writing Center
                    </a>{" "}
                    (Mar 2022 - Jun 2023)
                  </li>
                </ul>
                <p style={{ marginLeft: 17, marginBottom: 0 }}>
                  <i>Mentorship:</i>
                </p>
                <ul>
                  <li>
                    SWE Mentee @ Google Mentorship Program (Feb 2023 - Jun 2023)
                  </li>
                </ul>
              </>
            </details>

            <details>
              <summary>
                <span>You can check out some of my projects here:</span>
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
                  <a href="https://www.gabe.biz/blog">Blog</a>
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
                  <a href="https://www.gabe.biz/blog">Threads</a>
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
              open={isContactOpen}
              onToggle={(e) => {
                setIsContactOpen(e.target.open);
                console.log(e.target.open);
              }}
            >
              <summary>
                <span>You can get in touch with me here:</span>
              </summary>
              <ul>
                <li>
                  Email:{" "}
                  <a href="mailto:gabrielezrathompson@gmail.com">
                    gabrielezrathompson [at] gmail [dot] com
                  </a>
                </li>
                <li>Discord: @thabriel.ghompson</li>
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
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
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

        li,
        ul {
          margin-top: 0;
        }

        li > p {
          margin-top: 0.15em;
          margin-bottom: 0;
        }

        a {
          text-decoration: none;
        }

        summary > span {
          margin-left: 5px;
        }
      `}</style>
    </div>
  );
}
