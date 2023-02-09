import React from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { Gif } from "../MainView/MainView";

import {
  Backdrop,
  Modal,
  MainImage,
  Navigation,
  Thumbs,
  SelectedThumb,
} from "./Carouse.styles";

interface CarouselProps {
  open: boolean;
  selectedGif: Gif;
  gifs: Gif[];
  handleClose: () => void;
}

export function Carousel({
  open,
  selectedGif,
  gifs,
  handleClose,
}: CarouselProps) {
  const [thumbPosition, setThumbPosition] = React.useState(0);
  const [selected, setSelected] = React.useState(selectedGif);

  function handleLeftClick() {
    console.log(thumbPosition);
    if (thumbPosition < 99) {
      return;
    }

    setThumbPosition((current) => current + 100);
  }

  function handleRightClick() {
    console.log(thumbPosition);
    if (thumbPosition === gifs.length * 100) {
      return;
    }

    setThumbPosition((current) => current - 100);
  }

  return open ? (
    <Backdrop>
      <Modal>
        <MainImage>
          <img src={selected.images.original.url} alt={selected.title} />
        </MainImage>

        <Navigation>
          <button onClick={handleLeftClick}>
            <AiOutlineArrowLeft size={20} color="black" />
          </button>

          <Thumbs position={thumbPosition}>
            <div>
              {gifs.map((gif) => (
                <SelectedThumb
                  key={gif.id}
                  src={gif.images.downsized.url}
                  alt={gif.title}
                  onClick={() => setSelected(gif)}
                  isSelected={gif.id === selected.id}
                />
              ))}
            </div>
          </Thumbs>

          <button onClick={handleRightClick}>
            <AiOutlineArrowRight size={20} color="black" />
          </button>
        </Navigation>
      </Modal>
    </Backdrop>
  ) : (
    <></>
  );
}
