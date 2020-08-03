export const projects = [
  {
    name: 'Portfolio Project',
    image: 'https://source.unsplash.com/1600x900/?portfolio,website',
    live: 'https://tobymould.com/',
    github: 'https://github.com/tobymould/portfolio-website',
    overview: ``,
    technology: {
      icons: [
        { className: 'react', icon: ['fab', 'react'], colour: '#61dbfb', sizeGeneral: '3x', sizeModal: '2x' },
        // { className: 'javascript', icon: ['fab', 'js-square'], colour: '#f0db4f', sizeGeneral: '3x', sizeModal: '2x' },
        { className: 'sass', icon: ['fab', 'sass'], colour: '#cd6799', sizeGeneral: '3x', sizeModal: '2x' },
        { className: 'html', icon: ['fab', 'html5'], colour: '#f06529', sizeGeneral: '3x', sizeModal: '2x' }
        // { className: 'css', icon: ['fab', 'css3-alt'], colour: '#2965f1', sizeGeneral: '3x', sizeModal: '2x' },
        // { className: 'node', icon: ['fab', 'node'], colour: '#3c873a', sizeGeneral: '3x', sizeModal: '2x' }
      ],
      images: [{ className: 'firebase', url: 'https://www.spsolutions.com.mx/assets/img/servicios/firebase.png' }]
    },
    languages: ['html', 'sass', 'javascript', 'React'],
    role: `ReactApp - I am the sole creator of this website. The aim of the build was to form a central library repository from which all projects I come on to build could be hosted.`,
    difficult: `The interaction of GitHub API to display %'s for each language used in the project. Also, migration of the site from HTML/CSS/JS into React`,
    solution: `Creation of the stylish website you are currently visiting`,
    features: [`GitHub API - Connection to retrieve dynamic data of each projects language distribution, and display on the page as % using bar charts.`, `fully responsive design for all devices both portrait and landscape`, `clean and clear stylistic UI approach`, `Firebase hosting`]
  },
  {
    name: 'Expense Tracker App',
    image: 'https://source.unsplash.com/1600x900/?money',
    live: 'https://expense-tracker-223d5.web.app/',
    github: 'https://github.com/tobymould/expense-tracker',
    overview: '',
    technology: {
      icons: [
        { className: 'react', icon: ['fab', 'react'], colour: '#61dbfb', sizeGeneral: '3x', sizeModal: '2x' },
        // { className: 'javascript', icon: ['fab', 'js-square'], colour: '#f0db4f', sizeGeneral: '3x', sizeModal: '2x' },
        { className: 'sass', icon: ['fab', 'sass'], colour: '#cd6799', sizeGeneral: '3x', sizeModal: '2x' },
        { className: 'html', icon: ['fab', 'html5'], colour: '#f06529', sizeGeneral: '3x', sizeModal: '2x' }
        // { className: 'css', icon: ['fab', 'css3-alt'], colour: '#2965f1', sizeGeneral: '3x', sizeModal: '2x' },
        // { className: 'node', icon: ['fab', 'node'], colour: '#3c873a', sizeGeneral: '3x', sizeModal: '2x' }
      ],
      images: [{ className: 'firebase-modal', url: '../assets/icons/firebase.png' }]
    },
    languages: ['html', 'sass', 'javascript', 'react', 'nodejs', 'firebase'],
    role: 'React App - I created this app entirely from scratch. The aim of the build was to demonstrate my ability to undertake authenticated CRUD actions with a stylish user interface',
    difficult: 'Setup of a scalable data structure fore each specific users expense list from the very beginning',
    solution: 'Set-up documents specific to a user and their tasks as fields.',
    features: ['CRUD operations to an external Firebase database', 'Hosted on Firebase', 'Authentication to provide user-specific expense tracking lists']
  },
  {
    name: 'Real-Time Chatroom',
    image: 'https://source.unsplash.com/1600x900/?chat',
    live: 'https://realtime-chatroom-ea4d6.web.app/',
    github: 'https://github.com/tobymould/real-time-chatroom',
    overview: '',
    technology: {
      icons: [
        { className: 'react', icon: ['fab', 'react'], colour: '#61dbfb', sizeGeneral: '3x', sizeModal: '2x' },
        // { className: 'javascript', icon: ['fab', 'js-square'], colour: '#f0db4f', sizeGeneral: '3x', sizeModal: '2x' },
        { className: 'sass', icon: ['fab', 'sass'], colour: '#cd6799', sizeGeneral: '3x', sizeModal: '2x' },
        { className: 'html', icon: ['fab', 'html5'], colour: '#f06529', sizeGeneral: '3x', sizeModal: '2x' }
        // { className: 'css', icon: ['fab', 'css3-alt'], colour: '#2965f1', sizeGeneral: '3x', sizeModal: '2x' },
        // { className: 'node', icon: ['fab', 'node'], colour: '#3c873a', sizeGeneral: '3x', sizeModal: '2x' }
      ],
      images: [{ className: 'firebase-modal', url: '../assets/icons/firebase.png' }]
    },
    languages: ['html', 'sass', 'javascript', 'react', 'nodejs', 'firebase'],
    role: 'React App - I created this app from scratch. The aim was to demonstrate my ability to utilise Authenticated CRUD in application toward an instant messaging forum to better understand how these systems can work',
    difficult: 'The Authenticated Private Routing to different chatrooms and structuring of the database',
    solution: '',
    features: ['Creation, reading and display of message from an external Firebase database ', 'Private routing that requires Authentication to access the content', 'user-specific messaging utilising their own metadata to identify themselves on the chatroom']
  },
  {
    name: 'Github Finder',
    image: 'https://source.unsplash.com/1600x900/?github',
    live: 'https://github-search-c70d7.web.app/',
    github: 'https://github.com/tobymould/github-finder',
    overview: '',
    technology: {
      icons: [
        { className: 'react', icon: ['fab', 'react'], colour: '#61dbfb', sizeGeneral: '3x', sizeModal: '2x' },
        // { className: 'javascript', icon: ['fab', 'js-square'], colour: '#f0db4f', sizeGeneral: '3x', sizeModal: '2x' },
        { className: 'sass', icon: ['fab', 'sass'], colour: '#cd6799', sizeGeneral: '3x', sizeModal: '2x' },
        { className: 'html', icon: ['fab', 'html5'], colour: '#f06529', sizeGeneral: '3x', sizeModal: '2x' }
        // { className: 'css', icon: ['fab', 'css3-alt'], colour: '#2965f1', sizeGeneral: '3x', sizeModal: '2x' },
        // { className: 'node', icon: ['fab', 'node'], colour: '#3c873a', sizeGeneral: '3x', sizeModal: '2x' }
      ],
      images: [{ className: 'firebase-modal', url: '../assets/icons/firebase.png' }]
    },
    languages: ['html', 'sass', 'javascript', 'react', 'nodejs', 'firebase'],
    role: 'React App - a practice project. The purpose of this projects was to further demonstrate the ability to contact and grab data from an API call and display it on the page',
    difficult: 'Syntax of including variable inputs into the url query string part of the API call',
    solution: '',
    features: ['Use of a private token for calling the github API', 'The dynamic data API call that adapts a search based on user input']
  },
  {
    name: 'Speech-Recognition Guessing Game',
    image: 'https://source.unsplash.com/1600x900/?speech',
    live: 'https://tobymould.github.io/speak-number-guessing-game/',
    github: 'https://github.com/tobymould/speak-number-guessing-game',
    overview: '',
    technology: {
      icons: [
        // { className: 'react', icon: ['fab', 'react'], colour: '#61dbfb', sizeGeneral: '3x', sizeModal: '2x' },
        { className: 'javascript', icon: ['fab', 'js-square'], colour: '#f0db4f', sizeGeneral: '3x', sizeModal: '2x' },
        { className: 'sass', icon: ['fab', 'sass'], colour: '#cd6799', sizeGeneral: '3x', sizeModal: '2x' },
        { className: 'html', icon: ['fab', 'html5'], colour: '#f06529', sizeGeneral: '3x', sizeModal: '2x' }
        // { className: 'css', icon: ['fab', 'css3-alt'], colour: '#2965f1', sizeGeneral: '3x', sizeModal: '2x' },
        // { className: 'node', icon: ['fab', 'node'], colour: '#3c873a', sizeGeneral: '3x', sizeModal: '2x' }
      ],
      images: [{ className: 'firebase-modal', url: '../assets/icons/firebase.png' }]
    },
    languages: ['html', 'sass', 'javascript', 'react', 'nodejs', 'firebase'],
    role: 'JavaScript App - The purpose of this project was to learn how I could integrate the use of spoken word into an App. Voice command technology is the next big trend in tech with its use in Google Home, Amazon Alexa and the like. I wanted understand how this external API technology could be applied to projects.',
    difficult: 'Use of the specific language syntax related to voice command code.',
    solution: 'I plan to integrate this capability into other Apps',
    features: ['Use of voice-command to interact with the App', 'Using the dynamic transcription response to initiate an update to the page ']
  },
  {
    name: 'Integr8HR Client Project',
    image: 'https://source.unsplash.com/1600x900/?human,resources',
    live: 'https://intergr8-42df9.web.app/',
    github: 'https://github.com/tobymould/intergr8',
    overview: '',
    technology: {
      icons: [
        { className: 'react', icon: ['fab', 'react'], colour: '#61dbfb', sizeGeneral: '3x', sizeModal: '2x' },
        // { className: 'javascript', icon: ['fab', 'js-square'], colour: '#f0db4f', sizeGeneral: '3x', sizeModal: '2x' },
        { className: 'sass', icon: ['fab', 'sass'], colour: '#cd6799', sizeGeneral: '3x', sizeModal: '2x' }
        // { className: 'html', icon: ['fab', 'html5'], colour: '#f06529', sizeGeneral: '3x', sizeModal: '2x' }
        // { className: 'css', icon: ['fab', 'css3-alt'], colour: '#2965f1', sizeGeneral: '3x', sizeModal: '2x' },
        // { className: 'node', icon: ['fab', 'node'], colour: '#3c873a', sizeGeneral: '3x', sizeModal: '2x' }
      ],
      images: [{ className: 'firebase-modal', url: '../assets/icons/firebase.png' }]
    },
    languages: ['html', 'sass', 'javascript', 'react', 'nodejs', 'firebase'],
    role: 'React App - I was part of a team of 8 student developers on the nology software development programme. My role was varied working on the setup of the database, authentication and private routing, to responsive design and React feature development.',
    difficult: 'Private routing',
    solution: 'We worked together using github and undertook pair-programming. The result was a functional MVP which would be used by Intergr8HR for their next-step funding demonstrations',
    features: ['Authenticated CRUD with Firebase']
  },
  {
    name: 'Battleship Game',
    image: 'https://source.unsplash.com/1600x900/?ship',
    live: 'https://tobymould.github.io/battleship/',
    github: 'https://github.com/tobymould/battleship',
    overview: '',
    technology: {
      icons: [
        { className: 'javascript', icon: ['fab', 'js-square'], colour: '#f0db4f', sizeGeneral: '3x', sizeModal: '2x' },
        { className: 'html', icon: ['fab', 'html5'], colour: '#f06529', sizeGeneral: '3x', sizeModal: '2x' },
        { className: 'sass', icon: ['fab', 'sass'], colour: '#cd6799', sizeGeneral: '3x', sizeModal: '2x' }
        // { className: 'css', icon: ['fab', 'css3-alt'], colour: '#2965f1', sizeGeneral: '3x', sizeModal: '2x' },
        // { className: 'react', icon: ['fab', 'react'], colour: '#61dbfb', sizeGeneral: '3x', sizeModal: '2x' },
        // { className: 'node', icon: ['fab', 'node'], colour: '#3c873a', sizeGeneral: '3x', sizeModal: '2x' }
      ],
      images: [{ className: 'firebase-modal', url: '../assets/icons/firebase.png' }]
    },
    languages: ['html', 'sass', 'javascript'],
    role: 'JavaScript App - I created this game from scratch. The aim was to build my first ever game using Javascript.',
    difficult: 'Switching through the different phases of the functional code automatically based on dynamic data usage.',
    solution: '',
    features: ['', 'functional programming approach']
  },
  {
    name: 'Morse Code Converter',
    image: 'https://source.unsplash.com/1600x900/?morse',
    live: 'https://tobymould.github.io/morsecode/',
    github: 'https://github.com/tobymould/morsecode',
    overview: '',
    technology: {
      icons: [
        { className: 'javascript', icon: ['fab', 'js-square'], colour: '#f0db4f', sizeGeneral: '3x', sizeModal: '2x' },
        { className: 'html', icon: ['fab', 'html5'], colour: '#f06529', sizeGeneral: '3x', sizeModal: '2x' },
        { className: 'sass', icon: ['fab', 'sass'], colour: '#cd6799', sizeGeneral: '3x', sizeModal: '2x' }
        // { className: 'css', icon: ['fab', 'css3-alt'], colour: '#2965f1', sizeGeneral: '3x', sizeModal: '2x' },
        // { className: 'react', icon: ['fab', 'react'], colour: '#61dbfb', sizeGeneral: '3x', sizeModal: '2x' },
        // { className: 'node', icon: ['fab', 'node'], colour: '#3c873a', sizeGeneral: '3x', sizeModal: '2x' }
      ],
      images: [{ className: 'firebase-modal', url: '../assets/icons/firebase.png' }]
    },
    languages: ['html', 'sass', 'javascript'],
    role: 'JavaScript App - The aim was to demonstrate the ability to use Javascript loops to convert words into morse code',
    difficult: '',
    solution: '',
    features: ['Ability to transcribe strings from one form into another using string array methods']
  },

  {
    name: 'Calculator',
    image: 'https://source.unsplash.com/1600x900/?calculator',
    live: 'https://tobymould.github.io/myCalculator/',
    github: 'https://github.com/tobymould/myCalculator',
    overview: '',
    technology: {
      icons: [
        { className: 'javascript', icon: ['fab', 'js-square'], colour: '#f0db4f', sizeGeneral: '3x', sizeModal: '2x' },
        { className: 'html', icon: ['fab', 'html5'], colour: '#f06529', sizeGeneral: '3x', sizeModal: '2x' },
        { className: 'sass', icon: ['fab', 'sass'], colour: '#cd6799', sizeGeneral: '3x', sizeModal: '2x' }
        // { className: 'css', icon: ['fab', 'css3-alt'], colour: '#2965f1', sizeGeneral: '3x', sizeModal: '2x' },
        // { className: 'react', icon: ['fab', 'react'], colour: '#61dbfb', sizeGeneral: '3x', sizeModal: '2x' },
        // { className: 'node', icon: ['fab', 'node'], colour: '#3c873a', sizeGeneral: '3x', sizeModal: '2x' }
      ],
      images: [{ className: 'firebase-modal', url: '../assets/icons/firebase.png' }]
    },
    languages: ['html', 'sass', 'javascript'],
    role: 'JavaScript App - I aimed to better understand how the Math object could be used, in conjunction with DOM events, to create a utility application',
    difficult: 'Efficient application of control flow logic to produce clean code',
    solution: '',
    features: ['Application of basic control flow logic']
  },
  {
    name: 'Form Validator',
    image: 'https://source.unsplash.com/1600x900/?application,form',
    live: 'https://vibrant-hawking-1f118b.netlify.app/',
    github: 'https://github.com/tobymould/FormValidation',
    overview: '',
    technology: {
      icons: [
        { className: 'javascript', icon: ['fab', 'js-square'], colour: '#f0db4f', sizeGeneral: '3x', sizeModal: '2x' },
        { className: 'sass', icon: ['fab', 'sass'], colour: '#cd6799', sizeGeneral: '3x', sizeModal: '2x' },
        { className: 'html', icon: ['fab', 'html5'], colour: '#f06529', sizeGeneral: '3x', sizeModal: '2x' }
        // { className: 'css', icon: ['fab', 'css3-alt'], colour: '#2965f1', sizeGeneral: '3x', sizeModal: '2x' },
        // { className: 'react', icon: ['fab', 'react'], colour: '#61dbfb', sizeGeneral: '3x', sizeModal: '2x' },
        // { className: 'node', icon: ['fab', 'node'], colour: '#3c873a', sizeGeneral: '3x', sizeModal: '2x' }
      ],
      images: [{ className: 'firebase-modal', url: '../assets/icons/firebase.png' }]
    },
    languages: ['html', 'sass', 'javascript'],
    role: 'JavaScript App - I created this form validator during a self-taught javaScript lesson. The aim was to focus on improving my comprehension of vanilla JavaScript.',
    difficult: 'Using Javascript to insert elements on the page based on highly-specific regular expressions nested inside conditionals.',
    solution: 'I learned about how to layout Javascript files and how regular expressions work.',
    features: ['Use of Regular Expressions.', 'Insertion of HTML elements and text using JavaScript.']
  },
  {
    name: 'Cinema Movie Booker',
    image: 'https://source.unsplash.com/1600x900/?cinema',
    live: 'https://vibrant-thompson-1ef434.netlify.app/',
    github: 'https://github.com/tobymould/MovieBooker',
    overview: '',
    technology: {
      icons: [
        { className: 'javascript', icon: ['fab', 'js-square'], colour: '#f0db4f', sizeGeneral: '3x', sizeModal: '2x' },
        { className: 'sass', icon: ['fab', 'sass'], colour: '#cd6799', sizeGeneral: '3x', sizeModal: '2x' },
        { className: 'html', icon: ['fab', 'html5'], colour: '#f06529', sizeGeneral: '3x', sizeModal: '2x' }
        // { className: 'css', icon: ['fab', 'css3-alt'], colour: '#2965f1', sizeGeneral: '3x', sizeModal: '2x' },
        // { className: 'react', icon: ['fab', 'react'], colour: '#61dbfb', sizeGeneral: '3x', sizeModal: '2x' },
        // { className: 'node', icon: ['fab', 'node'], colour: '#3c873a', sizeGeneral: '3x', sizeModal: '2x' }
      ],
      images: [{ className: 'firebase-modal', url: '../assets/icons/firebase.png' }]
    },
    languages: ['html', 'sass', 'javascript'],
    role: 'JavaScript App - I created this booking system during a self-taught javaScript lesson. The aim was to focus on improving my comprehension of vanilla JavaScript.',
    difficult: 'Using Javascript to insert elements on the page based on highly-specific regular expressions nested inside conditionals.',
    solution: 'I was able to create the template website seen here.',
    features: ['Saving and retrieving data from Local Storage.', 'Generating visual seating units that were selectable.', 'Calculation and display of totals in the HTML.']
  },

  {
    name: 'Gold Plating Website',
    image: 'https://source.unsplash.com/1600x900/?gold',
    live: 'https://tender-newton-d06fd9.netlify.app/',
    github: 'https://github.com/tobymould/firstwebsite',
    overview: '',
    technology: {
      icons: [
        { className: 'css', icon: ['fab', 'css3-alt'], colour: '#2965f1', sizeGeneral: '3x', sizeModal: '2x' },
        { className: 'html', icon: ['fab', 'html5'], colour: '#f06529', sizeGeneral: '3x', sizeModal: '2x' },
        { className: 'javascript', icon: ['fab', 'js-square'], colour: '#f0db4f', sizeGeneral: '3x', sizeModal: '2x' }
        // { className: 'sass', icon: ['fab', 'sass'], colour: '#cd6799', sizeGeneral: '3x', sizeModal: '2x' },
        // { className: 'react', icon: ['fab', 'react'], colour: '#61dbfb', sizeGeneral: '3x', sizeModal: '2x' },
        // { className: 'node', icon: ['fab', 'node'], colour: '#3c873a', sizeGeneral: '3x', sizeModal: '2x' }
      ],
      images: [{ className: 'firebase-modal', url: '../assets/icons/firebase.png' }]
    },
    languages: ['html', 'sass'],
    role: 'HTML/CSS App - I created this Gold Plating website myself. The aim was to focus on improving my comprehension of vanilla HTML/CSS and Python3 with a personal project.',
    difficult: 'Efficient use of HTML ID/Classes and layout of the CSS.',
    solution: 'I was able to create an asthetically pleasing and classy website.',
    features: ['Use of Python3 as a backend.', 'Extensive use of a range of CSS properties.', 'Well-balanced use of design and smooth scrolling.']
  },
  {
    name: 'News Site',
    image: 'https://source.unsplash.com/1600x900/?news',
    live: 'https://ecstatic-borg-8c8cde.netlify.app/index.html',
    github: 'https://github.com/tobymould/NewsWebsite',
    overview: '',
    technology: {
      icons: [
        { className: 'css', icon: ['fab', 'css3-alt'], colour: '#2965f1', sizeGeneral: '3x', sizeModal: '2x' },
        { className: 'html', icon: ['fab', 'html5'], colour: '#f06529', sizeGeneral: '3x', sizeModal: '2x' }
        // { className: 'javascript', icon: ['fab', 'js-square'], colour: '#f0db4f', sizeGeneral: '3x', sizeModal: '2x' }
        // { className: 'sass', icon: ['fab', 'sass'], colour: '#cd6799', sizeGeneral: '3x', sizeModal: '2x' },
        // { className: 'react', icon: ['fab', 'react'], colour: '#61dbfb', sizeGeneral: '3x', sizeModal: '2x' },
        // { className: 'node', icon: ['fab', 'node'], colour: '#3c873a', sizeGeneral: '3x', sizeModal: '2x' }
      ],
      images: [{ className: 'firebase-modal', url: '../assets/icons/firebase.png' }]
    },
    languages: ['html', 'css'],
    role: 'HTML/CSS App - I created this News Site during a self-taught HTML/CSS course. The aim was to focus on improving my comprehension of vanilla HTML/CSS.',
    difficult: 'Efficient use of HTML ID/Classes and layout of the CSS.',
    solution: 'I was able to create the multi-paged website that is more complicated.',
    features: ['Extensive use of a range of CSS properties.', 'Multi-paged website with e-mail filtering.', 'Complicated interweave of images, grids and colours.']
  }

  // {
  //   name: 'Arduino Project',
  //   image: 'https://source.unsplash.com/1600x900/?arduino',
  //   live: 'https://',
  //   github: 'https://',
  //   overview: '',
  //   technology: {
  //     icons: [
  //       { className: 'html', icon: ['fab', 'html5'] },
  //       { className: 'css', icon: ['fab', 'css3-alt'] },
  //       { className: 'sass', icon: ['fab', 'sass'] },
  //       { className: 'javascript', icon: ['fab', 'js-square'] },
  //       { className: 'react', icon: ['fab', 'react'] },
  //       { className: 'node', icon: ['fab', 'node'] }
  //     ],
  //     images: [{ className: 'firebase-modal', url: '../assets/icons/firebase.png' }]
  //   },
  //   languages: ['html', 'sass', 'javascript'],
  //   role: 'rolerole',
  //   difficult: 'difficultdifficult',
  //   solution: 'I was able to create the template website seen here.',
  //   features: ['<li>feature1</li>', '<li>feature2</li>', '<li>feature3</li>']
  // }
];

// export default data;
export const skills = {
  icons: [
    { language: 'html', icon: ['fab', 'html5'], colour: '#f06529', sizeGeneral: '3x', sizeModal: '2x' },
    { language: 'css', icon: ['fab', 'css3-alt'], colour: '#2965f1', sizeGeneral: '3x', sizeModal: '2x' },
    { language: 'sass', icon: ['fab', 'sass'], colour: '#cd6799', sizeGeneral: '3x', sizeModal: '2x' },
    { language: 'javascript', icon: ['fab', 'js-square'], colour: '#f0db4f', sizeGeneral: '3x', sizeModal: '2x' },
    { language: 'react', icon: ['fab', 'react'], colour: '#61dbfb', sizeGeneral: '3x', sizeModal: '2x' },
    { language: 'node', icon: ['fab', 'node'], colour: '#3c873a', sizeGeneral: '3x', sizeModal: '2x' },
    { language: 'yarn', icon: ['fab', 'yarn'], colour: '#117cad', sizeGeneral: '3x', sizeModal: '2x' },
    { language: 'git', icon: ['fab', 'git'], colour: '#f1502f', sizeGeneral: '3x', sizeModal: '2x' },
    { language: 'github', icon: ['fab', 'github'], colour: '#2b3137', sizeGeneral: '3x', sizeModal: '2x' }
  ],
  images: [
    { className: 'firebase', url: 'https://www.spsolutions.com.mx/assets/img/servicios/firebase.png' },
    { className: 'postman', url: 'https://s3.amazonaws.com/media-p.slid.es/uploads/327261/images/5065937/pm-logo-vert.png' },
    { className: 'typescript', url: 'https://seeklogo.com/images/T/typescript-logo-B29A3F462D-seeklogo.com.png' }
  ]
};
//  '<img className="firebase-modal" src="../assets/icons/firebase.png" alt="firebase logo" />'];

// export default projects;
export default projects;
