import { BrowserRouter, Routes, Route } from "react-router-dom";
import QuoteGenerator from "./page/QuoteGenerator";
import MarkdownPreviewer from "./page/MarkdownPreviewer";

export default function Home() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<QuoteGenerator />} />
          <Route path="markdown-previewer" element={<MarkdownPreviewer />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
