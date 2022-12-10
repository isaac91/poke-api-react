import { Route, Routes } from "react-router";
import Home from "./routes/home/home.component";
import Pokemon from "./routes/pokemon/pokemon.component";

const App = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="pokemon/:id" element={<Pokemon />} />
    </Routes>
  );
};

export default App;
