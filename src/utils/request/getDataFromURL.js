import axios from 'axios'
import baseUrl from './baseurl'

export default async function (url) {
    const { data } = await axios.post(`${baseUrl}${url}`)
    return data
}