import '../styles/global.scss'

import { Player } from '../components/Player';
import { Header } from '../components/Header'

import styles from '../styles/app.module.scss';
import { PlayerContextProvide } from '../contexts/PlayerContext';


function MyApp({ Component, pageProps }) {

  return (
    <PlayerContextProvide>
    <div className={styles.wrapper}>
      <main>
        <Header />
        <Component {...pageProps} />
      </main>
      <Player></Player>
    </div>
    </PlayerContextProvide>

  )
}

export default MyApp
