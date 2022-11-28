import React from "react";
import {render, cleanup, waitFor, screen} from '@testing-library/react';

import SubjectScore from '../lib/components/SubjectScore';

const props = {
    subject: 'test',
    showDescription: true
}

const propsError = {
    subject: '#',
    showDescription: true
}

jest.setTimeout(20000)

jest.mock()

afterEach(() => cleanup)

it('render', async() => {
render(<SubjectScore {...props} />)
expect(screen.getByTestId('loader')).toBeTruthy()
await waitFor(() => expect(screen.getByText('60')).toBeTruthy(), {
    timeout: 6000,
})
})

it('error', async() => {
    render(<SubjectScore {...propsError} />)
    await waitFor(() => expect(screen.getByText('Something went wrong with error "Bad Request"')).toBeTruthy() ,{
        timeout: 10000,
    })
})