import Aside from "./components/Aside/Aside";
import Navbar from "./components/Navbar/Navbar";
// import {Header} from "./components/Header/Header"
import Header from "./components/Header/Header";
import Trend from "./components/Trends/Trend";
import Task from "./components/Trends2/Task";
import "./app.scss";

import Tasks from "./components/Tasks/Tasks";
function App() {
  return (
    <div className="App">
      <>
        <div className="box">
          <div className="box_left">
            <Aside />
          </div>
          <div className="box_right">
            <Navbar />
            <Header />
            <Trend />
            <div className="task-row">
              <div className="task-left">
                <Task />
              </div>
              <div className="task-right">
              <Tasks />
              </div>
             
            </div>
          </div>
        </div>
      </>
    </div>
  );
}

export default App;
