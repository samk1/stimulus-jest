import { stimulusFixture, documentHtml } from "..";
import HelloController from "./hello_controller";

describe("HelloController", () => {
  beforeEach(() =>
    stimulusFixture(
      `
      <div data-controller="hello">
        <h1 data-target="hello.output"></h1>
      </div>
    `,
      HelloController
    )
  );

  it("renders Hello Stimulus into the output target", async () => {
    expect(document.querySelector('[data-target="hello.output"]').textContent).toBe("Hello, Stimulus!");

    expect(documentHtml()).toMatchInlineSnapshot(
      `
      "<div data-controller=\\"hello\\">
        <h1 data-target=\\"hello.output\\">Hello, Stimulus!</h1>
      </div>"
    `
    );
  });
});
