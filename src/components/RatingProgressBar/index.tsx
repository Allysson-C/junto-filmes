import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';

import { IRatingProgressBarProps } from './interface';

import * as S from './styles';

const RatingProgressBar: React.FC<IRatingProgressBarProps> = ({
  color = 'rgb(144, 0, 255)',
  label,
  value,
}) => {
  return (
    <S.RatingContainer>
      <S.CircleBarContainer>
        <CircularProgressbar
          value={value}
          text={`${value}`}
          styles={{
            path: {
              stroke: color,
            },
            text: {
              fontSize: '32px',
              fontWeight: 700,
              fill: color,
            },
          }}
        />
      </S.CircleBarContainer>

      <S.RatignText>{label}</S.RatignText>
    </S.RatingContainer>
  );
};

export default RatingProgressBar;
