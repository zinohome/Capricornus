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
  "a,abbr,acronym,address,applet,article,aside,audio,b,big,blockquote,body,canvas,caption,center,cite,code,dd,del,details,dfn,div,dl,dt,em,embed,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,header,hgroup,html,i,iframe,img,ins,kbd,label,legend,li,mark,menu,nav,object,ol,output,p,pre,q,ruby,s,samp,section,small,span,strike,strong,sub,summary,sup,table,tbody,td,tfoot,th,thead,time,tr,tt,u,ul,var,video{padding:0;border:0;margin:0;font:inherit;font-size:100%;vertical-align:baseline}button,input,select,textarea{border-radius:0;font-family:inherit}input[type=text]::-ms-clear{display:none}article,aside,details,figcaption,figure,footer,header,hgroup,main,menu,nav,section{display:block}body{line-height:1}sup{vertical-align:super}sub{vertical-align:sub}ol,ul{list-style:none}blockquote,q{quotes:none}blockquote::after,blockquote::before,q::after,q::before{content:\"\"}table{border-collapse:collapse;border-spacing:0}*{box-sizing:border-box}button{margin:0}html{font-size:100%}body{font-weight:400;font-family:'IBM Plex Sans','Helvetica Neue',Arial,sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility}code{font-family:'IBM Plex Mono',Menlo,'DejaVu Sans Mono','Bitstream Vera Sans Mono',Courier,monospace}strong{font-weight:600}@media screen and (-ms-high-contrast:active){svg{fill:ButtonText}}h1{font-size:var(--cds-productive-heading-06-font-size,2.625rem);font-weight:var(--cds-productive-heading-06-font-weight,300);line-height:var(--cds-productive-heading-06-line-height,1.199);letter-spacing:var(--cds-productive-heading-06-letter-spacing,0)}h2{font-size:var(--cds-productive-heading-05-font-size,2rem);font-weight:var(--cds-productive-heading-05-font-weight,400);line-height:var(--cds-productive-heading-05-line-height,1.25);letter-spacing:var(--cds-productive-heading-05-letter-spacing,0)}h3{font-size:var(--cds-productive-heading-04-font-size,1.75rem);font-weight:var(--cds-productive-heading-04-font-weight,400);line-height:var(--cds-productive-heading-04-line-height,1.28572);letter-spacing:var(--cds-productive-heading-04-letter-spacing,0)}h4{font-size:var(--cds-productive-heading-03-font-size,1.25rem);font-weight:var(--cds-productive-heading-03-font-weight,400);line-height:var(--cds-productive-heading-03-line-height,1.4);letter-spacing:var(--cds-productive-heading-03-letter-spacing,0)}h5{font-size:var(--cds-productive-heading-02-font-size,1rem);font-weight:var(--cds-productive-heading-02-font-weight,600);line-height:var(--cds-productive-heading-02-line-height,1.375);letter-spacing:var(--cds-productive-heading-02-letter-spacing,0)}h6{font-size:var(--cds-productive-heading-01-font-size,.875rem);font-weight:var(--cds-productive-heading-01-font-weight,600);line-height:var(--cds-productive-heading-01-line-height,1.28572);letter-spacing:var(--cds-productive-heading-01-letter-spacing,.16px)}p{font-size:var(--cds-body-long-02-font-size,1rem);font-weight:var(--cds-body-long-02-font-weight,400);line-height:var(--cds-body-long-02-line-height,1.5);letter-spacing:var(--cds-body-long-02-letter-spacing,0)}a{color:#0f62fe}em{font-style:italic}@-webkit-keyframes skeleton{0%{opacity:.3;-webkit-transform:scaleX(0);transform:scaleX(0);-webkit-transform-origin:left;transform-origin:left}20%{opacity:1;-webkit-transform:scaleX(1);transform:scaleX(1);-webkit-transform-origin:left;transform-origin:left}28%{-webkit-transform:scaleX(1);transform:scaleX(1);-webkit-transform-origin:right;transform-origin:right}51%{-webkit-transform:scaleX(0);transform:scaleX(0);-webkit-transform-origin:right;transform-origin:right}58%{-webkit-transform:scaleX(0);transform:scaleX(0);-webkit-transform-origin:right;transform-origin:right}82%{-webkit-transform:scaleX(1);transform:scaleX(1);-webkit-transform-origin:right;transform-origin:right}83%{-webkit-transform:scaleX(1);transform:scaleX(1);-webkit-transform-origin:left;transform-origin:left}96%{-webkit-transform:scaleX(0);transform:scaleX(0);-webkit-transform-origin:left;transform-origin:left}100%{opacity:.3;-webkit-transform:scaleX(0);transform:scaleX(0);-webkit-transform-origin:left;transform-origin:left}}@keyframes skeleton{0%{opacity:.3;-webkit-transform:scaleX(0);transform:scaleX(0);-webkit-transform-origin:left;transform-origin:left}20%{opacity:1;-webkit-transform:scaleX(1);transform:scaleX(1);-webkit-transform-origin:left;transform-origin:left}28%{-webkit-transform:scaleX(1);transform:scaleX(1);-webkit-transform-origin:right;transform-origin:right}51%{-webkit-transform:scaleX(0);transform:scaleX(0);-webkit-transform-origin:right;transform-origin:right}58%{-webkit-transform:scaleX(0);transform:scaleX(0);-webkit-transform-origin:right;transform-origin:right}82%{-webkit-transform:scaleX(1);transform:scaleX(1);-webkit-transform-origin:right;transform-origin:right}83%{-webkit-transform:scaleX(1);transform:scaleX(1);-webkit-transform-origin:left;transform-origin:left}96%{-webkit-transform:scaleX(0);transform:scaleX(0);-webkit-transform-origin:left;transform-origin:left}100%{opacity:.3;-webkit-transform:scaleX(0);transform:scaleX(0);-webkit-transform-origin:left;transform-origin:left}}.bx--content-switcher,:host(bx-content-switcher){display:flex;width:100%;height:2.5rem;justify-content:space-evenly}.bx--content-switcher--sm,:host(bx-content-switcher[size=sm]){height:2rem}.bx--content-switcher--lg,.bx--content-switcher--xl,:host(bx-content-switcher[size=xl]){height:3rem}.bx--content-switcher-btn{box-sizing:border-box;padding:0;border:0;margin:0;font-family:inherit;font-size:100%;vertical-align:baseline;font-size:var(--cds-body-short-01-font-size,.875rem);font-weight:var(--cds-body-short-01-font-weight,400);line-height:var(--cds-body-short-01-line-height,1.28572);letter-spacing:var(--cds-body-short-01-letter-spacing,.16px);outline:2px solid transparent;outline-offset:-2px;position:relative;display:inline-flex;overflow:hidden;width:100%;align-items:center;padding:.5rem 1rem;border:none;border-top:.0625rem solid var(--cds-border-inverse,#161616);border-bottom:.0625rem solid var(--cds-border-inverse,#161616);margin:0;background-color:transparent;color:var(--cds-text-secondary,#525252);text-align:left;text-decoration:none;transition:all 70ms cubic-bezier(.2,0,.38,.9);white-space:nowrap}.bx--content-switcher-btn *,.bx--content-switcher-btn ::after,.bx--content-switcher-btn ::before{box-sizing:inherit}.bx--content-switcher-btn:focus{z-index:3;border-color:var(--cds-focus,#0f62fe);box-shadow:inset 0 0 0 2px var(--cds-focus,#0f62fe),inset 0 0 0 3px var(--cds-focus-inset,#fff)}.bx--content-switcher-btn:hover{color:var(--cds-text-primary,#161616);cursor:pointer}.bx--content-switcher-btn:active,.bx--content-switcher-btn:hover{z-index:3;background-color:var(--cds-layer-hover,#e5e5e5);color:var(--cds-text-primary,#161616)}.bx--content-switcher-btn:disabled{border-color:var(--cds-border-disabled,#f4f4f4);background-color:transparent;color:var(--cds-text-disabled,#c6c6c6)}.bx--content-switcher-btn:disabled:hover{cursor:not-allowed}.bx--content-switcher-btn:disabled:first-child,.bx--content-switcher-btn:disabled:last-child{border-color:var(--cds-border-disabled,#f4f4f4)}.bx--content-switcher-btn:first-child{border-left:.0625rem solid var(--cds-border-inverse,#161616);border-bottom-left-radius:.25rem;border-top-left-radius:.25rem}.bx--content-switcher-btn:last-child{border-right:.0625rem solid var(--cds-border-inverse,#161616);border-bottom-right-radius:.25rem;border-top-right-radius:.25rem}.bx--content-switcher--selected,.bx--content-switcher--selected:first-child,.bx--content-switcher--selected:last-child{border:0}.bx--content-switcher-btn::before{position:absolute;z-index:2;left:0;display:block;width:.0625rem;height:1rem;background-color:var(--cds-border-subtle,#e0e0e0);content:\"\"}.bx--content-switcher-btn:first-of-type::before{display:none}.bx--content-switcher--selected+.bx--content-switcher-btn::before,.bx--content-switcher--selected::before,.bx--content-switcher-btn:focus+.bx--content-switcher-btn::before,.bx--content-switcher-btn:focus::before,.bx--content-switcher-btn:hover+.bx--content-switcher-btn::before,.bx--content-switcher-btn:hover::before{background-color:transparent}.bx--content-switcher-btn:disabled::before,.bx--content-switcher-btn:disabled:hover+.bx--content-switcher-btn:disabled::before{background-color:var(--cds-border-disabled,#f4f4f4)}.bx--content-switcher-btn.bx--content-switcher--selected:disabled+.bx--content-switcher-btn::before,.bx--content-switcher-btn.bx--content-switcher--selected:disabled:hover+.bx--content-switcher-btn::before{background-color:transparent}.bx--content-switcher__icon{fill:var(--cds-icon-secondary,#525252);transition:fill 70ms cubic-bezier(.2,0,.38,.9)}.bx--content-switcher__icon+span{margin-left:.5rem}.bx--content-switcher__label{overflow:hidden;max-width:100%;text-overflow:ellipsis;white-space:nowrap}.bx--content-switcher-btn:focus .bx--content-switcher__icon,.bx--content-switcher-btn:hover .bx--content-switcher__icon{fill:var(--cds-icon-primary,#161616)}.bx--content-switcher-btn.bx--content-switcher--selected{z-index:3;background-color:var(--cds-layer-selected-inverse,#161616);color:var(--cds-text-inverse,#fff)}.bx--content-switcher-btn.bx--content-switcher--selected:disabled{background-color:var(--cds-layer-selected-disabled,#8d8d8d);color:var(--cds-text-disabled,#c6c6c6)}.bx--content-switcher-btn.bx--content-switcher--selected .bx--content-switcher__icon{fill:var(--cds-icon-inverse,#fff)}@media screen and (-ms-high-contrast:active),(forced-colors:active),(prefers-contrast){.bx--content-switcher-btn:focus{color:Highlight;outline:1px solid Highlight}}:host(bx-content-switcher-item){width:100%;outline:0}:host(bx-content-switcher-item) .bx--content-switcher-btn{height:100%}:host(bx-content-switcher-item) .bx--content-switcher-btn:first-child,:host(bx-content-switcher-item) .bx--content-switcher-btn:last-child{border-radius:0;border-left:none;border-right:none}:host(bx-content-switcher-item) .bx--content-switcher-btn::before{content:\"\";display:block;height:1rem;width:.0625rem;background-color:var(--cds-ui-03,#e0e0e0);position:absolute;z-index:2;left:0}:host(bx-content-switcher-item) .bx--content-switcher-btn.bx--content-switcher--selected::before,:host(bx-content-switcher-item) .bx--content-switcher-btn:focus::before,:host(bx-content-switcher-item) .bx--content-switcher-btn:hover::before{background-color:transparent}:host(bx-content-switcher-item) .bx--content-switcher-btn:disabled{border-top-color:var(--cds-ui-05,#161616);border-bottom-color:var(--cds-ui-05,#161616)}:host(bx-content-switcher-item[hide-divider]) .bx--content-switcher-btn::before{background-color:transparent}:host(bx-content-switcher-item:first-of-type) .bx--content-switcher-btn{border-top-left-radius:.25rem;border-bottom-left-radius:.25rem;border-left:.0625rem solid var(--cds-ui-05,#161616)}:host(bx-content-switcher-item:first-of-type) .bx--content-switcher-btn::before{content:none}:host(bx-content-switcher-item:first-of-type) .bx--content-switcher-btn.bx--content-switcher--selected{border-left:none}:host(bx-content-switcher-item:last-of-type) .bx--content-switcher-btn{border-top-right-radius:.25rem;border-bottom-right-radius:.25rem;border-right:.0625rem solid var(--cds-ui-05,#161616)}:host(bx-content-switcher-item:last-of-type) .bx--content-switcher-btn.bx--content-switcher--selected{border-right:none}",
]);
