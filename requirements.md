BlueCoding Test

- I'm gonna to build a Gif browser
- I need to connect to Giphy API (https://github.com/Giphy/GiphyAPI)

Functional Requirement

- The page should never load
- On the initial load, I can load 9 gifs right away (without a specific prompt)
- I have a form in which I can input/prompt for a new set of gif's
  - search after the user clicks on a button
  - Then, render 9 new gifs based on the search
- Button "load more" in the end of the page in which I can load more results
- Clicking on a gif opens a modal with a slideshow
  - The selected image on the slideshow must be the clicked gif
  - The slideshow contains a set of thumbnails that are the same thumbnails present on the previous screen
  - Doesn't take into account a circular navigation between the thumbnails
  - Backdrop behind the modal should exit the modal as well as an X button
