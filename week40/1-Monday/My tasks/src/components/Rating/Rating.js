import './Rating.css';

const Rating = (props) => {
  const numRating = Math.ceil(props.stars);

  const rating = () => {
    switch (numRating) {
      case 5:
        return '★★★★★';
      case 4:
        return '★★★★☆';
      case 3:
        return '★★★☆☆';
      case 2:
        return '★★☆☆☆';
      case 1:
        return '★☆☆☆☆';
      default:
        return '☆☆☆☆☆';
    }
  };


  return (
    <div className='Rating-container'>
      <div> {rating()}</div>
    </div>
  );
};

export default Rating;
