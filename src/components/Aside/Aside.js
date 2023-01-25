import "./Asside.scss";
import imgs from "./images/Vector.png"
import imgdash from "./images/logo.png"
const dataAside = [
  {
    img:"./images/Vector.png",
    linkName: "Overview",
  },
  {
    img:"./images/Vector.png",
    linkName: "Overview",
  },
  {
    img:"./images/Vector.png",
    linkName: "Overview",
  },
  {
    img:"./images/Vector.png",
    linkName: "Overview",
  },
  {
    img:"./images/Vector.png",
    linkName: "Overview",
  },
  {
    img:"./images/Vector.png",
    linkName: "Overview",
  },
  {
    img:"./images/Vector.png",
    linkName: "Overview",
  },
];

const Aside = () => {
  return (
    <>
      <ul className="list_aside">
      <li className="item_aside" >
      <img src={imgdash} alt="img" />
       <p>Dashboard Kit</p> 
       </li>
        {dataAside.map((el) => (
          <li className="item_aside">
            <img src={imgs} alt="img" />
            {/* <img src={pic} /> */}
            <p> {el.linkName}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Aside;
