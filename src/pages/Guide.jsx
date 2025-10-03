import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import "../index.css";

// --- SVG Icon Components ---
const SearchIcon = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>;
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
    name: "AeroPress",
    time: "2-3 min",
    difficulty: "Easy",
    ratio: "1:15",
    description: "Versatile and clean, with a smooth, rich body.",
    icon: Filter,
    temperature: "80-90°C",
    grindSize: "Medium",
    equipment: ["AeroPress", "Filters", "Kettle", "Scale", "Timer"],
    ingredients: ["15g coffee", "225ml water"],
    detailedSteps: [
      "Heat water to 80-90°C.",
      "Assemble AeroPress with a rinsed filter.",
      "Add 15g of medium-ground coffee.",
      "Pour 225ml of water, stir, and wait 1-2 minutes.",
      "Plunge slowly for 30 seconds.",
      "Dilute to taste, if desired.",
    ],
    tips: [
      "Experiment with the inverted method for a fuller body.",
      "Lower water temperature can reduce acidity.",
    ],
  },
  {
    name: "Cold Brew",
    time: "12-24 hrs",
    difficulty: "Easy",
    ratio: "1:8",
    description: "Smooth, low-acidity coffee concentrate.",
    icon: Snowflake,
    temperature: "Room Temp",
    grindSize: "Coarse",
    equipment: ["Jar or Toddy", "Strainer/filter", "Scale"],
    ingredients: ["100g coffee", "800ml water"],
    detailedSteps: [
      "Combine 100g of coarse-ground coffee with 800ml of water.",
      "Stir gently to ensure all grounds are wet.",
      "Steep for 12-24 hours at room temperature.",
      "Filter the concentrate and store in the fridge.",
      "Dilute 1:1 with water or milk to serve.",
    ],
    tips: [
      "A longer steep time will create a stronger concentrate.",
      "Use filtered water for a cleaner taste.",
    ],
  },
    {
    name: "Pour Over (Chemex)",
    time: "4-5 min",
    difficulty: "Medium",
    ratio: "1:17",
    description: "Exceptionally clean, balanced, and flavorful coffee.",
    icon: Filter,
    temperature: "94-98°C",
    grindSize: "Medium-coarse",
    equipment: ["Chemex", "Chemex filters", "Gooseneck kettle", "Scale", "Timer"],
    ingredients: ["42g coffee", "700ml water"],
    detailedSteps: [
      "Heat water to 94-98°C.",
      "Place the filter in the Chemex, rinse, and discard the water.",
      "Add 42g of medium-coarse ground coffee.",
      "Bloom the coffee with 100ml of water for 45 seconds.",
      "Pour the remaining water in stages, finishing by 3:30.",
      "Allow the coffee to finish dripping, remove the filter, and serve.",
    ],
    tips: [
      "Ensure the filter is placed with the multi-layered side toward the spout.",
      "A coarser grind will allow for a faster flow rate, preventing bitterness.",
    ],
  },
  {
    name: "Espresso Macchiato",
    time: "1-2 min",
    difficulty: "Medium",
    ratio: "1:0.5",
    description: "Espresso with a dollop of steamed milk foam.",
    icon: Zap,
    temperature: "65°C milk",
    grindSize: "Fine (espresso)",
    equipment: ["Espresso machine", "Milk pitcher"],
    ingredients: ["18g coffee", "36-40ml espresso", "30ml milk"],
    detailedSteps: [
      "Extract a double shot of espresso (36-40ml).",
      "Steam a small amount of milk to create a dense foam.",
      "Add a dollop (about a tablespoon) of foam to the espresso.",
      "Serve immediately.",
    ],
    tips: [
      "Use whole milk for the best foam quality.",
      "The goal is to mark the espresso with foam, not to mix it.",
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

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  return (
    <div
      className="modal-overlay"
      onClick={handleOverlayClick}
      role="dialog"
      aria-modal="true"
    >
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button
          className="modal-close-button"
          onClick={onClose}
          aria-label="Close modal"
        >
          &times;
        </button>
        <header className="modal-header">
          <h1>
            <Icon className="heading-icon" />
            {method.name}
          </h1>
          <p>{method.description}</p>
        </header>
        <div className="modal-grid">
          <div className="modal-col-left">
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
          <div className="modal-col-right">
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
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    document.body.style.overflow = selectedMethod ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedMethod]);

  const filteredMethods = brewingMethods.filter((method) =>
    method.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Layout>
      <div className="guide-page">
        <div className="container">
          <section className="section-enhanced">
            <h2 className="section-title-enhanced">
              <span className="black-text">Brewing</span> <span className="yellow-text">Guide</span>
              </h2>
            <p className="section-subtitle-enhanced">Find the perfect brewing method for your daily coffee.</p>
            <div className="search-bar-container">
                <div className="search-box-guide">
                    <SearchIcon />
                    <input
                        type="text"
                        placeholder="Search for a brewing method..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="search-input-guide"
                    />
                </div>
            </div>
            <div className="cafe-grid" style={{ marginTop: "3rem" }}>
              {filteredMethods.map((method) => (
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
      <BrewingMethodModal
        method={selectedMethod}
        onClose={() => setSelectedMethod(null)}
      />
       <style jsx>{`
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        .black-text {
          color: #1a1a1a;
        }
        .yellow-text {
          color: #B8860B;
        }
        .page-header h1{
          font-size: 3.5rem;
          animation: fadeInUp 0.6s ease-out;
        }
        /* Page Structure */
        .guide-page {
            padding-top: 2rem;
            padding-bottom: 4rem;
        }
        .page-header {
            margin-bottom: 4rem;
        }
        .section-enhanced {
          margin-bottom: 4rem;
        }
        .section-title-enhanced {
          font-size: 3.5rem;
          font-weight: 700;
          color: var(--primary-color);
          text-align: center;
          margin-bottom: 1rem;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1rem;
          animation: fadeInUp 0.6s ease-out;
        }
        .section-subtitle-enhanced {
          text-align: center;
          font-size: 1.1rem;
          color: var(--text-muted);
          margin-bottom: 3rem;
          animation: fadeInUp 0.6s ease-out 0.2s;
          animation-fill-mode: both;
        }
        .search-bar-container {
            margin-bottom: 2rem;
            display: flex;
            justify-content: center;
        }
        .search-box-guide {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            padding: 0.5rem 1rem;
            border-radius: 2rem;
            background-color: #f7f7f7;
            border: 1px solid #eee;
            width: 100%;
            max-width: 500px;
        }
        .search-input-guide {
            border: none;
            background: transparent;
            outline: none;
            width: 100%;
            font-size: 1rem;
        }

        /* Modal Styles */
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.7);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          animation: fadeIn 0.3s ease-out;
        }
        .modal-content {
          background: var(--secondary-color);
          padding: 2.5rem;
          border-radius: var(--border-radius-xl);
          width: 90%;
          max-width: 900px;
          max-height: 90vh;
          overflow-y: auto;
          position: relative;
          animation: slideUp 0.4s ease-out;
        }
        .modal-close-button {
          position: absolute;
          top: 1.5rem;
          right: 1.5rem;
          background: none;
          border: none;
          font-size: 2rem;
          cursor: pointer;
          color: var(--text-muted);
        }
        .modal-header {
          text-align: center;
          margin-bottom: 2rem;
          border-bottom: 1px solid var(--border-color);
          padding-bottom: 1.5rem;
        }
        .modal-header h1 {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1rem;
          font-size: 2.25rem;
        }
        .modal-grid {
          display: grid;
          grid-template-columns: 1fr 1.5fr;
          gap: 2rem;
        }
        .modal-card {
          background: var(--off-white);
          border: 1px solid var(--border-color);
          border-radius: var(--border-radius-lg);
          padding: 1.5rem;
          margin-bottom: 1.5rem; 
        }
        .modal-card h3 {
          font-size: 1.4rem;
          margin-bottom: 1.25rem;
          border-bottom: 1px solid var(--border-color);
          padding-bottom: 0.75rem;
        }
        .modal-card h4 {
          font-size: 1.1rem;
          color: var(--primary-color);
        }
        .modal-col-left, .modal-col-right {
            display: flex;
            flex-direction: column;
        }
        .quick-info-list {
            list-style: none;
            padding: 0;
        }
        .quick-info-list li {
            display: flex;
            justify-content: space-between;
            margin-bottom: 0.75rem;
        }
        ul, ol {
            padding-left: 20px;
        }

        /* Badge Styles */
        .badge {
            padding: 0.25rem 0.75rem;
            border-radius: 50px;
            font-size: 0.8rem;
            font-weight: 600;
            text-transform: uppercase;
        }
        .badge-easy {
            background-color: #d4edda;
            color: #155724;
            border: 1px solid #c3e6cb;
        }
        .badge-medium {
            background-color: #fff3cd;
            color: #856404;
            border: 1px solid #ffeeba;
        }
        .badge-hard {
            background-color: #f8d7da;
            color: #721c24;
            border: 1px solid #f5c6cb;
        }

        @media (max-width: 768px) {
          .modal-grid {
            grid-template-columns: 1fr;
          }
          .modal-content {
             padding: 1.5rem;
          }
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes slideUp {
          from { transform: translateY(30px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }

      `}</style>
    </Layout>
  );
};

export default Guide;
