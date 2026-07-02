const CATEGORIES = ["전체", "전자기기", "도서", "문구류"];

function CategoryFilter({ selected, onSelect }) {
  return (
    <div className="category-filter">
      {CATEGORIES.map((category) => (
        <button
          key={category}
          className={selected === category ? "active" : ""}
          onClick={() => onSelect(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;
