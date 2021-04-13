import React from "react";
import { TableRow } from "./TableRow";

export const Table = () => {
  const transactions = [
    {
      date: "21/01",
      transactionsOfDay: [
        {
          id: "0x2g345766545",
          transaction: {
            type: "Sell",
            hour: "6.34PM",
          },
          pay: {
            criptocurrency: "ETH",
            image: "./assets/ethereum.svg",
            value: "38,251$",
          },
          recieve: {
            criptocurrency: "BTC",
            image: "./assets/bitcoin.svg",
            value: "38,251$",
          },
          tradePerformance: "12%↑",
          rate: "10,2341",
        },
        {
          id: "0x2g345766545",
          transaction: {
            type: "Buy",
            hour: "6.34PM",
          },
          pay: {
            criptocurrency: "XRP",
            image: "./assets/xrp.svg",
            value: "38,251$",
          },
          recieve: {
            criptocurrency: "ETH",
            image: "./assets/ethereum.svg",
            value: "38,251$",
          },
          tradePerformance: "",
          rate: "10,2341",
        },
      ],
    },
    {
      date: "22/01",
      transactionsOfDay: [
        {
          id: "0x2g345766545",
          transaction: {
            type: "Buy",
            hour: "6.34PM",
          },
          pay: {
            criptocurrency: "BTC",
            image: "./assets/bitcoin.svg",
            value: "38,251$",
          },
          recieve: {
            criptocurrency: "ETH",
            image: "./assets/ethereum.svg",
            value: "38,251$",
          },
          tradePerformance: "",
          rate: "10,2341",
        },
        {
          id: "0x2g345766545",
          transaction: {
            type: "Swap",
            hour: "6.34PM",
          },
          pay: {
            criptocurrency: "ETH",
            image: "./assets/ethereum.svg",
            value: "38,251$",
          },
          recieve: {
            criptocurrency: "XRP",
            image: "./assets/xrp.svg",
            value: "38,251$",
          },
          tradePerformance: "",
          rate: "10,2341",
        },
        {
          id: "0x2g345766545",
          transaction: {
            type: "Swap",
            hour: "6.34PM",
          },
          pay: {
            criptocurrency: "BTC",
            image: "./assets/bitcoin.svg",
            value: "38,251$",
          },
          recieve: {
            criptocurrency: "ETH",
            image: "./assets/ethereum.svg",
            value: "38,251$",
          },
          tradePerformance: "",
          rate: "10,2341",
        },
      ],
    },
  ];
  return (
    <table>
      <caption>Trade History</caption>
      <thead>
        <tr>
          <th>Transaction</th>
          <th>Pay</th>
          <th>Recieve</th>
          <th>Trade Performance</th>
          <th>Rate</th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {transactions.map((transaction) => {
          return (
            <>
              <tr>
                <td>{transaction.date}</td>
              </tr>
              {transaction.transactionsOfDay.map((transactionOfDay) => {
                return (
                  <TableRow
                    trans={transactionOfDay}
                    key={transactionOfDay.id}
                  />
                );
              })}
            </>
          );
        })}
      </tbody>
    </table>
  );
};
