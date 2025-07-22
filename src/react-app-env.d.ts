/// <reference types="vite/client" />

// Declare module for CSS imports
declare module "*.css" {
  const content: string;
  export default content;
}

// Specifically handle Bootstrap imports
declare module "bootstrap/dist/css/bootstrap.min.css";
declare module "bootstrap/dist/js/bootstrap.bundle.min.js";
