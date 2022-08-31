
import "./styles/app.scss"

import PageContainer from "./componentes/containers/PageContainer";
import Navbar from "./componentes/NavBar/NavBar";
import MobileNavBar from "./componentes/NavBar/MobileNavBar";

function App() {
  return (
    <div className="App">
      <PageContainer>
        <div className="mobileMenu">
          <MobileNavBar/>
        </div>
        <Navbar/>
      </PageContainer>
    </div>
  );
}

export default App;

