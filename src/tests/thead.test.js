import Thead from "../components/react-dj-table/children/thead";
import data from "../data.json";
import pretty from "pretty";
import { render } from "@testing-library/react";

const options = {
  iconCols: [{ Model: '<i class="envelope icon"></i>Email' }],
  labelCols: [{ sold: "SOLD" }],
  hiddelCols: ["id"],
};
const state = {
  json: data,
  jsonCopy: data,
  options: options,
};

const table = document.createElement("table");
const thead = document.createElement("thead");
const trow = document.createElement("tr");

document.body.appendChild(table);
table.appendChild(thead);

test("renders Thead", async () => {
  const { container } = render(<Thead state={state} />, {
    container: thead.appendChild(trow),
  });

  expect(pretty(container.innerHTML)).toMatchInlineSnapshot(`
    "<th class=\\" \\" id=\\"id\\">id</th>
    <th class=\\" \\" id=\\"sold\\">SOLD</th>
    <th class=\\" \\" id=\\"Manufacturer\\">Manufacturer</th>
    <th class=\\" \\" id=\\"Model\\"><i class=\\"envelope icon\\"></i>Email</th>
    <th class=\\" \\" id=\\"Year\\">Year</th>
    <th class=\\" \\" id=\\"Cost\\">Cost</th>
    <th class=\\" \\" id=\\"CreditCards\\">CreditCards</th>
    <th class=\\" \\" id=\\"PurchaseDate\\">PurchaseDate</th>"
  `); /* ... gets filled automatically by jest ... */
});
