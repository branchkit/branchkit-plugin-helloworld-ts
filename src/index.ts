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

  <h3 style="margin: 0 0 8px 0;">Keybind</h3>
  <p>Press <kbd style="background: #333; padding: 2px 6px; border-radius: 3px;">Alt+Shift+H</kbd> to type "Hello, BranchKit!" at your cursor.</p>

  <h3 style="margin: 16px 0 8px 0;">Voice Commands</h3>
  <p style="color: #888; margin: 0 0 8px 0;">Activate command mode (see Voice plugin settings for your keybind), then say:</p>
  <table style="border-collapse: collapse; width: 100%;">
    <tr>
      <td style="padding: 6px 12px; border-bottom: 1px solid #333;"><em>"hello branchkit"</em></td>
      <td style="padding: 6px 12px; border-bottom: 1px solid #333; color: #888;">Types "Hello, BranchKit!"</td>
    </tr>
    <tr>
      <td style="padding: 6px 12px;"><em>"hello [name]"</em></td>
      <td style="padding: 6px 12px; color: #888;">Types "Hello, [name]!" with any spoken name</td>
    </tr>
  </table>

  <p style="color: #666; margin: 16px 0 0 0; font-size: 13px;">
    Open a text editor first — the greeting is typed at your cursor position.
  </p>
</div>`,
  };
});

await plugin.run();
