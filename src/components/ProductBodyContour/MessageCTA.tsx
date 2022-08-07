import { Box, Heading } from "@chakra-ui/react";
import Typed from "react-typed";

export default function MessageCTA() {
  return (
    <Box
      m={["0", "0", "0", "56"]}
      zIndex={2}
      p={4}
      overflow="hidden"
      alignItems="baseline"
      position="absolute"
      backdropFilter="blur(1rem)"
      bgColor="blackAlpha.500"
      rounded="1rem"
    >
      <Heading
        lineHeight="tall"
        textAlign="center"
        bgClip="text"
        bgGradient="linear(to-l, orange.400, yellow.200)"
        fontWeight="bold"
        fontFamily={"Work Sans"}
        fontSize="3xl"
      >
        <Typed
          strings={[
            "Neste Dia dos Pais a D.Comercial te ajuda a achar um presente marcante e tão especial quanto o seu Pai! 🤍",
          ]}
          typeSpeed={20}
          showCursor={false}
        />
      </Heading>
    </Box>
  );
}
