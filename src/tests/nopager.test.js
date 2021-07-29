import { fireEvent, render, screen } from '@testing-library/react'

import Table from "../components/react-dj-table/index";
import data from "../data.json";

const options = {
    editable: true,
    searchable: true,
    dateCols: [{ PurchaseDate: "en-GB" }],
};

const nopager = () => {
    const { getByText } = render(<Table json={data} options={options} />)
    const input = screen.getByDisplayValue("")
    return {
        input,
        getByText,
    };
};


it("shows  page not changed after search", () => {
    const { input } = nopager();
    fireEvent.change(input, { target: { value: "Vantage" } });
    fireEvent.change(input, { target: { value: "" } });
    const nextButton = screen.queryAllByText('›')
    expect(nextButton).toHaveLength(0)

});