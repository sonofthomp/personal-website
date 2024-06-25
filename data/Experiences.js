const EXPERIENCES = [
  {
    experienceType: "internship",
    jobTitle: "Software Engineering Intern",
    employer: "Snorkle Labs",
    employerURL: "https://www.linkedin.com/company/snorkle/",
    startDate: "May 2024",
    endDate: "present",
    bullets: [
      "Working on _GPT_-based feature to generate explanatory science presentations on the human anatomy from a given prompt.",
      "Created feature to find any of _250+_ matching mesh IDs in human anatomy model to any of _6,500+_ FMA codes in the human body, by recursively searching children and ancestors of FMA codes using OLS4 API.",
      "Front-end of feature written with _React.js_ & _Bootstrap_, back-end written in _Python_, accessed via _AWS Lambda_ & _API Gateway_.",
    ],
  },
  {
    experienceType: "internship",
    jobTitle: "Research Intern",
    employer: "CUNY Graduate Center",
    employerURL: "",
    startDate: "Jun 2023",
    endDate: "Aug 2023",
    bullets: [
      "Worked on _Wikipron_, a _Python_ and _requests_-based library for scraping pronunciation data from Wiktionary in 250+ languages. Worked under Prof. Kyle Gorman.",
      "Proposed and implemented Python feature using _ISO 639_ codes allowing _>10 new languages'_ phonologies to be parsed",
      "Wrote >5 technical write-ups diagnosing causes of bugs and suggesting solutions.",
    ],
  },
  {
    experienceType: "club",
    jobTitle: "Web Developer and General Council",
    employer: "UofT CSSU",
    employerURL: "https://www.cssu.ca/",
    startDate: "Jun 2024",
    endDate: "present",
    bullets: [
      "Working on _Next.js_-based website for Fall 2024 orientation. More details to come (this project started June 23rd)",
    ],
  },
  {
    experienceType: "club",
    jobTitle: "Technical Writer",
    employer: "UTMIST",
    employerURL: "https://utmist.gitlab.io/",
    startDate: "Feb 2024",
    endDate: "present",
    bullets: [
      "Select and read research papers on AI, and write 1,000+ word articles summarizing them",
      'Articles published in [UTMIST\'s "Demistify" publication](https://medium.com/demistify).',
    ],
  },
  {
    experienceType: "club",
    jobTitle: "Lead Web Developer",
    employer: "Stuyvesant Writing Center",
    employerURL: "http://198.199.123.9/",
    startDate: "Mar 2022",
    endDate: "Jun 2023",
    bullets: [
      "Built and deployed full-stack website to manage school’s Writing Center for _3,300+_ students and _50+_ editors across all four grades. Website built in _Python_, _Flask_, _SQL_, and _JS_, deployed via _DigitalOcean_.",
      "Developed user authentication system for _300+_ accounts, editor feedback system, and email notification system to send _2,000+_ emails to _500+_ email addresses. Oversaw 24/7 deployment of website for _8,000+_ hours",
    ],
  },
  {
    experienceType: "mentorship",
    jobTitle: "SWE Mentee",
    employer: "Google Mentorship Program",
    employerURL:
      "http://bert.stuy.edu/pbrooks/google-mentorships/mainlinks.html",
    startDate: "Feb 2023",
    endDate: "Jun 2023",
    bullets: [
      "Led team to create DAFTER-GPT, a JS-based Chrome extension and Python-based tool for training an LLM using the OpenAI API to write emails in my writing style, given a corpus of my past emails. Advised by Google Software Engineer.",
      "Created Python data pipeline to fine-tune GPT-3 model on a corpus of 500+ emails and generate new emails given new prompts. Model trained via the OpenAI API. [Link to project source code](https://github.com/sonofthomp/DAFTER-GPT)",
      "Presented final project to 10+ Google NYC employees. Received positive feedback on project from program director",
      "[Program info](http://bert.stuy.edu/pbrooks/google-mentorships/mainlinks.html)",
    ],
  },
];

export default EXPERIENCES;
