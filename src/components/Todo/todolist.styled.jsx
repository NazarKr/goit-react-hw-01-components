import styled from 'styled-components';

export const TodoListDiv = styled.div`
  
`
export const TodoListTotalP = styled.p`
  margin-left: 10px;
  padding: 10px;
`;

export const TodoListUl = styled.ul`
  width: 600px;
  margin-bottom: 20px;
`;

export const TodoListLi = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  background: white;
  border-radius: 10px;
  transition: border-radius 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  box-shadow: inset 0 -3em 3em rgba(0, 0, 0, 0.1), 0 0 0 2px rgb(190, 190, 190),
    0.3em 0.3em 1em rgba(0, 0, 0, 0.3);
`;
export const TodoListP = styled.p`
  margin-top: 0;
  margin-bottom: 0;
  margin-right: 10px;
`
export const TodoListButton = styled.button`
   font-size: 14px;
   padding: 0.5em 1em;
   border: transparent;
   box-shadow: 2px 2px 4px rgba(0,0,0,0.4);
   background: dodgerblue;
   color: white;
   border-radius: 4px;

   :hover {
 background: rgb(2,0,36);
 background: linear-gradient(90deg, rgba(30,144,255,1) 0%, rgba(0,212,255,1) 100%);
}
    :active {
  transform: translate(0em, 0.2em);
 }
`;

