import React from 'react';

import styles from './About.module.scss';

const About = () => {
  return (
    <div className={styles.about}>
      <section>
        <h2>FRONT-END DEVELOPER</h2>
        <h1>Jon Sundelöf</h1>

        <div>
          <h3>BIO</h3>
          <article>
            <p>
              As you probably figured out by now, I&apos;m Jon. I&apos;m a
              Front-end developer currently studying at KYH in Stockholm.
            </p>
            <p>
              For as long as i can remeber I have had a huge interest for games,
              software and all kinds of tech and hardware. As a young kid i used
              to build computers, play video games and engage with diffrent
              softwares. In other words I always experimented or explored any
              kind of hardware or software.
            </p>
            <p>
              Later on in life this interest became accompanied with a love and
              fascination for art and design in all it&apos;s shapes.
            </p>
            <p>
              Therefore the career choice to become a Front-end developer felt
              like the obvious decison. Today I can&apos;t imagine a better
              alternative since I&apos;m loving every secound of my work.
            </p>
          </article>
        </div>
      </section>
    </div>
  );
};

export default About;
