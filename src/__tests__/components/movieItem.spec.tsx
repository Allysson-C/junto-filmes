import React from 'react';
import { fireEvent, render, waitFor } from '@testing-library/react';

import MovieItem from '../../components/MovieItem';

const mockedHistoryPush = jest.fn();

jest.mock('react-router-dom', () => {
  return {
    useHistory: () => ({
      push: mockedHistoryPush,
    }),
  };
});

describe('Movie item component', () => {
  it('should display an movie item', () => {
    const { getByText } = render(
      <MovieItem
        Title="Jhon Doe"
        Year="2012"
        Type="movie"
        Poster="N/A"
        imdbID="12345"
      />,
    );

    expect(getByText('Jhon Doe')).toBeTruthy();
    expect(getByText('2012')).toBeTruthy();
  });

  it('should be able to see the details of the film', async () => {
    const { getByTestId } = render(
      <MovieItem
        Title="Jhon Doe"
        Year="2012"
        Type="movie"
        Poster="N/A"
        imdbID="12345"
      />,
    );

    const movieItemElement = getByTestId('movie-list-item');
    fireEvent.click(movieItemElement);

    await waitFor(() =>
      expect(mockedHistoryPush).toHaveBeenCalledWith({
        pathname: '/movie-details',
        state: { id: '12345' },
      }),
    );
  });
});
