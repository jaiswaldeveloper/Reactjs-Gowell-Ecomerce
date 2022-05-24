import { Parallax } from 'react-parallax';
import ParallaxFirst from '../ParallaxImg/ParallaxFirst.jpg';
import '../styles/Parallax.css';

const FirstParallax = () => (
  <Parallax className="image top-space " bgImage={ParallaxFirst} strength={800}>
    <div className="content">
      <span className="img-text">gowell shop</span>
    </div>
  </Parallax>
);

export default FirstParallax;
