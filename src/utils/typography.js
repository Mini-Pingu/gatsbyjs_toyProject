import Typography from "typography";
import kirkhamTheme from "typography-theme-kirkham";
import fairyGateTheme from "typography-theme-fairy-gates";

// const typography = new Typography(fairyGateTheme);
const typography = new Typography(kirkhamTheme);

export default typography;
export const { scale, rhythm, options } = typography;
