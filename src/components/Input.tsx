import { Box, TextField } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { setAnimal } from "../app/animalSlice";

const Input = () => {
  const animal = useAppSelector((store) => store.animal).value;
  const dispatch = useAppDispatch();

  return (
    <Box>
      <TextField
        value={animal}
        onChange={(e) => dispatch(setAnimal({ value: e.currentTarget.value }))}
      />
    </Box>
  );
};
export default Input;
