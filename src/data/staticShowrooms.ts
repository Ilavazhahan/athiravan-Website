export interface Showroom {
  id: number;
  city_en: string;
  city_ta: string;
  address_en: string;
  address_ta: string;
  phone: string;
  hours_en: string;
  hours_ta: string;
  mapUrl: string;
  photo: string;
  displayOrder: number;
}

const staticShowrooms: Showroom[] = [
  {
    id: 1,
    city_en: "Madurai",
    city_ta: "மதுரை",
    address_en: "Kilavasal, Madurai",
    address_ta: "(Tamil address)",
    phone: "9876543210",
    hours_en: "Mon to Sat, 9:30 am to 7 pm",
    hours_ta: "(Tamil hours)",
    mapUrl: "https://maps.google.com/?q=Madurai",
    photo: "https://example.com/madurai-showroom.jpg",
    displayOrder: 1,
  },
  {
    id: 2,
    city_en: "Tuticorin",
    city_ta: "தூத்துக்குடி",
    address_en: "(street address, Tuticorin)",
    address_ta: "(Tamil address)",
    phone: "9876543211",
    hours_en: "Mon to Sat, 9:30 am to 7 pm",
    hours_ta: "(Tamil hours)",
    mapUrl: "https://maps.google.com/?q=Tuticorin",
    photo: "https://example.com/tuticorin-showroom.jpg",
    displayOrder: 2,
  },
  {
    id: 3,
    city_en: "Tirunelveli",
    city_ta: "திருநெல்வேலி",
    address_en: "AT Street, Tirunelveli",
    address_ta: "(Tamil address)",
    phone: "9876543212",
    hours_en: "Mon to Sat, 9:30 am to 7 pm",
    hours_ta: "(Tamil hours)",
    mapUrl: "https://maps.google.com/?q=Tirunelveli",
    photo: "https://example.com/tirunelveli-showroom.jpg",
    displayOrder: 3,
  },
];

export default staticShowrooms;