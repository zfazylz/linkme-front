import React, {useState, useEffect} from "react";
import TinderCard from "react-tinder-card";
// import database from "./firebase";
import "./TinderCards.css";

const TinderCards = () => {
    const [setPeople] = useState([]);

    useEffect(() => {
        // database
        //   .collection("people")
        //   .onSnapshot((snapshot) =>
        //     setPeople(snapshot.docs.map((doc) => doc.data()))
        //   );
    }, []);
    const people = [
        {
            name: "Fazyl",
            url: "https://sun9-69.userapi.com/impf/SrhYsk7cH4w9PKo8TnmtWIs0IaacR4rGPLnvGQ/4wbM1vEu5q0.jpg?size=1620x2160&quality=96&sign=731987e96415b9629c02c602e5c76fee&type=album",
        },
        {
            name: "Sanzhar Shabdarov",
            url: "https://sun9-50.userapi.com/impg/QdeZZ_qO6958ycGBLHuFQp0r0YXwHguoA3gjGA/sIHDW63C9BM.jpg?size=960x1280&quality=96&sign=e4c0708397d3e1ce67f4b499d75a93c8&type=album",
        },
        {
            name: "Fazyl",
            url: "https://sun9-69.userapi.com/impf/SrhYsk7cH4w9PKo8TnmtWIs0IaacR4rGPLnvGQ/4wbM1vEu5q0.jpg?size=1620x2160&quality=96&sign=731987e96415b9629c02c602e5c76fee&type=album",
        },
        {
            name: "Sanzhar Shabdarov",
            url: "https://sun9-50.userapi.com/impg/QdeZZ_qO6958ycGBLHuFQp0r0YXwHguoA3gjGA/sIHDW63C9BM.jpg?size=960x1280&quality=96&sign=e4c0708397d3e1ce67f4b499d75a93c8&type=album",
        },
        {
            name: "Fazyl",
            url: "https://sun9-69.userapi.com/impf/SrhYsk7cH4w9PKo8TnmtWIs0IaacR4rGPLnvGQ/4wbM1vEu5q0.jpg?size=1620x2160&quality=96&sign=731987e96415b9629c02c602e5c76fee&type=album",
        },
        {
            name: "Sanzhar Shabdarov",
            url: "https://sun9-50.userapi.com/impg/QdeZZ_qO6958ycGBLHuFQp0r0YXwHguoA3gjGA/sIHDW63C9BM.jpg?size=960x1280&quality=96&sign=e4c0708397d3e1ce67f4b499d75a93c8&type=album",
        },
    ]
    return (
        <div>
            <div className="tinderCards_cardContainer">
                {people.map((person) => (
                    <TinderCard
                        className="swipe"
                        key={person.name}
                        preventSwipe={["up", "down"]}
                    >
                        <div
                            style={{backgroundImage: `url(${person.url})`}}
                            className="card"
                        >
                            <h3>{person.name}</h3>
                        </div>
                    </TinderCard>
                ))}
            </div>
        </div>
    );
};

export default TinderCards;
