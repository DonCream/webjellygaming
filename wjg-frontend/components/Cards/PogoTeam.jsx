import Image from "next/image"

export default function PogoTeam () {
  return(
    <div className="flex items-center justify-center">
      <div className="rounded shadow-lg gradient_border">
        <div className="p-5">
          <p>Featured Pokemon</p></div>
        <div className="flex flex-row items-center justify-center">
          <Image src="/img/Mewtwo.gif" width={150} height={150} alt="mewtwo" />
          <div className="flex items-center justify-center">
            <div>
              <p>Psycho Cut</p>
              <p>Psystrike</p>
              <p>Focus Blast</p>
            </div>
          </div>
        </div>
        <div>
          <Image src="/img/Groudon.gif" width={150} height={150} alt="groundon" />
        </div>
        <div>
          <Image src="/img/Dragonite.gif" width={150} height={150} alt="dragonite" />
        </div>
      </div>
    </div>
  )
}
