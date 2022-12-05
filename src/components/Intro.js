import Stars from '../images/Stars.png'

function intro() {
  return (
    <div className='intro-container'>
      <div className='img-container'>
        <img src={Stars} alt='Field of stars' />
      </div>
      <div className='title'>
        <h1>ASTROMENTALS</h1>
      </div>
    </div>
  );
};

export default intro;