// HomePage.jsx
import React from "react";
import styles from "./HomePage.module.css";
import { useOutletContext } from "react-router";
import Hero from "../../component/Hero/Hero";
import Section from "../../component/Section/Section";
import { fetchFilters } from "../../api/api";
import AccordionParent from "../../component/Accordian/AccordionParent";

function HomePage() {
  const { data } = useOutletContext();
  const { topAlbums, newAlbums, songs } = data;

  return (
    <>
    <div  className={styles.wrapper}>
      <Hero />
      <div>
        <Section title="Top Albums" data={topAlbums} type="album" />
        <hr style={{ backgroundColor: "#34C94B", height: "2px", border: "none" }} />
        <Section title="New Albums" data={newAlbums} type="album" />
        <hr style={{ backgroundColor: "#34C94B", height: "2px", border: "none" }} />
        <Section
          title="Songs"
          data={songs}
          type="song"
          filterSource={fetchFilters}
        />
        <hr style={{ backgroundColor: "#34C94B", height: "2px", border: "none" }} />
        <AccordionParent />
      </div>
      </div>
    </>
  );
}

export default HomePage;
