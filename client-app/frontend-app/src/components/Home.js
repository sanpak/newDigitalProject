import React, { useState } from 'react';
import '../styles/Home.css';

function Home() {
  const [username, setUsername] = useState("Jacob Duchen");

  const [durations, setDurations] = useState([
    {id: 0, value: 10},
    {id: 1, value: 20},
    {id: 2, value: 30},
    {id: 3, value: 60}
  ]);

  const [mediums, setMediums] = useState([
    {id: 0, value: "Messaging"},
    {id: 1, value: "Voice"},
    {id: 2, value: "Video"}
  ]);

  const [dates, setDates] = useState([
    {id: 0, value: "4/29"},
    {id: 1, value: "5/3"},
    {id: 2, value: "5/4"},
    {id: 3, value: "5/5"},
    {id: 4, value: "5/6"}
  ]);

  const [times, setTimes] = useState([
    {id: 0, value: "3:00 PM"},
    {id: 1, value: "4:00 PM"},
    {id: 2, value: "5:00 PM"}
  ]);

  const [multiplier, setMultiplier] = useState(1);

  const [openMedium, setOpenMedium] = useState(false);
  const [openDuration, setOpenDuration] = useState(false);

  const [openDate, setOpenDate] = useState(false);
  const [openTime, setOpenTime] = useState(false);

  const [selectedMedium, setSelectedMedium] = useState(0);
  const [selectedDuration, setSelectedDuration] = useState(0);
  // const [selectedPrice, setSelectedPrice] = useState(0);

  const [selectedDate, setSelectedDate] = useState(0);
  const [selectedTime, setSelectedTime] = useState(0);

  const [intro, setIntro] = useState("");

  const importantStyleObj = {
    fontSize: 40,
    fontWeight: 'bold'
  }

  function handleFinalSubmit(e) {
    let postObj = {
      "medium" : selectedMedium,
      "duration" : selectedDuration,
      "date": selectedDate,
      "time": selectedDate,
      "intro": intro
    }
    e.preventDefault();
    alert("Need to impliment Payment Processor, our obj: " + JSON.stringify(postObj))
    console.log();
  }

  function handleMediumDropdownButtonClick(e) {
    e.preventDefault();
    setOpenMedium(!openMedium);
  }

  function handleDurationDropdownButtonClick(e) {
    e.preventDefault();
    setOpenDuration(!openDuration);
  }

  function handleDateDropdownButtonClick(e) {
    e.preventDefault();
    setOpenDate(!openDate);
  }

  function handleTimeDropdownButtonClick(e) {
    e.preventDefault();
    setOpenTime(!openTime);
  }

  function clickMediumHandler(e, m) {
    e.preventDefault();
    setSelectedMedium(m);
    setOpenMedium(!openMedium);
  }

  function clickDurationHandler(e, d) {
    e.preventDefault();
    setSelectedDuration(d);
    setOpenDuration(!openDuration);
  }

  function clickDateHandler(e, d) {
    e.preventDefault();
    console.log("clickDateHandler: " + d);
    setSelectedDate(d);
    setOpenDate(!openDate);
  }

  function clickTimeHandler(e, t) {
    e.preventDefault();
    console.log("clickTimeHandler: " + t);

    setSelectedTime(t);
    setOpenTime(!openTime);
  }

  const mediumList = mediums.map((m) =>
    <li key={m.id}>
    <button type="button" onClick={e => clickMediumHandler(e, m.id)}>{m.value}</button>
    </li>
  );

  const durationsList = durations.map((d) =>
    <li key={d.id}>
      <button type="button" onClick={e => clickDurationHandler(e, d.id)}>{d.value}</button>
    </li>
  );

  const datesList = dates.map((d) =>
    <li key={d.id}>
    <button type="button" onClick={e => clickDateHandler(e, d.id)}>{d.value}</button>
    </li>
  );

  const timesList = times.map((t) =>
    <li key={t.id}>
    <button type="button" onClick={e => clickTimeHandler(e, t.id)}>{t.value}</button>
    </li>
  );

   // function computeStatement(){
   //   setSelectedPrice(selectedMedium * selectedTime * multiplier);
   // }

   const printedComputeStatement = <p>
   <span style={importantStyleObj}>{mediums[selectedMedium].value}</span> conversation x <span style={importantStyleObj}>{durations[selectedDuration].value}</span> minutes = <span style={importantStyleObj}>${(selectedMedium + 1) * durations[selectedDuration].value * multiplier}</span>
    </p>;


  const computeTimeDurationSection = <p>Speaking on
  <span style={importantStyleObj}>{dates[selectedDate].value}</span> at
  <span style={importantStyleObj}>{times[selectedTime].value}</span></p>;

  // const computeTimeDurationSection = <p>Hello world</p>

  return (
    <div className="Home">
      <nav class="sticky-top navbar navbar-dark bg-dark">
        <a class="navbar-brand" href="#">
          Navbar
        </a>
      </nav>
      <div class="container-fluid text-left">
        <h1>Book a Conversation With Jacob</h1>
        <div class="row">
          <div class="col-sm-4">
              
              <div>
                Name:
                <br />
                {username}
              </div>
          </div>
        
        <div class="col-sm-8">
            <img class="img-fluid"
              className="pictureSection"
              src={process.env.PUBLIC_URL + "/assets/profile.jpg"}
              alt="picture of user"
            />
        </div>
        </div>
      </div>
      

    

      <div className="bigParagraph">
        Short Bio
        <br />
        <br />
        {username} has a degree from a university. He is an expert in almost
        nothing.
      </div>
      <br />

      <div className="bigParagraph">
        Long Bio
        <br />
        <br />
        If {username} was more accomplished. This would be a much longer
        section.
      </div>
      <br />

      <div className="baseball">
        <div className="bigParagraph">
          Please select how you would like to talk to {username} by clicking the
          Select Medium button. You can also dictate how long you would like to
          talk to {username} by clicking the Select Duration button. By default,
          a 10 minute messaging conversation is selected, but users often prefer
          phone, video, and longer periods of time.
        </div>
        <br />
        <br />
        <table className="tableStyles">
          <tbody>
            <tr className="tableRow">
              <th>Medium (for communication)</th>
              <th>Time (in minutes)</th>
            </tr>
            <tr>
              <td className="tableRow">
                <button
                  type="button"
                  onClick={(e) => handleMediumDropdownButtonClick(e)}
                >
                  Select Medium
                </button>
                {openMedium && (
                  <div>
                    <ul className="ourList">{mediumList}</ul>
                  </div>
                )}
              </td>
              <td>
                <button
                  type="button"
                  onClick={(e) => handleDurationDropdownButtonClick(e)}
                >
                  Select Duration
                </button>
                {openDuration && (
                  <div>
                    <ul className="ourList">{durationsList}</ul>
                  </div>
                )}
              </td>
            </tr>
          </tbody>
        </table>
        {printedComputeStatement}
        <div className="bigParagraph">
          Intro message for {username}. Feel free to introduce yourself to{" "}
          {username}, ask questions you are hoping to be answered, or write
          whatever you would like! (optional) (1000 word limit):
        </div>
        <div>
          <br />
          <br />
          <textarea
            className="bigTextArea"
            type="textarea"
            onChange={(e) => setIntro(e.target.value)}
          />
        </div>
      </div>
      <br />
      <div>
        {username}s Available Times
        <br />
        <br />
        <table className="tableStyles">
          <tbody>
            <tr className="tableRow">
              <th>Date</th>
              <th>Time (EST)</th>
            </tr>
            <tr>
              <td className="tableRow">
                <button
                  type="button"
                  onClick={(e) => handleDateDropdownButtonClick(e)}
                >
                  Select From Available Dates
                </button>
                {openDate && (
                  <div>
                    <ul className="ourList">{datesList}</ul>
                  </div>
                )}
              </td>
              <td>
                <button
                  type="button"
                  onClick={(e) => handleTimeDropdownButtonClick(e)}
                >
                  Select From Available Times
                </button>
                {openTime && (
                  <div>
                    <ul className="ourList">{timesList}</ul>
                  </div>
                )}
              </td>
            </tr>
          </tbody>
        </table>
        {computeTimeDurationSection}
      </div>

      <br />
      <div>
        <br />
        <button onClick={(e) => handleFinalSubmit(e)}>
          Purchase Conversation
        </button>
      </div>
    </div>
  );
}

export default Home;
