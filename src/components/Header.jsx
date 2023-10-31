import {
  Box,
  Flex,
  Text,
  IconButton,
  Stack,
  Collapse,
  Icon,
  Image,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useDisclosure,
  Spacer,
  VStack,
  Button,
  Heading,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  PhoneIcon,
} from "@chakra-ui/icons";
import { Link } from "preact-router/match";
import logo from "../assets/logo.jpg";

export default function WithSubnavigation() {
  const { isOpen, onToggle } = useDisclosure();
  const currentPath = window.location.pathname;

  return (
    <Box margin={{ lg: "0 auto" }} minWidth={{ lg: "100vw" }}>
      <Flex
        bg={useColorModeValue("white", "gray.800")}
        color={useColorModeValue("gray.600", "white")}
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        align={"center"}
        bgColor={"#e0e0e0"}
      >
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
        <Flex
          flex={{ base: 1 }}
          justify={{ base: "center", md: "start" }}
          alignItems="center"
        >
          <Heading
            display={{ base: "block", md: "none" }}
            fontSize={"xl"}
            color="#2E3B92"
          >
            JRL SHUTTLE SERVICES
          </Heading>

          <Link href={"/"}>
            <Image
              src={logo}
              alt="logo"
              maxWidth={{ base: "5rem", lg: "20rem" }}
              maxHeight={{ base: "5rem", lg: "20rem" }}
            />
          </Link>

          <Spacer display={{ base: "none", lg: "unset" }} />
          <Flex display={{ base: "none", md: "flex" }} ml={10}>
            <DesktopNav currentPath={currentPath} />
          </Flex>
        </Flex>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const DesktopNav = (attribute) => {
  const linkColor = useColorModeValue("gray.600", "gray.200");
  const linkHoverColor = useColorModeValue("gray.800", "white");
  const popoverContentBgColor = useColorModeValue("white", "gray.800");

  return (
    <VStack justifyContent="center">
      <Flex width="100%" justifyContent="center">
        <Icon color={"teal.100"} w={"2em"} h={"2em"} as={PhoneIcon} />
        <Text marginLeft="1rem" fontSize="xl">
          {" "}
          <Box as="a" href="tel:3069752222">
            306-975-2222
          </Box>{" "}
          /{" "}
          <Box as="a" href="tel:3062205444">
            306-220-5444{" "}
          </Box>
        </Text>
      </Flex>

      <Stack direction={"row"} spacing={4}>
        {NAV_ITEMS.map((navItem) => (
          <Flex key={navItem.label} justifyContent="center" alignItems="center">
            <Popover trigger={"hover"} placement={"bottom-start"}>
              <PopoverTrigger>
                <Box
                  p={2}
                  fontSize={"xl"}
                  fontWeight={500}
                  color={linkColor}
                  _hover={{
                    textDecoration: "none",
                    color: linkHoverColor,
                  }}
                >
                  <Link activeClassName="active" href={navItem.href ?? "#"}>
                    <Button
                      bgColor={
                        attribute.currentPath === navItem.href
                          ? "teal.200"
                          : "transparent"
                      }
                    >
                      {navItem.label}
                    </Button>
                  </Link>
                </Box>
              </PopoverTrigger>

              {navItem.children && (
                <PopoverContent
                  border={0}
                  boxShadow={"xl"}
                  bg={popoverContentBgColor}
                  p={4}
                  rounded={"xl"}
                  minW={"sm"}
                >
                  <Stack>
                    {navItem.children.map((child) => (
                      <DesktopSubNav key={child.label} {...child} />
                    ))}
                  </Stack>
                </PopoverContent>
              )}
            </Popover>
          </Flex>
        ))}
      </Stack>
    </VStack>
  );
};

const DesktopSubNav = ({ label, href, subLabel }) => {
  return (
    <Box
      role={"group"}
      display={"block"}
      p={2}
      rounded={"md"}
      _hover={{ bg: useColorModeValue("pink.50", "gray.900") }}
    >
      <Stack direction={"row"} align={"center"}>
        <Box>
          <Link activeClassName="active" href={href}>
            <Text
              transition={"all .3s ease"}
              _groupHover={{ color: "pink.400" }}
              fontWeight={500}
            >
              {label}
            </Text>
            <Text fontSize={"sm"}>{subLabel}</Text>
          </Link>
        </Box>
        <Flex
          transition={"all .3s ease"}
          transform={"translateX(-10px)"}
          opacity={0}
          _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
          justify={"flex-end"}
          align={"center"}
          flex={1}
        >
          <Icon color={"pink.400"} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Box>
  );
};

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      p={4}
      display={{ md: "none" }}
    >
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Box
        py={2}
        as="a"
        href={href ?? "#"}
        justifyContent="space-between"
        alignItems="center"
        _hover={{
          textDecoration: "none",
        }}
      >
        <Text
          fontWeight={600}
          color={useColorModeValue("gray.600", "gray.200")}
        >
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={"all .25s ease-in-out"}
            transform={isOpen ? "rotate(180deg)" : ""}
            w={6}
            h={6}
          />
        )}
      </Box>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
          align={"start"}
        >
          {children &&
            children.map((child) => (
              <Box as="a" key={child.label} py={2} href={child.href}>
                {child.label}
              </Box>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

const NAV_ITEMS = [
  {
    label: "HOME",
    href: "/",
  },
  {
    label: "SERVICES",
    children: [
      {
        label: "Special Needs Transportation",
        subLabel: "",
        href: "transportation",
      },
      {
        label: "Medical Mobility",
        subLabel: "",
        href: "/mobility",
      },
      {
        label: "What we can transport",
        subLabel: "",
        href: "/more",
      },
    ],
    href: "/services",
  },
  {
    label: "BOOKING",
    href: "booking",
  },
  {
    label: "ABOUT US",
    href: "about-us",
  },
  {
    label: "CONTACT US",
    href: "contact-us",
  },
];
