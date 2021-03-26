import React from "react";
import axios from "axios";
import DetailSurah from "./detail";
import { Link, useRouteMatch, Switch, Route } from "react-router-dom";
const Quran = () => {
  let match = useRouteMatch();
  const [allSurah, SetAllSurah] = React.useState([]);
  React.useEffect(() => {
    getallSurah();
  }, []);

  const getallSurah = async () => {
    let url = ` https://quranapi.idn.sch.id/surah`;
    try {
      let response = await axios.get(url);
      console.log(response.data.data);
      SetAllSurah(response.data.data);
    } catch { }
  };

  return (
    <React.Fragment>
      <Switch>
        <Route path={`/dashboard/quran/:number`}>
          <DetailSurah />
        </Route>

        <Route path={`${match.url}`}>
          <div className="container juustify-center content-center row">
            <div className="flex items-center font-bold text-2xl justify-center text-white container-fluid p-5 mb-5 bg-green-500">
              <p className="">Al-Quran</p>
              </div>
            <div className="flex items-center font-semibod justify-center text-lg container bg-blue-500 text-light w-1 mb-3">
              
              </div>
            <div className="container row">
              {allSurah.map((surah) => (
                // ${
                  // surah.number % 2 === 0 ? "bg-white" : "bg-gray-300"
                <div className={`
                        flex justify-between items-center my-2 px-5 rounded-lg `}
                  key={surah.number}
                >
                  <div className="col-lg-12 px-5 text-white  bg-blue-500  hover:bg-blue-800 ">
                    <Link className=" btn btn-md btn-rounded    w-50 ml-60 " to={`${match.url + "/" + surah.number}`}>
                      <h1 className="text-white"> Surah : {surah.name}</h1>
                      <p className="text-white">{surah.translationEn}</p>
                      <p className="text-white justify-end">{surah.numberOfAyahs} ayah</p>
                      {/* <Link className="  btn-rounded bg-transparent hover:bg-red-800 justify-end mr-56 " to={`${match.url + "/" + surah.number}`}> {surah.asma}</Link> */}
                      <p className="text-white">{surah.asma}</p>
                    </Link>
                   
                    {/* <p className="text-white"></p> */}
                  </div>
                  {/* <div className="col-lg-4">
                    <Link className=" btn btn-md btn-rounded bg-blue-500 border-black  w-50 ml-28 hover:bg-blue-800 " to={`${match.url + "/" + surah.number}`}>
                      <h1 className="text-white"> Surah : {surah.name}</h1>
                      <p className="text-white">{surah.translationEn}</p>
                      <p className="text-white">{surah.numberOfAyahs} ayah</p>
                      <Link className="  btn-rounded bg-transparent hover:bg-red-800 justify-end mr-56 " to={`${match.url + "/" + surah.number}`}> {surah.asma}</Link>
                    </Link>
                  </div>
                  <div className="col-lg-4">
                    <Link className=" btn btn-md btn-rounded bg-blue-500 border-black  w-50 ml-28 hover:bg-blue-800 " to={`${match.url + "/" + surah.number}`}>
                      <h1 className="text-white"> Surah : {surah.name}</h1>
                      <p className="text-white">{surah.translationEn}</p>
                      <p className="text-white">{surah.numberOfAyahs} ayah</p>
                      <Link className="  btn-rounded bg-transparent hover:bg-red-800 justify-end mr-56 " to={`${match.url + "/" + surah.number}`}> {surah.asma}</Link>
                    </Link>
                  </div> */}
                  {/* <Link className="   hover:bg-red-800 justify-end mr-56 " to={`${match.url + "/" + surah.number}`}> {surah.asma}</Link> */}
                </div>
                

              ))
              }
            </div >
          </div>
        </Route >
      </Switch >
    </React.Fragment >
  );
};

export default Quran;