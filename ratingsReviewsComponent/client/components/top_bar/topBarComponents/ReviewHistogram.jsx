import React, { Component } from 'react';
import styles from '../../../App.css';

class ReviewHistogram extends Component {
  constructor(props) {
    super(props);
    this.state = {


    }
  }

  render() {
    console.log('this.props.count', this.props.count, this.props.stars)
    return (
      <div className={styles.reviewHistogram}>

        <div className={styles.reviewBar}>
        <div >
        <span className={styles.reviewStar}>★</span> 5
        </div>
        <div className={[styles.progressContainer, styles.roundBar].join(" ")}>
          <div className={[styles.progressBar, styles.roundBar].join(" ")} style={{ width: `${this.props.stars[5]/this.props.count*100}%` }}></div>
        </div>
        </div>
        <div className={styles.reviewBar}>
        <div >
        <span className={styles.reviewStar}>★</span> 4
        </div>
        <div className={[styles.progressContainer, styles.roundBar].join(" ")}>
          <div className={[styles.progressBar, styles.roundBar].join(" ")} style={{ width: `${this.props.stars[4]/this.props.count*100}%` }}></div>
        </div>
        </div>

        <div className={styles.reviewBar}>
        <div >
        <span className={styles.reviewStar}>★</span> 3
        </div>
        <div className={[styles.progressContainer, styles.roundBar].join(" ")}>
          <div className={[styles.progressBar, styles.roundBar].join(" ")} style={{ width: `${this.props.stars[3]/this.props.count*100}%` }}></div>
        </div>
        </div>

        <div className={styles.reviewBar}>
        <div >
        <span className={styles.reviewStar}>★</span> 2
        </div>
        <div className={[styles.progressContainer, styles.roundBar].join(" ")}>
          <div className={[styles.progressBar, styles.roundBar].join(" ")} style={{ width: `${this.props.stars[2]/this.props.count*100}%` }}></div>
        </div>
        </div>

        <div className={styles.reviewBar}>
          <div >
           <span className={styles.reviewStar}>★</span> 1
          </div>
        <div className={[styles.progressContainer, styles.roundBar].join(" ")}>
          <div className={[styles.progressBar, styles.roundBar].join(" ")} style={{ width: `${this.props.stars[1]/this.props.count*100}%` }}></div>
        </div>
        </div>
       
      </div>

    )
  }
}

export default ReviewHistogram;