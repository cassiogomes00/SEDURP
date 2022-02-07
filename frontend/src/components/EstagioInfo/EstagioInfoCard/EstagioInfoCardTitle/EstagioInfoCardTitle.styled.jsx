import styled from 'styled-components';

export default styled.h2`
  font-size: 2rem;
  font-weight: bold;
  text-align: center;

  margin: auto;
  margin-bottom: 50px;
  width: 35%;
  padding-bottom: 10px;

  border-bottom: 1px solid grey;

  @media (max-width: 900px) {
    width: 50%;
  }
`;
