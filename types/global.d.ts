import type {
  ComponentRenderProxy,
  VNode,
  VNodeChild,
  ComponentPublicInstance,
  FunctionalComponent,
  PropType as VuePropType,
} from 'vue';
declare type PropType<T> = VuePropType<T>;
declare type VueNode = VNodeChild | JSX.Element;

declare type TimeoutHandle = ReturnType<typeof setTimeout>;
declare type IntervalHandle = ReturnType<typeof setInterval>;

declare interface ChangeEvent extends Event {
  target: HTMLInputElement;
}

declare interface WheelEvent {
  path?: EventTarget[];
}
interface ImportMetaEnv extends ViteEnv {
  __: unknown;
}

declare function parseInt(s: string | number, radix?: number): number;

declare function parseFloat(string: string | number): number;

namespace JSX {
  // tslint:disable no-empty-interface
  type Element = VNode;
  // tslint:disable no-empty-interface
  type ElementClass = ComponentRenderProxy;
  interface ElementAttributesProperty {
    $props: any;
  }
  interface IntrinsicElements {
    [elem: string]: any;
  }
  interface IntrinsicAttributes {
    [elem: string]: any;
  }
}

declare module "vue" {
  export type JSXComponent<Props = any> =
    | { new (): ComponentPublicInstance<Props> }
    | FunctionalComponent<Props>;
}
