import styled from 'styled-components';

export default styled.textarea`
  margin-bottom: 20px;
  margin-top: 5px;
  padding: 15px;

  resize: none;

  height: 50px;

  background-color: #e2e2e2;

  border-style: none;
  border-radius: 5px;

  transition: 200ms ease-in-out;

  :focus {
    background-color: #00904634;
  }

  @media (max-width: 600px) {
    width: 100%;
  }
`;
