export const SITE = {
  name: "Sri Datta Avadhutha Home Stay",
  associated: "Sri Gurudatta Nilayam",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://your-domain.com",
  phone1: "+91 95501 66777",
  phone2: "+91 99499 12777",
  tel1: "+919550166777",
  tel2: "+919949912777",
  whatsapp: "919550166777",
  address: [ "Sri Datta Avadhutha Home Stay", "Sri Pada Srivallabha", "Beside 4th building", "Venugopala Swami Temple", "Door No. 10-1-14", "Pithapuram", "Andhra Pradesh 533450" ],
  street: "229, China Bazar Area",
  plusCode: "4773+56 Pithapuram, Andhra Pradesh",
  mapsUrl: "https://maps.app.goo.gl/BDw6HgrZQMk6QWTZ9?g_st=aw",
  rating: 4.9,
  reviewCount: 17,
  related: { name: "Sri Gurudatta Nilayam", rating: 4.8, reviewCount: 23 },
};
export const WA_MESSAGE = "Hello, I would like to check room availability at Sri Datta Avadhutha Home Stay in Pithapuram.";
export const waLink = (msg: string = WA_MESSAGE) => `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(msg)}`;
export const directionsLink = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent("Sri Datta Avadhuta Home Stay, 229 China Bazar Area, Pithapuram, Andhra Pradesh 533450")}`;
export const mapsEmbed = `https://www.google.com/maps?q=${encodeURIComponent("Sri Datta Avadhuta Home Stay, 229 China Bazar Area, Pithapuram, Andhra Pradesh 533450")}&output=embed`;
export const mapSearch = (q: string) => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(q + " Pithapuram")}`;

export const NAV = [
  { href: "#home", label: "Home" }, { href: "#rooms", label: "Rooms" }, { href: "#experience", label: "Experience" },
  { href: "#gallery", label: "Gallery" }, { href: "#location", label: "Location" }, { href: "#reviews", label: "Reviews" }, { href: "#contact", label: "Contact" },
];

export const IMG = {
  hero: { src: "/images/hero/hero.jpg", w: 700, h: 465, alt: "Devotional shrine decorated with marigold garlands at Sri Datta Avadhutha Home Stay" },
  shrine: { src: "/images/spiritual/shrine.jpg", w: 1046, h: 605, alt: "Marble devotional statues in a carved wooden shrine at Sri Datta Avadhutha Home Stay" },
  nonAc: { src: "/images/rooms/non-ac-room.jpg", w: 960, h: 1280, alt: "Simple bedroom with a wooden bed and yellow floral bedsheet" },
  acMain: { src: "/images/rooms/ac-peacock-wardrobes.jpg", w: 960, h: 1280, alt: "Bedroom with carved wooden bed, split air conditioner and wooden wardrobes" },
  acPink: { src: "/images/rooms/ac-pink-room.jpg", w: 960, h: 1280, alt: "Bedroom with carved wooden bed, split air conditioner and built-in wardrobes" },
  twin: { src: "/images/rooms/twin-beds-tv.jpg", w: 960, h: 1280, alt: "Room with two single beds and a television" },
  corridorGreen: { src: "/images/property/corridor-green.jpg", w: 960, h: 1280, alt: "Long corridor with green patterned tiles leading to guest rooms" },
  acWindow: { src: "/images/rooms/ac-window-room.jpg", w: 960, h: 1280, alt: "Bedroom with carved wooden bed, wardrobes and a window air conditioner" },
  corridor: { src: "/images/property/corridor.jpg", w: 1004, h: 1599, alt: "Home stay corridor with blue tiled floor and a devotional picture at the end" },
  ac: { src: "/images/rooms/ac-bedroom.jpg", w: 936, h: 1599, alt: "Bedroom with wooden bed, built-in wardrobes and a window air conditioner" },
  peacock: { src: "/images/rooms/peacock-bedding.jpg", w: 1051, h: 1086, alt: "Double bed with peacock-print bedding and blue curtains" },
  carved: { src: "/images/rooms/carved-bed.jpg", w: 1074, h: 1085, alt: "Traditional carved wooden bed with checked bedsheet beside a window" },
};

export const GALLERY = [
  { ...IMG.shrine, caption: "Traditional devotional space" },
  { ...IMG.acMain, caption: "Comfortable bedroom" },
  { ...IMG.carved, caption: "Traditional carved wooden furniture" },
  { ...IMG.acPink, caption: "Bedroom with built-in wardrobes" },
  { ...IMG.twin, caption: "Room for two with a television" },
  { ...IMG.corridor, caption: "Warm homestay interiors" },
  { ...IMG.acWindow, caption: "Peaceful rooms for pilgrims" },
  { ...IMG.corridorGreen, caption: "Corridor leading to the rooms" },
  { ...IMG.peacock, caption: "Peacock-themed bedding" },
];

export const AMENITIES = [
  { icon: "wifi", title: "Wi-Fi", note: "Shown on the property signboard" },
  { icon: "snow", title: "AC & Non-AC rooms", note: "Please confirm which is available when booking" },
  { icon: "flame", title: "Hot water", note: "Advertised as 24/7 by the property" },
  { icon: "droplet", title: "Drinking water", note: "Shown on the property signboard" },
  { icon: "shield", title: "Fire safety", note: "Advertised as 24/7 by the property" },
  { icon: "car", title: "Parking", note: "Please confirm when booking" },
  { icon: "clock", title: "24/7 availability", note: "Reach us any time for your stay" },
  { icon: "tv", title: "Separate TV", note: "Please confirm which rooms when booking" },
  { icon: "store", title: "Integrated shop", note: "A shop within the property" },
  { icon: "bus", title: "Own transport", note: "Please enquire when booking" },
  { icon: "users", title: "Up to 4 guests per room", note: "Maximum four members in a room" },
  { icon: "bath", title: "Attached & separate bathrooms", note: "Depends on the room, please confirm when booking" },
];

export const PLACES = [
  { name: "Sri Pada Vallabha Mahasamsthanam", q: "Sripada Srivallabha Mahasamsthanam", text: "The birthplace of Sripada Srivallabha, regarded as the first avatar of Lord Dattatreya, and the main reason many devotees travel to Pithapuram.", link: "https://sripadasrivallabhamahasamsthanam.com/" },
  { name: "Sri Kukkuteswara Swamy Temple", q: "Sri Kukkuteswara Swamy Temple", text: "An ancient Shiva temple in the town, with a sacred tank beside it." },
  { name: "Puruhutika Devi Temple", q: "Puruhutika Devi Temple", text: "A Shakti Peetha, one of the eighteen Ashtadasha Shakti Peethas, close to the Kukkuteswara temple." },
  { name: "Pada Gaya", q: "Pada Gaya Pithapuram", text: "A sacred pond where devotees traditionally perform rites for their ancestors." },
  { name: "Sri Venu Gopala Swamy Temple", q: "Sri Venu Gopala Swamy Temple", text: "A Vishnu temple of Pithapuram, part of the town's long temple tradition." },
];

export const FAQ = [
  { q: "Where is Sri Datta Avadhutha Home Stay located?", a: "We are at Door No. 10-1-14, beside the 4th building near Sri Pada Srivallabha and Venugopala Swami Temple, China Bazar Area, Pithapuram, Andhra Pradesh 533450. Use the Get Directions button to open the route in Google Maps." },
  { q: "How can I contact the property?", a: "Call +91 95501 66777 or +91 99499 12777, or message us on WhatsApp." },
  { q: "Is Wi-Fi available?", a: "Wi-Fi is listed on our signboard. Please confirm coverage in your room when booking." },
  { q: "Are AC rooms available?", a: "We offer AC and Non-AC rooms. Please contact us for current availability." },
  { q: "Is hot water available?", a: "Our signboard advertises 24/7 hot water. Please confirm room-specific details when booking." },
  { q: "How many guests can stay in a room?", a: "A room takes a maximum of 4 guests. Attached and separate bathrooms depend on the room, so please confirm when booking." },
  { q: "Do you provide transport?", a: "Yes, we have our own transport. Please enquire when booking." },
  { q: "Is parking available?", a: "Please contact the property directly to confirm parking for your vehicle." },
  { q: "Is the property suitable for families?", a: "Yes. We welcome pilgrims, families, elderly devotees and small groups. Please tell us your group size when you enquire." },
  { q: "How close is the property to the temples?", a: "We are in the China Bazar area of Pithapuram. Use Google Maps to see the route to each temple from us." },
  { q: "How do I check room availability?", a: "Call us or send a WhatsApp message. Please contact the property directly for the latest availability and room-specific information." },
  { q: "Can I contact the property on WhatsApp?", a: "Yes. Tap any WhatsApp button and a message will be ready to send to +91 95501 66777." },
];
