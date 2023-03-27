// eslint-disable-next-line import/no-extraneous-dependencies, @typescript-eslint/no-unused-vars
import * as S9 from 'style9';

type CssCustomPropPattern = `--${string}`;

interface InputNumberProp { display: 'none', }

declare module 'style9' {
  export interface CustomProperties {
    [key: CssCustomPropPattern]: string | number;
    'WebkitLineClamp'?: `${number}`;
    'WebkitBoxOrient': 'vertical';
    'WebkitBoxDecorationBreak':
    | 'clone'
    | 'slice'
    | 'inherit'
    | 'initial'
    | 'revert'
    | 'unset';
    '::-webkit-outer-spin-button'?: InputNumberProp;
    '::-webkit-inner-spin-button'?: InputNumberProp;
  }
}
