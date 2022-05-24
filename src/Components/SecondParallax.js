import { Parallax } from 'react-parallax';
import ParallaxTwo from '../ParallaxImg/ParallaxTwo.jpg';
import '../styles/Parallax.css';

const SecondParallax = () => (
  <Parallax className="image top-space " bgImage={ParallaxTwo} strength={800}>
    <div className="content">
      <span className="img-text">gowell shop</span>
    </div>
  </Parallax>
);

export default SecondParallax;
