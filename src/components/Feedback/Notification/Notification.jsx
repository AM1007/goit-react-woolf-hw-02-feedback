import React from 'react';
import PropTypes from 'prop-types';

import { TextInfo } from './Notification.styled';

export const Notification = ({ message }) => <TextInfo>{message}</TextInfo>;

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
