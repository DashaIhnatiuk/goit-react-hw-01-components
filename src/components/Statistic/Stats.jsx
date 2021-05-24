import { Component } from "react";
import PropTypes from "prop-types";
import "./Stats.css";

const Stats = ({ data }) => (
  <section class="statistics">
    <h2 class="title">Upload stats</h2>
    <ul class="stat-list">
      {data.map((item) => (
        <li class="item" style={{ backgroundColor: getRandomColor() }}>
          <span class="label-stat">{item.label}</span>
          <span class="percentage"> {item.percentage}%</span>
        </li>
      ))}
    </ul>
  </section>
);

function getRandomColor() {
  let r = function () {
    return Math.floor(Math.random() * 256);
  };
  return "rgb(" + r() + "," + r() + "," + r() + ")";
}

Stats.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Stats;
