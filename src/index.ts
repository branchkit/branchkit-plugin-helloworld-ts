import { Plugin } from "@branchkit/plugin-sdk-ts";
import type { GreetParams } from "./actions_gen.js";

const plugin = new Plugin();

plugin.handleAction<GreetParams>("hello.greet", async (req) => {
  const name = req.params.name ?? "BranchKit";
  await plugin.call("input.type_text", { text: `Hello, ${name}!` });
  return { status: "ok" };
});

await plugin.run();
