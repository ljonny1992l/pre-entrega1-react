

import "./ItemListContainer.css"

export const ItemListContainer = ({saludo}) =>{

    return (
        
        <div className="catalogoContenedor">
            <h2>Item List Container</h2>
            <hr />            
            <p className="mensaje">{saludo}</p>
        </div>
    )
}