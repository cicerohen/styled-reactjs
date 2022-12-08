import styled from "styled-components";

import { SunIconOutlined } from "./svg-icons/SunIconOutlined";
import { SunIconSolid } from "./svg-icons/SunIconSolid";

import { useTheme, useThemeMode } from "../contexts/Theme";
import React, { useEffect, useState } from "react";

const Wrapper = styled.div`
  width: ${(props) => props.theme.typography.pxToRem(32)};
  height: ${(props) => props.theme.typography.pxToRem(32)};
  border-radius: 50%;
  border: none;
  display: flex;
  position: relative;
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

const Input = styled.input`
  position: absolute;
  height: 100%;
  width: 100%;
  opacity: 0;
  top: 0;
  left: 0;
  cursor: pointer;
`;

const IncoWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  > svg {
    width: 90%;
    height: 90%;
  }
`;

export const ThemeToggleButton = () => {
  const theme = useTheme();
  const { setThemeMode } = useThemeMode();
  const [lightIsOff, setLightIsOff] = useState(false);

  const title = {
    dark: "Turn on the light",
    light: "Turn off the light",
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setThemeMode("dark");
      return;
    }

    setThemeMode("light");
  };

  useEffect(() => {
    if (theme.palette.mode === "dark") {
      setLightIsOff(true);
      return;
    }
    setLightIsOff(false);
  }, [theme]);

  return (
    <Wrapper data-testid="theme-toggle-button">
      <Input
        title={title[theme.palette.mode]}
        aria-label="Turn off the light"
        type="checkbox"
        checked={lightIsOff}
        onChange={onChange}
      />

      <IncoWrapper>
        {theme.palette.mode === "light" ? (
          <SunIconSolid />
        ) : (
          <SunIconOutlined />
        )}
      </IncoWrapper>
    </Wrapper>
  );
};
