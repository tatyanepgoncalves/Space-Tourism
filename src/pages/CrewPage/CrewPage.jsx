import { useState } from "react";
import DouglasCrew from "../../assets/images/crew/image-douglas-hurley.png";
import MarkCrew from "../../assets/images/crew/image-mark-shuttleworth.png";
import VictorCrew from "../../assets/images/crew/image-victor-glover.png";
import AnoushehCrew from "../../assets/images/crew/image-anousheh-ansari.png";
import "../../styles/CrewPage.scss";

const crewData = [
  {
    name: "Douglas Hurley",
    image: DouglasCrew,
    role: "Commander",
    bio: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
  },
  {
    name: "Mark Shuttleworth",
    image: MarkCrew,
    role: "Mission Specialist",
    bio: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
  },
  {
    name: "Victor Glover",
    image: VictorCrew,
    role: "Pilot",
    bio: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.",
  },
  {
    name: "Anousheh Ansari",
    image: AnoushehCrew,
    role: "Flight Engineer",
    bio: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.",
  },
];


export default function CrewPage() {
  const [selectedCrew, setSelectedCrew] = useState("Douglas Hurley");

  const handleCrewClick = (name) => {
    setSelectedCrew(name);
  };

  const selectedData = crewData.find((crew) => crew.name === selectedCrew);

  return (
    <main className="page crew">
      <div className="content">
        <section className="title-page">
          <span>02</span>
          <h2>Meet your crew</h2>
        </section>

        {selectedData && (
          <section className="crew-items">
            <section className="crew-text-menu">
              <div className="menu-crew">
                <ul>
                  {crewData.map((crew) => (
                    <li
                      key={crew.name}
                      onClick={() => handleCrewClick(crew.name)}
                      className={crew.name === selectedCrew ? "active" : ""}
                    ></li>
                  ))}
                </ul>
              </div>

              <section className="crew-text">
                <div className="id">
                  <h3>{selectedData.role}</h3>
                  <h2>{selectedData.name}</h2>
                </div>
                <p>{selectedData.bio}</p>
              </section>
            </section>

            <section className="images-crew">
              <img src={selectedData.image} alt={selectedData.name} />
             <div className="line"></div>
            </section>
          </section>
        )}
      </div>
    </main>
  );
}
