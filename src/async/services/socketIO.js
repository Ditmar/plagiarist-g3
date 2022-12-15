import { get } from "../api";

const apiUri = process.env.REACT_APP_API_URL;
const socketIoEndpoint = async() => {
    return await get('https://jsonplaceholder.typicode.com/posts', {});
}
export default socketIoEndpoint;