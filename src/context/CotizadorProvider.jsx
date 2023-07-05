import { useState, createContext } from 'react'
const CotizadorContext = createContext()

const CotizadorProvider = ({children}) => {
    //AQUIPUEDES DEFINIR STATE, FUNCIONES PROPIAS 

    // EL FORMULARIO ACTUALIZARA ESTAS 3 VARIABLES
    const [datos, setDatos] = useState({
        marca: '',
        year: '',
        plan: ''
    })
    // CREAMOS UNA FUNCION PARA ACTUALIZAR EL STATE EN EL FORMULARIO
    const handleChangeDatos = e => {
        // console.log(e.target.name)
        // console.log(e.target.value)
        // ACTUALIZAREMSO LOS DATOS DE ACUERDO A LO QUE VAYA SELECCIONANDO EL USUARIO
        // Se saca una copia y se remplaza
        // CREAMOS UN OBJETO 
        setDatos({
            ...datos,
            [e.target.name] : e.target.value
        })
    }

    //ERROR DE LA VALIDACION 
    const [error, setError] = useState('')

    return (
        <CotizadorContext.Provider 
            value={{
                // AQUI COLOCAS TODOS A LO QUE PUEDEN ACCEDER LOS OTROS COMPONENTES DE LA APP 
                datos,
                handleChangeDatos,
                error,
                setError
            }}
        >
            {children}
        </CotizadorContext.Provider>

    )
}
export {
    CotizadorProvider
}
export default CotizadorContext