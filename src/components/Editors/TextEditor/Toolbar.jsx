import React from "react";
import { TextEditorContext } from "./Context";
import toolTypes from "./toolTypes";
import ButtonSeparator from "./ButtonSeparator";
import { Button } from "reactstrap";
import FilePicker from "./FilePicker";
export default function ToolBar(props) {
  const { getFileInputProps, handleToolClick } =
    React.useContext(TextEditorContext);
  return (
    <>
      <FilePicker {...getFileInputProps()} />
      {Object.keys(toolTypes).map((type, index) => {
        return (
          <React.Fragment key={type}>
            {toolTypes[type]?.map((tool) => {
              return (
                <Button
                  title={tool?.label}
                  type="button"
                  className={`btn btn-icon text-muted m-0`}
                  key={tool?.style}
                  onClick={(e) => handleToolClick(tool)}
                >
                  {tool.icon ? <i className={tool.icon} /> : tool?.label}
                </Button>
              );
            })}
            {index < Object.keys(toolTypes).length - 1 && <ButtonSeparator />}
          </React.Fragment>
        );
      })}
    </>
  );
}
