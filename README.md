
## Project Overview

This is a React + TypeScript application for managing products with advanced features like filtering, sorting, and analytics visualization.


## Setup instructions
1- yarn or npm install
2- yarn dev or npm run dev (run Development server)
3- yarn build or npm run build (build the project)

## Features

- **Product Dashboard**
  - Bar chart showing product distribution by category
  - Pie chart displaying stock status distribution
  - Line chart tracking price trends across categories

- **Product Management**

  - View all products in a sortable table
  -  filtering by category and stock status
  - Edit product details including:
    - Basic information (name, category, price)
    - Stock status
    - Dimensions
    - Description
    - SKU

- **Performance Optimizations**
  - Web Workers for handling filtering and sorting operations
  - Lazy loading of components
  - Redux for state management



## Project Structure
src/
├── api/              # API configuration and services
├── assets/           # Static assets
├── components/       # Shared components
├── constants/        # Constants and paths
├── features/         # Feature-based modules
├── hooks/           # Custom React hooks
├── pages/           # Page components
├── store/           # Redux store configuration
├── styles/          # Global styles
├── types/           # TypeScript type definitions
└── workers/         # Web Workers for performance

the project is built with Vite and Tailwind CSS . 
architecture is based on feature-based modules.

## Notes
1-Put APi is not working from the vendor itself it gave me 404 

2- you can find   sort in only product name & price Just click on name head or price and it will sort automatically 


```