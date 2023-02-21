import PropTypes from 'prop-types';
import React from "react"

export class Statistics extends React.Component {
    static defaultProps = {
        good: 0,
        neutral: 0,
        bad: 0,
    };

    static propTypes = {
        good: PropTypes.number,
        neutral: PropTypes.number,
        bad: PropTypes.number,
    };

    state = {
        good: this.props.good,
        neutral: this.props.neutral,
        bad: this.props.bad,
      };

    handleGood = () => {
        this.setState((prevState) => ({
            good: prevState.good + 1
        }));
    };
    handleNeutral = () => {
        this.setState((prevState) => ({
                neutral: prevState.neutral +1
        }));
    };
    handleBad = () => {
        this.setState((prevState) => ({
                bad: prevState.bad + 1,
        }));
    };

    // countTotalFeedback = () => {
    //     this.setState((prevState) => ({
    //      totalFeedback: prevState.bad + prevState.neutral + prevState.good
    //     }));
    // };
    // countPositiveFeedbackPercentage();

    render() {
        return (
            <div>
    <h2>Please leave feedback</h2>
    <div>
      <button type="button" onClick={this.handleGood}>Good</button>
      <button type="button" onClick={this.handleNeutral}>Neutral</button>
      <button type="button" onClick={this.handleBad}>Bad</button>
    </div>
    <h3>Statistics</h3>
    <p>Good: {this.state.good}</p>
    <p>Neutral: {this.state.neutral}</p>
    <p>Bad: {this.state.bad}</p>
    {/* <p>Total: {this.countTotalFeedback}</p> */}
  </div>
        )
    }
}
