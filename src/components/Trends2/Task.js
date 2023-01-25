import "./Task.scss";

const dataTrend = [
  {
    name: "Resolved",
    num: 449,
  },
  {
    name: "Received",
    num: 426,
  },
  {
    name: "Average first response time",
    num: 43,
  },
  {
    name: " Average response time",
    num: " 3h 8m",
  },
  {
    name: "Resolution within SLA",
    num: "94%",
  },
];
const Task = () => {
let url ="#"
  return (
    <div className="task-boxs">
      <div className="task_left-boxs">

      <div className="task_left-header">
    <div >
    <h3>Unresolved tickets</h3>
        <p style={{color:"grey"}}>Group:<b>Support</b></p>
    </div>

        <a href={url} >View details</a>
      </div>
        {dataTrend.map((el) => (
          <div className="task_left-box">
            <p>{el.name}</p>
            <p>{el.num}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Task;
