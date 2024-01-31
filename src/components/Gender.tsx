interface Gender {
  value: number
  onClickGender:  (idx: number) => void;
  gender: String[]

}

const Gender: React.FC<Gender> = ({ value, onClickGender, gender }) => {

  return (
    <div className="categories">
      <ul>
        {
          gender.map((categoryName, i) => (
            <li key={i} onClick={() => onClickGender(i)}
              className={value === i ? 'active' : ''} >
              {i === 0 ? 'all' : categoryName}
            </li>
          ))
        }
      </ul>
    </div>
  );
}

export default Gender;