export interface EVProperty {
  label: string;
  value: string;
  icon: 'battery' | 'gauge' | 'zap' | 'shield' | 'dollar';
}

export interface EVCar {
  id: string;
  name: string;
  brand: string;
  type: 'Sedan' | 'SUV' | 'Hypercar' | 'Truck';
  releaseYear: number;
  priceStarting: string;
  imageUrl: string; // Keeps backwards compatibility with your home grid
  images: string[]; // <-- Added for the multi-angle gallery
  photographerCredit?: string;
  accentColor: string; // Tailwind gradient wrapper class
  description: string;
  keySpecs: EVProperty[];
}

export const EV_CARS_DATA: EVCar[] = [
  {
    id: "porsche-taycan-2026",
    name: "Taycan Turbo S",
    brand: "Porsche",
    type: "Sedan",
    releaseYear: 2026,
    priceStarting: "$211,700",
    imageUrl: "/images/Taycan-Turbo-S.jpg",
    images: [
      "/images/Taycan-Turbo-S.jpg",       // 1. Front Profile (Main)
      "/images/taycan-2.jpg",          // 2. Side Angle
      "/images/taycan-3.jpg",          // 3. Rear Angle
      "/images/taycan-interior.jpg"       // 4. Cabin/Dashboard
    ],
    accentColor: "from-blue-600 to-indigo-500",
    description: "The benchmark for electric driving dynamics. Combines an 800-volt architecture with Porsche's legendary track handling.",
    keySpecs: [
      { label: "Range", value: "292 miles", icon: "battery" },
      { label: "0-60 MPH", value: "2.3 seconds", icon: "gauge" },
      { label: "Max Charge", value: "320 kW", icon: "zap" },
      { label: "Safety", value: "5-Star Rated", icon: "shield" }
    ]
  },
  {
    id: "lucid-air-2026",
    name: "Air Grand Touring",
    brand: "Lucid",
    type: "Sedan",
    releaseYear: 2026,
    priceStarting: "$111,400",
    imageUrl: "/images/Air-Grand-Touring.webp",
    images: [
      "/images/Air-Grand-Touring.webp",
      "/images/lucid-side.jpg",
      "/images/lucid-rear.jpg",
      "/images/lucid-interior.jpg"
    ],
    accentColor: "from-cyan-500 to-blue-400",
    description: "The definitive king of range and luxury efficiency. Reimagines cabin space utilizing an ultra-compact powertrain design.",
    keySpecs: [
      { label: "Range", value: "512 miles", icon: "battery" },
      { label: "0-60 MPH", value: "3.0 seconds", icon: "gauge" },
      { label: "Max Charge", value: "300 kW", icon: "zap" },
      { label: "Efficiency", value: "4.6 mi/kWh", icon: "shield" }
    ]
  },
  {
    id: "kia-ev9-2026",
    name: "EV9 GT-Line",
    brand: "Kia",
    type: "SUV",
    releaseYear: 2026,
    priceStarting: "$73,900",
    imageUrl: "/images/EV9 GT-Line.jpg",
    images: [
      "/images/EV9 GT-Line.jpg",
      "/images/ev9-side.jpg",
      "/images/ev9-rear.jpg",
      "/images/ev9-interior.jpg"
    ],
    accentColor: "from-emerald-500 to-teal-400",
    description: "A bold, geometric three-row SUV offering massive utility, fast charging capabilities, and high-end tech for families.",
    keySpecs: [
      { label: "Range", value: "270 miles", icon: "battery" },
      { label: "0-60 MPH", value: "4.5 seconds", icon: "gauge" },
      { label: "Max Charge", value: "210 kW", icon: "zap" },
      { label: "Towing", value: "5,000 lbs", icon: "shield" }
    ]
  },
  {
    id: "hyundai-ioniq6-2026",
    name: "Ioniq 6 N",
    brand: "Hyundai",
    type: "Sedan",
    releaseYear: 2026,
    priceStarting: "$66,000",
    imageUrl: "/images/Ioniq 6 N.jpg",
    images: [
      "/images/Ioniq 6 N.jpg",
      "/images/ioniq6-side.jpg",
      "/images/ioniq6-rear.jpg",
      "/images/ioniq6-interior.jpg"
    ],
    accentColor: "from-red-500 to-orange-400",
    description: "An incredibly aerodynamic, high-performance track-ready variant built on Hyundai's revolutionary E-GMP platform.",
    keySpecs: [
      { label: "Range", value: "280 miles", icon: "battery" },
      { label: "0-60 MPH", value: "3.2 seconds", icon: "gauge" },
      { label: "Max Charge", value: "238 kW", icon: "zap" },
      { label: "Drift Mode", value: "Electronic", icon: "shield" }
    ]
  },
  {
    id: "tesla-model3-2026",
    name: "Model 3 Performance",
    brand: "Tesla",
    type: "Sedan",
    releaseYear: 2026,
    priceStarting: "$54,990",
    imageUrl: "/images/Model 3 Performance.avif",
    images: [
      "/images/Model 3 Performance.avif",
      "/images/model3-side.jpg",
      "/images/model3-rear.jpg",
      "/images/model3-interior.jpg"
    ],
    accentColor: "from-purple-500 to-pink-500",
    description: "Featuring the refreshed 'Highland' body style, adaptive damping setup, and unmatched access to the global Supercharger framework.",
    keySpecs: [
      { label: "Range", value: "303 miles", icon: "battery" },
      { label: "0-60 MPH", value: "2.9 seconds", icon: "gauge" },
      { label: "Max Charge", value: "250 kW", icon: "zap" },
      { label: "Autopilot", value: "Hardware 4", icon: "shield" }
    ]
  }
];