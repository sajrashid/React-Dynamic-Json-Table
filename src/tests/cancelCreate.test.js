import { fireEvent, render } from '@testing-library/react'

import React from 'react'
import Table from "../components/react-dj-table/index";
import data from "../data.json";

const options = {
    editable: true,
    pageable: true,
    dateCols: [{ PurchaseDate: 'en-GB' }]
}
const div = document.createElement("DIV");
document.body.appendChild(div);

it('shows create button after create button is clicked', () => {
    const { getByText } = render(<Table json={data} options={options} />)

    expect(getByText(/CreditCards/i)).toBeInTheDocument()

    fireEvent.click(getByText('create'))
    fireEvent.click(getByText('cancel'))
    expect(getByText('cancel')).toBeInTheDocument()
})
