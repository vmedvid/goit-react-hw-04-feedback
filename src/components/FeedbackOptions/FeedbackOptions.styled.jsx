import styled from '@emotion/styled';

export const FeedbackButton = styled.button`
  margin: 10px;
  padding: 5px 15px;
  font-size: 20px;
  font-weight: 500;
  color: #000;
  border-radius: 5px;
  border: 1px solid #535353;
  text-transform: capitalize;
  cursor: pointer;
  &:hover {
    color: #fff;
    background-color: #cc3131;
    border: 1px solid #cc3131;
  }
`;

export const FeedbackWrap = styled.div`
  display: flex;
  gap: 20px;
  margin: 10px 0;
  padding: 10px;
`;
