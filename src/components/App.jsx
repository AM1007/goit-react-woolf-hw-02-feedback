import React, { Component } from 'react';

import { FeedbackOptions } from './Feedback/FeedbackOptions/FeedbackOptions';
import { Statistics } from './Feedback/Statistics/Statistics';
import { Section } from './Feedback/Section/Section';
import { Notification } from './Feedback/Notification/Notification';

export class App extends Component {
  static defaultProps = {
    total: 0,
    positivePercentage: 0,
  };

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    const result = good + neutral + bad;

    return result;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const result = this.countTotalFeedback();
    const positiveFeedback = (good * 100) / result;

    return Math.round(positiveFeedback);
  };

  handleFeedback = evt => {
    this.setState(prevState => ({ [evt]: prevState[evt] + 1 }));
  };

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <div style={{ margin: '35vh', marginLeft: 'auto', marginRight: 'auto' }}>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.handleFeedback}
          />
        </Section>

        <Section title="Statistics">
          {this.countTotalFeedback() !== 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback"></Notification>
          )}
        </Section>
      </div>
    );
  }
}
