import "./Trend.scss";
import trendimg from "./images/graph.png"

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
    num:" 3h 8m",
  },
  {
    name: "Resolution within SLA",
    num: "94%",
  },
];

function Trend() {
  return (
    <>
      <div className="Trend_box">
        <div className="trend_left-boxs">
          <div className="trend_text">
            <p>
              <b>Today’s trends</b> <br />
              as of 25 May 2019, 09:41 PM
            </p>
            <div style={{ display: "flex", gap: "20px" }}>
              <p>Today</p>
              <p>Yesterday</p>
            </div>
          </div>
          <img src={trendimg} alt="img" />
        </div>

        <div className="trend_right-boxs">
          {dataTrend.map((el) => (
            <div className="trend_right-box">
              <p>{el.name}</p>
              <p>{el.num}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
export default Trend;
