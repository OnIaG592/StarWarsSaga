import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import RenderFilmsItems from "./RenderFilmsItems"
import { searchFilmsItem, searchItem } from "../../redux/Films/actionCreator";
import { filmsLoadMore, setFilms } from "../../saga/Films/action";

const Films = () => {

    const [isShowMore, setIsShowMore] = useState(false)
    const films = useSelector((state) => state?.films?.films)
    const nextPage = useSelector((state) => state?.films?.nextPage)
    const searchedFilm = useSelector((state) => state?.films?.searchedFilm)
    const isSearch = useSelector((state) => state?.films?.isSearch)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setFilms())
    }, [])

    const loadMore = () => {
        dispatch(filmsLoadMore())
    }


    return (
        <div style={{ color: "#d9d921", fontSize: "20px" }}>
            {
                isSearch ?
                searchedFilm.map((item) => <div className="Films">
                    <p style={{ color: "#14e34b" }}>Title:{item.title}</p>
                <>
                    {isShowMore
                        ? <>
                            <p>Episode Id: {item.episode_id}</p>
                            <p>Opening crawl: {item.opening_crawl}</p>
                            <p>Director: {item.director}</p>
                            <p>Producer: {item.producer}</p>
                            <p>Release date: {item.release_date}</p>
                            <p>Characters: {item.characters.map(i => i + '\n')}</p>
                            <p>Planets: {item.planets.map(i => i + '\n')}</p>
                            <p>Starships: {item.starships.map(i => i + '\n')}</p>
                            <p>Vehicles: {item.vehicles.map(i => i + '\n')}</p>
                            <p>Species: {item.species.map(i => i + '\n')}</p>
                            <p>Created: {item.created}</p>
                            <p>Edited: {item.edited}</p>
                            <button className="coolBeans" onClick={() => setIsShowMore(false)}>Show Less</button>
                        </>
                        : <button className="coolBeans" onClick={() => setIsShowMore(true)}>Show More</button>}
                </>
            </div>)
                    : films.map((el) => <RenderFilmsItems key={el.name} item={el} />)}
            <div className="test"> {
                !isSearch ?
                    <> <button className="coolBeans" disabled={!nextPage} onClick={loadMore}>Load More</button></> :
                    null}
                <input className="Input" placeholder="Name of the film"
                    onChange={(e) => dispatch(searchFilmsItem(e.target.value))} >
                </input>
            </div>
        </div>
    )
}

export default Films;