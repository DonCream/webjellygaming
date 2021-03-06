import Image from "next/image"

export default function PogoTeam () {
  return(
    <div className="flex items-center justify-center">
      <div className="rounded shadow-lg gradient_border">
        <div className="grid place-items-center p-5">
          <p>Featured Pokemon</p>
        </div>
        <div className="flex flex-row items-center justify-center">
          <Image src="/img/Mewtwo.gif" width={150} height={150} alt="mewtwo" />
          <div className="flex items-center justify-center p-8">
            <div>
              <p>Psycho Cut</p>
              <p>Psystrike</p>
              <p>Focus Blast</p>
            </div>
          </div>
        </div>
        <div>
          <div className="flex flex-row items-center justify-center">
            <Image src="/img/Groudon.gif" width={150} height={150} alt="groundon" />
            <div className="flex items-center justify-center p-8">
              <div>
                <p>Mud Shot</p>
                <p>Fire Punch</p>
                <p>Earthquake</p>
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center justify-center">
            <Image src="/img/Dragonite.gif" width={150} height={150} alt="dragonite" />
            <div className="flex items-center justify-center p-8">
              <div>
                <p>Dragon Breath</p>
                <p>Dragon Claw</p>
                <p>Hurricane</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
