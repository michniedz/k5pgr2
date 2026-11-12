import Pizza from "./components/Pizza.jsx";
import Filmy from "./components/Filmy.jsx";


function App() {
    const url = import.meta.env.VITE_API_URL;
  return (
    <>
        <h1>{import.meta.env.VITE_APP_NAME}</h1>
        <h2>{url}</h2>
      {/*<Pizza />*/}
        <Filmy />
    </>
  )
}

export default App
