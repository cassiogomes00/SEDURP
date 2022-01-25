import styled from 'styled-components';

export default styled.form`
  display: flex;
  flex-direction: column;

  margin: auto;

  width: 35%;

  @media (max-width: 900px) {
    width: 50%;
  }
`;
