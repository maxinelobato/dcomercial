import { Box, Heading } from "@chakra-ui/react";
import "@fontsource/charm";
import Typed from "react-typed";

export default function MessageCTA() {
  return (
    <Box
      zIndex={2}
      p={4}
      overflow="hidden"
      alignItems="baseline"
      position="absolute"
      backdropFilter="blur(10px)"
      bg="whiteAlpha.50"
      roundedTop="2rem"
    >
      <Heading
        lineHeight="tall"
        textAlign="center"
        bgClip="text"
        bgGradient="linear(to-l, blackAlpha.800, blackAlpha.600)"
        fontWeight="extrabold"
        fontSize="4xl"
        fontFamily="Charm"
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
