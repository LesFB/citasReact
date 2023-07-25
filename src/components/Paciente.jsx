const Paciente = ({paciente,setPaciente,eliminarPaciente}) => {
  const handleEliminar = ()=>{
    const respuesta = confirm("Deseas eliminar paciente")
    if (respuesta){
      eliminarPaciente(paciente.id)
    }
  }
  return (
    <div>
      
      <div className='bg-white shadow-lg rounded-md px-4 mr-8 py-2 mb-5'>
        <p className='font-bold mb-3 uppercase text-gray-500'>
          Nombre: <span className='font-normal normal-case'>{paciente.nombre}</span>
        </p>
        <p className='font-bold mb-3 uppercase text-gray-500'>
          Propietario: <span className='font-normal normal-case'>{paciente.prop}</span>
        </p>
        <p className='font-bold mb-3 uppercase text-gray-500'>
          Email: <span className='font-normal normal-case'>{paciente.email}</span>
        </p>
        <p className='font-bold mb-3 uppercase text-gray-500'>
          Fecha de Alta: <span className='font-normal normal-case'>{paciente.fecha}</span>
        </p>
        <p className='font-bold mb-3 uppercase text-gray-500'>
          Sintomas <span className='font-normal normal-case'>{paciente.sintomas}</span>
        </p>
        <div className="text-center">
          <button type="button" className="bg-indigo-600 font-semibold py-1 px-3 mx-2 rounded-md hover:bg-indigo-400 text-white text-center" onClick={() =>setPaciente(paciente)} >
            Editar
          </button>
        
          <button type="button" className="bg-red-500 font-semibold py-1 px-3 mx-2 rounded-md hover:bg-red-400 text-white text-center" onClick={handleEliminar}>
            Eliminar
          </button>
        </div>
        
      </div>
    </div>
  )
}

export default Paciente
