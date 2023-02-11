import alarm from './Alarm.module.css';

const PopUpAlert = (props) => {
  const onClickHandler = (e) => {
    e.preventDefault();
    props.setAlarm((old) => !old);
  };
  return (
    <div className={alarm.mainDiv}>
      <p className={alarm.title}>{props.name}</p>
      <button className={alarm.btn4} onClick={onClickHandler}>
        Stop
      </button>
    </div>
  );
};

export default PopUpAlert;
