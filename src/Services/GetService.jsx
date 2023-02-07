const GetService = async () => {
    const res = await fetch('https://pokeapi.co/api/v2/pokemon?offset=0&limit=10');
    const data = await res.json();
    return data;
}
export default GetService;