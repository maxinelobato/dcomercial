import { ArrowForwardIcon, StarIcon } from "@chakra-ui/icons";
import { Badge, Box, Button, Flex, Image, Link, Stack } from "@chakra-ui/react";
import imgE from "./image/empire_carousel.png";

export default function CarouselEmpire() {
  const empire = {
    formattedPrice: "R$156,90",
    rating: 4,
  };
  return (
    <Stack direction={{ base: "column", md: "row" }}>
      <Flex p={8} flex={1} align={"center"} justify={"flex-end"}>
        <Stack spacing={4} w={"full"} maxW={"lg"}>
          <Box display="flex" alignItems="baseline">
            <Badge
              fontSize={"lg"}
              borderRadius="full"
              px="2"
              colorScheme="orange"
            >
              Fragrância Masculina
            </Badge>
          </Box>

          <Box fontSize={"3xl"} fontWeight={"bold"}>
            {empire.formattedPrice}
            <Box as="span" color="whiteAlpha.800" fontSize="sm">
              / Parcele em Até 6x SEM JUROS
            </Box>
          </Box>

          <Box display="flex" mt="2" alignItems="center">
            {Array(5)
              .fill("")
              .map((_, i) => (
                <StarIcon
                  key={i}
                  color={i < empire.rating ? "yellow.400" : "whiteAlpha.200"}
                />
              ))}
          </Box>

          <Box as="span" ml="2" color="whiteAlpha.800" fontSize="sm">
            100ml
          </Box>

          <Stack direction={{ base: "column", md: "row" }} spacing={4}>
            <Button
              textTransform="uppercase"
              size="lg"
              rounded="lg"
              bgColor="orange.500"
              color="white"
              boxShadow={
                "0px 1px 25px -5px rgb(0 0 0 / 48%), 0 10px 10px -5px rgb(0 0 0 / 43%)"
              }
              _hover={{
                bg: "orange.400",
              }}
              _focus={{
                bg: "orange.300",
              }}
              rightIcon={<ArrowForwardIcon />}
            >
              <Link
                style={{
                  textDecoration: "none",
                }}
                href="https://www.hinode.com.br/?id_consultor=35828203"
                isExternal
              >
                compre no site oficial
              </Link>
            </Button>
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image w={600} h={600} alt={""} objectFit={"cover"} src={imgE} />
      </Flex>
    </Stack>
  );
}
