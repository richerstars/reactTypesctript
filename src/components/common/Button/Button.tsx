import React from 'react';
import { StBtn } from './styled';

type TButton = {
    onClick: () => void,
}

const Button = ({onClick}: TButton) => (
    <StBtn onClick={onClick}>
        More details
    </StBtn>
);

export default Button;
