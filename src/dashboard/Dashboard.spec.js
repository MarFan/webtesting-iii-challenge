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

    const closeTheGate = getByText(/^close gate$/i); // can we close the gate?
    expect(getByText(/^lock gate$/i).disabled).toBeTruthy(); // can't click "Lock Gate"
    //fireEvent.click(closeTheGate); // the gate is now closed!
    fireEvent.click(getByText(/^close gate$/i)) // expect the button label to change
    
    getByText(/^open gate$/i);

    //const closeTheGate = getByText(/^close gate$/i); // can we close the gate?
    expect(getByText(/^lock gate$/i).disabled).toBeFalsy(); // can't click "Lock Gate"
    fireEvent.click(getByText(/^lock gate$/i)); // the gate is now closed!
    expect(getByText(/locked/i).getAttribute('class')).toMatch(new RegExp('red'))

});