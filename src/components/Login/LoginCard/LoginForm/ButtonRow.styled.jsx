import styled from 'styled-components';

export default styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;

  @media (max-width: 767px) {
    flex-direction: column;

    height: 100px;
  }
`;
