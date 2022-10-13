import Navigation from "./Component/Navigation";
import { UserContextProvider } from "./Utilities/Context";

function App() {
  return (
    <div>
      <UserContextProvider>
        <Navigation />
      </UserContextProvider>
    </div>
  );
}

export default App;
