/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { css } from 'lit-element';
export default css([
  "a,abbr,acronym,address,applet,article,aside,audio,b,big,blockquote,body,canvas,caption,center,cite,code,dd,del,details,dfn,div,dl,dt,em,embed,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,header,hgroup,html,i,iframe,img,ins,kbd,label,legend,li,mark,menu,nav,object,ol,output,p,pre,q,ruby,s,samp,section,small,span,strike,strong,sub,summary,sup,table,tbody,td,tfoot,th,thead,time,tr,tt,u,ul,var,video{padding:0;border:0;margin:0;font:inherit;font-size:100%;vertical-align:baseline}button,input,select,textarea{border-radius:0;font-family:inherit}input[type=text]::-ms-clear{display:none}article,aside,details,figcaption,figure,footer,header,hgroup,main,menu,nav,section{display:block}body{line-height:1}sup{vertical-align:super}sub{vertical-align:sub}ol,ul{list-style:none}blockquote,q{quotes:none}blockquote::after,blockquote::before,blockquote:host(bx-overflow-menu-body[direction=top]):after,q::after,q::before,q:host(bx-overflow-menu-body[direction=top]):after{content:\"\"}table{border-collapse:collapse;border-spacing:0}*{box-sizing:border-box}button{margin:0}html{font-size:100%}body{font-weight:400;font-family:'IBM Plex Sans','Helvetica Neue',Arial,sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility}code{font-family:'IBM Plex Mono',Menlo,'DejaVu Sans Mono','Bitstream Vera Sans Mono',Courier,monospace}strong{font-weight:600}@media screen and (-ms-high-contrast:active){svg{fill:ButtonText}}h1{font-size:var(--cds-productive-heading-06-font-size,2.625rem);font-weight:var(--cds-productive-heading-06-font-weight,300);line-height:var(--cds-productive-heading-06-line-height,1.199);letter-spacing:var(--cds-productive-heading-06-letter-spacing,0)}h2{font-size:var(--cds-productive-heading-05-font-size,2rem);font-weight:var(--cds-productive-heading-05-font-weight,400);line-height:var(--cds-productive-heading-05-line-height,1.25);letter-spacing:var(--cds-productive-heading-05-letter-spacing,0)}h3{font-size:var(--cds-productive-heading-04-font-size,1.75rem);font-weight:var(--cds-productive-heading-04-font-weight,400);line-height:var(--cds-productive-heading-04-line-height,1.28572);letter-spacing:var(--cds-productive-heading-04-letter-spacing,0)}h4{font-size:var(--cds-productive-heading-03-font-size,1.25rem);font-weight:var(--cds-productive-heading-03-font-weight,400);line-height:var(--cds-productive-heading-03-line-height,1.4);letter-spacing:var(--cds-productive-heading-03-letter-spacing,0)}h5{font-size:var(--cds-productive-heading-02-font-size,1rem);font-weight:var(--cds-productive-heading-02-font-weight,600);line-height:var(--cds-productive-heading-02-line-height,1.375);letter-spacing:var(--cds-productive-heading-02-letter-spacing,0)}h6{font-size:var(--cds-productive-heading-01-font-size,.875rem);font-weight:var(--cds-productive-heading-01-font-weight,600);line-height:var(--cds-productive-heading-01-line-height,1.28572);letter-spacing:var(--cds-productive-heading-01-letter-spacing,.16px)}p{font-size:var(--cds-body-long-02-font-size,1rem);font-weight:var(--cds-body-long-02-font-weight,400);line-height:var(--cds-body-long-02-line-height,1.5);letter-spacing:var(--cds-body-long-02-letter-spacing,0)}a{color:#0f62fe}em{font-style:italic}@-webkit-keyframes skeleton{0%{opacity:.3;-webkit-transform:scaleX(0);transform:scaleX(0);-webkit-transform-origin:left;transform-origin:left}20%{opacity:1;-webkit-transform:scaleX(1);transform:scaleX(1);-webkit-transform-origin:left;transform-origin:left}28%{-webkit-transform:scaleX(1);transform:scaleX(1);-webkit-transform-origin:right;transform-origin:right}51%{-webkit-transform:scaleX(0);transform:scaleX(0);-webkit-transform-origin:right;transform-origin:right}58%{-webkit-transform:scaleX(0);transform:scaleX(0);-webkit-transform-origin:right;transform-origin:right}82%{-webkit-transform:scaleX(1);transform:scaleX(1);-webkit-transform-origin:right;transform-origin:right}83%{-webkit-transform:scaleX(1);transform:scaleX(1);-webkit-transform-origin:left;transform-origin:left}96%{-webkit-transform:scaleX(0);transform:scaleX(0);-webkit-transform-origin:left;transform-origin:left}100%{opacity:.3;-webkit-transform:scaleX(0);transform:scaleX(0);-webkit-transform-origin:left;transform-origin:left}}@keyframes skeleton{0%{opacity:.3;-webkit-transform:scaleX(0);transform:scaleX(0);-webkit-transform-origin:left;transform-origin:left}20%{opacity:1;-webkit-transform:scaleX(1);transform:scaleX(1);-webkit-transform-origin:left;transform-origin:left}28%{-webkit-transform:scaleX(1);transform:scaleX(1);-webkit-transform-origin:right;transform-origin:right}51%{-webkit-transform:scaleX(0);transform:scaleX(0);-webkit-transform-origin:right;transform-origin:right}58%{-webkit-transform:scaleX(0);transform:scaleX(0);-webkit-transform-origin:right;transform-origin:right}82%{-webkit-transform:scaleX(1);transform:scaleX(1);-webkit-transform-origin:right;transform-origin:right}83%{-webkit-transform:scaleX(1);transform:scaleX(1);-webkit-transform-origin:left;transform-origin:left}96%{-webkit-transform:scaleX(0);transform:scaleX(0);-webkit-transform-origin:left;transform-origin:left}100%{opacity:.3;-webkit-transform:scaleX(0);transform:scaleX(0);-webkit-transform-origin:left;transform-origin:left}}.bx--assistive-text,.bx--visually-hidden{position:absolute;overflow:hidden;width:1px;height:1px;padding:0;border:0;margin:-1px;clip:rect(0,0,0,0);visibility:inherit;white-space:nowrap}.bx--body{box-sizing:border-box;padding:0;border:0;margin:0;font-family:inherit;font-size:100%;vertical-align:baseline;font-size:var(--cds-body-short-01-font-size,.875rem);font-weight:var(--cds-body-short-01-font-weight,400);line-height:var(--cds-body-short-01-line-height,1.28572);letter-spacing:var(--cds-body-short-01-letter-spacing,.16px);background-color:var(--cds-ui-background,#fff);color:var(--cds-text-01,#161616);line-height:1}.bx--body *,.bx--body ::after,.bx--body ::before,.bx--body :host(bx-overflow-menu-body):after{box-sizing:inherit}.bx--text-truncate--end{display:inline-block;overflow:hidden;width:100%;text-overflow:ellipsis;white-space:nowrap}.bx--text-truncate--front{display:inline-block;overflow:hidden;width:100%;direction:rtl;text-overflow:ellipsis;white-space:nowrap}.bx--overflow-menu,.bx--overflow-menu__trigger,:host(bx-overflow-menu){box-sizing:border-box;padding:0;border:0;margin:0;font-family:inherit;font-size:100%;vertical-align:baseline;display:inline-block;padding:0;border:0;-webkit-appearance:none;-moz-appearance:none;appearance:none;background:0 0;cursor:pointer;width:100%;box-sizing:border-box;padding:0;border:0;margin:0;font-family:inherit;font-size:100%;vertical-align:baseline;outline:2px solid transparent;outline-offset:-2px;position:relative;display:flex;width:2.5rem;height:2.5rem;align-items:center;justify-content:center;cursor:pointer;transition:outline 110ms cubic-bezier(0,0,.38,.9),background-color 110ms cubic-bezier(0,0,.38,.9)}.bx--overflow-menu *,.bx--overflow-menu ::after,.bx--overflow-menu ::before,.bx--overflow-menu :host(bx-overflow-menu-body):after,.bx--overflow-menu__trigger *,.bx--overflow-menu__trigger ::after,.bx--overflow-menu__trigger ::before,.bx--overflow-menu__trigger :host(bx-overflow-menu-body):after,:host(bx-overflow-menu) *,:host(bx-overflow-menu) ::after,:host(bx-overflow-menu) ::before,:host(bx-overflow-menu) :host(bx-overflow-menu-body):after,:host(bx-overflow-menu) :host(bx-overflow-menu-body[direction=top]):after{box-sizing:inherit}.bx--overflow-menu::-moz-focus-inner,.bx--overflow-menu__trigger::-moz-focus-inner,:host(bx-overflow-menu)::-moz-focus-inner{border:0}.bx--overflow-menu *,.bx--overflow-menu ::after,.bx--overflow-menu ::before,.bx--overflow-menu :host(bx-overflow-menu-body):after,.bx--overflow-menu__trigger *,.bx--overflow-menu__trigger ::after,.bx--overflow-menu__trigger ::before,.bx--overflow-menu__trigger :host(bx-overflow-menu-body):after,:host(bx-overflow-menu) *,:host(bx-overflow-menu) ::after,:host(bx-overflow-menu) ::before,:host(bx-overflow-menu) :host(bx-overflow-menu-body):after,:host(bx-overflow-menu) :host(bx-overflow-menu-body[direction=top]):after{box-sizing:inherit}.bx--overflow-menu:focus,.bx--overflow-menu__trigger:focus,:focus:host(bx-overflow-menu){outline:2px solid var(--cds-focus,#0f62fe);outline-offset:-2px}@media screen and (prefers-contrast){.bx--overflow-menu:focus,.bx--overflow-menu__trigger:focus,:focus:host(bx-overflow-menu){outline-style:dotted}}.bx--overflow-menu:hover,.bx--overflow-menu__trigger:hover,:hover:host(bx-overflow-menu){background-color:var(--cds-hover-ui,#e5e5e5)}.bx--overflow-menu--sm,:host(bx-overflow-menu)[size=sm]{width:2rem;height:2rem}.bx--overflow-menu--lg,.bx--overflow-menu--xl,:host(bx-overflow-menu)[size=xl]{width:3rem;height:3rem}.bx--overflow-menu__trigger.bx--tooltip--a11y.bx--tooltip__trigger:focus{outline:2px solid var(--cds-focus,#0f62fe);outline-offset:-2px}@media screen and (prefers-contrast){.bx--overflow-menu__trigger.bx--tooltip--a11y.bx--tooltip__trigger:focus{outline-style:dotted}}.bx--overflow-menu__trigger.bx--tooltip--a11y.bx--tooltip__trigger:focus svg{outline:0}.bx--overflow-menu--open:host(bx-overflow-menu),.bx--overflow-menu--open:host(bx-overflow-menu) .bx--overflow-menu__trigger,.bx--overflow-menu.bx--overflow-menu--open,.bx--overflow-menu.bx--overflow-menu--open .bx--overflow-menu__trigger{box-shadow:0 2px 6px var(--cds-shadow,rgba(0,0,0,.3));background-color:var(--cds-field-01,#f4f4f4);transition:none}.bx--overflow-menu--light.bx--overflow-menu--open,.bx--overflow-menu--light.bx--overflow-menu--open .bx--overflow-menu__trigger{background-color:var(--cds-field-02,#fff)}.bx--overflow-menu__icon{width:1rem;height:1rem;fill:var(--cds-icon-01,#161616)}.bx--overflow-menu-options,:host(bx-overflow-menu-body),:host(bx-overflow-menu-body):after,:host(bx-overflow-menu-body[direction=top]):after{box-sizing:border-box;padding:0;border:0;margin:0;font-family:inherit;font-size:100%;vertical-align:baseline;box-shadow:0 2px 6px var(--cds-shadow,rgba(0,0,0,.3));position:absolute;z-index:6000;top:32px;left:0;display:none;width:10rem;flex-direction:column;align-items:flex-start;background-color:var(--cds-field-01,#f4f4f4);list-style:none}.bx--overflow-menu-options *,.bx--overflow-menu-options ::after,.bx--overflow-menu-options ::before,.bx--overflow-menu-options :host(bx-overflow-menu-body):after,:host(bx-overflow-menu-body) *,:host(bx-overflow-menu-body) ::after,:host(bx-overflow-menu-body) ::before,:host(bx-overflow-menu-body) :host(bx-overflow-menu-body):after,:host(bx-overflow-menu-body) :host(bx-overflow-menu-body[direction=top]):after,:host(bx-overflow-menu-body):after *,:host(bx-overflow-menu-body):after ::after,:host(bx-overflow-menu-body):after ::before,:host(bx-overflow-menu-body):after :host(bx-overflow-menu-body):after,:host(bx-overflow-menu-body):after :host(bx-overflow-menu-body[direction=top]):after,:host(bx-overflow-menu-body[direction=top]):after *,:host(bx-overflow-menu-body[direction=top]):after ::after,:host(bx-overflow-menu-body[direction=top]):after ::before,:host(bx-overflow-menu-body[direction=top]):after :host(bx-overflow-menu-body):after{box-sizing:inherit}.bx--overflow-menu-options::after,:host(bx-overflow-menu-body)::after,:host(bx-overflow-menu-body[direction=top])::after{position:absolute;display:block;background-color:var(--cds-field-01,#f4f4f4);content:\"\";transition:background-color 110ms cubic-bezier(0,0,.38,.9)}.bx--overflow-menu--open:hover:host(bx-overflow-menu),.bx--overflow-menu.bx--overflow-menu--open:hover{background-color:var(--cds-field-01,#f4f4f4)}.bx--overflow-menu-options--light{background-color:var(--cds-field-02,#fff)}.bx--overflow-menu-options--light::after,.bx--overflow-menu-options--light:host(bx-overflow-menu-body[direction=top]):after{background-color:var(--cds-field-02,#fff)}.bx--overflow-menu--light.bx--overflow-menu--open:hover:host(bx-overflow-menu),.bx--overflow-menu.bx--overflow-menu--light.bx--overflow-menu--open:hover{background-color:var(--cds-field-02,#fff)}.bx--overflow-menu-options[data-floating-menu-direction=bottom]::after,:host(bx-overflow-menu-body)::after,:host(bx-overflow-menu-body):host(bx-overflow-menu-body[direction=top]):after{top:-.1875rem;left:0;width:2.5rem;height:.1875rem}.bx--overflow-menu-options[data-floating-menu-direction=top]::after,:host(bx-overflow-menu-body):host(bx-overflow-menu-body[direction=top])::after,[data-floating-menu-direction=top]:host(bx-overflow-menu-body)::after{bottom:-.5rem;left:0;width:2.5rem;height:.5rem}.bx--overflow-menu-options[data-floating-menu-direction=left]::after,[data-floating-menu-direction=left]:host(bx-overflow-menu-body)::after{top:0;right:-.375rem;width:.375rem;height:2.5rem}.bx--overflow-menu-options[data-floating-menu-direction=right]::after,[data-floating-menu-direction=right]:host(bx-overflow-menu-body)::after{top:0;left:-.375rem;width:.375rem;height:2.5rem}.bx--overflow-menu-options--sm.bx--overflow-menu-options[data-floating-menu-direction=bottom]::after,.bx--overflow-menu-options--sm.bx--overflow-menu-options[data-floating-menu-direction=top]::after,.bx--overflow-menu-options--sm:host(bx-overflow-menu-body)::after{width:2rem}.bx--overflow-menu-options--sm.bx--overflow-menu-options[data-floating-menu-direction=left]::after,.bx--overflow-menu-options--sm.bx--overflow-menu-options[data-floating-menu-direction=right]::after,.bx--overflow-menu-options--sm[data-floating-menu-direction=left]:host(bx-overflow-menu-body)::after,.bx--overflow-menu-options--sm[data-floating-menu-direction=right]:host(bx-overflow-menu-body)::after{height:2rem}.bx--overflow-menu-options--lg.bx--overflow-menu-options[data-floating-menu-direction=bottom]::after,.bx--overflow-menu-options--lg.bx--overflow-menu-options[data-floating-menu-direction=top]::after,.bx--overflow-menu-options--lg:host(bx-overflow-menu-body)::after,.bx--overflow-menu-options--xl.bx--overflow-menu-options[data-floating-menu-direction=bottom]::after,.bx--overflow-menu-options--xl.bx--overflow-menu-options[data-floating-menu-direction=top]::after,.bx--overflow-menu-options--xl:host(bx-overflow-menu-body)::after{width:3rem}.bx--overflow-menu-options--lg.bx--overflow-menu-options[data-floating-menu-direction=left]::after,.bx--overflow-menu-options--lg.bx--overflow-menu-options[data-floating-menu-direction=right]::after,.bx--overflow-menu-options--lg[data-floating-menu-direction=left]:host(bx-overflow-menu-body)::after,.bx--overflow-menu-options--lg[data-floating-menu-direction=right]:host(bx-overflow-menu-body)::after,.bx--overflow-menu-options--xl.bx--overflow-menu-options[data-floating-menu-direction=left]::after,.bx--overflow-menu-options--xl.bx--overflow-menu-options[data-floating-menu-direction=right]::after,.bx--overflow-menu-options--xl[data-floating-menu-direction=left]:host(bx-overflow-menu-body)::after,.bx--overflow-menu-options--xl[data-floating-menu-direction=right]:host(bx-overflow-menu-body)::after{height:3rem}.bx--overflow-menu--flip.bx--overflow-menu-options[data-floating-menu-direction=bottom]::after,.bx--overflow-menu--flip.bx--overflow-menu-options[data-floating-menu-direction=top]::after,.bx--overflow-menu--flip:host(bx-overflow-menu-body)::after{right:0;left:auto}.bx--overflow-menu--flip.bx--overflow-menu-options[data-floating-menu-direction=left]::after,.bx--overflow-menu--flip.bx--overflow-menu-options[data-floating-menu-direction=right]::after,.bx--overflow-menu--flip[data-floating-menu-direction=left]:host(bx-overflow-menu-body)::after,.bx--overflow-menu--flip[data-floating-menu-direction=right]:host(bx-overflow-menu-body)::after{top:auto;bottom:0}.bx--overflow-menu-options--open,:host(bx-overflow-menu-body[open]){display:flex}.bx--overflow-menu-options__content{width:100%}.bx--overflow-menu-options__option,:host(bx-overflow-menu-item){box-sizing:border-box;padding:0;border:0;margin:0;font-family:inherit;font-size:100%;vertical-align:baseline;display:flex;width:100%;height:2.5rem;align-items:center;padding:0;background-color:transparent;transition:background-color 110ms cubic-bezier(0,0,.38,.9)}.bx--overflow-menu-options__option *,.bx--overflow-menu-options__option ::after,.bx--overflow-menu-options__option ::before,.bx--overflow-menu-options__option :host(bx-overflow-menu-body):after,:host(bx-overflow-menu-item) *,:host(bx-overflow-menu-item) ::after,:host(bx-overflow-menu-item) ::before,:host(bx-overflow-menu-item) :host(bx-overflow-menu-body):after{box-sizing:inherit}.bx--overflow-menu-options--sm .bx--overflow-menu-options__option,.bx--overflow-menu-options--sm :host(bx-overflow-menu-item){height:2rem}.bx--overflow-menu-options--lg .bx--overflow-menu-options__option,.bx--overflow-menu-options--lg :host(bx-overflow-menu-item),.bx--overflow-menu-options--xl .bx--overflow-menu-options__option,.bx--overflow-menu-options--xl :host(bx-overflow-menu-item){height:3rem}.bx--overflow-menu--divider{border-top:1px solid var(--cds-ui-03,#e0e0e0)}.bx--overflow-menu--light .bx--overflow-menu--divider{border-top:1px solid var(--cds-decorative-01,#e0e0e0)}a.bx--overflow-menu-options__btn::before{display:inline-block;height:100%;content:\"\";vertical-align:middle}.bx--overflow-menu-options__btn{box-sizing:border-box;padding:0;border:0;margin:0;font-family:inherit;font-size:100%;vertical-align:baseline;font-size:var(--cds-body-short-01-font-size,.875rem);font-weight:var(--cds-body-short-01-font-weight,400);line-height:var(--cds-body-short-01-line-height,1.28572);letter-spacing:var(--cds-body-short-01-letter-spacing,.16px);outline:2px solid transparent;outline-offset:-2px;display:inline-flex;width:100%;max-width:11.25rem;height:100%;align-items:center;padding:0 1rem;border:none;background-color:transparent;color:var(--cds-text-02,#525252);cursor:pointer;font-weight:400;text-align:left;transition:outline 110ms cubic-bezier(0,0,.38,.9),background-color 110ms cubic-bezier(0,0,.38,.9),color 110ms cubic-bezier(0,0,.38,.9)}.bx--overflow-menu-options__btn *,.bx--overflow-menu-options__btn ::after,.bx--overflow-menu-options__btn ::before,.bx--overflow-menu-options__btn :host(bx-overflow-menu-body):after{box-sizing:inherit}.bx--overflow-menu-options__btn:hover{color:var(--cds-text-01,#161616)}.bx--overflow-menu-options__btn:focus{outline:2px solid var(--cds-focus,#0f62fe);outline-offset:-2px}@media screen and (prefers-contrast){.bx--overflow-menu-options__btn:focus{outline-style:dotted}}.bx--overflow-menu-options__btn::-moz-focus-inner{border:none}.bx--overflow-menu-options__btn svg{fill:var(--cds-icon-02,#525252)}.bx--overflow-menu-options__btn:hover svg{fill:var(--cds-icon-01,#161616)}.bx--overflow-menu-options__option-content{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.bx--overflow-menu-options__option:hover,:hover:host(bx-overflow-menu-item){background-color:var(--cds-hover-ui,#e5e5e5)}.bx--overflow-menu-options__option--danger .bx--overflow-menu-options__btn:focus,.bx--overflow-menu-options__option--danger .bx--overflow-menu-options__btn:hover,:host(bx-overflow-menu-item[danger]) .bx--overflow-menu-options__btn:focus,:host(bx-overflow-menu-item[danger]) .bx--overflow-menu-options__btn:hover{background-color:var(--cds-danger-01,#da1e28);color:var(--cds-text-04,#fff)}.bx--overflow-menu-options__option--danger .bx--overflow-menu-options__btn:focus svg,.bx--overflow-menu-options__option--danger .bx--overflow-menu-options__btn:hover svg,:host(bx-overflow-menu-item[danger]) .bx--overflow-menu-options__btn:focus svg,:host(bx-overflow-menu-item[danger]) .bx--overflow-menu-options__btn:hover svg{fill:currentColor}.bx--overflow-menu-options__option--disabled:hover,:hover:host(bx-overflow-menu-item[disabled]){background-color:var(--cds-ui-01,#f4f4f4);cursor:not-allowed}.bx--overflow-menu-options__option--disabled .bx--overflow-menu-options__btn,:host(bx-overflow-menu-item[disabled]) .bx--overflow-menu-options__btn{color:var(--cds-disabled-02,#c6c6c6);pointer-events:none}.bx--overflow-menu-options__option--disabled .bx--overflow-menu-options__btn:active,.bx--overflow-menu-options__option--disabled .bx--overflow-menu-options__btn:focus,.bx--overflow-menu-options__option--disabled .bx--overflow-menu-options__btn:hover,:host(bx-overflow-menu-item[disabled]) .bx--overflow-menu-options__btn:active,:host(bx-overflow-menu-item[disabled]) .bx--overflow-menu-options__btn:focus,:host(bx-overflow-menu-item[disabled]) .bx--overflow-menu-options__btn:hover{outline:2px solid transparent;outline-offset:-2px;background-color:var(--cds-ui-01,#f4f4f4)}.bx--overflow-menu-options__option--disabled .bx--overflow-menu-options__btn svg,:host(bx-overflow-menu-item[disabled]) .bx--overflow-menu-options__btn svg{fill:var(--cds-disabled-02,#c6c6c6)}.bx--overflow-menu--flip{left:-140px}.bx--overflow-menu--flip::before{left:145px}.bx--overflow-menu__container{display:inline-block}@media screen and (-ms-high-contrast:active),(forced-colors:active),(prefers-contrast){.bx--overflow-menu-options__btn:focus,.bx--overflow-menu:focus,:focus:host(bx-overflow-menu){color:Highlight;outline:1px solid Highlight}}@media screen and (-ms-high-contrast:active),(forced-colors:active),(prefers-contrast){.bx--overflow-menu svg,:host(bx-overflow-menu) svg{fill:ButtonText}}:host(bx-overflow-menu[disabled]){cursor:not-allowed}:host(bx-overflow-menu[disabled]) svg{fill:var(--cds-disabled-02,#c6c6c6);cursor:not-allowed}:host(bx-overflow-menu[disabled]:hover){background-color:transparent}:host(bx-overflow-menu[open]){background-color:var(--cds-ui-01,#f4f4f4);transition:none;box-shadow:0 2px 6px 0 rgba(0,0,0,.3)}:host(bx-overflow-menu[color-scheme=light][open]){background-color:var(--cds-ui-02,#fff)}:host(bx-overflow-menu-body[direction=top]){margin-top:0;margin-bottom:.25rem}:host(bx-overflow-menu-body[color-scheme=light]){background-color:var(--cds-ui-02,#fff)}:host(bx-overflow-menu-body[color-scheme=light])::after{background-color:var(--cds-ui-02,#fff)}:host(bx-overflow-menu-item){outline:0}",
]);
