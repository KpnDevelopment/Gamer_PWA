import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Carousel, Container } from "react-bootstrap";
import "./ShopDetails.css";
import AOS from "aos";

function ShopDetails(props) {
  const [video, setvideo] = useState({});
  const [items, setitems] = useState({
    images: {},
    ratings: {},
  });

  useEffect(() => {
    fetchitemsDeatils();
  }, []);
  const carosetItem = {
    height: "95vh",
    backgroundColor: "#000",
    fontSize: "5rem",
    justifyContent: "center",
    textAlign: "center",
    fontWeight: "800",
  };

  const fetchitemsDeatils = async () => {
    const response = await axios.get(
      `https://fortnite-api.theapinetwork.com/item/get?id=${props.match.params.id}`
    );
    // console.log(response.data.data.item);
    setitems(response.data.data.item);
    console.log(response.data.data.item.media[0].src);
    setvideo(response.data.data.item.media[0].src);
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
    <div className="ShopDeatails">
      <Carousel fade>
        <Carousel.Item>
          <div
            className="split"
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              backgroundColor: "#000",
            }}
          >
            <div
              className="img d-block w-50 avathar"
              // data-aos="zoom-in-down"
              // data-aos-delay="500"
              // data-aos-offset="1000"
              // data-aos-duration="1000"
              // data-aos-once="true"
            >
              <img
                style={carosetItem}
                src={items.images.featured}
                alt="Loading ....."
              />
            </div>
            <Container
              className="d-block caption w-50"
              style={{
                display: "flex",
                alignItems: "center",
                color: "white",
                margin: "10rem",
              }}
            >
              <div
                className="name"
                data-aos="zoom-in"
                data-aos-anchor="#example-anchor"
                data-aos-offset="500"
                data-aos-delay="600"
                data-aos-duration="800"
              >
                <h3
                  className="name"
                  data-aos="zoom-in"
                  data-aos-anchor="#example-anchor"
                  data-aos-offset="500"
                  data-aos-delay="700"
                  data-aos-duration="800"
                >
                  {items.name}
                </h3>
              </div>
              <div
                className="typed"
                data-aos="zoom-in"
                data-aos-anchor="#example-anchor"
                data-aos-offset="500"
                data-aos-delay="800"
                data-aos-duration="800"
              >
                <h4 className="typd">{items.type}</h4>
              </div>
              <div
                className="dice"
                data-aos="zoom-in"
                data-aos-anchor="#example-anchor"
                data-aos-offset="500"
                data-aos-delay="900"
                data-aos-duration="800"
              >
                <p className="desc">{items.description}</p>
              </div>

              {/* <input type="text" /> */}

              {/* <h5>{items.ratings.avgStars}</h5> */}
              <div
                class="meter orange nostripes"
                data-aos="fade-left"
                data-aos-anchor="#example-anchor"
                data-aos-offset="500"
                data-aos-delay="1000"
                data-aos-duration="500"
              >
                <span style={{ width: "75.3%" }}>
                  AvgStar {items.ratings.avgStars}
                </span>
              </div>
              {/* <h5>{items.ratings.totalPoints}</h5> */}
              <div
                class="meter red nostripes"
                data-aos="fade-left"
                data-aos-anchor="#example-anchor"
                data-aos-offset="500"
                data-aos-delay="1200"
                data-aos-duration="500"
              >
                <span style={{ width: "75.3%" }}>
                  TotalPoints {items.ratings.totalPoints}
                </span>
              </div>
              {/* <h5>{items.ratings.numberVotes}</h5> */}

              <div
                class="meter blue nostripes"
                data-aos="fade-left"
                data-aos-anchor="#example-anchor"
                data-aos-offset="500"
                data-aos-delay="1300"
                data-aos-duration="500"
              >
                <span style={{ width: "75.3%", color: "white" }}>
                  Votes {items.ratings.numberVotes}
                </span>
              </div>
              <h1>Coming soon....</h1>
            </Container>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div
            className="split"
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              backgroundColor: "#000",
            }}
          >
            <video
              controls
              autoplay
              style={{
                height: "100vh",
                border: "none",
                backgroundColor: "#045de9",
                backgroundImage:
                  "linear-gradient(315deg, #045de9 0%, #09c6f9 74%)",
              }}
              className="d-block w-50 video"
              src={video}
              alt="Second slide"
              type="video/mp4"
            />
            <Container
              className="d-block caption w-50"
              style={{
                display: "flex",
                alignItems: "center",
                color: "white",
                margin: "10rem",
              }}
            >
              <h3 className="name">{items.name}</h3>
              <h4 className="type">{items.type}</h4>
              <p className="desc">{items.description}</p>
              {/* <input type="text" /> */}

              {/* <h5>{items.ratings.avgStars}</h5> */}
              <div class="meter orange nostripes">
                <span style={{ width: "75.3%" }}>
                  AvgStar {items.ratings.avgStars}
                </span>
              </div>
              {/* <h5>{items.ratings.totalPoints}</h5> */}
              <div class="meter red nostripes">
                <span style={{ width: "75.3%" }}>
                  TotalPoints {items.ratings.totalPoints}
                </span>
              </div>
              {/* <h5>{items.ratings.numberVotes}</h5> */}

              <div class="meter blue nostripes">
                <span style={{ width: "75.3%", color: "white" }}>
                  Votes {items.ratings.numberVotes}
                </span>
              </div>
              <h1>Coming soon....</h1>
            </Container>
          </div>
        </Carousel.Item>
      </Carousel>
      <div className="container">
        {/* <div className="refrt">
          <img src={items.images.icon} alt="avathar_img" />
          <h5>{items.name}</h5>
          <p>{items.description}</p>
          <video
            height="500"
            width="500"
            controls
            src={video}
            type="video/mp4"
          />
        </div> */}
      </div>
    </div>
  );
}

export default ShopDetails;
