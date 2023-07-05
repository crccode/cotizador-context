import { useState, createContext } from 'react'
const CotizadorContext = createContext()

import { obtenerDiferenciaYear, calcularMarca, calcularPlan, formatearDinero } from '../helpers'

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

    //resultado
    const [resultado, setResultado] = useState(0)
    // ALGORITMO COTIZADOR 
    const cotizarSeguro = () => {
        // Una base 
        let resultado = 2000

        // Obtener diferencia de años
        const diferencia = obtenerDiferenciaYear(datos.year)

        // Hay que restar el 3% por cada año
        resultado -= ((diferencia * 3) * resultado) / 100

        // Europeo 30%
        // Americano 15%
        // Asiatico 5%
        resultado *= calcularMarca(datos.marca)

        // Básico 20%
        // Completo 50%
        resultado *= calcularPlan(datos.plan)

        // Formatear Dinero
        resultado = formatearDinero(resultado)

        setCargando(true)

        setTimeout(() => {
            setResultado(resultado)
            setCargando(false)
        }, 3000);
    }
    
    return (
        <CotizadorContext.Provider 
            value={{
                // AQUI COLOCAS TODOS A LO QUE PUEDEN ACCEDER LOS OTROS COMPONENTES DE LA APP 
                datos,
                handleChangeDatos,
                error,
                setError,
                cotizarSeguro
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