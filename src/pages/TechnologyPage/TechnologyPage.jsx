import { useState } from "react";

import LaunchVehicleLandscape from "../../assets/images/technology/image-launch-vehicle-landscape.jpg";
import LaunchVehiclePortrait from "../../assets/images/technology/image-launch-vehicle-portrait.jpg";
import SpaceportLandscape from "../../assets/images/technology/image-spaceport-landscape.jpg";
import SpaceportPortrait from "../../assets/images/technology/image-spaceport-portrait.jpg";
import SpaceCapsuleLandscape from "../../assets/images/technology/image-space-capsule-landscape.jpg";
import SpaceCapsulePortrait from "../../assets/images/technology/image-space-capsule-portrait.jpg";

import "../../styles/TechnologyPage.scss";

const technologyData = [
  {
    id: 1,
    name: "Launch vehicle",
    images: {
      portrait: LaunchVehiclePortrait,
      landscape: LaunchVehicleLandscape,
    },
    description:
      "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
  },
  {
    id: 2,
    name: "Spaceport",
    images: {
      portrait: SpaceportPortrait,
      landscape: SpaceportLandscape,
    },
    description:
      "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
  },
  {
    id: 3,
    name: "Space capsule",
    images: {
      portrait: SpaceCapsulePortrait,
      landscape: SpaceCapsuleLandscape,
    },
    description:
      "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
  },
];

export default function TechnologyPage() {
  const [selectedTechnology, setSelectedTechnology] =
    useState("Launch vehicle");

  const handleTechClick = (name) => {
    setSelectedTechnology(name);
  };

  const selectedData = technologyData.find(
    (tech) => tech.name === selectedTechnology
  );

  return (
    <main className="page technology">
      <div className="content">
        <section className="title-page">
          <span>03</span>
          <h2>SPACE LAUNCH 101</h2>
        </section>

        {selectedData && (
          <section className="tech-items">
            <section className="tech-image">
              <img
                src={selectedData.images.portrait}
                alt={selectedData.name}
                className="portrait"
              />
              <img
                src={selectedData.images.landscape}
                alt={selectedData.name}
                className="landscape"
              />
            </section>

            <section className="tech-text-menu">
              <nav className="menu-tech">
                <ul>
                  {technologyData.map((tech) => (
                    <li
                      key={tech.name}
                      onClick={() => handleTechClick(tech.name)}
                      className={
                        tech.name === selectedTechnology ? "active" : ""
                      }
                    >
                      {tech.id}
                    </li>
                  ))}
                </ul>
              </nav>

              <section className="tech-text">
                <div className="id">
                  <span>THE TERMINOLOGY…</span>
                  <h2>{selectedData.name}</h2>
                </div>
                <p>{selectedData.description}</p>
              </section>
            </section>
          </section>
        )}
      </div>
    </main>
  );
}
