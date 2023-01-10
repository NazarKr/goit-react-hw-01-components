import React from 'react';
import { TransactionsTd } from './transaction.styled';

export const TransactionsTable = ({ type, amount, currency }) => (
        <tr>
          <TransactionsTd>{type}</TransactionsTd>
          <TransactionsTd>{amount}</TransactionsTd>
          <TransactionsTd>{currency}</TransactionsTd>
        </tr>
);
