import Paciente from './Paciente'

function ListadoPacientes({pacientes,setPaciente,eliminarPaciente}) {

  return (
    <div className='md:w-1/2 lg:w-3/5'>
      <h2 className='font-bold text-2xl md:text-3xl text-center p-2'>Listado Pacientes</h2>
      <p className="text-lg p-4 text-center font-bold">
        Administra tus <span className='text-blue-500'>Pacientes y Citas</span>
      </p>
      {pacientes && pacientes.length ?(
         <div className='overflow-scroll md:h-screen'>
         {pacientes.map((paciente)=>(
           <Paciente
             key={paciente.id}
             paciente={paciente}
             setPaciente={setPaciente}
             eliminarPaciente={eliminarPaciente}
             />
         ))}
       </div>
        
      ):(
        <div className='bg-white shadow-lg rounded-md px-4 py-2 mr-6 mt-3 mx-5'>
          <p className="block uppercase font-bold mb-1 text-center text-gray-500">Aún no hay pacientes</p>
        </div>
      )}
     
      
    </div>
  )
}

export default ListadoPacientes
