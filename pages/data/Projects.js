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
        writing center to manage edit requests. Includes an authentication system managing 300+
        accounts, an editor feedback system, and email notification system which has sent 2,000+
        emails to 500+ email addresses. Has been used by 900+ students to complete edit
        requests. Hosted on DigitalOcean since October 2022. You can see it in action
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
    link: "https://www.gabe.biz/blog/",
  },
];

export default PROJECTS;
