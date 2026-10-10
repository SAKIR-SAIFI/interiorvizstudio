import { fireEvent, render, screen, within } from '@testing-library/react';
import Portfolio from './components/Portfolio';

jest.mock('./components/portfolioAssets', () => ({
  media: [
    {
      path: './bedroom/sample bedroom.jpg',
      src: '/sample-bedroom.jpg',
      folder: 'bedroom',
      fileName: 'sample bedroom.jpg',
      isPdf: false,
    },
    {
      path: './bedroom/sample bedroom two.jpg',
      src: '/sample-bedroom-2.jpg',
      folder: 'bedroom',
      fileName: 'sample bedroom two.jpg',
      isPdf: false,
    },
    {
      path: './resturant/1.pdf',
      src: '/restaurant-portfolio.pdf',
      folder: 'resturant',
      fileName: '1.pdf',
      isPdf: true,
    },
  ],
}));

test('shows portfolio categories and opens their image gallery', () => {
  render(<Portfolio />);

  expect(screen.getByRole('heading', { name: /featured projects/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: 'Bedrooms' })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: 'Restaurant' })).toBeInTheDocument();

  fireEvent.click(screen.getByRole('button', { name: 'Explore Bedrooms gallery' }));

  expect(screen.getByRole('dialog', { name: 'Bedrooms' })).toBeInTheDocument();
  expect(screen.getAllByRole('img').length).toBeGreaterThan(0);
});

test('opens a category gallery from its cover image', () => {
  render(<Portfolio />);

  fireEvent.click(screen.getByRole('button', { name: 'Open Bedrooms project images' }));

  expect(screen.getByRole('dialog', { name: 'Bedrooms' })).toBeInTheDocument();
});

test('shows gallery images in a carousel navigable with arrow keys', () => {
  render(<Portfolio />);

  fireEvent.click(screen.getByRole('button', { name: 'Open Bedrooms project images' }));
  fireEvent.click(screen.getByRole('button', { name: 'View sample bedroom in carousel' }));

  const carousel = screen.getByRole('dialog', { name: 'Bedrooms image carousel' });
  expect(within(carousel).getByAltText('sample bedroom')).toBeInTheDocument();

  fireEvent.keyDown(window, { key: 'ArrowRight' });
  expect(within(carousel).getByAltText('sample bedroom two')).toBeInTheDocument();

  fireEvent.keyDown(window, { key: 'ArrowLeft' });
  expect(within(carousel).getByAltText('sample bedroom')).toBeInTheDocument();

  fireEvent.keyDown(window, { key: 'Escape' });
  expect(carousel).not.toBeInTheDocument();
  expect(screen.getByRole('dialog', { name: 'Bedrooms' })).toBeInTheDocument();

  fireEvent.keyDown(window, { key: 'Escape' });
  expect(screen.queryByRole('dialog', { name: 'Bedrooms' })).not.toBeInTheDocument();
});

test('moves the carousel with the previous and next buttons', () => {
  render(<Portfolio />);

  fireEvent.click(screen.getByRole('button', { name: 'Open Bedrooms project images' }));
  fireEvent.click(screen.getByRole('button', { name: 'View sample bedroom in carousel' }));

  const carousel = screen.getByRole('dialog', { name: 'Bedrooms image carousel' });
  fireEvent.click(within(carousel).getByRole('button', { name: 'Next image' }));
  expect(within(carousel).getByAltText('sample bedroom two')).toBeInTheDocument();

  fireEvent.click(within(carousel).getByRole('button', { name: 'Previous image' }));
  expect(within(carousel).getByAltText('sample bedroom')).toBeInTheDocument();
});
