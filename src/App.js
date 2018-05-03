import React, { Component } from "react";
import { Document, Page } from "react-pdf";
import "./App.css";

class App extends Component {
  onDocumentLoad = () => {
    this.setState(() => ({ loading: false }));
  };

  render() {
    return (
      <div>
        <section className="logo-container">
          <img alt="The Limelight Collective" src="logo.jpg" />
        </section>
        <section className="upcoming-events">
          <h2 className="upcoming-events__heading">Kommende Veranstaltungen</h2>
          <div className="upcoming-events__grid">
            <div className="event">
              <h3 className="event__heading">A Third of the Stars</h3>
              <small>06.06.2018 - 10.06.2018</small>
              <img
                className="event__image"
                alt="A Third of the Stars"
                src="third.png"
              />

              <a
                className="button"
                href="https://performingarts-festival.tickets.de/en/tour/10750-a_third_of_the_stars_the_limelight_collective_"
                target="_blank"
                rel="noopener noreferrer"
              >
                Tickets Kaufen
              </a>
              <p>
                Das Tanzstück „A Third of the Stars“ setzt sich mit universalen
                Gut-gegen-Böse-Handlungen auf der geistlichen und
                gesellschaftlichen Ebene und auf der Verhaltensebene
                auseinander. Mystisch erzählt, erinnert es an eine epische
                Legende und lädt die Zuschauer*innen ein, Platz in einer
                Geschichte zu finden, die größer ist, als sie selbst. Im Zentrum
                der Arbeit von The Limelight Collective steht die Spiritualität.
              </p>
            </div>
            <div className="event">
              <h3 className="event__heading">In Der Strafkolonie</h3>
              <small>06.06.2018 - 10.06.2018</small>
              <img
                className="event__image"
                alt="In Der Strafkolonie"
                src="straf.png"
              />

              <a
                className="button"
                href="https://performingarts-festival.tickets.de/de/tour/10778-1"
                target="_blank"
                rel="noopener noreferrer"
              >
                Tickets Kaufen
              </a>
              <p>
                Eine Forschungsreisende findet sich in einer Strafkolonie wieder
                und wird gebeten der Exekution eines Soldaten beizuwohnen, der
                wegen Ungehorsam und Beleidigung verurteilt wurde. Eine fein
                ausgetüftelte Maschine führt zur Frage über Recht und Unrecht.
                Was nennen wir Zivilisation? Welche Verantwortung ergreifen wir?
                Heuwinkel und Steffen arbeiten freischaffend als Regisseur bzw.
                Schauspielerin.
              </p>
            </div>
          </div>
        </section>
        <section className="flyer">
          <Document file="broc.pdf" onLoadSuccess={this.onDocumentLoad}>
            <Page pageNumber={1} />
            <Page pageNumber={2} />
          </Document>
        </section>
        <section className="footer">
          <div className="footer__logo-container">
            <img className="footer__logo" alt="Heilsarmee" src="salvos.jpg" />
          </div>
          <div className="footer__content">
            <p>Ein Projekt der Heilsarmee</p>
            <a
              className="footer__button button button_primary"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.facebook.com/thelimelightcollective/app/180105282031811/"
            >
              Spenden/Donate
            </a>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
