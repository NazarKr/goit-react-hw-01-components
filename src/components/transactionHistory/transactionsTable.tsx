import React from 'react';
import { TransactionsTd } from './transaction.styled';

interface TransactionsTableProps {
  type: string;
  amount: string;
  currency: string;
}

export const TransactionsTable: React.FC<TransactionsTableProps> = ({ type, amount, currency }) => (
        <tr>
          <TransactionsTd>{type}</TransactionsTd>
          <TransactionsTd>{amount}</TransactionsTd>
          <TransactionsTd>{currency}</TransactionsTd>
        </tr>
);
