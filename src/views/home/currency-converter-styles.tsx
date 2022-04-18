import styled from "styled-components";
import { Card, Input } from "antd";

export const CardWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin-top: 80px;
`;

export const StyledCard = styled(Card)`
  border-radius: 8px;
`;

export const StyledInput = styled(Input)`
  -webkit-appearance: none;
`;
