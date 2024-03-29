export default {
  breakpoints: ["40em", "52em", "64em"],
  fontSizes: ["1rem", "1.4rem", "2rem", "2.4rem", "4rem"],
  colors: {
    text: "#120136",
    background: "#fff",
    primary: "#035aa6",
    accent: "#D6FFFC",
    muted: "#E0E0E0",
  },
  space: [0, ".8rem", "1rem", "2rem", "6rem", "8rem"],
  fonts: {
    body: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    heading: "system-ui, sans-serif",
    monospace: "Menlo, monospace",
  },
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1.3,
    heading: 1.4,
  },
  variants: {},
  text: {
    subhead: {
      fontSize: 1,
      mb: 2,
    },
    logo: {
      fontSize: 1,
      fontWeight: "bold",
      textTransform: "uppercase",
      textDecoration: "none",
      color: "primary",
    },
  },
  links: {
    nav: {
      fontWeight: "bold",
      textTransform: "uppercase",
      textDecoration: "none",
      color: "primary",
      ml: 2,
    },
  },
  buttons: {
    primary: {
      color: "white",
      bg: "primary",
      padding: "1 3",
      borderWidth: "1px",
      borderStyle: "solid",
      borderColor: "primary",
      "&:hover": {
        color: "primary",
        bg: "white",
      },
    },
  },
  styles: {
    root: {
      fontFamily: "body",
      fontSize: 0,
      h1: {
        fontSize: 3,
        fontFamily: "heading",
        fontWeight: "heading",
        color: "primary",
        mt: 1,
        mb: 1,
      },
      a: {
        textDecoration: "none",
        color: "text",
        "&:hover": {
          color: "primary",
        },
      },
      ul: {
        listStyleType: "none",
        paddingInline: 0,
      },
    },
  },
};
