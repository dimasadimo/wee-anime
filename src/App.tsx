import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SnackbarProvider } from "notistack";
import { ROUTES } from './constants';
import { HomePage } from "./pages";
import { DetailPage } from "./pages/Detail/DetailPage";

const App = () => {
  return (
    <SnackbarProvider>
      <BrowserRouter>
        <Routes>
          <Route path={ROUTES.HOME} element={<HomePage/>} />
          <Route path={ROUTES.DETAIL} element={<DetailPage />} />
          <Route path={ROUTES.COLLECTION} element={<div style={{paddingTop: '100px'}}>Collection</div>} />
        </Routes>
      </BrowserRouter>
    </SnackbarProvider>
  );
}

export default App;
