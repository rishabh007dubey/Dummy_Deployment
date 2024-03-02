import 'react';

declare module 'react' {
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    // Extends React's HTMLAttributes
    // See https://reactjs.org/docs/dom-elements.html#htmlattributes
  }
  interface SVGProps<T> extends SVGProps<SVGSVGElement> {
    // Extends React's SVGProps
    // See https://reactjs.org/docs/dom-elements.html#svgprops
  }

  interface IntrinsicElements {
    // Add the elements and their attributes here
    // For example:
    // 'html': React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLHtmlElement>, HTMLHtmlElement>;
    // 'body': React.DetailedHTMLProps<React.HTMLAttributes<HTMLBodyElement>, HTMLBodyElement>;
  }
}
