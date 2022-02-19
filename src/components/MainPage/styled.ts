import styled from 'styled-components';

export const StHeadOne = styled.h1`
  margin-top: 30px;
  text-align: center;
  color: white;
`;

export const StNews = styled.div`
  margin: 50px auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  text-align: center;
  place-items: center;
`;
export const StLoading = styled.div`
  display: grid;
  width: 500px;
  height: 300px;
  padding: 30px;
  border: 1px solid lightgray;
  border-radius: 5px;
  background: white;
  place-items: center;
`;
