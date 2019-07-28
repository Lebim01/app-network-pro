import axios from 'axios'
import { baseUrl } from './index'

export default async function (url) {
    const { data } = await axios.post(`${baseUrl}${url}`)
    return data
}