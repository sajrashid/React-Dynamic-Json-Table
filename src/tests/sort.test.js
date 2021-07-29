import { fireEvent, render, screen } from '@testing-library/react'

import React from 'react'
import Table from "../components/react-dj-table/index";
import data from "../data.json";

const options = {
    editable: true,
    pageable: true,
    dateCols: [{ PurchaseDate: 'en-GB' }]
}

it('shows if row value has been updated', () => {
    const { getByText } = render(<Table json={data} options={options} />)
    fireEvent.click(getByText('Model'))
    expect(getByText(/Express 2500/i)).toBeInTheDocument()
})