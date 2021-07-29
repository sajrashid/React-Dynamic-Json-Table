import { fireEvent, render, screen } from '@testing-library/react'

import Table from "../components/react-dj-table/index";
import data from "../data.json"

const options = {
    editable: true,
    pageable: true,
    dateCols: [{ PurchaseDate: 'en-GB' }]
}
const click = (row, oldRowData, action, dispatch) => {
    dispatch({ type: "ACTIONS.CONFIRMINSERT", payload: { id: 29 } });
}


it('shows if row  has been inserted', () => {
    const { getByText } = render(<Table rowClick={click} json={data} options={options} />)
    fireEvent.click(getByText('create'))
    expect(getByText(/CreditCards/i)).toBeInTheDocument()
    fireEvent.click(getByText('Vantage'))
    const checkbox = screen.getByTestId('cbox')
    const isChecked = checkbox.checked
    fireEvent.click(checkbox);
    fireEvent.click(checkbox, { target: { checked: true } })
    expect(checkbox.checked).toEqual(!isChecked)
    fireEvent.click(getByText('insert'))
})

//TODO needs looking at
