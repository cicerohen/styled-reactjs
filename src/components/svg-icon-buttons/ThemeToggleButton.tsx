import styled from "styled-components";

import { SunIconOutlined } from "../svg-icons/SunIconOutlined";
import { SunIconSolid } from "../svg-icons/SunIconSolid";

import { useTheme, useThemeMode } from "../../contexts/Theme";

const Wrapper = styled.button`
  cursor: pointer;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  ${(props) => {
    if (props.theme.palette.mode === "dark") {
      return `
        color: ${props.theme.palette.grey[50]};
      `;
    }
    return `
      color: ${props.theme.palette.primary.main[800]};
    `;
  }}
`;

const IconLight = styled(SunIconOutlined)`
  width: 90%;
  height: 90%;
`;

const IconDark = styled(SunIconSolid)`
  width: 90%;
  height: 90%;
`;

export const ThemeToggleButton = () => {
  const theme = useTheme();
  const { setThemeMode } = useThemeMode();

  const title = {
    dark: "Turn on the light",
    light: "Turn off the light",
  };

  const toggleTheme = () => {
    if (theme.palette.mode === "dark") {
      setThemeMode("light");
      return;
    }

    setThemeMode("dark");
  };

  return (
    <Wrapper title={title[theme.palette.mode]} onClick={toggleTheme}>
      {theme.palette.mode === "light" ? <IconDark /> : <IconLight />}
    </Wrapper>
  );
};
