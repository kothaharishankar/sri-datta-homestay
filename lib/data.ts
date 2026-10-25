
export const SITE = {
  name: "Sri Datta Avadhutha Home Stay",
  associated: "Sri Gurudatta Nilayam",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://your-domain.com",
  phone1: "+91 95501 66777",
  phone2: "+91 99499 12777",
  tel1: "+919550166777",
  tel2: "+919949912777",
  whatsapp: "919550166777",
  address: [
    "Near Sri Pada Srivallabha",
    "Beside 4th building from Venugopala Swami Temple",
    "Dr - No. 10 -1 -14",
    "Pithapuram, 533450, A.P.",
  ],
  street: "Dr - No. 10 -1 -14",
  plusCode: "4773+56 Pithapuram, Andhra Pradesh",
  mapsUrl: "https://maps.app.goo.gl/BDw6HgrZQMk6QWTZ9?g_st=aw",
  rating: 4.9,
  reviewCount: 17,
  related: {
    name: "Sri Gurudatta Nilayam",
    rating: 4.8,
    reviewCount: 23,
  },
};

export const WA_MESSAGE =
  "Hello, I would like to check room availability at Sri Datta Avadhutha Home Stay in Pithapuram.";

export const waLink = (msg: string = WA_MESSAGE) =>
  `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(msg)}`;

const PROPERTY_ADDRESS =
  "Near Sri Pada Srivallabha, Beside 4th building from Venugopala Swami Temple, Dr - No. 10 -1 -14, Pithapuram, 533450, A.P.";

export const directionsLink =
  `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
    PROPERTY_ADDRESS
  )}`;

export const mapsEmbed =
  `https://www.google.com/maps?q=${encodeURIComponent(
    PROPERTY_ADDRESS
  )}&output=embed`;

export const mapSearch = (q: string) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    q + " Pithapuram"
  )}`;

export const NAV = [
  { href: "#home", label: "Home" },
  { href: "#rooms", label: "Rooms" },
  { href: "#experience", label: "Experience" },
  { href: "#gallery", label: "Gallery" },
  { href: "#location", label: "Location" },
  { href: "#reviews", label: "Reviews" },
  { href: "#contact", label: "Contact" },
];

export const IMG = {
  hero: {
    src: "/images/hero/hero.jpg",
    w: 1046,
    h: 605,
    alt: "Devotional space at Sri Datta Avadhutha Home Stay",
  },

  corridor: {
    src: "/images/property/corridor.jpg",
    w: 1004,
    h: 1599,
    alt: "Home stay corridor with tiled floor",
  },

  ac: {
    src: "/images/rooms/ac-peacock-wardrobes.jpg",
    w: 936,
    h: 1599,
    alt: "Air-conditioned bedroom with wooden bed, wardrobes and air conditioner",
  },

  nonAc: {
    src: "/images/rooms/non-ac-room.jpg",
    w: 936,
    h: 1599,
    alt: "Non-AC bedroom with yellow floral bedding, ceiling fan and tiled floor",
  },

  peacock: {
    src: "/images/rooms/peacock-bedding.jpg",
    w: 1051,
    h: 1086,
    alt: "Double bed with peacock-print bedding and blue curtains",
  },

  carved: {
    src: "/images/rooms/carved-bed.jpg",
    w: 1074,
    h: 1085,
    alt: "Traditional carved wooden bed with checked bedsheet",
  },
};

export const GALLERY = [
  { ...IMG.hero, caption: "Traditional devotional space" },
  { ...IMG.ac, caption: "Air-conditioned bedroom" },
  { ...IMG.nonAc, caption: "Non-AC bedroom" },
  { ...IMG.carved, caption: "Traditional carved wooden furniture" },
  { ...IMG.corridor, caption: "Homestay interiors" },
  { ...IMG.peacock, caption: "Comfortable rooms for pilgrims" },
  {
    src: "/images/rooms/ac-pink-bedroom.jpg",
    w: 960,
    h: 1280,
    alt: "Air-conditioned bedroom with pink floral bedding and wooden wardrobes",
    caption: "Comfortable AC bedroom",
  },
  {
    src: "/images/rooms/ac-wooden-bedroom.jpg",
    w: 960,
    h: 1280,
    alt: "Bedroom with traditional carved wooden bed and patterned bedding",
    caption: "Traditional wooden bedroom",
  },
];

export const AMENITIES = [
  {
    icon: "wifi",
    title: "Wi-Fi",
    note: "Please confirm availability and coverage when booking.",
  },
  {
    icon: "snow",
    title: "AC & Non-AC Rooms",
    note: "Choose a room that suits your comfort and budget.",
  },
  {
    icon: "tv",
    title: "Dedicated TV",
    note: "Enjoy TV entertainment in the comfort of your room.",
  },
  {
    icon: "bath",
    title: "Attached Bathrooms",
    note: "Enjoy the convenience and privacy of an attached bathroom.",
  },
  {
    icon: "flame",
    title: "Hot Water",
    note: "Please confirm hot water availability when booking.",
  },
  {
    icon: "droplet",
    title: "Drinking Water",
    note: "Drinking water facility for guests.",
  },
  {
    icon: "shield",
    title: "Fire Safety",
    note: "Please confirm the available safety facilities.",
  },
  {
    icon: "car",
    title: "Parking",
    note: "Please confirm parking availability when booking.",
  },
  {
    icon: "car-front",
    title: "Travel Assistance",
    note: "Ask us about travel arrangements through our own travel providers.",
  },
  {
    icon: "store",
    title: "Our Own Shop",
    note: "Convenient access to items available at our on-site shop.",
  },
];

export const PLACES = [
  {
    name: "Sri Pada Vallabha Mahasamsthanam",
    q: "Sripada Srivallabha Mahasamsthanam",
    text: "The birthplace of Sripada Srivallabha, regarded as the first avatar of Lord Dattatreya, and a major pilgrimage destination in Pithapuram.",
    link: "https://sripadasrivallabhamahasamsthanam.com/",
  },
  {
    name: "Sri Kukkuteswara Swamy Temple",
    q: "Sri Kukkuteswara Swamy Temple",
    text: "An ancient Shiva temple in Pithapuram, with a sacred tank beside it.",
  },
  {
    name: "Puruhutika Devi Temple",
    q: "Puruhutika Devi Temple",
    text: "A revered Shakti Peetha near the Kukkuteswara temple.",
  },
  {
    name: "Pada Gaya",
    q: "Pada Gaya Pithapuram",
    text: "A sacred pond where devotees traditionally perform rites for their ancestors.",
  },
  {
    name: "Sri Venu Gopala Swamy Temple",
    q: "Sri Venu Gopala Swamy Temple",
    text: "A Vishnu temple that forms part of Pithapuram's spiritual heritage.",
  },
];

export const FAQ = [
  {
    q: "Where is Sri Datta Avadhutha Home Stay located?",
    a: "We are near Sri Pada Srivallabha, beside the 4th building from Venugopala Swami Temple, Dr - No. 10 -1 -14, Pithapuram, 533450, A.P.",
  },
  {
    q: "How can I contact the property?",
    a: "Call +91 95501 66777 or +91 99499 12777, or message us on WhatsApp.",
  },
  {
    q: "Are AC and Non-AC rooms available?",
    a: "We offer AC and Non-AC room options. Contact us for current availability and rates.",
  },
  {
    q: "Do the rooms have TVs?",
    a: "Please contact us to confirm TV availability in your selected room.",
  },
  {
    q: "Do the rooms have attached bathrooms?",
    a: "Contact us to confirm attached bathroom availability for your selected room.",
  },
  {
    q: "Can you help arrange travel?",
    a: "Ask us about travel arrangements through our travel service providers.",
  },
  {
    q: "Does the property have its own shop?",
    a: "Please contact us for details about items and availability at our on-site shop.",
  },
  {
    q: "Is Wi-Fi available?",
    a: "Please contact us to confirm Wi-Fi availability and coverage in your room.",
  },
  {
    q: "Is hot water available?",
    a: "Please contact us to confirm hot water availability for your stay.",
  },
  {
    q: "Is parking available?",
    a: "Please contact the property directly to confirm parking availability.",
  },
  {
    q: "Is the property suitable for families?",
    a: "We welcome pilgrims, families, elderly devotees and small groups. Please tell us your group size when enquiring.",
  },
  {
    q: "How close is the property to the temples?",
    a: "The property is near Sri Pada Srivallabha and beside the 4th building from Venugopala Swami Temple in Pithapuram.",
  },
  {
    q: "How do I check room availability?",
    a: "Call us or send a WhatsApp message for current room availability and rates.",
  },
  {
    q: "Can I contact the property on WhatsApp?",
    a: "Yes. Use any WhatsApp button to prepare a message to +91 95501 66777.",
  },
];
