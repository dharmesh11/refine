import styled from "styled-components";

export const TableContainer = styled.div`
  position: relative;
  font-size: 16px;
  max-width: 800px;
  margin:0 auto;
`;

export const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
  font-size: 0.9em;

  th {
    background-color: slategray;
    color: white;
    padding: 5px;
    border: 1px solid #ddd;
    text-align: left;
  }

  td {
    background-color: #eee;
    padding: 10px;
    border: 1px solid #ccc;
    text-align: left;
  }

  tr:nth-child(even) td {
    background-color: #fff;
  }

  tr:hover td {
    background-color: #ddd;
  }
`;