import useSWR from 'swr'
import {base_url} from "../../consts/apiUrl";
import {fetcher} from "../fetcher/fetcher";

const useOmdb = () => {
    const API_KEY = process.env.REACT_APP_OMDb_API_KEY
    const {data, error} = useSWR(`${base_url}?s=007&apikey=${API_KEY}`, fetcher)

    return {data, error}
}

export default useOmdb