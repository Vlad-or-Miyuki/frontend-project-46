import globals from "globals";
import pluginJs from "@eslint/js";
import eslintConfigAirbnb from "eslint-config-airbnb";


export default [
  {
    languageOptions: { globals: globals.browser },
    plugins: {
      eslintConfigAirbnb
    } 
  },
  pluginJs.configs.recommended,
  
];