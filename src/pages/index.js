/*
export default function Home() {

  return (
    <>
      <h1>asd0asd</h1>
    </>
  )
}*/

/*function Index({ posts }) {
  return (
    <ul>
      {posts.map((post) => (
        <li>{post.title}</li>
      ))}
    </ul>
  )
}*/

/*
export async function getStaticProps() {

  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const posts = await res.json()

  return {
    props: {
      posts,
    },
  }
}

export default Index*/


/*
import { useState, useEffect } from "react";

function Index(){
  const [idexData, setIdexData] = useState([])

  useEffect(() => {
    async function fetchIndexData(){
      const res = await fetch('http://localhost:1337/api/restaurants')
      const data = await res.json()
      setIdexData(data)

    }

    fetchIndexData()
  }, [])

  return(
    <div>
      <h2>ชื่อร้าน</h2>
      <h1>{idexData.name}</h1>
    </div>
  )
}

export default Index*/


import { useState, useEffect } from "react";
import {useFetch} from "@/hook/useFetch";
import { httpClient } from "@/service/httpClient";
import index from "./products";

const Index = () => {


  const [indexData, setIndexData] = useState([])
  const {getResData} = useFetch()
  useEffect(() => {
    const eiei = async () => { 
      const {data} = await httpClient.get('/api/restaurants')

      /*const ee = await getResData()
      console.log(ee)*/
      // console.log(data.data[0]);
      // setIndexData(data.data)
      // console.log(typeof indexData);
      // console.log(typeof JSON.stringify(indexData));
      // console.log(typeof JSON.parse(JSON.stringify(indexData)));

    }
eiei()
  }, []);


  return(
    <div>
      <h2>ชื่อร้าน</h2>
  {/* <p>{JSON.stringify(indexData)}</p> */}

  {indexData.map((element, index) => {
        return (
          <div key={index}>
            <h2>{element.attributes.name}</h2>
          </div>
        );
      })}
    </div>
  );
};

export default Index;