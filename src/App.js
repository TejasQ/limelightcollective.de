import React, { Component } from "react"
import { Document, Page } from "react-pdf"

class App extends Component {
  state = {
    loading: true,
  }

  onDocumentLoad = () => {
    this.setState(() => ({ loading: false }))
  }

  render() {
    const { loading } = this.state
    return (
      <div style={{ display: "grid", gridTemplateColumns: "320px 768px" }}>
        {loading && (
          <div className="loader-container">
            <div className="loader" />
          </div>
        )}
        <div style={{ padding: "0 32px" }}>
          <div>
            <h2>Upcoming Events</h2>
            <ul className="events">
              <li className="event">
                <h3>Soul Space</h3>
                <small>30 Apr 2018, 19:30</small>
                <div>
                  <button>Join</button>
                </div>
              </li>
              <li className="event">
                <h3>Open Stage</h3>
                <small>4 May 2018, 19:30</small>
                <div>
                  <button>Join</button>
                </div>
              </li>
              <li className="event">
                <h3>Soul Space</h3>
                <small>7 Apr 2018, 19:30</small>
                <div>
                  <button>Join</button>
                </div>
              </li>
              <li className="event">
                <h3>Soul Space</h3>
                <small>14 May 2018, 19:30</small>
                <div>
                  <button>Join</button>
                </div>
              </li>
            </ul>
          </div>
          <div style={{ marginTop: 64 }}>
            <h2>A Third of the Stars</h2>
            <img
              src="https://images.pexels.com/photos/209948/pexels-photo-209948.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              style={{ width: "100%" }}
            />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer a tellus ullamcorper, rutrum tellus sed,
              sodales nibh. Duis convallis tincidunt lacus, id laoreet ante mollis tincidunt. Quisque feugiat sit amet
              tortor id sollicitudin. Morbi sit amet sem tellus. Nulla convallis dapibus scelerisque. In fringilla,
              tortor volutpat egestas tristique, lectus neque blandit augue, ac auctor orci arcu in ipsum.
            </p>
            <button>Buy Tickets</button>
          </div>
        </div>
        <div style={{ height: "100vh", overflow: "auto", WebkitOverflowScrolling: "touch" }}>
          <Document file="broc.pdf" onLoadSuccess={this.onDocumentLoad}>
            <Page pageNumber={1} />
            <Page pageNumber={2} />
          </Document>
        </div>
      </div>
    )
  }
}

export default App
