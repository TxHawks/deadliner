import * as React from "react";
import s9 from "style9";

const classNames = s9.create({
  base: {
    "--contentWidth": "minmax(0, 100vw)",
    "--LayoutContainerGutter": "12px",
    "--inlineMargin": "auto",
    "--_lcbgc": "var(--LayoutContainerBackgroundColor, rgba(0,0,0,0))",
    backgroundColor: "var(--_lcbgc)",
    display: "grid",
    gridTemplateColumns:
      "[bleed-start] var(--inlineMargin) [gutter-start] var(--LayoutContainerGutter) [main-start] var(--contentWidth) [main-end] var(--LayoutContainerGutter) [gutter-end] var(--inlineMargin) [bleed-end]",
    rowGap: `var(--childSpacingDefault, 32px)`,
    width: "100%",

    "@media (min-width: 37.5em)": {
      "--contentWidth": `minmax(0, 552px)`, // 150 is 600px
      "--LayoutContainerGutter": "24px",
      rowGap: `40px`,
    },
    "@media (min-width: 48em)": {
      "--contentWidth": `minmax(0, 720px)`, // 192 is 768px
    },
    "@media (min-width: 64em)": {
      "--contentWidth": `minmax(0, 976px)`, // 256 is 1024px
    },
    "@media (min-width: 80em)": {
      "--contentWidth": `minmax(0, 1224px)`, // 320 is 1280px
      "--LayoutContainerGutter": "28px",
      rowGap: `56px`,
    },
    "@media (min-width: 102em)": {
      "--contentWidth": `minmax(0, 1544px)`, // 400 is 1600px
      rowGap: `28px`,
    },
  },
});

interface LayoutContainerProps extends React.ComponentPropsWithoutRef<"div"> {
  /**
   * A color value for the background of the entire row, which
   * will bleed out all the way to the edge of the screen (so not
   * just the contained layout area). Must be the output of the `color` macro.
   */
  bgc?: string;
  /** The Children to render inside the `<LayoutContainer>` */
  children?: React.ReactNode;
  /**
   * An array of `Style`s created by `style9.create()`.
   * WARNING: **_do not_** pass simple CSS-in-JS object.
   * The items in the array must be created with Style9's
   * `create` function.
   * The array can also hold falsy values to assist with
   * conditional inclusion of `Style`s:
   *
   * @example
   * ```ts
   * const { foo, bar, } = s9.create({ foo: { ... }, bar: { ... }, });
   * <LayoutContainer styleExtend={[ someCondition && foo, bar, ]} />
   * ```
   */
  styleExtend?: any;
}

export default function LayoutContainer(props: LayoutContainerProps) {
  const { bgc, children = null, style, styleExtend = [], ...attrs } = props;

  //////////////////////
  //  Dynamic Styles  //
  //////////////////////
  const backgroundColor = bgc
    ? { "--_lcbgc": `var(--LayoutContainerBackgroundColor, ${bgc})` }
    : {};

  return (
    <div
      className={s9(classNames.base, ...styleExtend)}
      style={{
        ...backgroundColor,
        ...style,
      }}
      {...attrs}
    >
      {children}
    </div>
  );
}
