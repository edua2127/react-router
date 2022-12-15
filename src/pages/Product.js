import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch'
import style from '../pages/Product.module.css'
const Product = () => {
    
  const {id} = useParams()
  const url = 'http://localhost:3000/produtos/' + id

  //passando a url como parametro o produto atual selecionado ja foi colocado em data
  const {data: produto, loading, error} = useFetch(url)
  
  console.log(produto)
  return (  
    <div>
      <section className={style.card_position}>
        {error && <p>Error: {error}</p>}
        {loading && <p>Carregando...</p>}
        {!loading && produto && (
          <article className={style.card_produto}>
            <h2>ID: {produto.id}</h2>
            <p>Nome do Produto: {produto.nome}</p>
            <p>Descrição do Produto: {produto.descricao}</p>
            <Link to={`/produtos/${produto.id}/info`}>Detalhes</Link>
          </article>
        )}
      </section>
    </div>
  )
}

export default Product