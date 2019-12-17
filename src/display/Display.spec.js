// Test away!
import React from 'react';
import { render } from '@testing-library/react';

import Display from './Display';

test('Can we close the gate?', () => {
    const locked = false,
        closed = false;

    const { getByText, rerender, container } = render(<Display />)

    // Unlocked and open
    getByText(/unlocked/i);
    getByText(/open/i);

    // gate is closed
    rerender(<Display locked={locked} closed={!closed} />)
    getByText(/closed/i);
    getByText(/unlocked/i);
    expect(getByText(/locked/i).getAttribute('class')).toMatch(new RegExp('green'))

    // gate is locked and closed
    rerender(<Display locked={!locked} closed={!closed} />)
    getByText(/locked/i);
    //console.log()
    //expect(getByText(/locked/i).getAttribute('class')).stringMatching(/red-led/)
    // expect(getByText(/locked/i).getAttribute('class')).toEqual('red-led')
    // expect(getByText(/locked/i).getAttribute('class')).stringContaining(/red-led/i)
    expect(getByText(/locked/i).getAttribute('class')).toMatch(new RegExp('red'))
    getByText(/closed/i);
})