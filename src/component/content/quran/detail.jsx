import React from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

const DetailSurah = () => {
  console.log(useParams());
  let { number } = useParams(); 
  const [surah, setSurah] = React.useState([]);
  const [ayat, setAyat] = React.useState([]);
  React.useEffect(() => {
    getSurah(number);
  }, [number]);

  const getSurah = async (number) => {
    let url = `https://quranapi.idn.sch.id/surah/${number}`;
    console.log(url)
    try {
      let response = await axios.get(url);
      setSurah(response.data);
      setAyat(response.data.ayahs)
      console.log(response.data);
    } catch {}
  };
  return (
      <div>
          <div className="text-center text-2xl font-semibold mb-5">{surah.name}</div>
          <div className="text-align-left btn btn-md bg-blue-500 text-white font-semi-bold text-grey hover:bg-blue-400 dropdown">
             <Link to="/dashboard/quran/">{surah.name}</Link>
          </div>
          <div>
              {ayat.map((ayah)=> (
                <div className=" mb-2 py-3 px-2 flex flex-col" key={ayah.verseId}>
                    <p className=" flex justify-end">{ayah.ayahText}</p>
                    <p>{ayah.indoText}</p>
                  <audio ><source src={ayah.audio} type="audio/mp3"/></audio>

                </div>
              ))}
          </div>
      </div>
  )
};

export default DetailSurah;