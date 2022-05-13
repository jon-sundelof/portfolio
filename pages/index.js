/* Libs, hooks, functions etc */
import { useEffect, useState, useRef, useCallback } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { useWindowSize } from '../src/hooks/useWindowSize';
import debounce from 'lodash/debounce';

/* Styles AKA SCSS */
import styles from '../styles/Home.module.scss';

/* Pages components */
import About from '../src/components/about/About';
import LandingPage from '../src/components/landing_page/LandingPage';
import Navbar from '../src/components/navbar/Navbar';
import Work from '../src/components/work/Work';
import Contact from '../src/components/contact/Contact';

/* Wheel with name for diffrent sizes */
import WheelSm from '../src/svgs/WheelSm';
import WheelMd from '../src/svgs/WheelMd';

export default function Home() {
  const [mainX, setMainX] = useState(0);
  const [wheelSpin, setWheelSpin] = useState(0);
  const windowSize = useWindowSize();
  const xRef = useRef(null);

  xRef.current = mainX;

  useEffect(() => {
    function resetScreenPosition() {
      setMainX(0);
    }

    window.addEventListener('resize', resetScreenPosition);

    return () => window.removeEventListener('resize', resetScreenPosition);
  }, []);

  const nextPage = (e) => {
    let valueScroll = e.deltaY;

    if (valueScroll < 0 && xRef.current !== -window.innerWidth * 3) {
      setMainX((prevMain) => (prevMain += -window.innerWidth));
      setWheelSpin((prevSpin) => prevSpin + 360);
    } else if (valueScroll > 0 && xRef.current !== 0) {
      setMainX((prevMain) => (prevMain += window.innerWidth));
      setWheelSpin((prevSpin) => prevSpin - 360);
    }
  };

  const handleScrollEv = useCallback(
    debounce((e) => nextPage(e), 250),
    []
  );

  function handleLinkClick(e) {
    let id = e.target.closest('li').id;

    switch (id) {
      case 'name':
        if (xRef.current === 0) return;
        setMainX(0);
        setWheelSpin((prevSpin) => prevSpin - 360);
        break;
      case 'about':
        if (xRef.current === -window.innerWidth) return;
        if (xRef.current < -window.innerWidth) {
          setWheelSpin((prevSpin) => prevSpin - 360);
        } else {
          setWheelSpin((prevSpin) => prevSpin + 360);
        }
        setMainX(-window.innerWidth);
        break;
      case 'work':
        if (xRef.current === -window.innerWidth * 2) return;

        setMainX(-window.innerWidth * 2);
        if (xRef.current < -window.innerWidth) {
          setWheelSpin((prevSpin) => prevSpin - 360);
        } else {
          setWheelSpin((prevSpin) => prevSpin + 360);
        }
        break;
      case 'contact':
        if (xRef.current === -window.innerWidth * 3) return;

        setMainX(-window.innerWidth * 3);
        setWheelSpin((prevSpin) => prevSpin + 360);
        break;
      default:
        break;
    }
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Jon Sundelöf</title>
        <meta name='description' content='Jon Sundelöf - Portfolio' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Navbar
        windowSize={windowSize}
        xOffset={xRef}
        handleLinkClick={handleLinkClick}
      />

      {windowSize.width > 1375 && windowSize.height > 800 ? (
        <WheelMd
          xOffSet={xRef}
          xOffsetRef={xRef}
          windowSize={windowSize}
          wheelSpin={wheelSpin}
        />
      ) : (
        <WheelSm
          xOffSet={xRef}
          xOffsetRef={xRef}
          windowSize={windowSize}
          wheelSpin={wheelSpin}
        />
      )}

      <motion.main
        animate={{ x: mainX }}
        transition={{ duration: 1 }}
        className={styles.main}
        onWheel={handleScrollEv}
      >
        <LandingPage />
        <About />
        <Work />
        <Contact />
      </motion.main>
    </div>
  );
}
