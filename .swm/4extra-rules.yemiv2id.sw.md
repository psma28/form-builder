---
title: 4.Extra rules
---
>  ***The following rules could change if all the involved developers agree to. If so, please be sure to change this section content.***

## &nbsp;Every React component will be wrapped and exported as a function

<SwmSnippet path="src/components/Layout/index.jsx" line="11">

---

&nbsp;

```
export function Layout({ children }) {
```

---

</SwmSnippet>

This rule will not apply to functions located inside hooks, constants will be used instead

<SwmSnippet path="/src/hooks/useComponents.jsx" line="1">

---

Functions inside useComponents hook

```javascript
import { useState } from "react";

export function useComponents() {
  const [components, setComponents] = useState({});
  const pushComponent = async (component) => {
    const { id } = component;
    if (components[id]) return;
    setComponents((prev) => ({ ...prev, [id]: component }));
  };
  const updateComponent = (id, props) => {
    setComponents((prev) => ({
      ...prev,
      [id]: { ...prev[id], ...props },
    }));
  };
  const getComponent = (id) => {
    return components[id];
  };

  const getSchema = () => {
    return components;
  };

  return { pushComponent, updateComponent, getComponent, getSchema };
}
```

---

</SwmSnippet>

## Try to name every component and function in English.

## If a component has any sort of state management asociated to it, then separate this logic into a separate hook.

The name of every hook should start with "use....". For example: useEvents, useComponents, etc.

## When posible, wrap every icon inside a new JSX component

<SwmSnippet path="/src/assets/icons/CloseIcon.jsx" line="1">

---

Close icon svg wrapped inside React component.

```javascript
export function CloseIcon({ style }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 30 30"
      className={style}
      width="32px"
      height="32px"
    >
      <path d="M 7 4 C 6.744125 4 6.4879687 4.0974687 6.2929688 4.2929688 L 4.2929688 6.2929688 C 3.9019687 6.6839688 3.9019687 7.3170313 4.2929688 7.7070312 L 11.585938 15 L 4.2929688 22.292969 C 3.9019687 22.683969 3.9019687 23.317031 4.2929688 23.707031 L 6.2929688 25.707031 C 6.6839688 26.098031 7.3170313 26.098031 7.7070312 25.707031 L 15 18.414062 L 22.292969 25.707031 C 22.682969 26.098031 23.317031 26.098031 23.707031 25.707031 L 25.707031 23.707031 C 26.098031 23.316031 26.098031 22.682969 25.707031 22.292969 L 18.414062 15 L 25.707031 7.7070312 C 26.098031 7.3170312 26.098031 6.6829688 25.707031 6.2929688 L 23.707031 4.2929688 C 23.316031 3.9019687 22.682969 3.9019687 22.292969 4.2929688 L 15 11.585938 L 7.7070312 4.2929688 C 7.5115312 4.0974687 7.255875 4 7 4 z" />{" "}
    </svg>
  );
}
```

---

</SwmSnippet>

## The first letter of any fuction should be in lower case, except if it is a component or the first word is a proper name.

<SwmSnippet path="/src/components/BlankComponent/index.jsx" line="1">

---

Component name starts with capital letter

```javascript
export function BlankComponent() {
```

---

</SwmSnippet>

<SwmSnippet path="/src/utils/arrayTools.js" line="1">

---

Function name starts with lower case letter

```javascript
export function arrayEquals(a, b) {
```

---

</SwmSnippet>

<SwmMeta version="3.0.0" repo-id="Z2l0aHViJTNBJTNBZm9ybS1idWlsZGVyJTNBJTNBcHNtYTI4" repo-name="form-builder"><sup>Powered by [Swimm](https://app.swimm.io/)</sup></SwmMeta>
