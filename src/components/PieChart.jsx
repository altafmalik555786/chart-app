import React from "react";
import { Pie } from "react-chartjs-2";
import ModalView from "./ModalView";
import { useState, useEffect } from "react";
import ModalViewColor from "./ModalViewColor";

export default function PieChart() {
  const [one, setOne] = useState(localStorage.getItem("pieone"));
  const [two, setTwo] = useState(localStorage.getItem("pietwo"));
  const [three, setThree] = useState(localStorage.getItem("piethree"));
  const [four, setFour] = useState(localStorage.getItem("piefour"));
  const [five, setFive] = useState(localStorage.getItem("piefive"));
  const [six, setSix] = useState(localStorage.getItem("piesix"));

  
  const [red, setRed] = useState(localStorage.getItem("piered"));
  const [blue, setBlue] = useState(localStorage.getItem("pieblue"));
  const [yellow, setYellow] = useState(localStorage.getItem("pieyellow"));
  const [green, setGreen] = useState(localStorage.getItem("piegreen"));
  const [purple, setPurple] = useState(localStorage.getItem("piepurple"));
  const [orange, setOrange] = useState(localStorage.getItem("pieorange"));


  useEffect(() => {
    localStorage.setItem("pieone", one)
    localStorage.setItem("pietwo", two)
    localStorage.setItem("piethree", three)
    localStorage.setItem("piefour", four)
    localStorage.setItem("piefive", five)
    localStorage.setItem("piesix", six)
    localStorage.setItem("piered", red)
    localStorage.setItem("pieblue", blue)
    localStorage.setItem("pieyellow", yellow)
    localStorage.setItem("piegreen", green)
    localStorage.setItem("piepurple", purple)
    localStorage.setItem("pieorange", orange)
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
        borderWidth: 1,
      },
    ],
  };

  return (
    <>
      <div className="header">
        <h1 className="title">Pie Chart</h1>
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
      <Pie data={data} />
    </>
  );
}
