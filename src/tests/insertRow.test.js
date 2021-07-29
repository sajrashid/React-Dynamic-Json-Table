import { fireEvent, render } from '@testing-library/react'

import Table from "../components/react-dj-table/index";
import data from "../data.json"

const options = {
    editable: true,
    pageable: true,
    dateCols: [{ PurchaseDate: 'en-GB' }]
}
const click = (row, oldRowData, action, dispatch) => {
}


it('shows if row  has been inserted', () => {
    const { getByText } = render(<Table rowClick={click} json={data} options={options} />)
    fireEvent.click(getByText('create'))
})

//TODO needs looking at
