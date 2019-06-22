import axios from 'axios';

const typescript: string = "foo";
console.log(typescript);

axios.get("https://api.upbit.com/v1/market/all").then((res) => console.log(res["data"]));