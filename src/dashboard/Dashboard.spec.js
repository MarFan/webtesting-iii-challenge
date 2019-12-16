import React from 'react'
import { render, fireEvent } from '@testing-library/react';

import Dashboard from './Dashboard';

test('The Gate is open and unlocked.', () => {
   
    const locked = false,
        closed = false;

    const { getByText, getByTestId, rerender } = render(<Dashboard />);

    getByTestId(/controls/i); // Controls are loading
    getByTestId(/display/i); // Display is loading

    // default states
    getByText(/^unlocked$/i); // the gate is unlocked
    getByText(/^open$/i);  // the gate is open

    rerender(<Dashboard locked={locked} closed={!closed} />); // start with gate closed
    fireEvent.click(getByText(/^lock gate$/i)); // lock the gate!

});