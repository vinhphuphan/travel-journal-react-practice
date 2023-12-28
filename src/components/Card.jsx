import React from "react";

export default function Card(props) {
  return (
    <div className="card">
      <img className="card--image" src={props.imageUrl} />
      <div className="card--right-part">
        <div className="first-line">
          <div className="location">
            <i class="fa-solid fa-location-dot"></i>
            <h3>{props.location}</h3>
          </div>
          <div className="ggmaps">View on Google Maps</div>
        </div>
        <div className="card--title">{props.title}</div>
        <div className="card--time">
          {props.startDate} - {props.endDate}
        </div>
        <p className="card--description">{props.description}</p>
      </div>
    </div>
  );
}
