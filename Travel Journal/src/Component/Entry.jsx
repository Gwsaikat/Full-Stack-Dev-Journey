
import locationIcon from "../assets/placeholder.png";

export default function Entry(props) {
  return (
    <article className="journal-entry">
      <div className="main-image-container">
        <img className="main-image" src={props.img} alt={props.imgalt} />
      </div>

      <div>
        <div className="location-info">
          <img className="location-icon" src={locationIcon} alt="Location-icon" />
          <span>India</span>
        </div>
        <a href={props.location}>
          View On Google Map</a>
        <h2>{props.name}</h2>
        <p>Friday, 3 April 2026</p>
        <p>{props.description}</p>
      </div>
    </article>
  )
}