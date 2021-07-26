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

it('shows success message after confirm button is clicked', () => {
    const { getByText } = render(<Table json={data} options={options} />)

    expect(getByText(/CreditCards/i)).toBeInTheDocument()

    fireEvent.click(getByText('create'))
    fireEvent.click(getByText('9'))
    expect(getByText('insert')).toBeInTheDocument()
})