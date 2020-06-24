import React from 'react';
import { ArrowRight } from "@styled-icons/feather/ArrowRight";
import { ArrowLeft } from "@styled-icons/feather/ArrowLeft";



const Pagination = ({ sectionPagination, params, setPage, page, history, variableRuteo }) => {
    const paginar = () => {
        let paginacion = []
        for (let i = 1; i <= sectionPagination.total_pages; i++) {
            paginacion.push(i)
        }
        return paginacion
    }

    const handleClick = (e) => {
        if (variableRuteo === "similars") {
            setPage(Number(e.target.value))
        }
        else if (variableRuteo === "all") {
            setPage(Number(e.target.value))
            history.push(`/${params.media}/category/${params.categoria}/page/${Number(e.target.value)}`)
        }
        else if (variableRuteo === "busqueda") {
            setPage(Number(e.target.value))
            history.push(`/search/${params.busqueda}/page/${Number(e.target.value)}`)
        }
    }

    const handleClickArrowRight = () => {
        setPage(Number(page + 1))
        if (variableRuteo === "similars") {

        }
        else if (variableRuteo === "all") {
            history.push(`/${params.media}/category/${params.categoria}/page/${Number(page + 1)}`)
        }
        else if (variableRuteo === "busqueda") {
            history.push(`/search/${params.busqueda}/page/${page + 1}`)
        }
    }

    const handleClickArrowLeft = () => {
        setPage(Number(page - 1))
        if (variableRuteo === "similars") {
        }
        else if (variableRuteo === "all") {
            history.push(`/${params.media}/category/${params.categoria}/page/${Number(page - 1)}`)
        }
        else if (variableRuteo === "busqueda") {
            history.push(`/search/${params.busqueda}/page/${page - 1}`)
        }
    }

    const paginas = sectionPagination && sectionPagination.total_pages && paginar();

    return (
        <div className="button-section">
            <ArrowLeft onClick={handleClickArrowLeft} className="icon"></ArrowLeft>
            {paginas && paginas.map((pag, i) => {
                if (i < 5) {
                    return (
                        <button key={i} value={pag} onClick={handleClick}>{pag}</button>
                    )
                }
            })}

            {paginas && paginas.length > 5 && <button>...</button>}
            {paginas && paginas.length > 5 && <button onClick={handleClick} value={paginas && paginas.length}>{paginas.length}</button>}
            <ArrowRight onClick={handleClickArrowRight} className="icon"></ArrowRight>
        </div>
    )
}

export default Pagination