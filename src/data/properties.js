const imagePool = [
  "photo-1600607687920-4e2a09cf159d",
  "photo-1600566753190-17f0baa2a6c3",
  "photo-1600585154340-be6161a56a0c",
  "photo-1545324418-cc1a3fa10c00",
  "photo-1600607688969-a5bfcd646154",
  "photo-1600566753086-00f18fb6b3ea",
  "photo-1600585154526-990dced4db0d",
  "photo-1600607687939-ce8a6c25118c",
  "photo-1600566752355-35792bedcfea",
  "photo-1505693416388-ac5ce068fe85",
  "photo-1600210492486-724fe5c67fb0",
  "photo-1617104678098-de229db51175",
  "photo-1613490493576-7fde63acd811",
  "photo-1600047509807-ba8f99d2cdde",
  "photo-1600585152915-d208bec867a1",
  "photo-1512917774080-9991f1c4c750",
  "photo-1600210491892-03d54c0aaf87",
];

const getImage = (index) =>
  `https://images.unsplash.com/${imagePool[index % imagePool.length]}?auto=format&fit=crop&w=1200&q=85`;

const locations = [
  "Gachibowli, Hyderabad",
  "Hitech City, Hyderabad",
  "Kondapur, Hyderabad",
  "Madhapur, Hyderabad",
  "Kompally, Hyderabad",
  "Nanakramguda, Hyderabad",
  "Kokapet, Hyderabad",
  "Financial District, Hyderabad",
  "Tellapur, Hyderabad",
  "Narsingi, Hyderabad",
  "Manikonda, Hyderabad",
  "Miyapur, Hyderabad",
  "Banjara Hills, Hyderabad",
  "Jubilee Hills, Hyderabad",
  "Begumpet, Hyderabad",
  "Kukatpally, Hyderabad",
  "Secunderabad, Hyderabad",
  "Uppal, Hyderabad",
  "LB Nagar, Hyderabad",
  "Rajendra Nagar, Hyderabad",
];

const propertyNames = [
  "Azure Haven",
  "Skyline Crest",
  "Serene Garden",
  "Urban Nest",
  "Palm Grove",
  "Lakeview Heights",
  "Royal Orchid",
  "Emerald Residency",
  "Golden Meadows",
  "Pearl Paradise",
  "Crystal Springs",
  "Oakwood Estate",
  "Silver Sands",
  "Sunrise Enclave",
  "Grand Horizon",
  "Willow Creek",
  "Ivory Towers",
  "Green Valley",
  "Prestige Gardens",
  "Bluebell Residency",
  "Maple Woods",
  "Moonlight Villas",
  "Sunset Boulevard",
  "Dreamscape Homes",
  "Harmony Heights",
  "Elite Square",
  "Cedar Residency",
  "Rosewood Palace",
  "Magnolia Homes",
  "Orchid Bay",
];

const types = ["Villa", "Apartment", "House", "Penthouse"];

const agents = [
  {
    name: "Ananya Rao",
    role: "Senior Property Consultant",
    phone: "+91 98765 43210",
    email: "ananya@nivaraestates.com",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Rahul Mehta",
    role: "Property Advisor",
    phone: "+91 99887 66554",
    email: "rahul@nivaraestates.com",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Priya Sharma",
    role: "Luxury Property Specialist",
    phone: "+91 91234 56789",
    email: "priya@nivaraestates.com",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Vikram Singh",
    role: "Rental Specialist",
    phone: "+91 90000 11223",
    email: "vikram@nivaraestates.com",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Sneha Reddy",
    role: "Residential Consultant",
    phone: "+91 90123 45678",
    email: "sneha@nivaraestates.com",
    image:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=400&q=80",
  },
];

const featureSets = [
  [
    "Private Garden",
    "Swimming Pool",
    "Modular Kitchen",
    "Home Office",
    "Security System",
    "Power Backup",
  ],
  [
    "Gym",
    "Club House",
    "Swimming Pool",
    "24/7 Security",
    "Covered Parking",
    "Children's Play Area",
  ],
  [
    "Large Garden",
    "Terrace",
    "Modular Kitchen",
    "Study Room",
    "Solar Panels",
    "CCTV",
  ],
  [
    "Fully Furnished",
    "High Speed Internet",
    "Gym",
    "Security",
    "Power Backup",
    "Lift",
  ],
  [
    "Private Pool",
    "Landscaped Garden",
    "Home Theatre",
    "Smart Home",
    "Car Parking",
    "Security",
  ],
];

const propertyDescriptions = [
  "A beautifully designed residence featuring modern architecture, elegant interiors and comfortable living spaces.",
  "Enjoy premium amenities, peaceful surroundings and convenient access to major business and entertainment districts.",
  "A spacious family home combining contemporary design, practical features and a welcoming atmosphere.",
  "An attractive property with thoughtfully planned interiors, natural light and excellent everyday convenience.",
  "Experience comfortable modern living with stylish finishes, generous spaces and desirable community amenities.",
  "A premium residential opportunity ideal for families and professionals looking for convenience and comfort.",
];

const properties = Array.from({ length: 500 }, (_, index) => {
  const id = index + 1;
  const type = types[index % types.length];
  const name = propertyNames[index % propertyNames.length];
  const location = locations[index % locations.length];
  const isRent = index % 5 === 3;
  const imageIndex = index % imagePool.length;
  const bedrooms = 1 + (index % 5);
  const bathrooms = 1 + (index % 4);

  const basePrice = {
    Villa: 12500000,
    Apartment: 4800000,
    House: 8500000,
    Penthouse: 18000000,
  }[type];

  const price = isRent
    ? 15000 + (index % 20) * 2500
    : basePrice + (index % 12) * 450000;

  const gallery = [
    getImage(imageIndex),
    getImage(imageIndex + 3),
    getImage(imageIndex + 7),
  ];

  return {
    id,
    title: `${name}${id > propertyNames.length ? ` ${Math.ceil(id / propertyNames.length)}` : ""}`,
    location,
    price,
    type,
    status: isRent ? "For Rent" : "For Sale",
    bedrooms,
    bathrooms,
    area: 750 + (index % 25) * 100,
    year: 2020 + (index % 7),
    parking: 1 + (index % 3),
    image: gallery[0],
    gallery,
    description: propertyDescriptions[index % propertyDescriptions.length],
    features: [...featureSets[index % featureSets.length]],
    agent: { ...agents[index % agents.length] },
  };
});

export default properties;