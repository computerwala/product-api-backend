import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import ProductDetails from './ProductDetails';

jest.mock('../api/products', () => ({
  fetchProductById: jest.fn(() => Promise.resolve({
    id: '1',
    title: 'Test Product',
    description: 'This is a test product',
    price: 99.99,
    thumbnail: 'test-thumbnail.jpg',
  })),
}));

describe('ProductDetails Component', () => {
  test('renders loading state initially', () => {
    render(
      <BrowserRouter>
        <ProductDetails />
      </BrowserRouter>
    );
    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });

  test('renders product details', async () => {
    render(
      <BrowserRouter>
        <ProductDetails />
      </BrowserRouter>
    );
    expect(await screen.findByText(/test product/i)).toBeInTheDocument();
    expect(screen.getByText(/this is a test product/i)).toBeInTheDocument();
    expect(screen.getByText(/99.99/i)).toBeInTheDocument();
  });
}); 