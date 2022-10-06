import { Box, Image, Text } from "@chakra-ui/react";
import img from "../../assets/icon.svg";

function Header() {
  return (
    <header>
      <Box
        w={"100%"}
        p={4}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        gap={"1rem"}
        bg={"#c53030"}
      >
        <Image src={img} alt="poke.red" w={"32px"} h={"auto"} />
        <Text
          fontSize={"2xl"}
          fontWeight={"bold"}
          textAlign={"center"}
          color="white"
        >
          Pokédex
        </Text>
      </Box>
    </header>
  );
}

export default Header;
