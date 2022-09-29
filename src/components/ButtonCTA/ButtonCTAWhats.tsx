import { Link, Stack, Flex, IconButton } from "@chakra-ui/react";
import { BsWhatsapp } from "react-icons/bs";

export function ButtonCTAWhats() {
  return (
    <Stack
      position="fixed"
      zIndex={2}
      bottom="30px"
      right="30px"
      justifyContent="center"
      alignItems="center"
    >
      <Flex justifyContent="center" alignItems="center">
        <Link
          style={{
            textDecoration: "none",
          }}
          href="https://api.whatsapp.com/send/?phone=94992951302&text=Ol%C3%A1+preciso+de+ajuda+para+comprar+meu+produto%21+Te+achei+pelo+Google.&type=phone_number&app_absent=0"
          isExternal
        >
          <IconButton
            boxShadow="base"
            aria-label="whatsapp"
            w="12"
            h="12"
            isRound={true}
            borderRadius="50%"
            backdropFilter="auto"
            backdropBlur="1rem"
            display="flex"
            transition="0.1s linear"
            bgColor={"green.400"}
            color={"whiteAlpha.900"}
            _hover={{ bg: "green.600" }}
            icon={<BsWhatsapp size="24px" />}
          />
        </Link>
      </Flex>
    </Stack>
  );
}
