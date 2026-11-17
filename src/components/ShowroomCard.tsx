
import type { Showroom } from "../data/staticShowrooms";

interface ShowroomCardProps {
  showroom: Showroom;
  lang?: "en" | "ta";
}

function ShowroomCard({ showroom, lang = "en" }: ShowroomCardProps) {
  const isTa = lang === "ta";

  const city = (isTa && showroom.city_ta) || showroom.city_en;
  const address = (isTa && showroom.address_ta) || showroom.address_en;
  const hours = (isTa && showroom.hours_ta) || showroom.hours_en;

  const { phone, mapUrl, photo } = showroom;

  return (
    <article className="showroom-card">
      <img
        src={photo}
        alt={`Athiravan Scale showroom in ${showroom.city_en}`}
        className="showroom-card__photo"
      />

      <div className="showroom-card__body">
        <h2>{city}</h2>
        <p>{address}</p>
        <p>{phone}</p>
        <p>{hours}</p>

        <div className="showroom-card__actions">
          <a href={`tel:+91${phone}`} className="btn">
            {isTa ? "அழைக்க" : "Call"}
          </a>

          <a
            href={mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            {isTa ? "வழிகாட்டி" : "Directions"}
          </a>
        </div>
      </div>
    </article>
  );
}

export default ShowroomCard;
