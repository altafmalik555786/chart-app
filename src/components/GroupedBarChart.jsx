import React from "react";
import { Bar } from "react-chartjs-2";
import ModalView from "./ModalView";
import { useState, useEffect } from "react";
import ModalViewColor from "./ModalViewColor";

export default function GroupedBarChart() {
  const [one, setOne] = useState(localStorage.getItem("groupedone"));
  const [two, setTwo] = useState(localStorage.getItem("groupedtwo"));
  const [three, setThree] = useState(localStorage.getItem("groupedthree"));
  const [four, setFour] = useState(localStorage.getItem("groupedfour"));
  const [five, setFive] = useState(localStorage.getItem("groupedfive"));
  const [six, setSix] = useState(localStorage.getItem("groupedsix"));

  
  const [red, setRed] = useState(localStorage.getItem("groupedred"));
  const [blue, setBlue] = useState(localStorage.getItem("groupedblue"));
  const [yellow, setYellow] = useState(localStorage.getItem("groupedyellow"));



  useEffect(() => {
    localStorage.setItem("groupedone", one)
    localStorage.setItem("groupedtwo", two)
    localStorage.setItem("groupedthree", three)
    localStorage.setItem("groupedfour", four)
    localStorage.setItem("groupedfive", five)
    localStorage.setItem("groupedsix", six)
    localStorage.setItem("groupedred", red)
    localStorage.setItem("groupedblue", blue)
    localStorage.setItem("groupedyellow", yellow)
    
  }, [one, two, three, four, five, six, red, blue, yellow])

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
    labels: ["1", "2", "3", "4", "5", "6"],
    datasets: [
      {
        label: "# of " + red + " Votes",
        data: [one, two, three, four, five, six],
        backgroundColor: red,
        stack: "Stack 0",
      },
      {
        label: "# of " + blue + " Votes",
        data: [one, two, three, four, five, six],
        backgroundColor: blue,
        stack: "Stack 0",
      },
      {
        label: "# of " + yellow + " Votes",
        data: [one, two, three, four, five, six],
        backgroundColor: yellow,
        stack: "Stack 1",
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
        <h1 className="title">Grouped Bar Chart</h1>
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
        red={red}
        blue={blue}
        yellow={yellow}
      />
      <Bar data={data} options={options} />
    </>
  );
}
