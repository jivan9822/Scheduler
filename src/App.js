import app from './App.module.css';
import Main from './Main';
import { useState } from 'react';
import DisplayEvent from './DisplayEvent';
import PopUpAlert from './DisplayAlarm';

function App() {
  const [eventArr, setEventArr] = useState([]);
  const [event, setEvent] = useState(true);
  const [alarm, setAlarm] = useState(false);
  const [triggeredEvent, setTriggeredEvent] = useState('');
  const onClickHandler = (e) => {
    e.preventDefault();
    setEvent(!event);
  };

  const getEvent = (event) => {
    setEventArr((old) => [...old, event]);
  };

  const onDeleteHandler = (e) => {
    e.preventDefault();
    const id = e.target.value;
    eventArr[id].task.stop();
    console.log(eventArr);
    setEventArr(eventArr.filter((each, ind) => ind !== +id));
  };
  console.log(eventArr);
  return (
    <div>
      <div className={alarm ? app.hide : app.App}>
        {event ? (
          <button onClick={onClickHandler} className={app.btn}>
            Add Event
          </button>
        ) : (
          <div>
            <Main
              setTriggeredEvent={setTriggeredEvent}
              getEvent={getEvent}
              setAlarm={setAlarm}
              setEvent={setEvent}
            />
            <button onClick={onClickHandler} className={app.btn2}>
              Close
            </button>
          </div>
        )}
        <DisplayEvent eventArr={eventArr} onDeleteHandler={onDeleteHandler} />
      </div>
      {alarm && <PopUpAlert name={triggeredEvent} setAlarm={setAlarm} />}
    </div>
  );
}

export default App;
