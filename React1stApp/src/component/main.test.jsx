import { render, screen } from '@testing-library/react';
import Main from './Main';

test('renders main component', () => {
    render(<Main />);
    const linkElement = screen.getByText(/main component/i);
    expect(linkElement).toBeInTheDocument();
});