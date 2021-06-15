import { render } from "@testing-library/react";
import Cells from "./cells";
import pretty from "pretty";
const options = {};
const row = {
  id: 0,
  name: "Cells Test",
  isbool: true,
  date: new Date().toLocaleDateString(),
  isBool2: false,
};

const table = document.createElement("table");
const tbody = document.createElement("tbody");
document.body.appendChild(table);
table.appendChild(tbody);
const trow = document.createElement("tr");

test("renders cells", async () => {
  const { container } = render(<Cells row={row} options={options} />, {
    container: tbody.appendChild(trow),
  });

  expect(pretty(container.innerHTML)).toMatchInlineSnapshot(`
    "<td>0</td>
    <td>Cells Test</td>
    <td> <input readonly=\\"\\" type=\\"checkbox\\" checked=\\"\\"></td>
    <td>13/06/2021</td>
    <td> <input readonly=\\"\\" type=\\"checkbox\\"></td>"
  `); /* ... gets filled automatically by jest ... */
});

