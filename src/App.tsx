import { BrowserRouter, Routes, Route } from "react-router-dom";
import QuoteGenerator from "./page/QuoteGenerator";

export default function Home() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<QuoteGenerator />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
