import React from "react";
import ReactDOMClient from "react-dom/client";
import { Content } from "./screens/Content";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<Content />);
