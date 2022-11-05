import { extendTheme, ITheme, ICustomTheme } from "native-base";
import colors from "./colors";
import config from "./config";
import fonts from "./fonts";
import fontSizes from "./fontSizes";

// theme
const customTheme = extendTheme({
    colors: colors,
    fontSizes: fontSizes,
    fonts: fonts,
    config: config,
})

type CustomThemeType = typeof customTheme;

declare module 'native-base' {
    interface ICustomTheme extends CustomThemeType {}
}
export default customTheme;