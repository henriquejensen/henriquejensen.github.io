import "./App.css";
import { Suspense, lazy } from "react";
import { CircleLoader } from "react-spinners";

const Home = lazy(() => import("./pages/Home"));

function App() {
  return (
    <Suspense
      fallback={
        <div
          style={{ position: "absolute", top: "40%", left: "35%", zIndex: 10 }}
        >
          <CircleLoader color="#36d7b7" size={150} />
        </div>
      }
    >
      <Home />
    </Suspense>
  );
}

export default App;
