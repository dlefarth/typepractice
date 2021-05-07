import axios from "axios";
import { useQuery } from "react-query";
import TextDTO from "../../dto/TextDTO";

const fetchTexts = async () => {
    const { data } = await axios.get("/api/texts");
    return data;
};

const useTexts = () => useQuery<TextDTO[]>("texts", fetchTexts);

export default useTexts;