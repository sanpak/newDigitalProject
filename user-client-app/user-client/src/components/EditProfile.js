import React, { useState } from 'react';
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


        </form>
        <br />
        <br />

      </div>
      {dumbFooter}
    </div>
  );
}

export default EditProfile;
