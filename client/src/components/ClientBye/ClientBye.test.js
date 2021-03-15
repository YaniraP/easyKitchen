import ClientBye from './ClientBye';
import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';

render(<ClientBye/>);

it('should render the bye message', () => {
  expect(screen.getByText('Enjoy your Meal!')).toBeInTheDocument();
})

