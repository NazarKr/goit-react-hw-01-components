import styled from 'styled-components';

export const TransactionDiv = styled.div`
  position: absolute;
  top: 0;
  left: 360px;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 30px;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.5);
  background-color: rgba(243, 246, 249, 1);
`;

export const TransactionsDivTable = styled.table`
  //  max-width: 240px;
  border-collapse: collapse;
  margin: 25px 0;
  font-size: 0.9em;
  font-family: sans-serif;
  min-width: 400px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
`;

export const TransactionsThead = styled.thead`
  background-color: #009879;
  color: #ffffff;
  text-align: left;
`;

export const TransactionsTh = styled.th`
  padding: 12px 15px;
`;

export const TransactionsTr = styled.tr`
  text-align: left;
`;

export const TransactionsTd = styled.td`
  padding: 12px 15px;
  width: 80px;
  border: solid 1px #ccc;
`;
