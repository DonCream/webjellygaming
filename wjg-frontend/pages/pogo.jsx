import IndexNavbar from "components/Navbars/IndexNavbar"
import GameCard from "components/Cards/GameCard"
import PogoTeam from "components/Cards/PogoTeam"
import GameCam from "components/Cards/GameCam"
import Footer from "components/Footers/Footer"
import League from "components/Cards/League"
import Chat from "components/Cards/Chat"

export default function Pogo () {
  return(
    <div className="image">
      <IndexNavbar/>
      <div className="grid grid-row-3" >
        <div className="flex flex-row justify-evenly">
          <PogoTeam />
          <GameCard />
          <div>
            <GameCam />
            <League />
            <Chat /> 
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
