/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import { space, layout, typography, color, flexbox } from 'styled-system';

export const Table = styled.table`
  ${space}
  ${layout}
  width: 100%;
  border-collapse: collapse;
`;

export const TableRow = styled.tr`
  ${space}
  ${layout}
  &:nth-of-type(even) {
    background-color: #f9f9f9;
  }
`;

export const TableCell = styled.td`
  ${space}
  ${layout}
  ${typography}
  ${color}
  padding: 8px;
  border: 1px solid #ddd;
`;

export const Button = styled.button`
  ${space}
  ${layout}
  ${typography}
  ${color}
  ${flexbox}
  padding: 8px 16px;
  margin: 4px;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: #ddd;
  }
`;

export const Audio = styled.audio`
  ${space}
  ${layout}
  width: 100%;
`;
