import React from "react";

import Header from "../repeat/Header";

import "./RecreationAndFitness.css";

import { Link as ScrollLink } from "react-scroll";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

import Accordion from "react-bootstrap/Accordion";

import { Link } from "react-router-dom";

import gymNotActive from "../../../assets/images/icon/gym-not-active.svg";
import libraryNotActive from "../../../assets/images/icon/library-not-active.svg";
import poolNotActive from "../../../assets/images/icon/pool-not-active.svg";

import gymActive from "../../../assets/images/icon/gym-active.svg";
import libraryActive from "../../../assets/images/icon/library-active.svg";
import poolActive from "../../../assets/images/icon/pool-active.svg";

import library1 from "../../../assets/images/recreationAndFitness/library/library1.jpg";
import library2 from "../../../assets/images/recreationAndFitness/library/library2.jpg";
import library3 from "../../../assets/images/recreationAndFitness/library/library3.jpg";
import library4 from "../../../assets/images/recreationAndFitness/library/library4.jpg";
import library5 from "../../../assets/images/recreationAndFitness/library/library5.jpg";
import library6 from "../../../assets/images/recreationAndFitness/library/library6.jpg";
import library7 from "../../../assets/images/recreationAndFitness/library/library7.jpg";
import library8 from "../../../assets/images/recreationAndFitness/library/library8.jpg";
import library9 from "../../../assets/images/recreationAndFitness/library/library9.jpg";
import library10 from "../../../assets/images/recreationAndFitness/library/library10.jpg";

import textUnderlineBlue from "../../../assets/images/icon/title-underline-blue.svg";
import textUnderlineBlack from "../../../assets/images/icon/title-underline-black.svg";

import detailsTime from "../../../assets/images/icon/time.svg";
import detailsPhone from "../../../assets/images/icon/phone.svg";

import pool1 from "../../../assets/images/recreationAndFitness/pool/pool1.jpg";
import pool2 from "../../../assets/images/recreationAndFitness/pool/pool2.jpg";
import pool3 from "../../../assets/images/recreationAndFitness/pool/pool3.jpg";

import girl from "../../../assets/images/icon/girl.svg";
import boy from "../../../assets/images/icon/boy.svg";

import gym1 from "../../../assets/images/recreationAndFitness/gym/gym/gym1.jpg";
import gym2 from "../../../assets/images/recreationAndFitness/gym/gym/gym2.jpg";
import gym3 from "../../../assets/images/recreationAndFitness/gym/gym/gym3.jpg";
import gym4 from "../../../assets/images/recreationAndFitness/gym/gym/gym4.jpg";
import gym5 from "../../../assets/images/recreationAndFitness/gym/gym/gym5.jpg";
import gym6 from "../../../assets/images/recreationAndFitness/gym/gym/gym6.jpg";
import gym7 from "../../../assets/images/recreationAndFitness/gym/gym/gym7.jpg";
import gym8 from "../../../assets/images/recreationAndFitness/gym/gym/gym8.jpg";
import gym9 from "../../../assets/images/recreationAndFitness/gym/gym/gym9.jpg";
import gym10 from "../../../assets/images/recreationAndFitness/gym/gym/gym10.jpg";
import gym11 from "../../../assets/images/recreationAndFitness/gym/gym/gym11.jpg";

import location from "../../../assets/images/icon/location.svg";
import register from "../../../assets/images/icon/register.svg";

import studioRooms1 from "../../../assets/images/recreationAndFitness/gym/studioRooms/studioRooms1.jpg";
import studioRooms2 from "../../../assets/images/recreationAndFitness/gym/studioRooms/studioRooms2.jpg";
import studioRooms3 from "../../../assets/images/recreationAndFitness/gym/studioRooms/studioRooms3.jpg";
import studioRooms4 from "../../../assets/images/recreationAndFitness/gym/studioRooms/studioRooms4.jpg";
import studioRooms5 from "../../../assets/images/recreationAndFitness/gym/studioRooms/studioRooms5.jpg";

import glove from "../../../assets/images/icon/glove.svg";
import weights from "../../../assets/images/icon/weights.svg";

import hallAndSports1 from "../../../assets/images/recreationAndFitness/gym/hallAndSports/hallAndSports1.jpg";
import hallAndSports2 from "../../../assets/images/recreationAndFitness/gym/hallAndSports/hallAndSports2.jpg";
import hallAndSports3 from "../../../assets/images/recreationAndFitness/gym/hallAndSports/hallAndSports3.jpg";
import hallAndSports4 from "../../../assets/images/recreationAndFitness/gym/hallAndSports/hallAndSports4.jpg";
import hallAndSports5 from "../../../assets/images/recreationAndFitness/gym/hallAndSports/hallAndSports5.jpg";
import hallAndSports6 from "../../../assets/images/recreationAndFitness/gym/hallAndSports/hallAndSports6.jpg";
import hallAndSports7 from "../../../assets/images/recreationAndFitness/gym/hallAndSports/hallAndSports7.jpg";

import fitnessGardens1 from "../../../assets/images/recreationAndFitness/gym/fitnessGardens/fitnessGardens1.jpg";
import fitnessGardens2 from "../../../assets/images/recreationAndFitness/gym/fitnessGardens/fitnessGardens2.jpg";
import fitnessGardens3 from "../../../assets/images/recreationAndFitness/gym/fitnessGardens/fitnessGardens3.jpg";
import fitnessGardens4 from "../../../assets/images/recreationAndFitness/gym/fitnessGardens/fitnessGardens4.jpg";

import close from "../../../assets/images/icon/close.svg";
import towel from "../../../assets/images/icon/towel.svg";
import doctor from "../../../assets/images/icon/doctor.svg";

const RecreationAndFitness = () => {
  return (
    <>
      <div className="page recreationAndFitnessPage">
        <Header
          header="פנאי וכושר"
          text="ישנם אטרקציות מגוונות עבור שעות הפנאי שלכם, שמרו על כושרכם הפיזי והמנטלי!"
        />

        <div className="content">
          <div className="navigator">
            <ScrollLink className="gym" smooth spy to="gym">
              <img src={gymNotActive} className="notActiveIcon" />
              <img src={gymActive} className="activeIcon" />
              <div className="hover-text">כושר</div>
            </ScrollLink>
            <ScrollLink className="pool" smooth spy to="pool">
              <img src={libraryNotActive} className="notActiveIcon" />
              <img src={libraryActive} className="activeIcon" />
              <div className="hover-text">בריכה</div>
            </ScrollLink>
            <ScrollLink className="library" smooth spy to="library">
              <img src={poolNotActive} className="notActiveIcon" />
              <img src={poolActive} className="activeIcon" />
              <div className="hover-text">ספרייה</div>
            </ScrollLink>
          </div>
          <div className="textArea">
            <div id="gym" className="gymText">
              <div className="titleDiv">
                <div className="title">כושר</div>
                <img className="titleUnderline" src={textUnderlineBlue} />
              </div>
              <div className="accordionDiv">
                <Accordion>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>חדר כושר</Accordion.Header>
                    <Accordion.Body>
                      <div className="gymContent">
                        <div className="gymImageAndText">
                          <div className="imageDisplay">
                            <Swiper
                              spaceBetween={30}
                              pagination={{
                                clickable: true,
                              }}
                              modules={[Pagination]}
                              className="mySwiper"
                            >
                              <SwiperSlide>
                                <img src={gym1} className="gymSwiperImg" />
                              </SwiperSlide>
                              <SwiperSlide>
                                <img src={gym2} className="gymSwiperImg" />
                              </SwiperSlide>
                              <SwiperSlide>
                                <img src={gym3} className="gymSwiperImg" />
                              </SwiperSlide>
                              <SwiperSlide>
                                <img src={gym4} className="gymSwiperImg" />
                              </SwiperSlide>
                              <SwiperSlide>
                                <img src={gym5} className="gymSwiperImg" />
                              </SwiperSlide>
                              <SwiperSlide>
                                <img src={gym6} className="gymSwiperImg" />
                              </SwiperSlide>
                              <SwiperSlide>
                                <img src={gym7} className="gymSwiperImg" />
                              </SwiperSlide>
                              <SwiperSlide>
                                <img src={gym8} className="gymSwiperImg" />
                              </SwiperSlide>
                              <SwiperSlide>
                                <img src={gym9} className="gymSwiperImg" />
                              </SwiperSlide>
                              <SwiperSlide>
                                <img src={gym10} className="gymSwiperImg" />
                              </SwiperSlide>
                              <SwiperSlide>
                                <img src={gym11} className="gymSwiperImg" />
                              </SwiperSlide>
                            </Swiper>
                          </div>
                          <div className="details">
                            <div className="locationDiv">
                              <img
                                src={location}
                                className="icon"
                                alt="location"
                              />
                              קריית הספורט, קומה 1
                            </div>
                            <div className="timeDiv">
                              <img
                                src={detailsTime}
                                className="icon"
                                alt="time"
                              />
                              <div className="openingHours">
                                <div className="hoursOne">
                                  <div class="emphasis">א׳ - ד׳: </div>
                                  <div> 22:00 - 07:00 </div>
                                </div>
                                <div className="hoursTwo">
                                  <div class="emphasis">ה׳: </div>
                                  <div>10:30 - 07:00</div>
                                </div>
                                <div className="hoursThree">
                                  <div class="emphasis">ו׳: </div>
                                  <div>13:00 - 07:00</div>
                                </div>
                                <div class="note">bsd</div>
                              </div>
                            </div>
                            <div className="registerDiv">
                              <img
                                src={register}
                                className="icon"
                                alt="register"
                              />
                              <div className="openingHours">
                                <div>
                                  <div class="emphasis">א׳ - ד׳: </div>
                                  <div>22:00 - 07:00</div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="date">מתוקף ל-9/12/1911</div>
                          <div className="gymFacility">
                            <div className="bhdSchedule">
                              <div className="titleDiv">
                                <div className="title"> שיבוצי שעות</div>
                                <img
                                  className="titleUnderline"
                                  src={textUnderlineBlack}
                                />
                              </div>
                              <div className="coronaWarn">
                                <div className="warnSign">!</div>
                                <div className="warnBody">
                                  {" "}
                                  בתקופת הקורונה, הכניסה לחד"כ היא על בסיס
                                  קפסולות. למידע, פנו למפקדיכם!{" "}
                                </div>
                              </div>
                              <div className="emphasis">
                                יש להרשם מראש אצל מדא"ג הבה"ד בכדי להכנס לחד"כ
                              </div>
                            </div>
                            <div className="prepNote">
                              <div className="titleDiv">
                                <div className="title">הגיעו מוכנים</div>
                                <img
                                  className="titleUnderline"
                                  src={textUnderlineBlack}
                                />
                              </div>
                              <div className="notes">
                                <div className="contentTopped">
                                  <img src={register} className="icon" alt="register" /> 
                                  הכניסה לחדר הכושר מותנת בהצגת 
                                  <div class="emphasis"> מנוי וחוגר בלבד </div> 
                                </div>
                                <div className="contentTopped">
                                  <img src={close} className="icon" alt="close" />
                                  <div class="emphasis">אין להכנס </div>
                                  לחדר הכושר 
                                  <div class="emphasis"> ללא מדריך </div>
                                  נוכח או 
                                  <div class="emphasis"> לאחר שעות הפעילות</div>
                                </div>
                                <div className="contentTopped">
                               <img src={towel} class="icon" alt="towel" />
                                כל מתאמן מחויב להגיע
                                <br /> על 
                                 <div class="emphasis"> מדי ספורט תקניים</div>
                                  <br /> ועם 
                                  <div class="emphasis"> מגבת אישית</div>
                                </div>
                                <div className="contentTopped">
                                <img src={doctor} class="icon" alt="doctor" />
                                  כל מתאמן 
                                  <div class="emphasis"> מעל גיל 23 </div>
                                   או מתחת 
                                   <div class="emphasis"> לפרופיל 72 </div>
                                    נדרש 
                                    <div class="emphasis"> לאישור רופא </div>
                                     המאשר לו פעילות בחד”כ.
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>חדרי סטודיו</Accordion.Header>
                    <Accordion.Body>
                      <div className="studioRoomsContent">
                        <div className="imageDisplay">
                          <Swiper
                            spaceBetween={30}
                            pagination={{
                              clickable: true,
                            }}
                            modules={[Pagination]}
                            className="mySwiper"
                          >
                            <SwiperSlide>
                              <img
                                src={studioRooms1}
                                className="studioRoomsSwiperImg"
                              />
                            </SwiperSlide>
                            <SwiperSlide>
                              <img
                                src={studioRooms2}
                                className="studioRoomsSwiperImg"
                              />
                            </SwiperSlide>
                            <SwiperSlide>
                              <img
                                src={studioRooms3}
                                className="studioRoomsSwiperImg"
                              />
                            </SwiperSlide>
                            <SwiperSlide>
                              <img
                                src={studioRooms4}
                                className="studioRoomsSwiperImg"
                              />
                            </SwiperSlide>
                            <SwiperSlide>
                              <img
                                src={studioRooms5}
                                className="studioRoomsSwiperImg"
                              />
                            </SwiperSlide>
                          </Swiper>
                        </div>
                        <div className="details">
                          <div className="flexible">
                            <div className="firstCentered">
                              <img src={glove} class="icon" />
                              <div>
                                <b>אימוני אירובי:</b>
                                <div className="openingHours">
                                  <div className="hours">
                                    <div class="emphasis">א׳: </div>
                                    <div>22:00 - 07:00</div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="firstCentered">
                              <img src={weights} class="icon" />
                              <div>
                                <b>אימוני עיצוב וחיטוב:</b>
                                <div className="openingHours">
                                  <div className="hours">
                                    <div class="emphasis">א׳: </div>
                                    <div>22:00 - 07:00</div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="altColor">
                            <div>
                              3 חדרי סטודיו שונים עם
                              <div class="emphasis"> מראות ומערכת שמע</div>.
                            </div>
                            <br />
                            <div>
                              אחד מחדרי הסטודיו מותאם
                              <div class="emphasis"> לשיעורי ספינינג </div>
                              הכולל מספר רב של אופני ספינינג.
                            </div>
                            <div className="flexEnd">
                              <img
                                src={detailsPhone}
                                className="icon"
                                alt="phone"
                              />
                              <div>
                                אימוני סטודיו זמינים לכל הבהדים בתאום מול ירין:
                                <Link class="link" to={"tel:97254-467-5273"}>
                                  {" "}
                                  <div class="text">054-467-5273</div>{" "}
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="2">
                    <Accordion.Header>אולם ומגרשי ספורט</Accordion.Header>
                    <Accordion.Body>
                      <div className="hallAndSportsContent">
                        <div className="imageDisplay">
                          <Swiper
                            spaceBetween={30}
                            pagination={{
                              clickable: true,
                            }}
                            modules={[Pagination]}
                            className="mySwiper"
                          >
                            <SwiperSlide>
                              <img
                                src={hallAndSports1}
                                className="hallAndSportsSwiperImg"
                              />
                            </SwiperSlide>
                            <SwiperSlide>
                              <img
                                src={hallAndSports2}
                                className="hallAndSportsSwiperImg"
                              />
                            </SwiperSlide>
                            <SwiperSlide>
                              <img
                                src={hallAndSports3}
                                className="hallAndSportsSwiperImg"
                              />
                            </SwiperSlide>
                            <SwiperSlide>
                              <img
                                src={hallAndSports4}
                                className="hallAndSportsSwiperImg"
                              />
                            </SwiperSlide>
                            <SwiperSlide>
                              <img
                                src={hallAndSports5}
                                className="hallAndSportsSwiperImg"
                              />
                            </SwiperSlide>
                            <SwiperSlide>
                              <img
                                src={hallAndSports6}
                                className="hallAndSportsSwiperImg"
                              />
                            </SwiperSlide>
                            <SwiperSlide>
                              <img
                                src={hallAndSports7}
                                className="hallAndSportsSwiperImg"
                              />
                            </SwiperSlide>
                          </Swiper>
                        </div>
                        <div className="details">
                          <div className="flexStart">
                            מחוץ לקריית הספורט ישנם
                            <div className="emphasis"> 8 חלקות מגרשים</div>,
                            הניתנים
                            <div className="emphasis"> לתיאום מול מדא”ג הבה”ד</div>
                            .
                            <br />
                            בקשה לשריון מגרש תעשה
                            <div className="emphasis">לפחות שבוע מראש</div>.
                          </div>
                          <div>
                            השימוש במתקני אולם הספורט מתאפשר רק
                            <div className="emphasis">בהשגחת מדא”ג </div>.
                          </div>
                        </div>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="3">
                    <Accordion.Header>גינות כושר</Accordion.Header>
                    <Accordion.Body>
                      <div className="fitnessGardensContent">
                        <div className="imageDisplay">
                          <Swiper
                            spaceBetween={30}
                            pagination={{
                              clickable: true,
                            }}
                            modules={[Pagination]}
                            className="mySwiper"
                          >
                            <SwiperSlide>
                              <img
                                src={fitnessGardens1}
                                className="fitnessGardensSwiperImg"
                              />
                            </SwiperSlide>
                            <SwiperSlide>
                              <img
                                src={fitnessGardens2}
                                className="fitnessGardensSwiperImg"
                              />
                            </SwiperSlide>
                            <SwiperSlide>
                              <img
                                src={fitnessGardens3}
                                className="fitnessGardensSwiperImg"
                              />
                            </SwiperSlide>
                            <SwiperSlide>
                              <img
                                src={fitnessGardens4}
                                className="fitnessGardensSwiperImg"
                              />
                            </SwiperSlide>
                          </Swiper>
                        </div>
                        <div className="details">
                          ברחבי הבסיס באזורי בהד”ים שונים ישנן גינות כושר
                          חיצוניות ובהן
                          <div class="emphasis">מתקני כושר</div>
                          שונים הניתנים לשימוש
                          <div class="emphasis">בכל מהלך היום</div>
                        </div>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
            </div>
            <div id="pool" className="poolText">
              <div className="titleDiv">
                <div className="title">בריכה</div>
                <img className="titleUnderline" src={textUnderlineBlue} />
              </div>
              <div className="poolDiv">
                <Swiper
                  spaceBetween={30}
                  pagination={{
                    clickable: true,
                  }}
                  modules={[Pagination]}
                  className="mySwiper"
                >
                  <SwiperSlide>
                    <img src={pool1} className="poolSwiperImg" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={pool2} className="poolSwiperImg" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={pool3} className="poolSwiperImg" />
                  </SwiperSlide>
                </Swiper>
              </div>
              <div className="details">
                <div className="contentTopped">
                  <img src={detailsTime} className="icon" alt="time" />
                  <div className="openingHours">
                    <div className="hoursOne">
                      <div className="emphasis">א׳: </div>
                      <div>
                        <div>18:00 - 14:00</div>
                        <div>21:00 - 18:30</div>
                      </div>
                    </div>
                    <div className="hoursTwo">
                      <div className="emphasis">ב׳ - ד׳: </div>
                      <div>
                        <div>09:00 - 06:30</div>
                        <div>14:00 - 18:00</div>
                        <div>21:00 - 18:30</div>
                      </div>
                    </div>
                    <div className="hoursThree">
                      <div className="emphasis">ה׳: </div>
                      <div>
                        <div>09:00 - 06:30</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="titleDiv">
                  <div className="title">זמני רחצה מוגדרים</div>
                  <img className="titleUnderline" src={textUnderlineBlack} />
                </div>
                <div className="flexible">
                  <div className="noBottomMargin">
                    <img src={girl} className="icon" alt="girl" />
                    <div className="openingHours">
                      <div className="hoursOne">
                        <div className="emphasis">ב׳: </div>
                        <div>08:00 - 06:30</div>
                      </div>
                      <div className="hoursTwo">
                        <div className="emphasis">ד׳: </div>
                        <div>21:00 - 20:00</div>
                      </div>
                    </div>
                  </div>
                  <div className="noBottomMargin">
                    <img src={boy} className="icon" alt="girl" />
                    <div className="openingHours">
                      <div className="hoursOne">
                        <div className="emphasis">ב׳: </div>
                        <div>21:00 - 20:00</div>
                      </div>
                      <div className="hoursTwo">
                        <div className="emphasis">ד׳: </div>
                        <div>07:30 - 09:00</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="library" className="libraryText">
              <div className="titleDiv">
                <div className="title">ספרייה</div>
                <img className="titleUnderline" src={textUnderlineBlue} />
              </div>
              <div className="libraryDiv">
                <Swiper
                  spaceBetween={30}
                  pagination={{
                    clickable: true,
                  }}
                  modules={[Pagination]}
                  className="mySwiper"
                >
                  <SwiperSlide>
                    <img src={library1} className="librarySwiperImg" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={library2} className="librarySwiperImg" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={library3} className="librarySwiperImg" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={library4} className="librarySwiperImg" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={library5} className="librarySwiperImg" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={library6} className="librarySwiperImg" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={library7} className="librarySwiperImg" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={library8} className="librarySwiperImg" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={library9} className="librarySwiperImg" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={library10} className="librarySwiperImg" />
                  </SwiperSlide>
                </Swiper>
              </div>
              <div className="details">
                <div className="flexible">
                  <div className="detailsTimeImgDiv">
                    <img
                      src={detailsTime}
                      className="detailsTimeImgDivImg"
                      alt="time"
                    />
                    <div className="detailsTimeTextDiv">
                      <div>
                        <div className="emphasis">א׳ - ה׳: </div>
                        <div className="detailsTimeTextDivTime">
                          <div>13:00 - 08:00</div>
                          <div>16:30 - 14:00</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="detailsPhoneImgDiv">
                    <img
                      src={detailsPhone}
                      className="detailsPhoneImgDivImg"
                      alt="phone"
                    />
                    <div>
                      אתי הספרנית:
                      <Link
                        className="detailsPhoneImgDivLink"
                        to={"tel:+972523393349"}
                      >
                        <div className="detailsPhoneImgDivLinkNumber">
                          0523393349
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="flexEnd">
                  <div className="titleDiv">
                    <div className="title">הגיעו מוכנים!</div>
                    <img
                      src={textUnderlineBlack}
                      className="titleUnderline"
                      alt="underline"
                    />
                  </div>
                  <div className="flexEndTextDiv">
                    בכדי להשאיל ספר צריך פרטים אישיים:
                    <br />
                    <div className="emphasis">שם, מספר אישי וטלפון.</div>
                    <br />
                    יש להחזיר את הספר עד חודש ימים מההשאלה.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RecreationAndFitness;
