import SearchFrom from './SearchForm'
import style from '../css/main.module.scss'

function Header(props) {
  const handleSearch = (response) => {
    props.handleSearch(response)
  }

  return (
    <div className={ style.header }>
      <header className={ style.header__form}>
        <h1 className={ style.header__title }>IP Address Tracker</h1>
        <SearchFrom handleSearch={handleSearch} />
      </header>
    </div>
  );
  }
  
export default Header;
  