import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Router, MemoryRouter } from "react-router-dom";
import { createMemoryHistory } from 'history';
import BotNav from './BotNav';

it('should render without any errors', () => {
  render(
    <MemoryRouter>
      <BotNav/>
    </MemoryRouter>
  );
  expect(screen.getByRole('navigation')).toBeInTheDocument();
})

describe('should contain all navbar links', () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <BotNav/>
      </MemoryRouter>
    );
  })

  it('should contain the "Get Started" link', () => {
    expect(screen.getByTestId('getstarted-button')).toBeInTheDocument();
  })

  it('should contain the Home link', () => {
    expect(screen.getByTestId('home-button')).toBeInTheDocument();
  })

  it('should contain the User link', () => {
    expect(screen.getByTestId('user-button')).toBeInTheDocument();
  })
});


describe('should correctly navigate to assigned links', () => {
  let history;
  beforeEach(() => {
    history = createMemoryHistory();
    history.push = jest.fn();
    render(
      <Router history={history}>
        <BotNav/>
      </Router>
    );
  })

  it('should navigate to create_order when user button is clicked', () => {
    fireEvent.click(screen.getByTestId('user-button'));
    expect(history.push).toHaveBeenCalledWith('/create_order');
  })

  it('should navigate to root when home button is clicked', () => {
    fireEvent.click(screen.getByTestId('home-button'));
    expect(history.push).toHaveBeenCalledWith('/');
  })

  it('should navigate to get-started page when get-started button is clicked', () => {
    fireEvent.click(screen.getByTestId('getstarted-button'));
    expect(history.push).toHaveBeenCalledWith('/get_started');
  })
});