import "./Navigator.css";
import { Link as ScrollLink } from "react-scroll";
import ChatBot from "../../chat/ChatBot";

const Navigator = ({navigatorArr}) => {
  return (
    <div className="navigator">
      {
        navigatorArr.map((el, i) => {
          return (
            <ScrollLink
              offset={-50}
              duration={50}
              smooth
              spy
              to={el.to}
              className={el.to}
              key={i}
            >
              <img src={el.imgNotActive} className="notActiveIcon" />
              <img src={el.imgActive} className="activeIcon" />
              <div className="hoverText">{el.hoverText}</div>
            </ScrollLink>
          )
        })
      }
{/*      <ScrollLink
        offset={-50}
        duration={50}
        className="gym"
        smooth
        spy
        to="gym"
      >
        <img src={gymNotActive} className="notActiveIcon" />
        <img src={gymActive} className="activeIcon" />
        <div className="hoverText">כושר</div>
      </ScrollLink>
      <ScrollLink
        offset={-50}
        duration={50}
        className="pool"
        smooth
        spy
        to="pool"
      >
        <img src={poolNotActive} className="notActiveIcon" />
        <img src={poolActive} className="activeIcon" />
        <div className="hoverText">בריכה</div>
      </ScrollLink>
      <ScrollLink
        offset={-50}
        duration={50}
        className="library"
        smooth
        spy
        to="library"
      >
        <img src={libraryNotActive} className="notActiveIcon" />
        <img src={libraryActive} className="activeIcon" />
        <div className="hoverText">ספרייה</div>
      </ScrollLink>*/}
      <ChatBot />
    </div>
  );
};
export default Navigator;
