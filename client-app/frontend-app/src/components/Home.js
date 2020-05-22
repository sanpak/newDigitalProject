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
    
    //nav bar
    <div className="Home app-background">

      <nav class="sticky-top navbar navbar-dark bg-dark">
        <a class="navbar-brand" href="#">
          Navbar
        </a>
      </nav>

      <div class="container-fluid">
        <div class="row mb-1">
          <div class="shadow-sm col m-3 p-3 round-border white-bk">col1</div>
          <div class="shadow-sm col m-3 p-3 round-border white-bk">
            <img class="img-thumbnail border-0"
              src={process.env.PUBLIC_URL + "/assets/profile.jpg"}
              alt="picture of user"
            />
                <br />
            {username}
            <br />
            <br />
          </div>
          <div class="shadow-sm col m-3 p-3 round-border white-bk">
          
          </div>
          <div class="shadow-sm col m-3 p-3 round-border white-bk">col4</div>
        </div>

        <div class="row mb-5">
          <div class="col m-3">col1</div>
          <div class="col m-3">col2</div>
          <div class="col m-3">col3</div>
          <div class="col m-3">col4</div>
        </div>
      </div>

    </div>  
      
        
 
  );
}

export default Home;
