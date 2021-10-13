import React, { useEffect, useState } from "react";
import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchSpeciesItem } from "../../redux/Species/actionCreator";
import RenderSpeciesItems from "./RenderSpeciesItems";
import { speciesLoadMore, setSpecies } from "../../saga/Species/action";


const Species = () => {

    const [isShowMore, setIsShowMore] = useState(false)
    const species = useSelector((state) => state?.species?.species)
    const nextPage = useSelector((state) => state?.species?.nextPage)
    const searchedSpecies = useSelector((state) => state.species.searchedSpecies)
    const isSearch = useSelector((state) => state.species.isSearch)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setSpecies())
    }, [])

    const loadMore = () => {
        dispatch(speciesLoadMore())
    }

    return (
        <div style={{ color: "#bce007", fontSize: "20px" }}>
            {
                isSearch ?
                    searchedSpecies.map((item) => <div className="Species">
                        <p style={{ color: "#01082e" }}>Name: {item.name}</p>
                        <>
                            {isShowMore
                                ? <>
                                    <p>Classification: {item.classification}</p>
                                    <p>Designation: {item.designation}</p>
                                    <p>Average height period: {item.average_height}</p>
                                    <p>Skin colors: {item.skin_colors}</p>
                                    <p>Hair colors: {item.hair_colors}</p>
                                    <p>Eye colors: {item.eye_colors}</p>
                                    <p>Average lifespan: {item.average_lifespan}</p>
                                    <p>Homeworld: {item.homeworld}</p>
                                    <p>Language: {item.language}</p>
                                    <p>People: {item.people}</p>
                                    <p>Films: {item.films}</p>
                                    <p>Created: {item.created}</p>
                                    <p>Edited: {item.edited}</p>
                                    <button className="coolBeans" onClick={() => setIsShowMore(false)}>Show Less</button>
                                </>
                                : <button className="coolBeans" onClick={() => setIsShowMore(true)}>Show More</button>}
                        </>
                    </div>)
                    : species.map((el) => <RenderSpeciesItems key={el.name} item={el} />)}
            <div className="test"> {
                !isSearch ?
                    <> <button className="coolBeans" disabled={!nextPage} onClick={loadMore}>Load More</button></> :
                    null}
                <input className="Input" placeholder="Name of the specie"
                    onChange={(e) => dispatch(searchSpeciesItem(e.target.value))} >
                </input>
            </div>
        </div>
    )
}

export default Species;