import React from "react";
import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

export function ExampleTabs({ children }) {
  return (
    <Tabs
      defaultValue="annotation-based"
      groupId="coding-approach"
      values={[
        { label: "Annotation-based", value: "annotation-based" },
        { label: "Code-first", value: "code-first" },
        { label: "Schema-first", value: "schema-first" },
      ]}
    >
      {children}
    </Tabs>
  );
}

function Annotation({ children }) {
  return <TabItem value="annotation-based">{children}</TabItem>;
}

function Code({ children }) {
  return <TabItem value="code-first">{children}</TabItem>;
}

function Schema({ children }) {
  return <TabItem value="schema-first">{children}</TabItem>;
}

ExampleTabs.Tab = TabItem;
