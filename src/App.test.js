<<<<<<< HEAD
import { afterEach, fireEvent, render, screen } from '@testing-library/react';
import App from './App';

afterEach(() => {
  jest.restoreAllMocks();
});

test('scrolls to the top when navigating to another page', () => {
  const scrollTo = jest.spyOn(window, 'scrollTo').mockImplementation(() => {});
=======
import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('scrolls to the top when navigating to another page', () => {
  const scrollTo = jest
    .spyOn(window, 'scrollTo')
    .mockImplementation(() => {});
>>>>>>> 1e4b84005a8c88ac12c1cfd1068b3e976b0aafea
  render(<App />);

  scrollTo.mockClear();
  fireEvent.click(screen.getByRole('link', { name: /about us/i }));
<<<<<<< HEAD
  expect(scrollTo).toHaveBeenCalledWith(0, 0);
  expect(scrollTo).toHaveBeenCalledWith(0, 0);
=======

  expect(scrollTo).toHaveBeenCalledWith(0, 0);
  scrollTo.mockRestore();
>>>>>>> 1e4b84005a8c88ac12c1cfd1068b3e976b0aafea
});
