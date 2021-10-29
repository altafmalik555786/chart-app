import React from "react";
import { Line } from "react-chartjs-2";
import ModalView from "./ModalView";
import { useState, useEffect } from "react";

export default function MultiAxisLineChart() {
  const [one, setOne] = useState(localStorage.getItem("mlineone"));
  const [two, setTwo] = useState(localStorage.getItem("mlinetwo"));
  const [three, setThree] = useState(localStorage.getItem("mlinethree"));
  const [four, setFour] = useState(localStorage.getItem("mlinefour"));
  const [five, setFive] = useState(localStorage.getItem("mlinefive"));
  const [six, setSix] = useState(localStorage.getItem("mlinesix"));


  useEffect(() => {
    localStorage.setItem("mlineone", one)
    localStorage.setItem("mlinetwo", two)
    localStorage.setItem("mlinethree", three)
    localStorage.setItem("mlinefour", four)
    localStorage.setItem("mlinefive", five)
    localStorage.setItem("mlinesix", six)
  }, [one, two, three, four, five, six])

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
    labels: ["1", "2", "3", "4", "5", "6" ],
    datasets: [
      {
        label: "# of Votes",
        data: [one, two, three, four, five, six],
        fill: false,
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgba(255, 99, 132, 0.2)",
        yAxisID: "y-axis-1",
      },
      {
        label: "# of No Votes",
        data: [one, two, three, four, five, six],
        fill: false,
        backgroundColor: "rgb(54, 162, 235)",
        borderColor: "rgba(54, 162, 235, 0.2)",
        yAxisID: "y-axis-2",
      },
    ],
  };

  const options = {
    scales: {
      yAxes: [
        {
          type: "linear",
          display: true,
          position: "left",
          id: "y-axis-1",
        },
        {
          type: "linear",
          display: true,
          position: "right",
          id: "y-axis-2",
          gridLines: {
            drawOnArea: false,
          },
        },
      ],
    },
  };

  return (
    <>
      <div className="header">
        <h1 className="title">Axis Line Chart</h1>
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
      </div>
      <Line data={data} options={options} />
    </>
  );
}
