import React from 'react'
import {Link} from 'react-router-dom'
import { useFetch } from '../hooks/useFetch'
import style from '../pages/Home.module.css'
const Home = () => {
  const url = 'http://localhost:3000/produtos'
  const {data, loading, error} = useFetch(url)
  return (
    <div>
        <h1 className={style.produtos_titulo}>Produtos</h1>
        {error && <p>{error}</p>}
        {loading && <p>Carregando...</p>}
        <ul className={style.produtos}>
        {!loading && data && data.map((produto, index) => (
          <li key={index}>
            <h2>Nome: {produto.nome}</h2>
            <p>descrição: {produto.descricao}</p>
            <Link to={`/produtos/${produto.id}`}>Editar</Link>
          </li>
        ))}
        </ul>
    </div>
  )
}

export default Home