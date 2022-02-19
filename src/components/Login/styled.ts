import styled from 'styled-components';

export const StLogin = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`;

export const StForm = styled.form`
  width: 300px;
  height: 450px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  border: 2px solid #1e1103;
  padding: 0 10px;
  justify-content: center;
  align-items: center;
  background: white;
  border-radius: 5px;
  box-shadow: 2px 2px 2px #000000;
`;

export const StLabel = styled.label`
  text-align: center;
  font-size: 50px;
`;
