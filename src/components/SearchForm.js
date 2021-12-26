import { useState } from 'react'
import style from '../css/main.module.scss'

import fetchData from '../services/fetchData'

export default function SearchForm (props) {
  const [query, setQuery ] = useState({ value: ''})
  const [error, setError] = useState({ error: false, message: '' })

  function isValidIp(ip) {
    const testReg4 = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/
    const testReg6 = /^([\da-fA-F]{1,4}:){7}[\da-fA-F]{1,4}$/

    return testReg4.test(ip) || testReg6.test(ip)

  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (!query.value) {
      setError({ error: true, message: 'Este campo es requerido'})
      return
    }

    if (!isValidIp(query.value)) {
      setError({ error: true, message: 'No es una dirección IP válida'})      
      return
    }

    let response = []
    props.handleLoading(true)
    try {
      response = await fetchData(query)
    } catch (e) {
      console.log(e)
      return
    } finally {
      props.handleLoading(false)
    }

    // Emit response
    props.handleSearch(response)
  }

  function handleChange(e) {
    setError({ error: false, message: '' })
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
      {error.error &&
        <span className={ style.form__error }>
          { error.message }
        </span>
      }
    </div>
  )
}

