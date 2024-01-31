interface Pagination {
  value: number
  onClickPage: (idx: number) => void;
}

const Pagination: React.FC<Pagination> = ({ value, onClickPage }) => {
  return (
    <div className='pagination'>
      <button
        type='button'
        className='pagination__btn'
        disabled={value === 1}
        onClick={() => onClickPage(value - 1)}
      >Previous page
      </button>
      <h6 className='pagination__pages'>Pages: {value}</h6>
      <button
        type='button'
        className='pagination__btn'
        disabled={value === 42}
        onClick={() => onClickPage(value + 1)}
      >Next page
      </button>
    </div>
  );
}

export default Pagination;