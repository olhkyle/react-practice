import DynamicMap from "./Map/DynamicMap";
import KakaoMapScriptLoader from "./Map/KakaoMapScriptLoader";
import SearchLocation from "./Map/SearchLocation";


function App():JSX.Element {
  return (
    <>
    <KakaoMapScriptLoader>
      <DynamicMap/>
      <SearchLocation/>
    </KakaoMapScriptLoader>

  </>
  );
}

export default App;
