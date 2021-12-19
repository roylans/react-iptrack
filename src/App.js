import { useState } from 'react'

import style from './css/main.module.scss'

import Header from './components/Header'
import Map from './components/Map'

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
        <Map dataIp={dataIP}  />
      </div>
    </div>
  );
}

export default App;
