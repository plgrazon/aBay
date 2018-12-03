import React, { Component } from 'react';
import styles from '../../../App.css';
import ProgressBar from 'progressbar.js';

class PieContainer extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    console.log('progressBar:', ProgressBar)
    var bar = new ProgressBar.Circle(pieContainer, {
      strokeWidth: 6,
      easing: 'easeInOut',
      duration: 1400,
      color: '#FFEA82',
      trailColor: '#eee',
      trailWidth: 1,
      svgStyle: null
    });

    bar.animate(1.0)

  }

  render() {

    return (
      <div>
        <div id='pieContainer' className={styles.pieContainer}></div>
      </div>

    )
  }
}

export default PieContainer;