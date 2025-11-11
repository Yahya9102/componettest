import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ClickCounter from './ClickCounter';
import { expect, test } from 'vitest';

test('visar antal klick och Bra-meddelande vid 5 klick', async () => {
  render(<ClickCounter />);

  const button = screen.getByRole('button', { name: /klicka/i });

  // Klicka 5 gånger
  for (let i = 0; i < 5; i++) {
    await userEvent.click(button);
  }

  expect(screen.getByText('Antal klick: 5')).toBeInTheDocument();
  expect(screen.getByText('Bra jobbat!')).toBeInTheDocument();
});


