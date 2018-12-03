import React, { Component } from 'react';
import ContentWrap from './topBarComponents/ContentWrap.jsx';
import ReviewHistogram from './topBarComponents/ReviewHistogram.jsx';
import PieContainer from './topBarComponents/PieContainer.jsx';
import axios from 'axios';
import styles from '../../App.css';

class TopBar extends Component {
  constructor() {
    super();

    this.state = {
      averageRating: 0,
      reviewAmount: 0,
      starPercentage: 0, 
      totalCount:0 ,
      numberStars: {}
      
    }
  }
  componentDidMount() {
    this.getAverageRating();

  }

  getAverageRating() {
    axios.get('http://ec2-34-219-117-99.us-west-2.compute.amazonaws.com:1111/api/rating')
      .then(({ data }) => {
        console.log('data on get', data)
        this.setState({
          reviewAmount: data.length
        })
        this.calculateAverageRating(data)
        this.getNumberOfStars(data)
      })
      .catch(err => {
        console.log('There was error in get request')
      })
  }

  calculateAverageRating(data) {
    let totalCount = 0
    let totalStars = 0;
    data.forEach(entry => {
      totalStars += entry.stars;
      totalCount++
    })
    this.setState({
      averageRating: (totalStars / (data.length)).toFixed(1),
      starPercentage: (((totalStars / (data.length)).toFixed(1)/ 5)* 100),
      totalCount: totalCount
    }, () => console.log('this.state.averageRating', this.state.totalCount))

  }

  getNumberOfStars(data) {
    let numberStars = {}
    data.forEach(entry => {
      if (!numberStars[entry.stars]) {
        numberStars[entry.stars] = 0
      }
      numberStars[entry.stars] += 1;
    })
    this.setState({
      numberStars: numberStars
    })
  }


  render() {
    return (
      <div className="topBar">
      <div className={styles.ratingsHeaderContainer}>
      <span className={styles.ratingsHeaderText}>Ratings and Reviews</span>
      <div className={styles.writeBtn}>
      <button className={styles.writeBtn}>Write a review</button>
      </div>
        {/* <hr className={styles.blackLine} /> */}
        </div>
        <div className={styles.ratingBarContainer}>
          <ContentWrap average={this.state.averageRating} reviewAmount={this.state.reviewAmount} percentage={this.state.starPercentage}/>
          <ReviewHistogram stars={this.state.numberStars} count={this.state.totalCount}/>
          {/* <PieContainer /> */}
        </div>
      </div>

    )
  }
}

export default TopBar;
