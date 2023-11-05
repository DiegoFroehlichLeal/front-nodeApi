import React from 'react';
import styled from 'styled-components';

const FuturisticTable = styled.table`
  background-color: #0f0f0f;
  color: #00ff00;
  border: 1px solid #00ff00;
  border-collapse: collapse;
  width: 100%;
`;

const FuturisticTableHeader = styled.th`
  padding: 10px;
`;

const FuturisticTableRow = styled.tr`
  border: 1px solid #00ff00;
`;

const FuturisticTableCell = styled.td`
  padding: 10px;
  border: 1px solid #00ff00;
`;

function FuturisticDataTable({ data }) {
  return (
    <FuturisticTable>
      <thead>
        <FuturisticTableRow>
          <FuturisticTableHeader>ID</FuturisticTableHeader>
          <FuturisticTableHeader>Data</FuturisticTableHeader>
          <FuturisticTableHeader>Contato</FuturisticTableHeader>
          <FuturisticTableHeader>Feature</FuturisticTableHeader>
          <FuturisticTableHeader>User Story</FuturisticTableHeader>
        </FuturisticTableRow>
      </thead>
      <tbody>
        {data.map((item) => (
          <FuturisticTableRow key={item._id}>
            <FuturisticTableCell>{item.ID}</FuturisticTableCell>
            <FuturisticTableCell>{item.Data}</FuturisticTableCell>
            <FuturisticTableCell>{item.Contato}</FuturisticTableCell>
            <FuturisticTableCell>{item.Feature}</FuturisticTableCell>
            <FuturisticTableCell>{item.User_story}</FuturisticTableCell>
          </FuturisticTableRow>
        ))}
      </tbody>
    </FuturisticTable>
  );
}

export default FuturisticDataTable;
