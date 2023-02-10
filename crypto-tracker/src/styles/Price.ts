import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 30px 0;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px;
  border: 1px solid ${(props) => props.theme.accentColor};
  border-radius: 10px;
  width: 100%;
  height: 100px;
  margin: 5px 0;
`;

export const ContentTitle = styled.div`
  font-size: 10px;
  margin-bottom: 10px;
  font-weight: 800;
`;

export const ContentMain = styled.div<{ checker?: number }>`
  font-size: 30px;
`;