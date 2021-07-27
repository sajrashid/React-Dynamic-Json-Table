import { fireEvent, render, screen } from '@testing-library/react'

import React from 'react'
import Table from "../components/react-dj-table/index";
import data from "../data.json";

const options = {
    editable: true,
    pageable: true,
    dateCols: [{ PurchaseDate: 'en-GB' }]
}


it('pager next button click goes to next page', () => {
    const { getByText } = render(<Table json={data} options={options} />)

    expect(getByText(/CreditCards/i)).toBeInTheDocument()

    fireEvent.click(getByText('»'))

    expect(getByText(/2 of 2 pages/i)).toBeInTheDocument()
})

it('pager last button click goes to last page', () => {
    const { getByText } = render(<Table json={data} options={options} />)

    expect(getByText(/CreditCards/i)).toBeInTheDocument()

    fireEvent.click(getByText('›'))
    // this test needs reworking we need more data to goto page 3
    expect(getByText(/2 of 2 pages/i)).toBeInTheDocument()
})


it('pager firt button click goes back to first  page', () => {
    const { getByText } = render(<Table json={data} options={options} />)

    expect(getByText(/CreditCards/i)).toBeInTheDocument()

    fireEvent.click(getByText('›'))
    fireEvent.click(getByText('‹'))
    expect(getByText(/1 of 2 pages/i)).toBeInTheDocument()
})


it('pager previous button click goes back to first  page', () => {
    const { getByText } = render(<Table json={data} options={options} />)

    expect(getByText(/CreditCards/i)).toBeInTheDocument()

    fireEvent.click(getByText('›'))
    fireEvent.click(getByText('«'))
    expect(getByText(/1 of 2 pages/i)).toBeInTheDocument()
})

// test goto page

const setup = () => {

    const { getByText } = render(<Table json={data} options={options} />)
    expect(getByText(/CreditCards/i)).toBeInTheDocument()
    const input = screen.getByDisplayValue("1")

    return {
        input,
        getByText,
    }
}


it('shows if page no has changed after goto page no changed', () => {
    const { input, getByText } = setup()
    fireEvent.change(input, { target: { value: '2' } })
    expect(getByText(/2 of 2 pages/i)).toBeInTheDocument()
})

// test dropdown show
// it('shows if items  change after show drop down list changed', () => {
//     const { getByText } = setup()
//     const { getByTestId, getAllByTestId } = render(<Table json={data} options={options} />)
//     //The value should be the key of the option
//     //  fireEvent.change(getByTestId('showselect'), { target: { value: "Show 5" } })
//     userEvent.selectOptions(getByTestId('select'), '<value>');
//     expect((getByTestId('<value>')).selected).toBeTruthy();
//     expect((getByTestId('<another value>')).selected).toBeFalsy();
//     //...
// })