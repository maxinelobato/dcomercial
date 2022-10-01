import {
  Box,
  Container,
  Flex,
  Heading,
  SimpleGrid,
  Stack,
  Stat,
  StatLabel,
  StatNumber,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { ReactNode } from "react";
import {
  BsFillPeopleFill,
  BsFillHeartFill,
  BsBasketFill,
} from "react-icons/bs";

interface StatsCardProps {
  title: string;
  stat: string;
  icon: ReactNode;
}
function StatsCard(props: StatsCardProps) {
  const { title, stat, icon } = props;
  return (
    <Stat
      boxShadow="lg"
      backdropFilter="blur(5px)"
      backdropBlur="base"
      px={{ base: 2, md: 8 }}
      py={"12"}
      border={"1px solid"}
      bgColor={"whiteAlpha.200"}
      borderColor="whiteAlpha.200"
      rounded={"lg"}
    >
      <Flex justifyContent={"space-between"}>
        <Box pl={{ base: 2, md: 4 }}>
          <StatLabel fontWeight={"medium"}>{title}</StatLabel>
          <StatNumber fontSize={"2xl"} fontWeight={"medium"}>
            {stat}
          </StatNumber>
        </Box>
        <Box my={"auto"} color={"orange.400"} alignContent={"center"}>
          {icon}
        </Box>
      </Flex>
    </Stat>
  );
}

export function Information() {
  return (
    <Container maxW="7xl">
      <Stack
        display={{ base: "flex" }}
        direction={{ base: "column", md: "column" }}
        spacing={{ base: 6, md: 8, lg: 10 }}
        pb={{ base: 6, md: 8, lg: 16 }}
      >
        <Heading
          fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
          fontWeight={"bold"}
          textAlign={"center"}
        >
          Veja como podemos ajudar você
        </Heading>
        <Text
          color={"whiteAlpha.700"}
          maxW={"7xl"}
          fontWeight={500}
          lineHeight={1.2}
          fontSize={useBreakpointValue({ base: "2xl", md: "3xl" })}
          textAlign={"center"}
        >
          Somos referência em excelência no atendimento com o público. Estamos
          prontos para lhe ouvir e lhe ajudar.
        </Text>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
          <StatsCard
            title={"Nosso Atendimento é"}
            stat={"Humanizado"}
            icon={<BsFillHeartFill size={"3em"} />}
          />
          <StatsCard
            title={"Somos Especialistas em"}
            stat={"Pessoas"}
            icon={<BsFillPeopleFill size={"3em"} />}
          />
          <StatsCard
            title={"Você escolhe seu"}
            stat={"Produto"}
            icon={<BsBasketFill size={"3em"} />}
          />
        </SimpleGrid>
      </Stack>
    </Container>
  );
}
