import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SnackbarProvider } from "notistack";
import { ROUTES } from './constants';
import { CollectionPage, DetailPage, HomePage } from "./pages";

const App = () => {
  return (
    <SnackbarProvider style={{backgroundColor: "green"}}>
      <BrowserRouter>
        <Routes>
          <Route path={ROUTES.HOME} element={<HomePage/>} />
          <Route path={ROUTES.DETAIL} element={<DetailPage />} />
          <Route path={ROUTES.COLLECTION} element={<CollectionPage />} />
          <Route path={ROUTES.COLLECTION_DETAIL} element={<div style={{paddingTop: '100px'}}>Collection Detail</div>} />
        </Routes>
      </BrowserRouter>
    </SnackbarProvider>
  );
}

export default App;
