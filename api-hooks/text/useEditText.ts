import axios from "axios";
import { useMutation, useQueryClient } from "react-query";
import TextDTO from "../../dto/TextDTO";

const editText = async (text: TextDTO) => {
  await axios.put(`/api/texts/${text._id}`, text);
};

const useEditText = () => {
  const queryClient = useQueryClient();
  const onSuccess = () => queryClient.invalidateQueries('texts');

  return useMutation(editText, { onSuccess });
}

export default useEditText;