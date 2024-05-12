import { createContextId } from "@builder.io/qwik";
import type { Theme } from "~/typescript/types/Theme";

export const ctx = createContextId<{ theme: Theme }>("theme");
