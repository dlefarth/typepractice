import axios from "axios";
import { useQuery } from "react-query";

const fetchScores = async () => {
    const { data } = await axios.get("/api/scores");
    return data;
};

const useScores = () => useQuery("scores", fetchScores);

export default useScores;