import Table from "../components/react-dj-table/index";
import data from "../data.json";
import pretty from "pretty";
import { render } from "@testing-library/react";

const table = document.createElement("table");
const tbody = document.createElement("tbody");
const tr = document.createElement("tr");
document.body.appendChild(table);
table.appendChild(tbody);

test("renders without dateCols", async () => {
  const { container } = render(<Table json={data} />, {
    container: tbody.appendChild(tr),
  });

  expect(pretty(container.innerHTML)).toMatchInlineSnapshot(`
    "<table class=\\" \\">
      <thead>
        <tr>
          <th class=\\" \\" id=\\"id\\">id</th>
          <th class=\\" \\" id=\\"sold\\">sold</th>
          <th class=\\" \\" id=\\"Manufacturer\\">Manufacturer</th>
          <th class=\\" \\" id=\\"Model\\">Model</th>
          <th class=\\" \\" id=\\"Year\\">Year</th>
          <th class=\\" \\" id=\\"Cost\\">Cost</th>
          <th class=\\" \\" id=\\"CreditCards\\">CreditCards</th>
          <th class=\\" \\" id=\\"PurchaseDate\\">PurchaseDate</th>
        </tr>
      </thead>
      <tbody>
        <tr class=\\"\\" id=\\"1\\">
          <td class=\\" \\">1</td>
          <td class=\\" \\"> <input readonly=\\"\\" type=\\"checkbox\\" checked=\\"\\"></td>
          <td class=\\" \\">Aston Martin</td>
          <td class=\\" \\">Vantage</td>
          <td class=\\" \\">2009</td>
          <td class=\\" \\">$7774.28</td>
          <td class=\\" \\">jcb</td>
          <td class=\\" \\">2019-01-26T14:00:49Z</td>
        </tr>
        <tr class=\\"\\" id=\\"2\\">
          <td class=\\" \\">2</td>
          <td class=\\" \\"> <input readonly=\\"\\" type=\\"checkbox\\"></td>
          <td class=\\" \\">Maybach</td>
          <td class=\\" \\">62</td>
          <td class=\\" \\">2007</td>
          <td class=\\" \\">$9729.34</td>
          <td class=\\" \\">diners-club-carte-blanche</td>
          <td class=\\" \\">2019-01-26T14:00:49Z</td>
        </tr>
        <tr class=\\"\\" id=\\"3\\">
          <td class=\\" \\">3</td>
          <td class=\\" \\"> <input readonly=\\"\\" type=\\"checkbox\\"></td>
          <td class=\\" \\">Dodge</td>
          <td class=\\" \\">Caravan</td>
          <td class=\\" \\">2005</td>
          <td class=\\" \\">$1218.90</td>
          <td class=\\" \\">maestro</td>
          <td class=\\" \\">2019-01-26T14:00:49Z</td>
        </tr>
        <tr class=\\"\\" id=\\"4\\">
          <td class=\\" \\">4</td>
          <td class=\\" \\"> <input readonly=\\"\\" type=\\"checkbox\\"></td>
          <td class=\\" \\">Nissan</td>
          <td class=\\" \\">Titan</td>
          <td class=\\" \\">2004</td>
          <td class=\\" \\">$1075.62</td>
          <td class=\\" \\">visa</td>
          <td class=\\" \\">2019-01-26T14:00:49Z</td>
        </tr>
        <tr class=\\"\\" id=\\"5\\">
          <td class=\\" \\">5</td>
          <td class=\\" \\"> <input readonly=\\"\\" type=\\"checkbox\\" checked=\\"\\"></td>
          <td class=\\" \\">Land Rover</td>
          <td class=\\" \\">Defender</td>
          <td class=\\" \\">1997</td>
          <td class=\\" \\">$5430.04</td>
          <td class=\\" \\">visa-electron</td>
          <td class=\\" \\">2019-01-26T14:00:49Z</td>
        </tr>
        <tr class=\\"\\" id=\\"6\\">
          <td class=\\" \\">6</td>
          <td class=\\" \\"> <input readonly=\\"\\" type=\\"checkbox\\" checked=\\"\\"></td>
          <td class=\\" \\">Ford</td>
          <td class=\\" \\">Thunderbird</td>
          <td class=\\" \\">1986</td>
          <td class=\\" \\">$4588.51</td>
          <td class=\\" \\">diners-club-carte-blanche</td>
          <td class=\\" \\">2019-01-26T14:00:49Z</td>
        </tr>
        <tr class=\\"\\" id=\\"7\\">
          <td class=\\" \\">7</td>
          <td class=\\" \\"> <input readonly=\\"\\" type=\\"checkbox\\"></td>
          <td class=\\" \\">GMC</td>
          <td class=\\" \\">Yukon</td>
          <td class=\\" \\">2003</td>
          <td class=\\" \\">$4278.83</td>
          <td class=\\" \\">jcb</td>
          <td class=\\" \\">2019-01-26T14:00:49Z</td>
        </tr>
        <tr class=\\"\\" id=\\"8\\">
          <td class=\\" \\">8</td>
          <td class=\\" \\"> <input readonly=\\"\\" type=\\"checkbox\\"></td>
          <td class=\\" \\">Toyota</td>
          <td class=\\" \\">Prius c</td>
          <td class=\\" \\">2012</td>
          <td class=\\" \\">$5038.96</td>
          <td class=\\" \\">jcb</td>
          <td class=\\" \\">2019-01-26T14:00:49Z</td>
        </tr>
        <tr class=\\"\\" id=\\"9\\">
          <td class=\\" \\">9</td>
          <td class=\\" \\"> <input readonly=\\"\\" type=\\"checkbox\\"></td>
          <td class=\\" \\">Chevrolet</td>
          <td class=\\" \\">Express 2500</td>
          <td class=\\" \\">2010</td>
          <td class=\\" \\">$4776.16</td>
          <td class=\\" \\">china-unionpay</td>
          <td class=\\" \\">2019-01-26T14:00:49Z</td>
        </tr>
        <tr class=\\"\\" id=\\"10\\">
          <td class=\\" \\">10</td>
          <td class=\\" \\"> <input readonly=\\"\\" type=\\"checkbox\\"></td>
          <td class=\\" \\">Mercury</td>
          <td class=\\" \\">Cougar</td>
          <td class=\\" \\">1969</td>
          <td class=\\" \\">$8667.00</td>
          <td class=\\" \\">jcb</td>
          <td class=\\" \\">2019-01-26T14:00:49Z</td>
        </tr>
        <tr class=\\"\\" id=\\"11\\">
          <td class=\\" \\">11</td>
          <td class=\\" \\"> <input readonly=\\"\\" type=\\"checkbox\\"></td>
          <td class=\\" \\">Oldsmobile</td>
          <td class=\\" \\">Regency</td>
          <td class=\\" \\">1997</td>
          <td class=\\" \\">$4045.67</td>
          <td class=\\" \\">americanexpress</td>
          <td class=\\" \\">2019-01-26T14:00:49Z</td>
        </tr>
      </tbody>
    </table>"
  `); /* ... gets filled automatically by jest ... */
});

const options = {
  dateCols: [{ RetiredDate: "" }],
};

test("renders with dateCols options", async () => {
  const { container } = render(<Table json={data} options={options} />, {
    container: tbody.appendChild(tr),
  });

  expect(pretty(container.innerHTML)).toMatchInlineSnapshot(`
    "<table class=\\" \\">
      <thead>
        <tr>
          <th class=\\" \\" id=\\"id\\">id</th>
          <th class=\\" \\" id=\\"sold\\">sold</th>
          <th class=\\" \\" id=\\"Manufacturer\\">Manufacturer</th>
          <th class=\\" \\" id=\\"Model\\">Model</th>
          <th class=\\" \\" id=\\"Year\\">Year</th>
          <th class=\\" \\" id=\\"Cost\\">Cost</th>
          <th class=\\" \\" id=\\"CreditCards\\">CreditCards</th>
          <th class=\\" \\" id=\\"PurchaseDate\\">PurchaseDate</th>
        </tr>
      </thead>
      <tbody>
        <tr class=\\"\\" id=\\"1\\">
          <td class=\\" \\">1</td>
          <td class=\\" \\"> <input readonly=\\"\\" type=\\"checkbox\\" checked=\\"\\"></td>
          <td class=\\" \\">Aston Martin</td>
          <td class=\\" \\">Vantage</td>
          <td class=\\" \\">2009</td>
          <td class=\\" \\">$7774.28</td>
          <td class=\\" \\">jcb</td>
          <td class=\\" \\">2019-01-26T14:00:49Z</td>
        </tr>
        <tr class=\\"\\" id=\\"2\\">
          <td class=\\" \\">2</td>
          <td class=\\" \\"> <input readonly=\\"\\" type=\\"checkbox\\"></td>
          <td class=\\" \\">Maybach</td>
          <td class=\\" \\">62</td>
          <td class=\\" \\">2007</td>
          <td class=\\" \\">$9729.34</td>
          <td class=\\" \\">diners-club-carte-blanche</td>
          <td class=\\" \\">2019-01-26T14:00:49Z</td>
        </tr>
        <tr class=\\"\\" id=\\"3\\">
          <td class=\\" \\">3</td>
          <td class=\\" \\"> <input readonly=\\"\\" type=\\"checkbox\\"></td>
          <td class=\\" \\">Dodge</td>
          <td class=\\" \\">Caravan</td>
          <td class=\\" \\">2005</td>
          <td class=\\" \\">$1218.90</td>
          <td class=\\" \\">maestro</td>
          <td class=\\" \\">2019-01-26T14:00:49Z</td>
        </tr>
        <tr class=\\"\\" id=\\"4\\">
          <td class=\\" \\">4</td>
          <td class=\\" \\"> <input readonly=\\"\\" type=\\"checkbox\\"></td>
          <td class=\\" \\">Nissan</td>
          <td class=\\" \\">Titan</td>
          <td class=\\" \\">2004</td>
          <td class=\\" \\">$1075.62</td>
          <td class=\\" \\">visa</td>
          <td class=\\" \\">2019-01-26T14:00:49Z</td>
        </tr>
        <tr class=\\"\\" id=\\"5\\">
          <td class=\\" \\">5</td>
          <td class=\\" \\"> <input readonly=\\"\\" type=\\"checkbox\\" checked=\\"\\"></td>
          <td class=\\" \\">Land Rover</td>
          <td class=\\" \\">Defender</td>
          <td class=\\" \\">1997</td>
          <td class=\\" \\">$5430.04</td>
          <td class=\\" \\">visa-electron</td>
          <td class=\\" \\">2019-01-26T14:00:49Z</td>
        </tr>
        <tr class=\\"\\" id=\\"6\\">
          <td class=\\" \\">6</td>
          <td class=\\" \\"> <input readonly=\\"\\" type=\\"checkbox\\" checked=\\"\\"></td>
          <td class=\\" \\">Ford</td>
          <td class=\\" \\">Thunderbird</td>
          <td class=\\" \\">1986</td>
          <td class=\\" \\">$4588.51</td>
          <td class=\\" \\">diners-club-carte-blanche</td>
          <td class=\\" \\">2019-01-26T14:00:49Z</td>
        </tr>
        <tr class=\\"\\" id=\\"7\\">
          <td class=\\" \\">7</td>
          <td class=\\" \\"> <input readonly=\\"\\" type=\\"checkbox\\"></td>
          <td class=\\" \\">GMC</td>
          <td class=\\" \\">Yukon</td>
          <td class=\\" \\">2003</td>
          <td class=\\" \\">$4278.83</td>
          <td class=\\" \\">jcb</td>
          <td class=\\" \\">2019-01-26T14:00:49Z</td>
        </tr>
        <tr class=\\"\\" id=\\"8\\">
          <td class=\\" \\">8</td>
          <td class=\\" \\"> <input readonly=\\"\\" type=\\"checkbox\\"></td>
          <td class=\\" \\">Toyota</td>
          <td class=\\" \\">Prius c</td>
          <td class=\\" \\">2012</td>
          <td class=\\" \\">$5038.96</td>
          <td class=\\" \\">jcb</td>
          <td class=\\" \\">2019-01-26T14:00:49Z</td>
        </tr>
        <tr class=\\"\\" id=\\"9\\">
          <td class=\\" \\">9</td>
          <td class=\\" \\"> <input readonly=\\"\\" type=\\"checkbox\\"></td>
          <td class=\\" \\">Chevrolet</td>
          <td class=\\" \\">Express 2500</td>
          <td class=\\" \\">2010</td>
          <td class=\\" \\">$4776.16</td>
          <td class=\\" \\">china-unionpay</td>
          <td class=\\" \\">2019-01-26T14:00:49Z</td>
        </tr>
        <tr class=\\"\\" id=\\"10\\">
          <td class=\\" \\">10</td>
          <td class=\\" \\"> <input readonly=\\"\\" type=\\"checkbox\\"></td>
          <td class=\\" \\">Mercury</td>
          <td class=\\" \\">Cougar</td>
          <td class=\\" \\">1969</td>
          <td class=\\" \\">$8667.00</td>
          <td class=\\" \\">jcb</td>
          <td class=\\" \\">2019-01-26T14:00:49Z</td>
        </tr>
        <tr class=\\"\\" id=\\"11\\">
          <td class=\\" \\">11</td>
          <td class=\\" \\"> <input readonly=\\"\\" type=\\"checkbox\\"></td>
          <td class=\\" \\">Oldsmobile</td>
          <td class=\\" \\">Regency</td>
          <td class=\\" \\">1997</td>
          <td class=\\" \\">$4045.67</td>
          <td class=\\" \\">americanexpress</td>
          <td class=\\" \\">2019-01-26T14:00:49Z</td>
        </tr>
      </tbody>
    </table>"
  `);
});

options.dateCols = [{ RetiredDate: "en-GB" }];

test("renders with dateCols options en-gb", async () => {
  const { container } = render(<Table json={data} options={options} />, {
    container: tbody.appendChild(tr),
  });

  expect(pretty(container.innerHTML)).toMatchInlineSnapshot(`
    "<table class=\\" \\">
      <thead>
        <tr>
          <th class=\\" \\" id=\\"id\\">id</th>
          <th class=\\" \\" id=\\"sold\\">sold</th>
          <th class=\\" \\" id=\\"Manufacturer\\">Manufacturer</th>
          <th class=\\" \\" id=\\"Model\\">Model</th>
          <th class=\\" \\" id=\\"Year\\">Year</th>
          <th class=\\" \\" id=\\"Cost\\">Cost</th>
          <th class=\\" \\" id=\\"CreditCards\\">CreditCards</th>
          <th class=\\" \\" id=\\"PurchaseDate\\">PurchaseDate</th>
        </tr>
      </thead>
      <tbody>
        <tr class=\\"\\" id=\\"1\\">
          <td class=\\" \\">1</td>
          <td class=\\" \\"> <input readonly=\\"\\" type=\\"checkbox\\" checked=\\"\\"></td>
          <td class=\\" \\">Aston Martin</td>
          <td class=\\" \\">Vantage</td>
          <td class=\\" \\">2009</td>
          <td class=\\" \\">$7774.28</td>
          <td class=\\" \\">jcb</td>
          <td class=\\" \\">2019-01-26T14:00:49Z</td>
        </tr>
        <tr class=\\"\\" id=\\"2\\">
          <td class=\\" \\">2</td>
          <td class=\\" \\"> <input readonly=\\"\\" type=\\"checkbox\\"></td>
          <td class=\\" \\">Maybach</td>
          <td class=\\" \\">62</td>
          <td class=\\" \\">2007</td>
          <td class=\\" \\">$9729.34</td>
          <td class=\\" \\">diners-club-carte-blanche</td>
          <td class=\\" \\">2019-01-26T14:00:49Z</td>
        </tr>
        <tr class=\\"\\" id=\\"3\\">
          <td class=\\" \\">3</td>
          <td class=\\" \\"> <input readonly=\\"\\" type=\\"checkbox\\"></td>
          <td class=\\" \\">Dodge</td>
          <td class=\\" \\">Caravan</td>
          <td class=\\" \\">2005</td>
          <td class=\\" \\">$1218.90</td>
          <td class=\\" \\">maestro</td>
          <td class=\\" \\">2019-01-26T14:00:49Z</td>
        </tr>
        <tr class=\\"\\" id=\\"4\\">
          <td class=\\" \\">4</td>
          <td class=\\" \\"> <input readonly=\\"\\" type=\\"checkbox\\"></td>
          <td class=\\" \\">Nissan</td>
          <td class=\\" \\">Titan</td>
          <td class=\\" \\">2004</td>
          <td class=\\" \\">$1075.62</td>
          <td class=\\" \\">visa</td>
          <td class=\\" \\">2019-01-26T14:00:49Z</td>
        </tr>
        <tr class=\\"\\" id=\\"5\\">
          <td class=\\" \\">5</td>
          <td class=\\" \\"> <input readonly=\\"\\" type=\\"checkbox\\" checked=\\"\\"></td>
          <td class=\\" \\">Land Rover</td>
          <td class=\\" \\">Defender</td>
          <td class=\\" \\">1997</td>
          <td class=\\" \\">$5430.04</td>
          <td class=\\" \\">visa-electron</td>
          <td class=\\" \\">2019-01-26T14:00:49Z</td>
        </tr>
        <tr class=\\"\\" id=\\"6\\">
          <td class=\\" \\">6</td>
          <td class=\\" \\"> <input readonly=\\"\\" type=\\"checkbox\\" checked=\\"\\"></td>
          <td class=\\" \\">Ford</td>
          <td class=\\" \\">Thunderbird</td>
          <td class=\\" \\">1986</td>
          <td class=\\" \\">$4588.51</td>
          <td class=\\" \\">diners-club-carte-blanche</td>
          <td class=\\" \\">2019-01-26T14:00:49Z</td>
        </tr>
        <tr class=\\"\\" id=\\"7\\">
          <td class=\\" \\">7</td>
          <td class=\\" \\"> <input readonly=\\"\\" type=\\"checkbox\\"></td>
          <td class=\\" \\">GMC</td>
          <td class=\\" \\">Yukon</td>
          <td class=\\" \\">2003</td>
          <td class=\\" \\">$4278.83</td>
          <td class=\\" \\">jcb</td>
          <td class=\\" \\">2019-01-26T14:00:49Z</td>
        </tr>
        <tr class=\\"\\" id=\\"8\\">
          <td class=\\" \\">8</td>
          <td class=\\" \\"> <input readonly=\\"\\" type=\\"checkbox\\"></td>
          <td class=\\" \\">Toyota</td>
          <td class=\\" \\">Prius c</td>
          <td class=\\" \\">2012</td>
          <td class=\\" \\">$5038.96</td>
          <td class=\\" \\">jcb</td>
          <td class=\\" \\">2019-01-26T14:00:49Z</td>
        </tr>
        <tr class=\\"\\" id=\\"9\\">
          <td class=\\" \\">9</td>
          <td class=\\" \\"> <input readonly=\\"\\" type=\\"checkbox\\"></td>
          <td class=\\" \\">Chevrolet</td>
          <td class=\\" \\">Express 2500</td>
          <td class=\\" \\">2010</td>
          <td class=\\" \\">$4776.16</td>
          <td class=\\" \\">china-unionpay</td>
          <td class=\\" \\">2019-01-26T14:00:49Z</td>
        </tr>
        <tr class=\\"\\" id=\\"10\\">
          <td class=\\" \\">10</td>
          <td class=\\" \\"> <input readonly=\\"\\" type=\\"checkbox\\"></td>
          <td class=\\" \\">Mercury</td>
          <td class=\\" \\">Cougar</td>
          <td class=\\" \\">1969</td>
          <td class=\\" \\">$8667.00</td>
          <td class=\\" \\">jcb</td>
          <td class=\\" \\">2019-01-26T14:00:49Z</td>
        </tr>
        <tr class=\\"\\" id=\\"11\\">
          <td class=\\" \\">11</td>
          <td class=\\" \\"> <input readonly=\\"\\" type=\\"checkbox\\"></td>
          <td class=\\" \\">Oldsmobile</td>
          <td class=\\" \\">Regency</td>
          <td class=\\" \\">1997</td>
          <td class=\\" \\">$4045.67</td>
          <td class=\\" \\">americanexpress</td>
          <td class=\\" \\">2019-01-26T14:00:49Z</td>
        </tr>
      </tbody>
    </table>"
  `);
});

const dateoptions = {
  dateCols: [{ RetiredDate: "en-GB" }],
  dateOptions: {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
  },
};

test("renders with dateCols dateOptions", async () => {
  const { container } = render(<Table json={data} options={dateoptions} />, {
    container: tbody.appendChild(tr),
  });

  expect(pretty(container.innerHTML)).toMatchInlineSnapshot(`
    "<table class=\\" \\">
      <thead>
        <tr>
          <th class=\\" \\" id=\\"id\\">id</th>
          <th class=\\" \\" id=\\"sold\\">sold</th>
          <th class=\\" \\" id=\\"Manufacturer\\">Manufacturer</th>
          <th class=\\" \\" id=\\"Model\\">Model</th>
          <th class=\\" \\" id=\\"Year\\">Year</th>
          <th class=\\" \\" id=\\"Cost\\">Cost</th>
          <th class=\\" \\" id=\\"CreditCards\\">CreditCards</th>
          <th class=\\" \\" id=\\"PurchaseDate\\">PurchaseDate</th>
        </tr>
      </thead>
      <tbody>
        <tr class=\\"\\" id=\\"1\\">
          <td class=\\" \\">1</td>
          <td class=\\" \\"> <input readonly=\\"\\" type=\\"checkbox\\" checked=\\"\\"></td>
          <td class=\\" \\">Aston Martin</td>
          <td class=\\" \\">Vantage</td>
          <td class=\\" \\">2009</td>
          <td class=\\" \\">$7774.28</td>
          <td class=\\" \\">jcb</td>
          <td class=\\" \\">2019-01-26T14:00:49Z</td>
        </tr>
        <tr class=\\"\\" id=\\"2\\">
          <td class=\\" \\">2</td>
          <td class=\\" \\"> <input readonly=\\"\\" type=\\"checkbox\\"></td>
          <td class=\\" \\">Maybach</td>
          <td class=\\" \\">62</td>
          <td class=\\" \\">2007</td>
          <td class=\\" \\">$9729.34</td>
          <td class=\\" \\">diners-club-carte-blanche</td>
          <td class=\\" \\">2019-01-26T14:00:49Z</td>
        </tr>
        <tr class=\\"\\" id=\\"3\\">
          <td class=\\" \\">3</td>
          <td class=\\" \\"> <input readonly=\\"\\" type=\\"checkbox\\"></td>
          <td class=\\" \\">Dodge</td>
          <td class=\\" \\">Caravan</td>
          <td class=\\" \\">2005</td>
          <td class=\\" \\">$1218.90</td>
          <td class=\\" \\">maestro</td>
          <td class=\\" \\">2019-01-26T14:00:49Z</td>
        </tr>
        <tr class=\\"\\" id=\\"4\\">
          <td class=\\" \\">4</td>
          <td class=\\" \\"> <input readonly=\\"\\" type=\\"checkbox\\"></td>
          <td class=\\" \\">Nissan</td>
          <td class=\\" \\">Titan</td>
          <td class=\\" \\">2004</td>
          <td class=\\" \\">$1075.62</td>
          <td class=\\" \\">visa</td>
          <td class=\\" \\">2019-01-26T14:00:49Z</td>
        </tr>
        <tr class=\\"\\" id=\\"5\\">
          <td class=\\" \\">5</td>
          <td class=\\" \\"> <input readonly=\\"\\" type=\\"checkbox\\" checked=\\"\\"></td>
          <td class=\\" \\">Land Rover</td>
          <td class=\\" \\">Defender</td>
          <td class=\\" \\">1997</td>
          <td class=\\" \\">$5430.04</td>
          <td class=\\" \\">visa-electron</td>
          <td class=\\" \\">2019-01-26T14:00:49Z</td>
        </tr>
        <tr class=\\"\\" id=\\"6\\">
          <td class=\\" \\">6</td>
          <td class=\\" \\"> <input readonly=\\"\\" type=\\"checkbox\\" checked=\\"\\"></td>
          <td class=\\" \\">Ford</td>
          <td class=\\" \\">Thunderbird</td>
          <td class=\\" \\">1986</td>
          <td class=\\" \\">$4588.51</td>
          <td class=\\" \\">diners-club-carte-blanche</td>
          <td class=\\" \\">2019-01-26T14:00:49Z</td>
        </tr>
        <tr class=\\"\\" id=\\"7\\">
          <td class=\\" \\">7</td>
          <td class=\\" \\"> <input readonly=\\"\\" type=\\"checkbox\\"></td>
          <td class=\\" \\">GMC</td>
          <td class=\\" \\">Yukon</td>
          <td class=\\" \\">2003</td>
          <td class=\\" \\">$4278.83</td>
          <td class=\\" \\">jcb</td>
          <td class=\\" \\">2019-01-26T14:00:49Z</td>
        </tr>
        <tr class=\\"\\" id=\\"8\\">
          <td class=\\" \\">8</td>
          <td class=\\" \\"> <input readonly=\\"\\" type=\\"checkbox\\"></td>
          <td class=\\" \\">Toyota</td>
          <td class=\\" \\">Prius c</td>
          <td class=\\" \\">2012</td>
          <td class=\\" \\">$5038.96</td>
          <td class=\\" \\">jcb</td>
          <td class=\\" \\">2019-01-26T14:00:49Z</td>
        </tr>
        <tr class=\\"\\" id=\\"9\\">
          <td class=\\" \\">9</td>
          <td class=\\" \\"> <input readonly=\\"\\" type=\\"checkbox\\"></td>
          <td class=\\" \\">Chevrolet</td>
          <td class=\\" \\">Express 2500</td>
          <td class=\\" \\">2010</td>
          <td class=\\" \\">$4776.16</td>
          <td class=\\" \\">china-unionpay</td>
          <td class=\\" \\">2019-01-26T14:00:49Z</td>
        </tr>
        <tr class=\\"\\" id=\\"10\\">
          <td class=\\" \\">10</td>
          <td class=\\" \\"> <input readonly=\\"\\" type=\\"checkbox\\"></td>
          <td class=\\" \\">Mercury</td>
          <td class=\\" \\">Cougar</td>
          <td class=\\" \\">1969</td>
          <td class=\\" \\">$8667.00</td>
          <td class=\\" \\">jcb</td>
          <td class=\\" \\">2019-01-26T14:00:49Z</td>
        </tr>
        <tr class=\\"\\" id=\\"11\\">
          <td class=\\" \\">11</td>
          <td class=\\" \\"> <input readonly=\\"\\" type=\\"checkbox\\"></td>
          <td class=\\" \\">Oldsmobile</td>
          <td class=\\" \\">Regency</td>
          <td class=\\" \\">1997</td>
          <td class=\\" \\">$4045.67</td>
          <td class=\\" \\">americanexpress</td>
          <td class=\\" \\">2019-01-26T14:00:49Z</td>
        </tr>
      </tbody>
    </table>"
  `);
});
