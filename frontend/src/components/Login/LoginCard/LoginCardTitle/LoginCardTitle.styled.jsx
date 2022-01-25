import styled from 'styled-components';

export default styled.h2`
  font-size: 1.5rem;

  margin: auto;
  margin-bottom: 50px;
  width: 35%;
  padding-bottom: 10px;

  border-bottom: 1px dotted grey;

  @media (max-width: 900px) {
    width: 50%;
  }
`;
