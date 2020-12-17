import React from 'react';
import { render } from '@testing-library/react';

import Favorite from '../../pages/Favorite';

const mockedHistoryGoBack = jest.fn();

jest.mock('react-router-dom', () => {
  return {
    useHistory: () => ({
      goBack: mockedHistoryGoBack,
    }),
  };
});

describe('Favorite Page', async () => {
  it('should be able to see favorite movies', () => {
    const { getByTestId } = render(<Favorite />);
    const getItemSpy = jest.spyOn(Storage.prototype, 'getItem');

    expect(getItemSpy).toHaveBeenCalledWith('@JuntoSegurosChallenge:movies');
  });
});
