import { StarIcon } from "@chakra-ui/icons";
import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Image,
} from "@chakra-ui/react";
import ButtonCTAGraceMidnight from "../ButtonCTA/ButtonCTAGraceMidnight";
import imgGRACE from "../image/gracemidnight.jpg";

const IMAGE = imgGRACE;

export default function PGraceMidnight() {
  const property = {
    reviewCount: 6,
    rating: 3,
  };
  return (
    <Center py={12}>
      <Box
        role={"group"}
        p={6}
        maxW={"330px"}
        w={"full"}
        bg={useColorModeValue("white", "gray.800")}
        boxShadow={"2xl"}
        rounded={"lg"}
        pos={"relative"}
        zIndex={1}
      >
        <Box
          rounded={"lg"}
          mt={-12}
          pos={"relative"}
          height={"230px"}
          _after={{
            transition: "all .3s ease",
            content: '""',
            w: "full",
            h: "full",
            pos: "absolute",
            top: 5,
            left: 0,
            backgroundImage: `url(${IMAGE})`,
            filter: "blur(15px)",
            zIndex: -1,
          }}
          _groupHover={{
            _after: {
              filter: "blur(20px)",
            },
          }}
        >
          <Image rounded={"lg"} objectFit={"cover"} src={IMAGE} />
        </Box>
        <Stack pt={14} align={"center"}>
          <Text color={"gray.500"} fontSize={"sm"} textTransform={"uppercase"}>
            Fragrância Feminina
          </Text>
          <Heading fontSize={"2xl"} fontFamily={"body"} fontWeight={500}>
            Grace Midnight
          </Heading>
          <Stack direction={"row"} align={"center"}>
            <Text fontWeight={800} fontSize={"xl"}>
              R$156,90
            </Text>
          </Stack>
          <Stack direction={"row"} align={"center"}>
            {Array(5)
              .fill("")
              .map((_, i) => (
                <StarIcon
                  key={i}
                  color={i < property.rating ? "orange.500" : "whiteAlpha.400"}
                />
              ))}
            <Box as="span" ml="2" color="gray.500" fontSize="sm">
              {property.reviewCount} Avaliações
            </Box>
          </Stack>
          <Stack direction={"row"} align={"center"}>
            <ButtonCTAGraceMidnight />
          </Stack>
        </Stack>
      </Box>
    </Center>
  );
}
