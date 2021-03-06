import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  overrides: {
    MuiPaper: {
      root: {},
      elevation1: {
        "box-shadow": "none",
      },
    },
    MuiButton: {
      containedPrimary: {},
      outlinedPrimary: {},
    },

    MuiInputBase: {
      input: {
        "&:-webkit-autofill": {
          "box-shadow": "0 0 0px 1000px #252525 inset !important",
          "text-fill-color": "white",
          "-webkit-text-fill-color": "white",
        },
      },
    },
    MuiTypography: {
      body1: {
        font: '14px/1.5 "PingFang SC","Lantinghei SC","Microsoft YaHei","HanHei SC","Helvetica Neue","Open Sans",Arial,"Hiragino Sans GB","微软雅黑",STHeiti,"WenQuanYi Micro Hei",SimSun,sans-serif',
        color: "rgba(255,255,255,.875)",
      },
      body2: {
        font: '14px/1.5 "PingFang SC","Lantinghei SC","Microsoft YaHei","HanHei SC","Helvetica Neue","Open Sans",Arial,"Hiragino Sans GB","微软雅黑",STHeiti,"WenQuanYi Micro Hei",SimSun,sans-serif',
        color: "rgba(255,255,255,.75)",
      },
      caption: {
        font: '10px/1.5 "PingFang SC","Lantinghei SC","Microsoft YaHei","HanHei SC","Helvetica Neue","Open Sans",Arial,"Hiragino Sans GB","微软雅黑",STHeiti,"WenQuanYi Micro Hei",SimSun,sans-serif',
        color: "rgba(255,255,255,.5)",
      },
    },

    // MuiOutlinedInput: {
    //   focused: {
    //     notchedOutline: {
    //       borderColor: '#fff'
    //     }
    //   }
    // }
  },
  palette: {
    type: "dark",
    primary: {
      main: "#1b1b1b",
      contrastText: "#fff",
    },
    secondary: {
      main: "#fff",
    },
    text: {
      primary: "rgba(255,255,255, 0.75)",
      secondary: "rgba(255,255,255, 0.54)",
      disabled: "rgba(255,255,255, 0.38)",
      hint: "rgba(255,255,255, 0.38)",
      // divider: 'rgba(255,255,255, 0.12)',
    },
    background: {
      default: "#252525",
    },
  },

  typography: {
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    // fontStyle: "normal",
    // fontDisplay: "swap",
    // fontWeight: 400,
    fontSize: 14,
  },
});

export default theme;

// 站酷字体
// 14px/1.5 "PingFang SC","Lantinghei SC","Microsoft YaHei","HanHei SC","Helvetica Neue","Open Sans",Arial,"Hiragino Sans GB","微软雅黑",STHeiti,"WenQuanYi Micro Hei",SimSun,sans-serif;
