import React from "react";
import Contact from "./components/Contact";

function App() {
  return (
    <div>
      <div className="App">
        <Contact
          avatar="https://renvoiaux22.fr/WordPress3/wp-content/uploads/2018/02/1145778_3108e.jpg"
          name="Jean-claude Duss"
          online={true}
        />
      </div>
      <div className="App">
        <Contact
          avatar="https://images.pausecafein.fr/images/cafein/2016/02/bronzes-repliques-cultes/christiane.jpg"
          name="Christiane L'esthéticienne"
          online={false}
        />
      </div>
      <div className="App">
        <Contact
          avatar="https://renvoiaux22.fr/WordPress3/wp-content/uploads/2018/02/1145778_3108e.jpg"
          name="Nathalie jyvaismaisjaipeur"
          online={true}
        />
      </div>
    </div>
  );
}

export default App;
