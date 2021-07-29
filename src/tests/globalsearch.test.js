import { fireEvent, render, screen } from '@testing-library/react'

import GlobalSearch from "../components/react-dj-table/children/globalsearch";
import React from 'react'
import Table from "../components/react-dj-table/index";
import data from "../data.json";
import pretty from "pretty";

const options = {
  editable: true,
  pageable: true,
  searchable: true,
  dateCols: [{ PurchaseDate: "en-GB" }],
};

const state = {
  json: data,
  jsonCopy: data,
  options: options,
};

const div = document.createElement("div");
document.body.appendChild(div);

test("renders global search", async () => {
  const { container } = render(<GlobalSearch state={state} />, {
    container: div,
  });

  expect(pretty(container.innerHTML)).toMatchInlineSnapshot(
    `"<div><input name=\\"globalSearch\\" placeholder=\\" search 11 records\\" type=\\"text\\" value=\\"\\"></div>"`
  ); /* ... gets filled automatically by jest ... */
});

const setup = () => {
  const { getByText } = render(<Table json={data} options={options} />)
  const input = screen.getByDisplayValue("")
  return {
    input,
    getByText,
  };
};

it("shows if page no has changed after search changed", () => {
  const { input, getByText } = setup();
  fireEvent.change(input, { target: { value: "Vantage" } });
  expect(getByText(/1 of 1 pages/i)).toBeInTheDocument();
  fireEvent.change(input, { target: { value: "" } });
  expect(getByText(/1 of 2 pages/i)).toBeInTheDocument();

});



