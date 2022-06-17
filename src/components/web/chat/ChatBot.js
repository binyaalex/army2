import React, { useState } from "react";

import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/system";
import { ScrollingCarousel } from "@trendyol-js/react-carousel";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import CloseIcon from "@mui/icons-material/Close";

import { Checkbox } from "@mui/material";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";

import { Add } from "@mui/icons-material";

import {
  buttonUnstyledClasses,
  TabPanelUnstyled,
  TabsListUnstyled,
  TabsUnstyled,
  TabUnstyled,
  tabUnstyledClasses,
} from "@mui/base";

// CSS
import "./ChatBot.css";

import chat_main_icon from "../../../assets/images/icons/chat.png";

import ChatIcon from '@mui/icons-material/Chat';

import chatSmile from "../../../assets/images/icons/chat_smile.png";
import chatMike from "../../../assets/images/icons/chat_mike.png";
import chatSend from "../../../assets/images/icons/chat_send.png";

import search from "../../../assets/images/icons/search_black.png";
import plus from "../../../assets/images/icons/plus.png";
import menu from "../../../assets/images/icons/menu.png";

import three_dots from "../../../assets/images/icons/chat_three_dots.png";
import back from "../../../assets/images/icons/chat_back.png";

import star from "../../../assets/images/icons/star-icon.png";

import chatbot_image1 from "../../../assets/images/chatBot/chat_bot_image1.jpg";
import chatbot_image2 from "../../../assets/images/chatBot/chat_bot_image2.jpg";
import chatbot_image3 from "../../../assets/images/chatBot/chat_bot_image3.jpg";
import chatbot_image4 from "../../../assets/images/chatBot/chat_bot_image4.jpg";
import chatbot_image5 from "../../../assets/images/chatBot/chat_bot_image5.jpg";
import chatbot_image6 from "../../../assets/images/chatBot/chat_bot_image6.jpg";
import chatbot_image7 from "../../../assets/images/chatBot/chat_bot_image7.jpg";
import chatbot_image8 from "../../../assets/images/chatBot/chat_bot_image8.jpg";
import chatbot_image9 from "../../../assets/images/chatBot/chat_bot_image9.jpg";
import chatbot_image10 from "../../../assets/images/chatBot/chat_bot_image10.jpg";
import chatbot_image11 from "../../../assets/images/chatBot/chat_bot_image11.jpg";
import chatbot_image12 from "../../../assets/images/chatBot/chat_bot_image12.jpg";
import chatbot_image13 from "../../../assets/images/chatBot/chat_bot_image13.jpg";
import chatbot_image14 from "../../../assets/images/chatBot/chat_bot_image14.jpg";
import chatbot_image15 from "../../../assets/images/chatBot/chat_bot_image15.jpg";
import chatbot_image16 from "../../../assets/images/chatBot/chat_bot_image16.jpg";

import chatbot_new_group1 from "../../../assets/images/chatBot/chatBotNewGroup/chatbot_new_group1.jpg";
import chatbot_new_group2 from "../../../assets/images/chatBot/chatBotNewGroup/chatbot_new_group2.jpg";
import chatbot_new_group3 from "../../../assets/images/chatBot/chatBotNewGroup/chatbot_new_group3.jpg";
import chatbot_new_group4 from "../../../assets/images/chatBot/chatBotNewGroup/chatbot_new_group4.jpg";
import chatbot_new_group5 from "../../../assets/images/chatBot/chatBotNewGroup/chatbot_new_group5.jpg";
import chatbot_new_group6 from "../../../assets/images/chatBot/chatBotNewGroup/chatbot_new_group6.jpg";
import chatbot_new_group7 from "../../../assets/images/chatBot/chatBotNewGroup/chatbot_new_group7.jpg";
import chatbot_new_group8 from "../../../assets/images/chatBot/chatBotNewGroup/chatbot_new_group8.jpg";
import chatbot_new_group9 from "../../../assets/images/chatBot/chatBotNewGroup/chatbot_new_group9.jpg";

import { Link } from "react-router-dom";

const blue = {
  50: "#F0F7FF",
  100: "#C2E0FF",
  200: "#80BFFF",
  300: "#66B2FF",
  400: "#3399FF",
  500: "#007FFF",
  600: "#0072E5",
  700: "#0059B2",
  800: "#004C99",
  900: "#003A75",
};

const TabPanel = styled(TabPanelUnstyled)`
  width: 100%;
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
`;
const TabsList = styled(TabsListUnstyled)`
  min-width: 320px;
  background-color: ${blue[500]};
  border-radius: 8px;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: space-between;
`;
const Tabv = styled(TabUnstyled)`
  font-family: IBM Plex Sans, sans-serif;
  color: white;
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: bold;
  background-color: transparent;
  width: 100%;
  padding: 12px 16px;
  margin: 6px 6px;
  border: none;
  border-radius: 5px;
  display: flex;
  justify-content: center;

  &:hover {
    background-color: ${blue[400]};
  }

  &.${buttonUnstyledClasses.focusVisible} {
    color: #fff;
    outline: none;
    background-color: ${blue[200]};
  }

  &.${tabUnstyledClasses.selected} {
    background-color: ${blue[50]};
    color: ${blue[600]};
  }

  &.${buttonUnstyledClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export default function ChatBot(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [selectMemeberlist, setSelectMemeberList] = useState([]);
  const [ischecked, setIsChecked] = useState(false);
  const [createNewGroup, setCreateNewGroup] = useState(false);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    if (setAnchorEl) {
    }
  };

  const NewGroupChatMembers = [
    {
      id: 1,
      image: chatbot_new_group1,
      name: "Kira Noiman",
      detail: "lorem ipsum dolor sir amet",
    },
    {
      id: 2,
      image: chatbot_new_group2,
      name: "Jarvis Pepperspray",
      detail: "lorem ipsum dolor sir amet",
    },
    {
      id: 3,
      image: chatbot_new_group3,
      name: "Sandey Grezman",
      detail: "lorem ipsum dolor sir amet",
    },
    {
      id: 4,
      image: chatbot_new_group4,
      name: "Piff Jenkins",
      detail: "lorem ipsum dolor sir amet",
    },
    {
      id: 5,
      image: chatbot_new_group5,
      name: "Alan Fresco",
      detail: "lorem ipsum dolor sir amet",
    },
    {
      id: 6,
      image: chatbot_new_group6,
      name: "Ron Davis",
      detail: "lorem ipsum dolor sir amet",
    },
    {
      id: 7,
      image: chatbot_new_group7,
      name: "Allen Vaaskin",
      detail: "lorem ipsum dolor sir amet",
    },
    {
      id: 8,
      image: chatbot_new_group8,
      name: "Rodney Artichoke",
      detail: "lorem ipsum dolor sir amet",
    },
    {
      id: 9,
      image: chatbot_new_group9,
      name: "Brandon Guidelines",
      detail: "lorem ipsum dolor sir amet",
    },
  ];

  const chatBotAccordion = [
    {
      title: "How can I choose a doctor?",
      detail:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit lorem ipsum dolor sit amet consectetur adipiscing elitlorem ipsum dolor sit amet consectetur adipiscing elit.",
    },
    {
      title: "How to book an online consultation?",
      detail:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit lorem ipsum dolor sit amet consectetur adipiscing elitlorem ipsum dolor sit amet consectetur adipiscing elit.",
    },
    {
      title: "How to find out the number of procedures?",
      detail:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit lorem ipsum dolor sit amet consectetur adipiscing elitlorem ipsum dolor sit amet consectetur adipiscing elit.",
    },
    {
      title: "How  to pay bills?",
      detail:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit lorem ipsum dolor sit amet consectetur adipiscing elitlorem ipsum dolor sit amet consectetur adipiscing elit.",
    },
    {
      title: "How can I contact the manager?",
      detail:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit lorem ipsum dolor sit amet consectetur adipiscing elitlorem ipsum dolor sit amet consectetur adipiscing elit.",
    },
  ];

  const handleClose = () => {
    setAnchorEl(null);
    //dispatch(getChatValue(false));
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const [isAttachment, setAttachment] = useState(false);
  const [singleChat, setSingleChat] = useState(false);
  const [groupChat, setGroupChat] = useState(false);
  const [tabValue, setTabValue] = useState(1);
  const [newGroup, setNewGroup] = useState(false);

  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  const BotFooter = () => {
    return (
      <>
        <div className="TypingSec">
          <div className="askOurDiv">
            <div className="typingArea">
              <h1 className="askOurBot">Ask our bot anything...</h1>
              <div className="typingCard">
                <div className="typingBoxArea">
                  <img src={chatSmile} className="chatSmile" alt="smile" />
                  <input
                    type={"text"}
                    className="typeSomething"
                    placeholder="Type something…"
                  />
                  <img src={chatMike} className="chatMike" alt="mike" />
                  <img src={chatSend} className="chatSend" alt="send" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };

  const ChatFooter = () => {
    return (
      <>
        <div className="chatFooter">
          <div className="chatFooterArea chat_footer_area">
            <div className="chatFooterDiv">
              <img src={chatMike} className="chatFooterMike" alt="mike" />
              <input
                type={"text"}
                className="chatFooterText"
                placeholder="Type something…"
              />
              <img src={chatSmile} className="chatFooterSmile" alt="smile" />
            </div>
            <img src={chatSend} className="chatFooterSend" alt="send" />
          </div>
        </div>
      </>
    );
  };

  /**
   *
   * @returns render main chat
   */
  const renderMainChatBot = () => {
    return (
      <>
        <div className="chatHead">
          <img src={search} className="chatHeaderSearch" alt="search" />
          <img
            src={plus}
            className="chatHeaderPlus"
            alt="plus"
            onClick={() => setNewGroup(true)}
          />
          <h1 className="chatHeaderText">Chats</h1>
          <img src={menu} className="chatHeaderMenu" alt="menu" />
        </div>
        <TabsUnstyled
          defaultValue={tabValue ? tabValue : 1}
          value={tabValue}
          className="centerTabs"
        >
          <TabsList>
            <Tabv
              onChange={() => {
                setTabValue(0);
              }}
            >
              Group Chats
            </Tabv>
            <Tabv
              onChange={() => {
                setTabValue(1);
              }}
            >
              All messages
            </Tabv>
          </TabsList>
          <TabPanel value={1}>
            <div className="chatingList">
              <div className="chatMainBox">
                <div className="chatMainBox__inner">
                  <div className="chatMainBox__info">
                    <h4 className="chatMainBox__name">Hospital bot</h4>
                    <p className="chatMainBox__text">Pregnancy Care Center</p>
                  </div>
                  <div className="chatMainBox__img">
                    <img
                      src={chatbot_image1}
                      alt=""
                      height={50}
                      width={50}
                      className="img-fluid"
                    />
                  </div>
                </div>
                <span className="chatMainBox__time">18 m</span>
              </div>
              <div
                className="chatMainBox chatMainBox--selected"
                onClick={() => {
                  setTabValue(1);
                  setSingleChat(true);
                }}
              >
                <div className="chatMainBox__inner">
                  <div className="chatMainBox__info">
                    <h4 className="chatMainBox__name">Hanna Smith, MD</h4>
                    <p className="chatMainBox__text">My Gynecologist</p>
                  </div>
                  <div className="chatMainBox__img">
                    <img
                      src={chatbot_image2}
                      alt=""
                      height={50}
                      width={50}
                      className="img-fluid"
                    />
                  </div>
                </div>
                <span className="chatMainBox__time">20 m</span>
              </div>
              <div className="chatMainBox">
                <div className="chatMainBox__inner">
                  <div className="chatMainBox__info">
                    <h4 className="chatMainBox__name">Emily Blant</h4>
                    <p className="chatMainBox__text">My Doula</p>
                  </div>
                  <div className="chatMainBox__img">
                    <img
                      src={chatbot_image3}
                      alt=""
                      height={50}
                      width={50}
                      className="img-fluid"
                    />
                  </div>
                </div>
                <span className="chatMainBox__time">23 m</span>
              </div>
              <div className="chatMainBox">
                <div className="chatMainBox__inner">
                  <div className="chatMainBox__info">
                    <h4 className="chatMainBox__name">Kim Fresco</h4>
                    <p className="chatMainBox__text">Yoga teacher</p>
                  </div>
                  <div className="chatMainBox__img">
                    <img
                      src={chatbot_image4}
                      alt=""
                      height={50}
                      width={50}
                      className="img-fluid"
                    />
                  </div>
                </div>
                <span className="chatMainBox__time">38 m</span>
              </div>
              <div className="chatMainBox">
                <div className="chatMainBox__inner">
                  <div className="chatMainBox__info">
                    <h4 className="chatMainBox__name">Piff Jenkins</h4>
                    <p className="chatMainBox__text">Nutrition consultant</p>
                  </div>
                  <div className="chatMainBox__img">
                    <img
                      src={chatbot_image5}
                      alt=""
                      height={50}
                      width={50}
                      className="img-fluid"
                    />
                  </div>
                </div>
                <span className="chatMainBox__time">1 h</span>
              </div>
            </div>
          </TabPanel>
          <TabPanel value={0}>
            <div className="chatingList">
              <div className="chatMainBox chatMainBox">
                <div className="chatMainBox__inner">
                  <div className="chatMainBox__info">
                    <h4 className="chatMainBox__name">
                      My Doctors Team in hospital
                    </h4>
                    <p className="chatMainBox__text">Ask any question</p>
                  </div>
                  <div className="chatMainBox__img">
                    <img
                      src={chatbot_image6}
                      alt=""
                      height={50}
                      width={50}
                      className="img-fluid"
                    />
                  </div>
                </div>
                <span className="chatMainBox__time">4 m</span>
              </div>
              <div
                className="chatMainBox chatMainBox--selected"
                onClick={() => {
                  setTabValue(0);
                  setGroupChat(true);
                }}
              >
                <div className="chatMainBox__inner">
                  <div className="chatMainBox__info">
                    <h4 className="chatMainBox__name">Chat of expectant mom</h4>
                    <p className="chatMainBox__text">Tips & Facts</p>
                  </div>
                  <div className="chatMainBox__img">
                    <img
                      src={chatbot_image7}
                      alt=""
                      height={50}
                      width={50}
                      className="img-fluid"
                    />
                  </div>
                </div>
                <span className="chatMainBox__time">4 m</span>
              </div>
              <div className="chatMainBox">
                <div className="chatMainBox__inner">
                  <div className="chatMainBox__info">
                    <h4 className="chatMainBox__name">
                      Bot medicine consultant
                    </h4>
                    <p className="chatMainBox__text">Support Chat</p>
                  </div>
                  <div className="chatMainBox__img">
                    <img
                      src={chatbot_image8}
                      alt=""
                      height={50}
                      width={50}
                      className="img-fluid"
                    />
                  </div>
                </div>
                <span className="chatMainBox__time">4 m</span>
              </div>
            </div>
          </TabPanel>
        </TabsUnstyled>
        {BotFooter()}
      </>
    );
  };

  /**
   * render single chat list
   * @returns
   */
  const renderSingleChat = () => {
    return (
      <>
        <Typography className="chatDetailsBlock">
          <div className="singleChatHeader">
            <img
              src={three_dots}
              className="singleChatHeaderThreeDots"
              alt="three_dots"
            />
            <h1 className="singleChatHeaderH1">Hanna Smith</h1>
            <img
              src={chatbot_image2}
              className="singleChatHeaderImg"
              alt="doctor"
            />
            <img
              src={back}
              className="singleChatHeaderBack"
              alt="back"
              onClick={() => {
                setTabValue(1);
                setSingleChat(false);
              }}
            />
          </div>

          <div className="singleChatInner">
            <div className="singleChatMsgDiv">
              <div className="replyDiv">
                <img src={chatbot_image2} className="chatMsgDoctor" alt="" />
                <p className="replyDivP">17 min ago</p>
              </div>
              <div className="replyDiv1">
                <p className="replyDiv1P">Good morning! How do you feel?</p>
              </div>
              <div className="replyDiv2">
                <p className="replyDiv2P">Hello! Ok, sleep well.</p>
              </div>
              <div className="replyDiv3">
                <p className="replyDiv3P">
                  In the morning I felt kicks from the baby. Heartburn torments,
                  what can help?
                </p>
              </div>
              <div className="replyDiv4">
                <img src={chatbot_image2} className="chatMsgDoctor" alt="" />
                <p className="replyDiv4P">5 min ago</p>
              </div>
              <div className="replyDiv5">
                <p className="replyDiv5P">Great,measure activity.</p>
              </div>
              <div className="replyDiv6">
                <p className="replyDiv6P">
                  Now I'll throw you a drug for heartburn
                </p>
              </div>
            </div>

            <div className="singleChatInnerMain">
              <div className="singleChatInnerCard">
                <div className="singleChatInnerCardImgAndText">
                  <img
                    className="singleChatInnerCardImg"
                    src={chatbot_image16}
                    alt="aa"
                  />
                  <div className="singleChatInnerCardTextDiv">
                    <h1 className="singleChatInnerCardTextDivH1">Prilosec</h1>
                    <p className="singleChatInnerCardTextDivP">
                      Heartburn pills
                    </p>
                    <span className="singleChatInnerCardStarDiv">
                      <img
                        className="singleChatInnerCardStarDivImg"
                        src={star}
                        alt="aa"
                      />
                      <p className="singleChatInnerCardStarDivP">
                        4.6 (1435 reviews)
                      </p>
                    </span>
                  </div>
                </div>
                <div className="singleChatInnerBtnDiv">
                  <Link to={"#"} className="singleChatInnerBtnLink">
                    <Add className="singleChatInnerAddBtn" />
                  </Link>
                </div>
              </div>

              <div className="singleChatInnerQA">
                {chatBotAccordion.map((el, i) => {
                  return (
                    <>
                      <Accordion key={i}>
                        <AccordionSummary
                          expandIcon={<Add />}
                          aria-controls="panel1a-content"
                          id="panel1a-header"
                        >
                          <Typography>{el.title}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <Typography>{el.detail}</Typography>
                        </AccordionDetails>
                      </Accordion>
                    </>
                  );
                })}
              </div>
            </div>
          </div>

          {ChatFooter()}
        </Typography>
      </>
    );
  };

  /**
   *
   * @returns render group chat list
   */
  const renderGroupchat = () => {
    return (
      <>
        <Typography className="chatDetailsBlock">
          <div className="groupChatHeader">
            <img
              src={three_dots}
              className="groupChatHeaderThreeDots"
              alt="three_dots"
            />
            <img
              src={plus}
              className="groupChatHeaderPlus"
              alt="plus"
              onClick={() => {
                setSingleChat(false);
                setGroupChat(false);
                setCreateNewGroup(false);
                setNewGroup(true);
              }}
            />
            <h1 className="groupChatHeaderH1">Chat of expectant mom</h1>
            <div className="groupChatHeaderImgGroup">
              <img src={chatbot_image12} className="groupImg4" alt="doctor" />
              <img src={chatbot_image11} className="groupImg3" alt="doctor" />
              <img src={chatbot_image10} className="groupImg2" alt="doctor" />
              <img src={chatbot_image9} className="groupImg1" alt="doctor" />
            </div>
            <img
              src={back}
              className="groupChatHeaderBack"
              alt="back"
              onClick={() => {
                setTabValue(0);
                setGroupChat(false);
              }}
            />
          </div>

          <div className="groupChatInner">
            <div className="groupChatMsgDiv">
              <div className="groupReplyDiv">
                <img
                  src={chatbot_image9}
                  className="groupChatMsgDoctor"
                  alt=""
                />
                <p className="groupReplyDivP">5 min ago</p>
              </div>
              <div className="groupReplyDiv1">
                <p className="groupReplyDiv1P">
                  Girls, advise a yoga course :)
                </p>
              </div>
              <div className="groupReplyDiv2">
                <p className="groupReplyDiv2P">
                  I really want to try, my back hurts a lot.
                </p>
              </div>
              <div className="groupReplyDiv3">
                <img
                  src={chatbot_image13}
                  className="groupChatMsgDoctor"
                  alt=""
                />
                <p className="groupReplyDiv3P">1 min ago</p>
              </div>
              <div className="groupReplyDiv4">
                <p className="groupReplyDiv4P">
                  I think Amoxicillin is better choice{" "}
                </p>
              </div>
              <div className="groupReplyDiv5">
                <img
                  src={chatbot_image14}
                  className="groupChatMsgDoctor"
                  alt=""
                />
                <p className="groupReplyDiv5P">1 min ago</p>
              </div>
              <div className="groupReplyDiv6">
                <p className="groupReplyDiv6P">
                  We suggest paying attention to the courses from our Pregnancy
                  Care Center:
                </p>
              </div>
            </div>
          </div>

          <div className="groupChatInnerMain">
            <div className="groupChatInnerCard">
              <div className="groupChatInnerCardImgAndText">
                <img
                  className="groupChatInnerCardImg"
                  src={chatbot_image7}
                  alt="aa"
                />
                <div className="groupChatInnerCardImgDiv">
                  <h1 className="groupChatInnerCardImgDivH1">-10$</h1>
                </div>
                <div className="groupChatInnerCardTextDiv">
                  <h1 className="groupChatInnerCardTextDivH1">
                    Yoga for pregnant
                  </h1>
                  <p className="groupChatInnerCardTextDivP">
                    Beer Sheva, Trinity Rd, 208
                  </p>
                  <span className="groupChatInnerCardStarDiv">
                    <img
                      className="groupChatInnerCardStarDivImg"
                      src={star}
                      alt="aa"
                    />
                    <p className="groupChatInnerCardStarDivP">
                      4.6 (1435 reviews)
                    </p>
                  </span>
                </div>
              </div>
              <div className="groupChatInnerBtnDiv">
                <Link to={"/pregnancy"} className="groupChatInnerBtnLink">
                  <Add className="groupChatInnerAddBtn" />
                </Link>
              </div>
            </div>
          </div>
        </Typography>
        {ChatFooter()}
      </>
    );
  };

  const renderNewGroupchat = () => {
    return (
      <>
        <Typography>
          <div className="newGroupHeader">
            <img
              src={three_dots}
              className="newGroupHeaderThreeDots"
              alt="three_dots"
            />
            <h1 className="newGroupHeaderH1">New Group Member</h1>
            <img
              src={back}
              className="newGroupHeaderBack"
              alt="back"
              onClick={() => {
                setNewGroup(false);
              }}
            />
          </div>
          <div className="newGroupSearch">
            <div className="newGroupSearchDiv">
              <input
                type={"text"}
                className="newGroupSearchDivText"
                placeholder="Search by name @username or email"
              />
              <SearchOutlinedIcon className="newGroupSearchIcon" />
            </div>
          </div>
          <div className="addedUserBlock">
            <ScrollingCarousel>
              {selectMemeberlist.length > 0 &&
                selectMemeberlist.map((memeber) => {
                  return (
                    <div className="addedUser">
                      <img src={memeber.image} alt="" height={30} width={30} />
                      <span
                        onClick={() => {
                          //Remove group member
                          let removeValue = selectMemeberlist.filter(
                            (x) => x.id !== memeber.id
                          );
                          setSelectMemeberList(removeValue);
                        }}
                      >
                        <CloseIcon />
                      </span>
                    </div>
                  );
                })}
            </ScrollingCarousel>
          </div>
          <div className="chatingList chatingList--add">
            {NewGroupChatMembers.length > 0 &&
              NewGroupChatMembers.map((item) => {
                return (
                  <div className="chatMainBox chatMainBox">
                    <div className="chatMainBox__inner">
                      <div className="chatMainBox__img">
                        <img
                          src={item.image}
                          alt=""
                          height={50}
                          width={50}
                          className="img-fluid"
                        />
                      </div>
                      <div className="chatMainBox__info">
                        <h4 className="chatMainBox__name">{item.name}</h4>
                        <p className="chatMainBox__text">
                          lorem ipsum dolor sir amet
                        </p>
                      </div>
                    </div>
                    <span className="summaryCard-ListItemscheck">
                      <Checkbox
                        className="circleCheckbox"
                        {...label}
                        onClick={(e) => {
                          setIsChecked(e.target.checked);
                          let temp = [];
                          if (e.target.checked) {
                            temp.push(item);
                            setSelectMemeberList([...selectMemeberlist, item]);
                          } else {
                            let removeValue = selectMemeberlist.filter(
                              (x) => x.id !== item.id
                            );
                            setSelectMemeberList(removeValue);
                          }
                        }}
                      />
                    </span>
                  </div>
                );
              })}
          </div>
          <div className="newGroupFooter">
            <div className="newGroupFooterBoxBtn">
              <div className="newGroupFooterBoxBtnArea">
                {ischecked && selectMemeberlist.length > 0 ? (
                  <>
                    <Link
                      to={"#"}
                      className="newGroupFooterSaveBtn"
                      onClick={() => {
                        setSingleChat(false);
                        setGroupChat(false);
                        setNewGroup(false);
                        setCreateNewGroup(true);
                      }}
                    >
                      Save
                    </Link>
                  </>
                ) : (
                  <>
                    <Link to={"#"} className="newGroupFooterSaveBtn">
                      Save
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        </Typography>
      </>
    );
  };

  const renderCreateNewGroup = () => {
    return (
      <>
        <Typography>
          <div className="createNewGroupHeader">
            <img
              src={three_dots}
              className="createNewGroupHeaderThreeDots"
              alt="three_dots"
            />
            <h1 className="createNewGroupHeaderH1">New Group</h1>
            <img
              src={back}
              className="createNewGroupHeaderBack"
              alt="back"
              onClick={() => {
                setNewGroup(true);
                setCreateNewGroup(false);
              }}
            />
          </div>
          <div className="createNewGroupInner">
            <div className="createNewGroupInnerDiv">
              <img
                src={chatbot_image15}
                className="createNewGroupInnerDivImg"
              />
              <input
                type={"text"}
                className="createNewGroupInnerDivText"
                placeholder="Group Name"
              />
            </div>
          </div>
          <div className="createNewGroupMember">
            <div className="addedUserBlock">
              <ScrollingCarousel>
                {selectMemeberlist.length > 0 &&
                  selectMemeberlist.map((memeber) => {
                    return (
                      <div className="addedUser">
                        <img
                          src={memeber.image}
                          alt=""
                          height={30}
                          width={30}
                        />
                        <span
                          onClick={() => {
                            let removeValue = selectMemeberlist.filter(
                              (x) => x.id !== memeber.id
                            );
                            setSelectMemeberList(removeValue);
                          }}
                        >
                          <CloseIcon />
                        </span>
                      </div>
                    );
                  })}
              </ScrollingCarousel>
            </div>
            <div className="createNewGroupFooter">
              <div className="createNewGroupFooterBoxBtn">
                <div className="createNewGroupFooterBoxBtnArea">
                  <Link to={"#"} className="createNewGroupFooterSaveBtn">
                    Create new group
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Typography>
      </>
    );
  };
  return (
    <>
      <div onClick={handleClick} className="mainChat">
        {/* <img className="chat" src={chat_main_icon} /> */}
        <ChatIcon />
      </div>
      <div className="main_chat_section">
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorReference="anchorPosition"
          anchorPosition={{ top: 200, left: 400 }}
          anchorOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          className="chatModel"
        >
          <div
            className={
              !singleChat && !groupChat && !newGroup && !createNewGroup
                ? "main_chat"
                : ""
            }
          >
            <Typography sx={{ p: 2 }}>
              <span className="closeChatBtn" onClick={() => setAnchorEl(null)}>
                <CloseIcon />
              </span>
              {/*** Main Popup */}
              {!singleChat && !groupChat && !newGroup && !createNewGroup
                ? renderMainChatBot()
                : ""}

              {tabValue == 1 && singleChat ? renderSingleChat() : ""}
              {tabValue == 0 && groupChat ? renderGroupchat() : ""}
              {newGroup ? renderNewGroupchat() : ""}
              {createNewGroup ? renderCreateNewGroup() : ""}
            </Typography>
          </div>
        </Popover>
      </div>
    </>
  );
}
