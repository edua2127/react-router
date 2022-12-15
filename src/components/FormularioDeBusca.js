import { Link, redirect, useNavigate } from 'react-router-dom'
import { useState } from 'react'
const FormularioDeBusca = () => {
    const navigate = useNavigate();
    const [query, setQuery] = useState('');
    
   
  return (
    <form>
        <input type="text" value={query} onChange={(e)=> setQuery(e.target.value)} placeholder={'pesquise o produto desejado'}/>
        <input type="submit" value="Pesquisar" onClick={()=>  redirect('/search')}/>
    </form>
  )
}

export default FormularioDeBusca