import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Card from '../Card/Card';
import styles from "./Section.module.css"
const Section = ({title,endpoint}) => {
    const [albums,setAlbums]=useState([]);
    const [showAll,setShowAll]=useState(false);
    
    useEffect(()=>{
        const fetchAlbums=async()=>{
            try {
                const res=await axios.get(endpoint);
                console.log(res.data)
                setAlbums(res.data);
            } catch (error) {
                console.log("Error fetching albums",error);
            }
        }
        fetchAlbums();
    },[endpoint])
  return (
    <section className={styles.section}>
        <div className={styles.header}>
            <h2 className={styles.title}>{title}</h2>
            <button className={styles.button} onClick={()=>setShowAll(!showAll)}>
                {showAll?"Collapse":"Show All"}
            </button>
        </div>

        <div className={styles.grid}>
        {
            albums.slice(0,showAll?albums.length:7)
            .map((album)=>(
                <Card
                key={album.id}
                image={album.image}
                name={album.title}
                follows={album.follows}
                />
            ))
        }
        </div>
    </section>
  )
}

export default Section