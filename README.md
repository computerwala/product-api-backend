

## What You'll Need


- **Node.js** (v14 or later)
- **npm** (v6 or later)

## Getting Started

Follow these steps to get the app up and running on your local machine.

### Installation

1. **Clone the repo**:
   ```bash
   git clone <repository-url>
   cd product-api
   ```

2. **Install the dependencies**:
   ```bash
   npm install
   ```

### Running the App

1. **Start the development server**:
   ```bash
   npm start
   ```
   Your app will be live at `http://localhost:5173`. 

2. **Open your browser** and head over to `http://localhost:5173` to see it in action.

### Building for Production

1. **Create a production build**:
   ```bash
   npm run build
   ```
   This will generate an optimized build in the `build` directory, ready for deployment.

### Environment Variables

- We use environment variables to configure the API URL.
- Make sure to create `.env.development` and `.env.production` files to set `REACT_APP_API_URL` for different environments.

### Running Tests

- To run tests, simply use:
  ```bash
  npm test
  ```

## Features

- **Product Search**: Find products with ease, complete with lazy-loaded images.
- **Detailed Product View**: Explore product details with components that load on demand.

