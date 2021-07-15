import IndexNavbar from "components/Navbars/IndexNavbar"
import GameCard from "components/Cards/GameCard"
import PogoTeam from "components/Cards/PogoTeam"
import GameCam from "components/Cards/GameCam"
import Footer from "components/Footers/Footer"

export default function Pogo () {
  return(
    <div className="image">
      <IndexNavbar/>
      <div className="grid grid-row-3" >
        <div className="flex flex-row justify-evenly justify-items-center">
          <PogoTeam />
          <GameCard />
          <GameCam />
        </div>
      </div>
      <Footer />
    </div>
  );
}
