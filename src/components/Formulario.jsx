import { useState,useEffect } from "react";
import Error from "./Error";

function Formulario({pacientes,setPacientes,paciente,setPaciente}) {
  const [nombre,setNombre]=useState(""),
        [prop,setProp]=useState(""), 
        [email,setEmail]=useState(""),
        [fecha,setFecha]=useState(""),
        [sintomas,setSintomas]=useState("")
  const [error,setError]=useState(false)
  
  const generarId= ()=>{
        const random = Math.random().toString(36).substring(2)
        const fecha = Date.now().toString(36)
        return random+fecha
  }
  const handleSubmit=(e)=>{
        e.preventDefault()

        //Validación de formulario
        if ([nombre,prop,email,fecha,sintomas].includes("")){
          setError(true)
          return
        } 
        setError(false)

        //Objeto de Paciente
        const objetoPacientes={
          nombre,
          prop,
          email,
          fecha,
          sintomas, 
          
        }
        setPacientes([...pacientes, objetoPacientes])
        
        if(paciente.id){
          //Editando el Registro
          objetoPacientes.id=paciente.id
          const pacientesActualizados = pacientes.map(pacienteState => pacienteState.id === paciente.id? objetoPacientes:pacienteState)
          setPacientes(pacientesActualizados)
          setPaciente({})
        }else{
          objetoPacientes.id=generarId()
          setPacientes([...pacientes,objetoPacientes])
        }

        //Reiniciar Formulario
        setNombre("")
        setProp("")
        setEmail("")
        setFecha("")
        setSintomas("")
  }
  
  useEffect(()=>{
    if (Object.keys(paciente).length>0){
      setNombre(paciente.nombre)
      setProp(paciente.prop)
      setEmail(paciente.email)
      setFecha(paciente.fecha)
      setSintomas(paciente.sintomas)
      

    }
  },[paciente])
  

  return (
    <div className="md:w-1/2 lg:w-2/5">
      <h2 className="font-bold text-2xl md:text-3xl text-center p-2">
        Seguimiento de pacientes
      </h2>
      <p className="text-lg p-4 text-center font-bold">
        Añade pacientes y <span className=" text-blue-500">Administralos</span>
      </p>

      <form className="bg-white shadow-lg rounded-md px-4 mr-8 py-2" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="mascota" className="block uppercase font-bold mb-1 text-center text-gray-500">
            Nombre Mascota
          </label>
          <input 
          id="mascota" type="text" 
          placeholder="Nombre de la mascota" 
          className="text-center text-gray border-2 w-full my-3"
          value={nombre}
          onChange={(e)=>setNombre(e.target.value)}/>
        </div>
        <div>
          <label htmlFor="prop" className="block uppercase font-bold mb-1 text-center text-gray-500">
            Nombre del Dueño
          </label>
          <input 
          id="prop" type="text" 
          placeholder="Nombre del Dueño" 
          className="text-center text-gray border-2 w-full my-3"
          value={prop}
          onChange={(e)=>setProp(e.target.value)}/>
        </div>
        <div>
          <label htmlFor="email" className="block uppercase font-bold mb-1 text-center text-gray-500">
            Email
          </label>
          <input 
          id="email" type="email" 
          placeholder="Email" 
          className="text-center text-gray border-2 w-full my-3"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}/>
        </div>
        <div>
          <label htmlFor="alta" className="block uppercase font-bold mb-1 text-center text-gray-500">
            Alta 
          </label>
          <input 
          id="alta" type="date"  
          className="text-center text-gray border-2 w-full my-3"
          value={fecha}
          onChange={(e)=>setFecha(e.target.value)}/>
        </div>
        <div>
          <label htmlFor="sintomas" className="block uppercase font-bold mb-1 text-center text-gray-500">
            Sintomas
          </label>
          <textarea 
            id="sintomas"
            className="text-center text-gray border-2 w-full my-3"
            placeholder="Describe los Sintomas"
            value={sintomas}
            onChange={(e)=>setSintomas(e.target.value)}
          />
          {error && <Error mensaje="Todos los campos son necesarios"/>}
          <input 
            type="submit" 
            className="bg-indigo-500 rounded-sm w-full p-3 text-white uppercase font-bold hover:bg-indigo-400 cursor-pointer transition-colors"
            value={paciente.id?"Editar Paciente":"Agregar Paciente"}
          />
        </div>
      </form>
    </div>
  )
}

export default Formulario
