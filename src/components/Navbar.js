import React from 'react'
import styles from './navbar.module.scss'
import { ReactComponent as Trello } from '../assets/trello.svg'
import { ReactComponent as LinkedIn } from '../assets/linkedIn.svg'

const Navbar = () => (
    <div className={styles.nav}>
        <Trello/>
        <p> Trello Clone</p>
        <a href="https://www.linkedin.com/in/kartik533">
            <LinkedIn/>
        </a>
    </div>
)

export default Navbar
