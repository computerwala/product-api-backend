import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Home from './Home';

jest.mock('../api/products', () => ({
  fetchProducts: jest.fn(() => Promise.resolve([])),
}));

jest.mock('../components/SearchBar', () => () => <div>SearchBar</div>);

describe('Home Component', () => {
  test('renders loading state initially', () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );
    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });

  test('renders product search title', async () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );
    expect(screen.getByText(/product search/i)).toBeInTheDocument();
  });
}); 