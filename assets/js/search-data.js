// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "A growing collection of your cool projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-courses",
          title: "courses",
          description: "Lecture notes from courses",
          section: "Navigation",
          handler: () => {
            window.location.href = "/courses/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "This is a description of the page. You can modify it in &#39;_pages/cv.md&#39;. You can also change or remove the top pdf download button.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-lit-review",
          title: "Lit Review",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/lit_review/";
          },
        },{id: "post-2025-sep-oct-my-chatgpt-went-0-5-lingual",
        
          title: "2025 Sep–Oct: My ChatGPT Went 0.5-Lingual",
        
        description: "In fall 2025, my Korean ChatGPT conversations started leaking Japanese. Here are the patterns I found across 12 examples.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/chatgpt-half-lingual/";
          
        },
      },{id: "post-reflection-on-genai-final-project-kgraph-chatbot",
        
          title: "Reflection on GenAI Final Project KGraph Chatbot",
        
        description: "what I have succeeded, what I will improve, what I have learned",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/reflection_on_KG/";
          
        },
      },{id: "post-not-yet",
        
          title: "not yet",
        
        description: "First time starting a tech blog.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/not-yet/";
          
        },
      },{id: "post-creating-ssh-key-and-connecting-to-github-for-mac-window-linux",
        
          title: "Creating SSH key and Connecting to GitHub for mac/window/linux",
        
        description: "how to create local SSH key and connect the key to GitHub account",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/creating_ssh_/";
          
        },
      },{id: "post-first-technical-blog",
        
          title: "First Technical Blog",
        
        description: "First time starting a tech blog.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/first_post_/";
          
        },
      },{id: "post-google-gemini-updates-flash-1-5-gemma-2-and-project-astra",
        
          title: 'Google Gemini updates: Flash 1.5, Gemma 2 and Project Astra <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "We’re sharing updates across our Gemini family of models and a glimpse of Project Astra, our vision for the future of AI assistants.",
        section: "Posts",
        handler: () => {
          
            window.open("https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/", "_blank");
          
        },
      },{id: "post-displaying-external-posts-on-your-al-folio-blog",
        
          title: 'Displaying External Posts on Your al-folio Blog <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@al-folio/displaying-external-posts-on-your-al-folio-blog-b60a1d241a0a?source=rss-17feae71c3c4------2", "_blank");
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "courses-3-how-to-design-the-schema-of-a-knowledge-graph",
          title: '3. How to design the schema of a Knowledge Graph?',
          description: "",
          section: "Courses",handler: () => {
              window.location.href = "/courses/CS520/lecture-03/";
            },},{id: "courses-4-how-to-create-a-knowledge-graph-from-data",
          title: '4. How to create a Knowledge Graph from Data?',
          description: "",
          section: "Courses",handler: () => {
              window.location.href = "/courses/CS520/lecture-04/";
            },},{id: "courses-symbols-concepts-and-factss",
          title: 'Symbols, concepts, and factss',
          description: "",
          section: "Courses",handler: () => {
              window.location.href = "/courses/CS325/lecture-01/";
            },},{id: "courses-cs520-knowledge-graph",
          title: 'CS520: Knowledge Graph',
          description: "",
          section: "Courses",handler: () => {
              window.location.href = "/courses/CS520/description/";
            },},{id: "courses-inm713-knowledge-graphs-in-the-era-of-large-language-models",
          title: 'INM713: Knowledge Graphs in the Era of Large Language Models',
          description: "",
          section: "Courses",handler: () => {
              window.location.href = "/courses/INM713/description/";
            },},{id: "courses-introduction-to-knowledge-graphs-1-rdf-based-knowledge-graphs",
          title: 'Introduction to Knowledge Graphs (1): RDF-based Knowledge Graphs',
          description: "",
          section: "Courses",handler: () => {
              window.location.href = "/courses/INM713/lecture-01-part1/";
            },},{id: "courses-introduction-to-knowledge-graphs-2-owl-based-knowledge-graphs",
          title: 'Introduction to Knowledge Graphs (2): OWL-based Knowledge Graphs',
          description: "",
          section: "Courses",handler: () => {
              window.location.href = "/courses/INM713/lecture-01-part2/";
            },},{id: "courses-reasoning-and-querying-with-knowledge-graphs-1-sparql-query-language-for-rdf-based-kgs",
          title: 'Reasoning and Querying with Knowledge Graphs (1): SPARQL Query Language for RDF-based KGs...',
          description: "",
          section: "Courses",handler: () => {
              window.location.href = "/courses/INM713/lecture-02-part1/";
            },},{id: "lit_review-extracting-family-trees-from-literary-texts",
          title: 'Extracting Family Trees from Literary Texts',
          description: "",
          section: "Lit_review",handler: () => {
              window.location.href = "/lit_review/2025-12-12-extracting_family_trees_from_literary_texts/";
            },},{id: "lit_review-does-environmental-policy-affect-scaling-laws-between-population-and-pollution-evidence-from-american-metropolitan-areas",
          title: 'Does environmental policy affect scaling laws between population and pollution? Evidence from American...',
          description: "",
          section: "Lit_review",handler: () => {
              window.location.href = "/lit_review/2025-12-14-does_environmental_policy_affect_scaling_laws/";
            },},{id: "lit_review-what-39-s-in-a-post-how-sentiment-and-issue-salience-affect-user-39-s-emotional-reactions-on-facebook",
          title: 'What&amp;#39;s in a post? How sentiment and issue salience affect user&amp;#39;s emotional reactions...',
          description: "",
          section: "Lit_review",handler: () => {
              window.location.href = "/lit_review/2025-12-18-whats_in_a_post/";
            },},{id: "lit_review-a-description-logic-primer",
          title: 'A Description Logic Primer',
          description: "",
          section: "Lit_review",handler: () => {
              window.location.href = "/lit_review/2025-12-26-Description_Logic/";
            },},{id: "news-a-simple-inline-announcement",
          title: 'A simple inline announcement.',
          description: "",
          section: "News",},{id: "news-a-long-announcement-with-details",
          title: 'A long announcement with details',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_2/";
            },},{id: "news-a-simple-inline-announcement-with-markdown-emoji-sparkles-smile",
          title: 'A simple inline announcement with Markdown emoji! :sparkles: :smile:',
          description: "",
          section: "News",},{id: "projects-the-number-of-order-2-elements-in-dihedral-group",
          title: 'The Number of Order 2 Elements in Dihedral Group',
          description: "proof for the number of order 2 elements in each dihedral group",
          section: "Projects",handler: () => {
              window.location.href = "/projects/10_project/";
            },},{id: "projects-1-project",
          title: '1_project',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-project-2",
          title: 'project 2',
          description: "a project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-project-3-with-very-long-name",
          title: 'project 3 with very long name',
          description: "a project that redirects to another website",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
            },},{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/assets/pdf/example_pdf.pdf", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%79%6F%75@%65%78%61%6D%70%6C%65.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-inspire',
        title: 'Inspire HEP',
        section: 'Socials',
        handler: () => {
          window.open("https://inspirehep.net/authors/1010907", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=qc6CJjYAAAAJ", "_blank");
        },
      },{
        id: 'social-custom_social',
        title: 'Custom_social',
        section: 'Socials',
        handler: () => {
          window.open("https://www.alberteinstein.com/", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
