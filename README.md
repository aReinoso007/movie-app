# Movies App

## Running the app:
```bash
npm run dev
```


## Running backend json server
```bash
json-server src/db/db.json --port 3030
```

## Architecture
1. Project Structure

```
    └── 📁src
    └── App.css
    └── App.jsx
    └── 📁assets
        └── react.svg
    └── 📁components
        └── AddModal.jsx
        └── ErrorDisplay.jsx
        └── Loading.jsx
        └── MovieCard.jsx
        └── MovieDetail.jsx
        └── Searchbar.jsx
    └── 📁db
        └── db.json
    └── 📁hooks
        └── useFetchMovies.jsx
    └── index.css
    └── main.jsx
    └── 📁pages
        └── ErrorPage.jsx
        └── MovieList.jsx
    └── 📁services
        └── axios-config.jsx
        └── axios-utils.jsx
        └── moviesAPI.jsx
```

- `src`: The source directory where all the application code resides.
  - `App.css`: Contains the global CSS styles for the application.
  - `App.jsx`: The main React component that serves as the entry point for the application.
  - `assets`: A directory for static files like images, icons, etc. It contains the `react.svg` file.
  - `components`: A directory for all the reusable React components. It includes `AddModal.jsx`, `ErrorDisplay.jsx`, `Loading.jsx`, `MovieCard.jsx`, `MovieDetail.jsx`, and `Searchbar.jsx`.
  - `db`: A directory with a `db.json` file, possibly used as a local database or mock data for the application.
  - `hooks`: A directory for custom React hooks. It includes `useFetchMovies.jsx` which is likely used to fetch movie data.
  - `index.css`: Likely contains additional global CSS styles.
  - `main.jsx`: Possibly the entry point for the application where the `App.jsx` component is rendered.
  - `pages`: A directory for components that represent different pages in the application. It includes `ErrorPage.jsx` and `MovieList.jsx`.
  - `services`: A directory for files related to API calls and configurations. It includes `axios-config.jsx`, `axios-utils.jsx`, and `moviesAPI.jsx`. The `axios` files are likely used for making HTTP requests, and `moviesAPI.jsx` is probably where the API calls to a movie database are made.