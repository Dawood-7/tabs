const BtnContainer = ({ data, currentItem, setCurrentItem}) => {
    console.log(data);
    
  return (
    <div className="btn-container">
      {data.map((item, index) => {
        return (
          <button
            key={item.id}
            onClick={() => setCurrentItem(index)}
            className={`job-btn ${index === currentItem && "active-btn"}`}
          >
            {item.company}
          </button>
        );
      })}
    </div>
  );
}
export default BtnContainer