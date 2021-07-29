import { fireEvent, render, screen } from '@testing-library/react'

import React from 'react'
import Table from "../components/react-dj-table/index";
import data from "../data.json";

const options = {
    editable: true,
    pageable: true,
    dateCols: [{ PurchaseDate: 'en-GB' }]
}


it('checkbox change test', () => {
    const { getByText } = render(<Table json={data} options={options} />)

    expect(getByText(/CreditCards/i)).toBeInTheDocument()
    fireEvent.click(getByText('Vantage'))
    const checkbox = screen.getByTestId('cbox')
    const isChecked = checkbox.checked
    fireEvent.click(checkbox);
    fireEvent.click(checkbox, { target: { checked: true } })
    expect(checkbox.checked).toEqual(!isChecked)

})


