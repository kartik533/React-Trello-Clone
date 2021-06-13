import React from 'react';
import styles from './home.module.scss';

const Home = () => {
    console.log('Home Page')

    return (
        <div className={styles.home}>
            <div className={styles.modal}>
                I am a Modal!
            </div>
        </div>
    );
}

export default Home;