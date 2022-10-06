import { Box, Text } from "@chakra-ui/react";
import { useGetPokemonSpeciesByIdQuery } from "../../app/api";

interface Props {
  id: number;
}

function Pokemon({ id }: Props) {
  const {
    data: species,
    isLoading,
    isSuccess,
  } = useGetPokemonSpeciesByIdQuery(id);

  if (isLoading) {
    return (
      <Box>
        <p>Loading</p>
      </Box>
    );
  }

  if (isSuccess) {
    const nameIndex = species.names.findIndex((e) => e.language.name === "en");
    const flavorTextIndex = species.flavor_text_entries.findIndex(
      (e) => e.language.name === "en" && e.version.name === "lets-go-pikachu"
    );

    return (
      <Box p={2} border={"1px"} borderColor={"gray.200"} borderRadius={"md"}>
        <Text fontSize={"xl"}>{species.names[nameIndex].name}</Text>
        <p>{species.flavor_text_entries[flavorTextIndex].flavor_text}</p>
      </Box>
    );
  }

  return <p>Error.</p>;
}

export default Pokemon;
