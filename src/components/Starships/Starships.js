import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import RenderStarshipsItems from "./RenderStarshipsItems";
import { searchStarShipItem } from "../../redux/Starships/actionCreator";
import { starShipsLoadMore, setStarShips } from "../../saga/Starships/action";


const Starships = () => {

    const [isShowMore, setIsShowMore] = useState(false)
    const starShips = useSelector((state) => state?.starShips?.starShips)
    const nextPage = useSelector((state) => state?.starShips?.nextPage)
    const searchedStarship = useSelector((state) => state.starShips.searchedStarship)
    const isSearch = useSelector((state) => state.starShips.isSearch)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(setStarShips())
    }, [])

    const loadMore = () => {
        dispatch(starShipsLoadMore())
    }
    return (
        <div style={{ color: "#ba1e47", fontSize: "20px" }}>
            {
                isSearch ?
                    searchedStarship.map((item) => <div className="Startships">
                        <p style={{ color: "whitesmoke" }}>Name: {item.name}</p>
                        <>
                            {isShowMore
                                ? <>
                                    <p>Model: {item.model}</p>
                                    <p>Manufacturer: {item.manufacturer}</p>
                                    <p>Cost in credits: {item.cost_in_credits}</p>
                                    <p>Length: {item.length}</p>
                                    <p>Max atmosphering speed: {item.max_atmosphering_speed}</p>
                                    <p>Crew: {item.crew}</p>
                                    <p>Passengers: {item.passengers}</p>
                                    <p>Cargo capacity: {item.cargo_capacity}</p>
                                    <p>Consumables: {item.consumables}</p>
                                    <p>Hyperdrive rating: {item.hyperdrive_rating}</p>
                                    <p>MGLT: {item.MGLT}</p>
                                    <p>Starship class: {item.starship_class}</p>
                                    <p>Pilots: {item.pilots}</p>
                                    <p>Films: {item.films}</p>
                                    <p>Created: {item.created}</p>
                                    <p>Edited: {item.edited}</p>
                                    <button className="coolBeans" onClick={() => setIsShowMore(false)}>Show Less</button>
                                </>
                                : <button className="coolBeans" onClick={() => setIsShowMore(true)}>Show More</button>}
                        </>
                    </div>)
                    : starShips.map((el) => <RenderStarshipsItems key={el.name} item={el} />)}
            <div className="test"> {
                !isSearch ?
                    <> <button className="coolBeans" disabled={!nextPage} onClick={loadMore}>Load More</button></> :
                    null}
                <input className="Input" placeholder="Name of the starship"
                    onChange={(e) => dispatch(searchStarShipItem(e.target.value))} >
                </input>
            </div>
        </div>
    )
}

export default Starships;