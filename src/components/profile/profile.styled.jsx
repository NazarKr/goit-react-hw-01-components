import styled from 'styled-components';

export const Card = styled.div`
  padding-top: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 360px;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 240px;
  background-color: rgba(255, 255, 255, 1);
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
  box-shadow: inset 0 -3em 3em rgba(0, 0, 0, 0.1), 0 0 0 2px rgb(190, 190, 190),
    0.3em 0.3em 1em rgba(0, 0, 0, 0.3);
`;

export const UserAvatar = styled.img`
  max-width: 100px;
  border-radius: 50%;
  margin-top: 30px;
  margin-bottom: 30px;
`;

export const UserName = styled.p`
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 12px;
  color: blueviolet;
`;

export const UserTag = styled.p`
  margin-bottom: 12px;
  font-size: 14px;
  color: rgba(117, 132, 147, 1);
`;

export const UserLocation = styled.p`
  margin-bottom: 12px;
  font-size: 14px;
  color: rgba(117, 132, 147, 1);
`;

export const UserStatsList = styled.ul`
  display: flex;
  justify-content: space-evenly;
  min-width: 240px;
  text-align: center;
  background-color: rgba(243, 246, 249, 1);
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;
  transition: border-radius 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  box-shadow: inset 0 -3em 3em rgba(0, 0, 0, 0.1), 0 0 0 2px rgb(190, 190, 190),
    0.3em 0.3em 1em rgba(0, 0, 0, 0.3);
`;

export const UserStatsItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 80px;
  padding-top: 20px;
  padding-bottom: 20px;
  border: 1px solid #eee;
`;

export const UserLabel = styled.span`
  font-size: 14px;
  color: rgba(117, 132, 147, 1);
`;

export const UserQuantity = styled.span`
  font-size: 16px;
  font-weight: 700;
  color: grey;
`;
