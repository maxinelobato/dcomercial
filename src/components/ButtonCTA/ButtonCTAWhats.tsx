import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
import {
  Button,
  Link,
  Menu,
  MenuButton,
  MenuDivider,
  MenuGroup,
  MenuItem,
  MenuList,
  Stack,
} from "@chakra-ui/react";
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
      <Menu>
        {({ isOpen }) => (
          <>
            <MenuButton
              isActive={isOpen}
              bgColor="blackAlpha.500"
              backdropFilter="auto"
              backdropBlur="1rem"
              display="flex"
              transition="0.1s linear"
              shadow="sm"
              as={Button}
              aria-label="Options"
              variant="solid"
            >
              {isOpen
                ? ["Fechar", <ChevronDownIcon />]
                : ["Ajuda?", <ChevronUpIcon />]}
            </MenuButton>
            <MenuList
              backdropFilter="auto"
              backdropBlur="1rem"
              transition="0.1s linear"
              bgColor="blackAlpha.500"
              shadow="sm"
            >
              <MenuGroup title="Produto Indisponível?" />
              <MenuDivider />
              <MenuGroup title="Dúvidas?" />
              <MenuDivider />
              <MenuGroup title="Fale Conosco no">
                <Link
                  style={{
                    textDecoration: "none",
                  }}
                  href="https://api.whatsapp.com/send?phone=5594999083224&text=Ol%C3%A1%2C%20gostei%20desse%20produto!%20Te%20achei%20pelo%20Google"
                  isExternal
                >
                  <MenuItem icon={<BsWhatsapp size={16} />}>WhatsApp</MenuItem>
                </Link>
              </MenuGroup>
            </MenuList>
          </>
        )}
      </Menu>
      {/* <Link
        style={{
          textDecoration: "none",
        }}
        href="https://api.whatsapp.com/send?phone=5594999083224&text=Ol%C3%A1%2C%20gostei%20desse%20produto!%20Te%20achei%20pelo%20Google"
        isExternal
      >
        <Button
          size="lg"
          height="70px"
          width="200px"
          textTransform={"capitalize"}
          backdropFilter="auto"
          backdropBlur="1rem"
          display="flex"
          transition="0.1s linear"
          bgColor="blackAlpha.500"
          shadow="sm"
          textAlign="left"
          _hover={{
            bg: "whiteAlpha.200",
          }}
          leftIcon={<BsWhatsapp size={32} />}
        >
          indisponível? <br /> fale conosco
        </Button>
      </Link> */}
    </Stack>
  );
}
