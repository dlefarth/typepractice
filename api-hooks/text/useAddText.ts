import axios from "axios";
import { useMutation, useQueryClient } from "react-query";
import TextDTO from "../../dto/TextDTO";

const addText = async (text: TextDTO) => {
  const { data } = await axios.post('/api/texts', text);
  return data;
};

const useAddText = () => {
  const queryClient = useQueryClient();
  const onSuccess = () => {
    queryClient.invalidateQueries('texts');
    console.log('invalidate');
  }

  return useMutation(addText, { onSuccess });
}

export default useAddText;