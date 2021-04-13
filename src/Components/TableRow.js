import React from "react";
import { Icon } from "@iconify/react";
import copyIcon from "@iconify-icons/fa-solid/copy";
import shareSquare from "@iconify-icons/fa-solid/share-square";
import chevronRight from "@iconify-icons/fa-solid/chevron-right";
import exchangeAlt from "@iconify-icons/fa-solid/exchange-alt";

export const TableRow = ({ trans }) => {
  const { id, transaction, pay, recieve, tradePerformance, rate } = trans;

  return (
    <tr>
      <td>
        <Icon icon={exchangeAlt} className="icon-exchange" />{" "}
        <span className="bodyText">{transaction.type}</span>{" "}
        <p className="secondaryText">{transaction.hour}</p>
      </td>
      <td>
        <img src={pay.image} alt={pay.criptocurrency} />{" "}
        <div>
          <span className="bodyText">{pay.criptocurrency}</span>{" "}
          <p className="secondaryText">{pay.value}</p>
        </div>
      </td>
      <td>
        <Icon icon={chevronRight} className="icon arrow" />{" "}
        <img src={recieve.image} alt={recieve.criptocurrency} />{" "}
        <div>
          {" "}
          <span>{recieve.criptocurrency}</span> <p>{recieve.value}</p>
        </div>
      </td>
      <td>
        <span className="tradePerformance">{tradePerformance}</span>
      </td>
      <td>
        <span>
          {rate} {pay.criptocurrency}
        </span>{" "}
        <p>per {recieve.criptocurrency}</p>
      </td>
      <td style={{ textAlign: "right" }}>
        <span>Transaction id</span>
        <p>{id}</p>
      </td>
      <td style={{ textAlign: "right" }}>
        <a href="#">
          <Icon icon={copyIcon} className="icon" />
        </a>{" "}
        <a href="#">
          <Icon icon={shareSquare} className="icon" />
        </a>
      </td>
    </tr>
  );
};
