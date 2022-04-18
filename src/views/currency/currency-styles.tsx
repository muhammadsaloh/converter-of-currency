import styled from "styled-components";

export const CardWrappper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin-top: 80px;
`;

export const List = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  border: 1px solid #ccc;
  padding: 5px 8px;
  margin: 10px 0px;
`;

export const Title = styled.h1`
  margin: 0;
  &:nth-child(2) {
    margin-left: 20px;
    margin-right: 20px;
  }
`;
