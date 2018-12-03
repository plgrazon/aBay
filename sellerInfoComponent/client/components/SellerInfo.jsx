import React, { Component } from "react";
import axios from "axios";
import styles from "../styles/SellerInfoStyles.css";
// const dburl = "http://18.191.155.175:7770";
class SellerInfo extends Component {
  constructor() {
    super();
    this.state = {
      sellers: false,
      sellerRatings: false
    };
  }
  componentDidMount() {
    this.sellers();
    this.sellerRatings();
    this.like;
  }
  sellers() {
    axios
      .get(/*${dburl}*/ `/api/sellers`)
      .then(res => this.setState({ sellers: res.data }))
      .then(() => console.log(this.state.sellers))
      .catch(err => console.log(`Error Finding Sellers ${err}`));
  }
  sellerRatings() {
    axios
      .get(/*${dburl}*/ `/api/sellerRatings/${this.state.sellers.id}`)
      .then(res => this.setState({ sellerRatings: res.data }))
      .then(() => console.log(`Current Ratings ${this.state.sellerRatings}`))
      .catch(err => `Error Finding Seller Ratings ${err}`);
  }
  like(id) {
    axios
      .patch(/*${dburl}*/ `/api/sellerLiked/${id}`)
      .then(res => this.setState({ sellers: [res.data] }))
      .catch(err => console.log(`Error Liking Seller ${err}`));
  }
  render() {
    return (
      <div>
        {this.state.sellers &&
          this.state.sellerRatings && (
            <div className={styles.sellerInfo}>
              <div>
                <span className={styles.sellerName}>
                  {this.state.sellers[0].name}
                </span>{" "}
                <span>
                  (
                  <a className={styles.sellerRating}>
                    {this.state.sellerRatings[0].id}
                  </a>
                  )
                </span>
              </div>
              <div>{this.state.sellerRatings[2]}% Positive feedback</div>
              <hr />
              <div>
                <a
                  onClick={() => this.like(this.state.sellers[0].id)}
                  className={styles.sellerLink}
                >
                  {this.state.sellers[0].isLiked ? "♥" : "♡"} Save this Seller
                </a>
              </div>
              <div>
                <a
                  className={styles.sellerEmail}
                  href={`mailto:${
                    this.state.sellers[0].email
                  }?Subject=Hello%20${this.state.sellers[0].name}`}
                  target="_top"
                >
                  Contact seller
                </a>
              </div>
            </div>
          )}
      </div>
    );
  }
}

export default SellerInfo;
