import type { CSSProperties } from "react";
import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { SmoothAnchors } from "@/components/SmoothAnchors";
import { Star } from "@/components/Star";

const EMAIL = "ayush97818@gmail.com";

// Index for staggered type, read by CSS as var(--i)
const at = (i: number) => ({ "--i": i }) as CSSProperties;
const LINKEDIN = "https://www.linkedin.com/in/ayush-kumar-189b66225";
const GITHUB = "https://github.com/Ayush-Das-9";
const RAG_REPO = "https://github.com/Ayush-Das-9/Rag_Based_AI";
const TTAI_REPO = "https://github.com/Ayush-Das-9/TTAi";
const KISAN_REPO = "https://github.com/Ayush-Das-9/Kisan_Mitra";
const YAKSHA_REPO = "https://github.com/Ayush-Das-9/cs10";

const education = [
  {
    level: "B.Tech",
    school: "Guru Nanak Dev Engineering College",
    detail: "Computer Science & Engineering · CGPA 7.5",
  },
  { level: "Class XII", school: "K.V. No. 2, Bailey Road, Patna", detail: "CBSE" },
  { level: "Class X", school: "K.V. No. 1, Bathinda Cantt.", detail: "CBSE" },
];

const skills = [
  { group: "AI & GenAI", items: "RAG, LangChain, Embeddings" },
  { group: "Programming", items: "Python, C++, CSS, Git, GitHub" },
  { group: "Data analysis", items: "Pandas, NumPy, EDA, Data cleaning" },
  { group: "Backend", items: "FastAPI, Flask" },
  { group: "Database", items: "MySQL" },
];

const indexing = [
  { name: "Lecture audio", note: "18 course videos, taught in Hindi, saved as MP3" },
  { name: "Whisper", note: "Transcribes and translates to English, keeping segment timestamps" },
  { name: "JSON chunks", note: "Each segment stored with lecture number, title, start, end and text" },
  { name: "BGE-M3 on Ollama", note: "One embedding per chunk, kept in a DataFrame saved with joblib" },
];

const answering = [
  { name: "Question", note: "Posted to the FastAPI endpoint /api/query" },
  { name: "BGE-M3 on Ollama", note: "The question is embedded with the same model" },
  { name: "Cosine similarity", note: "Every chunk is scored and the top five are kept" },
  { name: "Llama 3.2 on Ollama", note: "Writes an answer naming the lecture and timestamp" },
  { name: "Response", note: "Answer plus the five source chunks and their scores" },
];

const stack = ["Python", "FastAPI", "Ollama", "Llama 3.2", "BGE-M3", "OpenAI Whisper", "pandas", "scikit-learn"];

const ttaiStack = ["Python", "FastAPI", "React", "MongoDB", "Gemini", "Groq"];

// Stack as listed on the résumé
const kisanStack = ["FastAPI", "Vanilla JS", "Uvicorn", "Groq LLM API"];

// Keypad rows and menu options from src/utils/constants.ts in the Kisan_Mitra repository
const keypad = ["7", "8", "9", "4", "5", "6", "1", "2", "3", "C", "0", "✓"];
const kisanMenu = [
  { key: "1", hi: "फसल की जानकारी", en: "Crop information" },
  { key: "2", hi: "गेहूं समाचार", en: "Wheat news" },
  { key: "3", hi: "उर्वरक जानकारी", en: "Fertiliser information" },
];

const chunkSample = `{
  "number": "12",
  "title": "CSS Selectors MasterClass ",
  "start": 0.0,
  "end": 8.700000000000001,
  "text": " Guys, we talked about selectors in CSS and we said that selectors are used to select an element on which style is going to be applied."
}`;

const responseShape = `{
  "answer": "<written by Llama 3.2>",
  "sources": [
    {
      "title": ..., "number": ...,
      "start": ..., "end": ...,
      "text": ..., "similarity": ...
    }
    // five chunks in total
  ],
  "query": "<the question>"
}`;

export default function Home() {
  return (
    <>
      <a className="skip" href="#main">
        Skip to content
      </a>

      <header className="hero" id="top">
        <nav className="nav wrap-wide" aria-label="Main">
          <a className="nav__brand" href="#top">
            <Star className="nav__star" />
            Ayush Kumar
          </a>
          <ul className="nav__links">
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#work">Work</a>
            </li>
            <li>
              <a href="#resume">Resume</a>
            </li>
            <li>
              <a className="pill pill--yellow" href="#contact">
                Get in touch!
              </a>
            </li>
          </ul>
        </nav>

        <div className="hero__stage">
          <h1 className="hero__title">
            <span className="sr-only">Ayush Kumar, Portfolio</span>
            {/* Set letter by letter, like sorts dropped into a composing stick */}
            <span className="hero__letters" aria-hidden="true">
              {"Portfolio".split("").map((ch, i) => (
                <span key={i} style={at(i)}>
                  {ch}
                </span>
              ))}
            </span>
          </h1>

          <div className="hero__echo" aria-hidden="true">
            <span>
              <span className="drift">Portfolio</span>
            </span>
            <span className="hero__echo-cut">
              <span className="drift">Portfolio</span>
            </span>
            <span>
              <span className="drift">Portfolio</span>
            </span>
          </div>

          <div className="hero__photo">
            <Image
              src="/images/ayush-hero.webp"
              alt="Ayush Kumar in a navy blazer and white shirt, photographed against a burnt-orange backdrop"
              width={1001}
              height={835}
              sizes="(min-width: 900px) 38vw, 86vw"
              preload
              fetchPriority="high"
            />
            <Star className="hero__star hero__star--big" />
            <Star className="hero__star hero__star--small" />
            <Star className="hero__star hero__star--corner" />
          </div>
        </div>

        <div className="hero__band">
          <div className="hero__band-inner">
            <p className="hero__intro">
              Computer Science engineering student building retrieval systems, LLM applications and Python
              backends.
            </p>
            <a className="scroll" href="#about">
              Scroll
              <br />
              down
            </a>
          </div>
        </div>
      </header>

      <main id="main">
        <section className="about" id="about" aria-labelledby="about-title">
          <div className="wrap about__grid">
            <div className="about__text">
              <h2 className="about__title" id="about-title" data-reveal="greeting">
                <span className="word" style={at(0)}>
                  Hello,
                </span>
                <br />
                <span className="word" style={at(1)}>
                  I&rsquo;m
                </span>{" "}
                <span className="word" style={at(2)}>
                  Ayush!
                </span>
              </h2>
              <div>
              <p>
                I&rsquo;m a B.Tech Computer Science &amp; Engineering student at Guru Nanak Dev Engineering College. I
                work with AI systems, retrieval pipelines and backend development, with a focus on turning technical
                ideas into useful applications.
              </p>
              <p>
                Most of my projects are written in Python and served with FastAPI. During my internship at IIT Ropar I
                built Yaksha-Mini, a chatbot that answers from a vector index.
              </p>
              </div>
            </div>

            <div className="about__side">
              <div className="portrait" data-reveal="portrait">
                <div className="portrait__frame">
                  <Image
                    className="portrait__img"
                    src="/images/ayush-headshot.webp"
                    alt="Head-and-shoulders portrait of Ayush Kumar"
                    width={600}
                    height={600}
                    sizes="280px"
                  />
                </div>
                <p className="portrait__tag portrait__tag--one">B.Tech CSE, GNDEC</p>
                <p className="portrait__tag portrait__tag--two">Intern, IIT Ropar</p>
              </div>

              <div className="contact-card" data-reveal="card">
                <h3>Contact</h3>
                <dl>
                  <div>
                    <dt>Email</dt>
                    <dd>
                      <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
                    </dd>
                  </div>
                  <div>
                    <dt>LinkedIn</dt>
                    <dd>
                      <a href={LINKEDIN}>/in/ayush-kumar-189b66225</a>
                    </dd>
                  </div>
                  <div>
                    <dt>GitHub</dt>
                    <dd>
                      <a href={GITHUB}>/Ayush-Das-9</a>
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </section>

        <section className="work" id="work" aria-labelledby="work-title">
          <div className="wrap">
            <div className="work__head" data-reveal="rule">
              <h2 className="work__title" id="work-title">
                Selected work
              </h2>
              <p className="meta">01 RAG · 02 TTAI · 03 Kisan Mitra</p>
            </div>

            <article className="case" aria-labelledby="case-title">
              <div className="case__intro" data-reveal="intro">
                <p className="case__no" aria-hidden="true">
                  01
                </p>
                <div>
                  <h3 className="case__title" id="case-title">
                    RAG Implementation
                  </h3>
                  <p className="case__lead">
                    Ask a question about a recorded video course and get back the lecture and the timestamp where the
                    topic is taught.
                  </p>
                </div>
              </div>

              <div className="case__body">
                <div className="case__story">
                  <h4>Problem</h4>
                  <p>
                    The course is a series of 18 web development lectures recorded in Hindi. Finding the place where a
                    particular idea is explained means scrubbing through the recordings by hand.
                  </p>
                  <h4>Approach</h4>
                  <p>
                    Whisper transcribes each lecture and translates it to English while keeping the timestamp of every
                    segment. Each segment becomes a chunk with its lecture number, title, start and end time. BGE-M3,
                    running locally through Ollama, turns every chunk into an embedding.
                  </p>
                  <p>
                    A question goes through the same embedding model and is compared with every chunk by cosine
                    similarity. The five closest chunks are placed in a prompt for Llama 3.2, which answers in plain
                    language and points the learner to the right video and moment.
                  </p>
                </div>

                <aside className="case__facts" aria-label="Project details">
                  <h4>Stack</h4>
                  <ul className="case__stack">
                    {stack.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <h4>Source</h4>
                  <p>
                    Source code repository. The app runs locally against Ollama, so there is no hosted demo.
                  </p>
                  <a className="pill pill--outline" href={RAG_REPO}>
                    Ayush-Das-9/Rag_Based_AI
                  </a>
                </aside>
              </div>

              <figure className="pipeline">
                <div className="lane" data-reveal="lane">
                  <p className="lane__label">Indexing, run once</p>
                  <ol className="lane__steps">
                    {indexing.map((step, i) => (
                      <li key={step.name}>
                        <span className="lane__no">{String(i + 1).padStart(2, "0")}</span>
                        <strong>{step.name}</strong>
                        <span>{step.note}</span>
                      </li>
                    ))}
                  </ol>
                </div>
                <div className="lane" data-reveal="lane">
                  <p className="lane__label">Answering, per question</p>
                  <ol className="lane__steps" start={5}>
                    {answering.map((step, i) => (
                      <li key={step.name + i}>
                        <span className="lane__no">{String(i + 5).padStart(2, "0")}</span>
                        <strong>{step.name}</strong>
                        <span>{step.note}</span>
                      </li>
                    ))}
                  </ol>
                </div>
                <figcaption>
                  System diagram drawn from the repository code. It explains the pipeline and is not a screenshot of the
                  application.
                </figcaption>
              </figure>

              <div className="case__evidence">
                <figure>
                  <figcaption>
                    <strong>A stored chunk.</strong> Copied from <code>jsons/12_CSS Selectors MasterClass</code> in the
                    repository.
                  </figcaption>
                  <pre>
                    <code>{chunkSample}</code>
                  </pre>
                </figure>
                <figure>
                  <figcaption>
                    <strong>What /api/query returns.</strong> Response fields as defined in <code>app.py</code>.
                  </figcaption>
                  <pre>
                    <code>{responseShape}</code>
                  </pre>
                </figure>
              </div>
            </article>

            <article className="case plate plate--cream" aria-labelledby="ttai-title" data-reveal="panel">
              <div className="case__intro case__intro--flip" data-reveal="intro">
                <div>
                  <h3 className="case__title" id="ttai-title">
                    TTAI
                  </h3>
                  <p className="case__kicker">AI Timetable Generator</p>
                  <p className="case__lead">An AI study assistant that plans a student&rsquo;s day and tracks syllabus progress.</p>
                </div>
                <p className="case__no" aria-hidden="true">
                  02
                </p>
              </div>

              <div className="ttai__body">
                <figure className="services">
                  <div className="service">
                    <p className="service__route">GET /timetable</p>
                    <ol className="service__flow">
                      <li>Student&rsquo;s request</li>
                      <li>LangChain agent on Groq</li>
                      <li>MongoDB: lectures, attendance, study log</li>
                      <li>Day plan</li>
                    </ol>
                  </div>
                  <div className="service">
                    <p className="service__route">POST /progress</p>
                    <ol className="service__flow">
                      <li>Photo of notes</li>
                      <li>Gemini 2.5 Flash</li>
                      <li>Syllabus done, 0 to 100</li>
                    </ol>
                  </div>
                  <figcaption>Drawn from the repository code.</figcaption>
                </figure>

                <aside className="ttai__side" aria-label="TTAI details">
                  <h4>Agent rules</h4>
                  <ul className="rules">
                    <li>
                      <strong>75.5%</strong> below this attendance, never skip
                    </li>
                    <li>
                      <strong>85%</strong> above this, with a backlog, may self-study
                    </li>
                    <li>
                      <strong>12:30</strong> lunch, always
                    </li>
                  </ul>
                  <ul className="case__stack">
                    {ttaiStack.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <a className="pill pill--ink" href={TTAI_REPO}>
                    Ayush-Das-9/TTAi
                  </a>
                  <p className="meta ttai__note">Fork of mishrayushgit/TTAi · runs locally</p>
                </aside>
              </div>
            </article>

            <article className="case plate plate--green" aria-labelledby="kisan-title" data-reveal="panel">
              <div className="case__intro" data-reveal="intro">
                <p className="case__no" aria-hidden="true">
                  03
                </p>
                <div>
                  <h3 className="case__title" id="kisan-title">
                    Kisan Mitra
                  </h3>
                  <p className="case__kicker">Agriculture assistant</p>
                  <p className="case__lead">A farming assistant driven by a numpad, designed for rural accessibility.</p>
                </div>
              </div>

              <div className="kisan__body">
                <figure className="keypad" data-reveal="keypad">
                  <div className="keypad__keys" aria-hidden="true">
                    {keypad.map((key) => (
                      <span key={key} className={`keypad__key${"123".includes(key) ? " keypad__key--menu" : ""}`}>
                        {key}
                      </span>
                    ))}
                  </div>
                  <ol className="keypad__menu">
                    {kisanMenu.map((item) => (
                      <li key={item.key}>
                        <span className="keypad__no">{item.key}</span>
                        <span lang="hi">{item.hi}</span>
                        <span>{item.en}</span>
                      </li>
                    ))}
                  </ol>
                  <figcaption>Keypad and spoken menu, from the repository. Not a screenshot.</figcaption>
                </figure>

                <div className="kisan__story">
                  <p>
                    Built with FastAPI and the Groq LLM API for farming guidance. The public repository holds an Expo
                    version of the interface, with the menu read aloud in Hindi.
                  </p>
                  <ul className="case__stack">
                    {kisanStack.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <a className="pill pill--outline" href={KISAN_REPO}>
                    Ayush-Das-9/Kisan_Mitra
                  </a>
                </div>
              </div>
            </article>

            <ul className="index" aria-label="More work">
              <li>
                <span className="index__no">04</span>
                <span className="index__name">Yaksha-Mini</span>
                <span className="index__note">
                  AI chatbot with vector search and caching, built during the IIT Ropar internship.
                </span>
                <a href={YAKSHA_REPO}>github.com/Ayush-Das-9/cs10</a>
              </li>
              <li>
                <span className="index__no">05</span>
                <span className="index__name">On GitHub</span>
                <span className="index__note">Coursework, experiments and smaller projects.</span>
                <a href={GITHUB}>github.com/Ayush-Das-9</a>
              </li>
            </ul>
          </div>
        </section>

        <section className="resume" id="resume" aria-labelledby="resume-title">
          <h2 className="sr-only" id="resume-title">
            Resume
          </h2>
          <div className="wrap resume__grid">
            <div className="resume__main">
              <h3 className="heading heading--yellow">
                Education
              </h3>
              <ol className="timeline" data-reveal="timeline">
                {education.map((item) => (
                  <li key={item.level}>
                    <Star className="timeline__star" />
                    <span className="timeline__when">{item.level}</span>
                    <span className="timeline__what">
                      <strong>{item.school}</strong>
                      <span>{item.detail}</span>
                    </span>
                  </li>
                ))}
              </ol>

              <div className="experience" id="experience" data-reveal="panel">
                <h3 className="heading">Experience</h3>
                <ol className="timeline timeline--dark">
                  <li>
                    <Star className="timeline__star" />
                    <span className="timeline__when">May to June</span>
                    <span className="timeline__what">
                      <strong>Developer Intern</strong>
                      <span>Indian Institute of Technology Ropar</span>
                    </span>
                  </li>
                </ol>
                <ul className="experience__notes">
                  <li>
                    Developed Yaksha-Mini, an AI-powered chatbot that uses vector search and caching for faster
                    information retrieval.
                  </li>
                  <li>Improved response retrieval through embedding-based search.</li>
                </ul>
                <ul className="experience__tags" aria-label="Areas">
                  <li className="pill pill--black">Vector search</li>
                  <li className="pill pill--black">Embeddings</li>
                  <li className="pill pill--black">Caching</li>
                </ul>
              </div>
            </div>

            <div className="resume__side">
              <div className="resume__echo" aria-hidden="true" data-reveal="plate">
                <span>
                  <span className="drift">Resume</span>
                </span>
                <span>
                  <span className="drift">Resume</span>
                </span>
                <span>
                  <span className="drift">Resume</span>
                </span>
              </div>
              <h3 className="heading heading--yellow skills__title">
                Technical skills
              </h3>
              <dl className="skills">
                {skills.map((s) => (
                  <div key={s.group}>
                    <dt>{s.group}</dt>
                    <dd>{s.items}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        <section className="honours" aria-label="Hackathons and certifications">
          <div className="wrap honours__grid">
            <div className="honours__left">
              <h3 className="heading">Hackathons</h3>
              <ol className="timeline timeline--light" data-reveal="timeline">
                <li>
                  <Star className="timeline__star" />
                  <span className="timeline__when">Top 10</span>
                  <span className="timeline__what">
                    <strong>DEV CREATE BUILDFEST-1.0</strong>
                    <span>CT Group</span>
                  </span>
                </li>
                <li>
                  <Star className="timeline__star" />
                  <span className="timeline__when">Top 25</span>
                  <span className="timeline__what">
                    <strong>Hack n Win 3.0</strong>
                    <span>CGC</span>
                  </span>
                </li>
              </ol>
            </div>
            <div className="honours__right">
              <h3 className="heading">Certifications</h3>
              <ul className="certs">
                <li>
                  <strong>Coursera</strong>
                  <span>RAG Course for GEN-AI</span>
                  <span>Dec 2025</span>
                </li>
                <li>
                  <strong>Infosys</strong>
                  <span>Python Foundation Certification</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="contact" id="contact" aria-labelledby="contact-title">
          <div className="wrap contact__grid">
            <h2 className="contact__title" id="contact-title" data-reveal="headline">
              Get in
              <br />
              touch!
              <Star className="contact__star" />
            </h2>
            <ul className="contact__links">
              <li>
                <span className="meta">Email</span>
                <a className="pill pill--orange" href={`mailto:${EMAIL}`}>
                  {EMAIL}
                </a>
              </li>
              <li>
                <span className="meta">LinkedIn</span>
                <a href={LINKEDIN}>linkedin.com/in/ayush-kumar-189b66225</a>
              </li>
              <li>
                <span className="meta">GitHub</span>
                <a href={GITHUB}>github.com/Ayush-Das-9</a>
              </li>
            </ul>
          </div>
          <footer className="wrap footer">
            <p>© 2026 Ayush Kumar</p>
            <a href="#top">Back to top</a>
          </footer>
        </section>
      </main>
      <Reveal />
      <SmoothAnchors />
    </>
  );
}
