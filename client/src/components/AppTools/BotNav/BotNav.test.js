import React from 'react';
import BotNav from './BotNav';
import '@testing-library/jest-dom';
import { Router, Route, Switch } from 'react-router-dom';
import { render, screen, UserEvent } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import userEvent from '@testing-library/user-event';
import App from './../../../App';

describe('BotNav', () => {
  const history = createMemoryHistory();
  const route = '/';
  history.push(route);

  test('navigates to the home page', () => {
    render(
      <Router path="/" history={history}>
        <App />
      </Router>
    );
    const bottomNavFirstPage = screen.getByTestId('bottomNavAction1');
    expect(bottomNavFirstPage).toBeInTheDocument();

    userEvent.click(bottomNavFirstPage);

    expect(screen.getByTestId('home')).toBeInTheDocument();
  });
});