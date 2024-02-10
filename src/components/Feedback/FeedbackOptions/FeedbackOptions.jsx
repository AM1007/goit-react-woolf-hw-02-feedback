import React from 'react';
import PropTypes from 'prop-types';

import { Button, ButtonContainer } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <ButtonContainer>
    {options.map((option, index) => (
      <Button key={index} onClick={() => onLeaveFeedback(option)}>
        {option}
      </Button>
    ))}
  </ButtonContainer>
);

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
