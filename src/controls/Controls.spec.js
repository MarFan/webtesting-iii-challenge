import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import Controls from './Controls';

test('Close the gate', () => {

    const locked = false;
    const closed = false;

    const { getByText, rerender } = render(<Controls />);

    const closeTheGate = getByText(/^close gate$/i); // can we close the gate?
    expect(getByText(/^lock gate$/i).disabled).toBeTruthy(); // can't click "Lock Gate"
    fireEvent.click(closeTheGate); // the gate is now closed!
    //fireEvent.click(getByText(/^close gate$/i)) // expect the button label to change
    // the gate is now closed 

    rerender(<Controls locked={locked} closed={!closed} />) // is the gate really closed?
    //const openTheGate = getByText(/^open gate$/i); 
    getByText(/^open gate$/i); // can the gate be reopened?

    rerender(<Controls locked={locked} closed={!closed} />);
    const LockTheGate = getByText(/^lock gate$/i)//Lock the gate, keeping it closed
    expect(LockTheGate.disabled).toBeFalsy();
    fireEvent.click(LockTheGate); // Lock the Gate!
    
    rerender(<Controls locked={!locked} closed={!closed} />);
    getByText(/^unlock gate$/i);
    expect(getByText(/^open gate$/i).disabled).toBeTruthy();
})