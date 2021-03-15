import { render, screen, cleanup } from '@testing-library/react';
// eslint-disable-next-line jest/no-mocks-import
import { _mockMenus, mockAdd } from '__mocks__/order/menus';
import { MemoryRouter } from "react-router-dom";
import '@testing-library/jest-dom';
import OrderForm from './orderForm';


// reset after each test run
afterEach(cleanup);

describe('should render order form & order form components', () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <OrderForm />
      </MemoryRouter>
    );
  });

  it('should render without any errors', () => {
    expect(screen.getByTestId("order-form")).toBeInTheDocument()
  });

  it('should render the clientName input field', () => {
    expect(screen.getByRole('textbox', { name: "client-name-input" })).toBeInTheDocument();
  })
  it('should render the clientAddress input field', () => {
    expect(screen.getByRole('textbox', { name: "client-address-input" })).toBeInTheDocument();
  })
  it('should render the clientPhone input field', () => {
    expect(screen.getByRole('spinbutton', { name: "client-phone-input" })).toBeInTheDocument();
  })
  it('should render the comments input field', () => {
    expect(screen.getByRole('textbox', { name: "comments-input" })).toBeInTheDocument();
  })

});

describe('should display the correct number of menus', () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <OrderForm
          menus={_mockMenus} />
      </MemoryRouter>
    );
  });

    it('should have the correct number of menus displayed', () => {
      const elemDish = screen.getByTestId("elem-dish")
      expect(elemDish.children.length).toEqual(2);
    });
  });

