export const siteConfig = {
  name: "Rashed Azizi",
  firstName: "Rashed",
  title: "computer science major student in south korea with a passion for programming, web development and AI",
  description: "Portfolio website of Rashed Azizi",
  accentColor: "#251cd7",
  profileImage: "rashed-profile.jpg",
  social: {
    email: "azizi@chungbuk.ac.kr",
    linkedin: "https://linkedin.com/in/llnzjl",
    instagram: "https://www.instagram.com/le_.han06/",
    github: "https://github.com/llnzjl",
  },
  aboutMe:
    "I am a computer science student in South Korea with a strong interest in programming, web development, and AI.\nI enjoy solving real problems, learning new technologies, and building practical projects.\nI work well independently and in teams, with a focus on clear communication and continuous growth.",
  skills: ["c", "C++", "python", "SQL", "GIT", "CSS", "AI Concepts" ],
  personalProjects: [ 
    {
      name: "School Management System",
      description:
        "A C-based school management system designed to organize core student records and administrative information through a structured console workflow. This project demonstrates practical use of programming fundamentals, data handling, menu-driven interaction, and problem-solving for real-world academic administration.",
      link: "https://github.com/llnzjl/SMS-Project",
      skills: ["C", "Data Management", "Console Application"],
    },
    {
      name: "Book Management Program",
      description:
        "A book management project focused on organizing book information in a simple and maintainable way. It highlights my ability to design clear program structure, think through user workflows, and build practical tools for managing stored records.",
      link: "https://github.com/llnzjl/Book-Management-Program",
      skills: ["Programming Fundamentals", "Record Management", "Project Structure"],
    },
    {
      name: "Bank Management System",
      description:
        "A C-based banking management system that models common account-management operations through a command-line interface. The project shows my understanding of procedural programming, user input handling, account data organization, and building reliable menu-based software.",
      link: "https://github.com/llnzjl/Bank_MS",
      skills: ["C", "Account Management", "CLI"],
    },
  ],
  teamProjects: [
    {
      name: "Together Korea - Worker Support App",
      description:
        "A 1-night, 2-day Chungbuk Pro Maker Center hackathon project built by Team Together Korea. We designed an app for foreign workers in Korea, focused on practical workplace support, accessible information, and an AI chatbot that helps users get guidance more easily. Our team earned 2nd place and received both a completion certificate and a 2nd place award certificate.",
      link: "https://www.veritas-a.com/news/articleView.html?idxno=572820",
      skills: ["Team Project", "Hackathon", "AI Chatbot", "App Concept", "2nd Place"],
      certificates: [
        {
          title: "Completion Certificate",
          image: "/certificates/chungbuk-hackathon-completion.png",
          note: "",
        },
        {
          title: "2nd Place Award Certificate",
          image: "/certificates/chungbuk-hackathon-second-place.png",
          note: "",
        },
      ],
    },
  ],
  experience: [
    {
      company: "Chungbuk Pro Maker Center",
      title: "Hackathon Participant - 2nd Place, Together Korea",
      dateRange: "2025",
      link: "https://www.veritas-a.com/news/articleView.html?idxno=572820",
      bullets: [
        "Competed in a 1-night, 2-day hackathon with Team Together Korea and earned 2nd place.",
        "Helped build an app concept for foreign workers in Korea, focused on practical support, accessibility, and real workplace needs.",
        "Contributed to an AI chatbot feature designed to help workers receive guidance and information more easily inside the app.",
        "Received a completion certificate and a 2nd place award certificate for the project outcome.",
      ],
      certificates: [
        {
          title: "Completion Certificate",
          image: "/certificates/chungbuk-hackathon-completion.png",
          note: "",
        },
        {
          title: "2nd Place Award Certificate",
          image: "/certificates/chungbuk-hackathon-second-place.png",
          note: "",
        },
      ],
    },
  ],
  education: [
    {
      school: "Shuhada-e-Abparan High School",
      degree: "Foundational Education",
      dateRange: "Chak Wardak, Afghanistan",
      achievements: [
        "Completed elementary and middle school studies in Afghanistan.",
        "Built a strong academic foundation through disciplined classroom learning.",
        "Developed early communication, adaptability, and independent study skills.",
      ],
    },
    {
      school: "Osong High School",
      degree: "High School Diploma",
      dateRange: "Cheongju, South Korea",
      achievements: [
        "Completed high school education at Osong High School in Cheongju.",
        "Adapted to South Korea's academic environment while continuing to grow personally and academically.",
        "Strengthened Korean communication, cross-cultural confidence, and disciplined study habits.",
      ],
    },
  ],
};

export const translations = {
  en: {
    nav: {
      main: "Main",
      about: "About",
      projects: "Projects",
      experience: "Experience",
      education: "Education",
    },
    header: {
      menu: "Menu",
      language: "Language",
    },
    hero: {
      greeting: "Hello!",
      namePrefix: "My name is",
      title: siteConfig.title,
    },
    about: {
      heading: "About Me",
      text: siteConfig.aboutMe,
    },
    projects: {
      heading: "Projects",
      personal: "Personal Projects",
      team: "Team Projects",
      personalEmpty: "Personal projects will be added here soon.",
      personalItems: siteConfig.personalProjects,
      teamItems: siteConfig.teamProjects,
    },
    experience: {
      eyebrow: "Awards & Practical Work",
      heading: "Experience",
      intro:
        "Selected practical experiences where I worked with teams, built real solutions, and presented results under time pressure.",
      newsSource: "News source",
      items: siteConfig.experience,
    },
    education: {
      eyebrow: "Academic Background",
      heading: "Education",
      intro:
        "My education reflects persistence, adaptability, and growth across different learning environments.",
      school1: siteConfig.education[0].school,
      degree1: siteConfig.education[0].degree,
      achievement1: siteConfig.education[0].achievements[0],
      achievement2: siteConfig.education[0].achievements[1],
      achievement3: siteConfig.education[0].achievements[2],
      school2: siteConfig.education[1].school,
      degree2: siteConfig.education[1].degree,
      achievement4: siteConfig.education[1].achievements[0],
      achievement5: siteConfig.education[1].achievements[1],
      achievement6: siteConfig.education[1].achievements[2],
    },
    certificates: {
      placeholder: "Certificate photo placeholder",
    },
    footer: {
      rights: "All rights reserved.",
    },
  },
  ko: {
    nav: {
      main: "홈",
      about: "소개",
      projects: "프로젝트",
      experience: "경험",
      education: "학력",
    },
    header: {
      menu: "메뉴",
      language: "언어",
    },
    hero: {
      greeting: "안녕하세요!",
      namePrefix: "제 이름은",
      title: "저는 한국에서 컴퓨터공학을 전공하며 프로그래밍, 웹 개발, AI에 열정을 가지고 있습니다.",
    },
    about: {
      heading: "소개",
      text: "저는 기술과 문제 해결에 큰 관심을 가진 동기부여가 강하고 꼼꼼한 사람입니다. 새로운 기술을 배우고 프로그래밍과 웹 개발 같은 실제 프로젝트에 적용하는 것을 좋아합니다. 변화에 잘 적응하고 빠르게 배우며, 혼자서도 팀 안에서도 책임감 있게 일할 수 있습니다. 여러 경험을 통해 의사소통 능력과 비판적 사고를 키웠고, 항상 성장하고 발전할 기회를 찾고 있습니다. 좋은 결과물을 만들고 이 분야의 지식을 계속 넓혀 가는 데 최선을 다하고 있습니다.",
    },
    projects: {
      heading: "프로젝트",
      personal: "개인 프로젝트",
      team: "팀 프로젝트",
      personalEmpty: "개인 프로젝트가 곧 추가될 예정입니다.",
      personalItems: [
        {
          name: "학교 관리 시스템",
          description:
            "학생 기록과 행정 정보를 구조화된 콘솔 흐름으로 정리하는 C 기반 학교 관리 시스템입니다. 프로그래밍 기초, 데이터 처리, 메뉴 기반 상호작용, 실제 학사 행정 문제 해결 능력을 보여주는 프로젝트입니다.",
        },
        {
          name: "도서 관리 프로그램",
          description:
            "도서 정보를 간단하고 유지보수하기 쉬운 방식으로 정리하는 프로젝트입니다. 명확한 프로그램 구조를 설계하고 사용자 흐름을 고민하며 저장된 기록을 관리하는 실용적인 도구를 만드는 능력을 보여줍니다.",
        },
        {
          name: "은행 관리 시스템",
          description:
            "명령줄 인터페이스를 통해 일반적인 계좌 관리 기능을 구현한 C 기반 은행 관리 시스템입니다. 절차적 프로그래밍, 사용자 입력 처리, 계좌 데이터 구성, 안정적인 메뉴 기반 소프트웨어 제작 능력을 보여줍니다.",
        },
      ],
      teamItems: [
        {
          name: "Together Korea - 근로자 지원 앱",
          description:
            "팀 Together Korea가 충북 프로메이커센터 1박 2일 해커톤에서 제작한 프로젝트입니다. 한국의 외국인 근로자를 위해 실무 지원, 접근성 높은 정보, 더 쉽게 안내를 받을 수 있는 AI 챗봇을 중심으로 앱을 설계했습니다. 우리 팀은 2위를 수상했고 수료증과 2위 상장을 받았습니다.",
          certificates: [
            {
              title: "수료증",
              note: "나중에 public/certificates/chungbuk-hackathon-completion.jpg로 업로드하세요.",
            },
            {
              title: "2위 상장",
              note: "나중에 public/certificates/chungbuk-hackathon-second-place.jpg로 업로드하세요.",
            },
          ],
        },
      ],
    },
    experience: {
      eyebrow: "수상 및 실무 경험",
      heading: "경험",
      intro: "팀과 함께 실제 해결책을 만들고 제한된 시간 안에 결과를 발표했던 주요 실무 경험입니다.",
      newsSource: "기사 보기",
      items: [
        {
          title: "해커톤 참가자 - Together Korea 2위",
          bullets: [
            "팀 Together Korea와 1박 2일 해커톤에 참가해 2위를 수상했습니다.",
            "한국의 외국인 근로자를 위한 앱 콘셉트 제작에 참여했으며, 실질적인 지원과 접근성, 실제 현장 요구에 집중했습니다.",
            "앱 안에서 근로자가 안내와 정보를 더 쉽게 받을 수 있도록 AI 챗봇 기능에 기여했습니다.",
            "프로젝트 결과로 수료증과 2위 상장을 받았습니다.",
          ],
          certificates: [
            {
              title: "수료증",
              note: "나중에 public/certificates/chungbuk-hackathon-completion.jpg로 업로드하세요.",
            },
            {
              title: "2위 상장",
              note: "나중에 public/certificates/chungbuk-hackathon-second-place.jpg로 업로드하세요.",
            },
          ],
        },
      ],
    },
    education: {
      eyebrow: "학업 배경",
      heading: "학력",
      intro: "제 학업 과정은 서로 다른 학습 환경 속에서의 끈기, 적응력, 성장을 보여줍니다.",
      school1: "슈하다-에-아브파란 고등학교",
      degree1: "기초 교육",
      achievement1: "아프가니스탄에서 초등학교와 중학교 과정을 마쳤습니다.",
      achievement2: "규칙적인 학교 수업을 통해 탄탄한 학업 기초를 쌓았습니다.",
      achievement3: "초기 의사소통 능력, 적응력, 자기주도 학습 습관을 키웠습니다.",
      school2: "오송고등학교",
      degree2: "고등학교 졸업",
      achievement4: "청주 오송고등학교에서 고등학교 과정을 마쳤습니다.",
      achievement5: "한국의 학업 환경에 적응하며 개인적으로도 학업적으로도 성장했습니다.",
      achievement6: "한국어 의사소통, 문화 간 자신감, 꾸준한 학습 습관을 강화했습니다.",
    },
    certificates: {
      placeholder: "증명서 사진 자리",
    },
    footer: {
      rights: "모든 권리 보유.",
    },
  },
  ps: {
    nav: {
      main: "اصلي",
      about: "زما په اړه",
      projects: "پروژې",
      experience: "تجربه",
      education: "زده کړې",
    },
    header: {
      menu: "مینو",
      language: "ژبه",
    },
    hero: {
      greeting: "سلام!",
      namePrefix: "زما نوم دی",
      title: "زه په سویلي کوریا کې د کمپیوټر ساینس محصل یم او د پروګرام جوړونې، ویب پراختیا او AI سره مینه لرم.",
    },
    about: {
      heading: "زما په اړه",
      text: "زه یو هڅاند او دقیق کس یم چې له ټکنالوژۍ او د ستونزو له حل سره ژوره علاقه لرم. زه د نوو مهارتونو زده کړه او په واقعي پروژو کې یې کارول خوښوم، په ځانګړي ډول په پروګرام جوړونه او ویب پراختیا کې. زه ژر زده کوم، له بدلون سره ځان عیاروم، او کولی شم هم یوازې او هم د ټیم له غړو سره ښه کار وکړم. د خپلو تجربو له لارې مې د اړیکو او انتقادي فکر مهارتونه پیاوړي کړي، او تل د ودې او ښه کېدو فرصتونه لټوم. زه د باکیفیته کار وړاندې کولو او په دې برخه کې د خپلې پوهې د پراخولو ژمن یم.",
    },
    projects: {
      heading: "پروژې",
      personal: "شخصي پروژې",
      team: "ټیمي پروژې",
      personalEmpty: "شخصي پروژې به ژر دلته اضافه شي.",
      personalItems: [
        {
          name: "د ښوونځي مدیریت سیستم",
          description:
            "د C ژبې پر بنسټ د ښوونځي مدیریت سیستم چې د زده کوونکو اساسي ریکارډونه او اداري معلومات د منظم کنسول له لارې تنظیموي. دا پروژه د پروګرام جوړونې بنسټونه، د معلوماتو اداره، مینو لرونکې کارونه او د واقعي اداري ستونزو حل ښکاره کوي.",
        },
        {
          name: "د کتاب مدیریت پروګرام",
          description:
            "یوه پروژه چې د کتابونو معلومات په ساده او ساتلو اسانه ډول تنظیموي. دا زما وړتیا ښيي چې روښانه جوړښت طرحه کړم، د کاروونکي جریان وڅېړم، او د ثبت شوو معلوماتو د مدیریت لپاره عملي وسیله جوړه کړم.",
        },
        {
          name: "د بانک مدیریت سیستم",
          description:
            "د C ژبې پر بنسټ بانکي مدیریت سیستم چې د کمانډ لاین له لارې عام حسابي کارونه ترسره کوي. پروژه زما د ترتیبي پروګرام جوړونې، د کاروونکي د داخلونو د کارولو، حسابي معلوماتو تنظیم او د باور وړ مینو لرونکي سافټویر جوړولو پوهه ښيي.",
        },
      ],
      teamItems: [
        {
          name: "Together Korea - د کارکوونکو ملاتړ اپ",
          description:
            "د ټیم Together Korea له خوا د چنګبوک پرو میکر سنټر په ۱ شپه او ۲ ورځني هکاتون کې جوړ شوی پروژه. موږ په کوریا کې د بهرنیو کارکوونکو لپاره داسې اپ طرحه کړ چې عملي کاري ملاتړ، د لاسرسي وړ معلومات او AI چټ بوټ لري. زموږ ټیم دوهم مقام وګاټه او د ګډون سند او د دوهم مقام سند یې ترلاسه کړ.",
          certificates: [
            {
              title: "د ګډون سند",
              note: "دا وروسته د public/certificates/chungbuk-hackathon-completion.jpg په توګه پورته کړئ.",
            },
            {
              title: "د دوهم مقام سند",
              note: "دا وروسته د public/certificates/chungbuk-hackathon-second-place.jpg په توګه پورته کړئ.",
            },
          ],
        },
      ],
    },
    experience: {
      eyebrow: "جایزې او عملي کار",
      heading: "تجربه",
      intro: "هغه غوره عملي تجربې چې پکې مې له ټیمونو سره کار کړی، واقعي حلونه مې جوړ کړي، او تر وخت فشار لاندې مې پایلې وړاندې کړي.",
      newsSource: "خبر سرچینه",
      items: [
        {
          title: "د هکاتون ګډونوال - Together Korea دوهم مقام",
          bullets: [
            "له ټیم Together Korea سره مې په ۱ شپه او ۲ ورځني هکاتون کې سیالي وکړه او دوهم مقام مو وګاټه.",
            "په کوریا کې د بهرنیو کارکوونکو لپاره مې د اپ په طرحه کې مرسته وکړه، چې عملي ملاتړ، لاسرسی او واقعي کاري اړتیاوې یې محور وې.",
            "د AI چټ بوټ په ځانګړنه کې مې برخه واخیسته څو کارکوونکي په اپ کې لارښوونې او معلومات په اسانه ترلاسه کړي.",
            "د پروژې د پایلې لپاره مې د ګډون سند او د دوهم مقام سند ترلاسه کړ.",
          ],
          certificates: [
            {
              title: "د ګډون سند",
              note: "دا وروسته د public/certificates/chungbuk-hackathon-completion.jpg په توګه پورته کړئ.",
            },
            {
              title: "د دوهم مقام سند",
              note: "دا وروسته د public/certificates/chungbuk-hackathon-second-place.jpg په توګه پورته کړئ.",
            },
          ],
        },
      ],
    },
    education: {
      eyebrow: "علمي مخینه",
      heading: "زده کړې",
      intro: "زما زده کړې په بېلابېلو تعلیمي چاپېریالونو کې زغم، عیارېدنه او وده ښکاره کوي.",
      school1: "شهداي آبپران عالي لیسه",
      degree1: "بنسټیزه زده کړه",
      achievement1: "په افغانستان کې مې د ابتدائیه او منځني ښوونځي زده کړې بشپړې کړې.",
      achievement2: "د منظمې ټولګي زده کړې له لارې مې قوي علمي بنسټ جوړ کړ.",
      achievement3: "د اړیکو، عیارېدو او خپلواکې مطالعې لومړني مهارتونه مې پیاوړي کړل.",
      school2: "اوسونګ عالي لیسه",
      degree2: "د عالي لیسې ډیپلوم",
      achievement4: "په چیونګجو کې مې د اوسنګ عالي لیسې زده کړې بشپړې کړې.",
      achievement5: "د سویلي کوریا له تعلیمي چاپېریال سره عیار شوم او شخصي او علمي وده مې وکړه.",
      achievement6: "د کوریايي ژبې اړیکې، د کلتورونو ترمنځ باور او منظمې مطالعې عادتونه مې پیاوړي کړل.",
    },
    certificates: {
      placeholder: "د سند عکس ځای",
    },
    footer: {
      rights: "ټول حقونه خوندي دي.",
    },
  },
  fa: {
    nav: {
      main: "اصلی",
      about: "درباره من",
      projects: "پروژه ها",
      experience: "تجربه",
      education: "تحصیلات",
    },
    header: {
      menu: "منو",
      language: "زبان",
    },
    hero: {
      greeting: "سلام!",
      namePrefix: "نام من",
      title: "من دانشجوی رشته علوم کامپیوتر در کره جنوبی هستم و به برنامه نویسی، توسعه وب و هوش مصنوعی علاقه دارم.",
    },
    about: {
      heading: "درباره من",
      text: "من فردی با انگیزه و دقیق هستم که به فناوری و حل مسئله علاقه زیادی دارم. یادگیری مهارت های جدید و استفاده از آن ها در پروژه های واقعی، به ویژه در برنامه نویسی و توسعه وب، برایم لذت بخش است. من انعطاف پذیرم، سریع یاد می گیرم و می توانم هم مستقل و هم در محیط تیمی کار کنم. از طریق تجربه هایم مهارت های ارتباطی و تفکر انتقادی خود را تقویت کرده ام و همیشه به دنبال فرصت هایی برای رشد و پیشرفت هستم. متعهد هستم کار با کیفیت ارائه کنم و دانش خود را در این حوزه پیوسته گسترش دهم.",
    },
    projects: {
      heading: "پروژه ها",
      personal: "پروژه های شخصی",
      team: "پروژه های تیمی",
      personalEmpty: "پروژه های شخصی به زودی اینجا اضافه می شوند.",
      personalItems: [
        {
          name: "سیستم مدیریت مدرسه",
          description:
            "یک سیستم مدیریت مدرسه بر پایه زبان C که برای سازماندهی سوابق اصلی دانش آموزان و اطلاعات اداری از طریق یک جریان کنسولی ساختاریافته طراحی شده است. این پروژه استفاده عملی از مبانی برنامه نویسی، مدیریت داده، تعامل منو محور و حل مسئله برای اداره آموزشی واقعی را نشان می دهد.",
        },
        {
          name: "برنامه مدیریت کتاب",
          description:
            "پروژه ای برای سازماندهی اطلاعات کتاب ها به شکلی ساده و قابل نگهداری. این کار توانایی من در طراحی ساختار روشن برنامه، فکر کردن به جریان کاربر و ساخت ابزارهای کاربردی برای مدیریت سوابق ذخیره شده را نشان می دهد.",
        },
        {
          name: "سیستم مدیریت بانک",
          description:
            "یک سیستم مدیریت بانکی بر پایه C که عملیات رایج مدیریت حساب را از طریق رابط خط فرمان مدل سازی می کند. این پروژه درک من از برنامه نویسی رویه ای، مدیریت ورودی کاربر، سازماندهی داده های حساب و ساخت نرم افزار منو محور قابل اعتماد را نشان می دهد.",
        },
      ],
      teamItems: [
        {
          name: "Together Korea - اپ پشتیبانی کارگران",
          description:
            "پروژه ای در هکاتون یک شب و دو روزه مرکز Chungbuk Pro Maker که توسط تیم Together Korea ساخته شد. ما اپی برای کارگران خارجی در کره طراحی کردیم که بر پشتیبانی عملی محیط کار، اطلاعات قابل دسترس و چت بات هوش مصنوعی برای دریافت راهنمایی آسان تر تمرکز داشت. تیم ما مقام دوم را کسب کرد و گواهی پایان دوره و گواهی مقام دوم دریافت کرد.",
          certificates: [
            {
              title: "گواهی پایان دوره",
              note: "بعدا این را با نام public/certificates/chungbuk-hackathon-completion.jpg آپلود کنید.",
            },
            {
              title: "گواهی مقام دوم",
              note: "بعدا این را با نام public/certificates/chungbuk-hackathon-second-place.jpg آپلود کنید.",
            },
          ],
        },
      ],
    },
    experience: {
      eyebrow: "جوایز و کار عملی",
      heading: "تجربه",
      intro: "تجربه های عملی منتخب که در آن ها با تیم ها کار کردم، راه حل های واقعی ساختم و نتایج را زیر فشار زمان ارائه دادم.",
      newsSource: "منبع خبر",
      items: [
        {
          title: "شرکت کننده هکاتون - مقام دوم Together Korea",
          bullets: [
            "با تیم Together Korea در هکاتون یک شب و دو روزه رقابت کردم و مقام دوم را به دست آوردیم.",
            "در ساخت ایده اپ برای کارگران خارجی در کره کمک کردم؛ تمرکز ما بر پشتیبانی عملی، دسترسی پذیری و نیازهای واقعی محیط کار بود.",
            "در ویژگی چت بات هوش مصنوعی مشارکت کردم تا کارگران بتوانند در داخل اپ راهنمایی و اطلاعات را آسان تر دریافت کنند.",
            "برای نتیجه پروژه گواهی پایان دوره و گواهی مقام دوم دریافت کردم.",
          ],
          certificates: [
            {
              title: "گواهی پایان دوره",
              note: "بعدا این را با نام public/certificates/chungbuk-hackathon-completion.jpg آپلود کنید.",
            },
            {
              title: "گواهی مقام دوم",
              note: "بعدا این را با نام public/certificates/chungbuk-hackathon-second-place.jpg آپلود کنید.",
            },
          ],
        },
      ],
    },
    education: {
      eyebrow: "پیشینه تحصیلی",
      heading: "تحصیلات",
      intro: "تحصیلات من نشان دهنده پشتکار، سازگاری و رشد در محیط های آموزشی متفاوت است.",
      school1: "لیسه شهدای آب پران",
      degree1: "آموزش پایه",
      achievement1: "دوره ابتدایی و متوسطه را در افغانستان به پایان رساندم.",
      achievement2: "از طریق یادگیری منظم در کلاس، پایه علمی قوی ساختم.",
      achievement3: "مهارت های اولیه ارتباطی، سازگاری و مطالعه مستقل را پرورش دادم.",
      school2: "دبیرستان اوسانگ",
      degree2: "دیپلم دبیرستان",
      achievement4: "تحصیلات دبیرستان را در دبیرستان اوسانگ شهر چئونگجو به پایان رساندم.",
      achievement5: "با محیط آموزشی کره جنوبی سازگار شدم و از نظر شخصی و علمی رشد کردم.",
      achievement6: "ارتباط به زبان کره ای، اعتماد میان فرهنگی و عادت های مطالعه منظم را تقویت کردم.",
    },
    certificates: {
      placeholder: "جای عکس گواهی",
    },
    footer: {
      rights: "تمام حقوق محفوظ است.",
    },
  },
};
