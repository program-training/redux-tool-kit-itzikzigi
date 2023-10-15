import { Box } from "@mui/material";
import AnimalButton from "./AnimalButton";

const Main = () => {
  const animals = ["Dog", "Wolf", "Fox", "Cat", "Tiger", "Lion"];
  return (
    <Box>
      {animals.map((animal, i) => (
        <AnimalButton key={i} animal={animal} />
      ))}
    </Box>
  );
};
export default Main;
