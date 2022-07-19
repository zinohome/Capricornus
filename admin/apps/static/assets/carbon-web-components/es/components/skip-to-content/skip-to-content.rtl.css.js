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
  ".bx--text-truncate--end{display:inline-block;overflow:hidden;width:100%;text-overflow:ellipsis;white-space:nowrap}.bx--text-truncate--front{display:inline-block;overflow:hidden;width:100%;direction:ltr;text-overflow:ellipsis;white-space:nowrap}a,abbr,acronym,address,applet,article,aside,audio,b,big,blockquote,body,canvas,caption,center,cite,code,dd,del,details,dfn,div,dl,dt,em,embed,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,header,hgroup,html,i,iframe,img,ins,kbd,label,legend,li,mark,menu,nav,object,ol,output,p,pre,q,ruby,s,samp,section,small,span,strike,strong,sub,summary,sup,table,tbody,td,tfoot,th,thead,time,tr,tt,u,ul,var,video{padding:0;border:0;margin:0;font:inherit;font-size:100%;vertical-align:baseline}button,input,select,textarea{border-radius:0;font-family:inherit}input[type=text]::-ms-clear{display:none}article,aside,details,figcaption,figure,footer,header,hgroup,main,menu,nav,section{display:block}body{line-height:1}sup{vertical-align:super}sub{vertical-align:sub}ol,ul{list-style:none}blockquote,q{quotes:none}blockquote::after,blockquote::before,q::after,q::before{content:\"\"}table{border-collapse:collapse;border-spacing:0}*{box-sizing:border-box}button{margin:0}html{font-size:100%}body{font-weight:400;font-family:'IBM Plex Sans','Helvetica Neue',Arial,sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility}code{font-family:'IBM Plex Mono',Menlo,'DejaVu Sans Mono','Bitstream Vera Sans Mono',Courier,monospace}strong{font-weight:600}@media screen and (-ms-high-contrast:active){svg{fill:ButtonText}}h1{font-size:var(--cds-productive-heading-06-font-size,2.625rem);font-weight:var(--cds-productive-heading-06-font-weight,300);line-height:var(--cds-productive-heading-06-line-height,1.199);letter-spacing:var(--cds-productive-heading-06-letter-spacing,0)}h2{font-size:var(--cds-productive-heading-05-font-size,2rem);font-weight:var(--cds-productive-heading-05-font-weight,400);line-height:var(--cds-productive-heading-05-line-height,1.25);letter-spacing:var(--cds-productive-heading-05-letter-spacing,0)}h3{font-size:var(--cds-productive-heading-04-font-size,1.75rem);font-weight:var(--cds-productive-heading-04-font-weight,400);line-height:var(--cds-productive-heading-04-line-height,1.28572);letter-spacing:var(--cds-productive-heading-04-letter-spacing,0)}h4{font-size:var(--cds-productive-heading-03-font-size,1.25rem);font-weight:var(--cds-productive-heading-03-font-weight,400);line-height:var(--cds-productive-heading-03-line-height,1.4);letter-spacing:var(--cds-productive-heading-03-letter-spacing,0)}h5{font-size:var(--cds-productive-heading-02-font-size,1rem);font-weight:var(--cds-productive-heading-02-font-weight,600);line-height:var(--cds-productive-heading-02-line-height,1.375);letter-spacing:var(--cds-productive-heading-02-letter-spacing,0)}h6{font-size:var(--cds-productive-heading-01-font-size,.875rem);font-weight:var(--cds-productive-heading-01-font-weight,600);line-height:var(--cds-productive-heading-01-line-height,1.28572);letter-spacing:var(--cds-productive-heading-01-letter-spacing,.16px)}p{font-size:var(--cds-body-long-02-font-size,1rem);font-weight:var(--cds-body-long-02-font-weight,400);line-height:var(--cds-body-long-02-line-height,1.5);letter-spacing:var(--cds-body-long-02-letter-spacing,0)}a{color:#0f62fe}em{font-style:italic}@-webkit-keyframes skeleton{0%{opacity:.3;-webkit-transform:scaleX(0);transform:scaleX(0);-webkit-transform-origin:right;transform-origin:right}20%{opacity:1;-webkit-transform:scaleX(1);transform:scaleX(1);-webkit-transform-origin:right;transform-origin:right}28%{-webkit-transform:scaleX(1);transform:scaleX(1);-webkit-transform-origin:left;transform-origin:left}51%{-webkit-transform:scaleX(0);transform:scaleX(0);-webkit-transform-origin:left;transform-origin:left}58%{-webkit-transform:scaleX(0);transform:scaleX(0);-webkit-transform-origin:left;transform-origin:left}82%{-webkit-transform:scaleX(1);transform:scaleX(1);-webkit-transform-origin:left;transform-origin:left}83%{-webkit-transform:scaleX(1);transform:scaleX(1);-webkit-transform-origin:right;transform-origin:right}96%{-webkit-transform:scaleX(0);transform:scaleX(0);-webkit-transform-origin:right;transform-origin:right}100%{opacity:.3;-webkit-transform:scaleX(0);transform:scaleX(0);-webkit-transform-origin:right;transform-origin:right}}@keyframes skeleton{0%{opacity:.3;-webkit-transform:scaleX(0);transform:scaleX(0);-webkit-transform-origin:right;transform-origin:right}20%{opacity:1;-webkit-transform:scaleX(1);transform:scaleX(1);-webkit-transform-origin:right;transform-origin:right}28%{-webkit-transform:scaleX(1);transform:scaleX(1);-webkit-transform-origin:left;transform-origin:left}51%{-webkit-transform:scaleX(0);transform:scaleX(0);-webkit-transform-origin:left;transform-origin:left}58%{-webkit-transform:scaleX(0);transform:scaleX(0);-webkit-transform-origin:left;transform-origin:left}82%{-webkit-transform:scaleX(1);transform:scaleX(1);-webkit-transform-origin:left;transform-origin:left}83%{-webkit-transform:scaleX(1);transform:scaleX(1);-webkit-transform-origin:right;transform-origin:right}96%{-webkit-transform:scaleX(0);transform:scaleX(0);-webkit-transform-origin:right;transform-origin:right}100%{opacity:.3;-webkit-transform:scaleX(0);transform:scaleX(0);-webkit-transform-origin:right;transform-origin:right}}.bx--header{position:fixed;z-index:8000;top:0;left:0;right:0;display:flex;height:3rem;align-items:center;border-bottom:1px solid #393939;background-color:#161616}.bx--header__action{box-sizing:border-box;padding:0;border:0;margin:0;font-family:inherit;font-size:100%;vertical-align:baseline;display:inline-block;padding:0;border:0;-webkit-appearance:none;-moz-appearance:none;appearance:none;background:0 0;cursor:pointer;width:100%;width:3rem;height:3rem;border:.0625rem solid transparent;transition:background-color 110ms,border-color 110ms}.bx--header__action *,.bx--header__action ::after,.bx--header__action ::before{box-sizing:inherit}.bx--header__action::-moz-focus-inner{border:0}.bx--header__action--active>svg.bx--navigation-menu-panel-expand-icon,.bx--header__action>svg.bx--navigation-menu-panel-collapse-icon{display:none}.bx--header__action--active>svg.bx--navigation-menu-panel-collapse-icon{display:inline}.bx--header__action:hover{background-color:#353535}.bx--header__action--active{border-left:1px solid #393939;border-bottom:1px solid #161616;border-right:1px solid #393939}.bx--header__action:focus{border-color:#fff;outline:0}.bx--header__action:active{background-color:#393939}.bx--header__action.bx--btn--icon-only.bx--tooltip__trigger{justify-content:center}.bx--header__action>svg{fill:#fff}.bx--header__menu-trigger>svg{fill:#f4f4f4}.bx--header__menu-trigger:hover{fill:#2c2c2c}.bx--header__menu-toggle{display:flex;align-items:center;justify-content:center}@media (min-width:66rem){.bx--header__menu-toggle__hidden{display:none}}a.bx--header__name{font-size:var(--cds-body-short-01-font-size,.875rem);font-weight:var(--cds-body-short-01-font-weight,400);line-height:var(--cds-body-short-01-line-height,1.28572);letter-spacing:var(--cds-body-short-01-letter-spacing,.16px);display:flex;height:100%;align-items:center;padding:0 1rem 0 2rem;border:.125rem solid transparent;font-weight:600;letter-spacing:.1px;line-height:1.25rem;outline:0;text-decoration:none;transition:border-color 110ms;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}a.bx--header__name:focus{border-color:#fff}.bx--header__name--prefix{font-weight:400}a.bx--header__name,a.bx--header__name:hover{color:#f4f4f4}.bx--header__menu-toggle:not(.bx--header__menu-toggle__hidden)~.bx--header__name{padding-right:.5rem}.bx--header__nav{position:relative;display:none;height:100%;padding-right:1rem}@media (min-width:66rem){.bx--header__nav{display:block}}.bx--header__nav::before{position:absolute;top:50%;right:0;display:block;width:.0625rem;height:1.5rem;background-color:#393939;content:\"\";-webkit-transform:translateY(-50%);transform:translateY(-50%)}.bx--header__menu-bar{display:flex;height:100%;padding:0;margin:0;list-style:none}a.bx--header__menu-item{position:relative;display:flex;height:100%;align-items:center;padding:0 1rem;border:2px solid transparent;color:#c6c6c6;font-size:.875rem;font-weight:400;letter-spacing:0;line-height:1.125rem;text-decoration:none;transition:background-color 110ms,border-color 110ms,color 110ms;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}a.bx--header__menu-item:hover{background-color:#2c2c2c;color:#f4f4f4}.bx--header__action:active,a.bx--header__menu-item:active{background-color:#393939;color:#f4f4f4}a.bx--header__menu-item:focus{border-color:#fff;color:#f4f4f4;outline:0}a.bx--header__menu-item:active>svg,a.bx--header__menu-item:focus>svg,a.bx--header__menu-item:hover>svg{fill:#f4f4f4}.bx--header__menu-item--current::after,a.bx--header__menu-item[aria-current=page]::after{position:absolute;top:0;left:0;bottom:-2px;right:0;width:100%;border-bottom:3px solid var(--cds-inverse-support-04,#4589ff);content:\"\"}.bx--header__menu-item--current:focus::after,a.bx--header__menu-item[aria-current=page]:focus::after{border:0}a.bx--header__menu-item.bx--header__menu-item--current:focus,a.bx--header__menu-item[aria-current=page]:focus{border:2px solid #fff}.bx--header__submenu{position:relative}.bx--header__submenu--current::after{position:absolute;top:0;left:0;bottom:0;right:0;width:100%;border-bottom:3px solid var(--cds-border-interactive,#0f62fe);content:\"\"}.bx--header__submenu--current:focus{border:2px solid var(--cds-focus,#0f62fe)}.bx--header__submenu--current:focus::after{border:0}.bx--header__menu-title[aria-haspopup=true]{position:relative}.bx--header__menu-title[aria-expanded=true]{z-index:8001;background-color:#262626;color:#fff}.bx--header__menu-title[aria-expanded=true]>.bx--header__menu-arrow{-webkit-transform:rotate(-180deg);transform:rotate(-180deg)}.bx--header__menu{display:none;padding:0;margin:0;list-style:none}.bx--header__menu-title[aria-expanded=true]+.bx--header__menu{position:absolute;z-index:8000;bottom:0;right:0;display:flex;width:12.5rem;flex-direction:column;background-color:#262626;box-shadow:0 4px 8px 0 rgba(0,0,0,.5);-webkit-transform:translateY(100%);transform:translateY(100%)}.bx--header__menu-title[aria-expanded=true]+.bx--header__menu .bx--header__menu-item:hover{background-color:#353535}.bx--header__menu-title[aria-expanded=true]+.bx--header__menu .bx--header__menu-item:active{background-color:#393939}.bx--header__menu .bx--header__menu-item{height:3rem}.bx--header__menu .bx--header__menu-item:hover{background-color:#262626;color:#f4f4f4}.bx--header__menu-arrow{margin-right:.5rem;fill:#c6c6c6;transition:fill 110ms,-webkit-transform 110ms;transition:transform 110ms,fill 110ms;transition:transform 110ms,fill 110ms,-webkit-transform 110ms}.bx--header__global{display:flex;height:100%;flex:1 1 0%;justify-content:flex-end}.bx--skip-to-content{position:absolute;overflow:hidden;width:1px;height:1px;padding:0;border:0;margin:-1px;clip:rect(0,0,0,0);visibility:inherit;white-space:nowrap}.bx--skip-to-content:focus{z-index:9999;top:0;right:0;display:flex;width:auto;height:3rem;align-items:center;padding:0 1rem;border:4px solid #0f62fe;background-color:#161616;clip:auto;color:#f4f4f4;outline:0}:host(bx-skip-to-content){display:block}",
]);
