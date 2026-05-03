export type RsvpChoice = "attending" | "maybe" | "unable";

export type CountdownState = {
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
  isLive: boolean;
};

export type StoryMoment = {
  title: string;
  body: string;
};

export type EventCard = {
  title: string;
  date: string;
  time: string;
  venue: string;
  palette: string;
  note: string;
  theme: "berry" | "blush" | "champagne";
};

export type VenueGuide = {
  title: string;
  venue: string;
  note: string;
  link: string;
};

export type ArrivalNote = {
  title: string;
  body: string;
};

export type PaletteCard = {
  name: string;
  label: string;
  colours: [string, string];
  note: string;
};

export type AsoebiOption = {
  label: string;
  price: string;
  note: string;
};

export type GalleryMoment = {
  title: string;
  note: string;
  image: string;
  alt: string;
  width: number;
  height: number;
};

export type GiftIdea = {
  title: string;
  body: string;
};

export const COUPLE_NAMES = "Inioluwa Rhoda & Adeboye Amos";
export const INVITATION_DOWNLOAD_PATH = "/ini-ade-invitation.jpeg";
export const CONTACT_PHONE = "08054224470";
export const BANK_NAME = "MoniePoint";
export const ACCOUNT_NAME = "Inioluwa Rhoda Masominu";
export const ACCOUNT_NUMBER = "7068898037";

export const ADMIN_PASSWORD = "rhoda-amos";
export const SHEET_CSV_URL  = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQXeHp4_GUILVHKrqGYU2tbKAE0oh7QVntQ-P5P42HvmYb1ynnur37rKWNWB7kZQIMD3L6OTomIRvav/pub?gid=255578696&single=true&output=csv";

export const TRADITIONAL_WEDDING_TIME = new Date("2026-06-19T11:00:00+01:00").getTime();

const createMapLink = (query: string) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;

export const navLinks = [
  { href: "#invitation", label: "Invitation" },
  { href: "#story", label: "Our Story" },
  { href: "#weekend", label: "Weekend" },
  { href: "#gallery", label: "Gallery" },
  { href: "#style", label: "Dress Code" },
  { href: "#gift", label: "Gift" },
  { href: "#rsvp", label: "RSVP" },
];

export const heroHighlights = [
  "Ijebu Igbo celebration",
  "19 & 20 June 2026",
  "Traditional and white wedding",
];

export const storyParagraphs = [
  "Inioluwa Rhoda and Adeboye Amos first met in a private secondary school, where she was teaching part-time and he was serving as a corps member. What began with simple greetings soon became a calm friendship, full of warmth, sincerity, and the kind of conversations that stay with you long after the day ends.",
  "With time, that friendship deepened into something certain. Their journey has been shaped by prayer, quiet support, shared joy, and a steady sense of peace. Now they are inviting family and friends to witness a new chapter built on grace, intentional love, and grateful hearts.",
];

export const storyMoments: StoryMoment[] = [
  {
    title: "First hello",
    body: "A school corridor, a gentle beginning, and a friendship that felt easy from the start.",
  },
  {
    title: "Growing in grace",
    body: "Thoughtful check-ins, laughter after long days, and a love that kept getting deeper.",
  },
  {
    title: "Forever yes",
    body: "A quiet certainty that became a joyful promise and a shared future.",
  },
];

export const eventCards: EventCard[] = [
  {
    title: "Traditional Wedding",
    date: "Friday, 19 June 2026",
    time: "11:00 AM",
    venue: "Baba Ijo Hall, Oke Agbo, Ijebu Igbo",
    palette: "Wine & Gold",
    note: "A rich day of family honour, culture, music, and warm celebration.",
    theme: "berry",
  },
  {
    title: "White Wedding",
    date: "Saturday, 20 June 2026",
    time: "10:00 AM",
    venue: "St. Philips Anglican Church, Oke Agbo, Ijebu Igbo",
    palette: "Baby Pink & White",
    note: "A soft and elegant church ceremony filled with worship, beauty, and joy.",
    theme: "blush",
  },
  {
    title: "Reception",
    date: "Saturday, 20 June 2026",
    time: "Immediately after church",
    venue: "Women Conference Center, Oke Alafia, Oke Agbo, Ijebu Igbo",
    palette: "Soft neutrals & celebration glow",
    note: "The laughter continues with food, music, beautiful outfits, and a joyful dance floor.",
    theme: "champagne",
  },
];

export const arrivalNotes: ArrivalNote[] = [
  {
    title: "Plan for both days",
    body: "The traditional wedding is on Friday, 19 June 2026, and the white wedding follows on Saturday, 20 June 2026.",
  },
  {
    title: "Reception flows right after church",
    body: "Once the church service ends on Saturday, everyone moves straight into the reception celebration.",
  },
  {
    title: "Use the quick map buttons",
    body: "Each venue can be opened directly on your phone, making it easy to navigate and share directions.",
  },
];

export const guestGuideVenues: VenueGuide[] = [
  {
    title: "Traditional venue",
    venue: "Baba Ijo Hall, Oke Agbo, Ijebu Igbo",
    note: "Friday celebration venue",
    link: createMapLink("Baba Ijo Hall Oke Agbo Ijebu Igbo"),
  },
  {
    title: "Church venue",
    venue: "St. Philips Anglican Church, Oke Agbo, Ijebu Igbo",
    note: "Saturday wedding service",
    link: createMapLink("St. Philips Anglican Church Oke Agbo Ijebu Igbo"),
  },
  {
    title: "Reception venue",
    venue: "Women Conference Center, Oke Alafia, Oke Agbo, Ijebu Igbo",
    note: "Saturday celebration continues here",
    link: createMapLink("Women Conference Center Oke Alafia Oke Agbo Ijebu Igbo"),
  },
];

export const paletteCards: PaletteCard[] = [
  {
    name: "Traditional day",
    label: "Wine & Gold",
    colours: ["#6d2039", "#d6ad62"],
    note: "Rich, regal tones that bring warmth and depth to the Friday celebration.",
  },
  {
    name: "White wedding",
    label: "Blush & White",
    colours: ["#f3c8d0", "#fffaf4"],
    note: "Soft and romantic shades that keep the church day feeling fresh and graceful.",
  },
  {
    name: "Reception glow",
    label: "Champagne & Sage",
    colours: ["#dcc59a", "#8c9f8b"],
    note: "Easy neutrals and gentle accents that blend beautifully into the evening mood.",
  },
];

export const asoebiOptions: AsoebiOption[] = [
  {
    label: "Ankara with Aso Oke Gele",
    price: "N9,000",
    note: "A joyful full look for ladies who want the traditional day to feel extra special.",
  },
  {
    label: "Fila for Men",
    price: "N3,500",
    note: "A sharp finishing touch for gentlemen who want to celebrate in style with the groom.",
  },
  {
    label: "Sego Gele for Women",
    price: "N10,000",
    note: "A graceful statement piece for guests who want a polished and elegant finish.",
  },
];

export const galleryMoments: GalleryMoment[] = [
  {
    title: "A calm kind of love",
    note: "Soft smiles",
    image: "/WhatsApp Image 2026-04-29 at 18.36.22.jpeg",
    alt: "Portrait of Inioluwa Rhoda and Adeboye Amos",
    width: 1920,
    height: 2560,
  },
  {
    title: "Joy in every detail",
    note: "Pre-wedding glow",
    image: "/WhatsApp Image 2026-04-29 at 18.36.22 (1).jpeg",
    alt: "Pre-wedding portrait of the couple",
    width: 1920,
    height: 2560,
  },
  {
    title: "Sweet details",
    note: "Floral texture",
    image: "/backgound-image.jpeg",
    alt: "Floral texture for the wedding moodboard",
    width: 2074,
    height: 2560,
  },
];

export const verseLines = [
  "Two are better than one, because they have a good reward for their labour.",
  "For if they fall, the one will lift up his fellow.",
  "And the beauty of love is that no one walks alone.",
];

export const coupleMessage = [
  "To our dear family and friends, thank you for every prayer, every kind word, and every expression of love that has carried us into this season. Your support has added so much beauty to our journey, and we are genuinely grateful to celebrate this moment with you.",
  "We are looking forward to two unforgettable days filled with worship, honour, warmth, laughter, and the joy of beginning forever together. Thank you for being part of our story.",
];

export const giftIdeas: GiftIdea[] = [
  {
    title: "Home essentials",
    body: "Thoughtful pieces for the home and everyday comfort are always welcome.",
  },
  {
    title: "Prayerful support",
    body: "Your prayers, love, and kind wishes mean a great deal as they begin this new chapter.",
  },
  {
    title: "Joyful contribution",
    body: "Any support toward their beautiful beginning will be received with gratitude.",
  },
];

export const rsvpMessages: Record<RsvpChoice, string> = {
  attending: "Beautiful. Your place in the celebration already feels warm and ready.",
  maybe: "We will keep the joy waiting for you and hope your plans come together sweetly.",
  unable: "Thank you for your love and prayers. You will still be part of this story from wherever you are.",
};

export function getCountdownState(): CountdownState {
  const difference = TRADITIONAL_WEDDING_TIME - Date.now();

  if (difference <= 0) {
    return { days: "00", hours: "00", minutes: "00", seconds: "00", isLive: true };
  }

  return {
    days: String(Math.floor(difference / (1000 * 60 * 60 * 24))).padStart(2, "0"),
    hours: String(Math.floor((difference / (1000 * 60 * 60)) % 24)).padStart(2, "0"),
    minutes: String(Math.floor((difference / (1000 * 60)) % 60)).padStart(2, "0"),
    seconds: String(Math.floor((difference / 1000) % 60)).padStart(2, "0"),
    isLive: false,
  };
}
