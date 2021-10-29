import React from "react";
import { Bar } from "react-chartjs-2";
import { useState, useEffect } from "react";
import ModalView from "./ModalView";
import ModalViewColor from "./ModalViewColor";

export default function BarHorizontalChart() {
  const [one, setOne] = useState(localStorage.getItem("horione"));
  const [two, setTwo] = useState(localStorage.getItem("horitwo"));
  const [three, setThree] = useState(localStorage.getItem("horithree"));
  const [four, setFour] = useState(localStorage.getItem("horifour"));
  const [five, setFive] = useState(localStorage.getItem("horifive"));
  const [six, setSix] = useState(localStorage.getItem("horisix"));

  
  const [red, setRed] = useState(localStorage.getItem("horired"));
  const [blue, setBlue] = useState(localStorage.getItem("horiblue"));
  const [yellow, setYellow] = useState(localStorage.getItem("horiyellow"));
  const [green, setGreen] = useState(localStorage.getItem("horigreen"));
  const [purple, setPurple] = useState(localStorage.getItem("horipurple"));
  const [orange, setOrange] = useState(localStorage.getItem("horiorange"));


  useEffect(() => {
    localStorage.setItem("horione", one)
    localStorage.setItem("horitwo", two)
    localStorage.setItem("horithree", three)
    localStorage.setItem("horifour", four)
    localStorage.setItem("horifive", five)
    localStorage.setItem("horisix", six)
    localStorage.setItem("horired", red)
    localStorage.setItem("horiblue", blue)
    localStorage.setItem("horiyellow", yellow)
    localStorage.setItem("horigreen", green)
    localStorage.setItem("horipurple", purple)
    localStorage.setItem("horiorange", orange)
  }, [one, two, three, four, five, six, red, blue, yellow, green, purple, orange])


  const onChangeRed = (e) => {
    let str = e.target.value;
    let arr1 = [];
    for (let i = 0; i < str.length; i++) {
      arr1.push(str[i]);
    }
    let cpt = arr1.splice(0, 1)[0].toUpperCase();
    arr1.unshift(cpt);
    let arr2 = arr1.join("");
    setRed(arr2);
  };
  const onChangeBlue = (e) => {
    let str = e.target.value;
    let arr1 = [];
    for (let i = 0; i < str.length; i++) {
      arr1.push(str[i]);
    }
    let cpt = arr1.splice(0, 1)[0].toUpperCase();
    arr1.unshift(cpt);
    let arr2 = arr1.join("");
    setBlue(arr2);
  };
  const onChangeYellow = (e) => {
    let str = e.target.value;
    let arr1 = [];
    for (let i = 0; i < str.length; i++) {
      arr1.push(str[i]);
    }
    let cpt = arr1.splice(0, 1)[0].toUpperCase();
    arr1.unshift(cpt);
    let arr2 = arr1.join("");
    setYellow(arr2);
  };
  const onChangeGreen = (e) => {
    let str = e.target.value;
    let arr1 = [];
    for (let i = 0; i < str.length; i++) {
      arr1.push(str[i]);
    }
    let cpt = arr1.splice(0, 1)[0].toUpperCase();
    arr1.unshift(cpt);
    let arr2 = arr1.join("");
    setGreen(arr2);
  };
  const onChangePurple = (e) => {
    let str = e.target.value;
    let arr1 = [];
    for (let i = 0; i < str.length; i++) {
      arr1.push(str[i]);
    }
    let cpt = arr1.splice(0, 1)[0].toUpperCase();
    arr1.unshift(cpt);
    let arr2 = arr1.join("");
    setPurple(arr2);
  };
  const onChangeOrange = (e) => {
    let str = e.target.value;
    let arr1 = [];
    for (let i = 0; i < str.length; i++) {
      arr1.push(str[i]);
    }
    let cpt = arr1.splice(0, 1)[0].toUpperCase();
    arr1.unshift(cpt);
    let arr2 = arr1.join("");
    setOrange(arr2);
  };

  const onChange = (event) => {
    setOne(event.target.value);
  };
  const onChangeTwo = (event) => {
    setTwo(event.target.value);
  };
  const onChangeThree = (event) => {
    setThree(event.target.value);
  };
  const onChangeFour = (event) => {
    setFour(event.target.value);
  };
  const onChangeFive = (event) => {
    setFive(event.target.value);
  };
  const onChangeSix = (event) => {
    setSix(event.target.value);
  };

  const data = {
    labels: [red, blue, yellow, green, purple, orange],
    datasets: [
      {
        label: "# of Votes",
        data: [one, two, three, four, five, six],
        backgroundColor: [red, blue, yellow, green, purple, orange],
        borderColor: [
          orange,
          purple,
          green,
          yellow,
          blue,
          red
        ],
        borderWidth: 2,
      },
    ],
  };

  const options = {
    indexAxis: "y",
    // Elements options apply to all of the options unless overridden in a dataset
    // In this case, we are setting the border of each horizontal bar to be 2px wide
    elements: {
      bar: {
        borderWidth: 2,
      },
    },
    responsive: true,
    plugins: {
      legend: {
        position: "right",
      },
      title: {
        display: true,
        text: "Chart.js Horizontal Bar Chart",
      },
    },
  };

  return (
    <>
      <div className="header">
        <h1 className="title">Horizontal Bar Chart</h1>
      </div>
      <ModalView
          onChange={onChange}
          onChangeTwo={onChangeTwo}
          onChangeThree={onChangeThree}
          onChangeFour={onChangeFour}
          onChangeFive={onChangeFive}
          onChangeSix={onChangeSix}
          one={one}
          two={two}
          three={three}
          four={four}
          five={five}
          six={six}
        />
      <ModalViewColor
          onChangeRed={onChangeRed}
          onChangeBlue={onChangeBlue}
          onChangeYellow={onChangeYellow}
          onChangeGreen={onChangeGreen}
          onChangePurple={onChangePurple}
          onChangeOrange={onChangeOrange}
          red={red}
          blue={blue}
          yellow={yellow}
          green={green}
          purple={purple}
          orange={orange}
        />
      <Bar data={data} options={options} />
    </>
  );
}
