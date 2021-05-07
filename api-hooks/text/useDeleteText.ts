import axios from "axios";
import { useMutation, useQueryClient } from "react-query";

const deleteText = async ({ id }) => {
  await axios.delete(`/api/texts/${id}`);
};

const useDeleteText = () => {
  const queryClient = useQueryClient();
  const onSuccess = () => queryClient.invalidateQueries('texts');

  return useMutation(deleteText, { onSuccess });
}

export default useDeleteText;