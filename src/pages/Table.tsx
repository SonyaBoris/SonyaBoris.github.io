import Status from "../components/Status";
import Gender from "../components/Gender";
import CharacterBlock from "../components/CharacterBlock";

import { useEffect, useState } from "react";
import Pagination from "../components/Pagination";
import { Link } from "react-router-dom";


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

const Table = () => {

  const [items, setItems] = useState<Character[]>([])
  const [categoryId, setCategoryId] = useState(0)
  const [genderId, setGenderId] = useState(0)
  const [page, setPage] = useState(1)

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/?page=${page}&status=${categories[categoryId]}&gender=${gender[genderId]}`)
      .then((res) => {
        return res.json()
      }).then((json) => {
        setItems(json.results)
      })
  }, [categoryId, genderId, page])

  const categories: String[] = ["", "alive", "dead", "unknown"]
  const gender: String[] = ['', 'female', 'male', 'genderless', 'unknown']


  return (
    <div className="container">
      <Link to='/'>
        <button className="exit__btn">
          <svg width="25" height="25" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M338 419L175 256L338 93" stroke="white" stroke-width="24" stroke-linecap="round" />
          </svg>
          <span>Exit</span> </button>

      </Link>
      <div>
        <Status categories={categories} value={categoryId} onClickCategory={(id) => setCategoryId(id)} />
        <Gender gender={gender} value={genderId} onClickGender={(id) => setGenderId(id)} />
      </div>
      <h2 className="content__title">Characters</h2>
      <div className="content__items">
        {items.map((obj) => (
          <CharacterBlock key={obj.id} {...obj} />
        ))}
      </div>
      <Pagination value={page} onClickPage={(value) => setPage(value)} />

    </div>
  );
}

export default Table;