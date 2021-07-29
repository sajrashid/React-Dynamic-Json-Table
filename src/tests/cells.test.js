/* eslint-disable no-template-curly-in-string */
import Cells from "../components/react-dj-table/children/cells";
import pretty from "pretty";
import { render } from "@testing-library/react";
const options = {
  iconCols: [{ name: '<i class="envelope icon"></i>Email' }],
  labelCols: [{ name: "NAME" }],
  hiddelCols: ["id"],
  dateCols: [{ RetiredDate: "en-GB" }],
  dateOptions: {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
  },
  // eslint-disable-next-line no-template-curly-in-string
  customCols: [
    {
      Avatar:
        '<div style="min-height:3em"><img  style="width:60px; height:60px"  decoding="async" src=${Avatar}></img></div',
    },
  ], //adding min height reduces loading flash as image cells are not resized vertically
};
const state = {
  options: options,
};
const row = {
  id: 0,
  name: "Cells Test",
  isbool: true,
  isBool2: false,
  Avatar: "....",
  RetiredDate: "17/07/2001",
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
    <td class=\\" \\"> <input readonly=\\"\\" type=\\"checkbox\\"></td>
    <td class=\\" \\">
      <div style=\\"min-height:3em\\"><img style=\\"width:60px; height:60px\\" decoding=\\"async\\" src=\\"....\\"></div>
    </td>
    <td class=\\" \\">Invalid Date</td>"
  `); /* ... gets filled automatically by jest ... */
});
