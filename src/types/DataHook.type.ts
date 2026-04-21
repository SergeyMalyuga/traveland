import { Hooks } from "../constants/consts.ts";

export type DataHook = (typeof Hooks)[keyof typeof Hooks];
