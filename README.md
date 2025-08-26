# Resellify - E-commerce Platform

Resellify is a full-stack e-commerce platform built with modern web technologies. It allows users to browse products, search for specific items, and add new products to the catalog.

## Features

- **Product Catalog:** Browse a list of all available products with pagination.
- **Search:** Search for products by name.
- **Add Products:** Easily add new products to the catalog.
- **Authentication:** User authentication is handled using Clerk.

## Technologies Used

- **Frontend:**
  - [Next.js](https://nextjs.org/) - React framework for building user interfaces.
  - [React](https://reactjs.org/) - JavaScript library for building user interfaces.
  - [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework.
  - [TypeScript](https://www.typescriptlang.org/) - Typed superset of JavaScript.
  - [axios](https://axios-http.com/) - Promise-based HTTP client.

- **Backend:**
  - [Next.js API Routes](https://nextjs.org/docs/api-routes/introduction) - For creating the backend API.
  - [MongoDB](https://www.mongodb.com/) - NoSQL database for storing product data.
  - [Mongoose](https://mongoosejs.com/) - ODM for MongoDB.
  - [Cloudinary](https://cloudinary.com/) - For image hosting and management.

- **Authentication:**
  - [Clerk](https://clerk.dev/) - For user authentication and management.

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

- Node.js (v18 or later)
- npm or yarn
- MongoDB account
- Cloudinary account
- Clerk account

### Installation

1. **Clone the repo:**
   ```sh
   git clone https://github.com/your_username/resellify.git
   ```

2. **Install NPM packages:**
   ```sh
   npm install
   ```
   or
    ```sh
    yarn install
    ```

3. **Set up environment variables:**
   Create a `.env.local` file in the root of your project and add the following variables:
   ```env
   MONGO_URI=your_mongodb_connection_string
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
   CLERK_SECRET_KEY=your_clerk_secret_key
   CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
   CLOUDINARY_API_KEY=your_cloudinary_api_key
   CLOUDINARY_API_SECRET=your_cloudinary_api_secret
   ```

4. **Run the development server:**
   ```sh
   npm run dev
   ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
