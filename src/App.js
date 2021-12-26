import { useState } from 'react'

import Header from './components/Header'
import Map from './components/Map'
import IpInfo from './components/IpInfo'

import style from './css/main.module.scss'

function App() {
  const [dataIP, setDataIP] = useState()
  
  const handleSearch = (response) => {
    setDataIP(response)
  }

  return (
    <div className={ style.app }>
      <div className={ style.app__header}>
        <Header handleSearch={handleSearch}/>
      </div>
      <div className={ style.app__map }>
        <div className={style.app__ipinfo}>
          <IpInfo dataIp={dataIP}/>
        </div>
        <Map dataIp={dataIP}/>
      </div>
    </div>
  );
}

export default App;
