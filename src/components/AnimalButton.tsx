import { Box, Button } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { setAnimal } from "../app/animalSlice";

const AnimalButton = ({ animal }: { animal: string }) => {
  const dispatch = useAppDispatch();
  const chosenAnimal = useAppSelector((store) => store.animal).value;
  return (
    <Box>
      <Button
        sx={{
          background:
            chosenAnimal.toLowerCase() === animal.toLowerCase()
              ? "blue"
              : "yellow",
        }}
        onClick={(e) =>
          dispatch(setAnimal({ value: e.currentTarget.innerText }))
        }
      >
        {animal}
      </Button>
    </Box>
  );
};
export default AnimalButton;
