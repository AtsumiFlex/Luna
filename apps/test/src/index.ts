import { Locales, LocalesEnum } from "@luna/core";

const test = LocalesEnum.parse(Locales.ChineseChina);
console.log(test.toString(), Locales.ChineseChina);
