import React from "react";
import qs from "qs";
import { api } from "../../api";

import {
  Container,
  Input,
  InputWrapper,
  Title,
  Button,
  Grid,
  Gif,
} from "./MainView.styles";
import { Carousel } from "../Carousel/Carousel";

interface GifResponse {
  data: Gif[];
  pagination: Pagination;
}

export interface Gif {
  id: string;
  title: string;
  images: {
    original: {
      url: string;
    };
    downsized: {
      url: string;
    };
  };
}

interface Pagination {
  total_count: number;
  count: number;
  offset: number;
}

const giphyApiKey = process.env.REACT_APP_GIPHY_API_KEY as string;

export function MainView() {
  const [gifs, setGifs] = React.useState<Gif[]>([]);
  const [pagination, setPagination] = React.useState<Pagination>();
  const [isLoading, setIsLoading] = React.useState(true);
  const [search, setSearch] = React.useState("");
  const [error, setError] = React.useState<string | null>(null);
  const [isLoadingMore, setIsLoadingMore] = React.useState(false);

  React.useEffect(() => {
    async function fetchGifs() {
      try {
        const { data } = await api.get<GifResponse>(
          `/search?api_key=${giphyApiKey}&limit=9&q=dancing`
        );

        setGifs(data.data);
        setPagination(data.pagination);
        setIsLoading(false);
      } catch (err) {
        console.log(err);
        setError(
          "Ops, something went wrong, please check the website back later..."
        );
      }
    }

    fetchGifs();
  }, []);

  function renderGrid() {
    if (isLoading) {
      return <p>Loading gifs...</p>;
    } else if (error) {
      return <p>{error}</p>;
    } else {
      return (
        <>
          {gifs.map((gif) => (
            <Gif key={gif.id}>
              <img src={gif.images.original.url} alt={gif.title} />
            </Gif>
          ))}
        </>
      );
    }
  }

  async function handleSearch() {
    try {
      setError(null);
      setIsLoading(true);
      const { data } = await api.get<GifResponse>(
        `/search?api_key=${giphyApiKey}&limit=9&q=${search}`
      );

      setGifs(data.data);
      setPagination(data.pagination);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
      setError("Ops, sorry, we couldn't find your search. Try again later...");
    } finally {
      setIsLoading(false);
    }
  }

  async function handleLoadMore() {
    try {
      setError(null);
      setIsLoadingMore(true);
      const { data } = await api.get<GifResponse>(
        `/search?api_key=${giphyApiKey}&limit=9&q=${search}&offset=${
          Number(pagination?.offset) + 1
        }`
      );

      setGifs((current) => [...current, ...data.data]);

      setPagination(data.pagination);
      setIsLoadingMore(false);
    } catch (err) {
      console.log(err);
      setError("Ops, sorry, we couldn't load more. Try again later...");
    } finally {
      setIsLoadingMore(false);
    }
  }

  return (
    <>
      <Container>
        <Title>
          <h1>Giphy</h1>
          <small>Search for a set of gifs below:</small>
        </Title>

        <InputWrapper>
          <Input
            type="text"
            name="search"
            placeholder="Write something here"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
          <Button onClick={handleSearch}>Search</Button>
        </InputWrapper>

        <Grid>{renderGrid()}</Grid>

        <button onClick={handleLoadMore} disabled={isLoadingMore}>
          {isLoadingMore ? "Loading..." : "Load more"}
        </button>

        {gifs.length > 0 && (
          <Carousel
            open={true}
            gifs={gifs}
            selectedGif={gifs[0]}
            handleClose={() => {}}
          />
        )}
      </Container>
    </>
  );
}
