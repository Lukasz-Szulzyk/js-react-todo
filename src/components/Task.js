import React from 'react';

const Task = (props) => {

  const style = {
    color: 'red',
  }

  const { text, date, id, active, important, finishDate } = props.task;

  if (active) {
    return (
      <div>
        <p>
          <strong style={important ? style : null}>{text}</strong> - deadline <span>{date} </span>
          <button onClick={() => props.change(id)}>Done</button>
          <button onClick={() => props.delete(id)}>X</button>
        </p>

      </div>
    );
  } else {

    const finish = new Date(finishDate).toLocaleString()
    return (
      <div>

        <p>
          <strong>{text}</strong><em> (deadline {date})</em><br />
          - done on <span> {finish}</span>

          <button onClick={() => props.delete(id)}>X</button>
        </p>
      </div>
    )
  }
}

export default Task;