import { fireEvent, render } from '@testing-library/react'

import React from 'react'
import Table from "../components/react-dj-table/index";
import data from "../data.json";

let options = {
    pageable: true,
    sortable: true,
    dateCols: [{ PurchaseDate: 'en-GB' }]
}


it('sort enabled test', () => {
    const { getByText } = render(<Table json={data} options={options} />)
    fireEvent.click(getByText('Model'))
    expect(getByText(/Express 2500/i)).toBeInTheDocument()
})

options.sortable = false

it('sort disable test', () => {
    const { getByText } = render(<Table json={data} options={options} />)
    fireEvent.click(getByText('Model'))
    fireEvent.click(getByText(/Express 2500/i))
    expect(getByText(/Express 2500/i)).toBeInTheDocument()
})