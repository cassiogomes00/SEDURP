import styled from 'styled-components';

export default styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;

  @media (max-width: 900px) {
    justify-content: space-between;
  }

  @media (max-width: 600px) {
    flex-direction: column;
    height: 100px;
  }
`;
