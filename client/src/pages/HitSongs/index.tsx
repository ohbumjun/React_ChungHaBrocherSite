import React from "react";
import Features from "components/common/Features";
import { SingleAlbumDatas } from "assets/data/AlbumData";

const About = () => {
  let copyInfo = SingleAlbumDatas.slice();
  let HitSongInfos = [];
  for (let i = 0; i < copyInfo.length; i++) {
    let SingleAlbum = copyInfo[i];
    let InfoObj = {
      img: SingleAlbum.images[0].image,
      title: SingleAlbum.song,
      year: SingleAlbum.year,
      paragraph1: SingleAlbum.paragraphOne,
      paragraph2: SingleAlbum.paragraphTwo,
    };
    console.log("infoObj", InfoObj);
    HitSongInfos.push(InfoObj);
  }

  return (
    <>
      {HitSongInfos.map((song, idx) => {
        return (
          <Features
            key={idx}
            IsOdd={idx % 2 == 0}
            routeIdx={idx}
            img={song.img}
            year={song.year}
            song={song.title}
            paragraph1={song.paragraph1}
            paragraph2={song.paragraph2}
          />
        );
      })}
    </>
  );
};

export default About;
