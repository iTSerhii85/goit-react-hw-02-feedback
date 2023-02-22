import React from "react"
import { GlobalStyle } from "./GlobalStyle";
import { Layout } from "./Layout";

import { Section } from "./Section";
import { Statistics } from "./Statistics";
import { FeedbackOptions } from "./FeedbackOptions";

export class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = (key) => {
    if (key === 'good') {
      this.setState((prevState) => ({
        good: prevState.good + 1
      }));
    }
    if (key === 'neutral') {
      this.setState((prevState) => ({
        neutral: prevState.neutral +1
      }));
    }
    if (key === 'bad') {
      this.setState((prevState) => ({
        bad: prevState.bad + 1,
      }));
    }
  };

  render(){
    const optionNames = ['good', 'neutral', 'bad'];

    const { good, neutral, bad } = this.state;

    const countTotalFeedback = good + neutral + bad;
    const countPositiveFeedbackPercentage = Math.round(good / countTotalFeedback * 100);

    return (
    <Layout>
      <GlobalStyle/>
      <Section title="Please leave feedback">
        <FeedbackOptions options={optionNames} onLeaveFeedback={this.onLeaveFeedback}></FeedbackOptions>
      </Section>
      <Section title="Statistics">
        <Statistics good={this.state.good} neutral={this.state.neutral} bad={this.state.bad} total={countTotalFeedback} positivePercentage={countPositiveFeedbackPercentage}/>
      </Section>
    </Layout>
  )
 }
}