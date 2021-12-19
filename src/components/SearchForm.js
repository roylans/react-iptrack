import { useState } from 'react'
import style from '../css/main.module.scss'

import fetchData from '../services/fetchData'

export default function SearchForm (props) {
  const [query, setQuery ] = useState({ value: ''})
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault();

    if (!query.value) {
      setError(true)
      return
    }

    let response = []
    setLoading(true)
    try {
      response = await fetchData(query)
    } catch (e) {
      console.log(e)
      return
    } finally {
      setLoading(false)
    }

    props.handleSearch(response)
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

