import styled from 'styled-components';

export const FriendListUl = styled.ul`
  display: flex;
  flex-direction: column;
  max-width: 240px;
  text-align: center;
  background-color: rgba(243, 246, 249, 1);
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
`;

export const FriendItemLi = styled.li`
  display: flex;
  align-items: center;
  width: 240px;
  padding-top: 10px;
  padding-bottom: 10px;
  border: 1px solid #eee;
  border-top-left-radius: 5px;
  box-shadow: inset 0 -3em 3em rgba(0, 0, 0, 0.1), 0 0 0 2px rgb(190, 190, 190),
    0.3em 0.3em 1em rgba(0, 0, 0, 0.3);
`;

export const FriendStatusSpan = styled.span`
  width: 15px;
  height: 15px;
  border: none;
  border-radius: 50%;
  background-color: ${props => {
    switch (props.type) {
      case 'true':
        return '#09ee09';
      case 'false':
        return '#e61818';
      default:
        return '#000';
    }
  }};
`;

export const FriendImg = styled.img`
  max-width: 100px;
  border-radius: 50%;
  margin-left: 20px;
  margin-right: 20px;
`;

export const FriendName = styled.p`
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 12px;
  color: blueviolet;
`;
