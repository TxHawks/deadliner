import * as React from "react";
import VisuallyHidden from "@/components/VisuallyHidden";
import s9 from "style9";

import type { IconName } from "@/components/IconName";

const c = s9.create({
  base: {
    "--_icn-c": "var(--icon-color-override, var(--_icn-dflt-c))",
    "--_icn-c2": "var(--icon--secondary-color, transparent)",
    height: "1em",
    width: "1em",
  },
  inheritVariant: { "--_icn-dflt-c": "currenColor" },
  brandVariant: { "--_icn-dflt-c": "rgb(11,104,255)" },
  brandInverseVariant: { "--_icn-dflt-c": "rgb(169,210,255)	" },
  neutralVariant: { "--_icn-dflt-c": "rgb(115,115,115)" },
  inverseVariant: { "--_icn-dflt-c": "rgb(243,243,243)" },
  dangerVariant: { "--_icn-dflt-c": "rgb(197,9,22)	" },
  successVariant: { "--_icn-dflt-c": "rgb(57,133,54)	" },
});

export interface IconProps extends React.SVGAttributes<SVGSVGElement> {
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
   * <Icon styleExtend={[ someCondition && foo, bar, ]} />
   * ```
   */
  styleExtend?: any;
  /** The icon to render */
  icon: IconName;
  /** The color of the icon */
  variant?:
    | "inherit"
    | "brand"
    | "neutral"
    | "inverse"
    | "brandInverse"
    | "danger"
    | "success";
  /**  An A11Y label for the icon */
  a11yLabel?: string;
  /**  An A11Y description for the icon */
  a11yDescription?: string;
  /** Make the icon keyboard accessible */
  focusable?: boolean;
  /** Visually hidden text for screen readers */
  screenReaderText?: React.ReactNode;
}

const Icon = React.forwardRef<SVGSVGElement, IconProps>(function Icon(
  {
    a11yLabel,
    a11yDescription,
    variant = "inherit",
    focusable = false,
    screenReaderText,
    icon,
    styleExtend = [],
    ...attrs
  }: IconProps,
  ref
) {
  const hasA11yText = a11yLabel || a11yDescription;
  const descriptionId = React.useId();
  const a11yAttrs = hasA11yText
    ? {
        "aria-label": a11yLabel,
        ...(a11yDescription ? { "aria-describedby": descriptionId } : {}),
      }
    : { "aria-hidden": true, role: "img" };
  const focusAttrs =
    focusable && hasA11yText
      ? { focusable: true }
      : { focusable: false, tabIndex: -1 };
  const desc = a11yDescription ? (
    <desc id={descriptionId}>{a11yDescription}</desc>
  ) : null;
  const variantClass = `${variant}Variant` as `${typeof variant}Variant`;

  if (focusable && !(a11yDescription || a11yLabel)) {
    console.error(
      `An "${icon}" icon is set to be focusable but has no a11y label or description\n`,
      'The "focusable" attribute will not be assigned'
    );
  }

  return (
    <>
      <svg
        ref={ref}
        className={s9(c.base, c[variantClass], ...styleExtend)}
        {...focusAttrs}
        {...attrs}
        {...a11yAttrs}
      >
        {desc}
        <use xlinkHref={`#icn-${icon}`} />
      </svg>
      {screenReaderText ? (
        <VisuallyHidden>{screenReaderText}</VisuallyHidden>
      ) : null}
    </>
  );
});

export default Icon;
