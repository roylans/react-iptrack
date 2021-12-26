import SearchFrom from './SearchForm'
import style from '../css/main.module.scss'
import Loading from './Loading';
import { useState } from 'react';

function Header(props) {
  const [loading, setLoading] = useState(false)

  const handleSearch = (response) => {
    props.handleSearch(response)
  }

  const handleLoading = (response) => {
    setLoading(response)
  }

  return (
    <div className={ style.header }>
      {loading &&
        <Loading/>
      }
      <header className={ style.header__form}>
        <h1 className={ style.header__title }>IP Address Tracker</h1>
        <SearchFrom 
          handleSearch={handleSearch} 
          handleLoading={handleLoading}
        />
      </header>
    </div>
  );
  }
  
export default Header;
  