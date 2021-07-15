import data from '../gamemaster.json';

export default function Pokes() {
  return(
    <div>
      {data.pokemon.map(pokemon => (
        <div key={pokemon.speciesId}>
          <div>{pokemon.fastMoves}{pokemon.chargedMoves}</div>
        </div>
      ))}
    </div>
  )
}
