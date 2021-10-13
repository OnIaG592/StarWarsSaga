import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { searchItem } from "../../redux/Planets/actionCreator";
import { planetsLoadMore, setPlanets } from "../../saga/Planets/action";
import RenderPlanetsItems from "./RenderPlanetsItems";


const Planets = () => {

    const [isShowMore, setIsShowMore] = useState(false)
    const planets = useSelector((state) => state?.planets?.planets)
    const nextPage = useSelector((state) => state?.planets?.nextPage)
    const searchedPlanet = useSelector((state) => state.planets.searchedPlanet)
    const isSearch = useSelector((state) => state.planets.isSearch)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setPlanets())
    }, [])

    const loadMore = () => {
        dispatch(planetsLoadMore())
    }

    return (
        <div style={{ color: "#e88413", fontSize: "20px" }}>
            {
                isSearch ?
                    searchedPlanet.map((item) => <div className="Planets">
                        <p style={{ color: "#eb0909" }}>Name: {item.name}</p>
                        <>
                            {isShowMore
                                ? <>
                                    <p>Created: {item.created}</p>
                                    <p>Rotation period: {item.rotation_period}</p>
                                    <p>Orbital period: {item.orbital_period}</p>
                                    <p>Diameter: {item.diameter}</p>
                                    <p>Climate: {item.climate}</p>
                                    <p>Gravity: {item.gravity}</p>
                                    <p>Terrain: {item.terrain}</p>
                                    <p>Population: {item.population}</p>
                                    <p>Residents: {item.residents.map(i => i + '\n')}</p>
                                    <p>Films: {item.films}</p>
                                    <p>Edited: {item.edited}</p>
                                    <button className="coolBeans" onClick={() => setIsShowMore(false)}>Show Less</button>
                                </>
                                : <button className="coolBeans" onClick={() => setIsShowMore(true)}>Show More</button>}
                        </>
                    </div>)
                    : planets.map((el) => <RenderPlanetsItems key={el.name} item={el} />)}
            <div className="test"> {
                !isSearch?
               <> <button className="coolBeans" disabled={!nextPage} onClick={loadMore}>Load More</button></>:
               null}
                <input className="Input" placeholder="Name of the planet"
                    onChange={(e) => dispatch(searchItem(e.target.value))} >
                </input>
            </div>
        </div>

    )
}

export default Planets;