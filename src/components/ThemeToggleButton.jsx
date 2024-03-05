import { useColorMode, IconButton } from "@chakra-ui/react";
import { FaSun, FaMoon } from "react-icons/fa";

const ThemeToggleButton = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return <IconButton aria-label="Toggle theme" icon={colorMode === "light" ? <FaMoon /> : <FaSun />} onClick={toggleColorMode} position="absolute" top={2} left={2} />;
};

export default ThemeToggleButton;
