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
          href="https://api.whatsapp.com/send?phone=5594992951302&text=Ol%C3%A1%2C%20gostei%20desses%20produtos!%20Te%20achei%20pelo%20Google"
          isExternal
        >
          <IconButton
            boxShadow={
              "0px 1px 25px -5px rgb(37 211 102 / 48%), 0 10px 10px -5px rgb(37 211 102 / 43%)"
            }
            aria-label="whatsapp"
            w="12"
            h="12"
            isRound={true}
            borderRadius="50%"
            backdropFilter="auto"
            backdropBlur="1rem"
            display="flex"
            transition="0.1s linear"
            bgColor={"#25D366"}
            color={"whiteAlpha.900"}
            _hover={{ bg: "green.600" }}
            icon={<BsWhatsapp size="24px" />}
          />
        </Link>
      </Flex>
    </Stack>
  );
}
