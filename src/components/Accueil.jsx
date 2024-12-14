export function Accueil({ onNext }) {
    return (
      <div className="relative w-full h-screen flex flex-col py-20 font-orelega">

        <img src="./assets/sapin.png" className="absolute bottom-5 -right-51 scale-190 z-0"></img>
        <img src="./assets/pile_gift_out.png" className="absolute -bottom-5 scale-120"></img>

        <div className="px-10">
        <h1 className="text-3xl font-bold mb-6 relative font-orelega">Coucou!</h1>
        <p className=" mb-10 relative">Bienvenue dans l'application Secret Santa ! </p>
        <p className=" mb-10 relative">
Organisez facilement votre échange de cadeaux entre 
amis ou collègues.</p>
        <button
          onClick={onNext}
        >
        <img src="./assets/btn_organise.png" className="absolute scale-70 -left-10"></img>
        </button>
      </div>

        </div>
    
    );
  }
  