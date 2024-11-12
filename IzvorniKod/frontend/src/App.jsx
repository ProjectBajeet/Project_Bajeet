// src/App.jsx
import React, { useState } from "react";
import ListaDiskusija from "./components/ListaDiskusija";
import diskusijeData from "../public/diskusije";
import HeaderComp from "./components/HeaderComp";
import korisnik from "../public/korisnikInfo";

const App = () => {
  const [diskusije, postaviDiskusije] = useState(diskusijeData);

  const naGlasanje = (id) => {
    postaviDiskusije((prethodneDiskusije) =>
      prethodneDiskusije.map((diskusija) =>
        diskusija.id === id && !diskusija.korisnikGlasao
          ? { ...diskusija, glasovi: diskusija.glasovi + 1, korisnikGlasao: true }
          : diskusija
      )
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 flex">
    
      <div className="flex-grow p-4">
        <ListaDiskusija diskusije={diskusije} naGlasanje={naGlasanje} />
      </div>

     
      <aside className="w-1/4 bg-blue-600 text-white p-4 flex flex-col items-center">
        <h1 className="text-xl font-bold mb-4">StanBlog</h1>
        <HeaderComp username={korisnik.korisnickoIme}/>
    
      </aside>
    </div>
  );
};

export default App;
