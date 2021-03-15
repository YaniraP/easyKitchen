import React from 'react';
import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Router } from "react-router-dom";
import { createMemoryHistory } from 'history';
import TopNav from './TopNav';

let history;

  beforeEach(() => {
    history = createMemoryHistory();
    history.push = jest.fn();

    render(
      <Router history={history}>
        <TopNav/>
      </Router>
    );
  })

  afterEach(cleanup);

  it('should render without any errors', () => {
    expect(screen.getByRole('menubar')).toBeInTheDocument();
  })

  it('should have the menu icon visible', () => {
    expect(screen.getByRole('button', {name: 'menu'})).toBeVisible();
  })

  it('should not have its menu items visible initially', () => {
    expect(screen.getByText('Add a dish')).not.toBeVisible();
    expect(screen.getByText('Create a menu')).not.toBeVisible();
    expect(screen.getByText('See menus')).not.toBeVisible();
    expect(screen.getByText('See orders')).not.toBeVisible();
  })

  it('should show menu items when clicked', () => {
    fireEvent.click(screen.getByRole('button', {name: 'menu'}));
    expect(screen.getByText('Add a dish')).toBeVisible();
    expect(screen.getByText('Create a menu')).toBeVisible();
    expect(screen.getByText('See menus')).toBeVisible();
    expect(screen.getByText('See orders')).toBeVisible();
  })


  describe('should navigate to corresponding components through menu items', () => {
    beforeEach(() => {
      fireEvent.click(screen.getByRole('button', {name: 'menu'}));
    })

    it('should navigate to /add_dish', () => {
      fireEvent.click(screen.getByText('Add a dish'));
      expect(history.push).toHaveBeenCalledWith('/add_dish');
    })

    it('should navigate to /create_menu', () => {
      fireEvent.click(screen.getByText('Create a menu'));
      expect(history.push).toHaveBeenCalledWith('/create_menu');
    })

    it('should navigate to /menu', () => {
      fireEvent.click(screen.getByText('See menus'));
      expect(history.push).toHaveBeenCalledWith('/menu');
    })

    it('should navigate to /order', () => {
      fireEvent.click(screen.getByText('See orders'));
      expect(history.push).toHaveBeenCalledWith('/order');
    })
  })