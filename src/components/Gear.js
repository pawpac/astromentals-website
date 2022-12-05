import Tripod from '../images/Tripod.png'
import Frame from '../images/Frame.png'
import Lens from '../images/Lens.png'

function Gear() {
  return (
    <div className='gear'>
      <div className='gear-section tripod'>
        <img src={Tripod} alt='Tripod' />
        <div className='description'>
          <p>
            In the August 2018 issue of BBC Sky at Night Magazine, Pete Lawrence reviews the Sky-Watcher SolarQuest Solar Go-To tracking mount, which incudes a lightweight tripod. A good tripod can be the backbone of a successful observing session, writes Paul Money.
          </p>
        </div>
      </div>
      <div className='gear-section frame'>
        <div className='description'>
          <p>
            For widefield landscape astrophotography, it's hard to beat a full frame camera. The superior low light sensitivity and more robust noise of full frame sensors mean you get cleaner, brighter images.
          </p>
        </div>
        <img src={Frame} alt='Frame' />
      </div>
      <div className='gear-section lens'>
        <img src={Lens} alt='Lens' />
        <div className='description'>
        <p>
          We want a lens with a large aperture that is well-corrected when used wide open, particularly in the  corners of the frame, because long-exposure star fields are one of the most difficult tests for lens aberrations.
        </p>
        </div>
      </div>
    </div>
  );
};

export default Gear;