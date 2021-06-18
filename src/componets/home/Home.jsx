import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, CardGroup, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { getupItemsUrl } from "../../utils/url";
import Banner from "../banner/Banner";
import AOS from "aos";
import "./Home.css";

function Home() {
  const [sitems, setsitems] = useState([]);
  useEffect(() => {
    fetchSitems();
  }, []);
  const fetchSitems = async () => {
    const response = await axios.get(getupItemsUrl);
    // console.log(response.data.data);
    // console.log(response.data.data);
    setsitems(response.data.data);
  };

  // aos lib funtions
  AOS.init();
  AOS.init({
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
    initClassName: "aos-init", // class applied after initialization
    animatedClassName: "aos-animate", // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 400, // values from 0 to 3000, with step 50ms
    easing: "ease", // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
  });

  return (
    <div className="Home">
      <Banner />
      <CardGroup className="cardGroup">
        <Row style={{ margin: "1rem" }} className="rows">
          {sitems.map((data, index) => {
            return (
              <Card
                className="card"
                key={index}
                style={{
                  width: "26rem",
                  margin: "1rem",
                }}
                data-aos="zoom-in-up"
                data-aos-offset="200"
                data-aos-delay="400"
                data-aos-duration="900"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="true"
              >
                <div className="cbody">
                  <Card.Img
                    className="cardImage"
                    variant="top"
                    src={data.item.images.icon}
                  />
                  <Card.Title>{data.item.name}</Card.Title>
                  <Card.Body className="cardBody">
                    <Card.Text className="ctext">
                      {data.item.description}
                    </Card.Text>
                    <Link to="/shop">
                      <button className="btn">Buy Now</button>
                    </Link>
                  </Card.Body>
                </div>
                <svg
                  id="wave"
                  style={{ transform: "rotate(0deg)", transition: "0.3s" }}
                  viewBox="0 0 1440 250"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <linearGradient
                      id="sw-gradient-0"
                      x1="0"
                      x2="0"
                      y1="1"
                      y2="0"
                    >
                      <stop
                        stop-color="rgba(243, 62, 234.006, 0.8)"
                        offset="0%"
                      ></stop>
                      <stop
                        stop-color="rgba(255, 11, 110.611, 1)"
                        offset="100%"
                      ></stop>
                    </linearGradient>
                  </defs>
                  <path
                    style={{ transform: "translate(0, 0px)", opacity: "1" }}
                    fill="url(#sw-gradient-0)"
                    d="M0,175L80,175C160,175,320,175,480,158.3C640,142,800,108,960,87.5C1120,67,1280,58,1440,83.3C1600,108,1760,167,1920,175C2080,183,2240,142,2400,120.8C2560,100,2720,100,2880,112.5C3040,125,3200,150,3360,158.3C3520,167,3680,158,3840,141.7C4000,125,4160,100,4320,79.2C4480,58,4640,42,4800,33.3C4960,25,5120,25,5280,50C5440,75,5600,125,5760,154.2C5920,183,6080,192,6240,191.7C6400,192,6560,183,6720,183.3C6880,183,7040,192,7200,187.5C7360,183,7520,167,7680,154.2C7840,142,8000,133,8160,120.8C8320,108,8480,92,8640,83.3C8800,75,8960,75,9120,91.7C9280,108,9440,142,9600,158.3C9760,175,9920,175,10080,183.3C10240,192,10400,208,10560,216.7C10720,225,10880,225,11040,204.2C11200,183,11360,142,11440,120.8L11520,100L11520,250L11440,250C11360,250,11200,250,11040,250C10880,250,10720,250,10560,250C10400,250,10240,250,10080,250C9920,250,9760,250,9600,250C9440,250,9280,250,9120,250C8960,250,8800,250,8640,250C8480,250,8320,250,8160,250C8000,250,7840,250,7680,250C7520,250,7360,250,7200,250C7040,250,6880,250,6720,250C6560,250,6400,250,6240,250C6080,250,5920,250,5760,250C5600,250,5440,250,5280,250C5120,250,4960,250,4800,250C4640,250,4480,250,4320,250C4160,250,4000,250,3840,250C3680,250,3520,250,3360,250C3200,250,3040,250,2880,250C2720,250,2560,250,2400,250C2240,250,2080,250,1920,250C1760,250,1600,250,1440,250C1280,250,1120,250,960,250C800,250,640,250,480,250C320,250,160,250,80,250L0,250Z"
                  ></path>
                  <defs>
                    <linearGradient
                      id="sw-gradient-1"
                      x1="0"
                      x2="0"
                      y1="1"
                      y2="0"
                    >
                      <stop
                        stop-color="rgba(243, 62, 234.006, 1)"
                        offset="0%"
                      ></stop>
                      <stop
                        stop-color="rgba(255, 11, 151.944, 1)"
                        offset="100%"
                      ></stop>
                    </linearGradient>
                  </defs>
                  <path
                    style={{ transform: "translate(0, 50px)", opacity: "0.9" }}
                    fill="url(#sw-gradient-1)"
                    d="M0,175L80,183.3C160,192,320,208,480,179.2C640,150,800,75,960,58.3C1120,42,1280,83,1440,95.8C1600,108,1760,92,1920,79.2C2080,67,2240,58,2400,83.3C2560,108,2720,167,2880,183.3C3040,200,3200,175,3360,162.5C3520,150,3680,150,3840,150C4000,150,4160,150,4320,137.5C4480,125,4640,100,4800,79.2C4960,58,5120,42,5280,54.2C5440,67,5600,108,5760,120.8C5920,133,6080,117,6240,116.7C6400,117,6560,133,6720,133.3C6880,133,7040,117,7200,108.3C7360,100,7520,100,7680,120.8C7840,142,8000,183,8160,200C8320,217,8480,208,8640,208.3C8800,208,8960,217,9120,191.7C9280,167,9440,108,9600,104.2C9760,100,9920,150,10080,154.2C10240,158,10400,117,10560,104.2C10720,92,10880,108,11040,95.8C11200,83,11360,42,11440,20.8L11520,0L11520,250L11440,250C11360,250,11200,250,11040,250C10880,250,10720,250,10560,250C10400,250,10240,250,10080,250C9920,250,9760,250,9600,250C9440,250,9280,250,9120,250C8960,250,8800,250,8640,250C8480,250,8320,250,8160,250C8000,250,7840,250,7680,250C7520,250,7360,250,7200,250C7040,250,6880,250,6720,250C6560,250,6400,250,6240,250C6080,250,5920,250,5760,250C5600,250,5440,250,5280,250C5120,250,4960,250,4800,250C4640,250,4480,250,4320,250C4160,250,4000,250,3840,250C3680,250,3520,250,3360,250C3200,250,3040,250,2880,250C2720,250,2560,250,2400,250C2240,250,2080,250,1920,250C1760,250,1600,250,1440,250C1280,250,1120,250,960,250C800,250,640,250,480,250C320,250,160,250,80,250L0,250Z"
                  ></path>
                </svg>
              </Card>
            );
          })}
        </Row>
      </CardGroup>
    </div>
  );
}

export default Home;
