import { afterEach, fireEvent, render, screen } from '@testing-library/react';
import App from './App';

afterEach(() => {
  jest.restoreAllMocks();
});

test('scrolls to the top when navigating to another page', () => {
  const scrollTo = jest.spyOn(window, 'scrollTo').mockImplementation(() => {});
  render(<App />);

  scrollTo.mockClear();
  fireEvent.click(screen.getByRole('link', { name: /about us/i }));
  expect(scrollTo).toHaveBeenCalledWith(0, 0);
  expect(scrollTo).toHaveBeenCalledWith(0, 0);
});
