import React from "react";
import {
  RankedTester,
  rankWith,
  uiTypeIs,
  LayoutProps,
  Layout,
  TesterContext,
  JsonFormsRendererRegistryEntry,
} from "@jsonforms/core";
import { withJsonFormsLayoutProps } from "@jsonforms/react";
import Button from "../ui/Button";

// Define your custom layout
const GridLayout = ({ uischema, renderers, schema, path }: LayoutProps) => {
  const layout = uischema as Layout & { label?: string };
  if (!layout || !layout.elements) {
    console.error("Invalid UI schema:", uischema);
    return null;
  }

  const elements = layout.elements || [];

  return (
    <div className="p-10 bg-base-100 rounded-badge shadow-md">
      <div className="prose">
        {layout.label && (
          <h2 style={{ marginBottom: "16px" }}>{layout.label}</h2>
        )}
      </div>
      <div className="mt-10">
        {elements.map((element, index) => {
          if (!element.type) {
            console.error(
              `Element at index ${index} is missing a 'type' property`,
              element
            );
            return null;
          }

          const context: TesterContext = {
            rootSchema: schema,
            config: {},
          };

          const matchedRenderer = (
            renderers as JsonFormsRendererRegistryEntry[]
          ).find((r) => r.tester(element, schema, context) > 0);

          return (
            <div key={`${index.toString()}`}>
              {matchedRenderer &&
                React.createElement(matchedRenderer.renderer, {
                  uischema: element,
                  schema,
                  path,
                  key: `${path}-${index}`,
                })}
            </div>
          );
        })}
      </div>
      <div className="w-full justify-end flex mt-10 gap-2">
        <Button label="Cancel" size={"large"} variant={"grey"} />
        <Button label="Save" size={"large"} />
      </div>
    </div>
  );
};

// Enhance the layout with JSONForms props
const CustomGridLayout = withJsonFormsLayoutProps(GridLayout);

// Define a ranked tester to associate the renderer with a specific layout type
export const customGridLayoutTester: RankedTester = rankWith(
  4,
  uiTypeIs("CustomGridLayout")
);

// Export the custom layout
export default CustomGridLayout;
