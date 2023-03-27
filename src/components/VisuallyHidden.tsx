import * as React from "react";
import s9 from "style9";

const classNames = s9.create({
  base: {
    border: "0",
    // @ts-expect-error - for old browsers
    clip: "rect(0 0 0 0)",
    clipPath: "inset(50%)",
    height: "1px",
    margin: "0 -1px -1px 0",
    overflow: "hidden",
    padding: "0",
    position: "absolute",
    width: "1px",
    whiteSpace: "nowrap",
    wordWrap: "normal",
    opacity: 0,
  },
  focusable: {
    ":active": {
      // @ts-expect-error - for old browsers
      clip: "auto",
      clipPath: "none",
      height: "auto",
      margin: "0",
      overflow: "visible",
      position: "static",
      width: "auto",
      whiteSpace: "inherit",
      opacity: 1,
    },
    ":focus": {
      // @ts-expect-error - for old browsers
      clip: "auto",
      clipPath: "none",
      height: "auto",
      margin: "0",
      overflow: "visible",
      position: "static",
      width: "auto",
      whiteSpace: "inherit",
      opacity: 1,
    },
  },
});

export interface VisuallyHiddenProps
  extends React.ComponentPropsWithoutRef<"div"> {
  /** The content to hide inside `<VisuallyHidden>` */
  children: React.ReactNode;
  /**
   * Should the element become visible when focused, e.g., skip links
   */
  isFocusable?: true;
  /**
   * An array of `Style`s created by `style9.create()`.
   * WARNING: **_do not_** pass simple CSS-in-JS object.
   * The items in the array must be created with Style9's
   * `create` function.
   * The array can also hold falsy values to assist with
   * conditional inclusion of `Style`s
   *
   * @example
   * ```ts
   * const { foo, bar, } = s9.create({ foo: { ... }, bar: { ... }, });
   * <VisuallyHidden styleExtend={[ someCondition && foo, bar, ]} />
   * ```
   */
  styleExtend?: any;
}

export const DEFAULT_ELEMENT = "span";
type DefaultElement = typeof DEFAULT_ELEMENT;

function VisuallyHidden({
  children = null,
  isFocusable,
  styleExtend = [],
  ...attrs
}: VisuallyHiddenProps) {
  return (
    <div
      className={s9(
        classNames.base,
        isFocusable && classNames.focusable,
        ...styleExtend
      )}
      {...attrs}
    >
      {children}
    </div>
  );
}

export default VisuallyHidden;
