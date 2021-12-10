import axios from 'axios'
const baseUrl = 'http://localhost:4000/orders'

let token = null

const setToken = newToken => {
    token = `bearer ${newToken}`
}

const getAll = async () => {
    const config = { headers: { Authorization: token } }

    const res = await axios.get(baseUrl, config);
    return res.data
}

const getDetails = (id) => {
    const req = axios.get(`${baseUrl}/${id}`);
    return req.then(res => res.data);
}

const create = async (newObject) => {
    const config = { headers: { Authorization: token } }

    const res = await axios.post(baseUrl, newObject, config);
    return res.data;
}

const update = async (newObject) => {
    const config = { headers: { Authorization: token } }

    const res = await axios.put(baseUrl, newObject, config)
    return res.data;
}

const methods = { getAll, getDetails, create, update, setToken }

export default methods
