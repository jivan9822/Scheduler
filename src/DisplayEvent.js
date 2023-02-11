import app from './App.module.css';

const DisplayEvent = (props) => {
  return (
    <div className={app.eventDisplay}>
      {props.eventArr.map((each, ind) => {
        return (
          <div className={app.eachEve} key={each.id}>
            <h2 style={{ color: '#11000a' }}>
              {each.title}:{' '}
              <span style={{ fontFamily: 'sans-serif', color: 'white' }}>
                {each.msg}
              </span>
            </h2>
            <button
              onClick={props.onDeleteHandler}
              value={ind}
              className={app.btn3}
            >
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default DisplayEvent;
