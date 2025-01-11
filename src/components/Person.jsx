import React, { useEffect, useState } from "react";
import axios from "../utils/axios";
import { useNavigate } from "react-router-dom";
import Dropdown from "./templates/Dropdown";
import Topnav from "./templates/Topnav";
import Cards from "./templates/Cards";
import Loading from "./Loading";
import InfiniteScroll from "react-infinite-scroll-component";

function Person() {
  document.title = "Movies Mania | person";

  const navigate = useNavigate();
  const [category, setCategory] = useState("popular");
  const [person, setperson] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const getperson = async () => {
    try {
      const { data } = await axios.get(`/person/${category}?page=${page}`);
      //   setperson(data.results);
      if (data.results.length > 0) {
        setperson((prev) => [...prev, ...data.results]);
        setPage(page + 1);
      } else {
        setHasMore(false);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const refreshHandler = () => {
    if (person.length === 0) {
      getperson();
    } else {
      setPage(1);
      setperson([]);
      getperson();
    }
  };
  useEffect(() => {
    refreshHandler();
  }, [category]);

  return person.length > 0 ? (
    <div className="w-full h-screen">
      <div className="w-full flex items-center justify-between">
      <div className="px-6 lg:px-8 flex items-center gap-4 mb-8">
        <button
          onClick={() => navigate(-1)}
          className="p-2 bg-gray-800/50 rounded-full hover:bg-gray-700/50 transition-all duration-300 mt-1"
          aria-label="Go Back"
        >
          <i className="ri-arrow-left-line text-2xl text-zinc-400 hover:text-purple-400"></i>
        </button>
        <h1 className="text-xl font-semibold text-zinc-400">Person</h1>
      </div>
        <div className="flex items-center w-[80%]">
          <Topnav />
        </div>
      </div>
      <InfiniteScroll
        dataLength={person.length}
        next={getperson}
        hasMore={hasMore}
        loader={<h1>Loading..</h1>}
      >
        <Cards data={person} title="person" />
      </InfiniteScroll>
    </div>
  ) : (
    <Loading />
  );
}

export default Person;
