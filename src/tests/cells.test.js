import Cells from "../components/react-dj-table/children/cells";
import pretty from "pretty";
import { render } from "@testing-library/react";

const state = { options: {} };
const row = {
  id: 0,
  name: "Cells Test",
  isbool: true,
  isBool2: false,
};

const table = document.createElement("table");
const tbody = document.createElement("tbody");
document.body.appendChild(table);
table.appendChild(tbody);
const trow = document.createElement("tr");

test("renders cells", async () => {
  const { container } = render(<Cells row={row} state={state} />, {
    container: tbody.appendChild(trow),
  });

  expect(pretty(container.innerHTML)).toMatchInlineSnapshot(`
    "<td class=\\" \\">0</td>
    <td class=\\" \\">Cells Test</td>
    <td class=\\" \\"> <input readonly=\\"\\" type=\\"checkbox\\" checked=\\"\\"></td>
    <td class=\\" \\"> <input readonly=\\"\\" type=\\"checkbox\\"></td>"
  `); /* ... gets filled automatically by jest ... */
});
