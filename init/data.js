const mongoose = require("mongoose");

const sampleListings = [
  {
    title: "Dubai Palm Jumeirah Villa",
    description:
      "This extravagant villa on Palm Jumeirah offers beachfront living with unmatched luxury. Featuring contemporary Arabic architecture, a private infinity pool, and direct access to pristine sands, it’s a haven for luxury seekers. Inside, enjoy spacious suites, lavish interiors, and smart home automation that makes every stay effortless. The villa’s terraces provide panoramic sea views and dramatic sunsets, while concierge services can arrange private chefs, yacht trips, and bespoke experiences. Perfect for groups seeking privacy, glamour, and world-class service in Dubai’s premier community.",
    image: {
      url: "https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=80",
      filename: "dubai-villa.jpg"
    },
    price: 12500,
    location: "Palm Jumeirah, Dubai",
    country: "UAE",
    geometry: { type: "Point", coordinates: [55.1389, 25.1122] },
    owner: new mongoose.Types.ObjectId("6889f1bc02a913c065ed97d1"),
  },

  {
    title: "Malibu Oceanfront Contemporary Villa",
    description:
      "A sleek oceanfront villa in Malibu featuring floor-to-ceiling glass, an infinity pool, and terraces that frame endless Pacific views. The interior balances luxury with relaxed coastal living: high-end kitchen, generous living spaces, and serene bedrooms that open to the surf-scented breeze. Walk to nearby coves or enjoy private days by the pool. This property is designed for those who want a sun-drenched, stylish retreat with privacy and proximity to LA’s best coastal experiences.",
    image: {
      url: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=80",
      filename: "malibu-villa.jpg"
    },
    price: 14500,
    location: "Malibu, California",
    country: "USA",
    geometry: { type: "Point", coordinates: [-118.7798, 34.0259] },
    owner: new mongoose.Types.ObjectId("6889f1bc02a913c065ed97d1"),
  },

  {
    title: "Beverly Hills Grand Mansion",
    description:
      "Set behind manicured hedges and a sweeping motor court, this Beverly Hills mansion epitomizes Hollywood glamour. With multiple reception rooms, a private screening theater, a fitness wing, and an expansive pool terrace, the estate is built for entertaining and quiet luxury alike. Each suite is distinct, with spa-style baths and plush furnishings. Staff-ready spaces and smart-home features make hosting effortless, while Rodeo Drive and LA’s finest dining are a short drive away. Pure indulgence for high-end stays.",
    image: {
      url: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=80",
      filename: "beverly-mansion.jpg"
    },
    price: 19800,
    location: "Beverly Hills, California",
    country: "USA",
    geometry: { type: "Point", coordinates: [-118.4004, 34.0736] },
    owner: new mongoose.Types.ObjectId("6889f1bc02a913c065ed97d1"),
  },

  {
    title: "Miami Beachfront Modern Villa",
    description:
      "Sunlight floods this contemporary Miami villa with private beach access and a waterside terrace. Minimalist interiors meet tropical landscaping; bedrooms open onto the pool deck and living areas flow outdoors for seamless entertaining. The kitchen is chef-ready, and the rooftop lounge is perfect for sunset cocktails. Located in an upscale enclave, the villa is ideal for groups that want both privacy and easy access to Miami’s dining, nightlife, and cultural scenes.",
    image: {
      url: "https://images.unsplash.com/photo-1559691116-31ebed96a8f7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=80",
      filename: "miami-villa.jpg"
    },
    price: 11000,
    location: "Miami Beach, Florida",
    country: "USA",
    geometry: { type: "Point", coordinates: [-80.1300, 25.7907] },
    owner: new mongoose.Types.ObjectId("6889f1bc02a913c065ed97d1"),
  },

  {
    title: "Penthouse Overlooking Central Park",
    description:
      "This exclusive Manhattan penthouse offers sweeping views of Central Park and the Midtown skyline. With refined interiors, a gourmet kitchen, and expansive terraces, the residence blends modern luxury with classic New York sophistication. Bedrooms are serene retreats and bathrooms rival boutique spas. Proximity to world-class dining, museums, and theater makes it an exceptional base for both leisure and business, providing privacy in the heart of the city.",
    image: {
      url: "https://images.unsplash.com/photo-1523217582562-09d0def993a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=80",
      filename: "nyc-penthouse.jpg"
    },
    price: 16000,
    location: "Central Park, New York",
    country: "USA",
    geometry: { type: "Point", coordinates: [-73.9712, 40.7831] },
    owner: new mongoose.Types.ObjectId("6889f1bc02a913c065ed97d1"),
  },

  {
    title: "Santorini Cliffside White Villa",
    description:
      "Perched on Santorini’s volcanic cliffs, this whitewashed villa embraces Aegean light and timeless Cycladic architecture. A private terrace and plunge pool frame dramatic sea views and legendary sunsets. Interiors are serene and minimal, with crisp linens and natural textures supporting relaxed island living. Walk the cliff paths, visit blue-domed churches, and return to the terrace for alfresco dining. Ideal for couples and small groups seeking a romantic island escape with style and privacy.",
    image: {
      url: "https://images.unsplash.com/photo-1505691723518-36a5ac3be353?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=80",
      filename: "santorini-villa.jpg"
    },
    price: 9800,
    location: "Oia, Santorini",
    country: "Greece",
    geometry: { type: "Point", coordinates: [25.3754, 36.4613] },
    owner: new mongoose.Types.ObjectId("6889f1bc02a913c065ed97d1"),
  },

  {
    title: "Lake Como Classic Villa",
    description:
      "A historic lakefront villa on Lake Como with terraced gardens and private boat access. The home features antique finishes, frescoed accents, and expansive loggias that overlook the water. Days here are for long lunches by the lake, boat rides to charming towns, and sunset aperitivos on the terrace. Perfect for families or groups who appreciate elegance, history, and effortless lakeside living.",
    image: {
      url: "https://images.unsplash.com/photo-1600585154356-596af9009e82?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=80",
      filename: "lakecomo-villa.jpg"
    },
    price: 9200,
    location: "Lake Como, Lombardy",
    country: "Italy",
    geometry: { type: "Point", coordinates: [9.2572, 45.98] },
    owner: new mongoose.Types.ObjectId("6889f1bc02a913c065ed97d1"),
  },

  {
    title: "Chianti Stone Farmhouse & Vineyard",
    description:
      "Set amid rolling Tuscan vineyards, this stone farmhouse combines rustic authenticity with modern comforts. A large kitchen and long dining table make the home ideal for communal meals, while terraced gardens and a pool offer peaceful outdoor moments. Local wineries, olive groves, and hilltop villages are minutes away, making the property perfect for food, wine, and countryside-loving groups who want both space and Italian charm.",
    image: {
      url: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=80",
      filename: "tuscany-farmhouse.jpg"
    },
    price: 6100,
    location: "Chianti, Tuscany",
    country: "Italy",
    geometry: { type: "Point", coordinates: [11.3050, 43.4700] },
    owner: new mongoose.Types.ObjectId("6889f1bc02a913c065ed97d1"),
  },

  {
    title: "Ubud Private Pool Villa",
    description:
      "Hidden in Ubud’s rice-terrace fringe, this private villa offers a teak-deck pool, open-air living, and calming Balinese styling. Yoga platforms, local craftsmanship, and nearby temples make for restorative days. The villa is perfect for guests seeking peace and culture—mornings of meditation and afternoons wandering craft markets—followed by quiet evenings around the pool with traditional cuisine.",
    image: {
      url: "https://images.unsplash.com/photo-1505692794403-34d4982d3e6d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=80",
      filename: "ubud-villa.jpg"
    },
    price: 3500,
    location: "Ubud, Bali",
    country: "Indonesia",
    geometry: { type: "Point", coordinates: [115.2625, -8.5069] },
    owner: new mongoose.Types.ObjectId("6889f1bc02a913c065ed97d1"),
  },

  {
    title: "Goa Beachfront Modern Villa",
    description:
      "A sunlit Goan villa steps from the beach with palms, a private pool, and open-plan living designed for tropical comfort. The property blends warm local materials with contemporary design and has easy access to local seafood shacks, markets, and quiet beaches. Relaxed days here are for swimming, reading, and long meals in the shade—perfect for friends and families who want a stylish, effortless coastal home.",
    image: {
      url: "https://images.unsplash.com/photo-1613977257364-953d98e5a3ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=80",
      filename: "goa-villa.jpg"
    },
    price: 4200,
    location: "Candolim, Goa",
    country: "India",
    geometry: { type: "Point", coordinates: [73.7553, 15.5186] },
    owner: new mongoose.Types.ObjectId("6889f1bc02a913c065ed97d1"),
  },

  {
    title: "Jaipur Heritage Haveli (Restored)",
    description:
      "This restored haveli in Jaipur presents painted frescoes, carved jharokha windows, and cool courtyards. The property pairs traditional Rajasthani craftsmanship with thoughtful modern updates: pristine bathrooms, comfortable beds, and rooftop views of the old city. Spend days exploring Amber Fort and local bazaars, returning to candlelit dinners and a sense of royal Rajasthan. Authentic, atmospheric, and exquisitely maintained for memorable stays.",
    image: {
      url: "https://images.unsplash.com/photo-1569949381669-ecf31ae7f5a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=80",
      filename: "jaipur-haveli.jpg"
    },
    price: 3200,
    location: "Johari Bazaar, Jaipur",
    country: "India",
    geometry: { type: "Point", coordinates: [75.8267, 26.9196] },
    owner: new mongoose.Types.ObjectId("6889f1bc02a913c065ed97d1"),
  },

  {
    title: "Mumbai Art-Deco Sea-View Apartment",
    description:
      "A stylish Mumbai apartment near Marine Drive offering sweeping sea views and classic Art-Deco details. Tall windows, terrazzo flooring, and a cozy balcony make the space ideal for city watching or quiet evenings. Compact but thoughtful layouts, modern appliances, and easy access to local cafés and promenades create a practical and charming urban base for visitors wanting a taste of old and new Bombay.",
    image: {
      url: "https://images.unsplash.com/photo-1560448070-4328a6a3819f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=80",
      filename: "mumbai-apartment.jpg"
    },
    price: 2800,
    location: "Marine Drive, Mumbai",
    country: "India",
    geometry: { type: "Point", coordinates: [72.8258, 18.9353] },
    owner: new mongoose.Types.ObjectId("6889f1bc02a913c065ed97d1"),
  },

  {
    title: "Kensington Townhouse, London",
    description:
      "An elegant townhouse in Kensington featuring high ceilings, period moldings, and a private garden courtyard. The house mixes refined antiques with contemporary comforts, creating warm and polished interiors. Enjoy museum days, Hyde Park walks, and quiet dinners in a neighborhood celebrated for culture, shops, and excellent dining. A superb option for families or professionals seeking classic London living with modern conveniences.",
    image: {
      url: "https://images.unsplash.com/photo-1628744876013-659375008651?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=80",
      filename: "london-townhouse.jpg"
    },
    price: 14200,
    location: "Kensington, London",
    country: "UK",
    geometry: { type: "Point", coordinates: [-0.1937, 51.4975] },
    owner: new mongoose.Types.ObjectId("6889f1bc02a913c065ed97d1"),
  },

  {
    title: "Sydney Harborfront Villa",
    description:
      "A contemporary home minutes from the Opera House with water views, terraces, and generous living spaces. The villa is light-filled, with indoor-outdoor flow, an alfresco dining terrace, and a private garden for quiet mornings. Nearby ferries and restaurants make exploring the harbor effortless. It’s a high-end base for families or groups looking for both style and convenience on Sydney’s iconic waterfront.",
    image: {
      url: "https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=80",
      filename: "sydney-villa.jpg"
    },
    price: 7600,
    location: "The Rocks, Sydney",
    country: "Australia",
    geometry: { type: "Point", coordinates: [151.2100, -33.8611] },
    owner: new mongoose.Types.ObjectId("6889f1bc02a913c065ed97d1"),
  },

  {
    title: "Cape Town Sea-View House",
    description:
      "This contemporary Cape Town house offers sweeping views of the Atlantic, generous terraces, and crisp interiors that emphasize indoor-outdoor living. A private pool and sun terraces create natural gathering spaces while high-end finishes and comfortable suites ensure restful nights. The property is a short drive from beaches and vineyards, making it a versatile base for adventure and relaxation in the Western Cape.",
    image: {
      url: "https://images.unsplash.com/photo-1501045661006-fcebe0257c3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=80",
      filename: "capetown-house.jpg"
    },
    price: 5400,
    location: "Tamboerskloof, Cape Town",
    country: "South Africa",
    geometry: { type: "Point", coordinates: [18.4081, -33.9307] },
    owner: new mongoose.Types.ObjectId("6889f1bc02a913c065ed97d1"),
  },
  {
    title: "Beverly Hills Modern Mansion",
    description:
      "A sleek and expansive modern mansion located in Beverly Hills, offering contemporary design with floor-to-ceiling glass walls, infinity pool, and spacious interiors. The property provides unparalleled luxury and privacy with panoramic city views, state-of-the-art amenities, and multiple entertainment areas for gatherings.",
    image: {
      url: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      filename: "beverly-hills-mansion.jpg"
    },
    price: 45000,
    location: "Beverly Hills, Los Angeles",
    country: "USA",
    geometry: { type: "Point", coordinates: [-118.4004, 34.0736] },
    owner: new mongoose.Types.ObjectId("6889f1bc02a913c065ed97d1"),
  },
  {
    title: "Santorini Cliffside Villa",
    description:
      "Perched on the iconic cliffs of Santorini, this villa offers breathtaking caldera views and traditional Cycladic architecture. With private terraces, infinity pool, and luxurious interiors, it is the perfect romantic escape that blends Greek charm with modern luxury.",
    image: {
      url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      filename: "santorini-villa.jpg"
    },
    price: 9800,
    location: "Oia, Santorini",
    country: "Greece",
    geometry: { type: "Point", coordinates: [25.375, 36.461] },
    owner: new mongoose.Types.ObjectId("6889f1bc02a913c065ed97d1"),
  },
  {
    title: "Mumbai Seafront Apartment",
    description:
      "A stunning seafront apartment in South Mumbai with mesmerizing Arabian Sea views. This luxury flat combines elegant interiors, spacious living areas, and modern amenities. Located in one of Mumbai’s most prestigious neighborhoods, it offers unmatched connectivity and serene coastal living.",
    image: {
      url: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      filename: "mumbai-apartment.jpg"
    },
    price: 7200,
    location: "Marine Drive, Mumbai",
    country: "India",
    geometry: { type: "Point", coordinates: [72.8236, 18.9432] },
    owner: new mongoose.Types.ObjectId("6889f1bc02a913c065ed97d1"),
  },
  {
    title: "Paris Luxury Penthouse",
    description:
      "An elegant penthouse in the heart of Paris, offering views of the Eiffel Tower. The residence features chic interiors, expansive living spaces, rooftop terrace, and exquisite furnishings, making it an ideal blend of sophistication and comfort.",
    image: {
      url: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      filename: "paris-penthouse.jpg"
    },
    price: 18500,
    location: "Champs-Élysées, Paris",
    country: "France",
    geometry: { type: "Point", coordinates: [2.3076, 48.8698] },
    owner: new mongoose.Types.ObjectId("6889f1bc02a913c065ed97d1"),
  },
  {
    title: "Dubai Marina Apartment",
    description:
      "A stylish apartment in Dubai Marina with stunning views of the waterfront. Featuring luxurious interiors, floor-to-ceiling windows, and access to world-class amenities, this property combines modern city living with comfort and elegance.",
    image: {
      url: "https://images.unsplash.com/photo-1594909122845-11baa439b7aa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      filename: "dubai-marina-apartment.jpg"
    },
    price: 11200,
    location: "Dubai Marina, Dubai",
    country: "UAE",
    geometry: { type: "Point", coordinates: [55.1382, 25.0805] },
    owner: new mongoose.Types.ObjectId("6889f1bc02a913c065ed97d1"),
  },
  {
    title: "Goa Beachfront Villa",
    description:
      "A tranquil beachfront villa in Goa offering direct beach access, tropical gardens, and spacious interiors. Perfect for family getaways or group retreats, this villa blends traditional Goan architecture with modern luxury.",
    image: {
      url: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      filename: "goa-villa.jpg"
    },
    price: 5600,
    location: "Anjuna Beach, Goa",
    country: "India",
    geometry: { type: "Point", coordinates: [73.7355, 15.5889] },
    owner: new mongoose.Types.ObjectId("6889f1bc02a913c065ed97d1"),
  },
  {
    title: "Swiss Alps Chalet",
    description:
      "Nestled in the Swiss Alps, this luxurious chalet offers breathtaking mountain views, cozy interiors with wooden finishes, and an outdoor jacuzzi. Perfect for ski lovers or those seeking peace and tranquility.",
    image: {
      url: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      filename: "swiss-chalet.jpg"
    },
    price: 14400,
    location: "Zermatt, Switzerland",
    country: "Switzerland",
    geometry: { type: "Point", coordinates: [7.748, 46.0207] },
    owner: new mongoose.Types.ObjectId("6889f1bc02a913c065ed97d1"),
  },
  {
    title: "London Thames Riverside Flat",
    description:
      "A premium riverside apartment in central London with panoramic views of the Thames. Offering elegant interiors, top-class amenities, and close proximity to cultural landmarks, this flat is ideal for urban luxury living.",
    image: {
      url: "https://images.unsplash.com/photo-1590490360182-66389b1b3214?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      filename: "london-flat.jpg"
    },
    price: 16000,
    location: "Southbank, London",
    country: "UK",
    geometry: { type: "Point", coordinates: [-0.117, 51.5072] },
    owner: new mongoose.Types.ObjectId("6889f1bc02a913c065ed97d1"),
  },
  {
    title: "Sydney Harbour Penthouse",
    description:
      "A stunning penthouse overlooking Sydney Harbour with unobstructed views of the Opera House. Featuring contemporary interiors, rooftop pool, and luxurious amenities, this property offers the ultimate Australian lifestyle.",
    image: {
      url: "https://images.unsplash.com/photo-1600607687644-aac4e2ea8875?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      filename: "sydney-penthouse.jpg"
    },
    price: 22000,
    location: "Sydney Harbour, Sydney",
    country: "Australia",
    geometry: { type: "Point", coordinates: [151.214, -33.8523] },
    owner: new mongoose.Types.ObjectId("6889f1bc02a913c065ed97d1"),
  },
  {
    title: "Jaipur Royal Haveli",
    description:
      "A restored royal haveli in Jaipur showcasing traditional Rajasthani architecture with modern comforts. Featuring intricate carvings, courtyards, and luxurious rooms, it provides a regal experience steeped in culture and heritage.",
    image: {
      url: "https://images.unsplash.com/photo-1629725053305-9bb7886f9545?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      filename: "jaipur-haveli.jpg"
    },
    price: 4800,
    location: "Johari Bazaar, Jaipur",
    country: "India",
    geometry: { type: "Point", coordinates: [75.8235, 26.9155] },
    owner: new mongoose.Types.ObjectId("6889f1bc02a913c065ed97d1"),
  },
  {
    title: "Zermatt Luxury Chalet",
    description:
      "A contemporary chalet near Zermatt’s slopes with warm wood interiors, a fireplace lounge, and alpine views. The chalet offers heated floors, a private spa area, and large windows framing mountain panoramas. Skiers can access nearby lifts, then return for cozy evenings and fondue-style dining. A refined alpine stay for families and friends who want both slope-side convenience and comfortable, design-forward interiors.",
    image: {
      url: "https://images.unsplash.com/photo-1618222411669-01f5e2f5941f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=80",
      filename: "zermatt-chalet.jpg"
    },
    price: 13200,
    location: "Zermatt, Valais",
    country: "Switzerland",
    geometry: { type: "Point", coordinates: [7.7491, 46.0207] },
    owner: new mongoose.Types.ObjectId("6889f1bc02a913c065ed97d1"),
  }
];

module.exports = { data: sampleListings };