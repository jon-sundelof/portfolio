import { useEffect, useState, useRef, useCallback } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { useWindowSize } from '../src/hooks/useWindowSize';
import debounce from 'lodash/debounce';

import styles from '../styles/Home.module.scss';

import About from '../src/components/about/About';
import LandingPage from '../src/components/landing_page/LandingPage';
import Navbar from '../src/components/navbar/Navbar';
import NameWheel from '../src/svgs/NameWheel';
import Work from '../src/components/work/Work';
import Contact from '../src/components/contact/Contact';
// import { useCallback } from 'react/cjs/react.production.min';

export default function Home() {
  const [mainX, setMainX] = useState(0);
  // const [wheelSpin, setS] = useState(0);
  const windowSize = useWindowSize();
  const xRef = useRef(null);
  const wheelRef = useRef(null);

  xRef.current = mainX;

  useEffect(() => {
    window.addEventListener('wheel', (e) => {
      let valueScroll = e.deltaY;

      /* 
      if (valueScroll < 0) {
        setMainX((prevMain) => (prevMain += -window.innerWidth));
      }

      if (xRef.current + valueScroll < (-window.innerWidth / 0.3) * 3) {
        setMainX((-window.innerWidth / 0.3) * 3);
        return;
      }

      if (xRef.current + valueScroll > 0) {
        setMainX(0);
        return;
      }
      setMainX((prevMain) => (prevMain += valueScroll)); */
    });
  }, []);

  const nextPage = (e) => {
    let valueScroll = e.deltaY;

    if (valueScroll < 0 && xRef.current !== -window.innerWidth * 3) {
      setMainX((prevMain) => (prevMain += -window.innerWidth));
    } else if (valueScroll > 0 && xRef.current !== 0) {
      setMainX((prevMain) => (prevMain += window.innerWidth));
    }
  };

  const handleScrollEv = useCallback(
    debounce((e) => nextPage(e), 250),
    []
  );

  /*   useEffect(() => {
    window.addEventListener('wheel', (e) => {
      let valueScroll = e.deltaY;

      const handleScroll = () => {};

      console.log(e);

            if (valueScroll < 0) {
        setMainX((prevMain) => (prevMain += -window.innerWidth));
      } 

      
      if (xRef.current + valueScroll < (-window.innerWidth / 0.3) * 3) {
        setMainX((-window.innerWidth / 0.3) * 3);
        return;
      }

      if (xRef.current + valueScroll > 0) {
        setMainX(0);
        return;
      }
      setMainX((prevMain) => (prevMain += valueScroll));
    });

    return () => {
    };
  }, []); */

  function handleLinkClick(e) {
    let id = e.target.closest('li').id;
    switch (id) {
      case 'name':
        setMainX(0);
        console.log('here');
        break;
      case 'about':
        setMainX(-window.innerWidth);
        console.log('not here');
        break;
      case 'work':
        setMainX(-window.innerWidth * 2);
        break;
      case 'contact':
        setMainX(-window.innerWidth * 3);
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
      {/*    <motion.div
        className='wheel-container'
        animate={{ rotate: -mainX }}
        transition={{ duration: 1 }}
      >
        <NameWheel ref={wheelRef} />
      </motion.div> */}

      <NameWheel xOffSet={mainX} />
      <motion.main
        // animate={{ x: mainX * 1 }}
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
