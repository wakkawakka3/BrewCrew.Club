import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../index.css";

// --- SVG Icon Components ---
const Coffee = ({ className }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2"
    />
  </svg>
);
const Timer = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    width="20"
    height="20"
    aria-hidden="true"
  >
    <circle
      cx="12"
      cy="12"
      r="9"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    />
    <path
      d="M12 6v6l4 2"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
const Scale = ({ className }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l-6-2m0 0l-6 2m6 2l3 9m-3-9l6-2M9 16l-3 1m0 0l-3-1m3 1v2m0-2l3-1m0 0l3 1m-3-1v2"
    />
  </svg>
);
const Filter = ({ className }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2a1 1 0 01-.293.707L12 14.414V19a1 1 0 01-1.447.894L7 18.5V14.414L3.293 6.707A1 1 0 013 6V4z"
    ></path>
  </svg>
);
const Zap = ({ className }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M13 10V3L4 14h7v7l9-11h-7z"
    ></path>
  </svg>
);
const Snowflake = ({ className }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M5 15l7-7 7 7M5 9l7 7 7-7"
    ></path>
  </svg>
);

// --- Data for Brewing Methods ---
const brewingMethods = [
  {
    name: "Pour Over (V60)",
    time: "3-4 min",
    difficulty: "Medium",
    ratio: "1:16",
    description: "Clean, bright flavors with excellent clarity.",
    icon: Filter,
    temperature: "90-96°C",
    grindSize: "Medium-fine",
    equipment: ["V60 dripper", "Filters", "Gooseneck kettle", "Scale", "Timer"],
    ingredients: ["22g coffee", "350ml water"],
    detailedSteps: [
      "Heat water to 90-96°C.",
      "Rinse filter and discard water.",
      "Add 22g of medium-fine ground coffee.",
      "Start timer and pour 44ml water to bloom for 30s.",
      "Pour remaining water in slow, circular motions.",
      "Aim for a total brew time of 3-4 minutes.",
      "Serve immediately.",
    ],
    tips: [
      "Use a gooseneck kettle for pour control.",
      "Adjust grind size to control brew time.",
    ],
  },
  {
    name: "French Press",
    time: "4 min",
    difficulty: "Easy",
    ratio: "1:12",
    description: "Full-bodied, rich coffee with natural oils.",
    icon: Coffee,
    temperature: "93°C",
    grindSize: "Coarse",
    equipment: ["French press", "Scale", "Timer", "Stirrer"],
    ingredients: ["30g coffee", "360ml water"],
    detailedSteps: [
      "Add 30g of coarse ground coffee to press.",
      "Pour 360ml of 93°C water and stir gently.",
      "Place lid on with plunger up and steep for 4 minutes.",
      "Press plunger down slowly and steadily.",
      "Serve immediately to prevent over-extraction.",
    ],
    tips: [
      "Use a coarse grind to avoid sediment.",
      "Don't press too hard to avoid bitterness.",
    ],
  },
  {
    name: "Espresso",
    time: "25-30 sec",
    difficulty: "Hard",
    ratio: "1:2",
    description: "Concentrated, bold coffee with rich crema.",
    icon: Zap,
    temperature: "88-91°C",
    grindSize: "Fine",
    equipment: ["Espresso machine", "Portafilter", "Tamper", "Scale"],
    ingredients: ["18-20g coffee", "36-40ml output"],
    detailedSteps: [
      "Dose 18-20g of finely ground coffee into portafilter.",
      "Level the grounds and tamp with consistent pressure.",
      "Lock portafilter into the group head and start extraction.",
      "Aim for a 36-40ml shot in 25-30 seconds.",
      "Serve immediately.",
    ],
    tips: [
      "Grind fresh for each shot.",
      "Consistent tamping is crucial for even extraction.",
    ],
  },
  {
    name: "Cold Brew",
    time: "16 hrs",
    difficulty: "Easy",
    ratio: "1:8",
    description: "Smooth, low-acidity coffee concentrate.",
    icon: Snowflake,
    temperature: "Room Temp",
    grindSize: "Extra coarse",
    equipment: ["Large jar", "Strainer", "Filters", "Scale"],
    ingredients: ["100g coffee", "800ml water"],
    detailedSteps: [
      "Combine 100g of extra coarse coffee with 800ml of water in a jar (1:8).",
      "Stir, cover, and steep at room temperature for 16 hours.",
      "Strain through a fine mesh, then filter through a paper filter for clarity.",
      "Dilute to taste (start 1:1 with water or milk) and serve over ice.",
    ],
    tips: [
      "If bitter, shorten steep or coarsen the grind; if weak, lengthen steep slightly.",
      "Store in the fridge for up to 2 weeks.",
    ],
  },
  {
    name: "Cappuccino",
    time: "2-3 min",
    difficulty: "Medium",
    ratio: "1:1:1",
    description: "Silky espresso with equal parts steamed milk and foam.",
    icon: Coffee,
    temperature: "65°C milk",
    grindSize: "Fine (espresso)",
    equipment: ["Espresso machine", "Milk pitcher", "Thermometer"],
    ingredients: ["18g coffee", "30-40ml espresso", "120ml milk"],
    detailedSteps: [
      "Extract a 30-40ml espresso shot.",
      "Steam milk to ~65°C creating microfoam.",
      "Pour milk into espresso, finishing with foam on top.",
    ],
    tips: [
      "Swirl milk pitcher to keep microfoam glossy.",
      "Aim for equal thirds: espresso, milk, foam.",
    ],
  },
  {
    name: "Frappuccino (Blended)",
    time: "3-5 min",
    difficulty: "Easy",
    ratio: "n/a",
    description: "Iced, blended coffee drink with a creamy texture.",
    icon: Snowflake,
    temperature: "Cold",
    grindSize: "Fine (espresso) or strong brewed",
    equipment: ["Blender", "Espresso machine or brewer"],
    ingredients: [
      "1 shot espresso or 120ml strong coffee",
      "1 cup ice",
      "120ml milk",
      "Sweetener to taste",
    ],
    detailedSteps: [
      "Brew espresso or strong coffee and cool briefly.",
      "Blend coffee, ice, milk, and sweetener until smooth.",
      "Serve immediately; top with foam or cream if desired.",
    ],
    tips: [
      "Use coffee ice cubes to avoid dilution.",
      "Blend in short pulses for a fine texture.",
    ],
  },
];

// --- Helper Function ---
const getBadgeClass = (difficulty) => {
  switch (difficulty) {
    case "Easy":
      return "badge badge-easy";
    case "Medium":
      return "badge badge-medium";
    case "Hard":
      return "badge badge-hard";
    default:
      return "badge";
  }
};

// --- Sub-components ---

const GuideHeader = () => (
  <header className="page-header">
    <h1>Coffee Guide</h1>
    <p>
      Discover coffee's history, explore its origins, and master the art of
      brewing.
    </p>
  </header>
);

const HistorySection = () => (
  <section className="section">
    <h2>
      <Coffee className="heading-icon" />
      The History of Coffee
    </h2>
    <div
      className="content-wrapper"
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "2rem",
        marginTop: "3rem",
      }}
    >
      <div className="brand-story">
        <h3>Ancient Origins</h3>
        <p>
          Legend traces coffee's discovery to an Ethiopian goat herder around
          850 CE. Its cultivation then spread through Yemen and the Ottoman
          Empire.
        </p>
      </div>
      <div className="brand-story">
        <h3>Modern Coffee Culture</h3>
        <p>
          The "third wave" movement treats coffee as an artisanal craft,
          emphasizing origin, processing, and brewing methods for the best
          flavor.
        </p>
      </div>
    </div>
  </section>
);

const BrewingMethodCard = ({ method, onSelect }) => {
  const Icon = method.icon;

  const handleClick = () => {
    onSelect(method);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onSelect(method);
    }
  };

  return (
    <div
      className="cafe-card"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="button"
      aria-label={`Learn about ${method.name} brewing method`}
      style={{ cursor: "pointer" }}
    >
      <div className="cafe-card-img">
        <Icon
          style={{
            width: "48px",
            height: "48px",
            color: "var(--accent-color)",
          }}
        />
      </div>
      <div className="cafe-card-content">
        <h3>{method.name}</h3>
        <p style={{ minHeight: "3.5rem" }}>{method.description}</p>
        <span className={getBadgeClass(method.difficulty)}>
          {method.difficulty}
        </span>
        <div
          style={{
            marginTop: "1rem",
            paddingTop: "1rem",
            borderTop: "1px solid var(--border-color)",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <span>
            <Timer
              style={{
                verticalAlign: "middle",
                marginRight: "0.25rem",
                width: "1em",
                height: "1em",
              }}
            />
            {method.time}
          </span>
          <span>
            <Scale
              style={{
                verticalAlign: "middle",
                marginRight: "0.25rem",
                width: "1em",
                height: "1em",
              }}
            />
            {method.ratio}
          </span>
        </div>
      </div>
    </div>
  );
};

const BrewingMethodModal = ({ method, onClose }) => {
  if (!method) return null;
  const Icon = method.icon;

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Escape") {
      onClose();
    }
  };

  return (
    <div
      className="modal-overlay"
      onClick={handleOverlayClick}
      onKeyDown={handleKeyDown}
      tabIndex={-1}
    >
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button
          className="modal-close-button"
          onClick={onClose}
          aria-label="Close modal"
        >
          &times;
        </button>
        <div className="page-header" style={{ marginBottom: "1.5rem" }}>
          <h1>
            <Icon className="heading-icon" />
            {method.name}
          </h1>
          <p>{method.description}</p>
        </div>
        <div className="modal-grid">
          <div
            style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}
          >
            <div className="modal-card">
              <h3>Quick Info</h3>
              <ul className="quick-info-list">
                <li>
                  <strong>Difficulty:</strong>{" "}
                  <span className={getBadgeClass(method.difficulty)}>
                    {method.difficulty}
                  </span>
                </li>
                <li>
                  <strong>Brew Time:</strong> <span>{method.time}</span>
                </li>
                <li>
                  <strong>Ratio:</strong> <span>{method.ratio}</span>
                </li>
                <li>
                  <strong>Temperature:</strong>{" "}
                  <span>{method.temperature}</span>
                </li>
                <li>
                  <strong>Grind Size:</strong> <span>{method.grindSize}</span>
                </li>
              </ul>
            </div>
            <div className="modal-card">
              <h3>What You Need</h3>
              <h4>Equipment:</h4>
              <ul>
                {method.equipment.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              <h4 style={{ marginTop: "1rem" }}>Ingredients:</h4>
              <ul>
                {method.ingredients.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}
          >
            <div className="modal-card">
              <h3>Instructions</h3>
              <ol>
                {method.detailedSteps.map((step, i) => (
                  <li key={i} style={{ marginBottom: "0.5rem" }}>
                    <strong>{i + 1}.</strong> {step}
                  </li>
                ))}
              </ol>
            </div>
            <div className="modal-card">
              <h3>Pro Tips</h3>
              <ul>
                {method.tips.map((tip, i) => (
                  <li key={i}>{tip}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- Main Guide Component ---

const Guide = () => {
  const [selectedMethod, setSelectedMethod] = useState(null);

  useEffect(() => {
    document.body.style.overflow = selectedMethod ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedMethod]);

  return (
    <>
      <Navbar />
      <div className="default-main">
        <div className="container">
          <GuideHeader />
          <HistorySection />
          <section className="section">
            <h2>Brewing Methods</h2>
            <p>Click a method to see the full guide.</p>
            <div className="cafe-grid" style={{ marginTop: "3rem" }}>
              {brewingMethods.map((method) => (
                <BrewingMethodCard
                  key={method.name}
                  method={method}
                  onSelect={setSelectedMethod}
                />
              ))}
            </div>
          </section>
        </div>
      </div>
      <Footer />
      <BrewingMethodModal
        method={selectedMethod}
        onClose={() => setSelectedMethod(null)}
      />
    </>
  );
};

export default Guide;
