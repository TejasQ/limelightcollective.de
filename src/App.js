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
          <h2 className="upcoming-events__heading">Upcoming Events</h2>
          <div className="upcoming-events__grid">
            <div className="event">
              <h3 className="event__heading">A Third of the Stars</h3>
              <small>06.06.2018 - 10.06.2018</small>
              <img
                className="event__image"
                alt="A Third of the Stars"
                src="third.jpg"
              />

              <a
                className="button"
                href="https://performingarts-festival.tickets.de/en/tour/10750-a_third_of_the_stars_the_limelight_collective_"
                target="_blank"
                rel="noopener noreferrer"
              >
                Buy Tickets
              </a>
              <p>
                A Third of the Stars is a contemporary dance work that tells an
                epic story of a dragon, a woman, an angel and the clash between
                good and evil. Featuring live dance, song, poetry, and original
                music we invite you to experience this immersive story and find
                your place in this larger-than-life tale. Each performance
                includes a discussion panel with the artists after the show.
              </p>
            </div>
            <div className="event">
              <h3 className="event__heading">In Der Strafkolonie</h3>
              <small>06.06.2018 - 10.06.2018</small>
              <img
                className="event__image"
                alt="In Der Strafkolonie"
                src="straf.jpg"
              />

              <a
                className="button"
                href="https://performingarts-festival.tickets.de/de/tour/10778-1"
                target="_blank"
                rel="noopener noreferrer"
              >
                Buy Tickets
              </a>
              <p>
                An explorer finds herself in a penal colony and is asked to
                attend the execution of a soldier convicted of disobedience and
                insulting his superior. A finely tuned machine leads to
                questions about right and wrong and the thin layer of what we
                call civilization. What responsibility do we take? And how do we
                represent the values with which we establish and define
                ourselves as human beings?
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
            <img className="footer__logo" alt="Heilsarmee" src="salvos.png" />
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
            <a
              className="footer__button button button_transparent"
              target="_blank"
              rel="noopener noreferrer nofollow noindex"
              href="https://www.heilsarmee.de/impressum"
            >
              Impressum
            </a>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
