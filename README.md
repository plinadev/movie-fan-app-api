# Movie Fan App API

A RESTful API built with Express that powers the "Movie Fan App" by fetching data from TMDb and serving endpoints for movie listings and details.

---

## Features

- `GET /api/movies/now_playing` — Returns a list of currently playing movies from TMDb.
- `GET /api/movies/:id` — Returns detailed information for a specific movie.
- Clean and modular route structure.
- Error handling middleware for graceful API responses.

---

## Setup

### Prerequisites

- Node.js (v14+)

### Installation

```bash
git clone https://github.com/plinadev/movie-fan-app-api.git
cd movie-fan-app-api
npm install
```

Create a `.env` file in the project root:

```env
TMDB_API_KEY=your_tmdb_api_key
PORT=3001
```

---

## Scripts

```bash
npm run dev     # Start the API with nodemon (auto-reload)
npm start       # Start the API normally
```

---

## Endpoints

### `GET /api/movies/now_playing`

- **Response**: `200 OK`  
  ```json
  {
    "results": [
      {
        "id": 123,
        "title": "Example Movie",
        "poster_path": "/path.jpg",
        "release_date": "2025-06-10"
      },
      ...
    ]
  }
  ```

### `GET /api/movies/:id`

- **Response**: `200 OK`  
  ```json
  {
    "id": 123,
    "title": "Example Movie",
    "overview": "Movie summary…",
    "genres": [ { "id": 1, "name": "Action" }, ... ],
    "runtime": 120,
    ...
  }
  ```

---

## Error Handling

- Responds with `500` if the TMDb API request fails.
- Responses are in JSON:  
  ```json
  { "error": "Failed to fetch data" }
  ```

---

## Environment

Add `.env` to your `.gitignore` to keep your TMDb key secret.

---

