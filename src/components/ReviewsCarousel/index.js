// Write your code here
import React, {Component} from 'react'

import './index.css'

class ReviewsCarousel extends Component {
  state = {
    urlData: '',
    currentUser: 0,
    arraySize: '',
  }

  componentDidMount() {
    const {reviewsList} = this.props
    this.setState({arraySize: reviewsList.length - 1})
  }

  nextUser = () => {
    const {currentUser, arraySize} = this.state
    if (currentUser !== arraySize) {
      this.setState({currentUser: currentUser + 1})
    }
  }

  prevUser = () => {
    const {currentUser} = this.state
    if (currentUser !== 0) {
      this.setState({currentUser: currentUser - 1})
    }
  }

  render() {
    const {urlData, currentUser} = this.state
    const {reviewsList} = this.props

    return (
      <div className="app-container">
        <h1>Reviews</h1>
        <img
          src={reviewsList[currentUser].imgUrl}
          alt={reviewsList[currentUser].username}
        />
        <div className="arrow-container">
          <button onClick={this.prevUser} testid="leftArrow">
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
            />
          </button>
          <p>{reviewsList[currentUser].username}</p>
          <button onClick={this.nextUser} testid="rightArrow">
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
            />
          </button>
        </div>
        <p>{reviewsList[currentUser].companyName}</p>
        <p>{reviewsList[currentUser].description}</p>
      </div>
    )
  }
}
export default ReviewsCarousel
