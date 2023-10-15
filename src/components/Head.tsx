import { Stack, Typography } from "@mui/material";
import { useAppSelector } from "../app/hooks";

const Head = () => {
  const animal = useAppSelector((store) => store.animal).value;

  return (
    <Stack bgcolor="purple">
      <Typography>Chosen Animal: {animal}</Typography>
    </Stack>
  );
};
export default Head;
