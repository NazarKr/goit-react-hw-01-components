import React from 'react';
import { TransactionDiv, TransactionsDivTable, TransactionsTh, TransactionsThead, } from './transaction.styled';
import { TransactionsTable } from './transactionsTable';

interface TransactionHistoryProps {
  id: string;
  type: string;
  amount: string;
  currency: string;
}

interface TransactionItems {
  items: TransactionHistoryProps[];
}

export const TransactionHistory: React.FC<TransactionItems> = ({ items }) => (
  <TransactionDiv>
    <TransactionsDivTable>
      <TransactionsThead>
        <tr>
          <TransactionsTh>Type</TransactionsTh>
          <TransactionsTh>Amount</TransactionsTh>
          <TransactionsTh>Currency</TransactionsTh>
        </tr>
      </TransactionsThead>
      <tbody>
        <>
          {items.map(({ id, type, amount, currency }) => (
            <TransactionsTable
              key={id}
              type={type}
              amount={amount}
              currency={currency}
            />
          ))}
        </>
      </tbody>
    </TransactionsDivTable>
  </TransactionDiv>
);
