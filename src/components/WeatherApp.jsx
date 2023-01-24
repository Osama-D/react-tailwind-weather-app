import React, { useState, useEffect } from "react";
import axios from "axios";

import { FaCloudSun } from "react-icons/fa";
import { BsSearch } from "react-icons/bs";
import { RiMistFill } from "react-icons/ri";
import { BsSunriseFill } from "react-icons/bs";
import { FaCloudSunRain } from "react-icons/fa";
import { BsCloudSunFill } from "react-icons/bs";
import { BsSnow } from "react-icons/bs";

import clouds from "./images/clouds.jpg";
import extreme from "./images/extreme.jpg";
import rain from "./images/rain.jpg";
import clearsky from "./images/clear sky.jpg";
import Mist from "./images/Mist.jpg";
import snow from "./images/snow.jpg";

import Moment from "moment";

function WeatherApp() {
  const madate = Moment().format("h:mma - dddd MMM D");
  const [term, setTerm] = useState("");
  const [weather, setWeather] = useState("");
  const [unit, setunit] = useState("metric");
  const [loading, setisloading] = useState(true);
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${term}&units=${unit}&appid=${process.env.REACT_APP_API_KEY}`;

  function fetchdata() {
    axios.get(url).then((response) => {
      setWeather(response.data);
      setisloading(false);
    });
  }

  useEffect(() => {
    fetchdata();
  }, [term, unit]);

  function SearchLocation(e) {
    e.preventDefault();
    fetchdata();
    setTerm("");
  }

  function Clickedunit() {
    setunit(unit === "metric" ? "imperial" : "metric");
  }
  console.log(weather);
  return (
    <>
      <div className="w-full tablet:absolute tablet:h-[129%] phone:h-[170%] bg-primary h-screen">
        {(() => {
          if (!loading && weather.weather[0].main === "Clouds") {
            return (
              <img
                className=" object-cover tablet:opacity-50 opacity-50 w-full h-full"
                src={clouds}
                alt=""
              />
            );
          } else if (loading) {
            return (
              <img
                className="object-cover tablet:opacity-50 opacity-50 w-full h-full"
                src={clouds}
                alt=""
              />
            );
          } else if (!loading && weather.weather[0].main === "Clear") {
            return (
              <img
                className="object-cover tablet:opacity-50 opacity-50 w-full h-full"
                src={clearsky}
                alt=""
              />
            );
          } else if (!loading && weather.weather[0].main === "Rain") {
            return (
              <img
                className=" object-cover tablet:opacity-50 opacity-50 w-full h-full"
                src={rain}
                alt=""
              />
            );
          } else if (!loading && weather.weather[0].main === "Extreme") {
            return (
              <img
                className=" object-cover tablet:opacity-50 opacity-50 w-full h-full"
                src={extreme}
                alt=""
              />
            );
          } else if (!loading && weather.weather[0].main === "Mist") {
            return (
              <img
                className=" object-cover tablet:opacity-50 opacity-50 w-full h-full"
                src={Mist}
                alt=""
              />
            );
          } else if (!loading && weather.weather[0].main === "Snow") {
            return (
              <img
                className=" object-cover tablet:opacity-50 opacity-50 w-full h-full"
                src={snow}
                alt=""
              />
            );
          }
        })()}
      </div>
      <div className="grid text-white grid-cols-7 tablet:grid-cols-3     	  capitalize font-body h-[100%] w-[100%] left-0 top-0 fixed tablet:relative">
        <div className=" col-span-4 phone:justify-center phone:my-0 phone:mx-0 tablet:col-span-0 py-8 ">
          <h1 className="flex justify-center sm:justify-start items-center sm:items-start sm:px-[60px] tablet:flex tablet:flex-col mt-0 text-2xl">
            The Weather
          </h1>
          <div className="flex mb-10 gap-x-6 mt-10 items-center phone:justify-center phone:flex-wrap py-[550px] tablet:py-[0]  px-[60px]">
            <div className="cursor-pointer">
              {(() => {
                if (unit === "metric" && weather.main) {
                  return (
                    <h2
                      onClick={Clickedunit}
                      className="text-[130px] relative phone:text-[100px] m-0"
                    >
                      {weather.main.temp.toFixed()}°
                      <small className="text-[30px] phone:bottom-[90px]  absolute bottom-[110px]">
                        C
                      </small>
                    </h2>
                  );
                } else if (unit === "imperial" && weather.main) {
                  return (
                    <h2
                      onClick={Clickedunit}
                      className="text-[130px]  relative phone:text-[100px] m-0"
                    >
                      {weather.main.temp.toFixed()}°
                      <small className="text-[30px] absolute phone:bottom-[90px] bottom-[110px]">
                        F
                      </small>
                    </h2>
                  );
                } else {
                  return (
                    <h2 className="text-[130px] phone:text-[100px] m-0">15°</h2>
                  );
                }
              })()}
            </div>

            <div className="flex justify-center gap-x-6 phone:flex-wrap  ">
              <div className="pl-10 phone:pl-0 justify-center">
                {weather.name ? (
                  <h2 className="text-[50px] flex justify-center">
                    {weather.name}
                  </h2>
                ) : (
                  <h2 className="text-[50px] flex justify-center items center">
                    Cañada
                  </h2>
                )}
                <div className="flex justify-center items-center text-center">
                  <h2>{madate}</h2>
                </div>
              </div>
              <div className="flex flex-col relative justify-center items-center pl-10 phone:pl-0 tablet:ml-8 phone:ml-0 text-center">
                {(() => {
                  if (!loading && weather.weather[0].main === "Mist") {
                    return (
                      <RiMistFill className="absolute top-[30px] tablet:top-[33px] text-2xl block justify-center items-center" />
                    );
                  } else if (!loading && weather.weather[0].main === "Clear") {
                    return (
                      <BsSunriseFill className="text-yellow-500 absolute top-[34px] tablet:top-[33px] text-2xl block justify-center items-center " />
                    );
                  } else if (loading) {
                    return (
                      <BsSunriseFill className="text-yellow-500 absolute top-[34px] tablet:top-[33px] text-2xl block justify-center items-center " />
                    );
                  } else if (!loading && weather.weather[0].main === "Clouds") {
                    return (
                      <BsCloudSunFill className="text-yellow-500 absolute top-[34px] tablet:top-[33px] text-2xl block justify-center items-center " />
                    );
                  } else if (!loading && weather.weather[0].main === "Rain") {
                    return (
                      <FaCloudSunRain className="text-blue-500 absolute top-[34px] tablet:top-[33px] text-2xl block justify-center items-center " />
                    );
                  } else if (!loading && weather.weather[0].main === "Snow") {
                    return (
                      <BsSnow className="text-blue-200 absolute top-[34px] tablet:top-[33px] text-2xl block justify-center items-center " />
                    );
                  }
                })()}

                {weather.weather ? (
                  <h1 className="mt-[73px] tablet:mt-[70px]">
                    {weather.weather[0].description}
                  </h1>
                ) : (
                  <h1 className="mt-[73px] tablet:mt-[70px]">Clouds</h1>
                )}
              </div>
            </div>
          </div>
        </div>
        <div
          className="flex flex-col phone:px-0 px-16 py-[0px]  backdrop-blur-lg
          border-t-2 border-white border-opacity-10 
         col-span-3
         tablet:col-span-4
        "
        >
          <div className="">
            <form className="w-[100%] h-[100%]" onSubmit={SearchLocation}>
              <input
                className="px-10 py-8  placeholder:text-white placeholder:space-x-80 bg-transparent outline-none text-white w-[100%] h-[114%] border-b-2 border-primary "
                type="text"
                value={term}
                onChange={(e) => setTerm(e.target.value)}
                placeholder="Search Location..."
              />
              <button
                className=" absolute top-0 right-0 cursor-pointer text-white bg-primary text-2xl p-10"
                type="submit"
              >
                <BsSearch />
              </button>
            </form>
          </div>
          <div className="flex phone:px-10 flex-col text-yellow-50 pt-6  w-full">
            <h4
              name="New york"
              onClick={(e) =>
                setTerm(e.target.getAttribute("name"), fetchdata(term))
              }
              className="mt-14 cursor-pointer hover:text-secondery-400"
            >
              New york
            </h4>
            <h4
              name="  California"
              onClick={(e) =>
                setTerm(e.target.getAttribute("name"), fetchdata(term))
              }
              className="mt-12 cursor-pointer hover:text-secondery-400"
            >
              California
            </h4>
            <h4
              name="    paris"
              onClick={(e) =>
                setTerm(e.target.getAttribute("name"), fetchdata(term))
              }
              className="mt-12 cursor-pointer hover:text-secondery-400"
            >
              paris
            </h4>
            <h4
              name="tokyo"
              onClick={(e) =>
                setTerm(e.target.getAttribute("name"), fetchdata(term))
              }
              className="mt-12 cursor-pointer hover:text-secondery-400"
            >
              tokyo
            </h4>
          </div>
          <div className="pt-16  phone:px-10  flex flex-col">
            <hr className=" " />
            <h1 className="pt-16 font-bold text-2xl">Weather Details</h1>
            <div className="flex flex-col">
              <ul className="flex justify-between mt-12">
                <li>Cloudy </li>
                {weather.clouds ? (
                  <li>{weather.clouds.all}%</li>
                ) : (
                  <li>100%</li>
                )}
              </ul>
              <ul className="flex justify-between  mt-12">
                <li>humidity </li>
                {weather.main ? (
                  <li>{weather.main.humidity}%</li>
                ) : (
                  <li>59%</li>
                )}
              </ul>
              <ul className="flex justify-between mt-12">
                <li>wind </li>
                {weather.wind ? (
                  <li>{weather.wind.speed}km/h</li>
                ) : (
                  <li>437km/h</li>
                )}
              </ul>
            </div>
            <hr className=" mt-16  phone:px-10" />
          </div>
        </div>
      </div>
    </>
  );
}

export default WeatherApp;
