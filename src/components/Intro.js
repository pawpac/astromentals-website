import Stars from '../images/Stars.png'

function intro() {
  return (
    <div>
      <div className='intro-container'>
        <div className='img-container'>
          <img src={Stars} alt='Field of stars' />
        </div>
        <div className='title'>
          <h1>ASTROMENTALS</h1>
        </div>
      </div>
      <div className='intro'>
        <h3>
        You do not need a telescope (and all the accessories that go with it) to do astrophotography. Actually, it's better to start imaging the night sky with just a DSLR and a tripod rather than complicate your new hobby trying to learn how to use many things at once and then give up. With the right lens and an affordable camera tripod, you absolutely can photograph the Milky Way, as well as some of the most famous objects in space, like the Andromeda Galaxy or the Orion Nebula. Sounds too good to be true? Check out our post about photographing deep sky objects with just a cheap DSLR camera and a tripod to convince.
        </h3>
      </div>
    </div>
  );
};

export default intro;