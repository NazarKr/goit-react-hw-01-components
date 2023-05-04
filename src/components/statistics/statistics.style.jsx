import styled from 'styled-components';

export const UserStatDiv = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  min-width: 240px;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const UserStatTitle = styled.h2`
  font-size: 14px;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
`;

export const UserStatUl = styled.ul`
  display: flex;
  max-width: 240px;
  text-align: center;
  background-color: rgba(243, 246, 249, 1);
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;
  box-shadow: inset 0 -3em 3em rgba(0, 0, 0, 0.1), 0 0 0 2px rgb(190, 190, 190),
    0.3em 0.3em 1em rgba(0, 0, 0, 0.3);
`;

export const UserStarLi = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 80px;
  padding-top: 20px;
  padding-bottom: 20px;
  border: 1px solid #eee;
`;

export const UserStatLabel = styled.span`
  font-size: 14px;
  color: rgba(117, 132, 147, 1);
`;

export const UserStatPercentage = styled.span`
  font-size: 16px;
  font-weight: 700;
  color: gray;
`;
