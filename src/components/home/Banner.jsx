import React, { useState } from 'react'
import Slider from "react-slick";
import bannerImgeOne from "../../assests/banner/bannerImgOne.jpg";
import bannerImgeTwo from "../../assests/banner/bannerImgTwo.jpg";
import bannerImgeThree from "../../assests/banner/bannerImgThree.jpg";
import bannerImgeFour from "../../assests/banner/bannerImgFour.jpg";
import bannerImgeFives from "../../assests/banner/bannerImgeFives.jpg";
import bannerImgeSix from "../../assests/banner/bannerImgeSix.jpg";


 const Banner = () => {

    const [dotActive, setDocActive] = useState(0);
    const settings = {
      dots: true,
      infinite: true,
      autoplay: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      beforeChange: (prev, next) => {
        setDocActive(next);
      },
      appendDots: (dots) => (
        <div
          style={{
            position: "absolute",
            top: "70%",
            left: "50%",
            transform: "translate(-50%, 0)",
            width: "210px",
          }}
        >
          <ul
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            {dots}
          </ul>
        </div>
      ),
      customPaging: (i) => (
        <div
          style={
            i === dotActive
              ? {
                  width: "30px",
                  height: "30px",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                  background: "#131921",
                  padding: "8px 0",
                  cursor: "pointer",
                  border: "1px solid #f3a847",
                }
              : {
                  width: "30px",
                  height: "30px",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "#232F3E",
                  color: "white",
                  padding: "8px 0",
                  cursor: "pointer",
                  border: "1px solid white",
                }
          }
        >
          {i + 1}
        </div>
      ),
      customPaging: (i) => (
        <div
          style={
            i === dotActive
              ? {
                  width: "30px",
                  height: "30px",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                  background: "#131921",
                  padding: "8px 0",
                  cursor: "pointer",
                  border: "1px solid #f3a847",
                }
              : {
                  width: "30px",
                  height: "30px",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "#232F3E",
                  color: "white",
                  padding: "8px 0",
                  cursor: "pointer",
                  border: "1px solid white",
                }
          }
        >
          {i + 1}
        </div>
      ),
      responsive: [
        {
          breakpoint: 500,
          settings: {
            dots: true,
            appendDots: (dots) => (
              <div
                style={{
                  position: "absolute",
                  top: "60%",
                  left: "50%",
                  transform: "translate(-50%, 0)",
                  width: "150px",
                }}
              >
                <ul
                  style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    fontSize: "12px",
                  }}
                >
                  {" "}
                  {dots}{" "}
                </ul>
              </div>
            ),
            customPaging: (i) => (
              <div
                style={
                  i === dotActive
                    ? {
                        width: "25px",
                        height: "25px",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "white",
                        background: "#131921",
                        padding: "8px 0",
                        cursor: "pointer",
                        border: "1px solid #f3a847",
                      }
                    : {
                        width: "25px",
                        height: "25px",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        background: "#232F3E",
                        color: "white",
                        padding: "8px 0",
                        cursor: "pointer",
                        border: "1px solid white",
                      }
                }
              >
                0{i + 1}
              </div>
            ),
          },
        },
      ],
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div className="w-full  relative z-20   ">
        <div className="w-full h-full ">
          <Slider {...settings}>
            <div>
              <img src={bannerImgeOne} alt="bannerImgOne" />
            </div>
            <div>
              <img src={bannerImgeTwo} alt="bannerImgTwo" />
            </div>
            <div>
              <img src={bannerImgeThree} alt="bannerImgThree" />
            </div>
            <div>
              <img src={bannerImgeFour} alt="bannerImgFour" />
            </div>
            <div>
              <img src={bannerImgeFives} alt="bannerImgFive" />
            </div>
            <div>
              <img src={bannerImgeSix} alt="bannerImgeSix" />
            </div>
          </Slider>
        </div>
      </div>
    );
  };
  

 export default Banner