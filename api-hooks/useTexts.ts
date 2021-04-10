import axios from "axios";
import { useQuery } from "react-query";

const fetchTexts = async () => {
    const { data } = await axios.get("/api/texts");
    return data;
};

const useTexts = () => useQuery("texts", fetchTexts);

export default useTexts;