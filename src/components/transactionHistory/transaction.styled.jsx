import styled from 'styled-components';

export const TransactionDiv = styled.div`
  position: absolute;
  top: 0;
  left: 360px;
  margin-right: auto;
  margin-left: auto;
  margin-top: 25px;
  margin-bottom: 30px;
  border-radius: 5px;
  background: #e0e0e0;
  box-shadow: 20px 20px 60px #bebebe, -20px -20px 60px #ffffff;
`;

export const TransactionsDivTable = styled.table`
  //  max-width: 240px;
  border-collapse: collapse;
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
  padding: 10px 15px;
  width: 80px;
  border: solid 1px #ccc;
`;
