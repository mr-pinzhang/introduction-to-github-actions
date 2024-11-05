import { render, screen } from '@testing-library/react';

import { TubiLogo } from './TubiLogo';

test('renders Tubi logo', () => {
  render(<TubiLogo />);

  const logo = screen.getByRole('tubi-logo');
  expect(logo).toBeInTheDocument();
});
