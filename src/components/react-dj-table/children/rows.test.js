import { render } from "@testing-library/react";
import Rows from "./rows";
import pretty from "pretty";
import data from "../../../data.json";
const options = {};

const table = document.createElement("table");
const tbody = document.createElement("tbody");
document.body.appendChild(table);

test("renders cells", async () => {
  const { container } = render(
    <Rows json={data} options={options} selectedRowId={""} />,
    {
      container: table.appendChild(tbody),
    }
  );

  expect(pretty(container.innerHTML)).toMatchInlineSnapshot(`
    "<tr id=\\"1\\" class=\\"\\">
      <td>1</td>
      <td> <input readonly=\\"\\" type=\\"checkbox\\" checked=\\"\\"></td>
      <td>Aston Martin</td>
      <td>Vantage</td>
      <td>2009</td>
      <td>$7774.28</td>
      <td>12L1pv8cTRbJmod74bGLRJAKuMZgRfJftN</td>
      <td>jcb</td>
      <td>2019-01-26T14:00:49Z</td>
    </tr>
    <tr id=\\"2\\" class=\\"\\">
      <td>2</td>
      <td> <input readonly=\\"\\" type=\\"checkbox\\"></td>
      <td>Maybach</td>
      <td>62</td>
      <td>2007</td>
      <td>$9729.34</td>
      <td>1Gw7LGTY7F9zM2fZpXMzwPYp88hE312VVb</td>
      <td>diners-club-carte-blanche</td>
      <td>2019-01-26T14:00:49Z</td>
    </tr>
    <tr id=\\"3\\" class=\\"\\">
      <td>3</td>
      <td> <input readonly=\\"\\" type=\\"checkbox\\"></td>
      <td>Dodge</td>
      <td>Caravan</td>
      <td>2005</td>
      <td>$1218.90</td>
      <td>16wkwFKDTAio4ured8DE8Y17LQE6bn34Tj</td>
      <td>maestro</td>
      <td>2019-01-26T14:00:49Z</td>
    </tr>
    <tr id=\\"4\\" class=\\"\\">
      <td>4</td>
      <td> <input readonly=\\"\\" type=\\"checkbox\\"></td>
      <td>Nissan</td>
      <td>Titan</td>
      <td>2004</td>
      <td>$1075.62</td>
      <td>15c6trHzTAudLzELePBp9SyLgTBXEet6jg</td>
      <td>visa</td>
      <td>2019-01-26T14:00:49Z</td>
    </tr>
    <tr id=\\"5\\" class=\\"\\">
      <td>5</td>
      <td> <input readonly=\\"\\" type=\\"checkbox\\" checked=\\"\\"></td>
      <td>Land Rover</td>
      <td>Defender</td>
      <td>1997</td>
      <td>$5430.04</td>
      <td>19XVTHE19HBk3iiJp4VGiyhHrhHDTwtp4Z</td>
      <td>visa-electron</td>
      <td>2019-01-26T14:00:49Z</td>
    </tr>
    <tr id=\\"6\\" class=\\"\\">
      <td>6</td>
      <td> <input readonly=\\"\\" type=\\"checkbox\\" checked=\\"\\"></td>
      <td>Ford</td>
      <td>Thunderbird</td>
      <td>1986</td>
      <td>$4588.51</td>
      <td>1DxThWuEXNzxWxYx1R7hs7uXExFxqPvPZd</td>
      <td>diners-club-carte-blanche</td>
      <td>2019-01-26T14:00:49Z</td>
    </tr>
    <tr id=\\"7\\" class=\\"\\">
      <td>7</td>
      <td> <input readonly=\\"\\" type=\\"checkbox\\"></td>
      <td>GMC</td>
      <td>Yukon</td>
      <td>2003</td>
      <td>$4278.83</td>
      <td>1KFiuAzfwe3cVajyQXX7hvHuRHUpKL1MuM</td>
      <td>jcb</td>
      <td>2019-01-26T14:00:49Z</td>
    </tr>
    <tr id=\\"8\\" class=\\"\\">
      <td>8</td>
      <td> <input readonly=\\"\\" type=\\"checkbox\\"></td>
      <td>Toyota</td>
      <td>Prius c</td>
      <td>2012</td>
      <td>$5038.96</td>
      <td>1B3y3VR95tUxhFsEm6hZJ9X91pchbRyDGR</td>
      <td>jcb</td>
      <td>2019-01-26T14:00:49Z</td>
    </tr>
    <tr id=\\"9\\" class=\\"\\">
      <td>9</td>
      <td> <input readonly=\\"\\" type=\\"checkbox\\"></td>
      <td>Chevrolet</td>
      <td>Express 2500</td>
      <td>2010</td>
      <td>$4776.16</td>
      <td>19B1QM54QqZJQfDkC1TDLKPbU1kfUprm2Z</td>
      <td>china-unionpay</td>
      <td>2019-01-26T14:00:49Z</td>
    </tr>
    <tr id=\\"10\\" class=\\"\\">
      <td>10</td>
      <td> <input readonly=\\"\\" type=\\"checkbox\\"></td>
      <td>Mercury</td>
      <td>Cougar</td>
      <td>1969</td>
      <td>$8667.00</td>
      <td>1kcgRoxfT9TL2XjHg7qTcZhX3NX5kkF8N</td>
      <td>jcb</td>
      <td>2019-01-26T14:00:49Z</td>
    </tr>
    <tr id=\\"11\\" class=\\"\\">
      <td>11</td>
      <td> <input readonly=\\"\\" type=\\"checkbox\\"></td>
      <td>Oldsmobile</td>
      <td>Regency</td>
      <td>1997</td>
      <td>$4045.67</td>
      <td>19KzEUpSdDhcpXnRSVb1hcC4X2v6tC7HxV</td>
      <td>americanexpress</td>
      <td>2019-01-26T14:00:49Z</td>
    </tr>
    <tr id=\\"12\\" class=\\"\\">
      <td>12</td>
      <td> <input readonly=\\"\\" type=\\"checkbox\\"></td>
      <td>Pontiac</td>
      <td>6000</td>
      <td>1985</td>
      <td>$5264.28</td>
      <td>1LbJgh21yqr3yfR36Z911HaEiYsYoyCyL4</td>
      <td>americanexpress</td>
      <td>2019-01-26T14:00:49Z</td>
    </tr>
    <tr id=\\"13\\" class=\\"\\">
      <td>13</td>
      <td> <input readonly=\\"\\" type=\\"checkbox\\"></td>
      <td>Bentley</td>
      <td>Continental Super</td>
      <td>2012</td>
      <td>$6276.22</td>
      <td>13bZGj5jmFAH1e1txMFfTsrQzVx6hSrqcG</td>
      <td>jcb</td>
      <td>2019-01-26T14:00:49Z</td>
    </tr>
    <tr id=\\"14\\" class=\\"\\">
      <td>14</td>
      <td> <input readonly=\\"\\" type=\\"checkbox\\"></td>
      <td>Kia</td>
      <td>Sedona</td>
      <td>2006</td>
      <td>$1983.41</td>
      <td>1F1BT33UPfDfFiyXbDA1Sg4jyfTWR9T2DD</td>
      <td>jcb</td>
      <td>2019-01-26T14:00:49Z</td>
    </tr>
    <tr id=\\"15\\" class=\\"\\">
      <td>15</td>
      <td> <input readonly=\\"\\" type=\\"checkbox\\"></td>
      <td>Audi</td>
      <td>5000S</td>
      <td>1988</td>
      <td>$5201.37</td>
      <td>1Pas5zbUFGCWEdB2MEzRbsiUhMpWxNZbfZ</td>
      <td>americanexpress</td>
      <td>2019-01-26T14:00:49Z</td>
    </tr>
    <tr id=\\"16\\" class=\\"\\">
      <td>16</td>
      <td> <input readonly=\\"\\" type=\\"checkbox\\"></td>
      <td>Mercedes-Benz</td>
      <td>GLK-Class</td>
      <td>2010</td>
      <td>$3630.40</td>
      <td>1Jen5oYeNTYxQKLQASEoWnTRqxcLBKAygj</td>
      <td>diners-club-enroute</td>
      <td>2019-01-26T14:00:49Z</td>
    </tr>
    <tr id=\\"17\\" class=\\"\\">
      <td>17</td>
      <td> <input readonly=\\"\\" type=\\"checkbox\\"></td>
      <td>Isuzu</td>
      <td>Trooper</td>
      <td>2000</td>
      <td>$9461.95</td>
      <td>1BSaazfGAWzRzf9w3BiGX64xp7ZncQXuMo</td>
      <td>jcb</td>
      <td>2019-01-26T14:00:49Z</td>
    </tr>
    <tr id=\\"18\\" class=\\"\\">
      <td>18</td>
      <td> <input readonly=\\"\\" type=\\"checkbox\\"></td>
      <td>Pontiac</td>
      <td>Fiero</td>
      <td>1988</td>
      <td>$7731.74</td>
      <td>1Mn5mAXP1c7cnDgCV4Yaq2JcpdMXq9qe8w</td>
      <td>jcb</td>
      <td>2019-01-26T14:00:49Z</td>
    </tr>
    <tr id=\\"19\\" class=\\"\\">
      <td>19</td>
      <td> <input readonly=\\"\\" type=\\"checkbox\\"></td>
      <td>Mercedes-Benz</td>
      <td>E-Class</td>
      <td>2002</td>
      <td>$9563.33</td>
      <td>1EQRznftVLk8oDSXw2UdkWaCxe9LDmc4Mr</td>
      <td>jcb</td>
      <td>2019-01-26T14:00:49Z</td>
    </tr>
    <tr id=\\"20\\" class=\\"\\">
      <td>20</td>
      <td> <input readonly=\\"\\" type=\\"checkbox\\" checked=\\"\\"></td>
      <td>Hummer</td>
      <td>H1</td>
      <td>2001</td>
      <td>$3878.22</td>
      <td>15gVC1BA1MBV1tJhckUGjzMEjRg1b3ptEm</td>
      <td>jcb</td>
      <td>2019-01-26T14:00:49Z</td>
    </tr>"
  `); /* ... gets filled automatically by jest ... */
});

// expect(
//     pretty(container.innerHTML)
//   ).toMatchInlineSnapshot(); /* ... gets filled automatically by jest ... */
