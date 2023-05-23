import React, { Component } from "react";
import ProfilePicture from "./ProfilePicture.jfif";

class App extends Component {
  constructor() {
    super();
    this.state = {
      shows: true, // State to determine if the profile should be shown
      Person: {
        fullName: "Haroun BENMAHDJOUB",
        bio: "Student at GMC, graduated with M.Sc.Tech from Uni",
        imgSrc: ProfilePicture,
        profession: "Future Web Dev",
      },
      timeInterval: 0, // State to store the time interval since mount
    };
    this.clickHandler = this.clickHandler.bind(this);
  }

  componentDidMount() {
    // Start the interval when the component is mounted
    this.interval = setInterval(() => {
      this.setState((prevState) => ({
        timeInterval: prevState.timeInterval + 1, // Update the time interval every second
      }));
    }, 1000);
  }

  componentWillUnmount() {
    // Clear the interval when the component is unmounted
    clearInterval(this.interval);
  }

  clickHandler() {
    // Toggle the shows state when the button is clicked
    this.setState((prevState) => ({
      shows: !prevState.shows,
    }));
  }

  render() {
    const { shows, Person, timeInterval } = this.state;

    return (
      <div className="container">
        {shows ? (
          <>
            {/* Button to toggle the shows state */}
            <button onClick={this.clickHandler}>Hide</button>
            <br />
            {/* Styling to crop the profile picture (Irelevant to the checkpoint)*/}
            <div
              style={{
                position: "relative",
                overflow: "hidden",
                padding: "10px",
              }}
            >
              {/* Profile picture */}
              <img
                src={ProfilePicture}
                alt="image peronel"
                width="400"
                height="400"
                style={{
                  clipPath: "inset(17px)", // Styling to crop the profile picture (Irelevant to the checkpoint)
                  padding: "10px",
                  margin: "5px",
                }}
              />
            </div>
            {/* Profile information */}
            <h1>{Person.fullName}</h1>
            <h2>{Person.bio}</h2>
            <h2>{Person.profession}</h2>
            {/* Time interval since mount */}
            <h3>Time interval since mount: {timeInterval} seconds</h3>
          </>
        ) : (
          // Button to show the profile
          <button onClick={this.clickHandler}>Show</button>
        )}
      </div>
    );
  }
}

export default App;
