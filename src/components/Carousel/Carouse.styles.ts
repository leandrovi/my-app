import styled, { css } from "styled-components";

export const Backdrop = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Modal = styled.div`
  width: 100%;
  max-width: 700px;
  height: 100%;
  max-height: 700px;
  padding: 30px;
  border-radius: 4px;
  background: white;
`;

export const MainImage = styled.div`
  width: 70%;
  aspect-ratio: 1/1;
  margin: 0 auto;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
`;

export const Navigation = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Thumbs = styled.div<{ position: number }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  overflow-x: scroll;
  width: 100%;
  height: 100px;
  position: relative;

  div {
    height: 100px;
    display: flex;
    align-items: center;
    position: absolute;
    top: 0;
    left: ${({ position }) => (position ? `${position}px` : 0)};

    img {
    }
  }
`;

export const SelectedThumb = styled.img<{ isSelected?: boolean }>`
  width: 100px;
  height: 100px;

  ${({ isSelected }) =>
    isSelected &&
    css`
      border: 3px solid lightblue;
    `}
`;
