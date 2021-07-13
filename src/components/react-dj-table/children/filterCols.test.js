import Filters from "./filterCols";
import data from "../../../data.json";
import pretty from "pretty";
import { render } from "@testing-library/react";

const state = {
  json: data,
  jsonCopy: data,
  options: {},
};

const table = document.createElement("table");
const tbody = document.createElement("tbody");
document.body.appendChild(table);

test("renders Thead", async () => {
  const { container } = render(<Filters state={state} />, {
    container: table.appendChild(tbody),
  });

  expect(pretty(container.innerHTML)).toMatchInlineSnapshot(`
    "<td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>"
  `); /* ... gets filled automatically by jest ... */
});
