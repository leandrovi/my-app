import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 80px 0px;
  gap: 80px;
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  small {
    font-size: 16px;
    line-height: 16px;
    font-weight: 400;
    color: #333;
    margin-top: 14px;
  }
`;

export const InputWrapper = styled.div`
  width: 100%;
  max-width: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Input = styled.input`
  width: 100%;
  border: none;
  background: white;
  font-size: 16px;
  line-height: 16px;
  padding: 12px;
  border-radius: 4px 0px 0px 4px;
`;

export const Button = styled.button`
  width: "fit-content";
  padding: 12px;
  border: none;
  background: lightblue;
  font-size: 16px;
  line-height: 16px;
  color: white;
  border-radius: 0px 4px 4px 0px;
  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.9);
    cursor: pointer;
  }
`;

export const Grid = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 9px;
  width: 100%;
  max-width: 1200px;
`;

export const Gif = styled.div`
  width: calc(33% - 3px);
  aspect-ratio: 1/1;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
`;
