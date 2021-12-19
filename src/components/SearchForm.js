import { useState } from 'react'
import style from '../css/main.module.scss'

export default function SearchForm (props) {
  const [query, setQuery ] = useState({ value: ''})
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)

  // useEffect(() => {
  //   console.log('UseEfect sin dependencias')
  // }, [])

  async function handleSubmit(e) {
    e.preventDefault();

    if (!query.value) {
      setError(true)
      return
    }

    setLoading(true)
    let response = null
    try {
      response = await fetch(`https://geo.ipify.org/api/v2/country?apiKey=at_NTVsG6OnhirJ96KWFQdoQvxf5ExHB&ipAddress=${query.value}`)
    } catch (e) {
      console.log(e)
      setLoading(false)
      return
    }

    setLoading(false)
    if (!response.ok) {
      const message = `Ha ocurrido un error: ${response.status}`
      throw new Error(message)
    }

    const data = await response.json()
    props.handleSearch(data)
  }

  function handleChange(e) {
    setError(false)
    setQuery({value: e.target.value})
  }

  return (
    <div>
      <div className={ style.form }>
        <input
          autoComplete='off' 
          value={ query.value }
          placeholder='IP Address'
          className={ style.form__input } name="search"
          onChange={ handleChange }
        />
        <button 
          className={ style.form__btn} 
          onClick={ handleSubmit }
        >
        </button>
      </div>
      {error &&
        <span className={ style.form__error }>
          Este campo es requerido
        </span>
      }

      {loading &&
        <span className={ style.form__loading }>
          Cargando...
        </span>
      }
    </div>
  )
}

