import React from 'react'
import { useParams } from 'react-router-dom'

import { useFetch } from '../hooks/useFetch'
const Info = () => {

    const {id} = useParams()
    const url = 'http://localhost:3000/produtos/' + id
    const {data: produto} = useFetch(url)
    console.log(`id do produto: ${id}`)
  return (
    <div> 
        <h1>Mais informações sobre o produto: {id}</h1>
        {produto && <p>{produto.nome}</p>}
    </div>
  )
}

export default Info