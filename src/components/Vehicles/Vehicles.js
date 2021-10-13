import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import RenderVehiclesItems from "./RenderVehiclesItems";
import { searchVehiclesItem } from "../../redux/Vehicles/actionCreator";
import { vehiclesLoadMore, setVehicles } from "../../saga/Vehicles/action";


const Vehicles = () => {

    const [isShowMore, setIsShowMore] = useState(false)
    const vehicles = useSelector((state) => state?.vehicles?.vehicles)
    const nextPage = useSelector((state) => state?.vehicles?.nextPage)
    const searchedVehicles = useSelector((state) => state.vehicles.searchedVehicles)
    const isSearch = useSelector((state) => state.vehicles.isSearch)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setVehicles())
    }, [])

    const loadMore = () => {
        dispatch(vehiclesLoadMore())
    }
    return (
        <div style={{ color: "#0b0c12", fontSize: "20px" }}>
            {
                isSearch ?
                    searchedVehicles.map((item) => <div className="Vehichles">
                        <p style={{ color: "red" }}>Name: {item.name}</p>
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
                                    <p>Residents: {item?.residents?.map(i => i + '\n')}</p>
                                    <p>Films: {item.films}</p>
                                    <p>Edited: {item.edited}</p>
                                    <button className="coolBeans" onClick={() => setIsShowMore(false)}>Show Less</button>
                                </>
                                : <button className="coolBeans" onClick={() => setIsShowMore(true)}>Show More</button>}
                        </>
                    </div>)
                    : vehicles.map((el) => <RenderVehiclesItems key={el.name} item={el} />)}
            <div className="test"> {
                !isSearch ?
                    <> <button className="coolBeans" disabled={!nextPage} onClick={loadMore}>Load More</button></> :
                    null}
                <input className="Input" placeholder="Name of the vehicle"
                    onChange={(e) => dispatch(searchVehiclesItem(e.target.value))} >
                </input>
            </div>
        </div>
    )
}

export default Vehicles;