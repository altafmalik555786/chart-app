import React from "react";
import { useState, useEffect } from "react";

import { Line } from "react-chartjs-2";
import BarVerticleChart from "./components/BarVerticleChart";
import BarHorizontalChart from "./components/BarHorizontalChart";
import GroupedBarChart from "./components/GroupedBarChart";
import StackedBarChart from "./components/StackedBarChart";
import MultiAxisLineChart from "./components/MultiAxisLineChart";
import ScatterChart from "./components/ScatterChart";
import DoughnutChart from "./components/DoughnutChart";
import PieChart from "./components/PieChart";
import ModalView from "./components/ModalView";



function App() {
  const [one, setOne] = useState(localStorage.getItem("lineone"));
  const [two, setTwo] = useState(localStorage.getItem("linetwo"));
  const [three, setThree] = useState(localStorage.getItem("linethree"));
  const [four, setFour] = useState(localStorage.getItem("linefour"));
  const [five, setFive] = useState(localStorage.getItem("linefive"));
  const [six, setSix] = useState(localStorage.getItem("linesix"));


  useEffect(() => {
    localStorage.setItem("lineone", one)
    localStorage.setItem("linetwo", two)
    localStorage.setItem("linethree", three)
    localStorage.setItem("linefour", four)
    localStorage.setItem("linefive", five)
    localStorage.setItem("linesix", six)
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
    labels: ["1", "2", "3", "4", "5", "6"],
    datasets: [
      {
        label: "# of Votes",
        data: [one, two, three, four, five, six],
        fill: false,
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgba(255, 99, 132, 0.2)",
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <>
      <div className="chart-container">
        <div>
          <div className="header">
            <h1 className="title">Line Chart</h1>
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
        />          <Line data={data} options={options} />
        </div>
        <div>
          <BarVerticleChart />
        </div>
        <div>
          <BarHorizontalChart />
        </div>
        <div>
          <GroupedBarChart />
        </div>
        <div>
          <StackedBarChart />
        </div>
        <div>
          <MultiAxisLineChart />
        </div>
        <div>
          <ScatterChart />
        </div>
        <div>
          <DoughnutChart />
        </div>
        <div>
          <PieChart />
        </div>
      </div>
    </>
  );
}

export default App;
