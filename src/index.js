import { Application } from "stimulus";
import pretty from "pretty";

function nextFrame() {
  return new Promise(resolve => window.requestAnimationFrame(resolve));
}

function findControllerName(html) {
  const matches = html.match(/data-controller="(.*)"/);

  if (matches) {
    return matches[1];
  }

  throw new Error(
    "Invalid fixture html, couldn't find data-controller attribute"
  );
}

function stimulusFixture(html, controllerClass) {
  const name = findControllerName(html);

  document.body.outerHTML = html;
  const application = Application.start(document.body);
  application.register(name, controllerClass);

  return nextFrame();
}

const documentHtml = () => pretty(document.body.innerHTML);

module.exports = {
  stimulusFixture, documentHtml
};
