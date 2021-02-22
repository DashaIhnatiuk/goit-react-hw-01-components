import statisticalData from './statistical-data.json';
import './Stats.css';

function getRandomColor() {
  let r = function () {
    return Math.floor(Math.random() * 256);
  };
  return 'rgb(' + r() + ',' + r() + ',' + r() + ')';
}

function Stats(){
    return (
        <section class="statistics">
  <h2 class="title">Upload stats</h2>
  <ul class="stat-list">
    {statisticalData.map(item =>(
        <li class="item"
        style={{ backgroundColor: getRandomColor() }}>
        <span class="label-stat">{item.label}</span>
        <span class="percentage"> {item.percentage}%</span>
      </li>
    ))}
  </ul>
  
</section>
    );
}


export default Stats;