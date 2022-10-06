import { Box, Text } from "@chakra-ui/react";
import { useGetPokedexQuery } from "../../app/api";
import Pokemon from "../Pokemon";

function Pokedex() {
  const { data: pokedex, isLoading, isSuccess } = useGetPokedexQuery(2);

  if (isLoading) {
    return (
      <Box
        w={"100%"}
        p={4}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Text fontSize={"4xl"}>Loading...</Text>
      </Box>
    );
  }

  if (isSuccess) {
    const nameIndex = pokedex.names.findIndex((e) => e.language.name === "en");

    return (
      <Box
        w={"100%"}
        p={4}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        flexDir={"column"}
      >
        <Text fontSize={"4xl"}>{pokedex.names[nameIndex].name}</Text>
        <Box w={"100%"} p={4} display={"grid"} placeContent={"center"} gap={4}>
          {pokedex.pokemon_entries.slice(0, 12).map((i) => {
            return <Pokemon key={`pk-${i.entry_number}`} id={i.entry_number} />;
          })}
        </Box>
      </Box>
    );
  }

  return <p>Error.</p>;
}

export default Pokedex;
