import { useEffect,useState } from "react"
import { Link, useParams ,useNavigate} from 'react-router-dom'
import { cambiarClaveUsuarios } from "../components/home-page/services/usuarios"



const cambioclave = () =>{
  const { token } = useParams()
  const navigate = useNavigate()

  const [form, setForm] = useState({
 
    password: '',
    password2: '',
 
  })

  let titulo = "Cambio de Clave"


    
 







  const handleChange = (event) => {
    const { name, value } = event.target

    setForm({ ...form, [name]: value })
    console.log(token,form)
    
  }

  const handleSave = async (event) => {
    event.preventDefault();
    console.log(token,form)
    
      const response = await cambiarClaveUsuarios(token,form)
      alert(response.message)

  

                
    


  
  }

  return (
    <div>
    <main className="w-8/12 mx-auto flex justify-center">
      <form
        className="flex flex-col gap-4 w-80"
        onSubmit={handleSave}
      >
    

        <h2 className="text-3xl">{titulo}</h2>



        <input
          type="text"
          name="password"
          placeholder="password"
          className="border px-3 py-2 bg-slate-100"
          onChange={handleChange}
          value={form.password}
        />
                <input
          type="text"
          name="password2"
          placeholder="password2"
          className="border px-3 py-2 bg-slate-100"
          onChange={handleChange}
          value={form.password2}
        />




        <input
          type="submit"
          value="Save"
          className="text-white border px-3 py-2 bg-emerald-400"
        />

        <pre>{/*JSON.stringify(form)*/}La clave debe contener 8 caracteres como minimo </pre>
        
        <pre>que incluya numeros , letras y signos</pre>
      </form>
    </main>
    </div>
  )
}

export default cambioclave