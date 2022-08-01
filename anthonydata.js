/* eslint-disable import/no-anonymous-default-export */
// Skills Icons
import htmlIcon from './public/html.svg'
import cssIcon from './public/css.svg'
import reactIcon from './public/react.svg'
import jsIcon from './public/javascript.svg'
import shopifyBlack from './public/shopify-black.png'
import nodeJsBlack from './public/node-js-black.svg'
import nextJs from './public/nextjs.svg'

// Social Icon
import githubIcon from './public/github.svg'
import instagramIcon from './public/instagram.svg'
import whatsappIcon from './public/whatsapp.svg'
import twitterIcon from './public/twitter.svg'
import linkedIn from './public/linkedIn.svg'

export default {
  //(Please Do Not Remove The comma(,) after every variable)
  //Change The Website Template

  //   Header Details ---------------------
  name: 'Anthony',
  heroVideo:
    'https://ik.imagekit.io/antz/memoji-movie?ik-sdk-version=javascript-1.4.3&updatedAt=1659318145208',
  heroVideoWebM:
    'https://ik.imagekit.io/antz/EmojiMovie681010378_copy-1_VP9_zqn43Oma7.webm?ik-sdk-version=javascript-1.4.3&updatedAt=1659326888851',
  headerImage:
    'https://ik.imagekit.io/antz/Memoji_Avatar_Transparent_BG_17p6KuRi8.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1659317066811',
  headerTagline: [
    //Line 1 For Header
    "Let's build",
    //Line 2 For Header
    'the future',
    //Line 3 For Header
    'together'
  ],
  //   Header Paragraph
  headerParagraph:
    'A freelance front-end web developer based in Melbourne, Australia. Passionate about tech and making things on the internet.',
  //Contact Email
  contactEmail: 'hello@antz.dev',

  // End Header Details -----------------------

  // Work Section ------------------------
  work: [
    {
      id: 1,
      title: 'Zove Beauty',
      para: `Shopify theme edits for Zove Beauty based on Presidio Creative's Palo Alto theme (v. 4.0.1). Theme customisations include: `,
      list: [
        'Custom designed and styled homepage including new buttons, layouts, and megamenu',
        'Collapsible tabs for Product and FAQ page',
        'Custom designed Blog section with new layout and styling',
        'General theme bug fixes and animations'
      ],
      imageSrc:
        'https://ik.imagekit.io/antz/Screen_Shot_2022-07-30_at_8.58.38_pm_ritSauGpJ.png?ik-sdk-version=javascript-1.4.3&updatedAt=1659178744128',
      url: 'https://www.zovebeauty.com.au/',
      technology: [
        {
          id: 1,
          name: 'HTML'
        },
        {
          id: 2,
          name: 'CSS'
        },
        {
          id: 3,
          name: 'JavaScript'
        },
        {
          id: 4,
          name: 'Liquid'
        }
      ]
    },
    {
      id: 2,
      title: 'Sakos Kitchen',
      para: `Mock design and clone of Sako's Kitchen Shopify store to guide merchant in their store design process. `,
      imageSrc:
        'https://ik.imagekit.io/antz/project-2-screenshot_1__LDNf6aLBK.png?ik-sdk-version=javascript-1.4.3&updatedAt=1658209697112',
      url: 'https://anthonysetiadi.github.io/sakos-kitchen-landing-page/',
      githubLink:
        'https://github.com/anthonysetiadi/sakos-kitchen-landing-page',
      technology: [
        {
          id: 1,
          name: 'React'
        },
        {
          id: 2,
          name: 'CSS'
        },
        {
          id: 3,
          name: 'Figma'
        }
      ]
    }
  ],

  // Project Section ------------------------
  projects: [
    {
      id: 1, //DO NOT CHANGE THIS (Please)😅
      title: 'Portfolio', //Project Title - Add Your Project Title Here
      para: 'Simple and clean portfolio to showcase my recent works',
      //Project Image - Add Your Project Image Here
      imageSrc:
        'https://ik.imagekit.io/antz/Screen_Shot_2022-07-26_at_2.32.44_pm_Efwt_0z5k.png?ik-sdk-version=javascript-1.4.3&updatedAt=1658809976722',
      //Project URL - Add Your Project Url Here
      url: 'https://antz.dev/',
      githubLink: 'https://github.com/anthonysetiadi/react-portfolio',
      technology: [
        {
          id: 1,
          name: 'React'
        },
        {
          id: 2,
          name: 'Next.js'
        },
        {
          id: 3,
          name: 'CSS'
        }
      ]
    },
    {
      id: 2, //DO NOT CHANGE THIS (Please)😅
      title: 'Interactive Form', //Project Title - Add Your Project Title Here
      para: 'A form for a mock Full Stack Developers conference', // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        'https://ik.imagekit.io/antz/project-1-screenshot_HNRcxnrYD.png?ik-sdk-version=javascript-1.4.3&updatedAt=1658205300386',
      //Project URL - Add Your Project Url Here
      url: 'https://anthonysetiadi.github.io/interactive-form-v3/',
      githubLink: 'https://github.com/anthonysetiadi/interactive-form-v3',
      technology: [
        {
          id: 1,
          name: 'HTML'
        },
        {
          id: 2,
          name: 'CSS'
        },
        {
          id: 3,
          name: 'JavaScript'
        }
      ]
    },
    {
      id: 3, //DO NOT CHANGE THIS (Please)😅
      title: 'Student Directory', //Project Title - Add Your Project Title Here
      para: 'Fake student directory with data pagination and search functionality',
      //Project Image - Add Your Project Image Here
      imageSrc:
        'https://ik.imagekit.io/antz/project-3-screenshot_JA605D_0g.png?ik-sdk-version=javascript-1.4.3&updatedAt=1658208203960',
      //Project URL - Add Your Project Url Here
      url: 'https://anthonysetiadi.github.io/data-pagination-filtering/',
      githubLink: 'https://github.com/anthonysetiadi/data-pagination-filtering',
      technology: [
        {
          id: 1,
          name: 'HTML'
        },
        {
          id: 2,
          name: 'CSS'
        },
        {
          id: 3,
          name: 'JavaScript'
        }
      ]
    },
    {
      id: 4, //DO NOT CHANGE THIS (Please)😅
      title: 'Startup Directory', //Project Title - Add Your Project Title Here
      para: 'Fake startup directory built with the Random User Public API',
      //Project Image - Add Your Project Image Here
      imageSrc:
        'https://ik.imagekit.io/antz/project-4-screenshot_6VuVKfQVr.png?ik-sdk-version=javascript-1.4.3&updatedAt=1658210266458',
      //Project URL - Add Your Project Url Here
      url: 'https://anthonysetiadi.github.io/public-api-requests/',
      githubLink: 'https://github.com/anthonysetiadi/public-api-requests',
      technology: [
        {
          id: 1,
          name: 'HTML'
        },
        {
          id: 2,
          name: 'CSS'
        },
        {
          id: 3,
          name: 'JavaScript'
        }
      ]
    },
    {
      id: 5, //DO NOT CHANGE THIS (Please)😅
      title: 'Phrase Hunter Game', //Project Title - Add Your Project Title Here
      para: 'Simple phrase guessing game built with object oriented programming principles',
      //Project Image - Add Your Project Image Here
      imageSrc:
        'https://ik.imagekit.io/antz/phrase-hunter-screenshot_DVBHg3YWS.png?ik-sdk-version=javascript-1.4.3&updatedAt=1658210159725',
      //Project URL - Add Your Project Url Here
      url: 'https://anthonysetiadi.github.io/oop-game-v2/',
      githubLink: 'https://github.com/anthonysetiadi/oop-game-v2',
      technology: [
        {
          id: 1,
          name: 'HTML'
        },
        {
          id: 2,
          name: 'CSS'
        },
        {
          id: 3,
          name: 'JavaScript'
        }
      ]
    },
    {
      id: 6, //DO NOT CHANGE THIS (Please)😅
      title: 'Random Quote Generator', //Project Title - Add Your Project Title Here
      para: 'Simple and clean random quote that changes every 5 seconds',
      //Project Image - Add Your Project Image Here
      imageSrc:
        'https://ik.imagekit.io/antz/project-2-screenshot_hEbJw1rn2.png?ik-sdk-version=javascript-1.4.3&updatedAt=1658205624552',
      //Project URL - Add Your Project Url Here
      url: 'https://anthonysetiadi.github.io/a-random-quote-generator/',
      githubLink: 'https://github.com/anthonysetiadi/a-random-quote-generator',
      technology: [
        {
          id: 1,
          name: 'HTML'
        },
        {
          id: 2,
          name: 'CSS'
        },
        {
          id: 3,
          name: 'JavaScript'
        }
      ]
    }

    /*
    If You Want To Add More Project just Copy and Paste This At The End (Update the id Respectively)
    ,{
        id: 5,
        title: 'Project Five',
        para: 'Something Amazing',
        imageSrc: "",
        url: ''
    }
    */
  ],

  // End Work Section -----------------------

  // About Secton --------------
  aboutParaOne:
    'My name is Anthony and I love building stuff on the internet. I previously worked in Biomedical Science in Neurophysiology research but I recently rediscovered my passion for technology and went on a journey to become a self-taught developer.',
  aboutParaTwo: `I now work as a freelance front-end web developer and am continuing to improve my coding and design skills. I also run a side hustle, {{ <a href="http://ryskape.com"> @Ryskape </a> }} where we sell cool desk accessories. When I’m not coding, I play basketball or spend time with my wife and three kids. Oh, I love drinking good coffee.`,
  aboutParaThree:
    'If you’re keen on making a website, need Shopify theme edits or bug fixes, or just want to chat tech or business - please reach out! I would love to get to know you over a virtual cup of coffee and join me in building the future together.',
  aboutImage:
    'https://ik.imagekit.io/antz/DSC00410_1__San4RSY04.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1657780111677',

  //   End About Section ---------------------

  // Skills Section ---------------

  //   Import Icons from the top and link it here

  skills: [
    {
      id: 1,
      img: htmlIcon,
      para: 'HTML5'
    },
    {
      id: 2,
      img: cssIcon,
      para: 'CSS3'
    },
    {
      id: 3,
      img: jsIcon,
      para: 'JavaScript (ES6+)'
    },
    {
      id: 4,
      img: reactIcon,
      para: 'React'
    },
    {
      id: 5,
      img: nextJs,
      para: 'Next.js'
    },
    {
      id: 6,
      img: shopifyBlack,
      para: 'Shopify Liquid'
    }
  ],

  // End Skills Section --------------------------

  //   Resume Section --------------------------

  promotionHeading: "What's Next",
  promotionParaOne:
    "I have been learning to code over a year now and am super keen to join a dev team focused on front-end development. If you know anyone who's hiring or would be interested in my skills, please refer me on!",
  promotionParaTwo:
    "Also, I'm currently open to freelance jobs. If you’re keen on making a website, need Shopify theme edits or bug fixes, or just want to chat tech or business - please reach out! I would love to get to know you over a virtual cup of coffee and join me in building the future together.",
  // End Promotion Section -----------------

  //   Contact Section --------------

  contactSubHeading: "Let's have a chat",
  social: [
    // Add Or Remove The Link Accordingly
    {
      id: 1,
      img: githubIcon,
      url: 'https://github.com/anthonysetiadi',
      alt: 'github'
    },
    {
      id: 2,
      img: instagramIcon,
      url: 'https://www.instagram.com/hey.antz',
      alt: 'instagram'
    },
    {
      id: 3,
      img: twitterIcon,
      url: 'https://twitter.com/antsetiadi/',
      alt: 'whatsapp'
    },
    {
      id: 4,
      img: linkedIn,
      url: 'https://www.linkedin.com/in/anthonysetiadi/',
      alt: 'linked in'
    }
  ]

  // End Contact Section ---------------
}
