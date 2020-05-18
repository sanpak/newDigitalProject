import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import '../styles/EditProfile.css';

function EditProfile() {
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

  const [shortBio, setShortBio] = useState("");
  const [longBio, setLongBio] = useState("");

  const [tempShortBio, setTempShortBio] = useState(shortBio);
  const [tempLongBio, setTempLongBio] = useState(longBio);

  const [image, setImage] = useState({ preview: "", raw: "" });

  const [messagingRate, setMessagingRate]  = useState(1);
  const [voiceRate, setVoiceRate]  = useState(2);
  const [videoRate, setVideoRate]  = useState(3);

  const [messageEnabled, setMessageEnabled] = useState(true);
  const [voiceEnabled, setVoiceEnabled] = useState(true);
  const [videoEnabled , setVideoEnabled] = useState(true);

  const [monday, setMonday] = useState(false);
  const [tuesday, setTuesday] = useState(false);
  const [wednesday, setWednesday] = useState(false);
  const [thursday, setThursday] = useState(false);
  const [friday, setFriday] = useState(false);

  const [mondayTimes, setMondayTimes] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false
  ]);

  const [tuesdayTimes, setTuesdayTimes] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false
  ]);

  const [wednesdayTimes, setWednesdayTimes] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false
  ]);

  const [thursdayTimes, setThursdayTimes] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false
  ]);

  const [fridayTimes, setFridayTimes] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false
  ]);

  function handleDayClick(e, string) {
    e.preventDefault();

    let element = document.getElementById(string)

    switch (string) {
      case "Monday":
        if(monday){
          setMonday(false);
          ReactDOM.findDOMNode(element).style.backgroundColor = 'white';
        } else {
          setMonday(true);
          ReactDOM.findDOMNode(element).style.backgroundColor = '#b2ccf7';
        }
        break;
      case "Tuesday":
        if(tuesday){
          setTuesday(false);
          ReactDOM.findDOMNode(element).style.backgroundColor = 'white';
        } else {
          setTuesday(true);
          ReactDOM.findDOMNode(element).style.backgroundColor = '#b2ccf7';
        }
        break;
      case "Wednesday":
        if(wednesday){
          setWednesday(false);
          ReactDOM.findDOMNode(element).style.backgroundColor = 'white';
        } else {
          setWednesday(true);
          ReactDOM.findDOMNode(element).style.backgroundColor = '#b2ccf7';
        }
        break;
      case "Thursday":
        if(thursday){
          setThursday(false);
          ReactDOM.findDOMNode(element).style.backgroundColor = 'white';
        } else {
          setThursday(true);
          ReactDOM.findDOMNode(element).style.backgroundColor = '#b2ccf7';
        }
        break;
      case "Friday":
        if(friday){
          setFriday(false);
          ReactDOM.findDOMNode(element).style.backgroundColor = 'white';
        } else {
          setFriday(true);
          ReactDOM.findDOMNode(element).style.backgroundColor = '#b2ccf7';
        }
        break;
      }
  }

  function handleTimeClick(e, string) {
    e.preventDefault();
    let element = document.getElementById(string)
    switch (string) {
      case "Monday0":
        if(mondayTimes[0]){
          let prevState = [...mondayTimes];
          prevState[0] = false;
          setMondayTimes(prevState);
          ReactDOM.findDOMNode(element).style.backgroundColor = 'white';
        } else {
          let prevState = [...mondayTimes];
          prevState[0] = true;
          setMondayTimes(prevState);
          ReactDOM.findDOMNode(element).style.backgroundColor = '#b2ccf7';
        }
        break;
      case "Monday1":
        if(mondayTimes[1]){
          let prevState = [...mondayTimes];
          prevState[1] = false;
          setMondayTimes(prevState);
          ReactDOM.findDOMNode(element).style.backgroundColor = 'white';
        } else {
          let prevState = [...mondayTimes];
          prevState[1] = true;
          setMondayTimes(prevState);
          ReactDOM.findDOMNode(element).style.backgroundColor = '#b2ccf7';
        }
        break;
      case "Monday2":
        if(mondayTimes[2]){
          let prevState = [...mondayTimes];
          prevState[2] = false;
          setMondayTimes(prevState);
          ReactDOM.findDOMNode(element).style.backgroundColor = 'white';
        } else {
          let prevState = [...mondayTimes];
          prevState[2] = true;
          setMondayTimes(prevState);
          ReactDOM.findDOMNode(element).style.backgroundColor = '#b2ccf7';
        }
        break;
      case "Monday3":
        if(mondayTimes[3]){
          let prevState = [...mondayTimes];
          prevState[3] = false;
          setMondayTimes(prevState);
          ReactDOM.findDOMNode(element).style.backgroundColor = 'white';
        } else {
          let prevState = [...mondayTimes];
          prevState[3] = true;
          setMondayTimes(prevState);
          ReactDOM.findDOMNode(element).style.backgroundColor = '#b2ccf7';
        }
        break;
      case "Monday4":
        if(mondayTimes[4]){
          let prevState = [...mondayTimes];
          prevState[4] = false;
          setMondayTimes(prevState);
          ReactDOM.findDOMNode(element).style.backgroundColor = 'white';
        } else {
          let prevState = [...mondayTimes];
          prevState[4] = true;
          setMondayTimes(prevState);
          ReactDOM.findDOMNode(element).style.backgroundColor = '#b2ccf7';
        }
        break;
      case "Monday5":
        if(mondayTimes[5]){
          let prevState = [...mondayTimes];
          prevState[5] = false;
          setMondayTimes(prevState);
          ReactDOM.findDOMNode(element).style.backgroundColor = 'white';
        } else {
          let prevState = [...mondayTimes];
          prevState[5] = true;
          setMondayTimes(prevState);
          ReactDOM.findDOMNode(element).style.backgroundColor = '#b2ccf7';
        }
        break;
      case "Monday6":
        if(mondayTimes[6]){
          let prevState = [...mondayTimes];
          prevState[6] = false;
          setMondayTimes(prevState);
          ReactDOM.findDOMNode(element).style.backgroundColor = 'white';
        } else {
          let prevState = [...mondayTimes];
          prevState[6] = true;
          setMondayTimes(prevState);
          ReactDOM.findDOMNode(element).style.backgroundColor = '#b2ccf7';
        }
        break;
      case "Tuesday0":
        if(tuesdayTimes[0]){
          let prevState = [...tuesdayTimes];
          prevState[0] = false;
          setTuesdayTimes(prevState);
          ReactDOM.findDOMNode(element).style.backgroundColor = 'white';
        } else {
          let prevState = [...tuesdayTimes];
          prevState[0] = true;
          setTuesdayTimes(prevState);
          ReactDOM.findDOMNode(element).style.backgroundColor = '#b2ccf7';
        }
        break;
      case "Tuesday1":
        if(tuesdayTimes[1]){
          let prevState = [...tuesdayTimes];
          prevState[1] = false;
          setTuesdayTimes(prevState);
          ReactDOM.findDOMNode(element).style.backgroundColor = 'white';
        } else {
          let prevState = [...tuesdayTimes];
          prevState[1] = true;
          setTuesdayTimes(prevState);
          ReactDOM.findDOMNode(element).style.backgroundColor = '#b2ccf7';
        }
        break;
      case "Tuesday2":
        if(tuesdayTimes[2]){
          let prevState = [...tuesdayTimes];
          prevState[2] = false;
          setTuesdayTimes(prevState);
          ReactDOM.findDOMNode(element).style.backgroundColor = 'white';
        } else {
          let prevState = [...tuesdayTimes];
          prevState[2] = true;
          setTuesdayTimes(prevState);
          ReactDOM.findDOMNode(element).style.backgroundColor = '#b2ccf7';
        }
        break;
      case "Tuesday3":
        if(tuesdayTimes[3]){
          let prevState = [...tuesdayTimes];
          prevState[3] = false;
          setTuesdayTimes(prevState);
          ReactDOM.findDOMNode(element).style.backgroundColor = 'white';
        } else {
          let prevState = [...tuesdayTimes];
          prevState[3] = true;
          setTuesdayTimes(prevState);
          ReactDOM.findDOMNode(element).style.backgroundColor = '#b2ccf7';
        }
        break;
      case "Tuesday4":
        if(tuesdayTimes[4]){
          let prevState = [...tuesdayTimes];
          prevState[4] = false;
          setTuesdayTimes(prevState);
          ReactDOM.findDOMNode(element).style.backgroundColor = 'white';
        } else {
          let prevState = [...tuesdayTimes];
          prevState[4] = true;
          setTuesdayTimes(prevState);
          ReactDOM.findDOMNode(element).style.backgroundColor = '#b2ccf7';
        }
        break;
      case "Tuesday5":
        if(tuesdayTimes[5]){
          let prevState = [...tuesdayTimes];
          prevState[5] = false;
          setTuesdayTimes(prevState);
          ReactDOM.findDOMNode(element).style.backgroundColor = 'white';
        } else {
          let prevState = [...tuesdayTimes];
          prevState[5] = true;
          setTuesdayTimes(prevState);
          ReactDOM.findDOMNode(element).style.backgroundColor = '#b2ccf7';
        }
        break;
      case "Tuesday6":
        if(tuesdayTimes[6]){
          let prevState = [...tuesdayTimes];
          prevState[6] = false;
          setTuesdayTimes(prevState);
          ReactDOM.findDOMNode(element).style.backgroundColor = 'white';
        } else {
          let prevState = [...tuesdayTimes];
          prevState[6] = true;
          setTuesdayTimes(prevState);
          ReactDOM.findDOMNode(element).style.backgroundColor = '#b2ccf7';
        }
        break;
      case "Wednesday0":
        if(wednesdayTimes[0]){
          let prevState = [...wednesdayTimes];
          prevState[0] = false;
          setWednesdayTimes(prevState);
          ReactDOM.findDOMNode(element).style.backgroundColor = 'white';
        } else {
          let prevState = [...wednesdayTimes];
          prevState[0] = true;
          setWednesdayTimes(prevState);
          ReactDOM.findDOMNode(element).style.backgroundColor = '#b2ccf7';
        }
        break;
      case "Wednesday1":
        if(wednesdayTimes[1]){
          let prevState = [...wednesdayTimes];
          prevState[1] = false;
          setWednesdayTimes(prevState);
          ReactDOM.findDOMNode(element).style.backgroundColor = 'white';
        } else {
          let prevState = [...wednesdayTimes];
          prevState[1] = true;
          setWednesdayTimes(prevState);
          ReactDOM.findDOMNode(element).style.backgroundColor = '#b2ccf7';
        }
        break;
      case "Wednesday2":
        if(wednesdayTimes[2]){
          let prevState = [...wednesdayTimes];
          prevState[2] = false;
          setWednesdayTimes(prevState);
          ReactDOM.findDOMNode(element).style.backgroundColor = 'white';
        } else {
          let prevState = [...wednesdayTimes];
          prevState[2] = true;
          setWednesdayTimes(prevState);
          ReactDOM.findDOMNode(element).style.backgroundColor = '#b2ccf7';
        }
        break;
      case "Wednesday3":
        if(wednesdayTimes[3]){
          let prevState = [...wednesdayTimes];
          prevState[3] = false;
          setWednesdayTimes(prevState);
          ReactDOM.findDOMNode(element).style.backgroundColor = 'white';
        } else {
          let prevState = [...wednesdayTimes];
          prevState[3] = true;
          setWednesdayTimes(prevState);
          ReactDOM.findDOMNode(element).style.backgroundColor = '#b2ccf7';
        }
        break;
      case "Wednesday4":
        if(wednesdayTimes[4]){
          let prevState = [...wednesdayTimes];
          prevState[4] = false;
          setWednesdayTimes(prevState);
          ReactDOM.findDOMNode(element).style.backgroundColor = 'white';
        } else {
          let prevState = [...wednesdayTimes];
          prevState[4] = true;
          setWednesdayTimes(prevState);
          ReactDOM.findDOMNode(element).style.backgroundColor = '#b2ccf7';
        }
        break;
      case "Wednesday5":
        if(wednesdayTimes[5]){
          let prevState = [...wednesdayTimes];
          prevState[5] = false;
          setWednesdayTimes(prevState);
          ReactDOM.findDOMNode(element).style.backgroundColor = 'white';
        } else {
          let prevState = [...wednesdayTimes];
          prevState[5] = true;
          setWednesdayTimes(prevState);
          ReactDOM.findDOMNode(element).style.backgroundColor = '#b2ccf7';
        }
        break;
      case "Wednesday6":
        if(wednesdayTimes[6]){
          let prevState = [...wednesdayTimes];
          prevState[6] = false;
          setWednesdayTimes(prevState);
          ReactDOM.findDOMNode(element).style.backgroundColor = 'white';
        } else {
          let prevState = [...wednesdayTimes];
          prevState[6] = true;
          setWednesdayTimes(prevState);
          ReactDOM.findDOMNode(element).style.backgroundColor = '#b2ccf7';
        }
        break;
      case "Thursday0":
        if(thursdayTimes[0]){
          let prevState = [...thursdayTimes];
          prevState[0] = false;
          setThursdayTimes(prevState);
          ReactDOM.findDOMNode(element).style.backgroundColor = 'white';
        } else {
          let prevState = [...thursdayTimes];
          prevState[0] = true;
          setThursdayTimes(prevState);
          ReactDOM.findDOMNode(element).style.backgroundColor = '#b2ccf7';
        }
        break;
      case "Thursday1":
        if(thursdayTimes[1]){
          let prevState = [...thursdayTimes];
          prevState[1] = false;
          setThursdayTimes(prevState);
          ReactDOM.findDOMNode(element).style.backgroundColor = 'white';
        } else {
          let prevState = [...thursdayTimes];
          prevState[1] = true;
          setThursdayTimes(prevState);
          ReactDOM.findDOMNode(element).style.backgroundColor = '#b2ccf7';
        }
        break;
      case "Thursday2":
        if(thursdayTimes[2]){
          let prevState = [...thursdayTimes];
          prevState[2] = false;
          setThursdayTimes(prevState);
          ReactDOM.findDOMNode(element).style.backgroundColor = 'white';
        } else {
          let prevState = [...thursdayTimes];
          prevState[2] = true;
          setThursdayTimes(prevState);
          ReactDOM.findDOMNode(element).style.backgroundColor = '#b2ccf7';
        }
        break;
      case "Thursday3":
        if(thursdayTimes[3]){
          let prevState = [...thursdayTimes];
          prevState[3] = false;
          setThursdayTimes(prevState);
          ReactDOM.findDOMNode(element).style.backgroundColor = 'white';
        } else {
          let prevState = [...thursdayTimes];
          prevState[3] = true;
          setThursdayTimes(prevState);
          ReactDOM.findDOMNode(element).style.backgroundColor = '#b2ccf7';
        }
        break;
      case "Thursday4":
        if(thursdayTimes[4]){
          let prevState = [...thursdayTimes];
          prevState[4] = false;
          setThursdayTimes(prevState);
          ReactDOM.findDOMNode(element).style.backgroundColor = 'white';
        } else {
          let prevState = [...thursdayTimes];
          prevState[4] = true;
          setThursdayTimes(prevState);
          ReactDOM.findDOMNode(element).style.backgroundColor = '#b2ccf7';
        }
        break;
      case "Thursday5":
        if(thursdayTimes[5]){
          let prevState = [...thursdayTimes];
          prevState[5] = false;
          setThursdayTimes(prevState);
          ReactDOM.findDOMNode(element).style.backgroundColor = 'white';
        } else {
          let prevState = [...thursdayTimes];
          prevState[5] = true;
          setThursdayTimes(prevState);
          ReactDOM.findDOMNode(element).style.backgroundColor = '#b2ccf7';
        }
        break;
      case "Thursday6":
        if(thursdayTimes[6]){
          let prevState = [...thursdayTimes];
          prevState[6] = false;
          setThursdayTimes(prevState);
          ReactDOM.findDOMNode(element).style.backgroundColor = 'white';
        } else {
          let prevState = [...thursdayTimes];
          prevState[6] = true;
          setThursdayTimes(prevState);
          ReactDOM.findDOMNode(element).style.backgroundColor = '#b2ccf7';
        }
        break;
      case "Friday0":
        if(fridayTimes[0]){
          let prevState = [...fridayTimes];
          prevState[0] = false;
          setFridayTimes(prevState);
          ReactDOM.findDOMNode(element).style.backgroundColor = 'white';
        } else {
          let prevState = [...fridayTimes];
          prevState[0] = true;
          setFridayTimes(prevState);
          ReactDOM.findDOMNode(element).style.backgroundColor = '#b2ccf7';
        }
        break;
      case "Friday1":
        if(fridayTimes[1]){
          let prevState = [...fridayTimes];
          prevState[1] = false;
          setFridayTimes(prevState);
          ReactDOM.findDOMNode(element).style.backgroundColor = 'white';
        } else {
          let prevState = [...fridayTimes];
          prevState[1] = true;
          setFridayTimes(prevState);
          ReactDOM.findDOMNode(element).style.backgroundColor = '#b2ccf7';
        }
        break;
      case "Friday2":
        if(fridayTimes[2]){
          let prevState = [...fridayTimes];
          prevState[2] = false;
          setFridayTimes(prevState);
          ReactDOM.findDOMNode(element).style.backgroundColor = 'white';
        } else {
          let prevState = [...fridayTimes];
          prevState[2] = true;
          setFridayTimes(prevState);
          ReactDOM.findDOMNode(element).style.backgroundColor = '#b2ccf7';
        }
        break;
      case "Friday3":
        if(fridayTimes[3]){
          let prevState = [...fridayTimes];
          prevState[3] = false;
          setFridayTimes(prevState);
          ReactDOM.findDOMNode(element).style.backgroundColor = 'white';
        } else {
          let prevState = [...fridayTimes];
          prevState[3] = true;
          setFridayTimes(prevState);
          ReactDOM.findDOMNode(element).style.backgroundColor = '#b2ccf7';
        }
        break;
      case "Friday4":
        if(fridayTimes[4]){
          let prevState = [...fridayTimes];
          prevState[4] = false;
          setFridayTimes(prevState);
          ReactDOM.findDOMNode(element).style.backgroundColor = 'white';
        } else {
          let prevState = [...fridayTimes];
          prevState[4] = true;
          setFridayTimes(prevState);
          ReactDOM.findDOMNode(element).style.backgroundColor = '#b2ccf7';
        }
        break;
      case "Friday5":
        if(fridayTimes[5]){
          let prevState = [...fridayTimes];
          prevState[5] = false;
          setFridayTimes(prevState);
          ReactDOM.findDOMNode(element).style.backgroundColor = 'white';
        } else {
          let prevState = [...fridayTimes];
          prevState[5] = true;
          setFridayTimes(prevState);
          ReactDOM.findDOMNode(element).style.backgroundColor = '#b2ccf7';
        }
        break;
      case "Friday6":
        if(fridayTimes[6]){
          let prevState = [...fridayTimes];
          prevState[6] = false;
          setFridayTimes(prevState);
          ReactDOM.findDOMNode(element).style.backgroundColor = 'white';
        } else {
          let prevState = [...fridayTimes];
          prevState[6] = true;
          setFridayTimes(prevState);
          ReactDOM.findDOMNode(element).style.backgroundColor = '#b2ccf7';
        }
        break;
      }
  }

  const handleChange = e => {
      if (e.target.files.length) {
        setImage({
          preview: URL.createObjectURL(e.target.files[0]),
          raw: e.target.files[0]
        });
      }
    };

    const handleUpload = async e => {
      e.preventDefault();
      const formData = new FormData();
      formData.append("image", image.raw);

      // await fetch("YOUR_URL", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "multipart/form-data"
      //   },
      //   body: formData
      // });
      alert(image.raw);
    };

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

  // function handleCheckboxClick(e, type){
  //   e.preventDefault();
  //
  //   switch (type) {
  //     case 0:
  //       let val0 = messageEnabled;
  //       setMessageEnabled(!val0);
  //       break;
  //     case 1:
  //       let val1 = voiceEnabled;
  //       setVoiceEnabled(!val1);
  //       break;
  //     case 2:
  //       let val2 = videoEnabled;
  //       setVideoEnabled(!val2)
  //       break;
  //     }
  //
  //     console.log("We in here!")
  // }


  function handleMessageCheckboxClick(){
    setMessageEnabled(!messageEnabled)
  }

  function handleVoiceCheckboxClick(){
    setVoiceEnabled(!voiceEnabled)
  }

  function handleVideoCheckboxClick(){
    setVideoEnabled(!videoEnabled)
  }

  function getCheckBoxVals(e) {
    e.preventDefault();
    console.log("Our checkbox val messageEnabled: " + messageEnabled)
    console.log("Our checkbox val voiceEnabled: " + voiceEnabled)
    console.log("Our checkbox val videoEnabled: " + videoEnabled)
  }

  function clickDecreaseRateButtonHandler(e, type){
    e.preventDefault();

    switch (type) {
      case 0:
        if(messagingRate < 1){
          return;
        }
        setMessagingRate(messagingRate - 1);
        break;
      case 1:
        if(voiceRate < 1){
          return;
        }
        setVoiceRate(voiceRate - 1);
        break;
      case 2:
        if(videoRate < 1){
          return;
        }
        setVideoRate(videoRate - 1);
        break;
      }
  }

  function clickIncreaseRateButtonHandler(e, type){
    e.preventDefault();
    switch (type) {
      case 0:
        setMessagingRate(messagingRate + 1);
        break;
      case 1:
        setVoiceRate(voiceRate + 1);
        break;
      case 2:
        setVideoRate(videoRate + 1);
        break;
      }
  }

  function handleSetMediumsPricesTable(e){
    e.preventDefault();
    console.log("clicked submit table information");
    console.log(messagingRate);
    console.log(voiceRate);
    console.log(videoRate);
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

  // const datesList = dates.map((d) =>
  //   <li key={d.id}>
  //   <button type="button" onClick={e => clickDateHandler(e, d.id)}>{d.value}</button>
  //   </li>
  // );

  // const timesList = times.map((t) =>
  //   <li key={t.id}>
  //   <button type="button" onClick={e => clickTimeHandler(e, t.id)}>{t.value}</button>
  //   </li>
  // );

   const printedComputeStatement = <p>
   <span style={importantStyleObj}>{mediums[selectedMedium].value}</span> conversation x <span style={importantStyleObj}>{durations[selectedDuration].value}</span> minutes = <span style={importantStyleObj}>${(selectedMedium + 1) * durations[selectedDuration].value * multiplier}</span>
    </p>;

    const dumbFooter =
    <div>
      <br />
      <br />
      Please remember to save all of your changes!
      <br />
      <br />
    </div>


  // const computeTimeDurationSection = <p>Speaking on
  // <span style={importantStyleObj}>{dates[selectedDate].value}</span> at
  // <span style={importantStyleObj}>{times[selectedTime].value}</span></p>;

  // const computeTimeDurationSection = <p>Hello world</p>

  function handleSaveTempShortBio(e) {
    e.preventDefault();
    setShortBio(tempShortBio);
    // setTempShortBio();
  }

  function handleSaveTempLongBio(e) {
    e.preventDefault();
    setLongBio(tempLongBio);
    // setTempShortBio();
  }

  function handleSaveDateTimes() {
    console.log("Saving date time!");
  }

  return (
    <div className="Home">
      <h1>Create/Edit Profile</h1>

      <div className="bigParagraph">
        Name:
        <br />
        {username}
      </div>
      <br />

      <div className="ourCopiedImageThing">
        <label htmlFor="upload-button">
           {image.preview ? (
             <img src={image.preview} alt="dummy" height="250" />
           ) : (
             <>
               <h5 className="baseball">Click to select new photo</h5>
             </>
           )}
         </label>
          <input
            type="file"
            id="upload-button"
            style={{ display: "none" }}
            onChange={handleChange}
          />
          <br />
          <button onClick={handleUpload}>Save upload</button>
        </div>
        <br />
      <div className="bigParagraph">
        Short Bio
        <br />
        <br />
        {shortBio}
        <br />
        <br />
        <textarea className="bigTextArea" type="textarea" onChange={e => setTempShortBio(e.target.value)} />
        <br />
        <br />
        <button onClick={e => handleSaveTempShortBio(e)}>
          Save Short Bio
        </button>
      </div>
      <br />

      <div className="bigParagraph">
        Long Bio
        <br />
        <br />
        {longBio}
        <br />
        <br />
        <textarea className="bigTextArea" type="textarea" onChange={e => setTempLongBio(e.target.value)} />
        <br />
        <br />
        <button onClick={e => handleSaveTempLongBio(e)}>
          Save Long Bio
        </button>
      </div>
      <br />

      <div>
        <div className="bigParagraph">
          Please select the mediums for communication.
          <br />
          For all mediums messaging (back and forth messaging conversation), voice (computer phone call), or video (computer video call), we will provide you with a temporary account for both you and your customers to speak on, hiding your personal accounts information in an effort to deter any stalkerish activities.
        </div>
          <br />
          <br />
        <form>
          <br/>
          <br/>
            <table>
              <tbody>
              <tr>
                <th>Medium</th>
                <th>Enabled</th>
                <th>Price per minute (US$)</th>
              </tr>
              <tr>
                <td>
                  Messaging
                </td>

                <td>
                  <input
                    type="checkbox"
                    onChange={handleMessageCheckboxClick}
                    checked={messageEnabled}
                  />
                </td>
                <td>
                 <button onClick={e => clickDecreaseRateButtonHandler(e, 0)}>-</button>
                  {" "}{messagingRate}
                 <button onClick={e => clickIncreaseRateButtonHandler(e, 0)}>+</button>
              </td>
              </tr>
              <tr>
                <td>
                   Voice
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      onChange={handleVoiceCheckboxClick}
                      checked={voiceEnabled}
                    />
                  </td>
                  <td>
                  <button onClick={e => clickDecreaseRateButtonHandler(e, 1)}>-</button>
                    {" "}{voiceRate}
                  <button onClick={e => clickIncreaseRateButtonHandler(e, 1)}>+</button>
                </td>
              </tr>
              <tr>
                <td>
                   Video
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      onChange={handleVideoCheckboxClick}
                      checked={videoEnabled}
                    />
                  </td>
                  <td>
                  <button onClick={e => clickDecreaseRateButtonHandler(e, 2)}>-</button>
                    {" "}{videoRate}
                  <button onClick={e => clickIncreaseRateButtonHandler(e, 2)}>+</button>
                </td>
              </tr>
            </tbody>
            </table>
            <br />
              <br />

          <input onClick={e => handleSetMediumsPricesTable(e)} type="button" value="Save mediums" />

          <br />
          <br />

          <div>Time slots available for users to request appointments with you during</div>
            <br />
            <br />
          <div>
            Day of the week
            <br />
            <br />
            <div className="bigParagraph">
            Please select the times that you want customers to be able to request appointments with you during. You will have the ability to deny, accept, or request rescheduling customers once a request comes in to you. By clicking a day, and not just an hour block, customers will request times during that whole day. Keep in mind, the more time you make available, the more likely customers will book appointments.
            </div>
            <br />
            <table>
              <tbody>
              <tr>
                <th id="Monday" onClick={e => handleDayClick(e, "Monday")}>Monday</th>
                <th id="Tuesday"  onClick={e => handleDayClick(e, "Tuesday")}>Tuesday</th>
                <th id="Wednesday"  onClick={e => handleDayClick(e, "Wednesday")}>Wednesday</th>
                <th id="Thursday"  onClick={e => handleDayClick(e, "Thursday")}>Thursday</th>
                <th id="Friday"  onClick={e => handleDayClick(e, "Friday")}>Friday</th>
              </tr>
              <tr>
                <th id="Monday0" onClick={e => handleTimeClick(e, "Monday0")}>8AM-10AM</th>
                <th id="Tuesday0" onClick={e => handleTimeClick(e, "Tuesday0")}>8AM-10AM</th>
                <th id="Wednesday0" onClick={e => handleTimeClick(e, "Wednesday0")}>8AM-10AM</th>
                <th id="Thursday0" onClick={e => handleTimeClick(e, "Thursday0")}>8AM-10AM</th>
                <th id="Friday0" onClick={e => handleTimeClick(e, "Friday0")}>8AM-10AM</th>
              </tr>
              <tr>
                <th id="Monday1" onClick={e => handleTimeClick(e, "Monday1")}>10AM-12PM</th>
                <th id="Tuesday1" onClick={e => handleTimeClick(e, "Tuesday1")}>10AM-12PM</th>
                <th id="Wednesday1" onClick={e => handleTimeClick(e, "Wednesday1")}>10AM-12PM</th>
                <th id="Thursday1" onClick={e => handleTimeClick(e, "Thursday1")}>10AM-12PM</th>
                <th id="Friday1" onClick={e => handleTimeClick(e, "Friday1")}>10AM-12PM</th>
              </tr>
              <tr>
                <th id="Monday2" onClick={e => handleTimeClick(e, "Monday2")}>12PM-2PM</th>
                <th id="Tuesday2" onClick={e => handleTimeClick(e, "Tuesday2")}>12PM-2PM</th>
                <th id="Wednesday2" onClick={e => handleTimeClick(e, "Wednesday2")}>12PM-2PM</th>
                <th id="Thursday2" onClick={e => handleTimeClick(e, "Thursday2")}>12PM-2PM</th>
                <th id="Friday2" onClick={e => handleTimeClick(e, "Friday2")}>12PM-2PM</th>
              </tr>
              <tr>
                <th id="Monday3" onClick={e => handleTimeClick(e, "Monday3")}>2PM-4PM</th>
                <th id="Tuesday3" onClick={e => handleTimeClick(e, "Tuesday3")}>2PM-4PM</th>
                <th id="Wednesday3" onClick={e => handleTimeClick(e, "Wednesday3")}>2PM-4PM</th>
                <th id="Thursday3" onClick={e => handleTimeClick(e, "Thursday3")}>2PM-4PM</th>
                <th id="Friday3" onClick={e => handleTimeClick(e, "Friday3")}>2PM-4PM</th>
              </tr>
              <tr>
                <th id="Monday4" onClick={e => handleTimeClick(e, "Monday4")}>4PM-6PM</th>
                <th id="Tuesday4" onClick={e => handleTimeClick(e, "Tuesday4")}>4PM-6PM</th>
                <th id="Wednesday4" onClick={e => handleTimeClick(e, "Wednesday4")}>4PM-6PM</th>
                <th id="Thursday4" onClick={e => handleTimeClick(e, "Thursday4")}>4PM-6PM</th>
                <th id="Friday4" onClick={e => handleTimeClick(e, "Friday4")}>4PM-6PM</th>
              </tr>
              <tr>
                <th id="Monday5" onClick={e => handleTimeClick(e, "Monday5")}>6PM-8PM</th>
                <th id="Tuesday5" onClick={e => handleTimeClick(e, "Tuesday5")}>6PM-8PM</th>
                <th id="Wednesday5" onClick={e => handleTimeClick(e, "Wednesday5")}>6PM-8PM</th>
                <th id="Thursday5" onClick={e => handleTimeClick(e, "Thursday5")}>6PM-8PM</th>
                <th id="Friday5" onClick={e => handleTimeClick(e, "Friday5")}>6PM-8PM</th>
              </tr>
              <tr>
                <th id="Monday6" onClick={e => handleTimeClick(e, "Monday6")}>8PM-10PM</th>
                <th id="Tuesday6" onClick={e => handleTimeClick(e, "Tuesday6")}>8PM-10PM</th>
                <th id="Wednesday6" onClick={e => handleTimeClick(e, "Wednesday6")}>8PM-10PM</th>
                <th id="Thursday6" onClick={e => handleTimeClick(e, "Thursday6")}>8PM-10PM</th>
                <th id="Friday6" onClick={e => handleTimeClick(e, "Friday6")}>8PM-10PM</th>
              </tr>
            </tbody>
          </table>
            <br />
            <br />
          <button onClick={handleSaveDateTimes}>Save date and times</button>
          </div>

        </form>
        <br />
        <br />

      </div>
      {dumbFooter}
    </div>
  );
}

export default EditProfile;
