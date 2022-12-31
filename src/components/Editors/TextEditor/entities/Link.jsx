import { EditorState, Modifier } from "draft-js";
import { ENTITY_NAME } from "./entityNames";
const findLinkEntities = (contentBlock, callback, contentState) => {
  contentBlock.findEntityRanges((character) => {
    const entityKey = character.getEntity();
    return (
      entityKey !== null &&
      contentState.getEntity(entityKey).getType() === "LINK"
    );
  }, callback);
};
export const textLinkDecorator = {
  strategy: findLinkEntities,
  component: Link,
};
export const handleCreateLink = (editorState) => {
  let link = window.prompt("Paste the link bellow:");
  if (link) {
    let linkText = window.prompt("Paste the link-text below:");
    if (linkText) {
      const currentContent = editorState.getCurrentContent();
      currentContent.createEntity(ENTITY_NAME.LINK, "MUTABLE", {
        href: link,
        linkText,
      });
      let entityKey = currentContent.getLastCreatedEntityKey();
      const selection = editorState.getSelection();
      const contentWithTextWithEntity = Modifier.replaceText(
        currentContent,
        selection,
        linkText,
        null,
        entityKey
      );
      return EditorState.set(
        editorState,
        { currentContent: contentWithTextWithEntity },
        "create-text-link"
      );
    }
  }
};
export default function Link(props) {
  let data = props.contentState.getEntity(props.entityKey).getData();
  if (!!data.href) {
    return (
      <a
        href={data.href}
        title={data.linkText}
        target="_blank"
        rel="noreferrer"
      >
        {data.linkText || data.href}
      </a>
    );
  }
  return null;
}
