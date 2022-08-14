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
import ButtonCTAEmpire from "../ButtonCTA/ButtonCTAEmpire";
import imgEMPIRE from "../image/empire.jpg";

const IMAGE = imgEMPIRE;

export default function PEmpire() {
  const property = {
    reviewCount: 5,
    rating: 4,
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
            Fragrância Masculina
          </Text>
          <Heading fontSize={"2xl"} fontFamily={"body"} fontWeight={500}>
            Empire
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
            <ButtonCTAEmpire />
          </Stack>
        </Stack>
      </Box>
    </Center>
  );
}
