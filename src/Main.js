import cron from 'cron';
import mainCss from './Main.module.css';
import { useState } from 'react';
import SelectWeek from './SelectDay';
const options = {
  '': 'AllDay',
  '1-5': 'Monday to Friday',
  '6,0': 'WeekEnds',
  1: 'Monday',
  2: 'Tuesday',
  3: 'Wednesday',
  4: 'Thursday',
  5: 'Friday',
  6: 'Saturday',
  0: 'Sunday',
};
function Main(props) {
  const [day, setDay] = useState('');
  const [time, setTime] = useState({
    title: '',
    hour: '',
    minute: '',
  });
  const onChangeHandler = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setTime((old) => {
      return {
        ...old,
        [name]: value,
      };
    });
  };
  const onClickHandler = (e) => {
    e.preventDefault();
    const hour = time.hour;
    const minute = time.minute;
    const msg = `${options[day]} hour: ${hour} and minute: ${minute}`;
    const title = time.title;

    const task = new cron.CronJob(
      `${minute} ${hour} * * ${day}`,
      function () {
        console.log(`Running task today at ${hour}:${minute} PM...`);
        props.setTriggeredEvent(title);
        props.setAlarm(true);
      },
      null,
      true
    );
    props.getEvent({ id: Date.now(), msg, task, title });
    props.setEvent((old) => !old);
  };
  return (
    <div>
      <form className={mainCss.mainDiv}>
        <div>
          <div className={mainCss.inputSubDiv}>
            <label htmlFor='title'>Title: </label>
            <input
              onChange={onChangeHandler}
              type='text'
              id='title'
              name='title'
              required
              value={time.title}
            />
          </div>
          <div className={mainCss.inputSubDiv}>
            <label>Day: </label>
            <SelectWeek setDay={setDay} />
          </div>
          <div className={mainCss.inputSubDiv}>
            <label htmlFor='hour'>Hour (0-23):</label>
            <input
              onChange={onChangeHandler}
              type='number'
              id='hour'
              name='hour'
              min='0'
              max='23'
              value={time.hour}
              required
            />
          </div>
          <div className={mainCss.inputSubDiv}>
            <label htmlFor='minute'>Minute (0-59):</label>
            <input
              onChange={onChangeHandler}
              type='number'
              id='minute'
              name='minute'
              min='0'
              max='59'
              required
            />
          </div>
        </div>

        <input
          className={mainCss.btn}
          onClick={onClickHandler}
          type='submit'
          value='Add Event'
        />
      </form>
    </div>
  );
}

export default Main;
