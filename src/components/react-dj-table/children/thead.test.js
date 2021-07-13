import Thead from "./thead";
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
  const { container } = render(<Thead state={state} />, {
    container: table.appendChild(tbody),
  });

  expect(pretty(container.innerHTML)).toMatchInlineSnapshot(`
    "<th class=\\" \\" id=\\"id\\">id</th>
    <th class=\\" \\" id=\\"sold\\">sold</th>
    <th class=\\" \\" id=\\"Manufacturer\\">Manufacturer</th>
    <th class=\\" \\" id=\\"Model\\">Model</th>
    <th class=\\" \\" id=\\"Year\\">Year</th>
    <th class=\\" \\" id=\\"Cost\\">Cost</th>
    <th class=\\" \\" id=\\"BitCoin Address\\">BitCoin Address</th>
    <th class=\\" \\" id=\\"CreditCards\\">CreditCards</th>
    <th class=\\" \\" id=\\"PurchaseDate\\">PurchaseDate</th>"
  `); /* ... gets filled automatically by jest ... */
});
