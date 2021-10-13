import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import RenderPeopleItems from "./RenderPeopleItems";
import { searchPeopleItem } from "../../redux/People/actionCreator";
import { peopleLoadMore, setPeople } from "../../saga/People/action";

const People = ({ items }) => {

    const [isShowMore, setIsShowMore] = useState(false)
    const people = useSelector((state) => state?.people?.people)
    const nextPage = useSelector((state) => state?.people?.nextPage)
    const searchedPeople = useSelector((state) => state.people.searchedPeople)
    const isSearch = useSelector((state) => state.people.isSearch)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setPeople())
    }, [])

    const loadMore = () => {
        dispatch(peopleLoadMore())
    }

    return (
        <div style={{ color: "whitesmoke", fontSize: "20px" }}>
            {
                isSearch ?
                    searchedPeople.map((item) => <div className="People">
                        <p style={{ color: "#14e34b" }}>Name: {item.name}</p>
                        <>
                            {isShowMore
                                ? <>
                                    <p>Height: {item.height}</p>
                                    <p>Mass: {item.mass}</p>
                                    <p>Hair Color: {item.hair_color}</p>
                                    <p>Skin Color: {item.skin_color}</p>
                                    <p>Eye Color: {item.eye_color}</p>
                                    <p>Birth Year: {item.birth_year}</p>
                                    <p>Gender: {item.gender}</p>
                                    <p>Homeworld: {item.homeworld}</p>
                                    <p>Films: {item.films.map(i => i + '\n')}</p>
                                    <p>Species: {item.species}</p>
                                    <p>Vehicles: {item.vehicles}</p>
                                    <p>Starships: {item.starships.map(i => i + '\n')}</p>
                                    <p>Created: {item.created}</p>
                                    <p>edited: {item.edited}</p>
                                    <button className="coolBeans" onClick={() => setIsShowMore(false)}>Show Less</button>
                                </>
                                : <button className="coolBeans" onClick={() => setIsShowMore(true)}>Show More</button>}
                        </>
                    </div>)
                    : people.map((el) => <RenderPeopleItems key={el.name} item={el} />)}
            <div className="test"> {
                !isSearch ?
                    <> <button className="coolBeans" disabled={!nextPage} onClick={loadMore}>Load More</button></> :
                    null}
                <input className="Input" placeholder="Name of the character"
                    onChange={(e) => dispatch(searchPeopleItem(e.target.value))} >
                </input>
            </div>
        </div>
    )
}

export default People;