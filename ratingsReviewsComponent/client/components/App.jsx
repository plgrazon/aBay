import React, { Component } from 'react';
import axios from 'axios';
import TopBar from './top_bar/TopBar.jsx';
import Reviews from './reviews/Reviews.jsx';
import styles from '../App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      reviews: []
    }
  }

  componentDidMount() {
    this.getReviews()

  }

  getReviews() {
    axios.get('http://ec2-34-219-117-99.us-west-2.compute.amazonaws.com:1111/api/reviews')
    .then(({ data }) => {
      console.log('data from get request', data)
      this.setState({
        reviews: data,
      }, () => console.log('this.state', this.state.reviews))
    })
    .catch(err => console.log('error in get request'))
  }

  writeReview(data) {
    axios.post('http://ec2-34-219-117-99.us-west-2.compute.amazonaws.com:1111/api/reviews', {
      params: {
        review: data
      }
    })
    .then(data => {
      console.log("data in post", data)
    })
    .catch(err => {
      console.log('there was an error in post')
    })
  }


  render() {
    return (
      <div className='reviewsApp'>
      <div className={styles.reviews}>
        <div>
          <TopBar />
          <Reviews reviews={this.state.reviews}/>
        </div>
      </div>
      </div>
    )
  }
}

export default App;