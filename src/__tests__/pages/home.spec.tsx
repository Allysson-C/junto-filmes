import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import MockAdapter from 'axios-mock-adapter';
import api from '../../services/omdb-api';

import Home from '../../pages/Home';

const apiMock = new MockAdapter(api);

const mockedToastError = jest.fn();

jest.mock('react-toastify', () => {
  return {
    toast: () => ({
      error: mockedToastError,
    }),
  };
});

describe('Home Page', () => {
  it('should be able to search a movie', async () => {
    const { getByPlaceholderText, getByText, getByTestId } = render(<Home />);
    const apiResponse = {
      Title: 'Jhon Doe',
      Year: '2012',
      imdbID: '12345',
      Type: 'movie',
      Poster: 'N/A',
    };

    apiMock
      .onGet(
        `?apikey=${process.env.REACT_APP_OMDB_API_KEY}&s=${'Johndoe'}&page=1`,
      )
      .reply(200, apiResponse);

    const inputField = getByPlaceholderText('Enter the name of the movie');
    const buttonElement = getByText('Search');

    fireEvent.change(inputField, { target: { value: 'Johndoe' } });
    fireEvent.click(buttonElement);

    expect(getByTestId('movie-list-container')).toContainHTML(
      '<div data-testid="movie-list-item"></div>',
    );
  });

  it('should display an error if the search input is empty', async () => {
    const { getByPlaceholderText, getByText } = render(<Home />);

    const inputField = getByPlaceholderText('Enter the name of the movie');
    const buttonElement = getByText('Search');

    fireEvent.click(buttonElement);

    expect(inputField).toHaveStyle('border-color: #c53030;');
  });

  it('should display an error if the api returns an empty object', async () => {
    const { getByPlaceholderText, getByText } = render(<Home />);
    const apiResponse = {
      Response: true,
      Search: [],
      totalResults: 0,
      Error: 'movie not found',
    };

    apiMock
      .onGet(
        `?apikey=${process.env.REACT_APP_OMDB_API_KEY}&s=${'Jhon Doe'}&page=1`,
      )
      .reply(200, apiResponse);

    const inputField = getByPlaceholderText('Enter the name of the movie');
    const buttonElement = getByText('Search');

    fireEvent.change(inputField, { target: { value: 'Jhon Doe' } });
    fireEvent.click(buttonElement);

    expect(mockedToastError).toHaveBeenCalled();
  });
});
