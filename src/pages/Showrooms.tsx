
import staticShowrooms from "../data/staticShowrooms";
import ShowroomCard from "../components/ShowroomCard";
import "./Showrooms.css";

function Showrooms() {
  
  return (
    <section className="showrooms">
      <h1>Our Showrooms</h1>

      <div className="showrooms__list">
        {staticShowrooms.map((showroom) => (
          <ShowroomCard key={showroom.id} showroom={showroom} />
        ))}
      </div>
    </section>
  );
}

export default Showrooms;
