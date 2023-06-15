import React from "react";
import "../styles/showcase.css";
import Image from "next/image";

export default function Showcase() {
  return (
    <div>
      <div className="headingContainer content container">
        <h1>Showcase</h1>
        <h3>A showcase of my favourite cards in my personal collection</h3>
      </div>
      <div className="imgGallery">
        <div className="showcaseImg">
          <Image src="/images/gengarVmax.webp" height="500" width="300" alt="Gengar Vmax PSA 10"></Image>
          <div className="imgContent">
            <h4>Gengar VMAX PSA 10</h4>
            <p>
              <small>Fusion Strike 271/264</small>
            </p>
            <p>
              The crown jewel of my collection. After much time and money spent ripping fusion strike packs I decided to buy
              this outright whilst at the London card show.
            </p>
          </div>
        </div>
        <div className="showcaseImg">
          <Image src="/images/pikachuVmax.jpeg" height="500" width="300" alt="Gengar Vmax PSA 10"></Image>
          <div className="imgContent">
            <h4>Pikachu VMAX ACE 10</h4>
            <p>
              <small>Vivid Voltage 188/185</small>
            </p>
            <p>
              After no hits from an ETB I was left with my first ever vivid voltage pack where I said 'Its okay cos theres a
              Chunkuchu in here'. And here we are.
            </p>
          </div>
        </div>
        <div className="showcaseImg">
          <Image src="/images/umbreonEX.jpg" height="500" width="300" alt="Gengar Vmax PSA 10"></Image>
          <div className="imgContent">
            <h4>Umbreon EX PSA 10</h4>
            <p>
              <small>Fates Collide 55/124</small>
            </p>
            <p>
              The very first pack I opened when I got back into pokemon cards in lockdown gifted me with this beauty. I was
              so happy when I got this back from PSA.
            </p>
          </div>
        </div>
        <div className="showcaseImg">
          <Image src="/images/umbreonV.jpeg" height="500" width="300" alt="Gengar Vmax PSA 10"></Image>
          <div className="imgContent">
            <h4>Umbreon V PSA 10</h4>
            <p>
              <small>Evolving Skies 189/203</small>
            </p>
            <p>
              Who doesnt love an Umbreon? This artwork is amazing and the only Evolving Skies hit I got that wasnt terribly
              off centre.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
