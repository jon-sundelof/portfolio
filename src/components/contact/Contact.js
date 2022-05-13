import React from 'react';
import { motion } from 'framer-motion';

import styles from './Contact.module.scss';

const Contact = () => {
  return (
    <div className={styles.contact}>
      <h1>jon@sundelof.se</h1>

      <h1>+46 70 972 81 11</h1>

      <img src='/statue.png' alt='Statue' />
    </div>
  );
};

export default Contact;
