import { BrowserRouter, Routes, Route } from "react-router-dom";
import QuoteGenerator from "./page/QuoteGenerator";
import MarkdownPreviewer from "./page/MarkdownPreviewer";
import DrumMachine from "./page/DrumMachine";
import { Calculator } from "./page/Calculator.";

export default function Home() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<QuoteGenerator />} />
          <Route path="markdown-previewer" element={<MarkdownPreviewer />} />
          <Route path="drum-machine" element={<DrumMachine />} />
          <Route path="calculator" element={<Calculator />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
