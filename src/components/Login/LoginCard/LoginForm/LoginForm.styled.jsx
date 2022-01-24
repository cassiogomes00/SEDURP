import styled from 'styled-components';

export default styled.form`
  display: flex;
  flex-direction: column;

  max-width: 50%;

  margin: auto;

  @media (min-width: 768px) and (max-width: 1023px) {
    max-width: 60%;
  }

  @media (max-width: 767px) {
    max-width: 80%;
  }
`;
