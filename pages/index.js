import {useEffect} from "react/cjs/react.production.min";
import Navbar from "../components/Navbar/Navbar";
import PokemonFiltersList from
    "../components/PokemonFiltersList/PokemonFiltersList";
import PokemonList from "../components/PokemonList/PokemonList";
import {HomeCss} from "../styles/Home.module.css";

const baseUrl = "https://pokeapi.co/api/v2/pokemon?offset=40&limit=40";
const getStaticProps = async () => {
  const res = await fetch(baseUrl);
  return res.json()
};

const Home = () => {

  useEffect(() => {
    const data = 


  },[])
  return (
    <main>
      <Navbar />
      <PokemonFiltersList />
      <PokemonList />
    </main>
  );
};

export default Home;
