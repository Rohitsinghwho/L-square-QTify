import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'
import Card from '../Card/Card';
import styles from "./Section.module.css"
import Carousel from '../Carousel/Carousel';
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
       {showAll?(
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
       ):(
         <Carousel
         items={albums}
         renderItem={(album)=>(
            <Card
             key={album.id}
             image={album.image}
             name={album.title}
             follows={album.follows}
            />
         )}
         uniqueNavigationKey={title.replace(/\s/g, '')} 
         />
       )}
    </section>
  )
}

export default Section