/*export async function getStaticProps(){
    const res = await fetch("http://localhost:1337/api/restaurants")
    const data = await res.json()
    return{
        props:{products:data.products}
    }
}
//import axios from 'axios';

export default function Index({products}){
    return(
        <>
         <h1>เมนูทั้งหมด</h1>
         <div>
            {products.map(item=>(
                <div key={item.id}>
                    <h2>{item.name}</h2>
                </div>
            ))}
         </div>
        </>
    )
}*/

/*
import axios from "axios";
const Index = ({menuList}) => <div>
    <h3>asdasdas</h3>
    <table border="1">
        <thead>
            <th>id</th>
            <th>name</th>
        </thead>
        <tbody>
            {menuList.data.map((x, i) => <tr key={i}>
                <td>{x.id}</td>
                <td>{x.name}</td>
                </tr>)}
        </tbody>
    </table>
</div>

Index.getIntialProps = async() => {
    const { data } = await axios.get('http://localhost:1337/api/restaurants');
    return {menuList: data};

}

export default Index;*/

/*
import axios from 'axios';

const Home = ({ restaurants, error }) => {
  if (error) {
    return <div>An error occured: {error.message}</div>;
  }
  return (
    <ul>
      {restaurants.data.map(restaurant => (
        <li key={restaurant.id}>{restaurant.attributes.name}</li>
      ))}
    </ul>
  );
};

Home.getInitialProps = async ctx => {
  try {
    const res = await axios.get('http://localhost:1337/api/restaurants');
    const restaurants = res.data;
    return { restaurants };
  } catch (error) {
    return { error };
  }
};

export default Home;*/

/*

const Home = ({ restaurants, error }) => {
    if (error) {
      return <div>An error occured: {error.message}</div>;
    }
    return (
      <ul>
        {restaurants.data.map(restaurant => (
          <li key={restaurant.id}>{restaurant.attributes.name}</li>
        ))}
      </ul>
    );
  };
  Home.getInitialProps = async ctx => {
    try {
      // Parses the JSON returned by a network request
      const parseJSON = resp => (resp.json ? resp.json() : resp);
      // Checks if a network request came back fine, and throws an error if not
      const checkStatus = resp => {
        if (resp.status >= 200 && resp.status < 300) {
          return resp;
        }
  
        return parseJSON(resp).then(resp => {
          throw resp;
        });
      };
  
      const headers = {
        'Content-Type': 'application/json',
      };
  
      const restaurants = await fetch('http://localhost:1337/api/restaurants', {
        method: 'GET',
        headers,
      })
        .then(checkStatus)
        .then(parseJSON);
  
      return { restaurants };
    } catch (error) {
      return { error };
    }
  };
  
  export default Home;*/

/**/
export default function index(){
    fetch('http://localhost:1337/api/restaurants', {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
  },
})
  .then(response => response.json())
  .then(data => console.log(data));
    return(
        <>
         <h1>asdasdasdasda</h1>
        </>
    )
}


