import { useState } from "react";

import moonPng from "../../assets/images/destination/image-moon.png";
import marsPng from "../../assets/images/destination/image-mars.png";
import europaPng from "../../assets/images/destination/image-europa.png";
import titanPng from "../../assets/images/destination/image-titan.png";

import "../../styles/DestinationPage.scss";

const destinationData = [
  {
    name: "Moon",
    image: moonPng,
    description:
      "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
    distance: "384,400 km",
    travel: "3 days",
  },
  {
    name: "Mars",
    image: marsPng,
    description:
      "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
    distance: "225 mil. km",
    travel: "9 months",
  },
  {
    name: "Europa",
    image: europaPng,
    description:
      "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
    distance: "628 mil. km",
    travel: "3 years",
  },
  {
    name: "Titan",
    image: titanPng,
    description:
      "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
    distance: "1.6 bil. km",
    travel: "7 years",
  },
];

export default function DestinationPage() {
  const [selectedDestination, setSelectedDestination] = useState("Moon");

  const handleMenuClick = (name) => {
    setSelectedDestination(name);
  };

  const selectedData = destinationData.find(
    (destination) => destination.name === selectedDestination
  );

  return (
    <main className="destination">
      <div className="content">
        <section className="title-page">
          <span>01</span>
          <h2>Pick your destination</h2>
        </section>

        {selectedData && (
          <section className="destination-items">
            <section className="images-destination">
              <img src={selectedData.image} alt={selectedData.name} />
            </section>

            <section className="destination-text">
              <nav className="menu-destination">
                <ul>
                  {destinationData.map((destination) => (
                    <li
                      key={destination.name}
                      onClick={() => handleMenuClick(destination.name)}
                      className={
                        destination.name === selectedDestination ? "active" : ""
                      }
                    >
                      {destination.name}
                    </li>
                  ))}
                </ul>
              </nav>

              <h2>{selectedData.name}</h2>
              <p>{selectedData.description}</p>

              <div className="line"></div>

              <article className="travel-distance">
                <div>
                  <span>Avg. distance</span>
                  <h4>{selectedData.distance}</h4>
                </div>

                <div>
                  <span>Est. travel time</span>
                  <h4>{selectedData.travel}</h4>
                </div>
              </article>
            </section>
          </section>
        )}
      </div>
    </main>
  );
}
