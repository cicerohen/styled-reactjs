import tinycolor from "tinycolor2";

import { Header } from "../../src/components/Header";
import { GlobalStyles } from "../../src/components/GlobalStyles";

import { ThemeProvider, useTheme } from "../../src/contexts/Theme";
import { SidebarProvider } from "../../src/contexts/Sidebar";
import { Theme } from "../../src/theme/types/theme";

const WithAllProviders = () => {
  const Theme = () => {
    const theme = useTheme();
    return (
      <input
        name="theme"
        hidden
        readOnly
        defaultValue={JSON.stringify(theme)}
      />
    );
  };

  return (
    <ThemeProvider>
      <GlobalStyles />
      <SidebarProvider>
        <Theme />
        <Header />
      </SidebarProvider>
    </ThemeProvider>
  );
};

describe("Header.cy.ts", () => {
  beforeEach(() => {
    window.localStorage.setItem("theme:mode", "dark");

    cy.mount(<WithAllProviders />);
    cy.get("[data-testid=theme-toggle-button]").as("themeToggleBtn");
    cy.get("[data-testid=sidebar-toggle-button]").as("sidebarToggleBtn");
    cy.document().its("body").as("body");

    cy.get("input[name='theme']")
      .invoke("val")
      .then((theme) => {
        cy.wrap(JSON.parse(theme as string)).as("theme");
      });
  });

  it("should toggle theme mode when click on button", () => {
    cy.location("origin").then((origin) => {
      cy.getAllLocalStorage().then((storage) => {
        expect(storage).to.deep.equal({
          [origin]: {
            "theme:mode": "dark",
          },
        });
      });
    });

    cy.get<Theme>("@theme").then((theme) => {
      cy.get("@body").should(
        "have.css",
        "background-color",
        tinycolor(theme.palette.grey["900"]).toRgbString()
      );
    });

    cy.get("@themeToggleBtn").click();

    cy.location("origin").then((origin) => {
      cy.getAllLocalStorage().then((storage) => {
        expect(storage).to.deep.equal({
          [origin]: {
            "theme:mode": "light",
          },
        });
      });
    });

    cy.get<Theme>("@theme").then((theme) => {
      cy.get("@body").should(
        "have.css",
        "background-color",
        tinycolor(theme.palette.grey["50"]).toRgbString()
      );
    });

    cy.get("@themeToggleBtn").click();

    cy.location("origin").then((origin) => {
      cy.getAllLocalStorage().then((storage) => {
        expect(storage).to.deep.equal({
          [origin]: {
            "theme:mode": "dark",
          },
        });
      });
    });

    cy.get<Theme>("@theme").then((theme) => {
      cy.get("@body").should(
        "have.css",
        "background-color",
        tinycolor(theme.palette.grey["900"]).toRgbString()
      );
    });
  });

  it("should hide main nav when is not a large screen", () => {
    cy.get<Theme>("@theme").then((theme) => {
      cy.stub(window, "matchMedia")
        .withArgs(theme.media.lg)
        .returns({
          matches: false,
          addEventListener: (eventName: string, callback: Function) => {
            callback({
              matches: false,
            });
          },
          removeEventListener: () => {},
        });
    });

    cy.mount(<WithAllProviders />);
    cy.get("nav").should("not.exist");
  });

  it("should show sidebar toggle button when is not a large screen", () => {
    cy.get<Theme>("@theme").then((theme) => {
      cy.stub(window, "matchMedia")
        .withArgs(theme.media.lg)
        .returns({
          matches: false,
          addEventListener: (eventName: string, callback: Function) => {
            callback({
              matches: false,
            });
          },
          removeEventListener: () => {},
        });
    });

    cy.mount(<WithAllProviders />);
    cy.get("@sidebarToggleBtn").within(() => {
      cy.get("input[aria-label='Open menu']")
        .should("exist")
        .should("not.be.visible");
      cy.get("svg").should("be.visible");
    });
  });
});
