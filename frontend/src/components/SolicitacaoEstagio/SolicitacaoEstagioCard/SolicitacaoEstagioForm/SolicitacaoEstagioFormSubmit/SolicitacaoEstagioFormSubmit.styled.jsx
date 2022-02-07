import styled from 'styled-components';

export default styled.input`
  text-align: center;

  width: 150px;

  padding: 15px;

  margin-left: auto;
  margin-top: 30px;

  color: white;
  background-color: #009045;
  font-weight: bold;

  border-style: none;
  border-radius: 5px;

  transition: 200ms;

  :hover {
    background-color: #00a14e;
  }

  @media (max-width: 600px) {
    width: 100%;
  }
`;
