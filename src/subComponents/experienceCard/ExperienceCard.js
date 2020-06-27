import React, { useState, useEffect, createRef } from "react";
import "./ExperienceCard.css";
import ColorThief from "colorthief";
import { ReactComponent as Github } from "../../assets/icons/github-brands.svg";

export default function ExperienceCard({ cardInfo }) {
  const [colorArrays, setColorArrays] = useState([]);
  const imgRef = createRef();

  function getColorArrays() {
    const colorThief = new ColorThief();
    setColorArrays(colorThief.getColor(imgRef.current));
  }

  function rgb(values) {
    return typeof values === "undefined" ? null : "rgb(" + values.join(', ') + ")";
  }

  const GetDescBullets = ({ descBullets }) => {
    return descBullets ? descBullets.map((item) => <li className="subTitle">{item}</li>) : null
  };

  function openUrlInNewTab(url) {
    if(url !== undefined) {
      var win = window.open(url, "_blank");
      win.focus();
    }
  }

  return (
    <div className="experience-card" >
      <div style={{background: rgb(colorArrays) }} className="experience-banner">
        <div className="experience-blurred_div"></div>
        <div className="experience-div-company">
        <a href={cardInfo.git_repo_url}>
          <Github className="ics" />
        </a>
        </div>
        <img crossOrigin={"anonymous"} ref={imgRef} className="experience-roundedimg" onClick={() => openUrlInNewTab(cardInfo.link)} src={cardInfo.companylogo} alt={cardInfo.company} onLoad={() => getColorArrays()}/>
      </div>
      <div className="experience-text-details">
        <h5 className="experience-text-role mt-4">{cardInfo.title}</h5>
        <h5 className="experience-text-date ">{cardInfo.date_and_type}</h5>
        <p className="subTitle experience-text-desc mt-3">{cardInfo.desc}</p>
        <ul>
          <GetDescBullets descBullets={cardInfo.descBullets} />
        </ul>
      </div>
    </div>
  );
}
