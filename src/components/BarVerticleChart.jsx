import React from "react";
import { Bar } from "react-chartjs-2";
import ModalView from "./ModalView";
import { useState,useEffect } from "react";
import ModalViewColor from "./ModalViewColor";

export default function BarVerticleChart() {
  const [one, setOne] = useState(localStorage.getItem("one"));
  const [two, setTwo] = useState(localStorage.getItem("two"));
  const [three, setThree] = useState(localStorage.getItem("three"));
  const [four, setFour] = useState(localStorage.getItem("four"));
  const [five, setFive] = useState(localStorage.getItem("five"));
  const [six, setSix] = useState(localStorage.getItem("six"));

  const [red, setRed] = useState(localStorage.getItem("red"));
  const [blue, setBlue] = useState(localStorage.getItem("blue"));
  const [yellow, setYellow] = useState(localStorage.getItem("yellow"));
  const [green, setGreen] = useState(localStorage.getItem("green"));
  const [purple, setPurple] = useState(localStorage.getItem("purple"));
  const [orange, setOrange] = useState(localStorage.getItem("orange"));


  useEffect(() => {
    localStorage.setItem("one", one)
    localStorage.setItem("two", two)
    localStorage.setItem("three", three)
    localStorage.setItem("four", four)
    localStorage.setItem("five", five)
    localStorage.setItem("six", six)
    localStorage.setItem("red", red)
    localStorage.setItem("blue", blue)
    localStorage.setItem("yellow", yellow)
    localStorage.setItem("green", green)
    localStorage.setItem("purple", purple)
    localStorage.setItem("orange", orange)
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

        borderColor: [orange, purple, green, yellow, blue, red],
        borderWidth: 2,
      },
    ],
  };

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  return (
    <>
      <div className="header">
        <h1 className="title">Vertical Bar Chart</h1>
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
      </div>
      <Bar data={data} options={options} />
    </>
  );
}
