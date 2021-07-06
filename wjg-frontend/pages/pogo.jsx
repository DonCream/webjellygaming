import IndexNavbar from "components/Navbars/IndexNavbar"
import GameCard from "components/Cards/GameCard"
import PogoTeam from "components/Cards/PogoTeam"
import GameCam from "components/Cards/GameCam"
import Footer from "components/Footers/Footer"

export default function Pogo () {
  return(
    <div className="image">
      <IndexNavbar/>
      <div className="flex flex-row justify-between justify-items-center">
      <PogoTeam />
      <GameCard />
      <GameCam />
      </div>
      <Footer />
    </div>
  );
}
