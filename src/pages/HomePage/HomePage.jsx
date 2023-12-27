import React  from "react";
import styles from "./HomePage.module.css"
import { useOutletContext } from "react-router";
import Hero from "../../component/Hero/Hero"
import Section from "../../component/Section/Section";

function HomePage(){
    const {data}=useOutletContext();
    const {topAlbums , newAlbums , songs } = data;

    return (
        <>
        <Hero/>
        <div className={styles.wrapper}>
            <Section title="Top Albums" data={topAlbums} type="album" />
            <Section title="New Albums" data={newAlbums} type="album" />
            {/* <Section title="Songs" data={songs} type="song" /> */}
        </div>
        </>
    )
}

export default HomePage;