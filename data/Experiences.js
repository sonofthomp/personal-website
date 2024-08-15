const EXPERIENCES = [
  {
    experienceType: "internship",
    jobTitle: "Software Engineering Intern",
    employer: "Snorkle Labs",
    employerURL: "https://www.linkedin.com/company/snorkle/",
    startDate: "May 2024",
    endDate: "present",
    bullets: [
      "Working at NIH-funded start-up on feature to generate explanatory science presentations on the human anatomy from a given prompt.",
      "Built _Python_ pipeline to match natural language body part names to _4,000+_ mesh IDs in _10+_ GLB medical models.",
      "Wrote script to pre-process medical models, assigning codes from the FMA ontology to each mesh ID. Created matching algorithm, which works by finding FMA code of body part name, then _recursively_ searching children and ancestors of that code using OLS4 API to finds a mesh ID with a matching FMA code.",
      "Built _React_ & _Bootstrap_-based feature for users to generate anatomical presentations with _GPT-4_ and view them. Includes ability to edit & save presentations to user account via _AWS Lambda_ function accessing _DynamoDB_ table.",
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
      "Working on _Next.js_-based website for Fall 2024 orientation to be used by _400+_ students, in which users can scan QR codes (updated every 15 seconds) at orientation booths to log their attendance.",
      "Wrote protocol for generating and validating QR codes using _HMAC encryption_, built _API_ for sending QR codes from server to client. Built _Tailwind.css_ frontend for website for orientation leaders and students, backend in _PostgreSQL_ accessed via _Prisma_.",
      "Working on re-design of the Arts and Science Student Union's website, using _Next.js_, _Radix UI_ and _Tailwind.css_.",
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
