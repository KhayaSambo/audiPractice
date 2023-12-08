
import { useEffect , useRef } from "react";

const Header = () => {
    const container = useRef<HTMLDivElement>(null);
    const stickyMask = useRef<HTMLDivElement>(null);

    const initialMaskSize = 0.8;
    const targetMaskSize = 10;
    const easing = 0.15;
    let easedScrollProgress = 10;

    useEffect(() => {
      requestAnimationFrame(animate);
    }, []);

    const animate = () => {
      const maskSizeProgress = targetMaskSize * getScrollProgress();
      const maskOpacity = 1 - maskSizeProgress / targetMaskSize;
      if (stickyMask.current !== null) {
        stickyMask.current.style.maskSize = (initialMaskSize + maskSizeProgress) * 100 + "%";
        stickyMask.current.style.opacity = maskOpacity.toString();
      }

      requestAnimationFrame(animate);
    };

  

    const getScrollProgress = () => {
      if (stickyMask.current !== null && container.current !== null) {
        const scrollProgress = stickyMask.current.offsetTop  / (container.current.getBoundingClientRect().height - window.innerHeight);
        const delta = scrollProgress - easedScrollProgress;
        easedScrollProgress += delta * easing;
        return easedScrollProgress;
      }

      return 0;
    }

    return (
      <>
        <main className='main'>
          <div ref={container} className='containerStyle'>
            <div ref={stickyMask} className='sticky'>
            <video autoPlay muted loop>
            <source src="./src/assets/video.mp4" type="video/mp4"/>
          </video>
            </div>
          </div>
        </main>
      </>
    );
  };





export default Header;
