import { useEffect, useState, type ChangeEvent, type ReactNode } from "react";
import drtLogo from "./assets/drt-logo.png";
import researchFundLogo from "./assets/research-excellent-fund.png";
import genomeCanadaLogo from "./assets/R.jpg";
import questionnaireSample from "./assets/Questionnaire_Sample.png";
import engSampleParent from "./assets/Eng_sample_Q1.png";
import engSampleChild from "./assets/Eng_sample_Q1_child.png";
import fraSampleParent from "./assets/Fra_sample_Q1.png";
import fraSampleChild from "./assets/Fra_sample_Q1_child.png";
import "./App.css";

type CTA = {
  id: string;
  title: string;
  linkLabel: string;
  linkHref: string;
  body: ReactNode;
};

type ScreenshotDetails = {
  image: string;
  alt: string;
  caption: string;
};

type Screenshot = ScreenshotDetails & {
  relatedHeading?: string;
  related?: ScreenshotDetails[];
};

type Content = {
  hero: {
    title: string;
    subtitle: string;
    heading: string;
    description: string;
  };
  intro: string[];
  ctas: CTA[];
  landingSections: {
    id: string;
    title: string;
    body: ReactNode;
  }[];
  quickLinks: {
    id: string;
    label: string;
    href: string;
  }[];
  about: { heading: string; copy: string }[];
  partners: { name: string; href?: string; image?: string }[];
  questionnaire: {
    heading: string;
    description: string;
    images: Screenshot[];
  };
  schemaPreview: {
    heading: string;
    description: string;
    tryButton: string;
    tryButtonHref: string;
  };
  footer: {
    supportedBy: string;
    logos: { alt: string; href: string; image: string }[];
  };
};

type Language = "en" | "fr";

const QUESTIONNAIRE_PREVIEW_URL =
  "https://drt-test.canadacentral.cloudapp.azure.com/preview-questionnaire";
const DRT_DEMO_EMAIL = "adc@uoguelph.ca";

const contentByLanguage: Record<Language, Content> = {
  en: {
    hero: {
      title: "Semantic Engine",
      subtitle: "Agreements",
      heading: "Helping share your work",
      description:
        "Describe in custom terms how you want to make your work available",
    },
    intro: [
      "Machine-readable data agreements reduce administrative overhead and increase the accessibility and reusability of research data across disciplines and borders.",
      "By writing agreements in standardized, digital formats, researchers can ensure their terms are instantly understandable by both humans and machines.",
    ],
    ctas: [
      {
        id: "groups",
        title: "For Data Spaces",
        linkLabel: "Run your own data negotiation agreement server",
        linkHref:
          "https://github.com/ClimateSmartAgCollab/DRT_Design_Document/blob/main/README.md",
        body: (
          <>
            For research groups, large-scale projects, or research Data Spaces,
            deploy our{" "}
            <a
              className="cta-highlight"
              href="https://drt-test.canadacentral.cloudapp.azure.com/"
              target="_blank"
              rel="noreferrer"
            >
              Data Request Tracker (DRT)
            </a>{" "}
            to customize questions and manage ongoing communication with data
            requestors. The DRT enables you to generate custom data
            licenses—both human- and machine-readable—based on the responses you
            collect.
          </>
        ),
      },
    ],
    landingSections: [
      {
        id: "customized-questionnaires",
        title: "Customized questionnaires",
        body: (
          <>
            <p>
              Generate custom questionnaires to ask the questions you need to
              make data or resource sharing decisions.
            </p>
            <p>
              Explore the layout and styling of questionnaires used by the DRT
              with our{" "}
              <a
                href={QUESTIONNAIRE_PREVIEW_URL}
                target="_blank"
                rel="noreferrer"
                className="landing-link-inline"
              >
                Preview a questionnaire
              </a>
              . This preview displays a sample form, including one of its nested
              collaborator sections that requestors complete during data access
              negotiations, demonstrating how a Semantic Engine schema is
              transformed into an interactive questionnaire form.
            </p>
          </>
        ),
      },
      {
        id: "run-your-own-drt",
        title: "Run your own DRT",
        body: (
          <>
            <p>
              The DRT is an{" "}
              <a
                href="https://github.com/ClimateSmartAgCollab/DRT_Design_Document"
                target="_blank"
                rel="noreferrer"
                className="landing-link-inline"
              >
                open source
              </a>{" "}
              project hosted on GitHub. To implement the DRT you will need to
              run your own custom instance to host the questionnaires, templates
              and manage ongoing communication with data requestors.
            </p>
            <p>
              Contact us at{" "}
              <a
                href={`mailto:${DRT_DEMO_EMAIL}`}
                className="landing-link-inline"
              >
                {DRT_DEMO_EMAIL}
              </a>{" "}
              to try a DRT Demo.
            </p>
          </>
        ),
      },
    ],
    quickLinks: [
      {
        id: "preview-questionnaire",
        label: "Preview a questionnaire",
        href: QUESTIONNAIRE_PREVIEW_URL,
      },
      {
        id: "request-demo",
        label: "Email a request to try the DRT Demo",
        href: `mailto:${DRT_DEMO_EMAIL}`,
      },
    ],
    about: [{ heading: "Our Partners", copy: "" }],
    partners: [
      { name: "Agri-Food Data Canada", href: "https://agrifooddatacanada.ca/" },
      { name: "Université Laval", href: "https://www.ulaval.ca/" },
      { name: "Simon Fraser University", href: "https://www.sfu.ca/" },
      { name: "CS-DCC", href: "https://cs-dcc.ca/", image: "" },
    ],
    questionnaire: {
      heading: "See the Questionnaire Experience",
      description:
        "Explore the layout and styling of the dynamic questionnaires generated by the Data Request Tracker. Questionnaires are built from JSON schemas stored in GitHub, allowing organizations to customize questions, branching logic, and validation rules. The previews below show a sample form and one of its nested collaborator sections that requestors complete when negotiating data access.",
      images: [
        {
          image: questionnaireSample,
          alt: "Screenshot of a questionnaire page within the Data Request Tracker application",
          caption:
            "Sample questionnaire page outlining demographics and research information.",
        },
        {
          image: engSampleParent,
          alt: "Screenshot of the English questionnaire schema overview page",
          caption:
            "Prototype OCA DRT questionnaire page with multiple sections and question types.",
          relatedHeading: "Section 3 : “Add collaborator”",
          related: [
            {
              image: engSampleChild,
              alt: "Screenshot of the collaborator section within the English questionnaire",
              caption:
                "Section 3 collaborator workflow showing the “Add collaborator”.",
            },
          ],
        },
      ],
    },
    schemaPreview: {
      heading: "Preview a sample of Schema-Generated Questionnaires",
      description:
        "Questionnaires in DRT are generated from JSON schemas stored in GitHub. This allows organizations to define custom questions, branching logic, conditional fields, and validation rules. Try a live preview to see how a schema translates into an interactive questionnaire form.",
      tryButton: "Try Questionnaire Preview",
      tryButtonHref: QUESTIONNAIRE_PREVIEW_URL,
    },
    footer: {
      supportedBy: "Supported by",
      logos: [
        {
          alt: "Genome Canada logo",
          href: "https://www.genomecanada.ca/",
          image: genomeCanadaLogo,
        },
        {
          alt: "Canada First Research Excellence Fund logo",
          href: "https://www.cfref-apogee.gc.ca/",
          image: researchFundLogo,
        },
      ],
    },
  },
  fr: {
    hero: {
      title: "Moteur sémantique",
      subtitle: "Ententes",
      heading: "Faciliter le partage de vos travaux",
      description:
        "Décrivez selon vos propres conditions comment vous souhaitez rendre vos travaux disponibles",
    },
    intro: [
      "Les ententes sur les données lisibles par machine réduisent les tâches administratives et accroissent l’accessibilité et la réutilisation des données de recherche à travers les disciplines et les frontières.",
      "En formulant des ententes dans des formats numériques normalisés, les chercheur·e·s garantissent que leurs conditions sont instantanément compréhensibles tant pour les humains que pour les systèmes.",
    ],
    ctas: [
      {
        id: "groups",
        title: "Pour les espaces de données",
        linkLabel: "Exécutez votre propre serveur de négociation de données",
        linkHref: "https://github.com/ClimateSmartAgCollab/DRT_Design_Document",
        body: (
          <>
            Pour les groupes de recherche, les projets à grande échelle ou les
            espaces de données, déployez notre{" "}
            <a
              className="cta-highlight"
              href="https://drt-test.canadacentral.cloudapp.azure.com/"
              target="_blank"
              rel="noreferrer"
            >
              Data Request Tracker (DRT)
            </a>{" "}
            afin de personnaliser les questionnaires et de gérer la
            communication avec les demandeur·euse·s de données. Le DRT vous
            permet de générer des licences de données sur mesure—lisibles par
            les humains et les machines— à partir des réponses recueillies.
          </>
        ),
      },
    ],
    landingSections: [
      {
        id: "questionnaires-personnalises",
        title: "Questionnaires personnalisés",
        body: (
          <>
            <p>
              Générez des questionnaires personnalisés pour poser les questions
              dont vous avez besoin afin de prendre des décisions sur le partage
              de données ou de ressources.
            </p>
            <p>
              Explorez la présentation et le style des questionnaires utilisés
              par le DRT avec notre{" "}
              <a
                href={QUESTIONNAIRE_PREVIEW_URL}
                target="_blank"
                rel="noreferrer"
                className="landing-link-inline"
              >
                aperçu de questionnaire
              </a>
              . Cet aperçu affiche un formulaire exemple, incluant l’une de ses
              sections imbriquées de collaborateurs que les demandeur·euse·s
              remplissent durant les négociations d’accès aux données, montrant
              comment un schéma du moteur sémantique est transformé en
              questionnaire interactif.
            </p>
          </>
        ),
      },
      {
        id: "executer-votre-drt",
        title: "Exécuter votre propre DRT",
        body: (
          <>
            <p>
              Le DRT est un projet{" "}
              <a
                href="https://github.com/ClimateSmartAgCollab/DRT_Design_Document"
                target="_blank"
                rel="noreferrer"
                className="landing-link-inline"
              >
                open source
              </a>{" "}
              hébergé sur GitHub. Pour l’implémenter, vous devrez exécuter votre
              propre instance personnalisée pour héberger les questionnaires, les
              gabarits et gérer la communication continue avec les
              demandeur·euse·s de données.
            </p>
            <p>
              Écrivez-nous à{" "}
              <a
                href={`mailto:${DRT_DEMO_EMAIL}`}
                className="landing-link-inline"
              >
                {DRT_DEMO_EMAIL}
              </a>{" "}
              afin d’essayer une démo du DRT.
            </p>
          </>
        ),
      },
    ],
    quickLinks: [
      {
        id: "preview-questionnaire-fr",
        label: "Aperçu d’un questionnaire",
        href: QUESTIONNAIRE_PREVIEW_URL,
      },
      {
        id: "request-demo-fr",
        label: "Envoyer un courriel pour essayer la démo DRT",
        href: `mailto:${DRT_DEMO_EMAIL}`,
      },
    ],
    schemaPreview: {
      heading: "Aperçu des questionnaires générés par schéma",
      description:
        "Les questionnaires dans le DRT sont générés à partir de schémas JSON stockés dans GitHub. Cela permet aux organisations de définir des questions personnalisées, une logique de branchement, des champs conditionnels et des règles de validation. Essayez un aperçu en direct pour voir comment un schéma se traduit en formulaire de questionnaire interactif.",
      tryButton: "Essayer l'aperçu du questionnaire",
      tryButtonHref: QUESTIONNAIRE_PREVIEW_URL,
    },
    about: [{ heading: "Nos partenaires", copy: "" }],
    partners: [
      { name: "Agri-Food Data Canada", href: "https://agrifooddatacanada.ca/" },
      { name: "Université Laval", href: "https://www.ulaval.ca/" },
      { name: "Simon Fraser University", href: "https://www.sfu.ca/" },
      { name: "CS-DCC", href: "https://cs-dcc.ca/", image: "" },
    ],
    questionnaire: {
      heading: "Aperçu du questionnaire",
      description:
        "Découvrez la présentation et le style des questionnaires dynamiques générés par le Data Request Tracker. Les questionnaires sont construits à partir de schémas JSON stockés dans GitHub, permettant aux organisations de personnaliser les questions, la logique de branchement et les règles de validation. Les aperçus ci-dessous illustrent un formulaire type et sa section imbriquée pour ajouter des collaborateurs lors d'une négociation d'accès aux données.",
      images: [
        {
          image: questionnaireSample,
          alt: "Capture d’écran d’une page de questionnaire dans l’application Data Request Tracker",
          caption:
            "Exemple de questionnaire présentant les sections démographiques et intérêts.",
        },
        {
          image: fraSampleParent,
          alt: "Capture d’écran de la page d’aperçu du questionnaire en français",
          caption:
            "Prototype de questionnaire OCA DRT en français montrant les différentes sections et questions.",
          relatedHeading: "Section 3 : « Ajouter un collaborateur »",
          related: [
            {
              image: fraSampleChild,
              alt: "Capture d’écran de la section collaborateur dans le questionnaire français",
              caption:
                "Section collaborateur permettant d’ajouter un membre via la “Ajouter un collaborateur”.",
            },
          ],
        },
      ],
    },
    footer: {
      supportedBy: "Soutenu par",
      logos: [
        {
          alt: "Genome Canada logo",
          href: "https://www.genomecanada.ca/",
          image: genomeCanadaLogo,
        },
        {
          alt: "Canada First Research Excellence Fund logo",
          href: "https://www.cfref-apogee.gc.ca/",
          image: researchFundLogo,
        },
      ],
    },
  },
};

function App() {
  const [language, setLanguage] = useState<Language>("en");
  const [activeScreenshot, setActiveScreenshot] =
    useState<ScreenshotDetails | null>(null);
  const [expandedLanding, setExpandedLanding] = useState<Record<string, boolean>>(
    {}
  );
  const content = contentByLanguage[language];
  const enlargeLabelSuffix =
    language === "fr" ? "(agrandir l’aperçu)" : "(enlarge preview)";

  const handleLanguageChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setLanguage(event.target.value as Language);
  };

  useEffect(() => {
    if (!activeScreenshot) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveScreenshot(null);
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [activeScreenshot]);

  const openScreenshot = (screenshot: ScreenshotDetails) => {
    setActiveScreenshot(screenshot);
  };

  const closeScreenshot = () => {
    setActiveScreenshot(null);
  };

  const toggleLandingSection = (id: string) => {
    setExpandedLanding((previous) => ({
      ...previous,
      [id]: !previous[id],
    }));
  };

  return (
    <main className="app-shell">
      <header className="hero-section">
        <div className="hero-container">
          <div className="hero-left">
            <div className="hero-heading">
              <img src={drtLogo} alt="DRT logo" className="drt-logo" />
              <div className="hero-heading-text">
                <span className="hero-title">{content.hero.title}</span>
                <span className="hero-subtitle">{content.hero.subtitle}</span>
              </div>
            </div>
            <div className="hero-text">
              <h1>{content.hero.heading}</h1>
              <p>{content.hero.description}</p>
            </div>
          </div>
          <div className="hero-right" aria-label="Language and options">
            <div className="language-toggle">
              <select
                id="language-select"
                className="language-select"
                value={language}
                onChange={handleLanguageChange}
                aria-label={
                  language === "en" ? "Select language" : "Choisir la langue"
                }
              >
                <option value="en">EN</option>
                <option value="fr">FR</option>
              </select>
            </div>
          </div>
        </div>
      </header>

      <section className="landing-layout">
        <div className="landing-column-main">
          {content.landingSections.map((section, index) => {
            const isExpanded = expandedLanding[section.id] ?? index === 0;
            return (
              <article key={section.id} className="landing-accordion">
                <button
                  type="button"
                  className="landing-accordion-toggle"
                  onClick={() => toggleLandingSection(section.id)}
                  aria-expanded={isExpanded}
                >
                  <div className="landing-accordion-header">
                    <h2>{section.title}</h2>
                    <span
                      className={
                        isExpanded
                          ? "landing-accordion-icon landing-accordion-icon-expanded"
                          : "landing-accordion-icon"
                      }
                      aria-hidden="true"
                    >
                      ▾
                    </span>
                  </div>
                </button>
                <div
                  className={
                    isExpanded
                      ? "landing-accordion-body"
                      : "landing-accordion-body landing-accordion-body-collapsed"
                  }
                >
                  {section.body}
                </div>
              </article>
            );
          })}
        </div>
        <aside
          className="quick-links-card"
          aria-label={language === "fr" ? "Liens rapides" : "Quick links"}
        >
          <h2 className="quick-links-title">
            {language === "fr" ? "Liens rapides" : "Quick Links"}
          </h2>
          <div className="quick-links-divider" />
          <div className="quick-links-list">
            {content.quickLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className="quick-link-button"
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  link.href.startsWith("http") ? "noreferrer" : undefined
                }
              >
                {link.label}
              </a>
            ))}
          </div>
        </aside>
      </section>

      <footer className="footer-section">
        <div className="footer-grid">
          <div className="footer-column">
            <span className="footer-label">{content.footer.supportedBy}</span>
            <div className="footer-logos-row">
              <img
                src={researchFundLogo}
                alt="Canada First Research Excellence Fund"
                className="footer-inline-logo"
              />
              <a
                href="https://www.genomecanada.ca/"
                target="_blank"
                rel="noreferrer"
                className="footer-logo-link"
              >
                <img src={genomeCanadaLogo} alt="Genome Canada" />
              </a>
            </div>
          </div>
        </div>
      </footer>

      {activeScreenshot && (
        <div
          className="lightbox-backdrop"
          role="dialog"
          aria-modal="true"
          aria-label={activeScreenshot.alt}
          aria-describedby="lightbox-caption"
          onClick={closeScreenshot}
        >
          <div
            className="lightbox-content"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="lightbox-close"
              onClick={closeScreenshot}
              aria-label="Close image preview"
            >
              Close
            </button>
            <img src={activeScreenshot.image} alt={activeScreenshot.alt} />
            <p className="lightbox-caption" id="lightbox-caption">
              {activeScreenshot.caption}
            </p>
          </div>
        </div>
      )}
    </main>
  );
}

export default App;
