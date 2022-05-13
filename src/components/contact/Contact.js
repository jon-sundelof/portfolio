import React from 'react';
// import Image from 'next/image';
import { motion } from 'framer-motion';

import styles from './Contact.module.scss';

const Contact = () => {
  return (
    <div className={styles.contact}>
      <h1>jon@sundelof.se</h1>

      <h1>+46 70 972 81 11</h1>
      {/* </motion.span> */}

      {/*  <div>
             <Image
          loader={'tesing loader'}
          src='/statue.png'
          layout='responsive'
          width={1080}
          height={1920}
          alt='Statue'
        />
      </div> */}
      <img src='/statue.png' alt='Statue' />
    </div>
  );
};

export default Contact;
