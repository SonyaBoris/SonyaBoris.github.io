
interface Character{
  id: number
  name: string
  image: string
  status: string
  species: string
  gender: string
  location: {
    name: string
  }
  origin: {
    name: string
  }
}

const CharacterBlock:React.FC<Character> = ({ name, image,species,status,gender,origin }) => {

  return (
    <div className="character">
      <img className="character__image" src={image} alt="Character" />
      <div className="character__about">
        <h4 className="character__info-name">{name}</h4>
        <h5 className="character__info">species: {species}</h5>
        <h5 className="character__info">gender: {gender}</h5>
        <h5 className="character__info">status: {status}</h5>
        <h5 className="character__info">location: {origin.name}</h5>
      </div>    
    </div>
  );
}

export default CharacterBlock;