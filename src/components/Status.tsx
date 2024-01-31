interface Status{
  value: number
  onClickCategory:  (idx: number) => void;
  categories: String[]

}

const Status: React.FC<Status> = ({ value, onClickCategory, categories }) => {

  return (
    <div className="categories">
      <ul>
        {
          categories.map((categoryName, i) => (
            <li key={i} onClick={() => onClickCategory(i)}
              className={value === i ? 'active' : ''} >
              {i===0 ? 'all' : categoryName}
            </li>
          ))
        }
      </ul>
    </div>
  );
}

export default Status;