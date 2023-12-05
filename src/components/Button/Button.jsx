import React from 'react';

import { ButtonLoad } from './Button.styled';

const Button = ({ text, type, onClick }) => {
  return (
    <ButtonLoad type={type} onClick={onClick}>
      {text}
    </ButtonLoad>
  );
};

export default Button;
