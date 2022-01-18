import Navbar from "../../components/navbar/Navbar";
import Featured from "../../components/featured/Featured";
import "./home.scss";
import List from "../../components/list/List";
import { useState, useEffect } from "react";
import axios from "axios";

const Home = ({ type }) => {
  const [lists, setLists] = useState([]);
  const [genre, setGenre] = useState(null);

  useEffect(() => {
    const getRandomLists = async () => {
      try {
        const res = await axios.get(
          `lists${type ? "?type=" + type : ""}${
            genre ? "&genre=" + genre : ""
          }`,
          {
            headers: {
              token:
                "Bearer " +
                "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZTJiNTE1Y2JkOTU1MmU1ODllZjA3NyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0MjMxNzM0NSwiZXhwIjoxNjQyNzQ5MzQ1fQ.CIt09ZYYuzrlBiF9YjE8WxvGNBpEonH-lpjoOs3I5A0",
            },
          }
        );

        setLists(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getRandomLists();
  }, [type, genre]);

  return (
    <div className="home">
      <Navbar />
      <Featured type={type} setGenre={setGenre} />
      {lists.map((e, i) => (
        <List key={i} list={e} />
      ))}
    </div>
  );
};

export default Home;
