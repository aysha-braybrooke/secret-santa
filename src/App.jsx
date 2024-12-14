import { useState } from "react";
import { WelcomeScreen } from "./components/WelcomeScreen";
import { Accueil } from "./components/Accueil"; // Import du nouvel écran
import { ParticipantInput } from "./components/ParticipantInput";
import { AssignmentDisplay } from "./components/AssignmentDisplay";
import './index.css';


export default function App() {
  const [participants, setParticipants] = useState([]);
  const [assignments, setAssignments] = useState([]);
  const [currentScreen, setCurrentScreen] = useState("welcome");

  const addParticipant = (name) => {
    setParticipants([...participants, name]);
  };

  const removeParticipant = (index) => {
    setParticipants(participants.filter((_, i) => i !== index));
  };

  const distributeGifts = () => {
    if (participants.length < 2) {
      alert("Il faut au moins 2 participants pour faire un Secret Santa !");
      return;
    }

    const shuffled = [...participants].sort(() => Math.random() - 0.5);
    const newAssignments = shuffled.map((giver, index) => ({
      giver,
      receiver: shuffled[(index + 1) % shuffled.length],
    }));

    setAssignments(newAssignments);
    setCurrentScreen("assignments");
  };

  const resetApp = () => {
    setParticipants([]);
    setAssignments([]);
    setCurrentScreen("welcome");
  };

  return (
    <div className="container mx-auto font-orelega">
      {/* Écran d'accueil */}
      {currentScreen === "welcome" && (
        <WelcomeScreen onStart={() => setCurrentScreen("accueil")} />
      )}

      {/* Nouvel écran intermédiaire */}
      {currentScreen === "accueil" && (
        <Accueil onNext={() => setCurrentScreen("input")} />
      )}

      {/* Écran d'ajout des participants */}
      {currentScreen === "input" && (
        <>
          <h2 className="text-2xl font-bold mb-6 text-center">
            Ajoutez les participants
          </h2>
          <ParticipantInput
            onAddParticipant={addParticipant}
            participants={participants}
            onRemoveParticipant={removeParticipant}
          />
          <div className="mt-6">
            <button className="button w-full" onClick={distributeGifts}>
              Distribuer les cadeaux
            </button>
          </div>
        </>
      )}

      {/* Écran d'affichage des attributions */}
      {currentScreen === "assignments" && (
        <>
          <h2 className="text-2xl font-bold mb-6 text-center">
            Attributions des cadeaux
          </h2>
          <AssignmentDisplay assignments={assignments} />
          <div className="mt-6">
            <button className="button w-full" onClick={resetApp}>
              Recommencer
            </button>
          </div>
        </>
      )}
    </div>
  );
}
