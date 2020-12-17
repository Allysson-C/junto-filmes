import React from 'react';
import { render } from '@testing-library/react';

import RatingProgressBar from '../../components/RatingProgressBar';

const mockedHistoryPush = jest.fn();

jest.mock('react-router-dom', () => {
  return {
    useHistory: () => ({
      push: mockedHistoryPush,
    }),
  };
});

describe('Rating progress bar component', () => {
  it('should display an rating progress bar', () => {
    const { getByText } = render(
      <RatingProgressBar
        label="Jhon Doe"
        value={64}
        color="rgb(144, 0, 255)"
      />,
    );

    expect(getByText('Jhon Doe')).toBeTruthy();
    expect(getByText('64')).toBeTruthy();
  });
});
