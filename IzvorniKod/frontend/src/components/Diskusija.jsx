import React, { useState } from "react";
import DiskusijaDetalji from "./DiskusijaDetalji";

const Diskusija = ({ diskusija, naGlasanje }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [komentari, setKomentari] = useState(diskusija.komentari || []);
  const [glasanja, setGlasanja] = useState(diskusija.glasanja || []);

  const handleReadMore = () => {
    setIsModalOpen(true);
  };

  const handleAddComment = (komentarTekst) => {
    const noviKomentar = {
      id: komentari.length + 1,
      komentar: komentarTekst,
      korisnik: "Trenutni korisnik",
      timestamp: Date.now(),
    };
    setKomentari([...komentari, noviKomentar]);
  };

  const handleAddQuestion = (pitanjeTekst) => {
    const novoPitanje = {
      id: glasanja.length + 1,
      pitanje: pitanjeTekst,
      korisnik: "Trenutni korisnik",
      timestamp: Date.now(),
      upVotes: 0, // Initialize upVotes to 0
      downVotes: 0, // Initialize downVotes to 0
      korisnikGlasao: false
    };
    setGlasanja([...glasanja, novoPitanje]);
  };

  const handleVote = (glasanjeId, vote) => {
    setGlasanja((prev) =>
      prev.map((glasanje) =>
        glasanje.id === glasanjeId
          ? { ...glasanje, votes: (glasanje.votes || 0) + vote }
          : glasanje
      )
    );
  };

  return (
    <div className="p-4 bg-white shadow-md rounded-lg mb-4 border border-gray-200 relative">
      <span
        className={`absolute top-2 right-2 text-sm font-semibold px-2 py-1 rounded-full ${
          diskusija.tip === "public"
            ? "bg-green-200 text-green-800"
            : "bg-red-200 text-red-800"
        }`}
      >
        {diskusija.tip === "public" ? "Public" : "Private"}
      </span>
      <h2 className="text-xl font-semibold text-gray-800 bg-gray-200 p-2 rounded-lg inline-block mb-4">
        {diskusija.naslov}
      </h2>
      <button onClick={handleReadMore} className="text-blue-500 text-sm absolute bottom-2 left-2">
               Pročitaj više
      </button>

      {isModalOpen && (
        <DiskusijaDetalji
          diskusija={diskusija}
          komentari={komentari}
          glasanja={glasanja}
          onClose={() => setIsModalOpen(false)}
          onAddComment={handleAddComment}
          onAddQuestion={handleAddQuestion}
          onVote={handleVote}
        />
      )}
    </div>
  );
};

export default Diskusija;
