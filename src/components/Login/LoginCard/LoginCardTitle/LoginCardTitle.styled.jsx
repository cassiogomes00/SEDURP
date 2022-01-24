import styled from 'styled-components';

export default styled.h2`
  font-size: 1.5rem;

  margin: auto;
  margin-bottom: 50px;
  max-width: 50%;
  padding-bottom: 10px;

  border-bottom: 1px dotted grey;

  @media (min-width: 768px) and (max-width: 1023px) {
    max-width: 60%;
  }

  @media (max-width: 767px) {
    max-width: 80%;
  }
`;
