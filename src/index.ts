import { Plugin } from "@branchkit/plugin-sdk-ts";
import type { GreetParams } from "./actions_gen.js";

const plugin = new Plugin();

plugin.handleAction<GreetParams>("helloworld.greet", async (req) => {
  const name = req.params.name ?? "BranchKit";
  await plugin.call("input.type_text", { text: `Hello, ${name}!` });
  return { status: "ok" };
});

plugin.handle("render_settings", async () => {
  return {
    html: `<div style="padding: 16px; font-family: system-ui;">
  <h2 style="margin: 0 0 12px 0;">Hello World Plugin</h2>
  <p style="color: #888; margin: 0 0 16px 0;">A minimal BranchKit plugin that types a greeting at the cursor.</p>

  <h3 style="margin: 0 0 8px 0;">Try it out</h3>
  <table style="border-collapse: collapse; width: 100%;">
    <tr>
      <td style="padding: 8px 12px; border-bottom: 1px solid #333;"><strong>Keybind</strong></td>
      <td style="padding: 8px 12px; border-bottom: 1px solid #333;"><kbd>Alt+Shift+H</kbd></td>
      <td style="padding: 8px 12px; border-bottom: 1px solid #333; color: #888;">Types "Hello, BranchKit!"</td>
    </tr>
    <tr>
      <td style="padding: 8px 12px; border-bottom: 1px solid #333;"><strong>Voice</strong></td>
      <td style="padding: 8px 12px; border-bottom: 1px solid #333;"><em>"hello branchkit"</em></td>
      <td style="padding: 8px 12px; border-bottom: 1px solid #333; color: #888;">Types "Hello, BranchKit!"</td>
    </tr>
    <tr>
      <td style="padding: 8px 12px;"><strong>Voice</strong></td>
      <td style="padding: 8px 12px;"><em>"hello Alice"</em></td>
      <td style="padding: 8px 12px; color: #888;">Types "Hello, Alice!"</td>
    </tr>
  </table>

  <p style="color: #666; margin: 16px 0 0 0; font-size: 13px;">
    Open a text editor first — the greeting is typed at your cursor position.
  </p>
</div>`,
  };
});

await plugin.run();
