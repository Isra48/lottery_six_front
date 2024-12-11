import  { useRef } from 'react';
import * as XLSX from 'xlsx'; // Importar SheetJS
import './winners.css'
import Card from '../components/card'
import { winners } from '../mocks/winners.mock'

const Winners = () => {
    
    const listRef = useRef<HTMLDivElement>(null); // Referencia al contenedor con scroll

    const scrollToTop = () => {
        if (listRef.current) {
            listRef.current.scrollTo({ top: 0, behavior: 'smooth' }); // Desplazar suavemente al inicio
        }
    };

    const exportToExcel = () => {
        // Convertir la lista de ganadores a un formato compatible con Excel
        const data = winners.map((winner, index) => ({
            Índice: index + 1,
            Nombre: winner.name,
            "ID de Socio": winner.socioId,
        }));

        // Crear un libro de trabajo (workbook) y una hoja (sheet)
        const worksheet = XLSX.utils.json_to_sheet(data);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, "Ganadores");

        // Generar y descargar el archivo
        XLSX.writeFile(workbook, "Lista_de_Ganadores.xlsx");
    };




    return (
        <>
         <a id="top"></a> {/* Ancla para el inicio */}
            <h1 style={{ textAlign: 'center', color: '#f2f2f2', marginTop: '1em' }}>Lista de ganadores</h1>
            <div className='container_father'>




                <div className='list_container' >

                    <ol className="olcards">

                        {
                            winners.map((winner, index) => {
                                return <Card ind={index + 1} name={winner.name} userId={winner.socioId} />
                            })
                        }




                    </ol>

                </div>
                <div className='btn_container' >
                    <h2>Descargar lista en formato xlsx</h2>

                    <button className="button-37" role="button" onClick={exportToExcel}>Descargar</button>


                </div>



            </div>
            <a href="#top" className="back-to-top" onClick={scrollToTop}>Volver al inicio</a> {/* Enlace para regresar al inicio */}
        </>
    )
}

export default Winners