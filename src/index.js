import React from 'react';
import ReactDOM from 'react-dom';
import Home from './page/Home/Home';
let str = `:root {
    --yellow:#ffc107;--white:#fff;--gray-dark:#29363d;--#fff:#fff;--gray:#536c79;--primary:#20a8d8;--secondary:#a4b7c1;--success:#4dbd74;--info:#63c2de;--warning:#ffc107;--danger:#f86c6b;--light:#f0f3f5;--dark:#29363d;--blue:#20a8d8;--indigo:#6610f2;--purple:#6f42c1;--pink:#e83e8c;--red:#f86c6b;--orange:#f8cb00;--#ff0:#ffc107;--green:#4dbd74;--teal:#20c997;--cyan:#63c2de;--gray-100:#f0f3f5;--gray-200:#c2cfd6;--gray-300:#a4b7c1;--gray-400:#869fac;--gray-500:#678898;--gray-600:#536c79;--gray-700:#3e515b;--gray-800:#29363d;--gray-900:#151b1e;--breakpoint-xs:0;--breakpoint-sm:576px;--breakpoint-md:768px;--breakpoint-lg:992px;--breakpoint-xl:1200px;--font-family-sans-serif:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";--font-family-monospace:SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace}

*,:after,:before {
    box-sizing: border-box
}

html {
    font-family: sans-serif;
    line-height: 1.15;
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
    -ms-overflow-style: scrollbar;
    -webkit-tap-highlight-color: transparent
}

@-ms-viewport {
    width: device-width
}

article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section {
    display: block
}

body {
    margin: 0;
    font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;
    font-size: .875rem;
    font-weight: 400;
    line-height: 1.5;
    color: #151b1e;
    text-align: left;
    background-color: #e4e5e6
}

[tabindex="-1"]:focus {
    outline: 0!important
}

hr {
    box-sizing: content-box;
    height: 0;
    overflow: visible
}

h1,h2,h3,h4,h5,h6 {
    margin-top: 0;
    margin-bottom: .5rem
}

p {
    margin-top: 0;
    margin-bottom: 1rem
}

abbr[data-original-title],abbr[title] {
    text-decoration: underline;
    text-decoration: underline dotted;
    cursor: help;
    border-bottom: 0
}

address {
    font-style: normal;
    line-height: inherit
}

address,dl,ol,ul {
    margin-bottom: 1rem
}

dl,ol,ul {
    margin-top: 0
}

ol ol,ol ul,ul ol,ul ul {
    margin-bottom: 0
}

dt {
    font-weight: 700
}

dd {
    margin-bottom: .5rem;
    margin-left: 0
}

blockquote {
    margin: 0 0 1rem
}

dfn {
    font-style: italic
}

b,strong {
    font-weight: bolder
}

small {
    font-size: 80%
}

sub,sup {
    position: relative;
    font-size: 75%;
    line-height: 0;
    vertical-align: baseline
}

sub {
    bottom: -.25em
}

sup {
    top: -.5em
}

a {
    color: #20a8d8;
    text-decoration: none;
    background-color: transparent;
    -webkit-text-decoration-skip: objects
}

a:hover {
    color: #167495;
    text-decoration: underline
}

a:not([href]):not([tabindex]),a:not([href]):not([tabindex]):focus,a:not([href]):not([tabindex]):hover {
    color: inherit;
    text-decoration: none
}

a:not([href]):not([tabindex]):focus {
    outline: 0
}

code,kbd,pre,samp {
    font-family: monospace,monospace;
    font-size: 1em
}

pre {
    margin-top: 0;
    margin-bottom: 1rem;
    overflow: auto;
    -ms-overflow-style: scrollbar
}

figure {
    margin: 0 0 1rem
}

img {
    vertical-align: middle;
    border-style: none
}

svg:not(:root) {
    overflow: hidden
}

table {
    border-collapse: collapse
}

caption {
    padding-top: .75rem;
    padding-bottom: .75rem;
    color: #536c79;
    text-align: left;
    caption-side: bottom
}

th {
    text-align: inherit
}

label {
    display: inline-block;
    margin-bottom: .5rem
}

button {
    border-radius: 0
}

button:focus {
    outline: 1px dotted;
    outline: 5px auto -webkit-focus-ring-color
}

button,input,optgroup,select,textarea {
    margin: 0;
    font-family: inherit;
    font-size: inherit;
    line-height: inherit
}

button,input {
    overflow: visible
}

button,select {
    text-transform: none
}

[type=reset],[type=submit],button,html [type=button] {
    -webkit-appearance: button
}

[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner {
    padding: 0;
    border-style: none
}

input[type=checkbox],input[type=radio] {
    box-sizing: border-box;
    padding: 0
}

input[type=date],input[type=datetime-local],input[type=month],input[type=time] {
    -webkit-appearance: listbox
}

textarea {
    overflow: auto;
    resize: vertical
}

fieldset {
    min-width: 0;
    padding: 0;
    margin: 0;
    border: 0
}

legend {
    display: block;
    width: 100%;
    max-width: 100%;
    padding: 0;
    margin-bottom: .5rem;
    font-size: 1.5rem;
    line-height: inherit;
    color: inherit;
    white-space: normal
}

progress {
    vertical-align: baseline
}

[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button {
    height: auto
}

[type=search] {
    outline-offset: -2px;
    -webkit-appearance: none
}

[type=search]::-webkit-search-cancel-button,[type=search]::-webkit-search-decoration {
    -webkit-appearance: none
}

::-webkit-file-upload-button {
    font: inherit;
    -webkit-appearance: button
}

output {
    display: inline-block
}

summary {
    display: list-item;
    cursor: pointer
}

template {
    display: none
}

[hidden] {
    display: none!important
}

.h1,.h2,.h3,.h4,.h5,.h6,h1,h2,h3,h4,h5,h6 {
    margin-bottom: .5rem;
    font-family: inherit;
    font-weight: 500;
    line-height: 1.2;
    color: inherit
}

.h1,h1 {
    font-size: 2.1875rem
}

.h2,h2 {
    font-size: 1.75rem
}

.h3,h3 {
    font-size: 1.53125rem
}

.h4,h4 {
    font-size: 1.3125rem
}

.h5,h5 {
    font-size: 1.09375rem
}

.h6,h6 {
    font-size: .875rem
}

.lead {
    font-size: 1.09375rem;
    font-weight: 300
}

.display-1 {
    font-size: 6rem
}

.display-1,.display-2 {
    font-weight: 300;
    line-height: 1.2
}

.display-2 {
    font-size: 5.5rem
}

.display-3 {
    font-size: 4.5rem
}

.display-3,.display-4 {
    font-weight: 300;
    line-height: 1.2
}

.display-4 {
    font-size: 3.5rem
}

hr {
    margin-top: 1rem;
    margin-bottom: 1rem;
    border: 0;
    border-top: 1px solid rgba(0,0,0,.1)
}

.small,small {
    font-size: 80%;
    font-weight: 400
}

.mark,mark {
    padding: .2em;
    background-color: #fcf8e3
}

.list-inline,.list-unstyled {
    padding-left: 0;
    list-style: none
}

.list-inline-item {
    display: inline-block
}

.list-inline-item:not(:last-child) {
    margin-right: .5rem
}

.initialism {
    font-size: 90%;
    text-transform: uppercase
}

.blockquote {
    margin-bottom: 1rem;
    font-size: 1.09375rem
}

.blockquote-footer {
    display: block;
    font-size: 80%;
    color: #536c79
}



.img-fluid,.img-thumbnail {
    max-width: 100%;
    height: auto
}

.img-thumbnail {
    padding: .25rem;
    background-color: #e4e5e6;
    border: 1px solid #a4b7c1
}

.figure {
    display: inline-block
}

.figure-img {
    margin-bottom: .5rem;
    line-height: 1
}

.figure-caption {
    font-size: 90%;
    color: #536c79
}

code,kbd,pre,samp {
    font-family: SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace
}

code {
    font-size: 87.5%;
    color: #e83e8c;
    word-break: break-word
}

a>code {
    color: inherit
}

kbd {
    padding: .2rem .4rem;
    font-size: 87.5%;
    color: #fff;
    background-color: #151b1e
}

kbd kbd {
    padding: 0;
    font-size: 100%;
    font-weight: 700
}

pre {
    display: block;
    font-size: 87.5%;
    color: #151b1e
}

pre code {
    font-size: inherit;
    color: inherit;
    word-break: normal
}

.pre-scrollable {
    max-height: 340px;
    overflow-y: scroll
}

.container {
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto
}

@media(min-width: 576px) {
    .container {
        max-width:540px
    }
}

@media(min-width: 768px) {
    .container {
        max-width:720px
    }
}

@media(min-width: 992px) {
    .container {
        max-width:960px
    }
}

@media(min-width: 1200px) {
    .container {
        max-width:1140px
    }
}

.container-fluid {
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto
}

.row {
    display: flex;
    flex-wrap: wrap;
    margin-right: -15px;
    margin-left: -15px
}

.no-gutters {
    margin-right: 0;
    margin-left: 0
}

.no-gutters>.col,.no-gutters>[class*=col-] {
    padding-right: 0;
    padding-left: 0
}

.col,.col-1,.col-2,.col-3,.col-4,.col-5,.col-6,.col-7,.col-8,.col-9,.col-10,.col-11,.col-12,.col-auto,.col-lg,.col-lg-1,.col-lg-2,.col-lg-3,.col-lg-4,.col-lg-5,.col-lg-6,.col-lg-7,.col-lg-8,.col-lg-9,.col-lg-10,.col-lg-11,.col-lg-12,.col-lg-auto,.col-md,.col-md-1,.col-md-2,.col-md-3,.col-md-4,.col-md-5,.col-md-6,.col-md-7,.col-md-8,.col-md-9,.col-md-10,.col-md-11,.col-md-12,.col-md-auto,.col-sm,.col-sm-1,.col-sm-2,.col-sm-3,.col-sm-4,.col-sm-5,.col-sm-6,.col-sm-7,.col-sm-8,.col-sm-9,.col-sm-10,.col-sm-11,.col-sm-12,.col-sm-auto,.col-xl,.col-xl-1,.col-xl-2,.col-xl-3,.col-xl-4,.col-xl-5,.col-xl-6,.col-xl-7,.col-xl-8,.col-xl-9,.col-xl-10,.col-xl-11,.col-xl-12,.col-xl-auto {
    position: relative;
    width: 100%;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px
}

.col {
    flex-basis: 0;
    flex-grow: 1;
    max-width: 100%
}

.col-auto {
    flex: 0 0 auto;
    width: auto;
    max-width: none
}

.col-1 {
    flex: 0 0 8.33333%;
    max-width: 8.33333%
}

.col-2 {
    flex: 0 0 16.66667%;
    max-width: 16.66667%
}

.col-3 {
    flex: 0 0 25%;
    max-width: 25%
}

.col-4 {
    flex: 0 0 33.33333%;
    max-width: 33.33333%
}

.col-5 {
    flex: 0 0 41.66667%;
    max-width: 41.66667%
}

.col-6 {
    flex: 0 0 50%;
    max-width: 50%
}

.col-7 {
    flex: 0 0 58.33333%;
    max-width: 58.33333%
}

.col-8 {
    flex: 0 0 66.66667%;
    max-width: 66.66667%
}

.col-9 {
    flex: 0 0 75%;
    max-width: 75%
}

.col-10 {
    flex: 0 0 83.33333%;
    max-width: 83.33333%
}

.col-11 {
    flex: 0 0 91.66667%;
    max-width: 91.66667%
}

.col-12 {
    flex: 0 0 100%;
    max-width: 100%
}

.order-first {
    order: -1
}

.order-last {
    order: 13
}

.order-0 {
    order: 0
}

.order-1 {
    order: 1
}

.order-2 {
    order: 2
}

.order-3 {
    order: 3
}

.order-4 {
    order: 4
}

.order-5 {
    order: 5
}

.order-6 {
    order: 6
}

.order-7 {
    order: 7
}

.order-8 {
    order: 8
}

.order-9 {
    order: 9
}

.order-10 {
    order: 10
}

.order-11 {
    order: 11
}

.order-12 {
    order: 12
}

.offset-1 {
    margin-left: 8.33333%
}

.offset-2 {
    margin-left: 16.66667%
}

.offset-3 {
    margin-left: 25%
}

.offset-4 {
    margin-left: 33.33333%
}

.offset-5 {
    margin-left: 41.66667%
}

.offset-6 {
    margin-left: 50%
}

.offset-7 {
    margin-left: 58.33333%
}

.offset-8 {
    margin-left: 66.66667%
}

.offset-9 {
    margin-left: 75%
}

.offset-10 {
    margin-left: 83.33333%
}

.offset-11 {
    margin-left: 91.66667%
}

@media(min-width: 576px) {
    .col-sm {
        flex-basis:0;
        flex-grow: 1;
        max-width: 100%
    }

    .col-sm-auto {
        flex: 0 0 auto;
        width: auto;
        max-width: none
    }

    .col-sm-1 {
        flex: 0 0 8.33333%;
        max-width: 8.33333%
    }

    .col-sm-2 {
        flex: 0 0 16.66667%;
        max-width: 16.66667%
    }

    .col-sm-3 {
        flex: 0 0 25%;
        max-width: 25%
    }

    .col-sm-4 {
        flex: 0 0 33.33333%;
        max-width: 33.33333%
    }

    .col-sm-5 {
        flex: 0 0 41.66667%;
        max-width: 41.66667%
    }

    .col-sm-6 {
        flex: 0 0 50%;
        max-width: 50%
    }

    .col-sm-7 {
        flex: 0 0 58.33333%;
        max-width: 58.33333%
    }

    .col-sm-8 {
        flex: 0 0 66.66667%;
        max-width: 66.66667%
    }

    .col-sm-9 {
        flex: 0 0 75%;
        max-width: 75%
    }

    .col-sm-10 {
        flex: 0 0 83.33333%;
        max-width: 83.33333%
    }

    .col-sm-11 {
        flex: 0 0 91.66667%;
        max-width: 91.66667%
    }

    .col-sm-12 {
        flex: 0 0 100%;
        max-width: 100%
    }

    .order-sm-first {
        order: -1
    }

    .order-sm-last {
        order: 13
    }

    .order-sm-0 {
        order: 0
    }

    .order-sm-1 {
        order: 1
    }

    .order-sm-2 {
        order: 2
    }

    .order-sm-3 {
        order: 3
    }

    .order-sm-4 {
        order: 4
    }

    .order-sm-5 {
        order: 5
    }

    .order-sm-6 {
        order: 6
    }

    .order-sm-7 {
        order: 7
    }

    .order-sm-8 {
        order: 8
    }

    .order-sm-9 {
        order: 9
    }

    .order-sm-10 {
        order: 10
    }

    .order-sm-11 {
        order: 11
    }

    .order-sm-12 {
        order: 12
    }

    .offset-sm-0 {
        margin-left: 0
    }

    .offset-sm-1 {
        margin-left: 8.33333%
    }

    .offset-sm-2 {
        margin-left: 16.66667%
    }

    .offset-sm-3 {
        margin-left: 25%
    }

    .offset-sm-4 {
        margin-left: 33.33333%
    }

    .offset-sm-5 {
        margin-left: 41.66667%
    }

    .offset-sm-6 {
        margin-left: 50%
    }

    .offset-sm-7 {
        margin-left: 58.33333%
    }

    .offset-sm-8 {
        margin-left: 66.66667%
    }

    .offset-sm-9 {
        margin-left: 75%
    }

    .offset-sm-10 {
        margin-left: 83.33333%
    }

    .offset-sm-11 {
        margin-left: 91.66667%
    }
}

@media(min-width: 768px) {
    .col-md {
        flex-basis:0;
        flex-grow: 1;
        max-width: 100%
    }

    .col-md-auto {
        flex: 0 0 auto;
        width: auto;
        max-width: none
    }

    .col-md-1 {
        flex: 0 0 8.33333%;
        max-width: 8.33333%
    }

    .col-md-2 {
        flex: 0 0 16.66667%;
        max-width: 16.66667%
    }

    .col-md-3 {
        flex: 0 0 25%;
        max-width: 25%
    }

    .col-md-4 {
        flex: 0 0 33.33333%;
        max-width: 33.33333%
    }

    .col-md-5 {
        flex: 0 0 41.66667%;
        max-width: 41.66667%
    }

    .col-md-6 {
        flex: 0 0 50%;
        max-width: 50%
    }

    .col-md-7 {
        flex: 0 0 58.33333%;
        max-width: 58.33333%
    }

    .col-md-8 {
        flex: 0 0 66.66667%;
        max-width: 66.66667%
    }

    .col-md-9 {
        flex: 0 0 75%;
        max-width: 75%
    }

    .col-md-10 {
        flex: 0 0 83.33333%;
        max-width: 83.33333%
    }

    .col-md-11 {
        flex: 0 0 91.66667%;
        max-width: 91.66667%
    }

    .col-md-12 {
        flex: 0 0 100%;
        max-width: 100%
    }

    .order-md-first {
        order: -1
    }

    .order-md-last {
        order: 13
    }

    .order-md-0 {
        order: 0
    }

    .order-md-1 {
        order: 1
    }

    .order-md-2 {
        order: 2
    }

    .order-md-3 {
        order: 3
    }

    .order-md-4 {
        order: 4
    }

    .order-md-5 {
        order: 5
    }

    .order-md-6 {
        order: 6
    }

    .order-md-7 {
        order: 7
    }

    .order-md-8 {
        order: 8
    }

    .order-md-9 {
        order: 9
    }

    .order-md-10 {
        order: 10
    }

    .order-md-11 {
        order: 11
    }

    .order-md-12 {
        order: 12
    }

    .offset-md-0 {
        margin-left: 0
    }

    .offset-md-1 {
        margin-left: 8.33333%
    }

    .offset-md-2 {
        margin-left: 16.66667%
    }

    .offset-md-3 {
        margin-left: 25%
    }

    .offset-md-4 {
        margin-left: 33.33333%
    }

    .offset-md-5 {
        margin-left: 41.66667%
    }

    .offset-md-6 {
        margin-left: 50%
    }

    .offset-md-7 {
        margin-left: 58.33333%
    }

    .offset-md-8 {
        margin-left: 66.66667%
    }

    .offset-md-9 {
        margin-left: 75%
    }

    .offset-md-10 {
        margin-left: 83.33333%
    }

    .offset-md-11 {
        margin-left: 91.66667%
    }
}

@media(min-width: 992px) {
    .col-lg {
        flex-basis:0;
        flex-grow: 1;
        max-width: 100%
    }

    .col-lg-auto {
        flex: 0 0 auto;
        width: auto;
        max-width: none
    }

    .col-lg-1 {
        flex: 0 0 8.33333%;
        max-width: 8.33333%
    }

    .col-lg-2 {
        flex: 0 0 16.66667%;
        max-width: 16.66667%
    }

    .col-lg-3 {
        flex: 0 0 25%;
        max-width: 25%
    }

    .col-lg-4 {
        flex: 0 0 33.33333%;
        max-width: 33.33333%
    }

    .col-lg-5 {
        flex: 0 0 41.66667%;
        max-width: 41.66667%
    }

    .col-lg-6 {
        flex: 0 0 50%;
        max-width: 50%
    }

    .col-lg-7 {
        flex: 0 0 58.33333%;
        max-width: 58.33333%
    }

    .col-lg-8 {
        flex: 0 0 66.66667%;
        max-width: 66.66667%
    }

    .col-lg-9 {
        flex: 0 0 75%;
        max-width: 75%
    }

    .col-lg-10 {
        flex: 0 0 83.33333%;
        max-width: 83.33333%
    }

    .col-lg-11 {
        flex: 0 0 91.66667%;
        max-width: 91.66667%
    }

    .col-lg-12 {
        flex: 0 0 100%;
        max-width: 100%
    }

    .order-lg-first {
        order: -1
    }

    .order-lg-last {
        order: 13
    }

    .order-lg-0 {
        order: 0
    }

    .order-lg-1 {
        order: 1
    }

    .order-lg-2 {
        order: 2
    }

    .order-lg-3 {
        order: 3
    }

    .order-lg-4 {
        order: 4
    }

    .order-lg-5 {
        order: 5
    }

    .order-lg-6 {
        order: 6
    }

    .order-lg-7 {
        order: 7
    }

    .order-lg-8 {
        order: 8
    }

    .order-lg-9 {
        order: 9
    }

    .order-lg-10 {
        order: 10
    }

    .order-lg-11 {
        order: 11
    }

    .order-lg-12 {
        order: 12
    }

    .offset-lg-0 {
        margin-left: 0
    }

    .offset-lg-1 {
        margin-left: 8.33333%
    }

    .offset-lg-2 {
        margin-left: 16.66667%
    }

    .offset-lg-3 {
        margin-left: 25%
    }

    .offset-lg-4 {
        margin-left: 33.33333%
    }

    .offset-lg-5 {
        margin-left: 41.66667%
    }

    .offset-lg-6 {
        margin-left: 50%
    }

    .offset-lg-7 {
        margin-left: 58.33333%
    }

    .offset-lg-8 {
        margin-left: 66.66667%
    }

    .offset-lg-9 {
        margin-left: 75%
    }

    .offset-lg-10 {
        margin-left: 83.33333%
    }

    .offset-lg-11 {
        margin-left: 91.66667%
    }
}

@media(min-width: 1200px) {
    .col-xl {
        flex-basis:0;
        flex-grow: 1;
        max-width: 100%
    }

    .col-xl-auto {
        flex: 0 0 auto;
        width: auto;
        max-width: none
    }

    .col-xl-1 {
        flex: 0 0 8.33333%;
        max-width: 8.33333%
    }

    .col-xl-2 {
        flex: 0 0 16.66667%;
        max-width: 16.66667%
    }

    .col-xl-3 {
        flex: 0 0 25%;
        max-width: 25%
    }

    .col-xl-4 {
        flex: 0 0 33.33333%;
        max-width: 33.33333%
    }

    .col-xl-5 {
        flex: 0 0 41.66667%;
        max-width: 41.66667%
    }

    .col-xl-6 {
        flex: 0 0 50%;
        max-width: 50%
    }

    .col-xl-7 {
        flex: 0 0 58.33333%;
        max-width: 58.33333%
    }

    .col-xl-8 {
        flex: 0 0 66.66667%;
        max-width: 66.66667%
    }

    .col-xl-9 {
        flex: 0 0 75%;
        max-width: 75%
    }

    .col-xl-10 {
        flex: 0 0 83.33333%;
        max-width: 83.33333%
    }

    .col-xl-11 {
        flex: 0 0 91.66667%;
        max-width: 91.66667%
    }

    .col-xl-12 {
        flex: 0 0 100%;
        max-width: 100%
    }

    .order-xl-first {
        order: -1
    }

    .order-xl-last {
        order: 13
    }

    .order-xl-0 {
        order: 0
    }

    .order-xl-1 {
        order: 1
    }

    .order-xl-2 {
        order: 2
    }

    .order-xl-3 {
        order: 3
    }

    .order-xl-4 {
        order: 4
    }

    .order-xl-5 {
        order: 5
    }

    .order-xl-6 {
        order: 6
    }

    .order-xl-7 {
        order: 7
    }

    .order-xl-8 {
        order: 8
    }

    .order-xl-9 {
        order: 9
    }

    .order-xl-10 {
        order: 10
    }

    .order-xl-11 {
        order: 11
    }

    .order-xl-12 {
        order: 12
    }

    .offset-xl-0 {
        margin-left: 0
    }

    .offset-xl-1 {
        margin-left: 8.33333%
    }

    .offset-xl-2 {
        margin-left: 16.66667%
    }

    .offset-xl-3 {
        margin-left: 25%
    }

    .offset-xl-4 {
        margin-left: 33.33333%
    }

    .offset-xl-5 {
        margin-left: 41.66667%
    }

    .offset-xl-6 {
        margin-left: 50%
    }

    .offset-xl-7 {
        margin-left: 58.33333%
    }

    .offset-xl-8 {
        margin-left: 66.66667%
    }

    .offset-xl-9 {
        margin-left: 75%
    }

    .offset-xl-10 {
        margin-left: 83.33333%
    }

    .offset-xl-11 {
        margin-left: 91.66667%
    }
}

.table {
    width: 100%;
    max-width: 100%;
    margin-bottom: 1rem;
    background-color: transparent
}

.table td,.table th {
    padding: .75rem;
    vertical-align: top;
    border-top: 1px solid #a4b7c1
}

.table thead th {
    vertical-align: bottom;
    border-bottom: 2px solid #a4b7c1
}

.table tbody+tbody {
    border-top: 2px solid #a4b7c1
}

.table .table {
    background-color: #e4e5e6
}

.table-sm td,.table-sm th {
    padding: .3rem
}

.table-bordered,.table-bordered td,.table-bordered th {
    border: 1px solid #a4b7c1
}

.table-bordered thead td,.table-bordered thead th {
    border-bottom-width: 2px
}

.table-striped tbody tr:nth-of-type(odd) {
    background-color: rgba(0,0,0,.05)
}

.table-hover tbody tr:hover {
    background-color: rgba(0,0,0,.075)
}

.table-primary,.table-primary>td,.table-primary>th {
    background-color: #c1e7f4
}

.table-hover .table-primary:hover,.table-hover .table-primary:hover>td,.table-hover .table-primary:hover>th {
    background-color: #abdff0
}

.table-secondary,.table-secondary>td,.table-secondary>th {
    background-color: #e6ebee
}

.table-hover .table-secondary:hover,.table-hover .table-secondary:hover>td,.table-hover .table-secondary:hover>th {
    background-color: #d7dfe4
}

.table-success,.table-success>td,.table-success>th {
    background-color: #cdedd8
}

.table-hover .table-success:hover,.table-hover .table-success:hover>td,.table-hover .table-success:hover>th {
    background-color: #bae6c9
}

.table-info,.table-info>td,.table-info>th {
    background-color: #d3eef6
}

.table-hover .table-info:hover,.table-hover .table-info:hover>td,.table-hover .table-info:hover>th {
    background-color: #bee6f2
}

.table-warning,.table-warning>td,.table-warning>th {
    background-color: #ffeeba
}

.table-hover .table-warning:hover,.table-hover .table-warning:hover>td,.table-hover .table-warning:hover>th {
    background-color: #ffe8a1
}

.table-danger,.table-danger>td,.table-danger>th {
    background-color: #fdd6d6
}

.table-hover .table-danger:hover,.table-hover .table-danger:hover>td,.table-hover .table-danger:hover>th {
    background-color: #fcbebe
}

.table-light,.table-light>td,.table-light>th {
    background-color: #fbfcfc
}

.table-hover .table-light:hover,.table-hover .table-light:hover>td,.table-hover .table-light:hover>th {
    background-color: #ecf1f1
}

.table-dark,.table-dark>td,.table-dark>th {
    background-color: #c3c7c9
}

.table-hover .table-dark:hover,.table-hover .table-dark:hover>td,.table-hover .table-dark:hover>th {
    background-color: #b6babd
}

.table-blue,.table-blue>td,.table-blue>th {
    background-color: #c1e7f4
}

.table-hover .table-blue:hover,.table-hover .table-blue:hover>td,.table-hover .table-blue:hover>th {
    background-color: #abdff0
}

.table-indigo,.table-indigo>td,.table-indigo>th {
    background-color: #d4bcfb
}

.table-hover .table-indigo:hover,.table-hover .table-indigo:hover>td,.table-hover .table-indigo:hover>th {
    background-color: #c5a4fa
}

.table-purple,.table-purple>td,.table-purple>th {
    background-color: #d7caee
}

.table-hover .table-purple:hover,.table-hover .table-purple:hover>td,.table-hover .table-purple:hover>th {
    background-color: #c8b7e8
}

.table-pink,.table-pink>td,.table-pink>th {
    background-color: #f9c9df
}

.table-hover .table-pink:hover,.table-hover .table-pink:hover>td,.table-hover .table-pink:hover>th {
    background-color: #f6b2d1
}

.table-red,.table-red>td,.table-red>th {
    background-color: #fdd6d6
}

.table-hover .table-red:hover,.table-hover .table-red:hover>td,.table-hover .table-red:hover>th {
    background-color: #fcbebe
}

.table-orange,.table-orange>td,.table-orange>th {
    background-color: #fdf0b8
}

.table-hover .table-orange:hover,.table-hover .table-orange:hover>td,.table-hover .table-orange:hover>th {
    background-color: #fceb9f
}

.table-#ff0,.table-#ff0>td,.table-#ff0>th {
    background-color: #ffeeba
}

.table-hover .table-#ff0:hover,.table-hover .table-#ff0:hover>td,.table-hover .table-#ff0:hover>th {
    background-color: #ffe8a1
}

.table-green,.table-green>td,.table-green>th {
    background-color: #cdedd8
}

.table-hover .table-green:hover,.table-hover .table-green:hover>td,.table-hover .table-green:hover>th {
    background-color: #bae6c9
}

.table-teal,.table-teal>td,.table-teal>th {
    background-color: #c1f0e2
}

.table-hover .table-teal:hover,.table-hover .table-teal:hover>td,.table-hover .table-teal:hover>th {
    background-color: #acebd8
}

.table-cyan,.table-cyan>td,.table-cyan>th {
    background-color: #d3eef6
}

.table-hover .table-cyan:hover,.table-hover .table-cyan:hover>td,.table-hover .table-cyan:hover>th {
    background-color: #bee6f2
}

.table-gray-100,.table-gray-100>td,.table-gray-100>th {
    background-color: #fbfcfc
}

.table-hover .table-gray-100:hover,.table-hover .table-gray-100:hover>td,.table-hover .table-gray-100:hover>th {
    background-color: #ecf1f1
}

.table-gray-200,.table-gray-200>td,.table-gray-200>th {
    background-color: #eef2f4
}

.table-hover .table-gray-200:hover,.table-hover .table-gray-200:hover>td,.table-hover .table-gray-200:hover>th {
    background-color: #dfe6ea
}

.table-gray-300,.table-gray-300>td,.table-gray-300>th {
    background-color: #e6ebee
}

.table-hover .table-gray-300:hover,.table-hover .table-gray-300:hover>td,.table-hover .table-gray-300:hover>th {
    background-color: #d7dfe4
}

.table-gray-400,.table-gray-400>td,.table-gray-400>th {
    background-color: #dde4e8
}

.table-hover .table-gray-400:hover,.table-hover .table-gray-400:hover>td,.table-hover .table-gray-400:hover>th {
    background-color: #ced8de
}

.table-gray-500,.table-gray-500>td,.table-gray-500>th {
    background-color: #d4dee2
}

.table-hover .table-gray-500:hover,.table-hover .table-gray-500:hover>td,.table-hover .table-gray-500:hover>th {
    background-color: #c5d2d8
}

.table-gray-600,.table-gray-600>td,.table-gray-600>th {
    background-color: #cfd6d9
}

.table-hover .table-gray-600:hover,.table-hover .table-gray-600:hover>td,.table-hover .table-gray-600:hover>th {
    background-color: #c1cace
}

.table-gray-700,.table-gray-700>td,.table-gray-700>th {
    background-color: #c9ced1
}

.table-hover .table-gray-700:hover,.table-hover .table-gray-700:hover>td,.table-hover .table-gray-700:hover>th {
    background-color: #bbc2c5
}

.table-gray-800,.table-gray-800>td,.table-gray-800>th {
    background-color: #c3c7c9
}

.table-hover .table-gray-800:hover,.table-hover .table-gray-800:hover>td,.table-hover .table-gray-800:hover>th {
    background-color: #b6babd
}

.table-gray-900,.table-gray-900>td,.table-gray-900>th {
    background-color: #bdbfc0
}

.table-hover .table-gray-900:hover,.table-hover .table-gray-900:hover>td,.table-hover .table-gray-900:hover>th {
    background-color: #b0b2b4
}

.table-active,.table-active>td,.table-active>th,.table-hover .table-active:hover,.table-hover .table-active:hover>td,.table-hover .table-active:hover>th {
    background-color: rgba(0,0,0,.075)
}

.table .thead-dark th {
    color: #e4e5e6;
    background-color: #151b1e;
    border-color: #252f35
}

.table .thead-light th {
    color: #3e515b;
    background-color: #c2cfd6;
    border-color: #a4b7c1
}

.table-dark {
    color: #e4e5e6;
    background-color: #151b1e
}

.table-dark td,.table-dark th,.table-dark thead th {
    border-color: #252f35
}

.table-dark.table-bordered {
    border: 0
}

.table-dark.table-striped tbody tr:nth-of-type(odd) {
    background-color: hsla(0,0%,100%,.05)
}

.table-dark.table-hover tbody tr:hover {
    background-color: hsla(0,0%,100%,.075)
}

@media(max-width: 575.98px) {
    .table-responsive-sm {
        display:block;
        width: 100%;
        overflow-x: auto;
        -webkit-overflow-scrolling: touch;
        -ms-overflow-style: -ms-autohiding-scrollbar
    }

    .table-responsive-sm>.table-bordered {
        border: 0
    }
}

@media(max-width: 767.98px) {
    .table-responsive-md {
        display:block;
        width: 100%;
        overflow-x: auto;
        -webkit-overflow-scrolling: touch;
        -ms-overflow-style: -ms-autohiding-scrollbar
    }

    .table-responsive-md>.table-bordered {
        border: 0
    }
}

@media(max-width: 991.98px) {
    .table-responsive-lg {
        display:block;
        width: 100%;
        overflow-x: auto;
        -webkit-overflow-scrolling: touch;
        -ms-overflow-style: -ms-autohiding-scrollbar
    }

    .table-responsive-lg>.table-bordered {
        border: 0
    }
}

@media(max-width: 1199.98px) {
    .table-responsive-xl {
        display:block;
        width: 100%;
        overflow-x: auto;
        -webkit-overflow-scrolling: touch;
        -ms-overflow-style: -ms-autohiding-scrollbar
    }

    .table-responsive-xl>.table-bordered {
        border: 0
    }
}

.table-responsive {
    display: block;
    width: 100%;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    -ms-overflow-style: -ms-autohiding-scrollbar
}

.table-responsive>.table-bordered {
    border: 0
}

.form-control {
    display: block;
    width: 100%;
    padding: .375rem .75rem;
    font-size: .875rem;
    line-height: 1.5;
    color: #3e515b;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #c2cfd6;
    border-radius: 0;
    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out
}

.form-control::-ms-expand {
    background-color: transparent;
    border: 0
}

.form-control:focus {
    color: #3e515b;
    background-color: #fff;
    border-color: #8ad4ee;
    outline: 0;
    box-shadow: 0 0 0 .2rem rgba(32,168,216,.25)
}

.form-control::placeholder {
    color: #536c79;
    opacity: 1
}

.form-control:disabled,.form-control[readonly] {
    background-color: #c2cfd6;
    opacity: 1
}

select.form-control:not([size]):not([multiple]) {
    height: calc(2.0625rem + 2px)
}

select.form-control:focus::-ms-value {
    color: #3e515b;
    background-color: #fff
}

.form-control-file,.form-control-range {
    display: block;
    width: 100%
}

.col-form-label {
    padding-top: calc(.375rem + 1px);
    padding-bottom: calc(.375rem + 1px);
    margin-bottom: 0;
    font-size: inherit;
    line-height: 1.5
}

.col-form-label-lg {
    padding-top: calc(.5rem + 1px);
    padding-bottom: calc(.5rem + 1px);
    font-size: 1.09375rem;
    line-height: 1.5
}

.col-form-label-sm {
    padding-top: calc(.25rem + 1px);
    padding-bottom: calc(.25rem + 1px);
    font-size: .76563rem;
    line-height: 1.5
}

.form-control-plaintext {
    display: block;
    width: 100%;
    padding-top: .375rem;
    padding-bottom: .375rem;
    margin-bottom: 0;
    line-height: 1.5;
    background-color: transparent;
    border: solid transparent;
    border-width: 1px 0
}

.form-control-plaintext.form-control-lg,.form-control-plaintext.form-control-sm,.input-group-lg>.form-control-plaintext.form-control,.input-group-lg>.input-group-append>.form-control-plaintext.btn,.input-group-lg>.input-group-append>.form-control-plaintext.input-group-text,.input-group-lg>.input-group-prepend>.form-control-plaintext.btn,.input-group-lg>.input-group-prepend>.form-control-plaintext.input-group-text,.input-group-sm>.form-control-plaintext.form-control,.input-group-sm>.input-group-append>.form-control-plaintext.btn,.input-group-sm>.input-group-append>.form-control-plaintext.input-group-text,.input-group-sm>.input-group-prepend>.form-control-plaintext.btn,.input-group-sm>.input-group-prepend>.form-control-plaintext.input-group-text {
    padding-right: 0;
    padding-left: 0
}

.form-control-sm,.input-group-sm>.form-control,.input-group-sm>.input-group-append>.btn,.input-group-sm>.input-group-append>.input-group-text,.input-group-sm>.input-group-prepend>.btn,.input-group-sm>.input-group-prepend>.input-group-text {
    padding: .25rem .5rem;
    font-size: .76563rem;
    line-height: 1.5
}

.input-group-sm>.input-group-append>select.btn:not([size]):not([multiple]),.input-group-sm>.input-group-append>select.input-group-text:not([size]):not([multiple]),.input-group-sm>.input-group-prepend>select.btn:not([size]):not([multiple]),.input-group-sm>.input-group-prepend>select.input-group-text:not([size]):not([multiple]),.input-group-sm>select.form-control:not([size]):not([multiple]),select.form-control-sm:not([size]):not([multiple]) {
    height: calc(1.64844rem + 2px)
}

.form-control-lg,.input-group-lg>.form-control,.input-group-lg>.input-group-append>.btn,.input-group-lg>.input-group-append>.input-group-text,.input-group-lg>.input-group-prepend>.btn,.input-group-lg>.input-group-prepend>.input-group-text {
    padding: .5rem 1rem;
    font-size: 1.09375rem;
    line-height: 1.5
}

.input-group-lg>.input-group-append>select.btn:not([size]):not([multiple]),.input-group-lg>.input-group-append>select.input-group-text:not([size]):not([multiple]),.input-group-lg>.input-group-prepend>select.btn:not([size]):not([multiple]),.input-group-lg>.input-group-prepend>select.input-group-text:not([size]):not([multiple]),.input-group-lg>select.form-control:not([size]):not([multiple]),select.form-control-lg:not([size]):not([multiple]) {
    height: calc(2.64063rem + 2px)
}

.form-group {
    margin-bottom: 1rem
}

.form-text {
    display: block;
    margin-top: .25rem
}

.form-row {
    display: flex;
    flex-wrap: wrap;
    margin-right: -5px;
    margin-left: -5px
}

.form-row>.col,.form-row>[class*=col-] {
    padding-right: 5px;
    padding-left: 5px
}

.form-check {
    position: relative;
    display: block;
    padding-left: 1.25rem
}

.form-check-input {
    position: absolute;
    margin-top: .3rem;
    margin-left: -1.25rem
}

.form-check-input:disabled~.form-check-label {
    color: #536c79
}

.form-check-label {
    margin-bottom: 0
}

.form-check-inline {
    display: inline-flex;
    align-items: center;
    padding-left: 0;
    margin-right: .75rem
}

.form-check-inline .form-check-input {
    position: static;
    margin-top: 0;
    margin-right: .3125rem;
    margin-left: 0
}

.valid-feedback {
    display: none;
    width: 100%;
    margin-top: .25rem;
    font-size: 80%;
    color: #4dbd74
}

.valid-tooltip {
    position: absolute;
    top: 100%;
    z-index: 5;
    display: none;
    max-width: 100%;
    padding: .5rem;
    margin-top: .1rem;
    font-size: .875rem;
    line-height: 1;
    color: #fff;
    background-color: rgba(77,189,116,.8);
    border-radius: .2rem
}

.custom-select.is-valid,.form-control.is-valid,.was-validated .custom-select:valid,.was-validated .form-control:valid {
    border-color: #4dbd74
}

.custom-select.is-valid:focus,.form-control.is-valid:focus,.was-validated .custom-select:valid:focus,.was-validated .form-control:valid:focus {
    border-color: #4dbd74;
    box-shadow: 0 0 0 .2rem rgba(77,189,116,.25)
}

.custom-select.is-valid~.valid-feedback,.custom-select.is-valid~.valid-tooltip,.form-control.is-valid~.valid-feedback,.form-control.is-valid~.valid-tooltip,.was-validated .custom-select:valid~.valid-feedback,.was-validated .custom-select:valid~.valid-tooltip,.was-validated .form-control:valid~.valid-feedback,.was-validated .form-control:valid~.valid-tooltip {
    display: block
}

.form-check-input.is-valid~.form-check-label,.was-validated .form-check-input:valid~.form-check-label {
    color: #4dbd74
}

.form-check-input.is-valid~.valid-feedback,.form-check-input.is-valid~.valid-tooltip,.was-validated .form-check-input:valid~.valid-feedback,.was-validated .form-check-input:valid~.valid-tooltip {
    display: block
}

.custom-control-input.is-valid~.custom-control-label,.was-validated .custom-control-input:valid~.custom-control-label {
    color: #4dbd74
}

.custom-control-input.is-valid~.custom-control-label:before,.was-validated .custom-control-input:valid~.custom-control-label:before {
    background-color: #aadfbd
}

.custom-control-input.is-valid~.valid-feedback,.custom-control-input.is-valid~.valid-tooltip,.was-validated .custom-control-input:valid~.valid-feedback,.was-validated .custom-control-input:valid~.valid-tooltip {
    display: block
}

.custom-control-input.is-valid:checked~.custom-control-label:before,.was-validated .custom-control-input:valid:checked~.custom-control-label:before {
    background-color: #72cb91
}

.custom-control-input.is-valid:focus~.custom-control-label:before,.was-validated .custom-control-input:valid:focus~.custom-control-label:before {
    box-shadow: 0 0 0 1px #e4e5e6,0 0 0 .2rem rgba(77,189,116,.25)
}

.custom-file-input.is-valid~.custom-file-label,.was-validated .custom-file-input:valid~.custom-file-label {
    border-color: #4dbd74
}

.custom-file-input.is-valid~.custom-file-label:before,.was-validated .custom-file-input:valid~.custom-file-label:before {
    border-color: inherit
}

.custom-file-input.is-valid~.valid-feedback,.custom-file-input.is-valid~.valid-tooltip,.was-validated .custom-file-input:valid~.valid-feedback,.was-validated .custom-file-input:valid~.valid-tooltip {
    display: block
}

.custom-file-input.is-valid:focus~.custom-file-label,.was-validated .custom-file-input:valid:focus~.custom-file-label {
    box-shadow: 0 0 0 .2rem rgba(77,189,116,.25)
}

.invalid-feedback {
    display: none;
    width: 100%;
    margin-top: .25rem;
    font-size: 80%;
    color: #f86c6b
}

.invalid-tooltip {
    position: absolute;
    top: 100%;
    z-index: 5;
    display: none;
    max-width: 100%;
    padding: .5rem;
    margin-top: .1rem;
    font-size: .875rem;
    line-height: 1;
    color: #fff;
    background-color: hsla(0,91%,70%,.8);
    border-radius: .2rem
}

.custom-select.is-invalid,.form-control.is-invalid,.was-validated .custom-select:invalid,.was-validated .form-control:invalid {
    border-color: #f86c6b
}

.custom-select.is-invalid:focus,.form-control.is-invalid:focus,.was-validated .custom-select:invalid:focus,.was-validated .form-control:invalid:focus {
    border-color: #f86c6b;
    box-shadow: 0 0 0 .2rem hsla(0,91%,70%,.25)
}

.custom-select.is-invalid~.invalid-feedback,.custom-select.is-invalid~.invalid-tooltip,.form-control.is-invalid~.invalid-feedback,.form-control.is-invalid~.invalid-tooltip,.was-validated .custom-select:invalid~.invalid-feedback,.was-validated .custom-select:invalid~.invalid-tooltip,.was-validated .form-control:invalid~.invalid-feedback,.was-validated .form-control:invalid~.invalid-tooltip {
    display: block
}

.form-check-input.is-invalid~.form-check-label,.was-validated .form-check-input:invalid~.form-check-label {
    color: #f86c6b
}

.form-check-input.is-invalid~.invalid-feedback,.form-check-input.is-invalid~.invalid-tooltip,.was-validated .form-check-input:invalid~.invalid-feedback,.was-validated .form-check-input:invalid~.invalid-tooltip {
    display: block
}

.custom-control-input.is-invalid~.custom-control-label,.was-validated .custom-control-input:invalid~.custom-control-label {
    color: #f86c6b
}

.custom-control-input.is-invalid~.custom-control-label:before,.was-validated .custom-control-input:invalid~.custom-control-label:before {
    background-color: #fee5e5
}

.custom-control-input.is-invalid~.invalid-feedback,.custom-control-input.is-invalid~.invalid-tooltip,.was-validated .custom-control-input:invalid~.invalid-feedback,.was-validated .custom-control-input:invalid~.invalid-tooltip {
    display: block
}

.custom-control-input.is-invalid:checked~.custom-control-label:before,.was-validated .custom-control-input:invalid:checked~.custom-control-label:before {
    background-color: #fa9c9c
}

.custom-control-input.is-invalid:focus~.custom-control-label:before,.was-validated .custom-control-input:invalid:focus~.custom-control-label:before {
    box-shadow: 0 0 0 1px #e4e5e6,0 0 0 .2rem hsla(0,91%,70%,.25)
}

.custom-file-input.is-invalid~.custom-file-label,.was-validated .custom-file-input:invalid~.custom-file-label {
    border-color: #f86c6b
}

.custom-file-input.is-invalid~.custom-file-label:before,.was-validated .custom-file-input:invalid~.custom-file-label:before {
    border-color: inherit
}

.custom-file-input.is-invalid~.invalid-feedback,.custom-file-input.is-invalid~.invalid-tooltip,.was-validated .custom-file-input:invalid~.invalid-feedback,.was-validated .custom-file-input:invalid~.invalid-tooltip {
    display: block
}

.custom-file-input.is-invalid:focus~.custom-file-label,.was-validated .custom-file-input:invalid:focus~.custom-file-label {
    box-shadow: 0 0 0 .2rem hsla(0,91%,70%,.25)
}

.form-inline {
    display: flex;
    flex-flow: row wrap;
    align-items: center
}

.form-inline .form-check {
    width: 100%
}

@media(min-width: 576px) {
    .form-inline label {
        justify-content:center
    }

    .form-inline .form-group,.form-inline label {
        display: flex;
        align-items: center;
        margin-bottom: 0
    }

    .form-inline .form-group {
        flex: 0 0 auto;
        flex-flow: row wrap
    }

    .form-inline .form-control {
        display: inline-block;
        width: auto;
        vertical-align: middle
    }

    .form-inline .form-control-plaintext {
        display: inline-block
    }

    .form-inline .input-group {
        width: auto
    }

    .form-inline .form-check {
        display: flex;
        align-items: center;
        justify-content: center;
        width: auto;
        padding-left: 0
    }

    .form-inline .form-check-input {
        position: relative;
        margin-top: 0;
        margin-right: .25rem;
        margin-left: 0
    }

    .form-inline .custom-control {
        align-items: center;
        justify-content: center
    }

    .form-inline .custom-control-label {
        margin-bottom: 0
    }
}

.btn {
    display: inline-block;
    font-weight: 400;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    user-select: none;
    border: 1px solid transparent;
    padding: .375rem .75rem;
    font-size: .875rem;
    line-height: 1.5;
    border-radius: 0;
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out
}

.btn:focus,.btn:hover {
    text-decoration: none
}

.btn.focus,.btn:focus {
    outline: 0;
    box-shadow: 0 0 0 .2rem rgba(32,168,216,.25)
}

.btn.disabled,.btn:disabled {
    opacity: .65
}

.btn:not(:disabled):not(.disabled) {
    cursor: pointer
}

.btn:not(:disabled):not(.disabled).active,.btn:not(:disabled):not(.disabled):active {
    background-image: none
}

a.btn.disabled,fieldset:disabled a.btn {
    pointer-events: none
}

.btn-primary {
    color: #fff;
    background-color: #20a8d8;
    border-color: #20a8d8
}

.btn-primary:hover {
    color: #fff;
    background-color: #1b8eb7;
    border-color: #1985ac
}

.btn-primary.focus,.btn-primary:focus {
    box-shadow: 0 0 0 .2rem rgba(32,168,216,.5)
}

.btn-primary.disabled,.btn-primary:disabled {
    color: #fff;
    background-color: #20a8d8;
    border-color: #20a8d8
}

.btn-primary:not(:disabled):not(.disabled).active,.btn-primary:not(:disabled):not(.disabled):active,.show>.btn-primary.dropdown-toggle {
    color: #fff;
    background-color: #1985ac;
    border-color: #187da0
}

.btn-primary:not(:disabled):not(.disabled).active:focus,.btn-primary:not(:disabled):not(.disabled):active:focus,.show>.btn-primary.dropdown-toggle:focus {
    box-shadow: 0 0 0 .2rem rgba(32,168,216,.5)
}

.btn-secondary {
    color: #151b1e;
    background-color: #a4b7c1;
    border-color: #a4b7c1
}

.btn-secondary:hover {
    color: #151b1e;
    background-color: #8da5b2;
    border-color: #869fac
}

.btn-secondary.focus,.btn-secondary:focus {
    box-shadow: 0 0 0 .2rem rgba(164,183,193,.5)
}

.btn-secondary.disabled,.btn-secondary:disabled {
    color: #151b1e;
    background-color: #a4b7c1;
    border-color: #a4b7c1
}

.btn-secondary:not(:disabled):not(.disabled).active,.btn-secondary:not(:disabled):not(.disabled):active,.show>.btn-secondary.dropdown-toggle {
    color: #151b1e;
    background-color: #869fac;
    border-color: #7e99a7
}

.btn-secondary:not(:disabled):not(.disabled).active:focus,.btn-secondary:not(:disabled):not(.disabled):active:focus,.show>.btn-secondary.dropdown-toggle:focus {
    box-shadow: 0 0 0 .2rem rgba(164,183,193,.5)
}

.btn-success {
    color: #fff;
    background-color: #4dbd74;
    border-color: #4dbd74
}

.btn-success:hover {
    color: #fff;
    background-color: #3ea662;
    border-color: #3a9d5d
}

.btn-success.focus,.btn-success:focus {
    box-shadow: 0 0 0 .2rem rgba(77,189,116,.5)
}

.btn-success.disabled,.btn-success:disabled {
    color: #fff;
    background-color: #4dbd74;
    border-color: #4dbd74
}

.btn-success:not(:disabled):not(.disabled).active,.btn-success:not(:disabled):not(.disabled):active,.show>.btn-success.dropdown-toggle {
    color: #fff;
    background-color: #3a9d5d;
    border-color: #379457
}

.btn-success:not(:disabled):not(.disabled).active:focus,.btn-success:not(:disabled):not(.disabled):active:focus,.show>.btn-success.dropdown-toggle:focus {
    box-shadow: 0 0 0 .2rem rgba(77,189,116,.5)
}

.btn-info {
    color: #151b1e;
    background-color: #63c2de;
    border-color: #63c2de
}

.btn-info:hover {
    color: #151b1e;
    background-color: #43b6d7;
    border-color: #39b2d5
}

.btn-info.focus,.btn-info:focus {
    box-shadow: 0 0 0 .2rem rgba(99,194,222,.5)
}

.btn-info.disabled,.btn-info:disabled {
    color: #151b1e;
    background-color: #63c2de;
    border-color: #63c2de
}

.btn-info:not(:disabled):not(.disabled).active,.btn-info:not(:disabled):not(.disabled):active,.show>.btn-info.dropdown-toggle {
    color: #fff;
    background-color: #39b2d5;
    border-color: #2eadd3
}

.btn-info:not(:disabled):not(.disabled).active:focus,.btn-info:not(:disabled):not(.disabled):active:focus,.show>.btn-info.dropdown-toggle:focus {
    box-shadow: 0 0 0 .2rem rgba(99,194,222,.5)
}

.btn-warning {
    color: #151b1e;
    background-color: #ffc107;
    border-color: #ffc107
}

.btn-warning:hover {
    color: #151b1e;
    background-color: #e0a800;
    border-color: #d39e00
}

.btn-warning.focus,.btn-warning:focus {
    box-shadow: 0 0 0 .2rem rgba(255,193,7,.5)
}

.btn-warning.disabled,.btn-warning:disabled {
    color: #151b1e;
    background-color: #ffc107;
    border-color: #ffc107
}

.btn-warning:not(:disabled):not(.disabled).active,.btn-warning:not(:disabled):not(.disabled):active,.show>.btn-warning.dropdown-toggle {
    color: #151b1e;
    background-color: #d39e00;
    border-color: #c69500
}

.btn-warning:not(:disabled):not(.disabled).active:focus,.btn-warning:not(:disabled):not(.disabled):active:focus,.show>.btn-warning.dropdown-toggle:focus {
    box-shadow: 0 0 0 .2rem rgba(255,193,7,.5)
}

.btn-danger {
    color: #fff;
    background-color: #f86c6b;
    border-color: #f86c6b
}

.btn-danger:hover {
    color: #fff;
    background-color: #f64846;
    border-color: #f63c3a
}

.btn-danger.focus,.btn-danger:focus {
    box-shadow: 0 0 0 .2rem hsla(0,91%,70%,.5)
}

.btn-danger.disabled,.btn-danger:disabled {
    color: #fff;
    background-color: #f86c6b;
    border-color: #f86c6b
}

.btn-danger:not(:disabled):not(.disabled).active,.btn-danger:not(:disabled):not(.disabled):active,.show>.btn-danger.dropdown-toggle {
    color: #fff;
    background-color: #f63c3a;
    border-color: #f5302e
}

.btn-danger:not(:disabled):not(.disabled).active:focus,.btn-danger:not(:disabled):not(.disabled):active:focus,.show>.btn-danger.dropdown-toggle:focus {
    box-shadow: 0 0 0 .2rem hsla(0,91%,70%,.5)
}

.btn-light {
    color: #151b1e;
    background-color: #f0f3f5;
    border-color: #f0f3f5
}

.btn-light:hover {
    color: #151b1e;
    background-color: #d9e1e6;
    border-color: #d1dbe1
}

.btn-light.focus,.btn-light:focus {
    box-shadow: 0 0 0 .2rem rgba(240,243,245,.5)
}

.btn-light.disabled,.btn-light:disabled {
    color: #151b1e;
    background-color: #f0f3f5;
    border-color: #f0f3f5
}

.btn-light:not(:disabled):not(.disabled).active,.btn-light:not(:disabled):not(.disabled):active,.show>.btn-light.dropdown-toggle {
    color: #151b1e;
    background-color: #d1dbe1;
    border-color: #cad4dc
}

.btn-light:not(:disabled):not(.disabled).active:focus,.btn-light:not(:disabled):not(.disabled):active:focus,.show>.btn-light.dropdown-toggle:focus {
    box-shadow: 0 0 0 .2rem rgba(240,243,245,.5)
}

.btn-dark {
    color: #fff;
    background-color: #29363d;
    border-color: #29363d
}

.btn-dark:hover {
    color: #fff;
    background-color: #1a2226;
    border-color: #151b1f
}

.btn-dark.focus,.btn-dark:focus {
    box-shadow: 0 0 0 .2rem rgba(41,54,61,.5)
}

.btn-dark.disabled,.btn-dark:disabled {
    color: #fff;
    background-color: #29363d;
    border-color: #29363d
}

.btn-dark:not(:disabled):not(.disabled).active,.btn-dark:not(:disabled):not(.disabled):active,.show>.btn-dark.dropdown-toggle {
    color: #fff;
    background-color: #151b1f;
    border-color: #0f1417
}

.btn-dark:not(:disabled):not(.disabled).active:focus,.btn-dark:not(:disabled):not(.disabled):active:focus,.show>.btn-dark.dropdown-toggle:focus {
    box-shadow: 0 0 0 .2rem rgba(41,54,61,.5)
}

.btn-blue {
    color: #fff;
    background-color: #20a8d8;
    border-color: #20a8d8
}

.btn-blue:hover {
    color: #fff;
    background-color: #1b8eb7;
    border-color: #1985ac
}

.btn-blue.focus,.btn-blue:focus {
    box-shadow: 0 0 0 .2rem rgba(32,168,216,.5)
}

.btn-blue.disabled,.btn-blue:disabled {
    color: #fff;
    background-color: #20a8d8;
    border-color: #20a8d8
}

.btn-blue:not(:disabled):not(.disabled).active,.btn-blue:not(:disabled):not(.disabled):active,.show>.btn-blue.dropdown-toggle {
    color: #fff;
    background-color: #1985ac;
    border-color: #187da0
}

.btn-blue:not(:disabled):not(.disabled).active:focus,.btn-blue:not(:disabled):not(.disabled):active:focus,.show>.btn-blue.dropdown-toggle:focus {
    box-shadow: 0 0 0 .2rem rgba(32,168,216,.5)
}

.btn-indigo {
    color: #fff;
    background-color: #6610f2;
    border-color: #6610f2
}

.btn-indigo:hover {
    color: #fff;
    background-color: #560bd0;
    border-color: #510bc4
}

.btn-indigo.focus,.btn-indigo:focus {
    box-shadow: 0 0 0 .2rem rgba(102,16,242,.5)
}

.btn-indigo.disabled,.btn-indigo:disabled {
    color: #fff;
    background-color: #6610f2;
    border-color: #6610f2
}

.btn-indigo:not(:disabled):not(.disabled).active,.btn-indigo:not(:disabled):not(.disabled):active,.show>.btn-indigo.dropdown-toggle {
    color: #fff;
    background-color: #510bc4;
    border-color: #4c0ab8
}

.btn-indigo:not(:disabled):not(.disabled).active:focus,.btn-indigo:not(:disabled):not(.disabled):active:focus,.show>.btn-indigo.dropdown-toggle:focus {
    box-shadow: 0 0 0 .2rem rgba(102,16,242,.5)
}

.btn-purple {
    color: #fff;
    background-color: #6f42c1;
    border-color: #6f42c1
}

.btn-purple:hover {
    color: #fff;
    background-color: #5e37a6;
    border-color: #59339d
}

.btn-purple.focus,.btn-purple:focus {
    box-shadow: 0 0 0 .2rem rgba(111,66,193,.5)
}

.btn-purple.disabled,.btn-purple:disabled {
    color: #fff;
    background-color: #6f42c1;
    border-color: #6f42c1
}

.btn-purple:not(:disabled):not(.disabled).active,.btn-purple:not(:disabled):not(.disabled):active,.show>.btn-purple.dropdown-toggle {
    color: #fff;
    background-color: #59339d;
    border-color: #533093
}

.btn-purple:not(:disabled):not(.disabled).active:focus,.btn-purple:not(:disabled):not(.disabled):active:focus,.show>.btn-purple.dropdown-toggle:focus {
    box-shadow: 0 0 0 .2rem rgba(111,66,193,.5)
}

.btn-pink {
    color: #fff;
    background-color: #e83e8c;
    border-color: #e83e8c
}

.btn-pink:hover {
    color: #fff;
    background-color: #e41c78;
    border-color: #d91a72
}

.btn-pink.focus,.btn-pink:focus {
    box-shadow: 0 0 0 .2rem rgba(232,62,140,.5)
}

.btn-pink.disabled,.btn-pink:disabled {
    color: #fff;
    background-color: #e83e8c;
    border-color: #e83e8c
}

.btn-pink:not(:disabled):not(.disabled).active,.btn-pink:not(:disabled):not(.disabled):active,.show>.btn-pink.dropdown-toggle {
    color: #fff;
    background-color: #d91a72;
    border-color: #ce196c
}

.btn-pink:not(:disabled):not(.disabled).active:focus,.btn-pink:not(:disabled):not(.disabled):active:focus,.show>.btn-pink.dropdown-toggle:focus {
    box-shadow: 0 0 0 .2rem rgba(232,62,140,.5)
}

.btn-red {
    color: #fff;
    background-color: #f86c6b;
    border-color: #f86c6b
}

.btn-red:hover {
    color: #fff;
    background-color: #f64846;
    border-color: #f63c3a
}

.btn-red.focus,.btn-red:focus {
    box-shadow: 0 0 0 .2rem hsla(0,91%,70%,.5)
}

.btn-red.disabled,.btn-red:disabled {
    color: #fff;
    background-color: #f86c6b;
    border-color: #f86c6b
}

.btn-red:not(:disabled):not(.disabled).active,.btn-red:not(:disabled):not(.disabled):active,.show>.btn-red.dropdown-toggle {
    color: #fff;
    background-color: #f63c3a;
    border-color: #f5302e
}

.btn-red:not(:disabled):not(.disabled).active:focus,.btn-red:not(:disabled):not(.disabled):active:focus,.show>.btn-red.dropdown-toggle:focus {
    box-shadow: 0 0 0 .2rem hsla(0,91%,70%,.5)
}

.btn-orange {
    color: #151b1e;
    background-color: #f8cb00;
    border-color: #f8cb00
}

.btn-orange:hover {
    color: #151b1e;
    background-color: #d2ac00;
    border-color: #c5a100
}

.btn-orange.focus,.btn-orange:focus {
    box-shadow: 0 0 0 .2rem rgba(248,203,0,.5)
}

.btn-orange.disabled,.btn-orange:disabled {
    color: #151b1e;
    background-color: #f8cb00;
    border-color: #f8cb00
}

.btn-orange:not(:disabled):not(.disabled).active,.btn-orange:not(:disabled):not(.disabled):active,.show>.btn-orange.dropdown-toggle {
    color: #151b1e;
    background-color: #c5a100;
    border-color: #b89700
}

.btn-orange:not(:disabled):not(.disabled).active:focus,.btn-orange:not(:disabled):not(.disabled):active:focus,.show>.btn-orange.dropdown-toggle:focus {
    box-shadow: 0 0 0 .2rem rgba(248,203,0,.5)
}

.btn-#ff0 {
    color: #151b1e;
    background-color: #ffc107;
    border-color: #ffc107
}

.btn-#ff0:hover {
    color: #151b1e;
    background-color: #e0a800;
    border-color: #d39e00
}

.btn-#ff0.focus,.btn-#ff0:focus {
    box-shadow: 0 0 0 .2rem rgba(255,193,7,.5)
}

.btn-#ff0.disabled,.btn-#ff0:disabled {
    color: #151b1e;
    background-color: #ffc107;
    border-color: #ffc107
}

.btn-#ff0:not(:disabled):not(.disabled).active,.btn-#ff0:not(:disabled):not(.disabled):active,.show>.btn-#ff0.dropdown-toggle {
    color: #151b1e;
    background-color: #d39e00;
    border-color: #c69500
}

.btn-#ff0:not(:disabled):not(.disabled).active:focus,.btn-#ff0:not(:disabled):not(.disabled):active:focus,.show>.btn-#ff0.dropdown-toggle:focus {
    box-shadow: 0 0 0 .2rem rgba(255,193,7,.5)
}

.btn-green {
    color: #fff;
    background-color: #4dbd74;
    border-color: #4dbd74
}

.btn-green:hover {
    color: #fff;
    background-color: #3ea662;
    border-color: #3a9d5d
}

.btn-green.focus,.btn-green:focus {
    box-shadow: 0 0 0 .2rem rgba(77,189,116,.5)
}

.btn-green.disabled,.btn-green:disabled {
    color: #fff;
    background-color: #4dbd74;
    border-color: #4dbd74
}

.btn-green:not(:disabled):not(.disabled).active,.btn-green:not(:disabled):not(.disabled):active,.show>.btn-green.dropdown-toggle {
    color: #fff;
    background-color: #3a9d5d;
    border-color: #379457
}

.btn-green:not(:disabled):not(.disabled).active:focus,.btn-green:not(:disabled):not(.disabled):active:focus,.show>.btn-green.dropdown-toggle:focus {
    box-shadow: 0 0 0 .2rem rgba(77,189,116,.5)
}

.btn-teal {
    color: #fff;
    background-color: #20c997;
    border-color: #20c997
}

.btn-teal:hover {
    color: #fff;
    background-color: #1ba87e;
    border-color: #199d76
}

.btn-teal.focus,.btn-teal:focus {
    box-shadow: 0 0 0 .2rem rgba(32,201,151,.5)
}

.btn-teal.disabled,.btn-teal:disabled {
    color: #fff;
    background-color: #20c997;
    border-color: #20c997
}

.btn-teal:not(:disabled):not(.disabled).active,.btn-teal:not(:disabled):not(.disabled):active,.show>.btn-teal.dropdown-toggle {
    color: #fff;
    background-color: #199d76;
    border-color: #17926e
}

.btn-teal:not(:disabled):not(.disabled).active:focus,.btn-teal:not(:disabled):not(.disabled):active:focus,.show>.btn-teal.dropdown-toggle:focus {
    box-shadow: 0 0 0 .2rem rgba(32,201,151,.5)
}

.btn-cyan {
    color: #151b1e;
    background-color: #63c2de;
    border-color: #63c2de
}

.btn-cyan:hover {
    color: #151b1e;
    background-color: #43b6d7;
    border-color: #39b2d5
}

.btn-cyan.focus,.btn-cyan:focus {
    box-shadow: 0 0 0 .2rem rgba(99,194,222,.5)
}

.btn-cyan.disabled,.btn-cyan:disabled {
    color: #151b1e;
    background-color: #63c2de;
    border-color: #63c2de
}

.btn-cyan:not(:disabled):not(.disabled).active,.btn-cyan:not(:disabled):not(.disabled):active,.show>.btn-cyan.dropdown-toggle {
    color: #fff;
    background-color: #39b2d5;
    border-color: #2eadd3
}

.btn-cyan:not(:disabled):not(.disabled).active:focus,.btn-cyan:not(:disabled):not(.disabled):active:focus,.show>.btn-cyan.dropdown-toggle:focus {
    box-shadow: 0 0 0 .2rem rgba(99,194,222,.5)
}

.btn-gray-100 {
    color: #151b1e;
    background-color: #f0f3f5;
    border-color: #f0f3f5
}

.btn-gray-100:hover {
    color: #151b1e;
    background-color: #d9e1e6;
    border-color: #d1dbe1
}

.btn-gray-100.focus,.btn-gray-100:focus {
    box-shadow: 0 0 0 .2rem rgba(240,243,245,.5)
}

.btn-gray-100.disabled,.btn-gray-100:disabled {
    color: #151b1e;
    background-color: #f0f3f5;
    border-color: #f0f3f5
}

.btn-gray-100:not(:disabled):not(.disabled).active,.btn-gray-100:not(:disabled):not(.disabled):active,.show>.btn-gray-100.dropdown-toggle {
    color: #151b1e;
    background-color: #d1dbe1;
    border-color: #cad4dc
}

.btn-gray-100:not(:disabled):not(.disabled).active:focus,.btn-gray-100:not(:disabled):not(.disabled):active:focus,.show>.btn-gray-100.dropdown-toggle:focus {
    box-shadow: 0 0 0 .2rem rgba(240,243,245,.5)
}

.btn-gray-200 {
    color: #151b1e;
    background-color: #c2cfd6;
    border-color: #c2cfd6
}

.btn-gray-200:hover {
    color: #151b1e;
    background-color: #abbdc7;
    border-color: #a4b7c2
}

.btn-gray-200.focus,.btn-gray-200:focus {
    box-shadow: 0 0 0 .2rem rgba(194,207,214,.5)
}

.btn-gray-200.disabled,.btn-gray-200:disabled {
    color: #151b1e;
    background-color: #c2cfd6;
    border-color: #c2cfd6
}

.btn-gray-200:not(:disabled):not(.disabled).active,.btn-gray-200:not(:disabled):not(.disabled):active,.show>.btn-gray-200.dropdown-toggle {
    color: #151b1e;
    background-color: #a4b7c2;
    border-color: #9cb1bc
}

.btn-gray-200:not(:disabled):not(.disabled).active:focus,.btn-gray-200:not(:disabled):not(.disabled):active:focus,.show>.btn-gray-200.dropdown-toggle:focus {
    box-shadow: 0 0 0 .2rem rgba(194,207,214,.5)
}

.btn-gray-300 {
    color: #151b1e;
    background-color: #a4b7c1;
    border-color: #a4b7c1
}

.btn-gray-300:hover {
    color: #151b1e;
    background-color: #8da5b2;
    border-color: #869fac
}

.btn-gray-300.focus,.btn-gray-300:focus {
    box-shadow: 0 0 0 .2rem rgba(164,183,193,.5)
}

.btn-gray-300.disabled,.btn-gray-300:disabled {
    color: #151b1e;
    background-color: #a4b7c1;
    border-color: #a4b7c1
}

.btn-gray-300:not(:disabled):not(.disabled).active,.btn-gray-300:not(:disabled):not(.disabled):active,.show>.btn-gray-300.dropdown-toggle {
    color: #151b1e;
    background-color: #869fac;
    border-color: #7e99a7
}

.btn-gray-300:not(:disabled):not(.disabled).active:focus,.btn-gray-300:not(:disabled):not(.disabled):active:focus,.show>.btn-gray-300.dropdown-toggle:focus {
    box-shadow: 0 0 0 .2rem rgba(164,183,193,.5)
}

.btn-gray-400 {
    color: #151b1e;
    background-color: #869fac;
    border-color: #869fac
}

.btn-gray-400:hover {
    color: #fff;
    background-color: #6f8d9c;
    border-color: #688797
}

.btn-gray-400.focus,.btn-gray-400:focus {
    box-shadow: 0 0 0 .2rem rgba(134,159,172,.5)
}

.btn-gray-400.disabled,.btn-gray-400:disabled {
    color: #151b1e;
    background-color: #869fac;
    border-color: #869fac
}

.btn-gray-400:not(:disabled):not(.disabled).active,.btn-gray-400:not(:disabled):not(.disabled):active,.show>.btn-gray-400.dropdown-toggle {
    color: #fff;
    background-color: #688797;
    border-color: #638090
}

.btn-gray-400:not(:disabled):not(.disabled).active:focus,.btn-gray-400:not(:disabled):not(.disabled):active:focus,.show>.btn-gray-400.dropdown-toggle:focus {
    box-shadow: 0 0 0 .2rem rgba(134,159,172,.5)
}

.btn-gray-500 {
    color: #fff;
    background-color: #678898;
    border-color: #678898
}

.btn-gray-500:hover {
    color: #fff;
    background-color: #587481;
    border-color: #526d7a
}

.btn-gray-500.focus,.btn-gray-500:focus {
    box-shadow: 0 0 0 .2rem rgba(103,136,152,.5)
}

.btn-gray-500.disabled,.btn-gray-500:disabled {
    color: #fff;
    background-color: #678898;
    border-color: #678898
}

.btn-gray-500:not(:disabled):not(.disabled).active,.btn-gray-500:not(:disabled):not(.disabled):active,.show>.btn-gray-500.dropdown-toggle {
    color: #fff;
    background-color: #526d7a;
    border-color: #4d6672
}

.btn-gray-500:not(:disabled):not(.disabled).active:focus,.btn-gray-500:not(:disabled):not(.disabled):active:focus,.show>.btn-gray-500.dropdown-toggle:focus {
    box-shadow: 0 0 0 .2rem rgba(103,136,152,.5)
}

.btn-gray-600 {
    color: #fff;
    background-color: #536c79;
    border-color: #536c79
}

.btn-gray-600:hover {
    color: #fff;
    background-color: #435862;
    border-color: #3e515b
}

.btn-gray-600.focus,.btn-gray-600:focus {
    box-shadow: 0 0 0 .2rem rgba(83,108,121,.5)
}

.btn-gray-600.disabled,.btn-gray-600:disabled {
    color: #fff;
    background-color: #536c79;
    border-color: #536c79
}

.btn-gray-600:not(:disabled):not(.disabled).active,.btn-gray-600:not(:disabled):not(.disabled):active,.show>.btn-gray-600.dropdown-toggle {
    color: #fff;
    background-color: #3e515b;
    border-color: #394a53
}

.btn-gray-600:not(:disabled):not(.disabled).active:focus,.btn-gray-600:not(:disabled):not(.disabled):active:focus,.show>.btn-gray-600.dropdown-toggle:focus {
    box-shadow: 0 0 0 .2rem rgba(83,108,121,.5)
}

.btn-gray-700 {
    color: #fff;
    background-color: #3e515b;
    border-color: #3e515b
}

.btn-gray-700:hover {
    color: #fff;
    background-color: #2f3d44;
    border-color: #29363d
}

.btn-gray-700.focus,.btn-gray-700:focus {
    box-shadow: 0 0 0 .2rem rgba(62,81,91,.5)
}

.btn-gray-700.disabled,.btn-gray-700:disabled {
    color: #fff;
    background-color: #3e515b;
    border-color: #3e515b
}

.btn-gray-700:not(:disabled):not(.disabled).active,.btn-gray-700:not(:disabled):not(.disabled):active,.show>.btn-gray-700.dropdown-toggle {
    color: #fff;
    background-color: #29363d;
    border-color: #242f35
}

.btn-gray-700:not(:disabled):not(.disabled).active:focus,.btn-gray-700:not(:disabled):not(.disabled):active:focus,.show>.btn-gray-700.dropdown-toggle:focus {
    box-shadow: 0 0 0 .2rem rgba(62,81,91,.5)
}

.btn-gray-800 {
    color: #fff;
    background-color: #29363d;
    border-color: #29363d
}

.btn-gray-800:hover {
    color: #fff;
    background-color: #1a2226;
    border-color: #151b1f
}

.btn-gray-800.focus,.btn-gray-800:focus {
    box-shadow: 0 0 0 .2rem rgba(41,54,61,.5)
}

.btn-gray-800.disabled,.btn-gray-800:disabled {
    color: #fff;
    background-color: #29363d;
    border-color: #29363d
}

.btn-gray-800:not(:disabled):not(.disabled).active,.btn-gray-800:not(:disabled):not(.disabled):active,.show>.btn-gray-800.dropdown-toggle {
    color: #fff;
    background-color: #151b1f;
    border-color: #0f1417
}

.btn-gray-800:not(:disabled):not(.disabled).active:focus,.btn-gray-800:not(:disabled):not(.disabled):active:focus,.show>.btn-gray-800.dropdown-toggle:focus {
    box-shadow: 0 0 0 .2rem rgba(41,54,61,.5)
}

.btn-gray-900 {
    color: #fff;
    background-color: #151b1e;
    border-color: #151b1e
}

.btn-gray-900:hover {
    color: #fff;
    background-color: #050708;
    border-color: #000
}

.btn-gray-900.focus,.btn-gray-900:focus {
    box-shadow: 0 0 0 .2rem rgba(21,27,30,.5)
}

.btn-gray-900.disabled,.btn-gray-900:disabled {
    color: #fff;
    background-color: #151b1e;
    border-color: #151b1e
}

.btn-gray-900:not(:disabled):not(.disabled).active,.btn-gray-900:not(:disabled):not(.disabled):active,.show>.btn-gray-900.dropdown-toggle {
    color: #fff;
    background-color: #000;
    border-color: #000
}

.btn-gray-900:not(:disabled):not(.disabled).active:focus,.btn-gray-900:not(:disabled):not(.disabled):active:focus,.show>.btn-gray-900.dropdown-toggle:focus {
    box-shadow: 0 0 0 .2rem rgba(21,27,30,.5)
}

.btn-outline-primary {
    color: #20a8d8;
    background-color: transparent;
    background-image: none;
    border-color: #20a8d8
}

.btn-outline-primary:hover {
    color: #fff;
    background-color: #20a8d8;
    border-color: #20a8d8
}

.btn-outline-primary.focus,.btn-outline-primary:focus {
    box-shadow: 0 0 0 .2rem rgba(32,168,216,.5)
}

.btn-outline-primary.disabled,.btn-outline-primary:disabled {
    color: #20a8d8;
    background-color: transparent
}

.btn-outline-primary:not(:disabled):not(.disabled).active,.btn-outline-primary:not(:disabled):not(.disabled):active,.show>.btn-outline-primary.dropdown-toggle {
    color: #fff;
    background-color: #20a8d8;
    border-color: #20a8d8
}

.btn-outline-primary:not(:disabled):not(.disabled).active:focus,.btn-outline-primary:not(:disabled):not(.disabled):active:focus,.show>.btn-outline-primary.dropdown-toggle:focus {
    box-shadow: 0 0 0 .2rem rgba(32,168,216,.5)
}

.btn-outline-secondary {
    color: #a4b7c1;
    background-color: transparent;
    background-image: none;
    border-color: #a4b7c1
}

.btn-outline-secondary:hover {
    color: #151b1e;
    background-color: #a4b7c1;
    border-color: #a4b7c1
}

.btn-outline-secondary.focus,.btn-outline-secondary:focus {
    box-shadow: 0 0 0 .2rem rgba(164,183,193,.5)
}

.btn-outline-secondary.disabled,.btn-outline-secondary:disabled {
    color: #a4b7c1;
    background-color: transparent
}

.btn-outline-secondary:not(:disabled):not(.disabled).active,.btn-outline-secondary:not(:disabled):not(.disabled):active,.show>.btn-outline-secondary.dropdown-toggle {
    color: #151b1e;
    background-color: #a4b7c1;
    border-color: #a4b7c1
}

.btn-outline-secondary:not(:disabled):not(.disabled).active:focus,.btn-outline-secondary:not(:disabled):not(.disabled):active:focus,.show>.btn-outline-secondary.dropdown-toggle:focus {
    box-shadow: 0 0 0 .2rem rgba(164,183,193,.5)
}

.btn-outline-success {
    color: #4dbd74;
    background-color: transparent;
    background-image: none;
    border-color: #4dbd74
}

.btn-outline-success:hover {
    color: #fff;
    background-color: #4dbd74;
    border-color: #4dbd74
}

.btn-outline-success.focus,.btn-outline-success:focus {
    box-shadow: 0 0 0 .2rem rgba(77,189,116,.5)
}

.btn-outline-success.disabled,.btn-outline-success:disabled {
    color: #4dbd74;
    background-color: transparent
}

.btn-outline-success:not(:disabled):not(.disabled).active,.btn-outline-success:not(:disabled):not(.disabled):active,.show>.btn-outline-success.dropdown-toggle {
    color: #fff;
    background-color: #4dbd74;
    border-color: #4dbd74
}

.btn-outline-success:not(:disabled):not(.disabled).active:focus,.btn-outline-success:not(:disabled):not(.disabled):active:focus,.show>.btn-outline-success.dropdown-toggle:focus {
    box-shadow: 0 0 0 .2rem rgba(77,189,116,.5)
}

.btn-outline-info {
    color: #63c2de;
    background-color: transparent;
    background-image: none;
    border-color: #63c2de
}

.btn-outline-info:hover {
    color: #151b1e;
    background-color: #63c2de;
    border-color: #63c2de
}

.btn-outline-info.focus,.btn-outline-info:focus {
    box-shadow: 0 0 0 .2rem rgba(99,194,222,.5)
}

.btn-outline-info.disabled,.btn-outline-info:disabled {
    color: #63c2de;
    background-color: transparent
}

.btn-outline-info:not(:disabled):not(.disabled).active,.btn-outline-info:not(:disabled):not(.disabled):active,.show>.btn-outline-info.dropdown-toggle {
    color: #151b1e;
    background-color: #63c2de;
    border-color: #63c2de
}

.btn-outline-info:not(:disabled):not(.disabled).active:focus,.btn-outline-info:not(:disabled):not(.disabled):active:focus,.show>.btn-outline-info.dropdown-toggle:focus {
    box-shadow: 0 0 0 .2rem rgba(99,194,222,.5)
}

.btn-outline-warning {
    color: #ffc107;
    background-color: transparent;
    background-image: none;
    border-color: #ffc107
}

.btn-outline-warning:hover {
    color: #151b1e;
    background-color: #ffc107;
    border-color: #ffc107
}

.btn-outline-warning.focus,.btn-outline-warning:focus {
    box-shadow: 0 0 0 .2rem rgba(255,193,7,.5)
}

.btn-outline-warning.disabled,.btn-outline-warning:disabled {
    color: #ffc107;
    background-color: transparent
}

.btn-outline-warning:not(:disabled):not(.disabled).active,.btn-outline-warning:not(:disabled):not(.disabled):active,.show>.btn-outline-warning.dropdown-toggle {
    color: #151b1e;
    background-color: #ffc107;
    border-color: #ffc107
}

.btn-outline-warning:not(:disabled):not(.disabled).active:focus,.btn-outline-warning:not(:disabled):not(.disabled):active:focus,.show>.btn-outline-warning.dropdown-toggle:focus {
    box-shadow: 0 0 0 .2rem rgba(255,193,7,.5)
}

.btn-outline-danger {
    color: #f86c6b;
    background-color: transparent;
    background-image: none;
    border-color: #f86c6b
}

.btn-outline-danger:hover {
    color: #fff;
    background-color: #f86c6b;
    border-color: #f86c6b
}

.btn-outline-danger.focus,.btn-outline-danger:focus {
    box-shadow: 0 0 0 .2rem hsla(0,91%,70%,.5)
}

.btn-outline-danger.disabled,.btn-outline-danger:disabled {
    color: #f86c6b;
    background-color: transparent
}

.btn-outline-danger:not(:disabled):not(.disabled).active,.btn-outline-danger:not(:disabled):not(.disabled):active,.show>.btn-outline-danger.dropdown-toggle {
    color: #fff;
    background-color: #f86c6b;
    border-color: #f86c6b
}

.btn-outline-danger:not(:disabled):not(.disabled).active:focus,.btn-outline-danger:not(:disabled):not(.disabled):active:focus,.show>.btn-outline-danger.dropdown-toggle:focus {
    box-shadow: 0 0 0 .2rem hsla(0,91%,70%,.5)
}

.btn-outline-light {
    color: #f0f3f5;
    background-color: transparent;
    background-image: none;
    border-color: #f0f3f5
}

.btn-outline-light:hover {
    color: #151b1e;
    background-color: #f0f3f5;
    border-color: #f0f3f5
}

.btn-outline-light.focus,.btn-outline-light:focus {
    box-shadow: 0 0 0 .2rem rgba(240,243,245,.5)
}

.btn-outline-light.disabled,.btn-outline-light:disabled {
    color: #f0f3f5;
    background-color: transparent
}

.btn-outline-light:not(:disabled):not(.disabled).active,.btn-outline-light:not(:disabled):not(.disabled):active,.show>.btn-outline-light.dropdown-toggle {
    color: #151b1e;
    background-color: #f0f3f5;
    border-color: #f0f3f5
}

.btn-outline-light:not(:disabled):not(.disabled).active:focus,.btn-outline-light:not(:disabled):not(.disabled):active:focus,.show>.btn-outline-light.dropdown-toggle:focus {
    box-shadow: 0 0 0 .2rem rgba(240,243,245,.5)
}

.btn-outline-dark {
    color: #29363d;
    background-color: transparent;
    background-image: none;
    border-color: #29363d
}

.btn-outline-dark:hover {
    color: #fff;
    background-color: #29363d;
    border-color: #29363d
}

.btn-outline-dark.focus,.btn-outline-dark:focus {
    box-shadow: 0 0 0 .2rem rgba(41,54,61,.5)
}

.btn-outline-dark.disabled,.btn-outline-dark:disabled {
    color: #29363d;
    background-color: transparent
}

.btn-outline-dark:not(:disabled):not(.disabled).active,.btn-outline-dark:not(:disabled):not(.disabled):active,.show>.btn-outline-dark.dropdown-toggle {
    color: #fff;
    background-color: #29363d;
    border-color: #29363d
}

.btn-outline-dark:not(:disabled):not(.disabled).active:focus,.btn-outline-dark:not(:disabled):not(.disabled):active:focus,.show>.btn-outline-dark.dropdown-toggle:focus {
    box-shadow: 0 0 0 .2rem rgba(41,54,61,.5)
}

.btn-outline-blue {
    color: #20a8d8;
    background-color: transparent;
    background-image: none;
    border-color: #20a8d8
}

.btn-outline-blue:hover {
    color: #fff;
    background-color: #20a8d8;
    border-color: #20a8d8
}

.btn-outline-blue.focus,.btn-outline-blue:focus {
    box-shadow: 0 0 0 .2rem rgba(32,168,216,.5)
}

.btn-outline-blue.disabled,.btn-outline-blue:disabled {
    color: #20a8d8;
    background-color: transparent
}

.btn-outline-blue:not(:disabled):not(.disabled).active,.btn-outline-blue:not(:disabled):not(.disabled):active,.show>.btn-outline-blue.dropdown-toggle {
    color: #fff;
    background-color: #20a8d8;
    border-color: #20a8d8
}

.btn-outline-blue:not(:disabled):not(.disabled).active:focus,.btn-outline-blue:not(:disabled):not(.disabled):active:focus,.show>.btn-outline-blue.dropdown-toggle:focus {
    box-shadow: 0 0 0 .2rem rgba(32,168,216,.5)
}

.btn-outline-indigo {
    color: #6610f2;
    background-color: transparent;
    background-image: none;
    border-color: #6610f2
}

.btn-outline-indigo:hover {
    color: #fff;
    background-color: #6610f2;
    border-color: #6610f2
}

.btn-outline-indigo.focus,.btn-outline-indigo:focus {
    box-shadow: 0 0 0 .2rem rgba(102,16,242,.5)
}

.btn-outline-indigo.disabled,.btn-outline-indigo:disabled {
    color: #6610f2;
    background-color: transparent
}

.btn-outline-indigo:not(:disabled):not(.disabled).active,.btn-outline-indigo:not(:disabled):not(.disabled):active,.show>.btn-outline-indigo.dropdown-toggle {
    color: #fff;
    background-color: #6610f2;
    border-color: #6610f2
}

.btn-outline-indigo:not(:disabled):not(.disabled).active:focus,.btn-outline-indigo:not(:disabled):not(.disabled):active:focus,.show>.btn-outline-indigo.dropdown-toggle:focus {
    box-shadow: 0 0 0 .2rem rgba(102,16,242,.5)
}

.btn-outline-purple {
    color: #6f42c1;
    background-color: transparent;
    background-image: none;
    border-color: #6f42c1
}

.btn-outline-purple:hover {
    color: #fff;
    background-color: #6f42c1;
    border-color: #6f42c1
}

.btn-outline-purple.focus,.btn-outline-purple:focus {
    box-shadow: 0 0 0 .2rem rgba(111,66,193,.5)
}

.btn-outline-purple.disabled,.btn-outline-purple:disabled {
    color: #6f42c1;
    background-color: transparent
}

.btn-outline-purple:not(:disabled):not(.disabled).active,.btn-outline-purple:not(:disabled):not(.disabled):active,.show>.btn-outline-purple.dropdown-toggle {
    color: #fff;
    background-color: #6f42c1;
    border-color: #6f42c1
}

.btn-outline-purple:not(:disabled):not(.disabled).active:focus,.btn-outline-purple:not(:disabled):not(.disabled):active:focus,.show>.btn-outline-purple.dropdown-toggle:focus {
    box-shadow: 0 0 0 .2rem rgba(111,66,193,.5)
}

.btn-outline-pink {
    color: #e83e8c;
    background-color: transparent;
    background-image: none;
    border-color: #e83e8c
}

.btn-outline-pink:hover {
    color: #fff;
    background-color: #e83e8c;
    border-color: #e83e8c
}

.btn-outline-pink.focus,.btn-outline-pink:focus {
    box-shadow: 0 0 0 .2rem rgba(232,62,140,.5)
}

.btn-outline-pink.disabled,.btn-outline-pink:disabled {
    color: #e83e8c;
    background-color: transparent
}

.btn-outline-pink:not(:disabled):not(.disabled).active,.btn-outline-pink:not(:disabled):not(.disabled):active,.show>.btn-outline-pink.dropdown-toggle {
    color: #fff;
    background-color: #e83e8c;
    border-color: #e83e8c
}

.btn-outline-pink:not(:disabled):not(.disabled).active:focus,.btn-outline-pink:not(:disabled):not(.disabled):active:focus,.show>.btn-outline-pink.dropdown-toggle:focus {
    box-shadow: 0 0 0 .2rem rgba(232,62,140,.5)
}

.btn-outline-red {
    color: #f86c6b;
    background-color: transparent;
    background-image: none;
    border-color: #f86c6b
}

.btn-outline-red:hover {
    color: #fff;
    background-color: #f86c6b;
    border-color: #f86c6b
}

.btn-outline-red.focus,.btn-outline-red:focus {
    box-shadow: 0 0 0 .2rem hsla(0,91%,70%,.5)
}

.btn-outline-red.disabled,.btn-outline-red:disabled {
    color: #f86c6b;
    background-color: transparent
}

.btn-outline-red:not(:disabled):not(.disabled).active,.btn-outline-red:not(:disabled):not(.disabled):active,.show>.btn-outline-red.dropdown-toggle {
    color: #fff;
    background-color: #f86c6b;
    border-color: #f86c6b
}

.btn-outline-red:not(:disabled):not(.disabled).active:focus,.btn-outline-red:not(:disabled):not(.disabled):active:focus,.show>.btn-outline-red.dropdown-toggle:focus {
    box-shadow: 0 0 0 .2rem hsla(0,91%,70%,.5)
}

.btn-outline-orange {
    color: #f8cb00;
    background-color: transparent;
    background-image: none;
    border-color: #f8cb00
}

.btn-outline-orange:hover {
    color: #151b1e;
    background-color: #f8cb00;
    border-color: #f8cb00
}

.btn-outline-orange.focus,.btn-outline-orange:focus {
    box-shadow: 0 0 0 .2rem rgba(248,203,0,.5)
}

.btn-outline-orange.disabled,.btn-outline-orange:disabled {
    color: #f8cb00;
    background-color: transparent
}

.btn-outline-orange:not(:disabled):not(.disabled).active,.btn-outline-orange:not(:disabled):not(.disabled):active,.show>.btn-outline-orange.dropdown-toggle {
    color: #151b1e;
    background-color: #f8cb00;
    border-color: #f8cb00
}

.btn-outline-orange:not(:disabled):not(.disabled).active:focus,.btn-outline-orange:not(:disabled):not(.disabled):active:focus,.show>.btn-outline-orange.dropdown-toggle:focus {
    box-shadow: 0 0 0 .2rem rgba(248,203,0,.5)
}

.btn-outline-#ff0 {
    color: #ffc107;
    background-color: transparent;
    background-image: none;
    border-color: #ffc107
}

.btn-outline-#ff0:hover {
    color: #151b1e;
    background-color: #ffc107;
    border-color: #ffc107
}

.btn-outline-#ff0.focus,.btn-outline-#ff0:focus {
    box-shadow: 0 0 0 .2rem rgba(255,193,7,.5)
}

.btn-outline-#ff0.disabled,.btn-outline-#ff0:disabled {
    color: #ffc107;
    background-color: transparent
}

.btn-outline-#ff0:not(:disabled):not(.disabled).active,.btn-outline-#ff0:not(:disabled):not(.disabled):active,.show>.btn-outline-#ff0.dropdown-toggle {
    color: #151b1e;
    background-color: #ffc107;
    border-color: #ffc107
}

.btn-outline-#ff0:not(:disabled):not(.disabled).active:focus,.btn-outline-#ff0:not(:disabled):not(.disabled):active:focus,.show>.btn-outline-#ff0.dropdown-toggle:focus {
    box-shadow: 0 0 0 .2rem rgba(255,193,7,.5)
}

.btn-outline-green {
    color: #4dbd74;
    background-color: transparent;
    background-image: none;
    border-color: #4dbd74
}

.btn-outline-green:hover {
    color: #fff;
    background-color: #4dbd74;
    border-color: #4dbd74
}

.btn-outline-green.focus,.btn-outline-green:focus {
    box-shadow: 0 0 0 .2rem rgba(77,189,116,.5)
}

.btn-outline-green.disabled,.btn-outline-green:disabled {
    color: #4dbd74;
    background-color: transparent
}

.btn-outline-green:not(:disabled):not(.disabled).active,.btn-outline-green:not(:disabled):not(.disabled):active,.show>.btn-outline-green.dropdown-toggle {
    color: #fff;
    background-color: #4dbd74;
    border-color: #4dbd74
}

.btn-outline-green:not(:disabled):not(.disabled).active:focus,.btn-outline-green:not(:disabled):not(.disabled):active:focus,.show>.btn-outline-green.dropdown-toggle:focus {
    box-shadow: 0 0 0 .2rem rgba(77,189,116,.5)
}

.btn-outline-teal {
    color: #20c997;
    background-color: transparent;
    background-image: none;
    border-color: #20c997
}

.btn-outline-teal:hover {
    color: #fff;
    background-color: #20c997;
    border-color: #20c997
}

.btn-outline-teal.focus,.btn-outline-teal:focus {
    box-shadow: 0 0 0 .2rem rgba(32,201,151,.5)
}

.btn-outline-teal.disabled,.btn-outline-teal:disabled {
    color: #20c997;
    background-color: transparent
}

.btn-outline-teal:not(:disabled):not(.disabled).active,.btn-outline-teal:not(:disabled):not(.disabled):active,.show>.btn-outline-teal.dropdown-toggle {
    color: #fff;
    background-color: #20c997;
    border-color: #20c997
}

.btn-outline-teal:not(:disabled):not(.disabled).active:focus,.btn-outline-teal:not(:disabled):not(.disabled):active:focus,.show>.btn-outline-teal.dropdown-toggle:focus {
    box-shadow: 0 0 0 .2rem rgba(32,201,151,.5)
}

.btn-outline-cyan {
    color: #63c2de;
    background-color: transparent;
    background-image: none;
    border-color: #63c2de
}

.btn-outline-cyan:hover {
    color: #151b1e;
    background-color: #63c2de;
    border-color: #63c2de
}

.btn-outline-cyan.focus,.btn-outline-cyan:focus {
    box-shadow: 0 0 0 .2rem rgba(99,194,222,.5)
}

.btn-outline-cyan.disabled,.btn-outline-cyan:disabled {
    color: #63c2de;
    background-color: transparent
}

.btn-outline-cyan:not(:disabled):not(.disabled).active,.btn-outline-cyan:not(:disabled):not(.disabled):active,.show>.btn-outline-cyan.dropdown-toggle {
    color: #151b1e;
    background-color: #63c2de;
    border-color: #63c2de
}

.btn-outline-cyan:not(:disabled):not(.disabled).active:focus,.btn-outline-cyan:not(:disabled):not(.disabled):active:focus,.show>.btn-outline-cyan.dropdown-toggle:focus {
    box-shadow: 0 0 0 .2rem rgba(99,194,222,.5)
}

.btn-outline-gray-100 {
    color: #f0f3f5;
    background-color: transparent;
    background-image: none;
    border-color: #f0f3f5
}

.btn-outline-gray-100:hover {
    color: #151b1e;
    background-color: #f0f3f5;
    border-color: #f0f3f5
}

.btn-outline-gray-100.focus,.btn-outline-gray-100:focus {
    box-shadow: 0 0 0 .2rem rgba(240,243,245,.5)
}

.btn-outline-gray-100.disabled,.btn-outline-gray-100:disabled {
    color: #f0f3f5;
    background-color: transparent
}

.btn-outline-gray-100:not(:disabled):not(.disabled).active,.btn-outline-gray-100:not(:disabled):not(.disabled):active,.show>.btn-outline-gray-100.dropdown-toggle {
    color: #151b1e;
    background-color: #f0f3f5;
    border-color: #f0f3f5
}

.btn-outline-gray-100:not(:disabled):not(.disabled).active:focus,.btn-outline-gray-100:not(:disabled):not(.disabled):active:focus,.show>.btn-outline-gray-100.dropdown-toggle:focus {
    box-shadow: 0 0 0 .2rem rgba(240,243,245,.5)
}

.btn-outline-gray-200 {
    color: #c2cfd6;
    background-color: transparent;
    background-image: none;
    border-color: #c2cfd6
}

.btn-outline-gray-200:hover {
    color: #151b1e;
    background-color: #c2cfd6;
    border-color: #c2cfd6
}

.btn-outline-gray-200.focus,.btn-outline-gray-200:focus {
    box-shadow: 0 0 0 .2rem rgba(194,207,214,.5)
}

.btn-outline-gray-200.disabled,.btn-outline-gray-200:disabled {
    color: #c2cfd6;
    background-color: transparent
}

.btn-outline-gray-200:not(:disabled):not(.disabled).active,.btn-outline-gray-200:not(:disabled):not(.disabled):active,.show>.btn-outline-gray-200.dropdown-toggle {
    color: #151b1e;
    background-color: #c2cfd6;
    border-color: #c2cfd6
}

.btn-outline-gray-200:not(:disabled):not(.disabled).active:focus,.btn-outline-gray-200:not(:disabled):not(.disabled):active:focus,.show>.btn-outline-gray-200.dropdown-toggle:focus {
    box-shadow: 0 0 0 .2rem rgba(194,207,214,.5)
}

.btn-outline-gray-300 {
    color: #a4b7c1;
    background-color: transparent;
    background-image: none;
    border-color: #a4b7c1
}

.btn-outline-gray-300:hover {
    color: #151b1e;
    background-color: #a4b7c1;
    border-color: #a4b7c1
}

.btn-outline-gray-300.focus,.btn-outline-gray-300:focus {
    box-shadow: 0 0 0 .2rem rgba(164,183,193,.5)
}

.btn-outline-gray-300.disabled,.btn-outline-gray-300:disabled {
    color: #a4b7c1;
    background-color: transparent
}

.btn-outline-gray-300:not(:disabled):not(.disabled).active,.btn-outline-gray-300:not(:disabled):not(.disabled):active,.show>.btn-outline-gray-300.dropdown-toggle {
    color: #151b1e;
    background-color: #a4b7c1;
    border-color: #a4b7c1
}

.btn-outline-gray-300:not(:disabled):not(.disabled).active:focus,.btn-outline-gray-300:not(:disabled):not(.disabled):active:focus,.show>.btn-outline-gray-300.dropdown-toggle:focus {
    box-shadow: 0 0 0 .2rem rgba(164,183,193,.5)
}

.btn-outline-gray-400 {
    color: #869fac;
    background-color: transparent;
    background-image: none;
    border-color: #869fac
}

.btn-outline-gray-400:hover {
    color: #151b1e;
    background-color: #869fac;
    border-color: #869fac
}

.btn-outline-gray-400.focus,.btn-outline-gray-400:focus {
    box-shadow: 0 0 0 .2rem rgba(134,159,172,.5)
}

.btn-outline-gray-400.disabled,.btn-outline-gray-400:disabled {
    color: #869fac;
    background-color: transparent
}

.btn-outline-gray-400:not(:disabled):not(.disabled).active,.btn-outline-gray-400:not(:disabled):not(.disabled):active,.show>.btn-outline-gray-400.dropdown-toggle {
    color: #151b1e;
    background-color: #869fac;
    border-color: #869fac
}

.btn-outline-gray-400:not(:disabled):not(.disabled).active:focus,.btn-outline-gray-400:not(:disabled):not(.disabled):active:focus,.show>.btn-outline-gray-400.dropdown-toggle:focus {
    box-shadow: 0 0 0 .2rem rgba(134,159,172,.5)
}

.btn-outline-gray-500 {
    color: #678898;
    background-color: transparent;
    background-image: none;
    border-color: #678898
}

.btn-outline-gray-500:hover {
    color: #fff;
    background-color: #678898;
    border-color: #678898
}

.btn-outline-gray-500.focus,.btn-outline-gray-500:focus {
    box-shadow: 0 0 0 .2rem rgba(103,136,152,.5)
}

.btn-outline-gray-500.disabled,.btn-outline-gray-500:disabled {
    color: #678898;
    background-color: transparent
}

.btn-outline-gray-500:not(:disabled):not(.disabled).active,.btn-outline-gray-500:not(:disabled):not(.disabled):active,.show>.btn-outline-gray-500.dropdown-toggle {
    color: #fff;
    background-color: #678898;
    border-color: #678898
}

.btn-outline-gray-500:not(:disabled):not(.disabled).active:focus,.btn-outline-gray-500:not(:disabled):not(.disabled):active:focus,.show>.btn-outline-gray-500.dropdown-toggle:focus {
    box-shadow: 0 0 0 .2rem rgba(103,136,152,.5)
}

.btn-outline-gray-600 {
    color: #536c79;
    background-color: transparent;
    background-image: none;
    border-color: #536c79
}

.btn-outline-gray-600:hover {
    color: #fff;
    background-color: #536c79;
    border-color: #536c79
}

.btn-outline-gray-600.focus,.btn-outline-gray-600:focus {
    box-shadow: 0 0 0 .2rem rgba(83,108,121,.5)
}

.btn-outline-gray-600.disabled,.btn-outline-gray-600:disabled {
    color: #536c79;
    background-color: transparent
}

.btn-outline-gray-600:not(:disabled):not(.disabled).active,.btn-outline-gray-600:not(:disabled):not(.disabled):active,.show>.btn-outline-gray-600.dropdown-toggle {
    color: #fff;
    background-color: #536c79;
    border-color: #536c79
}

.btn-outline-gray-600:not(:disabled):not(.disabled).active:focus,.btn-outline-gray-600:not(:disabled):not(.disabled):active:focus,.show>.btn-outline-gray-600.dropdown-toggle:focus {
    box-shadow: 0 0 0 .2rem rgba(83,108,121,.5)
}

.btn-outline-gray-700 {
    color: #3e515b;
    background-color: transparent;
    background-image: none;
    border-color: #3e515b
}

.btn-outline-gray-700:hover {
    color: #fff;
    background-color: #3e515b;
    border-color: #3e515b
}

.btn-outline-gray-700.focus,.btn-outline-gray-700:focus {
    box-shadow: 0 0 0 .2rem rgba(62,81,91,.5)
}

.btn-outline-gray-700.disabled,.btn-outline-gray-700:disabled {
    color: #3e515b;
    background-color: transparent
}

.btn-outline-gray-700:not(:disabled):not(.disabled).active,.btn-outline-gray-700:not(:disabled):not(.disabled):active,.show>.btn-outline-gray-700.dropdown-toggle {
    color: #fff;
    background-color: #3e515b;
    border-color: #3e515b
}

.btn-outline-gray-700:not(:disabled):not(.disabled).active:focus,.btn-outline-gray-700:not(:disabled):not(.disabled):active:focus,.show>.btn-outline-gray-700.dropdown-toggle:focus {
    box-shadow: 0 0 0 .2rem rgba(62,81,91,.5)
}

.btn-outline-gray-800 {
    color: #29363d;
    background-color: transparent;
    background-image: none;
    border-color: #29363d
}

.btn-outline-gray-800:hover {
    color: #fff;
    background-color: #29363d;
    border-color: #29363d
}

.btn-outline-gray-800.focus,.btn-outline-gray-800:focus {
    box-shadow: 0 0 0 .2rem rgba(41,54,61,.5)
}

.btn-outline-gray-800.disabled,.btn-outline-gray-800:disabled {
    color: #29363d;
    background-color: transparent
}

.btn-outline-gray-800:not(:disabled):not(.disabled).active,.btn-outline-gray-800:not(:disabled):not(.disabled):active,.show>.btn-outline-gray-800.dropdown-toggle {
    color: #fff;
    background-color: #29363d;
    border-color: #29363d
}

.btn-outline-gray-800:not(:disabled):not(.disabled).active:focus,.btn-outline-gray-800:not(:disabled):not(.disabled):active:focus,.show>.btn-outline-gray-800.dropdown-toggle:focus {
    box-shadow: 0 0 0 .2rem rgba(41,54,61,.5)
}

.btn-outline-gray-900 {
    color: #151b1e;
    background-color: transparent;
    background-image: none;
    border-color: #151b1e
}

.btn-outline-gray-900:hover {
    color: #fff;
    background-color: #151b1e;
    border-color: #151b1e
}

.btn-outline-gray-900.focus,.btn-outline-gray-900:focus {
    box-shadow: 0 0 0 .2rem rgba(21,27,30,.5)
}

.btn-outline-gray-900.disabled,.btn-outline-gray-900:disabled {
    color: #151b1e;
    background-color: transparent
}

.btn-outline-gray-900:not(:disabled):not(.disabled).active,.btn-outline-gray-900:not(:disabled):not(.disabled):active,.show>.btn-outline-gray-900.dropdown-toggle {
    color: #fff;
    background-color: #151b1e;
    border-color: #151b1e
}

.btn-outline-gray-900:not(:disabled):not(.disabled).active:focus,.btn-outline-gray-900:not(:disabled):not(.disabled):active:focus,.show>.btn-outline-gray-900.dropdown-toggle:focus {
    box-shadow: 0 0 0 .2rem rgba(21,27,30,.5)
}

.btn-link {
    font-weight: 400;
    color: #20a8d8;
    background-color: transparent
}

.btn-link:hover {
    color: #167495;
    background-color: transparent
}

.btn-link.focus,.btn-link:focus,.btn-link:hover {
    text-decoration: underline;
    border-color: transparent
}

.btn-link.focus,.btn-link:focus {
    box-shadow: none
}

.btn-link.disabled,.btn-link:disabled {
    color: #536c79
}

.btn-group-lg>.btn,.btn-lg {
    padding: .5rem 1rem;
    font-size: 1.09375rem;
    line-height: 1.5;
    border-radius: 0
}

.btn-group-sm>.btn,.btn-sm {
    padding: .25rem .5rem;
    font-size: .76563rem;
    line-height: 1.5;
    border-radius: 0
}

.btn-block {
    display: block;
    width: 100%
}

.btn-block+.btn-block {
    margin-top: .5rem
}

input[type=button].btn-block,input[type=reset].btn-block,input[type=submit].btn-block {
    width: 100%
}

.fade {
    opacity: 0;
    transition: opacity .15s linear
}

.fade.show {
    opacity: 1
}

.collapse {
    display: none
}

.collapse.show {
    display: block
}

tr.collapse.show {
    display: table-row
}

tbody.collapse.show {
    display: table-row-group
}

.collapsing {
    height: 0;
    overflow: hidden;
    transition: height .35s ease
}

.collapsing,.dropdown,.dropup {
    position: relative
}

.dropdown-toggle:after {
    display: inline-block;
    width: 0;
    height: 0;
    margin-left: .255em;
    vertical-align: .255em;
    content: "";
    border-top: .3em solid;
    border-right: .3em solid transparent;
    border-bottom: 0;
    border-left: .3em solid transparent
}

.dropdown-toggle:empty:after {
    margin-left: 0
}

.dropdown-menu {
    position: absolute;
    top: 100%;
    left: 0;
    z-index: 1000;
    display: none;
    float: left;
    min-width: 10rem;
    padding: 0;
    margin: .125rem 0 0;
    font-size: .875rem;
    color: #151b1e;
    text-align: left;
    list-style: none;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #c2cfd6
}

.dropup .dropdown-menu {
    margin-top: 0;
    margin-bottom: .125rem
}

.dropup .dropdown-toggle:after {
    display: inline-block;
    width: 0;
    height: 0;
    margin-left: .255em;
    vertical-align: .255em;
    content: "";
    border-top: 0;
    border-right: .3em solid transparent;
    border-bottom: .3em solid;
    border-left: .3em solid transparent
}

.dropup .dropdown-toggle:empty:after {
    margin-left: 0
}

.dropright .dropdown-menu {
    margin-top: 0;
    margin-left: .125rem
}

.dropright .dropdown-toggle:after {
    display: inline-block;
    width: 0;
    height: 0;
    margin-left: .255em;
    vertical-align: .255em;
    content: "";
    border-top: .3em solid transparent;
    border-bottom: .3em solid transparent;
    border-left: .3em solid
}

.dropright .dropdown-toggle:empty:after {
    margin-left: 0
}

.dropright .dropdown-toggle:after {
    vertical-align: 0
}

.dropleft .dropdown-menu {
    margin-top: 0;
    margin-right: .125rem
}

.dropleft .dropdown-toggle:after {
    display: inline-block;
    width: 0;
    height: 0;
    margin-left: .255em;
    vertical-align: .255em;
    content: "";
    display: none
}

.dropleft .dropdown-toggle:before {
    display: inline-block;
    width: 0;
    height: 0;
    margin-right: .255em;
    vertical-align: .255em;
    content: "";
    border-top: .3em solid transparent;
    border-right: .3em solid;
    border-bottom: .3em solid transparent
}

.dropleft .dropdown-toggle:empty:after {
    margin-left: 0
}

.dropleft .dropdown-toggle:before {
    vertical-align: 0
}

.dropdown-divider {
    height: 0;
    margin: .5rem 0;
    overflow: hidden;
    border-top: 1px solid #f0f3f5
}

.dropdown-item {
    display: block;
    width: 100%;
    padding: .25rem 1.5rem;
    clear: both;
    font-weight: 400;
    color: #151b1e;
    text-align: inherit;
    white-space: nowrap;
    background-color: transparent;
    border: 0
}

.dropdown-item:focus,.dropdown-item:hover {
    color: #0b0e0f;
    text-decoration: none;
    background-color: #f0f3f5
}

.dropdown-item.active,.dropdown-item:active {
    color: #fff;
    text-decoration: none;
    background-color: #20a8d8
}

.dropdown-item.disabled,.dropdown-item:disabled {
    color: #536c79;
    background-color: transparent
}

.dropdown-menu.show {
    display: block
}

.dropdown-header {
    display: block;
    padding: 0 1.5rem;
    margin-bottom: 0;
    font-size: .76563rem;
    color: #536c79;
    white-space: nowrap
}

.btn-group,.btn-group-vertical {
    position: relative;
    display: inline-flex;
    vertical-align: middle
}

.btn-group-vertical>.btn,.btn-group>.btn {
    position: relative;
    flex: 0 1 auto
}

.btn-group-vertical>.btn.active,.btn-group-vertical>.btn:active,.btn-group-vertical>.btn:focus,.btn-group-vertical>.btn:hover,.btn-group>.btn.active,.btn-group>.btn:active,.btn-group>.btn:focus,.btn-group>.btn:hover {
    z-index: 1
}

.btn-group-vertical .btn+.btn,.btn-group-vertical .btn+.btn-group,.btn-group-vertical .btn-group+.btn,.btn-group-vertical .btn-group+.btn-group,.btn-group .btn+.btn,.btn-group .btn+.btn-group,.btn-group .btn-group+.btn,.btn-group .btn-group+.btn-group {
    margin-left: -1px
}

.btn-toolbar {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start
}

.btn-toolbar .input-group {
    width: auto
}

.btn-group>.btn:first-child {
    margin-left: 0
}

.dropdown-toggle-split {
    padding-right: .5625rem;
    padding-left: .5625rem
}

.dropdown-toggle-split:after {
    margin-left: 0
}

.btn-group-sm>.btn+.dropdown-toggle-split,.btn-sm+.dropdown-toggle-split {
    padding-right: .375rem;
    padding-left: .375rem
}

.btn-group-lg>.btn+.dropdown-toggle-split,.btn-lg+.dropdown-toggle-split {
    padding-right: .75rem;
    padding-left: .75rem
}

.btn-group-vertical {
    flex-direction: column;
    align-items: flex-start;
    justify-content: center
}

.btn-group-vertical .btn,.btn-group-vertical .btn-group {
    width: 100%
}

.btn-group-vertical>.btn+.btn,.btn-group-vertical>.btn+.btn-group,.btn-group-vertical>.btn-group+.btn,.btn-group-vertical>.btn-group+.btn-group {
    margin-top: -1px;
    margin-left: 0
}

.btn-group-toggle>.btn,.btn-group-toggle>.btn-group>.btn {
    margin-bottom: 0
}

.btn-group-toggle>.btn-group>.btn input[type=checkbox],.btn-group-toggle>.btn-group>.btn input[type=radio],.btn-group-toggle>.btn input[type=checkbox],.btn-group-toggle>.btn input[type=radio] {
    position: absolute;
    clip: rect(0,0,0,0);
    pointer-events: none
}

.input-group {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    align-items: stretch;
    width: 100%
}

.input-group>.custom-file,.input-group>.custom-select,.input-group>.form-control {
    position: relative;
    flex: 1 1 auto;
    width: 1%;
    margin-bottom: 0
}

.input-group>.custom-file:focus,.input-group>.custom-select:focus,.input-group>.form-control:focus {
    z-index: 3
}

.input-group>.custom-file+.custom-file,.input-group>.custom-file+.custom-select,.input-group>.custom-file+.form-control,.input-group>.custom-select+.custom-file,.input-group>.custom-select+.custom-select,.input-group>.custom-select+.form-control,.input-group>.form-control+.custom-file,.input-group>.form-control+.custom-select,.input-group>.form-control+.form-control {
    margin-left: -1px
}

.input-group>.custom-file {
    display: flex;
    align-items: center
}

.input-group-append,.input-group-prepend {
    display: flex
}

.input-group-append .btn,.input-group-prepend .btn {
    position: relative;
    z-index: 2
}

.input-group-append .btn+.btn,.input-group-append .btn+.input-group-text,.input-group-append .input-group-text+.btn,.input-group-append .input-group-text+.input-group-text,.input-group-prepend .btn+.btn,.input-group-prepend .btn+.input-group-text,.input-group-prepend .input-group-text+.btn,.input-group-prepend .input-group-text+.input-group-text {
    margin-left: -1px
}

.input-group-prepend {
    margin-right: -1px
}

.input-group-append {
    margin-left: -1px
}

.input-group-text {
    display: flex;
    align-items: center;
    padding: .375rem .75rem;
    margin-bottom: 0;
    font-size: .875rem;
    font-weight: 400;
    line-height: 1.5;
    color: #3e515b;
    text-align: center;
    white-space: nowrap;
    background-color: #f0f3f5;
    border: 1px solid #c2cfd6
}

.input-group-text input[type=checkbox],.input-group-text input[type=radio] {
    margin-top: 0
}

.custom-control {
    position: relative;
    display: block;
    min-height: 1.5rem;
    padding-left: 1.5rem
}

.custom-control-inline {
    display: inline-flex;
    margin-right: 1rem
}

.custom-control-input {
    position: absolute;
    z-index: -1;
    opacity: 0
}

.custom-control-input:checked~.custom-control-label:before {
    color: #fff;
    background-color: #20a8d8
}

.custom-control-input:focus~.custom-control-label:before {
    box-shadow: 0 0 0 1px #e4e5e6,0 0 0 .2rem rgba(32,168,216,.25)
}

.custom-control-input:active~.custom-control-label:before {
    color: #fff;
    background-color: #b6e4f4
}

.custom-control-input:disabled~.custom-control-label {
    color: #536c79
}

.custom-control-input:disabled~.custom-control-label:before {
    background-color: #c2cfd6
}

.custom-control-label {
    margin-bottom: 0
}

.custom-control-label:before {
    pointer-events: none;
    user-select: none;
    background-color: #a4b7c1
}

.custom-control-label:after,.custom-control-label:before {
    position: absolute;
    top: .25rem;
    left: 0;
    display: block;
    width: 1rem;
    height: 1rem;
    content: ""
}

.custom-control-label:after {
    background-repeat: no-repeat;
    background-position: 50%;
    background-size: 50% 50%
}

.custom-checkbox .custom-control-input:checked~.custom-control-label:before {
    background-color: #20a8d8
}

.custom-checkbox .custom-control-input:checked~.custom-control-label:after {
    background-image: url(data:image/svg+xml;charset=utf8;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA4IDgiPjxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik02LjU2NC43NWwtMy41OSAzLjYxMi0xLjUzOC0xLjU1TDAgNC4yNiAyLjk3NCA3LjI1IDggMi4xOTN6Ii8+PC9zdmc+)
}

.custom-checkbox .custom-control-input:indeterminate~.custom-control-label:before {
    background-color: #20a8d8
}

.custom-checkbox .custom-control-input:indeterminate~.custom-control-label:after {
    background-image: url(data:image/svg+xml;charset=utf8;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0IDQiPjxwYXRoIHN0cm9rZT0iI2ZmZiIgZD0iTTAgMmg0Ii8+PC9zdmc+)
}

.custom-checkbox .custom-control-input:disabled:checked~.custom-control-label:before {
    background-color: rgba(32,168,216,.5)
}

.custom-checkbox .custom-control-input:disabled:indeterminate~.custom-control-label:before {
    background-color: rgba(32,168,216,.5)
}

.custom-radio .custom-control-label:before {
    border-radius: 50%
}

.custom-radio .custom-control-input:checked~.custom-control-label:before {
    background-color: #20a8d8
}

.custom-radio .custom-control-input:checked~.custom-control-label:after {
    background-image: url(data:image/svg+xml;charset=utf8;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii00IC00IDggOCI+PGNpcmNsZSByPSIzIiBmaWxsPSIjZmZmIi8+PC9zdmc+)
}

.custom-radio .custom-control-input:disabled:checked~.custom-control-label:before {
    background-color: rgba(32,168,216,.5)
}

.custom-select {
    display: inline-block;
    width: 100%;
    height: calc(2.0625rem + 2px);
    padding: .375rem 1.75rem .375rem .75rem;
    line-height: 1.5;
    color: #3e515b;
    vertical-align: middle;
    background: #fff url(data:image/svg+xml;charset=utf8;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0IDUiPjxwYXRoIGZpbGw9IiMyOTM2M2QiIGQ9Ik0yIDAgMCAyaDR6bTAgNUwwIDNoNHoiLz48L3N2Zz4=) no-repeat right .75rem center;
    background-size: 8px 10px;
    border: 1px solid #c2cfd6;
    border-radius: 0;
    appearance: none
}

.custom-select:focus {
    border-color: #8ad4ee;
    outline: 0;
    box-shadow: inset 0 1px 2px rgba(0,0,0,.075),0 0 5px rgba(138,212,238,.5)
}

.custom-select:focus::-ms-value {
    color: #3e515b;
    background-color: #fff
}

.custom-select[multiple],.custom-select[size]:not([size="1"]) {
    height: auto;
    padding-right: .75rem;
    background-image: none
}

.custom-select:disabled {
    color: #536c79;
    background-color: #c2cfd6
}

.custom-select::-ms-expand {
    opacity: 0
}

.custom-select-sm {
    height: calc(1.64844rem + 2px);
    font-size: 75%
}

.custom-select-lg,.custom-select-sm {
    padding-top: .375rem;
    padding-bottom: .375rem
}

.custom-select-lg {
    height: calc(2.64063rem + 2px);
    font-size: 125%
}

.custom-file {
    display: inline-block;
    margin-bottom: 0
}

.custom-file,.custom-file-input {
    position: relative;
    width: 100%;
    height: calc(2.0625rem + 2px)
}

.custom-file-input {
    z-index: 2;
    margin: 0;
    opacity: 0
}

.custom-file-input:focus~.custom-file-control {
    border-color: #8ad4ee;
    box-shadow: 0 0 0 .2rem rgba(32,168,216,.25)
}

.custom-file-input:focus~.custom-file-control:before {
    border-color: #8ad4ee
}

.custom-file-input:lang(en)~.custom-file-label:after {
    content: "Browse"
}

.custom-file-label {
    left: 0;
    z-index: 1;
    height: calc(2.0625rem + 2px);
    background-color: #fff;
    border: 1px solid #c2cfd6
}

.custom-file-label,.custom-file-label:after {
    position: absolute;
    top: 0;
    right: 0;
    padding: .375rem .75rem;
    line-height: 1.5;
    color: #3e515b
}

.custom-file-label:after {
    bottom: 0;
    z-index: 3;
    display: block;
    height: calc((2.0625rem + 2px) - 1px * 2);
    content: "Browse";
    background-color: #f0f3f5;
    border-left: 1px solid #c2cfd6
}

.nav {
    display: flex;
    flex-wrap: wrap;
    padding-left: 0;
    margin-bottom: 0;
    list-style: none
}

.nav-link,.navbar .dropdown-toggle {
    display: block;
    padding: .5rem 1rem
}

.nav-link:focus,.nav-link:hover,.navbar .dropdown-toggle:focus,.navbar .dropdown-toggle:hover {
    text-decoration: none
}

.nav-link.disabled,.navbar .disabled.dropdown-toggle {
    color: #536c79
}

.nav-tabs {
    border-bottom: 1px solid #a4b7c1
}

.nav-tabs .nav-item {
    margin-bottom: -1px
}

.nav-tabs .nav-link,.nav-tabs .navbar .dropdown-toggle,.navbar .nav-tabs .dropdown-toggle {
    border: 1px solid transparent
}

.nav-tabs .nav-link:focus,.nav-tabs .nav-link:hover,.nav-tabs .navbar .dropdown-toggle:focus,.nav-tabs .navbar .dropdown-toggle:hover,.navbar .nav-tabs .dropdown-toggle:focus,.navbar .nav-tabs .dropdown-toggle:hover {
    border-color: #c2cfd6 #c2cfd6 #a4b7c1
}

.nav-tabs .nav-link.disabled,.nav-tabs .navbar .disabled.dropdown-toggle,.navbar .nav-tabs .disabled.dropdown-toggle {
    color: #536c79;
    background-color: transparent;
    border-color: transparent
}

.nav-tabs .nav-item.show .nav-link,.nav-tabs .nav-item.show .navbar .dropdown-toggle,.nav-tabs .nav-link.active,.nav-tabs .navbar .active.dropdown-toggle,.navbar .nav-tabs .active.dropdown-toggle,.navbar .nav-tabs .nav-item.show .dropdown-toggle {
    color: #3e515b;
    background-color: #e4e5e6;
    border-color: #a4b7c1 #a4b7c1 #e4e5e6
}

.nav-tabs .dropdown-menu {
    margin-top: -1px
}

.nav-pills .nav-link.active,.nav-pills .navbar .active.dropdown-toggle,.nav-pills .navbar .show>.dropdown-toggle,.nav-pills .show>.nav-link,.navbar .nav-pills .active.dropdown-toggle,.navbar .nav-pills .show>.dropdown-toggle {
    color: #fff;
    background-color: #20a8d8
}

.nav-fill .nav-item {
    flex: 1 1 auto;
    text-align: center
}

.nav-justified .nav-item {
    flex-basis: 0;
    flex-grow: 1;
    text-align: center
}

.tab-content>.tab-pane {
    display: none
}

.tab-content>.active {
    display: block
}

.navbar {
    position: relative;
    padding: .5rem 1rem
}

.navbar,.navbar>.container,.navbar>.container-fluid {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between
}

.navbar-brand {
    display: inline-block;
    padding-top: .33594rem;
    padding-bottom: .33594rem;
    margin-right: 1rem;
    font-size: 1.09375rem;
    line-height: inherit;
    white-space: nowrap
}

.navbar-brand:focus,.navbar-brand:hover {
    text-decoration: none
}

.navbar-nav {
    display: flex;
    flex-direction: column;
    padding-left: 0;
    margin-bottom: 0;
    list-style: none
}

.navbar-nav .nav-link,.navbar-nav .navbar .dropdown-toggle,.navbar .navbar-nav .dropdown-toggle {
    padding-right: 0;
    padding-left: 0
}

.navbar-nav .dropdown-menu {
    position: static;
    float: none
}

.navbar-text {
    display: inline-block;
    padding-top: .5rem;
    padding-bottom: .5rem
}

.navbar-collapse {
    flex-basis: 100%;
    flex-grow: 1;
    align-items: center
}

.navbar-toggler {
    padding: .25rem .75rem;
    font-size: 1.09375rem;
    line-height: 1;
    background-color: transparent;
    border: 1px solid transparent
}

.navbar-toggler:focus,.navbar-toggler:hover {
    text-decoration: none
}

.navbar-toggler:not(:disabled):not(.disabled) {
    cursor: pointer
}

.navbar-toggler-icon {
    display: inline-block;
    width: 1.5em;
    height: 1.5em;
    vertical-align: middle;
    content: "";
    background: no-repeat 50%;
    background-size: 100% 100%
}

@media(max-width: 575.98px) {
    .navbar-expand-sm>.container,.navbar-expand-sm>.container-fluid {
        padding-right:0;
        padding-left: 0
    }
}

@media(min-width: 576px) {
    .navbar-expand-sm {
        flex-flow:row nowrap;
        justify-content: flex-start
    }

    .navbar-expand-sm .navbar-nav {
        flex-direction: row
    }

    .navbar-expand-sm .navbar-nav .dropdown-menu {
        position: absolute
    }

    .navbar-expand-sm .navbar-nav .dropdown-menu-right {
        right: 0;
        left: auto
    }

    .navbar-expand-sm .navbar-nav .nav-link,.navbar-expand-sm .navbar-nav .navbar .dropdown-toggle,.navbar .navbar-expand-sm .navbar-nav .dropdown-toggle {
        padding-right: .5rem;
        padding-left: .5rem
    }

    .navbar-expand-sm>.container,.navbar-expand-sm>.container-fluid {
        flex-wrap: nowrap
    }

    .navbar-expand-sm .navbar-collapse {
        display: flex!important;
        flex-basis: auto
    }

    .navbar-expand-sm .navbar-toggler {
        display: none
    }

    .navbar-expand-sm .dropup .dropdown-menu {
        top: auto;
        bottom: 100%
    }
}

@media(max-width: 767.98px) {
    .navbar-expand-md>.container,.navbar-expand-md>.container-fluid {
        padding-right:0;
        padding-left: 0
    }
}

@media(min-width: 768px) {
    .navbar-expand-md {
        flex-flow:row nowrap;
        justify-content: flex-start
    }

    .navbar-expand-md .navbar-nav {
        flex-direction: row
    }

    .navbar-expand-md .navbar-nav .dropdown-menu {
        position: absolute
    }

    .navbar-expand-md .navbar-nav .dropdown-menu-right {
        right: 0;
        left: auto
    }

    .navbar-expand-md .navbar-nav .nav-link,.navbar-expand-md .navbar-nav .navbar .dropdown-toggle,.navbar .navbar-expand-md .navbar-nav .dropdown-toggle {
        padding-right: .5rem;
        padding-left: .5rem
    }

    .navbar-expand-md>.container,.navbar-expand-md>.container-fluid {
        flex-wrap: nowrap
    }

    .navbar-expand-md .navbar-collapse {
        display: flex!important;
        flex-basis: auto
    }

    .navbar-expand-md .navbar-toggler {
        display: none
    }

    .navbar-expand-md .dropup .dropdown-menu {
        top: auto;
        bottom: 100%
    }
}

@media(max-width: 991.98px) {
    .navbar-expand-lg>.container,.navbar-expand-lg>.container-fluid {
        padding-right:0;
        padding-left: 0
    }
}

@media(min-width: 992px) {
    .navbar-expand-lg {
        flex-flow:row nowrap;
        justify-content: flex-start
    }

    .navbar-expand-lg .navbar-nav {
        flex-direction: row
    }

    .navbar-expand-lg .navbar-nav .dropdown-menu {
        position: absolute
    }

    .navbar-expand-lg .navbar-nav .dropdown-menu-right {
        right: 0;
        left: auto
    }

    .navbar-expand-lg .navbar-nav .nav-link,.navbar-expand-lg .navbar-nav .navbar .dropdown-toggle,.navbar .navbar-expand-lg .navbar-nav .dropdown-toggle {
        padding-right: .5rem;
        padding-left: .5rem
    }

    .navbar-expand-lg>.container,.navbar-expand-lg>.container-fluid {
        flex-wrap: nowrap
    }

    .navbar-expand-lg .navbar-collapse {
        display: flex!important;
        flex-basis: auto
    }

    .navbar-expand-lg .navbar-toggler {
        display: none
    }

    .navbar-expand-lg .dropup .dropdown-menu {
        top: auto;
        bottom: 100%
    }
}

@media(max-width: 1199.98px) {
    .navbar-expand-xl>.container,.navbar-expand-xl>.container-fluid {
        padding-right:0;
        padding-left: 0
    }
}

@media(min-width: 1200px) {
    .navbar-expand-xl {
        flex-flow:row nowrap;
        justify-content: flex-start
    }

    .navbar-expand-xl .navbar-nav {
        flex-direction: row
    }

    .navbar-expand-xl .navbar-nav .dropdown-menu {
        position: absolute
    }

    .navbar-expand-xl .navbar-nav .dropdown-menu-right {
        right: 0;
        left: auto
    }

    .navbar-expand-xl .navbar-nav .nav-link,.navbar-expand-xl .navbar-nav .navbar .dropdown-toggle,.navbar .navbar-expand-xl .navbar-nav .dropdown-toggle {
        padding-right: .5rem;
        padding-left: .5rem
    }

    .navbar-expand-xl>.container,.navbar-expand-xl>.container-fluid {
        flex-wrap: nowrap
    }

    .navbar-expand-xl .navbar-collapse {
        display: flex!important;
        flex-basis: auto
    }

    .navbar-expand-xl .navbar-toggler {
        display: none
    }

    .navbar-expand-xl .dropup .dropdown-menu {
        top: auto;
        bottom: 100%
    }
}

.navbar-expand {
    flex-flow: row nowrap;
    justify-content: flex-start
}

.navbar-expand>.container,.navbar-expand>.container-fluid {
    padding-right: 0;
    padding-left: 0
}

.navbar-expand .navbar-nav {
    flex-direction: row
}

.navbar-expand .navbar-nav .dropdown-menu {
    position: absolute
}

.navbar-expand .navbar-nav .dropdown-menu-right {
    right: 0;
    left: auto
}

.navbar-expand .navbar-nav .nav-link,.navbar-expand .navbar-nav .navbar .dropdown-toggle,.navbar .navbar-expand .navbar-nav .dropdown-toggle {
    padding-right: .5rem;
    padding-left: .5rem
}

.navbar-expand>.container,.navbar-expand>.container-fluid {
    flex-wrap: nowrap
}

.navbar-expand .navbar-collapse {
    display: flex!important;
    flex-basis: auto
}

.navbar-expand .navbar-toggler {
    display: none
}

.navbar-expand .dropup .dropdown-menu {
    top: auto;
    bottom: 100%
}

.navbar-light .navbar-brand,.navbar-light .navbar-brand:focus,.navbar-light .navbar-brand:hover {
    color: rgba(0,0,0,.9)
}

.navbar-light .navbar-nav .nav-link,.navbar-light .navbar-nav .navbar .dropdown-toggle,.navbar .navbar-light .navbar-nav .dropdown-toggle {
    color: rgba(0,0,0,.5)
}

.navbar-light .navbar-nav .nav-link:focus,.navbar-light .navbar-nav .nav-link:hover,.navbar-light .navbar-nav .navbar .dropdown-toggle:focus,.navbar-light .navbar-nav .navbar .dropdown-toggle:hover,.navbar .navbar-light .navbar-nav .dropdown-toggle:focus,.navbar .navbar-light .navbar-nav .dropdown-toggle:hover {
    color: rgba(0,0,0,.7)
}

.navbar-light .navbar-nav .nav-link.disabled,.navbar-light .navbar-nav .navbar .disabled.dropdown-toggle,.navbar .navbar-light .navbar-nav .disabled.dropdown-toggle {
    color: rgba(0,0,0,.3)
}

.navbar-light .navbar-nav .active>.nav-link,.navbar-light .navbar-nav .nav-link.active,.navbar-light .navbar-nav .nav-link.show,.navbar-light .navbar-nav .navbar .active.dropdown-toggle,.navbar-light .navbar-nav .navbar .active>.dropdown-toggle,.navbar-light .navbar-nav .navbar .show.dropdown-toggle,.navbar-light .navbar-nav .navbar .show>.dropdown-toggle,.navbar-light .navbar-nav .show>.nav-link,.navbar .navbar-light .navbar-nav .active.dropdown-toggle,.navbar .navbar-light .navbar-nav .active>.dropdown-toggle,.navbar .navbar-light .navbar-nav .show.dropdown-toggle,.navbar .navbar-light .navbar-nav .show>.dropdown-toggle {
    color: rgba(0,0,0,.9)
}

.navbar-light .navbar-toggler {
    color: rgba(0,0,0,.5);
    border-color: rgba(0,0,0,.1)
}

.navbar-light .navbar-toggler-icon {
    background-image: url(data:image/svg+xml;charset=utf8;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMzAgMzAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggc3Ryb2tlPSJyZ2JhKDAsMCwwLDAuNSkiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIGQ9Ik00IDdoMjJNNCAxNWgyMk00IDIzaDIyIi8+PC9zdmc+)
}

.navbar-light .navbar-text {
    color: rgba(0,0,0,.5)
}

.navbar-light .navbar-text a,.navbar-light .navbar-text a:focus,.navbar-light .navbar-text a:hover {
    color: rgba(0,0,0,.9)
}

.navbar-dark .navbar-brand,.navbar-dark .navbar-brand:focus,.navbar-dark .navbar-brand:hover {
    color: #fff
}

.navbar-dark .navbar-nav .nav-link,.navbar-dark .navbar-nav .navbar .dropdown-toggle,.navbar .navbar-dark .navbar-nav .dropdown-toggle {
    color: hsla(0,0%,100%,.5)
}

.navbar-dark .navbar-nav .nav-link:focus,.navbar-dark .navbar-nav .nav-link:hover,.navbar-dark .navbar-nav .navbar .dropdown-toggle:focus,.navbar-dark .navbar-nav .navbar .dropdown-toggle:hover,.navbar .navbar-dark .navbar-nav .dropdown-toggle:focus,.navbar .navbar-dark .navbar-nav .dropdown-toggle:hover {
    color: hsla(0,0%,100%,.75)
}

.navbar-dark .navbar-nav .nav-link.disabled,.navbar-dark .navbar-nav .navbar .disabled.dropdown-toggle,.navbar .navbar-dark .navbar-nav .disabled.dropdown-toggle {
    color: hsla(0,0%,100%,.25)
}

.navbar-dark .navbar-nav .active>.nav-link,.navbar-dark .navbar-nav .nav-link.active,.navbar-dark .navbar-nav .nav-link.show,.navbar-dark .navbar-nav .navbar .active.dropdown-toggle,.navbar-dark .navbar-nav .navbar .active>.dropdown-toggle,.navbar-dark .navbar-nav .navbar .show.dropdown-toggle,.navbar-dark .navbar-nav .navbar .show>.dropdown-toggle,.navbar-dark .navbar-nav .show>.nav-link,.navbar .navbar-dark .navbar-nav .active.dropdown-toggle,.navbar .navbar-dark .navbar-nav .active>.dropdown-toggle,.navbar .navbar-dark .navbar-nav .show.dropdown-toggle,.navbar .navbar-dark .navbar-nav .show>.dropdown-toggle {
    color: #fff
}

.navbar-dark .navbar-toggler {
    color: hsla(0,0%,100%,.5);
    border-color: hsla(0,0%,100%,.1)
}

.navbar-dark .navbar-toggler-icon {
    background-image: url(data:image/svg+xml;charset=utf8;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMzAgMzAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuNSkiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIGQ9Ik00IDdoMjJNNCAxNWgyMk00IDIzaDIyIi8+PC9zdmc+)
}

.navbar-dark .navbar-text {
    color: hsla(0,0%,100%,.5)
}

.navbar-dark .navbar-text a,.navbar-dark .navbar-text a:focus,.navbar-dark .navbar-text a:hover {
    color: #fff
}

.card {
    position: relative;
    display: flex;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    background-color: #fff;
    background-clip: border-box;
    border: 1px solid #c2cfd6
}

.card>hr {
    margin-right: 0;
    margin-left: 0
}

.card-block,.card-body {
    flex: 1 1 auto;
    padding: 1.25rem
}

.card-title {
    margin-bottom: .75rem
}

.card-subtitle {
    margin-top: -.375rem
}

.card-subtitle,.card-text:last-child {
    margin-bottom: 0
}

.card-link:hover {
    text-decoration: none
}

.card-link+.card-link {
    margin-left: 1.25rem
}

.card-header {
    padding: .75rem 1.25rem;
    margin-bottom: 0;
    background-color: #f0f3f5;
    border-bottom: 1px solid #c2cfd6
}

.card-header+.list-group .list-group-item:first-child {
    border-top: 0
}

.card-footer {
    padding: .75rem 1.25rem;
    background-color: #f0f3f5;
    border-top: 1px solid #c2cfd6
}

.card-header-tabs {
    margin-bottom: -.75rem;
    border-bottom: 0
}

.card-header-pills,.card-header-tabs {
    margin-right: -.625rem;
    margin-left: -.625rem
}

.card-img-overlay {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    padding: 1.25rem
}

.card-img,.card-img-bottom,.card-img-top {
    width: 100%
}

.card-deck {
    display: flex;
    flex-direction: column
}

.card-deck .card {
    margin-bottom: 15px
}

@media(min-width: 576px) {
    .card-deck {
        flex-flow:row wrap;
        margin-right: -15px;
        margin-left: -15px
    }

    .card-deck .card {
        display: flex;
        flex: 1 0 0%;
        flex-direction: column;
        margin-right: 15px;
        margin-bottom: 0;
        margin-left: 15px
    }
}

.card-group {
    display: flex;
    flex-direction: column
}

.card-group>.card {
    margin-bottom: 15px
}

@media(min-width: 576px) {
    .card-group {
        flex-flow:row wrap
    }

    .card-group>.card {
        flex: 1 0 0%;
        margin-bottom: 0
    }

    .card-group>.card+.card {
        margin-left: 0;
        border-left: 0
    }
}

.card-columns .card {
    margin-bottom: .75rem
}

@media(min-width: 576px) {
    .card-columns {
        column-count:3;
        column-gap: 1.25rem
    }

    .card-columns .card {
        display: inline-block;
        width: 100%
    }
}

.breadcrumb {
    display: flex;
    flex-wrap: wrap;
    padding: .75rem 1rem;
    margin-bottom: 1.5rem;
    list-style: none;
    background-color: #fff
}

.breadcrumb-item+.breadcrumb-item:before {
    display: inline-block;
    padding-right: .5rem;
    padding-left: .5rem;
    color: #536c79;
    content: "/"
}

.breadcrumb-item+.breadcrumb-item:hover:before {
    text-decoration: underline;
    text-decoration: none
}

.breadcrumb-item.active {
    color: #536c79
}

.pagination {
    display: flex;
    padding-left: 0;
    list-style: none
}

.page-link,.pagination-datatables li a,.pagination li a {
    position: relative;
    display: block;
    padding: .5rem .75rem;
    margin-left: -1px;
    line-height: 1.25;
    color: #20a8d8;
    background-color: #fff;
    border: 1px solid #a4b7c1
}

.page-link:hover,.pagination-datatables li a:hover,.pagination li a:hover {
    color: #167495;
    text-decoration: none;
    background-color: #c2cfd6;
    border-color: #a4b7c1
}

.page-link:focus,.pagination-datatables li a:focus,.pagination li a:focus {
    z-index: 2;
    outline: 0;
    box-shadow: 0 0 0 .2rem rgba(32,168,216,.25)
}

.page-link:not(:disabled):not(.disabled),.pagination-datatables li a:not(:disabled):not(.disabled),.pagination li a:not(:disabled):not(.disabled) {
    cursor: pointer
}

.page-item:first-child .page-link,.page-item:first-child .pagination-datatables li a,.page-item:first-child .pagination li a,.pagination-datatables li .page-item:first-child a,.pagination-datatables li:first-child .page-link,.pagination-datatables li:first-child a,.pagination li .page-item:first-child a,.pagination li:first-child .page-link,.pagination li:first-child a {
    margin-left: 0
}

.page-item.active .page-link,.page-item.active .pagination-datatables li a,.page-item.active .pagination li a,.pagination-datatables li.active .page-link,.pagination-datatables li.active a,.pagination-datatables li .page-item.active a,.pagination li.active .page-link,.pagination li.active a,.pagination li .page-item.active a {
    z-index: 1;
    color: #fff;
    background-color: #20a8d8;
    border-color: #20a8d8
}

.page-item.disabled .page-link,.page-item.disabled .pagination-datatables li a,.page-item.disabled .pagination li a,.pagination-datatables li.disabled .page-link,.pagination-datatables li.disabled a,.pagination-datatables li .page-item.disabled a,.pagination li.disabled .page-link,.pagination li.disabled a,.pagination li .page-item.disabled a {
    color: #536c79;
    pointer-events: none;
    cursor: auto;
    background-color: #fff;
    border-color: #a4b7c1
}

.pagination-datatables li .pagination-lg a,.pagination-lg .page-link,.pagination-lg .pagination-datatables li a,.pagination-lg .pagination li a,.pagination li .pagination-lg a {
    padding: .75rem 1.5rem;
    font-size: 1.09375rem;
    line-height: 1.5
}

.pagination-datatables li .pagination-sm a,.pagination-sm .page-link,.pagination-sm .pagination-datatables li a,.pagination-sm .pagination li a,.pagination li .pagination-sm a {
    padding: .25rem .5rem;
    font-size: .76563rem;
    line-height: 1.5
}

.badge {
    display: inline-block;
    padding: .25em .4em;
    font-size: 75%;
    font-weight: 700;
    line-height: 1;
    text-align: center;
    white-space: nowrap;
    vertical-align: baseline
}

.badge:empty {
    display: none
}

.btn .badge {
    position: relative;
    top: -1px
}

.badge-pill {
    padding-right: .6em;
    padding-left: .6em
}

.badge-primary {
    color: #fff;
    background-color: #20a8d8
}

.badge-primary[href]:focus,.badge-primary[href]:hover {
    color: #fff;
    text-decoration: none;
    background-color: #1985ac
}

.badge-secondary {
    color: #151b1e;
    background-color: #a4b7c1
}

.badge-secondary[href]:focus,.badge-secondary[href]:hover {
    color: #151b1e;
    text-decoration: none;
    background-color: #869fac
}

.badge-success {
    color: #fff;
    background-color: #4dbd74
}

.badge-success[href]:focus,.badge-success[href]:hover {
    color: #fff;
    text-decoration: none;
    background-color: #3a9d5d
}

.badge-info {
    color: #151b1e;
    background-color: #63c2de
}

.badge-info[href]:focus,.badge-info[href]:hover {
    color: #151b1e;
    text-decoration: none;
    background-color: #39b2d5
}

.badge-warning {
    color: #151b1e;
    background-color: #ffc107
}

.badge-warning[href]:focus,.badge-warning[href]:hover {
    color: #151b1e;
    text-decoration: none;
    background-color: #d39e00
}

.badge-danger {
    color: #fff;
    background-color: #f86c6b
}

.badge-danger[href]:focus,.badge-danger[href]:hover {
    color: #fff;
    text-decoration: none;
    background-color: #f63c3a
}

.badge-light {
    color: #151b1e;
    background-color: #f0f3f5
}

.badge-light[href]:focus,.badge-light[href]:hover {
    color: #151b1e;
    text-decoration: none;
    background-color: #d1dbe1
}

.badge-dark {
    color: #fff;
    background-color: #29363d
}

.badge-dark[href]:focus,.badge-dark[href]:hover {
    color: #fff;
    text-decoration: none;
    background-color: #151b1f
}

.badge-blue {
    color: #fff;
    background-color: #20a8d8
}

.badge-blue[href]:focus,.badge-blue[href]:hover {
    color: #fff;
    text-decoration: none;
    background-color: #1985ac
}

.badge-indigo {
    color: #fff;
    background-color: #6610f2
}

.badge-indigo[href]:focus,.badge-indigo[href]:hover {
    color: #fff;
    text-decoration: none;
    background-color: #510bc4
}

.badge-purple {
    color: #fff;
    background-color: #6f42c1
}

.badge-purple[href]:focus,.badge-purple[href]:hover {
    color: #fff;
    text-decoration: none;
    background-color: #59339d
}

.badge-pink {
    color: #fff;
    background-color: #e83e8c
}

.badge-pink[href]:focus,.badge-pink[href]:hover {
    color: #fff;
    text-decoration: none;
    background-color: #d91a72
}

.badge-red {
    color: #fff;
    background-color: #f86c6b
}

.badge-red[href]:focus,.badge-red[href]:hover {
    color: #fff;
    text-decoration: none;
    background-color: #f63c3a
}

.badge-orange {
    color: #151b1e;
    background-color: #f8cb00
}

.badge-orange[href]:focus,.badge-orange[href]:hover {
    color: #151b1e;
    text-decoration: none;
    background-color: #c5a100
}

.badge-#ff0 {
    color: #151b1e;
    background-color: #ffc107
}

.badge-#ff0[href]:focus,.badge-#ff0[href]:hover {
    color: #151b1e;
    text-decoration: none;
    background-color: #d39e00
}

.badge-green {
    color: #fff;
    background-color: #4dbd74
}

.badge-green[href]:focus,.badge-green[href]:hover {
    color: #fff;
    text-decoration: none;
    background-color: #3a9d5d
}

.badge-teal {
    color: #fff;
    background-color: #20c997
}

.badge-teal[href]:focus,.badge-teal[href]:hover {
    color: #fff;
    text-decoration: none;
    background-color: #199d76
}

.badge-cyan {
    color: #151b1e;
    background-color: #63c2de
}

.badge-cyan[href]:focus,.badge-cyan[href]:hover {
    color: #151b1e;
    text-decoration: none;
    background-color: #39b2d5
}

.badge-gray-100 {
    color: #151b1e;
    background-color: #f0f3f5
}

.badge-gray-100[href]:focus,.badge-gray-100[href]:hover {
    color: #151b1e;
    text-decoration: none;
    background-color: #d1dbe1
}

.badge-gray-200 {
    color: #151b1e;
    background-color: #c2cfd6
}

.badge-gray-200[href]:focus,.badge-gray-200[href]:hover {
    color: #151b1e;
    text-decoration: none;
    background-color: #a4b7c2
}

.badge-gray-300 {
    color: #151b1e;
    background-color: #a4b7c1
}

.badge-gray-300[href]:focus,.badge-gray-300[href]:hover {
    color: #151b1e;
    text-decoration: none;
    background-color: #869fac
}

.badge-gray-400 {
    color: #151b1e;
    background-color: #869fac
}

.badge-gray-400[href]:focus,.badge-gray-400[href]:hover {
    color: #151b1e;
    text-decoration: none;
    background-color: #688797
}

.badge-gray-500 {
    color: #fff;
    background-color: #678898
}

.badge-gray-500[href]:focus,.badge-gray-500[href]:hover {
    color: #fff;
    text-decoration: none;
    background-color: #526d7a
}

.badge-gray-600 {
    color: #fff;
    background-color: #536c79
}

.badge-gray-600[href]:focus,.badge-gray-600[href]:hover {
    color: #fff;
    text-decoration: none;
    background-color: #3e515b
}

.badge-gray-700 {
    color: #fff;
    background-color: #3e515b
}

.badge-gray-700[href]:focus,.badge-gray-700[href]:hover {
    color: #fff;
    text-decoration: none;
    background-color: #29363d
}

.badge-gray-800 {
    color: #fff;
    background-color: #29363d
}

.badge-gray-800[href]:focus,.badge-gray-800[href]:hover {
    color: #fff;
    text-decoration: none;
    background-color: #151b1f
}

.badge-gray-900 {
    color: #fff;
    background-color: #151b1e
}

.badge-gray-900[href]:focus,.badge-gray-900[href]:hover {
    color: #fff;
    text-decoration: none;
    background-color: #000
}

.jumbotron {
    padding: 2rem 1rem;
    margin-bottom: 2rem;
    background-color: #c2cfd6
}

@media(min-width: 576px) {
    .jumbotron {
        padding:4rem 2rem
    }
}

.jumbotron-fluid {
    padding-right: 0;
    padding-left: 0
}

.alert {
    position: relative;
    padding: .75rem 1.25rem;
    margin-bottom: 1rem;
    border: 1px solid transparent
}

.alert-heading {
    color: inherit
}

.alert-link {
    font-weight: 700
}

.alert-dismissible {
    padding-right: 3.8125rem
}

.alert-dismissible .close {
    position: absolute;
    top: 0;
    right: 0;
    padding: .75rem 1.25rem;
    color: inherit
}

.alert-primary {
    color: #115770;
    background-color: #d2eef7;
    border-color: #c1e7f4
}

.alert-primary hr {
    border-top-color: #abdff0
}

.alert-primary .alert-link {
    color: #0a3544
}

.alert-secondary {
    color: #555f64;
    background-color: #edf1f3;
    border-color: #e6ebee
}

.alert-secondary hr {
    border-top-color: #d7dfe4
}

.alert-secondary .alert-link {
    color: #3e4548
}

.alert-success {
    color: #28623c;
    background-color: #dbf2e3;
    border-color: #cdedd8
}

.alert-success hr {
    border-top-color: #bae6c9
}

.alert-success .alert-link {
    color: #193e26
}

.alert-info {
    color: #336573;
    background-color: #e0f3f8;
    border-color: #d3eef6
}

.alert-info hr {
    border-top-color: #bee6f2
}

.alert-info .alert-link {
    color: #234650
}

.alert-warning {
    color: #856404;
    background-color: #fff3cd;
    border-color: #ffeeba
}

.alert-warning hr {
    border-top-color: #ffe8a1
}

.alert-warning .alert-link {
    color: #533f03
}

.alert-danger {
    color: #813838;
    background-color: #fee2e1;
    border-color: #fdd6d6
}

.alert-danger hr {
    border-top-color: #fcbebe
}

.alert-danger .alert-link {
    color: #5d2929
}

.alert-light {
    color: #7d7e7f;
    background-color: #fcfdfd;
    border-color: #fbfcfc
}

.alert-light hr {
    border-top-color: #ecf1f1
}

.alert-light .alert-link {
    color: #646565
}

.alert-dark {
    color: #151c20;
    background-color: #d4d7d8;
    border-color: #c3c7c9
}

.alert-dark hr {
    border-top-color: #b6babd
}

.alert-dark .alert-link {
    color: #010101
}

.alert-blue {
    color: #115770;
    background-color: #d2eef7;
    border-color: #c1e7f4
}

.alert-blue hr {
    border-top-color: #abdff0
}

.alert-blue .alert-link {
    color: #0a3544
}

.alert-indigo {
    color: #35087e;
    background-color: #e0cffc;
    border-color: #d4bcfb
}

.alert-indigo hr {
    border-top-color: #c5a4fa
}

.alert-indigo .alert-link {
    color: #21054e
}

.alert-purple {
    color: #3a2264;
    background-color: #e2d9f3;
    border-color: #d7caee
}

.alert-purple hr {
    border-top-color: #c8b7e8
}

.alert-purple .alert-link {
    color: #24153e
}

.alert-pink {
    color: #792049;
    background-color: #fad8e8;
    border-color: #f9c9df
}

.alert-pink hr {
    border-top-color: #f6b2d1
}

.alert-pink .alert-link {
    color: #511531
}

.alert-red {
    color: #813838;
    background-color: #fee2e1;
    border-color: #fdd6d6
}

.alert-red hr {
    border-top-color: #fcbebe
}

.alert-red .alert-link {
    color: #5d2929
}

.alert-orange {
    color: #816a00;
    background-color: #fef5cc;
    border-color: #fdf0b8
}

.alert-orange hr {
    border-top-color: #fceb9f
}

.alert-orange .alert-link {
    color: #4e4000
}

.alert-#ff0 {
    color: #856404;
    background-color: #fff3cd;
    border-color: #ffeeba
}

.alert-#ff0 hr {
    border-top-color: #ffe8a1
}

.alert-#ff0 .alert-link {
    color: #533f03
}

.alert-green {
    color: #28623c;
    background-color: #dbf2e3;
    border-color: #cdedd8
}

.alert-green hr {
    border-top-color: #bae6c9
}

.alert-green .alert-link {
    color: #193e26
}

.alert-teal {
    color: #11694f;
    background-color: #d2f4ea;
    border-color: #c1f0e2
}

.alert-teal hr {
    border-top-color: #acebd8
}

.alert-teal .alert-link {
    color: #0a3d2e
}

.alert-cyan {
    color: #336573;
    background-color: #e0f3f8;
    border-color: #d3eef6
}

.alert-cyan hr {
    border-top-color: #bee6f2
}

.alert-cyan .alert-link {
    color: #234650
}

.alert-gray-100 {
    color: #7d7e7f;
    background-color: #fcfdfd;
    border-color: #fbfcfc
}

.alert-gray-100 hr {
    border-top-color: #ecf1f1
}

.alert-gray-100 .alert-link {
    color: #646565
}

.alert-gray-200 {
    color: #656c6f;
    background-color: #f3f5f7;
    border-color: #eef2f4
}

.alert-gray-200 hr {
    border-top-color: #dfe6ea
}

.alert-gray-200 .alert-link {
    color: #4d5254
}

.alert-gray-300 {
    color: #555f64;
    background-color: #edf1f3;
    border-color: #e6ebee
}

.alert-gray-300 hr {
    border-top-color: #d7dfe4
}

.alert-gray-300 .alert-link {
    color: #3e4548
}

.alert-gray-400 {
    color: #465359;
    background-color: #e7ecee;
    border-color: #dde4e8
}

.alert-gray-400 hr {
    border-top-color: #ced8de
}

.alert-gray-400 .alert-link {
    color: #30383c
}

.alert-gray-500 {
    color: #36474f;
    background-color: #e1e7ea;
    border-color: #d4dee2
}

.alert-gray-500 hr {
    border-top-color: #c5d2d8
}

.alert-gray-500 .alert-link {
    color: #212c31
}

.alert-gray-600 {
    color: #2b383f;
    background-color: #dde2e4;
    border-color: #cfd6d9
}

.alert-gray-600 hr {
    border-top-color: #c1cace
}

.alert-gray-600 .alert-link {
    color: #161d21
}

.alert-gray-700 {
    color: #202a2f;
    background-color: #d8dcde;
    border-color: #c9ced1
}

.alert-gray-700 hr {
    border-top-color: #bbc2c5
}

.alert-gray-700 .alert-link {
    color: #0b0f11
}

.alert-gray-800 {
    color: #151c20;
    background-color: #d4d7d8;
    border-color: #c3c7c9
}

.alert-gray-800 hr {
    border-top-color: #b6babd
}

.alert-gray-800 .alert-link {
    color: #010101
}

.alert-gray-900 {
    color: #0b0e10;
    background-color: #d0d1d2;
    border-color: #bdbfc0
}

.alert-gray-900 hr {
    border-top-color: #b0b2b4
}

.alert-gray-900 .alert-link {
    color: #000
}

@keyframes progress-bar-stripes {
    0% {
        background-position: 1rem 0
    }

    to {
        background-position: 0 0
    }
}

.progress {
    display: flex;
    height: 1rem;
    overflow: hidden;
    font-size: .65625rem;
    background-color: #f0f3f5
}

.progress-bar {
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: #fff;
    text-align: center;
    background-color: #20a8d8;
    transition: width .6s ease
}

.progress-bar-striped {
    background-image: linear-gradient(45deg,hsla(0,0%,100%,.15) 25%,transparent 0,transparent 50%,hsla(0,0%,100%,.15) 0,hsla(0,0%,100%,.15) 75%,transparent 0,transparent);
    background-size: 1rem 1rem
}

.progress-bar-animated {
    animation: progress-bar-stripes 1s linear infinite
}

.media {
    display: flex;
    align-items: flex-start
}

.media-body {
    flex: 1
}

.list-group {
    display: flex;
    flex-direction: column;
    padding-left: 0;
    margin-bottom: 0
}

.list-group-item-action {
    width: 100%;
    color: #3e515b;
    text-align: inherit
}

.list-group-item-action:focus,.list-group-item-action:hover {
    color: #3e515b;
    text-decoration: none;
    background-color: #f0f3f5
}

.list-group-item-action:active {
    color: #151b1e;
    background-color: #c2cfd6
}

.list-group-item {
    position: relative;
    display: block;
    padding: .75rem 1.25rem;
    margin-bottom: -1px;
    background-color: #fff;
    border: 1px solid rgba(0,0,0,.125)
}

.list-group-item:last-child {
    margin-bottom: 0
}

.list-group-item:focus,.list-group-item:hover {
    z-index: 1;
    text-decoration: none
}

.list-group-item.disabled,.list-group-item:disabled {
    color: #536c79;
    background-color: #fff
}

.list-group-item.active {
    z-index: 2;
    color: #fff;
    background-color: #20a8d8;
    border-color: #20a8d8
}

.list-group-flush .list-group-item {
    border-right: 0;
    border-left: 0
}

.list-group-flush:first-child .list-group-item:first-child {
    border-top: 0
}

.list-group-flush:last-child .list-group-item:last-child {
    border-bottom: 0
}

.list-group-item-primary {
    color: #115770;
    background-color: #c1e7f4
}

.list-group-item-primary.list-group-item-action:focus,.list-group-item-primary.list-group-item-action:hover {
    color: #115770;
    background-color: #abdff0
}

.list-group-item-primary.list-group-item-action.active {
    color: #fff;
    background-color: #115770;
    border-color: #115770
}

.list-group-item-secondary {
    color: #555f64;
    background-color: #e6ebee
}

.list-group-item-secondary.list-group-item-action:focus,.list-group-item-secondary.list-group-item-action:hover {
    color: #555f64;
    background-color: #d7dfe4
}

.list-group-item-secondary.list-group-item-action.active {
    color: #fff;
    background-color: #555f64;
    border-color: #555f64
}

.list-group-item-success {
    color: #28623c;
    background-color: #cdedd8
}

.list-group-item-success.list-group-item-action:focus,.list-group-item-success.list-group-item-action:hover {
    color: #28623c;
    background-color: #bae6c9
}

.list-group-item-success.list-group-item-action.active {
    color: #fff;
    background-color: #28623c;
    border-color: #28623c
}

.list-group-item-info {
    color: #336573;
    background-color: #d3eef6
}

.list-group-item-info.list-group-item-action:focus,.list-group-item-info.list-group-item-action:hover {
    color: #336573;
    background-color: #bee6f2
}

.list-group-item-info.list-group-item-action.active {
    color: #fff;
    background-color: #336573;
    border-color: #336573
}

.list-group-item-warning {
    color: #856404;
    background-color: #ffeeba
}

.list-group-item-warning.list-group-item-action:focus,.list-group-item-warning.list-group-item-action:hover {
    color: #856404;
    background-color: #ffe8a1
}

.list-group-item-warning.list-group-item-action.active {
    color: #fff;
    background-color: #856404;
    border-color: #856404
}

.list-group-item-danger {
    color: #813838;
    background-color: #fdd6d6
}

.list-group-item-danger.list-group-item-action:focus,.list-group-item-danger.list-group-item-action:hover {
    color: #813838;
    background-color: #fcbebe
}

.list-group-item-danger.list-group-item-action.active {
    color: #fff;
    background-color: #813838;
    border-color: #813838
}

.list-group-item-light {
    color: #7d7e7f;
    background-color: #fbfcfc
}

.list-group-item-light.list-group-item-action:focus,.list-group-item-light.list-group-item-action:hover {
    color: #7d7e7f;
    background-color: #ecf1f1
}

.list-group-item-light.list-group-item-action.active {
    color: #fff;
    background-color: #7d7e7f;
    border-color: #7d7e7f
}

.list-group-item-dark {
    color: #151c20;
    background-color: #c3c7c9
}

.list-group-item-dark.list-group-item-action:focus,.list-group-item-dark.list-group-item-action:hover {
    color: #151c20;
    background-color: #b6babd
}

.list-group-item-dark.list-group-item-action.active {
    color: #fff;
    background-color: #151c20;
    border-color: #151c20
}

.list-group-item-blue {
    color: #115770;
    background-color: #c1e7f4
}

.list-group-item-blue.list-group-item-action:focus,.list-group-item-blue.list-group-item-action:hover {
    color: #115770;
    background-color: #abdff0
}

.list-group-item-blue.list-group-item-action.active {
    color: #fff;
    background-color: #115770;
    border-color: #115770
}

.list-group-item-indigo {
    color: #35087e;
    background-color: #d4bcfb
}

.list-group-item-indigo.list-group-item-action:focus,.list-group-item-indigo.list-group-item-action:hover {
    color: #35087e;
    background-color: #c5a4fa
}

.list-group-item-indigo.list-group-item-action.active {
    color: #fff;
    background-color: #35087e;
    border-color: #35087e
}

.list-group-item-purple {
    color: #3a2264;
    background-color: #d7caee
}

.list-group-item-purple.list-group-item-action:focus,.list-group-item-purple.list-group-item-action:hover {
    color: #3a2264;
    background-color: #c8b7e8
}

.list-group-item-purple.list-group-item-action.active {
    color: #fff;
    background-color: #3a2264;
    border-color: #3a2264
}

.list-group-item-pink {
    color: #792049;
    background-color: #f9c9df
}

.list-group-item-pink.list-group-item-action:focus,.list-group-item-pink.list-group-item-action:hover {
    color: #792049;
    background-color: #f6b2d1
}

.list-group-item-pink.list-group-item-action.active {
    color: #fff;
    background-color: #792049;
    border-color: #792049
}

.list-group-item-red {
    color: #813838;
    background-color: #fdd6d6
}

.list-group-item-red.list-group-item-action:focus,.list-group-item-red.list-group-item-action:hover {
    color: #813838;
    background-color: #fcbebe
}

.list-group-item-red.list-group-item-action.active {
    color: #fff;
    background-color: #813838;
    border-color: #813838
}

.list-group-item-orange {
    color: #816a00;
    background-color: #fdf0b8
}

.list-group-item-orange.list-group-item-action:focus,.list-group-item-orange.list-group-item-action:hover {
    color: #816a00;
    background-color: #fceb9f
}

.list-group-item-orange.list-group-item-action.active {
    color: #fff;
    background-color: #816a00;
    border-color: #816a00
}

.list-group-item-#ff0 {
    color: #856404;
    background-color: #ffeeba
}

.list-group-item-#ff0.list-group-item-action:focus,.list-group-item-#ff0.list-group-item-action:hover {
    color: #856404;
    background-color: #ffe8a1
}

.list-group-item-#ff0.list-group-item-action.active {
    color: #fff;
    background-color: #856404;
    border-color: #856404
}

.list-group-item-green {
    color: #28623c;
    background-color: #cdedd8
}

.list-group-item-green.list-group-item-action:focus,.list-group-item-green.list-group-item-action:hover {
    color: #28623c;
    background-color: #bae6c9
}

.list-group-item-green.list-group-item-action.active {
    color: #fff;
    background-color: #28623c;
    border-color: #28623c
}

.list-group-item-teal {
    color: #11694f;
    background-color: #c1f0e2
}

.list-group-item-teal.list-group-item-action:focus,.list-group-item-teal.list-group-item-action:hover {
    color: #11694f;
    background-color: #acebd8
}

.list-group-item-teal.list-group-item-action.active {
    color: #fff;
    background-color: #11694f;
    border-color: #11694f
}

.list-group-item-cyan {
    color: #336573;
    background-color: #d3eef6
}

.list-group-item-cyan.list-group-item-action:focus,.list-group-item-cyan.list-group-item-action:hover {
    color: #336573;
    background-color: #bee6f2
}

.list-group-item-cyan.list-group-item-action.active {
    color: #fff;
    background-color: #336573;
    border-color: #336573
}

.list-group-item-gray-100 {
    color: #7d7e7f;
    background-color: #fbfcfc
}

.list-group-item-gray-100.list-group-item-action:focus,.list-group-item-gray-100.list-group-item-action:hover {
    color: #7d7e7f;
    background-color: #ecf1f1
}

.list-group-item-gray-100.list-group-item-action.active {
    color: #fff;
    background-color: #7d7e7f;
    border-color: #7d7e7f
}

.list-group-item-gray-200 {
    color: #656c6f;
    background-color: #eef2f4
}

.list-group-item-gray-200.list-group-item-action:focus,.list-group-item-gray-200.list-group-item-action:hover {
    color: #656c6f;
    background-color: #dfe6ea
}

.list-group-item-gray-200.list-group-item-action.active {
    color: #fff;
    background-color: #656c6f;
    border-color: #656c6f
}

.list-group-item-gray-300 {
    color: #555f64;
    background-color: #e6ebee
}

.list-group-item-gray-300.list-group-item-action:focus,.list-group-item-gray-300.list-group-item-action:hover {
    color: #555f64;
    background-color: #d7dfe4
}

.list-group-item-gray-300.list-group-item-action.active {
    color: #fff;
    background-color: #555f64;
    border-color: #555f64
}

.list-group-item-gray-400 {
    color: #465359;
    background-color: #dde4e8
}

.list-group-item-gray-400.list-group-item-action:focus,.list-group-item-gray-400.list-group-item-action:hover {
    color: #465359;
    background-color: #ced8de
}

.list-group-item-gray-400.list-group-item-action.active {
    color: #fff;
    background-color: #465359;
    border-color: #465359
}

.list-group-item-gray-500 {
    color: #36474f;
    background-color: #d4dee2
}

.list-group-item-gray-500.list-group-item-action:focus,.list-group-item-gray-500.list-group-item-action:hover {
    color: #36474f;
    background-color: #c5d2d8
}

.list-group-item-gray-500.list-group-item-action.active {
    color: #fff;
    background-color: #36474f;
    border-color: #36474f
}

.list-group-item-gray-600 {
    color: #2b383f;
    background-color: #cfd6d9
}

.list-group-item-gray-600.list-group-item-action:focus,.list-group-item-gray-600.list-group-item-action:hover {
    color: #2b383f;
    background-color: #c1cace
}

.list-group-item-gray-600.list-group-item-action.active {
    color: #fff;
    background-color: #2b383f;
    border-color: #2b383f
}

.list-group-item-gray-700 {
    color: #202a2f;
    background-color: #c9ced1
}

.list-group-item-gray-700.list-group-item-action:focus,.list-group-item-gray-700.list-group-item-action:hover {
    color: #202a2f;
    background-color: #bbc2c5
}

.list-group-item-gray-700.list-group-item-action.active {
    color: #fff;
    background-color: #202a2f;
    border-color: #202a2f
}

.list-group-item-gray-800 {
    color: #151c20;
    background-color: #c3c7c9
}

.list-group-item-gray-800.list-group-item-action:focus,.list-group-item-gray-800.list-group-item-action:hover {
    color: #151c20;
    background-color: #b6babd
}

.list-group-item-gray-800.list-group-item-action.active {
    color: #fff;
    background-color: #151c20;
    border-color: #151c20
}

.list-group-item-gray-900 {
    color: #0b0e10;
    background-color: #bdbfc0
}

.list-group-item-gray-900.list-group-item-action:focus,.list-group-item-gray-900.list-group-item-action:hover {
    color: #0b0e10;
    background-color: #b0b2b4
}

.list-group-item-gray-900.list-group-item-action.active {
    color: #fff;
    background-color: #0b0e10;
    border-color: #0b0e10
}

.close {
    float: right;
    font-size: 1.3125rem;
    font-weight: 700;
    line-height: 1;
    color: #000;
    text-shadow: 0 1px 0 #fff;
    opacity: .5
}

.close:focus,.close:hover {
    color: #000;
    text-decoration: none;
    opacity: .75
}

.close:not(:disabled):not(.disabled) {
    cursor: pointer
}

button.close {
    padding: 0;
    background-color: transparent;
    border: 0;
    -webkit-appearance: none
}

.modal,.modal-open {
    overflow: hidden
}

.modal {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1050;
    display: none;
    outline: 0
}

.modal-open .modal {
    overflow-x: hidden;
    overflow-y: auto
}

.modal-dialog {
    position: relative;
    width: auto;
    margin: .5rem;
    pointer-events: none
}

.modal.fade .modal-dialog {
    transition: transform .3s ease-out;
    transform: translateY(-25%)
}

.modal.show .modal-dialog {
    transform: translate(0)
}

.modal-dialog-centered {
    display: flex;
    align-items: center;
    min-height: calc(100% - 1rem)
}

.modal-content {
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    pointer-events: auto;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid rgba(0,0,0,.2);
    outline: 0
}

.modal-backdrop {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1040;
    background-color: #000
}

.modal-backdrop.fade {
    opacity: 0
}

.modal-backdrop.show {
    opacity: .5
}

.modal-header {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    padding: 1rem;
    border-bottom: 1px solid #c2cfd6
}

.modal-header .close {
    padding: 1rem;
    margin: -1rem -1rem -1rem auto
}

.modal-title {
    margin-bottom: 0;
    line-height: 1.5
}

.modal-body {
    position: relative;
    flex: 1 1 auto;
    padding: 1rem
}

.modal-footer {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 1rem;
    border-top: 1px solid #c2cfd6
}

.modal-footer>:not(:first-child) {
    margin-left: .25rem
}

.modal-footer>:not(:last-child) {
    margin-right: .25rem
}

.modal-scrollbar-measure {
    position: absolute;
    top: -9999px;
    width: 50px;
    height: 50px;
    overflow: scroll
}

@media(min-width: 576px) {
    .modal-dialog {
        max-width:500px;
        margin: 1.75rem auto
    }

    .modal-dialog-centered {
        min-height: calc(100% - 3.5rem)
    }

    .modal-sm {
        max-width: 300px
    }
}

@media(min-width: 992px) {
    .modal-lg {
        max-width:800px
    }
}

.tooltip {
    position: absolute;
    z-index: 1070;
    display: block;
    margin: 0;
    font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;
    font-style: normal;
    font-weight: 400;
    line-height: 1.5;
    text-align: left;
    text-align: start;
    text-decoration: none;
    text-shadow: none;
    text-transform: none;
    letter-spacing: normal;
    word-break: normal;
    word-spacing: normal;
    white-space: normal;
    line-break: auto;
    font-size: .76563rem;
    word-wrap: break-word;
    opacity: 0
}

.tooltip.show {
    opacity: .9
}

.tooltip .arrow {
    position: absolute;
    display: block;
    width: .8rem;
    height: .4rem
}

.tooltip .arrow:before {
    position: absolute;
    content: "";
    border-color: transparent;
    border-style: solid
}

.bs-tooltip-auto[x-placement^=top],.bs-tooltip-top {
    padding: .4rem 0
}

.bs-tooltip-auto[x-placement^=top] .arrow,.bs-tooltip-top .arrow {
    bottom: 0
}

.bs-tooltip-auto[x-placement^=top] .arrow:before,.bs-tooltip-top .arrow:before {
    top: 0;
    border-width: .4rem .4rem 0;
    border-top-color: #000
}

.bs-tooltip-auto[x-placement^=right],.bs-tooltip-right {
    padding: 0 .4rem
}

.bs-tooltip-auto[x-placement^=right] .arrow,.bs-tooltip-right .arrow {
    left: 0;
    width: .4rem;
    height: .8rem
}

.bs-tooltip-auto[x-placement^=right] .arrow:before,.bs-tooltip-right .arrow:before {
    right: 0;
    border-width: .4rem .4rem .4rem 0;
    border-right-color: #000
}

.bs-tooltip-auto[x-placement^=bottom],.bs-tooltip-bottom {
    padding: .4rem 0
}

.bs-tooltip-auto[x-placement^=bottom] .arrow,.bs-tooltip-bottom .arrow {
    top: 0
}

.bs-tooltip-auto[x-placement^=bottom] .arrow:before,.bs-tooltip-bottom .arrow:before {
    bottom: 0;
    border-width: 0 .4rem .4rem;
    border-bottom-color: #000
}

.bs-tooltip-auto[x-placement^=left],.bs-tooltip-left {
    padding: 0 .4rem
}

.bs-tooltip-auto[x-placement^=left] .arrow,.bs-tooltip-left .arrow {
    right: 0;
    width: .4rem;
    height: .8rem
}

.bs-tooltip-auto[x-placement^=left] .arrow:before,.bs-tooltip-left .arrow:before {
    left: 0;
    border-width: .4rem 0 .4rem .4rem;
    border-left-color: #000
}

.tooltip-inner {
    max-width: 200px;
    padding: .25rem .5rem;
    color: #fff;
    text-align: center;
    background-color: #000
}

.popover {
    top: 0;
    left: 0;
    z-index: 1060;
    max-width: 276px;
    font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;
    font-style: normal;
    font-weight: 400;
    line-height: 1.5;
    text-align: left;
    text-align: start;
    text-decoration: none;
    text-shadow: none;
    text-transform: none;
    letter-spacing: normal;
    word-break: normal;
    word-spacing: normal;
    white-space: normal;
    line-break: auto;
    font-size: .76563rem;
    word-wrap: break-word;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid rgba(0,0,0,.2)
}

.popover,.popover .arrow {
    position: absolute;
    display: block
}

.popover .arrow {
    width: 1rem;
    height: .5rem;
    margin: 0 .3rem
}

.popover .arrow:after,.popover .arrow:before {
    position: absolute;
    display: block;
    content: "";
    border-color: transparent;
    border-style: solid
}

.bs-popover-auto[x-placement^=top],.bs-popover-top {
    margin-bottom: .5rem
}

.bs-popover-auto[x-placement^=top] .arrow,.bs-popover-top .arrow {
    bottom: calc((.5rem + 1px) * -1)
}

.bs-popover-auto[x-placement^=top] .arrow:after,.bs-popover-auto[x-placement^=top] .arrow:before,.bs-popover-top .arrow:after,.bs-popover-top .arrow:before {
    border-width: .5rem .5rem 0
}

.bs-popover-auto[x-placement^=top] .arrow:before,.bs-popover-top .arrow:before {
    bottom: 0;
    border-top-color: rgba(0,0,0,.25)
}

.bs-popover-auto[x-placement^=top] .arrow:after,.bs-popover-top .arrow:after {
    bottom: 1px;
    border-top-color: #fff
}

.bs-popover-auto[x-placement^=right],.bs-popover-right {
    margin-left: .5rem
}

.bs-popover-auto[x-placement^=right] .arrow,.bs-popover-right .arrow {
    left: calc((.5rem + 1px) * -1);
    width: .5rem;
    height: 1rem;
    margin: .3rem 0
}

.bs-popover-auto[x-placement^=right] .arrow:after,.bs-popover-auto[x-placement^=right] .arrow:before,.bs-popover-right .arrow:after,.bs-popover-right .arrow:before {
    border-width: .5rem .5rem .5rem 0
}

.bs-popover-auto[x-placement^=right] .arrow:before,.bs-popover-right .arrow:before {
    left: 0;
    border-right-color: rgba(0,0,0,.25)
}

.bs-popover-auto[x-placement^=right] .arrow:after,.bs-popover-right .arrow:after {
    left: 1px;
    border-right-color: #fff
}

.bs-popover-auto[x-placement^=bottom],.bs-popover-bottom {
    margin-top: .5rem
}

.bs-popover-auto[x-placement^=bottom] .arrow,.bs-popover-bottom .arrow {
    top: calc((.5rem + 1px) * -1)
}

.bs-popover-auto[x-placement^=bottom] .arrow:after,.bs-popover-auto[x-placement^=bottom] .arrow:before,.bs-popover-bottom .arrow:after,.bs-popover-bottom .arrow:before {
    border-width: 0 .5rem .5rem
}

.bs-popover-auto[x-placement^=bottom] .arrow:before,.bs-popover-bottom .arrow:before {
    top: 0;
    border-bottom-color: rgba(0,0,0,.25)
}

.bs-popover-auto[x-placement^=bottom] .arrow:after,.bs-popover-bottom .arrow:after {
    top: 1px;
    border-bottom-color: #fff
}

.bs-popover-auto[x-placement^=bottom] .popover-header:before,.bs-popover-bottom .popover-header:before {
    position: absolute;
    top: 0;
    left: 50%;
    display: block;
    width: 1rem;
    margin-left: -.5rem;
    content: "";
    border-bottom: 1px solid #f7f7f7
}

.bs-popover-auto[x-placement^=left],.bs-popover-left {
    margin-right: .5rem
}

.bs-popover-auto[x-placement^=left] .arrow,.bs-popover-left .arrow {
    right: calc((.5rem + 1px) * -1);
    width: .5rem;
    height: 1rem;
    margin: .3rem 0
}

.bs-popover-auto[x-placement^=left] .arrow:after,.bs-popover-auto[x-placement^=left] .arrow:before,.bs-popover-left .arrow:after,.bs-popover-left .arrow:before {
    border-width: .5rem 0 .5rem .5rem
}

.bs-popover-auto[x-placement^=left] .arrow:before,.bs-popover-left .arrow:before {
    right: 0;
    border-left-color: rgba(0,0,0,.25)
}

.bs-popover-auto[x-placement^=left] .arrow:after,.bs-popover-left .arrow:after {
    right: 1px;
    border-left-color: #fff
}

.popover-header {
    padding: .5rem .75rem;
    margin-bottom: 0;
    font-size: .875rem;
    color: inherit;
    background-color: #f7f7f7;
    border-bottom: 1px solid #ebebeb
}

.popover-header:empty {
    display: none
}

.popover-body {
    padding: .5rem .75rem;
    color: #151b1e
}

.carousel {
    position: relative
}

.carousel-inner {
    position: relative;
    width: 100%;
    overflow: hidden
}

.carousel-item {
    position: relative;
    display: none;
    align-items: center;
    width: 100%;
    transition: transform .6s ease;
    backface-visibility: hidden;
    perspective: 1e3px
}

.carousel-item-next,.carousel-item-prev,.carousel-item.active {
    display: block
}

.carousel-item-next,.carousel-item-prev {
    position: absolute;
    top: 0
}

.carousel-item-next.carousel-item-left,.carousel-item-prev.carousel-item-right {
    transform: translateX(0)
}

@supports(transform-style: preserve-3d) {
    .carousel-item-next.carousel-item-left,.carousel-item-prev.carousel-item-right {
        transform:translateZ(0)
    }
}

.active.carousel-item-right,.carousel-item-next {
    transform: translateX(100%)
}

@supports(transform-style: preserve-3d) {
    .active.carousel-item-right,.carousel-item-next {
        transform:translate3d(100%,0,0)
    }
}

.active.carousel-item-left,.carousel-item-prev {
    transform: translateX(-100%)
}

@supports(transform-style: preserve-3d) {
    .active.carousel-item-left,.carousel-item-prev {
        transform:translate3d(-100%,0,0)
    }
}

.carousel-control-next,.carousel-control-prev {
    position: absolute;
    top: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 15%;
    color: #fff;
    text-align: center;
    opacity: .5
}

.carousel-control-next:focus,.carousel-control-next:hover,.carousel-control-prev:focus,.carousel-control-prev:hover {
    color: #fff;
    text-decoration: none;
    outline: 0;
    opacity: .9
}

.carousel-control-prev {
    left: 0
}

.carousel-control-next {
    right: 0
}

.carousel-control-next-icon,.carousel-control-prev-icon {
    display: inline-block;
    width: 20px;
    height: 20px;
    background: transparent no-repeat 50%;
    background-size: 100% 100%
}

.carousel-control-prev-icon {
    background-image: url(data:image/svg+xml;charset=utf8;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNmZmYiIHZpZXdCb3g9IjAgMCA4IDgiPjxwYXRoIGQ9Ik01LjI1LjBsLTQgNCA0IDQgMS41LTEuNUw0LjI1IDRsMi41LTIuNUw1LjI1LjB6Ii8+PC9zdmc+)
}

.carousel-control-next-icon {
    background-image: url(data:image/svg+xml;charset=utf8;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNmZmYiIHZpZXdCb3g9IjAgMCA4IDgiPjxwYXRoIGQ9Ik0yLjc1LjBsLTEuNSAxLjVMMy43NSA0bC0yLjUgMi41TDIuNzUgOGw0LTQtNC00eiIvPjwvc3ZnPg==)
}

.carousel-indicators {
    position: absolute;
    right: 0;
    bottom: 10px;
    left: 0;
    z-index: 15;
    display: flex;
    justify-content: center;
    padding-left: 0;
    margin-right: 15%;
    margin-left: 15%;
    list-style: none
}

.carousel-indicators li {
    position: relative;
    flex: 0 1 auto;
    width: 30px;
    height: 3px;
    margin-right: 3px;
    margin-left: 3px;
    text-indent: -999px;
    background-color: hsla(0,0%,100%,.5)
}

.carousel-indicators li:before {
    top: -10px
}

.carousel-indicators li:after,.carousel-indicators li:before {
    position: absolute;
    left: 0;
    display: inline-block;
    width: 100%;
    height: 10px;
    content: ""
}

.carousel-indicators li:after {
    bottom: -10px
}

.carousel-indicators .active {
    background-color: #fff
}

.carousel-caption {
    position: absolute;
    right: 15%;
    bottom: 20px;
    left: 15%;
    z-index: 10;
    padding-top: 20px;
    padding-bottom: 20px;
    color: #fff;
    text-align: center
}

.align-baseline {
    vertical-align: baseline!important
}

.align-top {
    vertical-align: top!important
}

.align-middle {
    vertical-align: middle!important
}

.align-bottom {
    vertical-align: bottom!important
}

.align-text-bottom {
    vertical-align: text-bottom!important
}

.align-text-top {
    vertical-align: text-top!important
}

.bg-primary {
    background-color: #20a8d8!important
}

a.bg-primary:focus,a.bg-primary:hover,button.bg-primary:focus,button.bg-primary:hover {
    background-color: #1985ac!important
}

.bg-secondary {
    background-color: #a4b7c1!important
}

a.bg-secondary:focus,a.bg-secondary:hover,button.bg-secondary:focus,button.bg-secondary:hover {
    background-color: #869fac!important
}

.bg-success {
    background-color: #4dbd74!important
}

a.bg-success:focus,a.bg-success:hover,button.bg-success:focus,button.bg-success:hover {
    background-color: #3a9d5d!important
}

.bg-info {
    background-color: #63c2de!important
}

a.bg-info:focus,a.bg-info:hover,button.bg-info:focus,button.bg-info:hover {
    background-color: #39b2d5!important
}

.bg-warning {
    background-color: #ffc107!important
}

a.bg-warning:focus,a.bg-warning:hover,button.bg-warning:focus,button.bg-warning:hover {
    background-color: #d39e00!important
}

.bg-danger {
    background-color: #f86c6b!important
}

a.bg-danger:focus,a.bg-danger:hover,button.bg-danger:focus,button.bg-danger:hover {
    background-color: #f63c3a!important
}

.bg-light {
    background-color: #f0f3f5!important
}

a.bg-light:focus,a.bg-light:hover,button.bg-light:focus,button.bg-light:hover {
    background-color: #d1dbe1!important
}

.bg-dark {
    background-color: #29363d!important
}

a.bg-dark:focus,a.bg-dark:hover,button.bg-dark:focus,button.bg-dark:hover {
    background-color: #151b1f!important
}

.bg-blue {
    background-color: #20a8d8!important
}

a.bg-blue:focus,a.bg-blue:hover,button.bg-blue:focus,button.bg-blue:hover {
    background-color: #1985ac!important
}

.bg-indigo {
    background-color: #6610f2!important
}

a.bg-indigo:focus,a.bg-indigo:hover,button.bg-indigo:focus,button.bg-indigo:hover {
    background-color: #510bc4!important
}

.bg-purple {
    background-color: #6f42c1!important
}

a.bg-purple:focus,a.bg-purple:hover,button.bg-purple:focus,button.bg-purple:hover {
    background-color: #59339d!important
}

.bg-pink {
    background-color: #e83e8c!important
}

a.bg-pink:focus,a.bg-pink:hover,button.bg-pink:focus,button.bg-pink:hover {
    background-color: #d91a72!important
}

.bg-red {
    background-color: #f86c6b!important
}

a.bg-red:focus,a.bg-red:hover,button.bg-red:focus,button.bg-red:hover {
    background-color: #f63c3a!important
}

.bg-orange {
    background-color: #f8cb00!important
}

a.bg-orange:focus,a.bg-orange:hover,button.bg-orange:focus,button.bg-orange:hover {
    background-color: #c5a100!important
}

.bg-#ff0 {
    background-color: #ffc107!important
}

a.bg-#ff0:focus,a.bg-#ff0:hover,button.bg-#ff0:focus,button.bg-#ff0:hover {
    background-color: #d39e00!important
}

.bg-green {
    background-color: #4dbd74!important
}

a.bg-green:focus,a.bg-green:hover,button.bg-green:focus,button.bg-green:hover {
    background-color: #3a9d5d!important
}

.bg-teal {
    background-color: #20c997!important
}

a.bg-teal:focus,a.bg-teal:hover,button.bg-teal:focus,button.bg-teal:hover {
    background-color: #199d76!important
}

.bg-cyan {
    background-color: #63c2de!important
}

a.bg-cyan:focus,a.bg-cyan:hover,button.bg-cyan:focus,button.bg-cyan:hover {
    background-color: #39b2d5!important
}

.bg-gray-100 {
    background-color: #f0f3f5!important
}

a.bg-gray-100:focus,a.bg-gray-100:hover,button.bg-gray-100:focus,button.bg-gray-100:hover {
    background-color: #d1dbe1!important
}

.bg-gray-200 {
    background-color: #c2cfd6!important
}

a.bg-gray-200:focus,a.bg-gray-200:hover,button.bg-gray-200:focus,button.bg-gray-200:hover {
    background-color: #a4b7c2!important
}

.bg-gray-300 {
    background-color: #a4b7c1!important
}

.bg-gray-400,a.bg-gray-300:focus,a.bg-gray-300:hover,button.bg-gray-300:focus,button.bg-gray-300:hover {
    background-color: #869fac!important
}

a.bg-gray-400:focus,a.bg-gray-400:hover,button.bg-gray-400:focus,button.bg-gray-400:hover {
    background-color: #688797!important
}

.bg-gray-500 {
    background-color: #678898!important
}

a.bg-gray-500:focus,a.bg-gray-500:hover,button.bg-gray-500:focus,button.bg-gray-500:hover {
    background-color: #526d7a!important
}

.bg-gray-600 {
    background-color: #536c79!important
}

.bg-gray-700,a.bg-gray-600:focus,a.bg-gray-600:hover,button.bg-gray-600:focus,button.bg-gray-600:hover {
    background-color: #3e515b!important
}

.bg-gray-800,a.bg-gray-700:focus,a.bg-gray-700:hover,button.bg-gray-700:focus,button.bg-gray-700:hover {
    background-color: #29363d!important
}

a.bg-gray-800:focus,a.bg-gray-800:hover,button.bg-gray-800:focus,button.bg-gray-800:hover {
    background-color: #151b1f!important
}

.bg-gray-900 {
    background-color: #151b1e!important
}

a.bg-gray-900:focus,a.bg-gray-900:hover,button.bg-gray-900:focus,button.bg-gray-900:hover {
    background-color: #000!important
}

.bg-white {
    background-color: #fff!important
}

.bg-transparent {
    background-color: transparent!important
}

.border {
    border: 1px solid #a4b7c1!important
}

.border-top {
    border-top: 1px solid #a4b7c1!important
}

.border-right {
    border-right: 1px solid #a4b7c1!important
}

.border-bottom {
    border-bottom: 1px solid #a4b7c1!important
}

.border-left {
    border-left: 1px solid #a4b7c1!important
}

.border-0 {
    border: 0!important
}

.border-top-0 {
    border-top: 0!important
}

.border-right-0 {
    border-right: 0!important
}

.border-bottom-0 {
    border-bottom: 0!important
}

.border-left-0 {
    border-left: 0!important
}

.border-primary {
    border-color: #20a8d8!important
}

.border-secondary {
    border-color: #a4b7c1!important
}

.border-success {
    border-color: #4dbd74!important
}

.border-info {
    border-color: #63c2de!important
}

.border-warning {
    border-color: #ffc107!important
}

.border-danger {
    border-color: #f86c6b!important
}

.border-light {
    border-color: #f0f3f5!important
}

.border-dark {
    border-color: #29363d!important
}

.border-blue {
    border-color: #20a8d8!important
}

.border-indigo {
    border-color: #6610f2!important
}

.border-purple {
    border-color: #6f42c1!important
}

.border-pink {
    border-color: #e83e8c!important
}

.border-red {
    border-color: #f86c6b!important
}

.border-orange {
    border-color: #f8cb00!important
}

.border-#ff0 {
    border-color: #ffc107!important
}

.border-green {
    border-color: #4dbd74!important
}

.border-teal {
    border-color: #20c997!important
}

.border-cyan {
    border-color: #63c2de!important
}

.border-gray-100 {
    border-color: #f0f3f5!important
}

.border-gray-200 {
    border-color: #c2cfd6!important
}

.border-gray-300 {
    border-color: #a4b7c1!important
}

.border-gray-400 {
    border-color: #869fac!important
}

.border-gray-500 {
    border-color: #678898!important
}

.border-gray-600 {
    border-color: #536c79!important
}

.border-gray-700 {
    border-color: #3e515b!important
}

.border-gray-800 {
    border-color: #29363d!important
}

.border-gray-900 {
    border-color: #151b1e!important
}

.border-white {
    border-color: #fff!important
}

.rounded {
    border-radius: .25rem!important
}

.rounded-top {
    border-top-left-radius: .25rem!important
}

.rounded-right,.rounded-top {
    border-top-right-radius: .25rem!important
}

.rounded-bottom,.rounded-right {
    border-bottom-right-radius: .25rem!important
}

.rounded-bottom,.rounded-left {
    border-bottom-left-radius: .25rem!important
}

.rounded-left {
    border-top-left-radius: .25rem!important
}

.rounded-circle {
    border-radius: 50%!important
}

.rounded-0 {
    border-radius: 0!important
}

.clearfix:after {
    display: block;
    clear: both;
    content: ""
}

.d-none {
    display: none!important
}

.d-inline {
    display: inline!important
}

.d-inline-block {
    display: inline-block!important
}

.d-block {
    display: block!important
}

.d-table {
    display: table!important
}

.d-table-row {
    display: table-row!important
}

.d-table-cell {
    display: table-cell!important
}

.d-flex {
    display: flex!important
}

.d-inline-flex {
    display: inline-flex!important
}

@media(min-width: 576px) {
    .d-sm-none {
        display:none!important
    }

    .d-sm-inline {
        display: inline!important
    }

    .d-sm-inline-block {
        display: inline-block!important
    }

    .d-sm-block {
        display: block!important
    }

    .d-sm-table {
        display: table!important
    }

    .d-sm-table-row {
        display: table-row!important
    }

    .d-sm-table-cell {
        display: table-cell!important
    }

    .d-sm-flex {
        display: flex!important
    }

    .d-sm-inline-flex {
        display: inline-flex!important
    }
}

@media(min-width: 768px) {
    .d-md-none {
        display:none!important
    }

    .d-md-inline {
        display: inline!important
    }

    .d-md-inline-block {
        display: inline-block!important
    }

    .d-md-block {
        display: block!important
    }

    .d-md-table {
        display: table!important
    }

    .d-md-table-row {
        display: table-row!important
    }

    .d-md-table-cell {
        display: table-cell!important
    }

    .d-md-flex {
        display: flex!important
    }

    .d-md-inline-flex {
        display: inline-flex!important
    }
}

@media(min-width: 992px) {
    .d-lg-none {
        display:none!important
    }

    .d-lg-inline {
        display: inline!important
    }

    .d-lg-inline-block {
        display: inline-block!important
    }

    .d-lg-block {
        display: block!important
    }

    .d-lg-table {
        display: table!important
    }

    .d-lg-table-row {
        display: table-row!important
    }

    .d-lg-table-cell {
        display: table-cell!important
    }

    .d-lg-flex {
        display: flex!important
    }

    .d-lg-inline-flex {
        display: inline-flex!important
    }
}

@media(min-width: 1200px) {
    .d-xl-none {
        display:none!important
    }

    .d-xl-inline {
        display: inline!important
    }

    .d-xl-inline-block {
        display: inline-block!important
    }

    .d-xl-block {
        display: block!important
    }

    .d-xl-table {
        display: table!important
    }

    .d-xl-table-row {
        display: table-row!important
    }

    .d-xl-table-cell {
        display: table-cell!important
    }

    .d-xl-flex {
        display: flex!important
    }

    .d-xl-inline-flex {
        display: inline-flex!important
    }
}

@media print {
    .d-print-none {
        display: none!important
    }

    .d-print-inline {
        display: inline!important
    }

    .d-print-inline-block {
        display: inline-block!important
    }

    .d-print-block {
        display: block!important
    }

    .d-print-table {
        display: table!important
    }

    .d-print-table-row {
        display: table-row!important
    }

    .d-print-table-cell {
        display: table-cell!important
    }

    .d-print-flex {
        display: flex!important
    }

    .d-print-inline-flex {
        display: inline-flex!important
    }
}

.embed-responsive {
    position: relative;
    display: block;
    width: 100%;
    padding: 0;
    overflow: hidden
}

.embed-responsive:before {
    display: block;
    content: ""
}

.embed-responsive .embed-responsive-item,.embed-responsive embed,.embed-responsive iframe,.embed-responsive object,.embed-responsive video {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 0
}

.embed-responsive-21by9:before {
    padding-top: 42.85714%
}

.embed-responsive-16by9:before {
    padding-top: 56.25%
}

.embed-responsive-4by3:before {
    padding-top: 75%
}

.embed-responsive-1by1:before {
    padding-top: 100%
}

.flex-row {
    flex-direction: row!important
}

.flex-column {
    flex-direction: column!important
}

.flex-row-reverse {
    flex-direction: row-reverse!important
}

.flex-column-reverse {
    flex-direction: column-reverse!important
}

.flex-wrap {
    flex-wrap: wrap!important
}

.flex-nowrap {
    flex-wrap: nowrap!important
}

.flex-wrap-reverse {
    flex-wrap: wrap-reverse!important
}

.justify-content-start {
    justify-content: flex-start!important
}

.justify-content-end {
    justify-content: flex-end!important
}

.justify-content-center {
    justify-content: center!important
}

.justify-content-between {
    justify-content: space-between!important
}

.justify-content-around {
    justify-content: space-around!important
}

.align-items-start {
    align-items: flex-start!important
}

.align-items-end {
    align-items: flex-end!important
}

.align-items-center {
    align-items: center!important
}

.align-items-baseline {
    align-items: baseline!important
}

.align-items-stretch {
    align-items: stretch!important
}

.align-content-start {
    align-content: flex-start!important
}

.align-content-end {
    align-content: flex-end!important
}

.align-content-center {
    align-content: center!important
}

.align-content-between {
    align-content: space-between!important
}

.align-content-around {
    align-content: space-around!important
}

.align-content-stretch {
    align-content: stretch!important
}

.align-self-auto {
    align-self: auto!important
}

.align-self-start {
    align-self: flex-start!important
}

.align-self-end {
    align-self: flex-end!important
}

.align-self-center {
    align-self: center!important
}

.align-self-baseline {
    align-self: baseline!important
}

.align-self-stretch {
    align-self: stretch!important
}

@media(min-width: 576px) {
    .flex-sm-row {
        flex-direction:row!important
    }

    .flex-sm-column {
        flex-direction: column!important
    }

    .flex-sm-row-reverse {
        flex-direction: row-reverse!important
    }

    .flex-sm-column-reverse {
        flex-direction: column-reverse!important
    }

    .flex-sm-wrap {
        flex-wrap: wrap!important
    }

    .flex-sm-nowrap {
        flex-wrap: nowrap!important
    }

    .flex-sm-wrap-reverse {
        flex-wrap: wrap-reverse!important
    }

    .justify-content-sm-start {
        justify-content: flex-start!important
    }

    .justify-content-sm-end {
        justify-content: flex-end!important
    }

    .justify-content-sm-center {
        justify-content: center!important
    }

    .justify-content-sm-between {
        justify-content: space-between!important
    }

    .justify-content-sm-around {
        justify-content: space-around!important
    }

    .align-items-sm-start {
        align-items: flex-start!important
    }

    .align-items-sm-end {
        align-items: flex-end!important
    }

    .align-items-sm-center {
        align-items: center!important
    }

    .align-items-sm-baseline {
        align-items: baseline!important
    }

    .align-items-sm-stretch {
        align-items: stretch!important
    }

    .align-content-sm-start {
        align-content: flex-start!important
    }

    .align-content-sm-end {
        align-content: flex-end!important
    }

    .align-content-sm-center {
        align-content: center!important
    }

    .align-content-sm-between {
        align-content: space-between!important
    }

    .align-content-sm-around {
        align-content: space-around!important
    }

    .align-content-sm-stretch {
        align-content: stretch!important
    }

    .align-self-sm-auto {
        align-self: auto!important
    }

    .align-self-sm-start {
        align-self: flex-start!important
    }

    .align-self-sm-end {
        align-self: flex-end!important
    }

    .align-self-sm-center {
        align-self: center!important
    }

    .align-self-sm-baseline {
        align-self: baseline!important
    }

    .align-self-sm-stretch {
        align-self: stretch!important
    }
}

@media(min-width: 768px) {
    .flex-md-row {
        flex-direction:row!important
    }

    .flex-md-column {
        flex-direction: column!important
    }

    .flex-md-row-reverse {
        flex-direction: row-reverse!important
    }

    .flex-md-column-reverse {
        flex-direction: column-reverse!important
    }

    .flex-md-wrap {
        flex-wrap: wrap!important
    }

    .flex-md-nowrap {
        flex-wrap: nowrap!important
    }

    .flex-md-wrap-reverse {
        flex-wrap: wrap-reverse!important
    }

    .justify-content-md-start {
        justify-content: flex-start!important
    }

    .justify-content-md-end {
        justify-content: flex-end!important
    }

    .justify-content-md-center {
        justify-content: center!important
    }

    .justify-content-md-between {
        justify-content: space-between!important
    }

    .justify-content-md-around {
        justify-content: space-around!important
    }

    .align-items-md-start {
        align-items: flex-start!important
    }

    .align-items-md-end {
        align-items: flex-end!important
    }

    .align-items-md-center {
        align-items: center!important
    }

    .align-items-md-baseline {
        align-items: baseline!important
    }

    .align-items-md-stretch {
        align-items: stretch!important
    }

    .align-content-md-start {
        align-content: flex-start!important
    }

    .align-content-md-end {
        align-content: flex-end!important
    }

    .align-content-md-center {
        align-content: center!important
    }

    .align-content-md-between {
        align-content: space-between!important
    }

    .align-content-md-around {
        align-content: space-around!important
    }

    .align-content-md-stretch {
        align-content: stretch!important
    }

    .align-self-md-auto {
        align-self: auto!important
    }

    .align-self-md-start {
        align-self: flex-start!important
    }

    .align-self-md-end {
        align-self: flex-end!important
    }

    .align-self-md-center {
        align-self: center!important
    }

    .align-self-md-baseline {
        align-self: baseline!important
    }

    .align-self-md-stretch {
        align-self: stretch!important
    }
}

@media(min-width: 992px) {
    .flex-lg-row {
        flex-direction:row!important
    }

    .flex-lg-column {
        flex-direction: column!important
    }

    .flex-lg-row-reverse {
        flex-direction: row-reverse!important
    }

    .flex-lg-column-reverse {
        flex-direction: column-reverse!important
    }

    .flex-lg-wrap {
        flex-wrap: wrap!important
    }

    .flex-lg-nowrap {
        flex-wrap: nowrap!important
    }

    .flex-lg-wrap-reverse {
        flex-wrap: wrap-reverse!important
    }

    .justify-content-lg-start {
        justify-content: flex-start!important
    }

    .justify-content-lg-end {
        justify-content: flex-end!important
    }

    .justify-content-lg-center {
        justify-content: center!important
    }

    .justify-content-lg-between {
        justify-content: space-between!important
    }

    .justify-content-lg-around {
        justify-content: space-around!important
    }

    .align-items-lg-start {
        align-items: flex-start!important
    }

    .align-items-lg-end {
        align-items: flex-end!important
    }

    .align-items-lg-center {
        align-items: center!important
    }

    .align-items-lg-baseline {
        align-items: baseline!important
    }

    .align-items-lg-stretch {
        align-items: stretch!important
    }

    .align-content-lg-start {
        align-content: flex-start!important
    }

    .align-content-lg-end {
        align-content: flex-end!important
    }

    .align-content-lg-center {
        align-content: center!important
    }

    .align-content-lg-between {
        align-content: space-between!important
    }

    .align-content-lg-around {
        align-content: space-around!important
    }

    .align-content-lg-stretch {
        align-content: stretch!important
    }

    .align-self-lg-auto {
        align-self: auto!important
    }

    .align-self-lg-start {
        align-self: flex-start!important
    }

    .align-self-lg-end {
        align-self: flex-end!important
    }

    .align-self-lg-center {
        align-self: center!important
    }

    .align-self-lg-baseline {
        align-self: baseline!important
    }

    .align-self-lg-stretch {
        align-self: stretch!important
    }
}

@media(min-width: 1200px) {
    .flex-xl-row {
        flex-direction:row!important
    }

    .flex-xl-column {
        flex-direction: column!important
    }

    .flex-xl-row-reverse {
        flex-direction: row-reverse!important
    }

    .flex-xl-column-reverse {
        flex-direction: column-reverse!important
    }

    .flex-xl-wrap {
        flex-wrap: wrap!important
    }

    .flex-xl-nowrap {
        flex-wrap: nowrap!important
    }

    .flex-xl-wrap-reverse {
        flex-wrap: wrap-reverse!important
    }

    .justify-content-xl-start {
        justify-content: flex-start!important
    }

    .justify-content-xl-end {
        justify-content: flex-end!important
    }

    .justify-content-xl-center {
        justify-content: center!important
    }

    .justify-content-xl-between {
        justify-content: space-between!important
    }

    .justify-content-xl-around {
        justify-content: space-around!important
    }

    .align-items-xl-start {
        align-items: flex-start!important
    }

    .align-items-xl-end {
        align-items: flex-end!important
    }

    .align-items-xl-center {
        align-items: center!important
    }

    .align-items-xl-baseline {
        align-items: baseline!important
    }

    .align-items-xl-stretch {
        align-items: stretch!important
    }

    .align-content-xl-start {
        align-content: flex-start!important
    }

    .align-content-xl-end {
        align-content: flex-end!important
    }

    .align-content-xl-center {
        align-content: center!important
    }

    .align-content-xl-between {
        align-content: space-between!important
    }

    .align-content-xl-around {
        align-content: space-around!important
    }

    .align-content-xl-stretch {
        align-content: stretch!important
    }

    .align-self-xl-auto {
        align-self: auto!important
    }

    .align-self-xl-start {
        align-self: flex-start!important
    }

    .align-self-xl-end {
        align-self: flex-end!important
    }

    .align-self-xl-center {
        align-self: center!important
    }

    .align-self-xl-baseline {
        align-self: baseline!important
    }

    .align-self-xl-stretch {
        align-self: stretch!important
    }
}

.float-left {
    float: left!important
}

.float-right {
    float: right!important
}

.float-none {
    float: none!important
}

@media(min-width: 576px) {
    .float-sm-left {
        float:left!important
    }

    .float-sm-right {
        float: right!important
    }

    .float-sm-none {
        float: none!important
    }
}

@media(min-width: 768px) {
    .float-md-left {
        float:left!important
    }

    .float-md-right {
        float: right!important
    }

    .float-md-none {
        float: none!important
    }
}

@media(min-width: 992px) {
    .float-lg-left {
        float:left!important
    }

    .float-lg-right {
        float: right!important
    }

    .float-lg-none {
        float: none!important
    }
}

@media(min-width: 1200px) {
    .float-xl-left {
        float:left!important
    }

    .float-xl-right {
        float: right!important
    }

    .float-xl-none {
        float: none!important
    }
}

.position-static {
    position: static!important
}

.position-relative {
    position: relative!important
}

.position-absolute {
    position: absolute!important
}

.position-fixed {
    position: fixed!important
}

.position-sticky {
    position: sticky!important
}

.fixed-top {
    top: 0
}

.fixed-bottom,.fixed-top {
    position: fixed;
    right: 0;
    left: 0;
    z-index: 1030
}

.fixed-bottom {
    bottom: 0
}

@supports(position: sticky) {
    .sticky-top {
        position:sticky;
        top: 0;
        z-index: 1020
    }
}

.sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    overflow: hidden;
    clip: rect(0,0,0,0);
    white-space: nowrap;
    clip-path: inset(50%);
    border: 0
}

.sr-only-focusable:active,.sr-only-focusable:focus {
    position: static;
    width: auto;
    height: auto;
    overflow: visible;
    clip: auto;
    white-space: normal;
    clip-path: none
}

.w-25 {
    width: 25%!important
}

.w-50 {
    width: 50%!important
}

.w-75 {
    width: 75%!important
}

.w-100 {
    width: 100%!important
}

.h-25 {
    height: 25%!important
}

.h-50 {
    height: 50%!important
}

.h-75 {
    height: 75%!important
}

.h-100 {
    height: 100%!important
}

.mw-100 {
    max-width: 100%!important
}

.mh-100 {
    max-height: 100%!important
}

.m-0 {
    margin: 0!important
}

.mt-0,.my-0 {
    margin-top: 0!important
}

.mr-0,.mx-0 {
    margin-right: 0!important
}

.mb-0,.my-0 {
    margin-bottom: 0!important
}

.ml-0,.mx-0 {
    margin-left: 0!important
}

.m-1 {
    margin: .25rem!important
}

.mt-1,.my-1 {
    margin-top: .25rem!important
}

.mr-1,.mx-1 {
    margin-right: .25rem!important
}

.mb-1,.my-1 {
    margin-bottom: .25rem!important
}

.ml-1,.mx-1 {
    margin-left: .25rem!important
}

.m-2 {
    margin: .5rem!important
}

.mt-2,.my-2 {
    margin-top: .5rem!important
}

.mr-2,.mx-2 {
    margin-right: .5rem!important
}

.mb-2,.my-2 {
    margin-bottom: .5rem!important
}

.ml-2,.mx-2 {
    margin-left: .5rem!important
}

.m-3 {
    margin: 1rem!important
}

.mt-3,.my-3 {
    margin-top: 1rem!important
}

.mr-3,.mx-3 {
    margin-right: 1rem!important
}

.mb-3,.my-3 {
    margin-bottom: 1rem!important
}

.ml-3,.mx-3 {
    margin-left: 1rem!important
}

.m-4 {
    margin: 1.5rem!important
}

.mt-4,.my-4 {
    margin-top: 1.5rem!important
}

.mr-4,.mx-4 {
    margin-right: 1.5rem!important
}

.mb-4,.my-4 {
    margin-bottom: 1.5rem!important
}

.ml-4,.mx-4 {
    margin-left: 1.5rem!important
}

.m-5 {
    margin: 3rem!important
}

.mt-5,.my-5 {
    margin-top: 3rem!important
}

.mr-5,.mx-5 {
    margin-right: 3rem!important
}

.mb-5,.my-5 {
    margin-bottom: 3rem!important
}

.ml-5,.mx-5 {
    margin-left: 3rem!important
}

.p-0 {
    padding: 0!important
}

.pt-0,.py-0 {
    padding-top: 0!important
}

.pr-0,.px-0 {
    padding-right: 0!important
}

.pb-0,.py-0 {
    padding-bottom: 0!important
}

.pl-0,.px-0 {
    padding-left: 0!important
}

.p-1 {
    padding: .25rem!important
}

.pt-1,.py-1 {
    padding-top: .25rem!important
}

.pr-1,.px-1 {
    padding-right: .25rem!important
}

.pb-1,.py-1 {
    padding-bottom: .25rem!important
}

.pl-1,.px-1 {
    padding-left: .25rem!important
}

.p-2 {
    padding: .5rem!important
}

.pt-2,.py-2 {
    padding-top: .5rem!important
}

.pr-2,.px-2 {
    padding-right: .5rem!important
}

.pb-2,.py-2 {
    padding-bottom: .5rem!important
}

.pl-2,.px-2 {
    padding-left: .5rem!important
}

.p-3 {
    padding: 1rem!important
}

.pt-3,.py-3 {
    padding-top: 1rem!important
}

.pr-3,.px-3 {
    padding-right: 1rem!important
}

.pb-3,.py-3 {
    padding-bottom: 1rem!important
}

.pl-3,.px-3 {
    padding-left: 1rem!important
}

.p-4 {
    padding: 1.5rem!important
}

.pt-4,.py-4 {
    padding-top: 1.5rem!important
}

.pr-4,.px-4 {
    padding-right: 1.5rem!important
}

.pb-4,.py-4 {
    padding-bottom: 1.5rem!important
}

.pl-4,.px-4 {
    padding-left: 1.5rem!important
}

.p-5 {
    padding: 3rem!important
}

.pt-5,.py-5 {
    padding-top: 3rem!important
}

.pr-5,.px-5 {
    padding-right: 3rem!important
}

.pb-5,.py-5 {
    padding-bottom: 3rem!important
}

.pl-5,.px-5 {
    padding-left: 3rem!important
}

.m-auto {
    margin: auto!important
}

.mt-auto,.my-auto {
    margin-top: auto!important
}

.mr-auto,.mx-auto {
    margin-right: auto!important
}

.mb-auto,.my-auto {
    margin-bottom: auto!important
}

.ml-auto,.mx-auto {
    margin-left: auto!important
}

@media(min-width: 576px) {
    .m-sm-0 {
        margin:0!important
    }

    .mt-sm-0,.my-sm-0 {
        margin-top: 0!important
    }

    .mr-sm-0,.mx-sm-0 {
        margin-right: 0!important
    }

    .mb-sm-0,.my-sm-0 {
        margin-bottom: 0!important
    }

    .ml-sm-0,.mx-sm-0 {
        margin-left: 0!important
    }

    .m-sm-1 {
        margin: .25rem!important
    }

    .mt-sm-1,.my-sm-1 {
        margin-top: .25rem!important
    }

    .mr-sm-1,.mx-sm-1 {
        margin-right: .25rem!important
    }

    .mb-sm-1,.my-sm-1 {
        margin-bottom: .25rem!important
    }

    .ml-sm-1,.mx-sm-1 {
        margin-left: .25rem!important
    }

    .m-sm-2 {
        margin: .5rem!important
    }

    .mt-sm-2,.my-sm-2 {
        margin-top: .5rem!important
    }

    .mr-sm-2,.mx-sm-2 {
        margin-right: .5rem!important
    }

    .mb-sm-2,.my-sm-2 {
        margin-bottom: .5rem!important
    }

    .ml-sm-2,.mx-sm-2 {
        margin-left: .5rem!important
    }

    .m-sm-3 {
        margin: 1rem!important
    }

    .mt-sm-3,.my-sm-3 {
        margin-top: 1rem!important
    }

    .mr-sm-3,.mx-sm-3 {
        margin-right: 1rem!important
    }

    .mb-sm-3,.my-sm-3 {
        margin-bottom: 1rem!important
    }

    .ml-sm-3,.mx-sm-3 {
        margin-left: 1rem!important
    }

    .m-sm-4 {
        margin: 1.5rem!important
    }

    .mt-sm-4,.my-sm-4 {
        margin-top: 1.5rem!important
    }

    .mr-sm-4,.mx-sm-4 {
        margin-right: 1.5rem!important
    }

    .mb-sm-4,.my-sm-4 {
        margin-bottom: 1.5rem!important
    }

    .ml-sm-4,.mx-sm-4 {
        margin-left: 1.5rem!important
    }

    .m-sm-5 {
        margin: 3rem!important
    }

    .mt-sm-5,.my-sm-5 {
        margin-top: 3rem!important
    }

    .mr-sm-5,.mx-sm-5 {
        margin-right: 3rem!important
    }

    .mb-sm-5,.my-sm-5 {
        margin-bottom: 3rem!important
    }

    .ml-sm-5,.mx-sm-5 {
        margin-left: 3rem!important
    }

    .p-sm-0 {
        padding: 0!important
    }

    .pt-sm-0,.py-sm-0 {
        padding-top: 0!important
    }

    .pr-sm-0,.px-sm-0 {
        padding-right: 0!important
    }

    .pb-sm-0,.py-sm-0 {
        padding-bottom: 0!important
    }

    .pl-sm-0,.px-sm-0 {
        padding-left: 0!important
    }

    .p-sm-1 {
        padding: .25rem!important
    }

    .pt-sm-1,.py-sm-1 {
        padding-top: .25rem!important
    }

    .pr-sm-1,.px-sm-1 {
        padding-right: .25rem!important
    }

    .pb-sm-1,.py-sm-1 {
        padding-bottom: .25rem!important
    }

    .pl-sm-1,.px-sm-1 {
        padding-left: .25rem!important
    }

    .p-sm-2 {
        padding: .5rem!important
    }

    .pt-sm-2,.py-sm-2 {
        padding-top: .5rem!important
    }

    .pr-sm-2,.px-sm-2 {
        padding-right: .5rem!important
    }

    .pb-sm-2,.py-sm-2 {
        padding-bottom: .5rem!important
    }

    .pl-sm-2,.px-sm-2 {
        padding-left: .5rem!important
    }

    .p-sm-3 {
        padding: 1rem!important
    }

    .pt-sm-3,.py-sm-3 {
        padding-top: 1rem!important
    }

    .pr-sm-3,.px-sm-3 {
        padding-right: 1rem!important
    }

    .pb-sm-3,.py-sm-3 {
        padding-bottom: 1rem!important
    }

    .pl-sm-3,.px-sm-3 {
        padding-left: 1rem!important
    }

    .p-sm-4 {
        padding: 1.5rem!important
    }

    .pt-sm-4,.py-sm-4 {
        padding-top: 1.5rem!important
    }

    .pr-sm-4,.px-sm-4 {
        padding-right: 1.5rem!important
    }

    .pb-sm-4,.py-sm-4 {
        padding-bottom: 1.5rem!important
    }

    .pl-sm-4,.px-sm-4 {
        padding-left: 1.5rem!important
    }

    .p-sm-5 {
        padding: 3rem!important
    }

    .pt-sm-5,.py-sm-5 {
        padding-top: 3rem!important
    }

    .pr-sm-5,.px-sm-5 {
        padding-right: 3rem!important
    }

    .pb-sm-5,.py-sm-5 {
        padding-bottom: 3rem!important
    }

    .pl-sm-5,.px-sm-5 {
        padding-left: 3rem!important
    }

    .m-sm-auto {
        margin: auto!important
    }

    .mt-sm-auto,.my-sm-auto {
        margin-top: auto!important
    }

    .mr-sm-auto,.mx-sm-auto {
        margin-right: auto!important
    }

    .mb-sm-auto,.my-sm-auto {
        margin-bottom: auto!important
    }

    .ml-sm-auto,.mx-sm-auto {
        margin-left: auto!important
    }
}

@media(min-width: 768px) {
    .m-md-0 {
        margin:0!important
    }

    .mt-md-0,.my-md-0 {
        margin-top: 0!important
    }

    .mr-md-0,.mx-md-0 {
        margin-right: 0!important
    }

    .mb-md-0,.my-md-0 {
        margin-bottom: 0!important
    }

    .ml-md-0,.mx-md-0 {
        margin-left: 0!important
    }

    .m-md-1 {
        margin: .25rem!important
    }

    .mt-md-1,.my-md-1 {
        margin-top: .25rem!important
    }

    .mr-md-1,.mx-md-1 {
        margin-right: .25rem!important
    }

    .mb-md-1,.my-md-1 {
        margin-bottom: .25rem!important
    }

    .ml-md-1,.mx-md-1 {
        margin-left: .25rem!important
    }

    .m-md-2 {
        margin: .5rem!important
    }

    .mt-md-2,.my-md-2 {
        margin-top: .5rem!important
    }

    .mr-md-2,.mx-md-2 {
        margin-right: .5rem!important
    }

    .mb-md-2,.my-md-2 {
        margin-bottom: .5rem!important
    }

    .ml-md-2,.mx-md-2 {
        margin-left: .5rem!important
    }

    .m-md-3 {
        margin: 1rem!important
    }

    .mt-md-3,.my-md-3 {
        margin-top: 1rem!important
    }

    .mr-md-3,.mx-md-3 {
        margin-right: 1rem!important
    }

    .mb-md-3,.my-md-3 {
        margin-bottom: 1rem!important
    }

    .ml-md-3,.mx-md-3 {
        margin-left: 1rem!important
    }

    .m-md-4 {
        margin: 1.5rem!important
    }

    .mt-md-4,.my-md-4 {
        margin-top: 1.5rem!important
    }

    .mr-md-4,.mx-md-4 {
        margin-right: 1.5rem!important
    }

    .mb-md-4,.my-md-4 {
        margin-bottom: 1.5rem!important
    }

    .ml-md-4,.mx-md-4 {
        margin-left: 1.5rem!important
    }

    .m-md-5 {
        margin: 3rem!important
    }

    .mt-md-5,.my-md-5 {
        margin-top: 3rem!important
    }

    .mr-md-5,.mx-md-5 {
        margin-right: 3rem!important
    }

    .mb-md-5,.my-md-5 {
        margin-bottom: 3rem!important
    }

    .ml-md-5,.mx-md-5 {
        margin-left: 3rem!important
    }

    .p-md-0 {
        padding: 0!important
    }

    .pt-md-0,.py-md-0 {
        padding-top: 0!important
    }

    .pr-md-0,.px-md-0 {
        padding-right: 0!important
    }

    .pb-md-0,.py-md-0 {
        padding-bottom: 0!important
    }

    .pl-md-0,.px-md-0 {
        padding-left: 0!important
    }

    .p-md-1 {
        padding: .25rem!important
    }

    .pt-md-1,.py-md-1 {
        padding-top: .25rem!important
    }

    .pr-md-1,.px-md-1 {
        padding-right: .25rem!important
    }

    .pb-md-1,.py-md-1 {
        padding-bottom: .25rem!important
    }

    .pl-md-1,.px-md-1 {
        padding-left: .25rem!important
    }

    .p-md-2 {
        padding: .5rem!important
    }

    .pt-md-2,.py-md-2 {
        padding-top: .5rem!important
    }

    .pr-md-2,.px-md-2 {
        padding-right: .5rem!important
    }

    .pb-md-2,.py-md-2 {
        padding-bottom: .5rem!important
    }

    .pl-md-2,.px-md-2 {
        padding-left: .5rem!important
    }

    .p-md-3 {
        padding: 1rem!important
    }

    .pt-md-3,.py-md-3 {
        padding-top: 1rem!important
    }

    .pr-md-3,.px-md-3 {
        padding-right: 1rem!important
    }

    .pb-md-3,.py-md-3 {
        padding-bottom: 1rem!important
    }

    .pl-md-3,.px-md-3 {
        padding-left: 1rem!important
    }

    .p-md-4 {
        padding: 1.5rem!important
    }

    .pt-md-4,.py-md-4 {
        padding-top: 1.5rem!important
    }

    .pr-md-4,.px-md-4 {
        padding-right: 1.5rem!important
    }

    .pb-md-4,.py-md-4 {
        padding-bottom: 1.5rem!important
    }

    .pl-md-4,.px-md-4 {
        padding-left: 1.5rem!important
    }

    .p-md-5 {
        padding: 3rem!important
    }

    .pt-md-5,.py-md-5 {
        padding-top: 3rem!important
    }

    .pr-md-5,.px-md-5 {
        padding-right: 3rem!important
    }

    .pb-md-5,.py-md-5 {
        padding-bottom: 3rem!important
    }

    .pl-md-5,.px-md-5 {
        padding-left: 3rem!important
    }

    .m-md-auto {
        margin: auto!important
    }

    .mt-md-auto,.my-md-auto {
        margin-top: auto!important
    }

    .mr-md-auto,.mx-md-auto {
        margin-right: auto!important
    }

    .mb-md-auto,.my-md-auto {
        margin-bottom: auto!important
    }

    .ml-md-auto,.mx-md-auto {
        margin-left: auto!important
    }
}

@media(min-width: 992px) {
    .m-lg-0 {
        margin:0!important
    }

    .mt-lg-0,.my-lg-0 {
        margin-top: 0!important
    }

    .mr-lg-0,.mx-lg-0 {
        margin-right: 0!important
    }

    .mb-lg-0,.my-lg-0 {
        margin-bottom: 0!important
    }

    .ml-lg-0,.mx-lg-0 {
        margin-left: 0!important
    }

    .m-lg-1 {
        margin: .25rem!important
    }

    .mt-lg-1,.my-lg-1 {
        margin-top: .25rem!important
    }

    .mr-lg-1,.mx-lg-1 {
        margin-right: .25rem!important
    }

    .mb-lg-1,.my-lg-1 {
        margin-bottom: .25rem!important
    }

    .ml-lg-1,.mx-lg-1 {
        margin-left: .25rem!important
    }

    .m-lg-2 {
        margin: .5rem!important
    }

    .mt-lg-2,.my-lg-2 {
        margin-top: .5rem!important
    }

    .mr-lg-2,.mx-lg-2 {
        margin-right: .5rem!important
    }

    .mb-lg-2,.my-lg-2 {
        margin-bottom: .5rem!important
    }

    .ml-lg-2,.mx-lg-2 {
        margin-left: .5rem!important
    }

    .m-lg-3 {
        margin: 1rem!important
    }

    .mt-lg-3,.my-lg-3 {
        margin-top: 1rem!important
    }

    .mr-lg-3,.mx-lg-3 {
        margin-right: 1rem!important
    }

    .mb-lg-3,.my-lg-3 {
        margin-bottom: 1rem!important
    }

    .ml-lg-3,.mx-lg-3 {
        margin-left: 1rem!important
    }

    .m-lg-4 {
        margin: 1.5rem!important
    }

    .mt-lg-4,.my-lg-4 {
        margin-top: 1.5rem!important
    }

    .mr-lg-4,.mx-lg-4 {
        margin-right: 1.5rem!important
    }

    .mb-lg-4,.my-lg-4 {
        margin-bottom: 1.5rem!important
    }

    .ml-lg-4,.mx-lg-4 {
        margin-left: 1.5rem!important
    }

    .m-lg-5 {
        margin: 3rem!important
    }

    .mt-lg-5,.my-lg-5 {
        margin-top: 3rem!important
    }

    .mr-lg-5,.mx-lg-5 {
        margin-right: 3rem!important
    }

    .mb-lg-5,.my-lg-5 {
        margin-bottom: 3rem!important
    }

    .ml-lg-5,.mx-lg-5 {
        margin-left: 3rem!important
    }

    .p-lg-0 {
        padding: 0!important
    }

    .pt-lg-0,.py-lg-0 {
        padding-top: 0!important
    }

    .pr-lg-0,.px-lg-0 {
        padding-right: 0!important
    }

    .pb-lg-0,.py-lg-0 {
        padding-bottom: 0!important
    }

    .pl-lg-0,.px-lg-0 {
        padding-left: 0!important
    }

    .p-lg-1 {
        padding: .25rem!important
    }

    .pt-lg-1,.py-lg-1 {
        padding-top: .25rem!important
    }

    .pr-lg-1,.px-lg-1 {
        padding-right: .25rem!important
    }

    .pb-lg-1,.py-lg-1 {
        padding-bottom: .25rem!important
    }

    .pl-lg-1,.px-lg-1 {
        padding-left: .25rem!important
    }

    .p-lg-2 {
        padding: .5rem!important
    }

    .pt-lg-2,.py-lg-2 {
        padding-top: .5rem!important
    }

    .pr-lg-2,.px-lg-2 {
        padding-right: .5rem!important
    }

    .pb-lg-2,.py-lg-2 {
        padding-bottom: .5rem!important
    }

    .pl-lg-2,.px-lg-2 {
        padding-left: .5rem!important
    }

    .p-lg-3 {
        padding: 1rem!important
    }

    .pt-lg-3,.py-lg-3 {
        padding-top: 1rem!important
    }

    .pr-lg-3,.px-lg-3 {
        padding-right: 1rem!important
    }

    .pb-lg-3,.py-lg-3 {
        padding-bottom: 1rem!important
    }

    .pl-lg-3,.px-lg-3 {
        padding-left: 1rem!important
    }

    .p-lg-4 {
        padding: 1.5rem!important
    }

    .pt-lg-4,.py-lg-4 {
        padding-top: 1.5rem!important
    }

    .pr-lg-4,.px-lg-4 {
        padding-right: 1.5rem!important
    }

    .pb-lg-4,.py-lg-4 {
        padding-bottom: 1.5rem!important
    }

    .pl-lg-4,.px-lg-4 {
        padding-left: 1.5rem!important
    }

    .p-lg-5 {
        padding: 3rem!important
    }

    .pt-lg-5,.py-lg-5 {
        padding-top: 3rem!important
    }

    .pr-lg-5,.px-lg-5 {
        padding-right: 3rem!important
    }

    .pb-lg-5,.py-lg-5 {
        padding-bottom: 3rem!important
    }

    .pl-lg-5,.px-lg-5 {
        padding-left: 3rem!important
    }

    .m-lg-auto {
        margin: auto!important
    }

    .mt-lg-auto,.my-lg-auto {
        margin-top: auto!important
    }

    .mr-lg-auto,.mx-lg-auto {
        margin-right: auto!important
    }

    .mb-lg-auto,.my-lg-auto {
        margin-bottom: auto!important
    }

    .ml-lg-auto,.mx-lg-auto {
        margin-left: auto!important
    }
}

@media(min-width: 1200px) {
    .m-xl-0 {
        margin:0!important
    }

    .mt-xl-0,.my-xl-0 {
        margin-top: 0!important
    }

    .mr-xl-0,.mx-xl-0 {
        margin-right: 0!important
    }

    .mb-xl-0,.my-xl-0 {
        margin-bottom: 0!important
    }

    .ml-xl-0,.mx-xl-0 {
        margin-left: 0!important
    }

    .m-xl-1 {
        margin: .25rem!important
    }

    .mt-xl-1,.my-xl-1 {
        margin-top: .25rem!important
    }

    .mr-xl-1,.mx-xl-1 {
        margin-right: .25rem!important
    }

    .mb-xl-1,.my-xl-1 {
        margin-bottom: .25rem!important
    }

    .ml-xl-1,.mx-xl-1 {
        margin-left: .25rem!important
    }

    .m-xl-2 {
        margin: .5rem!important
    }

    .mt-xl-2,.my-xl-2 {
        margin-top: .5rem!important
    }

    .mr-xl-2,.mx-xl-2 {
        margin-right: .5rem!important
    }

    .mb-xl-2,.my-xl-2 {
        margin-bottom: .5rem!important
    }

    .ml-xl-2,.mx-xl-2 {
        margin-left: .5rem!important
    }

    .m-xl-3 {
        margin: 1rem!important
    }

    .mt-xl-3,.my-xl-3 {
        margin-top: 1rem!important
    }

    .mr-xl-3,.mx-xl-3 {
        margin-right: 1rem!important
    }

    .mb-xl-3,.my-xl-3 {
        margin-bottom: 1rem!important
    }

    .ml-xl-3,.mx-xl-3 {
        margin-left: 1rem!important
    }

    .m-xl-4 {
        margin: 1.5rem!important
    }

    .mt-xl-4,.my-xl-4 {
        margin-top: 1.5rem!important
    }

    .mr-xl-4,.mx-xl-4 {
        margin-right: 1.5rem!important
    }

    .mb-xl-4,.my-xl-4 {
        margin-bottom: 1.5rem!important
    }

    .ml-xl-4,.mx-xl-4 {
        margin-left: 1.5rem!important
    }

    .m-xl-5 {
        margin: 3rem!important
    }

    .mt-xl-5,.my-xl-5 {
        margin-top: 3rem!important
    }

    .mr-xl-5,.mx-xl-5 {
        margin-right: 3rem!important
    }

    .mb-xl-5,.my-xl-5 {
        margin-bottom: 3rem!important
    }

    .ml-xl-5,.mx-xl-5 {
        margin-left: 3rem!important
    }

    .p-xl-0 {
        padding: 0!important
    }

    .pt-xl-0,.py-xl-0 {
        padding-top: 0!important
    }

    .pr-xl-0,.px-xl-0 {
        padding-right: 0!important
    }

    .pb-xl-0,.py-xl-0 {
        padding-bottom: 0!important
    }

    .pl-xl-0,.px-xl-0 {
        padding-left: 0!important
    }

    .p-xl-1 {
        padding: .25rem!important
    }

    .pt-xl-1,.py-xl-1 {
        padding-top: .25rem!important
    }

    .pr-xl-1,.px-xl-1 {
        padding-right: .25rem!important
    }

    .pb-xl-1,.py-xl-1 {
        padding-bottom: .25rem!important
    }

    .pl-xl-1,.px-xl-1 {
        padding-left: .25rem!important
    }

    .p-xl-2 {
        padding: .5rem!important
    }

    .pt-xl-2,.py-xl-2 {
        padding-top: .5rem!important
    }

    .pr-xl-2,.px-xl-2 {
        padding-right: .5rem!important
    }

    .pb-xl-2,.py-xl-2 {
        padding-bottom: .5rem!important
    }

    .pl-xl-2,.px-xl-2 {
        padding-left: .5rem!important
    }

    .p-xl-3 {
        padding: 1rem!important
    }

    .pt-xl-3,.py-xl-3 {
        padding-top: 1rem!important
    }

    .pr-xl-3,.px-xl-3 {
        padding-right: 1rem!important
    }

    .pb-xl-3,.py-xl-3 {
        padding-bottom: 1rem!important
    }

    .pl-xl-3,.px-xl-3 {
        padding-left: 1rem!important
    }

    .p-xl-4 {
        padding: 1.5rem!important
    }

    .pt-xl-4,.py-xl-4 {
        padding-top: 1.5rem!important
    }

    .pr-xl-4,.px-xl-4 {
        padding-right: 1.5rem!important
    }

    .pb-xl-4,.py-xl-4 {
        padding-bottom: 1.5rem!important
    }

    .pl-xl-4,.px-xl-4 {
        padding-left: 1.5rem!important
    }

    .p-xl-5 {
        padding: 3rem!important
    }

    .pt-xl-5,.py-xl-5 {
        padding-top: 3rem!important
    }

    .pr-xl-5,.px-xl-5 {
        padding-right: 3rem!important
    }

    .pb-xl-5,.py-xl-5 {
        padding-bottom: 3rem!important
    }

    .pl-xl-5,.px-xl-5 {
        padding-left: 3rem!important
    }

    .m-xl-auto {
        margin: auto!important
    }

    .mt-xl-auto,.my-xl-auto {
        margin-top: auto!important
    }

    .mr-xl-auto,.mx-xl-auto {
        margin-right: auto!important
    }

    .mb-xl-auto,.my-xl-auto {
        margin-bottom: auto!important
    }

    .ml-xl-auto,.mx-xl-auto {
        margin-left: auto!important
    }
}

.text-justify {
    text-align: justify!important
}

.text-nowrap {
    white-space: nowrap!important
}

.text-truncate {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap
}

.text-left {
    text-align: left!important
}

.text-right {
    text-align: right!important
}

.text-center {
    text-align: center!important
}

@media(min-width: 576px) {
    .text-sm-left {
        text-align:left!important
    }

    .text-sm-right {
        text-align: right!important
    }

    .text-sm-center {
        text-align: center!important
    }
}

@media(min-width: 768px) {
    .text-md-left {
        text-align:left!important
    }

    .text-md-right {
        text-align: right!important
    }

    .text-md-center {
        text-align: center!important
    }
}

@media(min-width: 992px) {
    .text-lg-left {
        text-align:left!important
    }

    .text-lg-right {
        text-align: right!important
    }

    .text-lg-center {
        text-align: center!important
    }
}

@media(min-width: 1200px) {
    .text-xl-left {
        text-align:left!important
    }

    .text-xl-right {
        text-align: right!important
    }

    .text-xl-center {
        text-align: center!important
    }
}

.text-lowercase {
    text-transform: lowercase!important
}

.text-uppercase {
    text-transform: uppercase!important
}

.text-capitalize {
    text-transform: capitalize!important
}

.font-weight-light {
    font-weight: 300!important
}

.font-weight-normal {
    font-weight: 400!important
}

.font-weight-bold {
    font-weight: 700!important
}

.font-italic {
    font-style: italic!important
}

.text-white {
    color: #fff!important
}

.text-primary {
    color: #20a8d8!important
}

a.text-primary:focus,a.text-primary:hover {
    color: #1985ac!important
}

.text-secondary {
    color: #a4b7c1!important
}

a.text-secondary:focus,a.text-secondary:hover {
    color: #869fac!important
}

.text-success {
    color: #4dbd74!important
}

a.text-success:focus,a.text-success:hover {
    color: #3a9d5d!important
}

.text-info {
    color: #63c2de!important
}

a.text-info:focus,a.text-info:hover {
    color: #39b2d5!important
}

.text-warning {
    color: #ffc107!important
}

a.text-warning:focus,a.text-warning:hover {
    color: #d39e00!important
}

.text-danger {
    color: #f86c6b!important
}

a.text-danger:focus,a.text-danger:hover {
    color: #f63c3a!important
}

.text-light {
    color: #f0f3f5!important
}

a.text-light:focus,a.text-light:hover {
    color: #d1dbe1!important
}

.text-dark {
    color: #29363d!important
}

a.text-dark:focus,a.text-dark:hover {
    color: #151b1f!important
}

.text-blue {
    color: #20a8d8!important
}

a.text-blue:focus,a.text-blue:hover {
    color: #1985ac!important
}

.text-indigo {
    color: #6610f2!important
}

a.text-indigo:focus,a.text-indigo:hover {
    color: #510bc4!important
}

.text-purple {
    color: #6f42c1!important
}

a.text-purple:focus,a.text-purple:hover {
    color: #59339d!important
}

.text-pink {
    color: #e83e8c!important
}

a.text-pink:focus,a.text-pink:hover {
    color: #d91a72!important
}

.text-red {
    color: #f86c6b!important
}

a.text-red:focus,a.text-red:hover {
    color: #f63c3a!important
}

.text-orange {
    color: #f8cb00!important
}

a.text-orange:focus,a.text-orange:hover {
    color: #c5a100!important
}

.text-#ff0 {
    color: #ffc107!important
}

a.text-#ff0:focus,a.text-#ff0:hover {
    color: #d39e00!important
}

.text-green {
    color: #4dbd74!important
}

a.text-green:focus,a.text-green:hover {
    color: #3a9d5d!important
}

.text-teal {
    color: #20c997!important
}

a.text-teal:focus,a.text-teal:hover {
    color: #199d76!important
}

.text-cyan {
    color: #63c2de!important
}

a.text-cyan:focus,a.text-cyan:hover {
    color: #39b2d5!important
}

.text-gray-100 {
    color: #f0f3f5!important
}

a.text-gray-100:focus,a.text-gray-100:hover {
    color: #d1dbe1!important
}

.text-gray-200 {
    color: #c2cfd6!important
}

a.text-gray-200:focus,a.text-gray-200:hover {
    color: #a4b7c2!important
}

.text-gray-300 {
    color: #a4b7c1!important
}

.text-gray-400,a.text-gray-300:focus,a.text-gray-300:hover {
    color: #869fac!important
}

a.text-gray-400:focus,a.text-gray-400:hover {
    color: #688797!important
}

.text-gray-500 {
    color: #678898!important
}

a.text-gray-500:focus,a.text-gray-500:hover {
    color: #526d7a!important
}

.text-gray-600 {
    color: #536c79!important
}

.text-gray-700,a.text-gray-600:focus,a.text-gray-600:hover {
    color: #3e515b!important
}

.text-gray-800,a.text-gray-700:focus,a.text-gray-700:hover {
    color: #29363d!important
}

a.text-gray-800:focus,a.text-gray-800:hover {
    color: #151b1f!important
}

.text-gray-900 {
    color: #151b1e!important
}

a.text-gray-900:focus,a.text-gray-900:hover {
    color: #000!important
}

.text-muted {
    color: #536c79!important
}

.text-hide {
    font: 0/0 a;
    color: transparent;
    text-shadow: none;
    background-color: transparent;
    border: 0
}

.visible {
    visibility: visible!important
}

.invisible {
    visibility: hidden!important
}

@media print {
    *,:after,:before {
        text-shadow: none!important;
        box-shadow: none!important
    }

    a:not(.btn) {
        text-decoration: underline
    }

    abbr[title]:after {
        content: " (" attr(title) ")"
    }

    pre {
        white-space: pre-wrap!important
    }

    blockquote,pre {
        border: 1px solid #999;
        page-break-inside: avoid
    }

    thead {
        display: table-header-group
    }

    img,tr {
        page-break-inside: avoid
    }

    h2,h3,p {
        orphans: 3;
        widows: 3
    }

    h2,h3 {
        page-break-after: avoid
    }

    @page {
        size: a3
    }

    .container,body {
        min-width: 992px!important
    }

    .navbar {
        display: none
    }

    .badge {
        border: 1px solid #000
    }

    .table {
        border-collapse: collapse!important
    }

    .table td,.table th {
        background-color: #fff!important
    }

    .table-bordered td,.table-bordered th {
        border: 1px solid #ddd!important
    }
}

body {
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased
}

.font-xs {
    font-size: .75rem!important
}

.font-sm {
    font-size: .85rem!important
}

.font-lg {
    font-size: 1rem!important
}

.font-xl {
    font-size: 1.25rem!important
}

.font-2xl {
    font-size: 1.5rem!important
}

.font-3xl {
    font-size: 1.75rem!important
}

.font-4xl {
    font-size: 2rem!important
}

.font-5xl {
    font-size: 2.5rem!important
}

.animated {
    animation-duration: 1s
}

.animated.infinite {
    animation-iteration-count: infinite
}

.animated.hinge {
    animation-duration: 2s
}

@keyframes fadeIn {
    0% {
        opacity: 0
    }

    to {
        opacity: 1
    }
}

.fadeIn {
    animation-name: fadeIn
}

.aside-menu {
    z-index: 1019;
    width: 250px;
    color: #29363d;
    background: #fff;
    border-left: 1px solid #a4b7c1
}

.aside-menu .nav-tabs {
    border-color: #a4b7c1
}

.aside-menu .nav-tabs .nav-link,.aside-menu .nav-tabs .navbar .dropdown-toggle,.navbar .aside-menu .nav-tabs .dropdown-toggle {
    padding: .75rem 1rem;
    color: #151b1e;
    border-top: 0
}

.aside-menu .nav-tabs .nav-link.active,.aside-menu .nav-tabs .navbar .active.dropdown-toggle,.navbar .aside-menu .nav-tabs .active.dropdown-toggle {
    color: #20a8d8;
    border-right-color: #a4b7c1;
    border-left-color: #a4b7c1
}

.aside-menu .nav-tabs .nav-item:first-child .nav-link,.aside-menu .nav-tabs .nav-item:first-child .navbar .dropdown-toggle,.navbar .aside-menu .nav-tabs .nav-item:first-child .dropdown-toggle {
    border-left: 0
}

.aside-menu .tab-content {
    position: relative;
    overflow-x: hidden;
    overflow-y: auto;
    border: 0;
    border-top: 1px solid #a4b7c1;
    -ms-overflow-style: -ms-autohiding-scrollbar
}

.aside-menu .tab-content::-webkit-scrollbar {
    width: 10px;
    margin-left: -10px;
    -webkit-appearance: none
}

.aside-menu .tab-content::-webkit-scrollbar-track {
    background-color: #fff;
    border-right: 1px solid #f2f2f2;
    border-left: 1px solid #f2f2f2
}

.aside-menu .tab-content::-webkit-scrollbar-thumb {
    height: 50px;
    background-color: #e6e6e6;
    background-clip: content-box;
    border-color: transparent;
    border-style: solid;
    border-width: 1px 2px
}

.aside-menu .tab-content .tab-pane {
    padding: 0
}

.img-avatar {
    border-radius: 50em
}

.avatar {
    position: relative;
    display: inline-block;
    width: 36px
}

.avatar .img-avatar {
    width: 36px;
    height: 36px
}

.avatar .avatar-status {
    position: absolute;
    right: 0;
    bottom: 0;
    display: block;
    width: 10px;
    height: 10px;
    border: 1px solid #fff;
    border-radius: 50em
}

.avatar.avatar-xs {
    position: relative;
    display: inline-block;
    width: 20px
}

.avatar.avatar-xs .img-avatar {
    width: 20px;
    height: 20px
}

.avatar.avatar-xs .avatar-status {
    position: absolute;
    right: 0;
    bottom: 0;
    display: block;
    width: 8px;
    height: 8px;
    border: 1px solid #fff;
    border-radius: 50em
}

.avatar.avatar-sm {
    position: relative;
    display: inline-block;
    width: 24px
}

.avatar.avatar-sm .img-avatar {
    width: 24px;
    height: 24px
}

.avatar.avatar-sm .avatar-status {
    position: absolute;
    right: 0;
    bottom: 0;
    display: block;
    width: 8px;
    height: 8px;
    border: 1px solid #fff;
    border-radius: 50em
}

.avatar.avatar-lg {
    position: relative;
    display: inline-block;
    width: 72px
}

.avatar.avatar-lg .img-avatar {
    width: 72px;
    height: 72px
}

.avatar.avatar-lg .avatar-status {
    position: absolute;
    right: 0;
    bottom: 0;
    display: block;
    width: 12px;
    height: 12px;
    border: 1px solid #fff;
    border-radius: 50em
}

.avatars-stack .avatar.avatar-xs {
    margin-right: -10px
}

.avatars-stack .avatar {
    margin-right: -15px;
    transition: margin-left .25s,margin-right .25s
}

.avatars-stack .avatar:hover {
    margin-right: 0!important
}

.badge-pill {
    border-radius: 10rem
}

.breadcrumb-menu {
    margin-left: auto
}

.breadcrumb-menu:before {
    display: none
}

.breadcrumb-menu .btn-group {
    vertical-align: top
}

.breadcrumb-menu .btn {
    padding: 0 .75rem;
    color: #536c79;
    vertical-align: top;
    border: 0
}

.breadcrumb-menu .btn.active,.breadcrumb-menu .btn:hover,.breadcrumb-menu .open .btn {
    color: #151b1e;
    background: 0 0
}

.breadcrumb-menu .dropdown-menu {
    min-width: 180px;
    line-height: 1.5
}

.breadcrumb {
    position: relative;
    border-bottom: 1px solid #a4b7c1
}

button {
    cursor: pointer
}

.btn-transparent {
    color: #fff;
    background-color: transparent;
    border-color: transparent
}

.btn [class*=" icon-"],.btn [class^=icon-] {
    display: inline-block;
    margin-top: -2px;
    vertical-align: middle
}

.btn-behance,.btn-css3,.btn-dribbble,.btn-dropbox,.btn-facebook,.btn-flickr,.btn-foursquare,.btn-github,.btn-google-plus,.btn-html5,.btn-instagram,.btn-linkedin,.btn-openid,.btn-pinterest,.btn-reddit,.btn-spotify,.btn-stack-overflow,.btn-tumblr,.btn-twitter,.btn-vimeo,.btn-vine,.btn-vk,.btn-xing,.btn-yahoo,.btn-youtube {
    position: relative;
    overflow: hidden;
    color: #fff!important;
    text-align: center;
    padding: .375rem .75rem;
    font-size: .875rem;
    line-height: 1.5;
    border: 0
}

.btn-behance:before,.btn-css3:before,.btn-dribbble:before,.btn-dropbox:before,.btn-facebook:before,.btn-flickr:before,.btn-foursquare:before,.btn-github:before,.btn-google-plus:before,.btn-html5:before,.btn-instagram:before,.btn-linkedin:before,.btn-openid:before,.btn-pinterest:before,.btn-reddit:before,.btn-spotify:before,.btn-stack-overflow:before,.btn-tumblr:before,.btn-twitter:before,.btn-vimeo:before,.btn-vine:before,.btn-vk:before,.btn-xing:before,.btn-yahoo:before,.btn-youtube:before {
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    font-family: FontAwesome;
    font-style: normal;
    font-weight: 400;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased
}

.btn-behance:hover,.btn-css3:hover,.btn-dribbble:hover,.btn-dropbox:hover,.btn-facebook:hover,.btn-flickr:hover,.btn-foursquare:hover,.btn-github:hover,.btn-google-plus:hover,.btn-html5:hover,.btn-instagram:hover,.btn-linkedin:hover,.btn-openid:hover,.btn-pinterest:hover,.btn-reddit:hover,.btn-spotify:hover,.btn-stack-overflow:hover,.btn-tumblr:hover,.btn-twitter:hover,.btn-vimeo:hover,.btn-vine:hover,.btn-vk:hover,.btn-xing:hover,.btn-yahoo:hover,.btn-youtube:hover {
    color: #fff
}

.btn-behance.icon span,.btn-behance.text:before,.btn-css3.icon span,.btn-css3.text:before,.btn-dribbble.icon span,.btn-dribbble.text:before,.btn-dropbox.icon span,.btn-dropbox.text:before,.btn-facebook.icon span,.btn-facebook.text:before,.btn-flickr.icon span,.btn-flickr.text:before,.btn-foursquare.icon span,.btn-foursquare.text:before,.btn-github.icon span,.btn-github.text:before,.btn-google-plus.icon span,.btn-google-plus.text:before,.btn-html5.icon span,.btn-html5.text:before,.btn-instagram.icon span,.btn-instagram.text:before,.btn-linkedin.icon span,.btn-linkedin.text:before,.btn-openid.icon span,.btn-openid.text:before,.btn-pinterest.icon span,.btn-pinterest.text:before,.btn-reddit.icon span,.btn-reddit.text:before,.btn-spotify.icon span,.btn-spotify.text:before,.btn-stack-overflow.icon span,.btn-stack-overflow.text:before,.btn-tumblr.icon span,.btn-tumblr.text:before,.btn-twitter.icon span,.btn-twitter.text:before,.btn-vimeo.icon span,.btn-vimeo.text:before,.btn-vine.icon span,.btn-vine.text:before,.btn-vk.icon span,.btn-vk.text:before,.btn-xing.icon span,.btn-xing.text:before,.btn-yahoo.icon span,.btn-yahoo.text:before,.btn-youtube.icon span,.btn-youtube.text:before {
    display: none
}

.btn-behance.text span,.btn-css3.text span,.btn-dribbble.text span,.btn-dropbox.text span,.btn-facebook.text span,.btn-flickr.text span,.btn-foursquare.text span,.btn-github.text span,.btn-google-plus.text span,.btn-html5.text span,.btn-instagram.text span,.btn-linkedin.text span,.btn-openid.text span,.btn-pinterest.text span,.btn-reddit.text span,.btn-spotify.text span,.btn-stack-overflow.text span,.btn-tumblr.text span,.btn-twitter.text span,.btn-vimeo.text span,.btn-vine.text span,.btn-vk.text span,.btn-xing.text span,.btn-yahoo.text span,.btn-youtube.text span {
    margin-left: 0!important
}

.btn-behance:before,.btn-css3:before,.btn-dribbble:before,.btn-dropbox:before,.btn-facebook:before,.btn-flickr:before,.btn-foursquare:before,.btn-github:before,.btn-google-plus:before,.btn-html5:before,.btn-instagram:before,.btn-linkedin:before,.btn-openid:before,.btn-pinterest:before,.btn-reddit:before,.btn-spotify:before,.btn-stack-overflow:before,.btn-tumblr:before,.btn-twitter:before,.btn-vimeo:before,.btn-vine:before,.btn-vk:before,.btn-xing:before,.btn-yahoo:before,.btn-youtube:before {
    width: 2.0625rem;
    height: 2.0625rem;
    padding: .375rem 0;
    font-size: .875rem;
    line-height: 1.5
}

.btn-behance span,.btn-css3 span,.btn-dribbble span,.btn-dropbox span,.btn-facebook span,.btn-flickr span,.btn-foursquare span,.btn-github span,.btn-google-plus span,.btn-html5 span,.btn-instagram span,.btn-linkedin span,.btn-openid span,.btn-pinterest span,.btn-reddit span,.btn-spotify span,.btn-stack-overflow span,.btn-tumblr span,.btn-twitter span,.btn-vimeo span,.btn-vine span,.btn-vk span,.btn-xing span,.btn-yahoo span,.btn-youtube span {
    margin-left: 2.0625rem
}

.btn-behance.icon,.btn-css3.icon,.btn-dribbble.icon,.btn-dropbox.icon,.btn-facebook.icon,.btn-flickr.icon,.btn-foursquare.icon,.btn-github.icon,.btn-google-plus.icon,.btn-html5.icon,.btn-instagram.icon,.btn-linkedin.icon,.btn-openid.icon,.btn-pinterest.icon,.btn-reddit.icon,.btn-spotify.icon,.btn-stack-overflow.icon,.btn-tumblr.icon,.btn-twitter.icon,.btn-vimeo.icon,.btn-vine.icon,.btn-vk.icon,.btn-xing.icon,.btn-yahoo.icon,.btn-youtube.icon {
    width: 2.0625rem;
    height: 2.0625rem
}

.btn-behance.btn-lg,.btn-css3.btn-lg,.btn-dribbble.btn-lg,.btn-dropbox.btn-lg,.btn-facebook.btn-lg,.btn-flickr.btn-lg,.btn-foursquare.btn-lg,.btn-github.btn-lg,.btn-google-plus.btn-lg,.btn-group-lg>.btn-behance.btn,.btn-group-lg>.btn-css3.btn,.btn-group-lg>.btn-dribbble.btn,.btn-group-lg>.btn-dropbox.btn,.btn-group-lg>.btn-facebook.btn,.btn-group-lg>.btn-flickr.btn,.btn-group-lg>.btn-foursquare.btn,.btn-group-lg>.btn-github.btn,.btn-group-lg>.btn-google-plus.btn,.btn-group-lg>.btn-html5.btn,.btn-group-lg>.btn-instagram.btn,.btn-group-lg>.btn-linkedin.btn,.btn-group-lg>.btn-openid.btn,.btn-group-lg>.btn-pinterest.btn,.btn-group-lg>.btn-reddit.btn,.btn-group-lg>.btn-spotify.btn,.btn-group-lg>.btn-stack-overflow.btn,.btn-group-lg>.btn-tumblr.btn,.btn-group-lg>.btn-twitter.btn,.btn-group-lg>.btn-vimeo.btn,.btn-group-lg>.btn-vine.btn,.btn-group-lg>.btn-vk.btn,.btn-group-lg>.btn-xing.btn,.btn-group-lg>.btn-yahoo.btn,.btn-group-lg>.btn-youtube.btn,.btn-html5.btn-lg,.btn-instagram.btn-lg,.btn-linkedin.btn-lg,.btn-openid.btn-lg,.btn-pinterest.btn-lg,.btn-reddit.btn-lg,.btn-spotify.btn-lg,.btn-stack-overflow.btn-lg,.btn-tumblr.btn-lg,.btn-twitter.btn-lg,.btn-vimeo.btn-lg,.btn-vine.btn-lg,.btn-vk.btn-lg,.btn-xing.btn-lg,.btn-yahoo.btn-lg,.btn-youtube.btn-lg {
    padding: .5rem 1rem;
    font-size: 1.09375rem;
    line-height: 1.5;
    border: 0
}

.btn-behance.btn-lg:before,.btn-css3.btn-lg:before,.btn-dribbble.btn-lg:before,.btn-dropbox.btn-lg:before,.btn-facebook.btn-lg:before,.btn-flickr.btn-lg:before,.btn-foursquare.btn-lg:before,.btn-github.btn-lg:before,.btn-google-plus.btn-lg:before,.btn-group-lg>.btn-behance.btn:before,.btn-group-lg>.btn-css3.btn:before,.btn-group-lg>.btn-dribbble.btn:before,.btn-group-lg>.btn-dropbox.btn:before,.btn-group-lg>.btn-facebook.btn:before,.btn-group-lg>.btn-flickr.btn:before,.btn-group-lg>.btn-foursquare.btn:before,.btn-group-lg>.btn-github.btn:before,.btn-group-lg>.btn-google-plus.btn:before,.btn-group-lg>.btn-html5.btn:before,.btn-group-lg>.btn-instagram.btn:before,.btn-group-lg>.btn-linkedin.btn:before,.btn-group-lg>.btn-openid.btn:before,.btn-group-lg>.btn-pinterest.btn:before,.btn-group-lg>.btn-reddit.btn:before,.btn-group-lg>.btn-spotify.btn:before,.btn-group-lg>.btn-stack-overflow.btn:before,.btn-group-lg>.btn-tumblr.btn:before,.btn-group-lg>.btn-twitter.btn:before,.btn-group-lg>.btn-vimeo.btn:before,.btn-group-lg>.btn-vine.btn:before,.btn-group-lg>.btn-vk.btn:before,.btn-group-lg>.btn-xing.btn:before,.btn-group-lg>.btn-yahoo.btn:before,.btn-group-lg>.btn-youtube.btn:before,.btn-html5.btn-lg:before,.btn-instagram.btn-lg:before,.btn-linkedin.btn-lg:before,.btn-openid.btn-lg:before,.btn-pinterest.btn-lg:before,.btn-reddit.btn-lg:before,.btn-spotify.btn-lg:before,.btn-stack-overflow.btn-lg:before,.btn-tumblr.btn-lg:before,.btn-twitter.btn-lg:before,.btn-vimeo.btn-lg:before,.btn-vine.btn-lg:before,.btn-vk.btn-lg:before,.btn-xing.btn-lg:before,.btn-yahoo.btn-lg:before,.btn-youtube.btn-lg:before {
    width: 2.64063rem;
    height: 2.64063rem;
    padding: .5rem 0;
    font-size: 1.09375rem;
    line-height: 1.5
}

.btn-behance.btn-lg span,.btn-css3.btn-lg span,.btn-dribbble.btn-lg span,.btn-dropbox.btn-lg span,.btn-facebook.btn-lg span,.btn-flickr.btn-lg span,.btn-foursquare.btn-lg span,.btn-github.btn-lg span,.btn-google-plus.btn-lg span,.btn-group-lg>.btn-behance.btn span,.btn-group-lg>.btn-css3.btn span,.btn-group-lg>.btn-dribbble.btn span,.btn-group-lg>.btn-dropbox.btn span,.btn-group-lg>.btn-facebook.btn span,.btn-group-lg>.btn-flickr.btn span,.btn-group-lg>.btn-foursquare.btn span,.btn-group-lg>.btn-github.btn span,.btn-group-lg>.btn-google-plus.btn span,.btn-group-lg>.btn-html5.btn span,.btn-group-lg>.btn-instagram.btn span,.btn-group-lg>.btn-linkedin.btn span,.btn-group-lg>.btn-openid.btn span,.btn-group-lg>.btn-pinterest.btn span,.btn-group-lg>.btn-reddit.btn span,.btn-group-lg>.btn-spotify.btn span,.btn-group-lg>.btn-stack-overflow.btn span,.btn-group-lg>.btn-tumblr.btn span,.btn-group-lg>.btn-twitter.btn span,.btn-group-lg>.btn-vimeo.btn span,.btn-group-lg>.btn-vine.btn span,.btn-group-lg>.btn-vk.btn span,.btn-group-lg>.btn-xing.btn span,.btn-group-lg>.btn-yahoo.btn span,.btn-group-lg>.btn-youtube.btn span,.btn-html5.btn-lg span,.btn-instagram.btn-lg span,.btn-linkedin.btn-lg span,.btn-openid.btn-lg span,.btn-pinterest.btn-lg span,.btn-reddit.btn-lg span,.btn-spotify.btn-lg span,.btn-stack-overflow.btn-lg span,.btn-tumblr.btn-lg span,.btn-twitter.btn-lg span,.btn-vimeo.btn-lg span,.btn-vine.btn-lg span,.btn-vk.btn-lg span,.btn-xing.btn-lg span,.btn-yahoo.btn-lg span,.btn-youtube.btn-lg span {
    margin-left: 2.64063rem
}

.btn-behance.btn-lg.icon,.btn-css3.btn-lg.icon,.btn-dribbble.btn-lg.icon,.btn-dropbox.btn-lg.icon,.btn-facebook.btn-lg.icon,.btn-flickr.btn-lg.icon,.btn-foursquare.btn-lg.icon,.btn-github.btn-lg.icon,.btn-google-plus.btn-lg.icon,.btn-group-lg>.btn-behance.icon.btn,.btn-group-lg>.btn-css3.icon.btn,.btn-group-lg>.btn-dribbble.icon.btn,.btn-group-lg>.btn-dropbox.icon.btn,.btn-group-lg>.btn-facebook.icon.btn,.btn-group-lg>.btn-flickr.icon.btn,.btn-group-lg>.btn-foursquare.icon.btn,.btn-group-lg>.btn-github.icon.btn,.btn-group-lg>.btn-google-plus.icon.btn,.btn-group-lg>.btn-html5.icon.btn,.btn-group-lg>.btn-instagram.icon.btn,.btn-group-lg>.btn-linkedin.icon.btn,.btn-group-lg>.btn-openid.icon.btn,.btn-group-lg>.btn-pinterest.icon.btn,.btn-group-lg>.btn-reddit.icon.btn,.btn-group-lg>.btn-spotify.icon.btn,.btn-group-lg>.btn-stack-overflow.icon.btn,.btn-group-lg>.btn-tumblr.icon.btn,.btn-group-lg>.btn-twitter.icon.btn,.btn-group-lg>.btn-vimeo.icon.btn,.btn-group-lg>.btn-vine.icon.btn,.btn-group-lg>.btn-vk.icon.btn,.btn-group-lg>.btn-xing.icon.btn,.btn-group-lg>.btn-yahoo.icon.btn,.btn-group-lg>.btn-youtube.icon.btn,.btn-html5.btn-lg.icon,.btn-instagram.btn-lg.icon,.btn-linkedin.btn-lg.icon,.btn-openid.btn-lg.icon,.btn-pinterest.btn-lg.icon,.btn-reddit.btn-lg.icon,.btn-spotify.btn-lg.icon,.btn-stack-overflow.btn-lg.icon,.btn-tumblr.btn-lg.icon,.btn-twitter.btn-lg.icon,.btn-vimeo.btn-lg.icon,.btn-vine.btn-lg.icon,.btn-vk.btn-lg.icon,.btn-xing.btn-lg.icon,.btn-yahoo.btn-lg.icon,.btn-youtube.btn-lg.icon {
    width: 2.64063rem;
    height: 2.64063rem
}

.btn-behance.btn-sm,.btn-css3.btn-sm,.btn-dribbble.btn-sm,.btn-dropbox.btn-sm,.btn-facebook.btn-sm,.btn-flickr.btn-sm,.btn-foursquare.btn-sm,.btn-github.btn-sm,.btn-google-plus.btn-sm,.btn-group-sm>.btn-behance.btn,.btn-group-sm>.btn-css3.btn,.btn-group-sm>.btn-dribbble.btn,.btn-group-sm>.btn-dropbox.btn,.btn-group-sm>.btn-facebook.btn,.btn-group-sm>.btn-flickr.btn,.btn-group-sm>.btn-foursquare.btn,.btn-group-sm>.btn-github.btn,.btn-group-sm>.btn-google-plus.btn,.btn-group-sm>.btn-html5.btn,.btn-group-sm>.btn-instagram.btn,.btn-group-sm>.btn-linkedin.btn,.btn-group-sm>.btn-openid.btn,.btn-group-sm>.btn-pinterest.btn,.btn-group-sm>.btn-reddit.btn,.btn-group-sm>.btn-spotify.btn,.btn-group-sm>.btn-stack-overflow.btn,.btn-group-sm>.btn-tumblr.btn,.btn-group-sm>.btn-twitter.btn,.btn-group-sm>.btn-vimeo.btn,.btn-group-sm>.btn-vine.btn,.btn-group-sm>.btn-vk.btn,.btn-group-sm>.btn-xing.btn,.btn-group-sm>.btn-yahoo.btn,.btn-group-sm>.btn-youtube.btn,.btn-html5.btn-sm,.btn-instagram.btn-sm,.btn-linkedin.btn-sm,.btn-openid.btn-sm,.btn-pinterest.btn-sm,.btn-reddit.btn-sm,.btn-spotify.btn-sm,.btn-stack-overflow.btn-sm,.btn-tumblr.btn-sm,.btn-twitter.btn-sm,.btn-vimeo.btn-sm,.btn-vine.btn-sm,.btn-vk.btn-sm,.btn-xing.btn-sm,.btn-yahoo.btn-sm,.btn-youtube.btn-sm {
    padding: .25rem .5rem;
    font-size: .76563rem;
    line-height: 1.5;
    border: 0
}

.btn-behance.btn-sm:before,.btn-css3.btn-sm:before,.btn-dribbble.btn-sm:before,.btn-dropbox.btn-sm:before,.btn-facebook.btn-sm:before,.btn-flickr.btn-sm:before,.btn-foursquare.btn-sm:before,.btn-github.btn-sm:before,.btn-google-plus.btn-sm:before,.btn-group-sm>.btn-behance.btn:before,.btn-group-sm>.btn-css3.btn:before,.btn-group-sm>.btn-dribbble.btn:before,.btn-group-sm>.btn-dropbox.btn:before,.btn-group-sm>.btn-facebook.btn:before,.btn-group-sm>.btn-flickr.btn:before,.btn-group-sm>.btn-foursquare.btn:before,.btn-group-sm>.btn-github.btn:before,.btn-group-sm>.btn-google-plus.btn:before,.btn-group-sm>.btn-html5.btn:before,.btn-group-sm>.btn-instagram.btn:before,.btn-group-sm>.btn-linkedin.btn:before,.btn-group-sm>.btn-openid.btn:before,.btn-group-sm>.btn-pinterest.btn:before,.btn-group-sm>.btn-reddit.btn:before,.btn-group-sm>.btn-spotify.btn:before,.btn-group-sm>.btn-stack-overflow.btn:before,.btn-group-sm>.btn-tumblr.btn:before,.btn-group-sm>.btn-twitter.btn:before,.btn-group-sm>.btn-vimeo.btn:before,.btn-group-sm>.btn-vine.btn:before,.btn-group-sm>.btn-vk.btn:before,.btn-group-sm>.btn-xing.btn:before,.btn-group-sm>.btn-yahoo.btn:before,.btn-group-sm>.btn-youtube.btn:before,.btn-html5.btn-sm:before,.btn-instagram.btn-sm:before,.btn-linkedin.btn-sm:before,.btn-openid.btn-sm:before,.btn-pinterest.btn-sm:before,.btn-reddit.btn-sm:before,.btn-spotify.btn-sm:before,.btn-stack-overflow.btn-sm:before,.btn-tumblr.btn-sm:before,.btn-twitter.btn-sm:before,.btn-vimeo.btn-sm:before,.btn-vine.btn-sm:before,.btn-vk.btn-sm:before,.btn-xing.btn-sm:before,.btn-yahoo.btn-sm:before,.btn-youtube.btn-sm:before {
    width: 1.64844rem;
    height: 1.64844rem;
    padding: .25rem 0;
    font-size: .76563rem;
    line-height: 1.5
}

.btn-behance.btn-sm span,.btn-css3.btn-sm span,.btn-dribbble.btn-sm span,.btn-dropbox.btn-sm span,.btn-facebook.btn-sm span,.btn-flickr.btn-sm span,.btn-foursquare.btn-sm span,.btn-github.btn-sm span,.btn-google-plus.btn-sm span,.btn-group-sm>.btn-behance.btn span,.btn-group-sm>.btn-css3.btn span,.btn-group-sm>.btn-dribbble.btn span,.btn-group-sm>.btn-dropbox.btn span,.btn-group-sm>.btn-facebook.btn span,.btn-group-sm>.btn-flickr.btn span,.btn-group-sm>.btn-foursquare.btn span,.btn-group-sm>.btn-github.btn span,.btn-group-sm>.btn-google-plus.btn span,.btn-group-sm>.btn-html5.btn span,.btn-group-sm>.btn-instagram.btn span,.btn-group-sm>.btn-linkedin.btn span,.btn-group-sm>.btn-openid.btn span,.btn-group-sm>.btn-pinterest.btn span,.btn-group-sm>.btn-reddit.btn span,.btn-group-sm>.btn-spotify.btn span,.btn-group-sm>.btn-stack-overflow.btn span,.btn-group-sm>.btn-tumblr.btn span,.btn-group-sm>.btn-twitter.btn span,.btn-group-sm>.btn-vimeo.btn span,.btn-group-sm>.btn-vine.btn span,.btn-group-sm>.btn-vk.btn span,.btn-group-sm>.btn-xing.btn span,.btn-group-sm>.btn-yahoo.btn span,.btn-group-sm>.btn-youtube.btn span,.btn-html5.btn-sm span,.btn-instagram.btn-sm span,.btn-linkedin.btn-sm span,.btn-openid.btn-sm span,.btn-pinterest.btn-sm span,.btn-reddit.btn-sm span,.btn-spotify.btn-sm span,.btn-stack-overflow.btn-sm span,.btn-tumblr.btn-sm span,.btn-twitter.btn-sm span,.btn-vimeo.btn-sm span,.btn-vine.btn-sm span,.btn-vk.btn-sm span,.btn-xing.btn-sm span,.btn-yahoo.btn-sm span,.btn-youtube.btn-sm span {
    margin-left: 1.64844rem
}

.btn-behance.btn-sm.icon,.btn-css3.btn-sm.icon,.btn-dribbble.btn-sm.icon,.btn-dropbox.btn-sm.icon,.btn-facebook.btn-sm.icon,.btn-flickr.btn-sm.icon,.btn-foursquare.btn-sm.icon,.btn-github.btn-sm.icon,.btn-google-plus.btn-sm.icon,.btn-group-sm>.btn-behance.icon.btn,.btn-group-sm>.btn-css3.icon.btn,.btn-group-sm>.btn-dribbble.icon.btn,.btn-group-sm>.btn-dropbox.icon.btn,.btn-group-sm>.btn-facebook.icon.btn,.btn-group-sm>.btn-flickr.icon.btn,.btn-group-sm>.btn-foursquare.icon.btn,.btn-group-sm>.btn-github.icon.btn,.btn-group-sm>.btn-google-plus.icon.btn,.btn-group-sm>.btn-html5.icon.btn,.btn-group-sm>.btn-instagram.icon.btn,.btn-group-sm>.btn-linkedin.icon.btn,.btn-group-sm>.btn-openid.icon.btn,.btn-group-sm>.btn-pinterest.icon.btn,.btn-group-sm>.btn-reddit.icon.btn,.btn-group-sm>.btn-spotify.icon.btn,.btn-group-sm>.btn-stack-overflow.icon.btn,.btn-group-sm>.btn-tumblr.icon.btn,.btn-group-sm>.btn-twitter.icon.btn,.btn-group-sm>.btn-vimeo.icon.btn,.btn-group-sm>.btn-vine.icon.btn,.btn-group-sm>.btn-vk.icon.btn,.btn-group-sm>.btn-xing.icon.btn,.btn-group-sm>.btn-yahoo.icon.btn,.btn-group-sm>.btn-youtube.icon.btn,.btn-html5.btn-sm.icon,.btn-instagram.btn-sm.icon,.btn-linkedin.btn-sm.icon,.btn-openid.btn-sm.icon,.btn-pinterest.btn-sm.icon,.btn-reddit.btn-sm.icon,.btn-spotify.btn-sm.icon,.btn-stack-overflow.btn-sm.icon,.btn-tumblr.btn-sm.icon,.btn-twitter.btn-sm.icon,.btn-vimeo.btn-sm.icon,.btn-vine.btn-sm.icon,.btn-vk.btn-sm.icon,.btn-xing.btn-sm.icon,.btn-yahoo.btn-sm.icon,.btn-youtube.btn-sm.icon {
    width: 1.64844rem;
    height: 1.64844rem
}

.btn-facebook {
    background: #3b5998
}

.btn-facebook:before {
    content: "\F09A";
    background: #344e86
}

.btn-facebook:hover {
    background: #344e86
}

.btn-facebook:hover:before {
    background: #2d4373
}

.btn-twitter {
    background: #00aced
}

.btn-twitter:before {
    content: "\F099";
    background: #0099d4
}

.btn-twitter:hover {
    background: #0099d4
}

.btn-twitter:hover:before {
    background: #0087ba
}

.btn-linkedin {
    background: #4875b4
}

.btn-linkedin:before {
    content: "\F0E1";
    background: #4169a2
}

.btn-linkedin:hover {
    background: #4169a2
}

.btn-linkedin:hover:before {
    background: #395d90
}

.btn-flickr {
    background: #ff0084
}

.btn-flickr:before {
    content: "\F16E";
    background: #e60077
}

.btn-flickr:hover {
    background: #e60077
}

.btn-flickr:hover:before {
    background: #cc006a
}

.btn-tumblr {
    background: #32506d
}

.btn-tumblr:before {
    content: "\F173";
    background: #2a435c
}

.btn-tumblr:hover {
    background: #2a435c
}

.btn-tumblr:hover:before {
    background: #22364a
}

.btn-xing {
    background: #026466
}

.btn-xing:before {
    content: "\F168"
}

.btn-xing:before,.btn-xing:hover {
    background: #024b4d
}

.btn-xing:hover:before {
    background: #013334
}

.btn-github {
    background: #4183c4
}

.btn-github:before {
    content: "\F09B";
    background: #3876b4
}

.btn-github:hover {
    background: #3876b4
}

.btn-github:hover:before {
    background: #3269a0
}

.btn-html5 {
    background: #e34f26
}

.btn-html5:before {
    content: "\F13B"
}

.btn-html5:before,.btn-html5:hover {
    background: #d4431b
}

.btn-html5:hover:before {
    background: #be3c18
}

.btn-openid {
    background: #f78c40
}

.btn-openid:before {
    content: "\F19B";
    background: #f67d28
}

.btn-openid:hover {
    background: #f67d28
}

.btn-openid:hover:before {
    background: #f56f0f
}

.btn-stack-overflow {
    background: #fe7a15
}

.btn-stack-overflow:before {
    content: "\F16C";
    background: #f86c01
}

.btn-stack-overflow:hover {
    background: #f86c01
}

.btn-stack-overflow:hover:before {
    background: #df6101
}

.btn-css3 {
    background: #0170ba
}

.btn-css3:before {
    content: "\F13C"
}

.btn-css3:before,.btn-css3:hover {
    background: #0161a1
}

.btn-css3:hover:before {
    background: #015187
}

.btn-youtube {
    background: #b00
}

.btn-youtube:before {
    content: "\F167";
    background: #a20000
}

.btn-youtube:hover {
    background: #a20000
}

.btn-youtube:hover:before {
    background: #800
}

.btn-dribbble {
    background: #ea4c89
}

.btn-dribbble:before {
    content: "\F17D";
    background: #e7357a
}

.btn-dribbble:hover {
    background: #e7357a
}

.btn-dribbble:hover:before {
    background: #e51e6b
}

.btn-google-plus {
    background: #d34836
}

.btn-google-plus:before {
    content: "\F0D5";
    background: #c43d2b
}

.btn-google-plus:hover {
    background: #c43d2b
}

.btn-google-plus:hover:before {
    background: #b03626
}

.btn-instagram {
    background: #517fa4
}

.btn-instagram:before {
    content: "\F16D";
    background: #497293
}

.btn-instagram:hover {
    background: #497293
}

.btn-instagram:hover:before {
    background: #406582
}

.btn-pinterest {
    background: #cb2027
}

.btn-pinterest:before {
    content: "\F0D2";
    background: #b51d23
}

.btn-pinterest:hover {
    background: #b51d23
}

.btn-pinterest:hover:before {
    background: #9f191f
}

.btn-vk {
    background: #45668e
}

.btn-vk:before {
    content: "\F189"
}

.btn-vk:before,.btn-vk:hover {
    background: #3d5a7d
}

.btn-vk:hover:before {
    background: #344d6c
}

.btn-yahoo {
    background: #400191
}

.btn-yahoo:before {
    content: "\F19E"
}

.btn-yahoo:before,.btn-yahoo:hover {
    background: #350178
}

.btn-yahoo:hover:before {
    background: #2a015e
}

.btn-behance {
    background: #1769ff
}

.btn-behance:before {
    content: "\F1B4";
    background: #0059fd
}

.btn-behance:hover {
    background: #0059fd
}

.btn-behance:hover:before {
    background: #0050e3
}

.btn-dropbox {
    background: #007ee5
}

.btn-dropbox:before {
    content: "\F16B";
    background: #0070cc
}

.btn-dropbox:hover {
    background: #0070cc
}

.btn-dropbox:hover:before {
    background: #0062b2
}

.btn-reddit {
    background: #ff4500
}

.btn-reddit:before {
    content: "\F1A1";
    background: #e63e00
}

.btn-reddit:hover {
    background: #e63e00
}

.btn-reddit:hover:before {
    background: #cc3700
}

.btn-spotify {
    background: #7ab800
}

.btn-spotify:before {
    content: "\F1BC";
    background: #699f00
}

.btn-spotify:hover {
    background: #699f00
}

.btn-spotify:hover:before {
    background: #588500
}

.btn-vine {
    background: #00bf8f
}

.btn-vine:before {
    content: "\F1CA"
}

.btn-vine:before,.btn-vine:hover {
    background: #00a67c
}

.btn-vine:hover:before {
    background: #008c69
}

.btn-foursquare {
    background: #1073af
}

.btn-foursquare:before {
    content: "\F180";
    background: #0e6498
}

.btn-foursquare:hover {
    background: #0e6498
}

.btn-foursquare:hover:before {
    background: #0c5480
}

.btn-vimeo {
    background: #aad450
}

.btn-vimeo:before {
    content: "\F194"
}

.btn-vimeo:before,.btn-vimeo:hover {
    background: #a0cf3c
}

.btn-vimeo:hover:before {
    background: #93c130
}

.callout {
    position: relative;
    padding: 0 1rem;
    margin: 1rem 0;
    border: 0;
    border-left-width: .25rem
}

.callout .chart-wrapper {
    position: absolute;
    top: 10px;
    left: 50%;
    float: right;
    width: 50%
}

.callout-bordered {
    border: 1px solid #a4b7c1;
    border-left-width: .25rem
}

.callout code {
    border-radius: .25rem
}

.callout h4 {
    margin-top: 0;
    margin-bottom: .25rem
}

.callout p:last-child {
    margin-bottom: 0
}

.callout+.callout {
    margin-top: -.25rem
}

.callout-default {
    border-left-color: #536c79
}

.callout-default h4 {
    color: #536c79
}

.callout-primary {
    border-left-color: #20a8d8
}

.callout-primary h4 {
    color: #20a8d8
}

.callout-secondary {
    border-left-color: #a4b7c1
}

.callout-secondary h4 {
    color: #a4b7c1
}

.callout-success {
    border-left-color: #4dbd74
}

.callout-success h4 {
    color: #4dbd74
}

.callout-info {
    border-left-color: #63c2de
}

.callout-info h4 {
    color: #63c2de
}

.callout-warning {
    border-left-color: #ffc107
}

.callout-warning h4 {
    color: #ffc107
}

.callout-danger {
    border-left-color: #f86c6b
}

.callout-danger h4 {
    color: #f86c6b
}

.callout-light {
    border-left-color: #f0f3f5
}

.callout-light h4 {
    color: #f0f3f5
}

.callout-dark {
    border-left-color: #29363d
}

.callout-dark h4 {
    color: #29363d
}

.callout-blue {
    border-left-color: #20a8d8
}

.callout-blue h4 {
    color: #20a8d8
}

.callout-indigo {
    border-left-color: #6610f2
}

.callout-indigo h4 {
    color: #6610f2
}

.callout-purple {
    border-left-color: #6f42c1
}

.callout-purple h4 {
    color: #6f42c1
}

.callout-pink {
    border-left-color: #e83e8c
}

.callout-pink h4 {
    color: #e83e8c
}

.callout-red {
    border-left-color: #f86c6b
}

.callout-red h4 {
    color: #f86c6b
}

.callout-orange {
    border-left-color: #f8cb00
}

.callout-orange h4 {
    color: #f8cb00
}

.callout-#ff0 {
    border-left-color: #ffc107
}

.callout-#ff0 h4 {
    color: #ffc107
}

.callout-green {
    border-left-color: #4dbd74
}

.callout-green h4 {
    color: #4dbd74
}

.callout-teal {
    border-left-color: #20c997
}

.callout-teal h4 {
    color: #20c997
}

.callout-cyan {
    border-left-color: #63c2de
}

.callout-cyan h4 {
    color: #63c2de
}

.callout-gray-100 {
    border-left-color: #f0f3f5
}

.callout-gray-100 h4 {
    color: #f0f3f5
}

.callout-gray-200 {
    border-left-color: #c2cfd6
}

.callout-gray-200 h4 {
    color: #c2cfd6
}

.callout-gray-300 {
    border-left-color: #a4b7c1
}

.callout-gray-300 h4 {
    color: #a4b7c1
}

.callout-gray-400 {
    border-left-color: #869fac
}

.callout-gray-400 h4 {
    color: #869fac
}

.callout-gray-500 {
    border-left-color: #678898
}

.callout-gray-500 h4 {
    color: #678898
}

.callout-gray-600 {
    border-left-color: #536c79
}

.callout-gray-600 h4 {
    color: #536c79
}

.callout-gray-700 {
    border-left-color: #3e515b
}

.callout-gray-700 h4 {
    color: #3e515b
}

.callout-gray-800 {
    border-left-color: #29363d
}

.callout-gray-800 h4 {
    color: #29363d
}

.callout-gray-900 {
    border-left-color: #151b1e
}

.callout-gray-900 h4 {
    color: #151b1e
}

.card {
    margin-bottom: 1.5rem
}

.card.bg-primary {
    border-color: #187da0
}

.card.bg-primary .card-header {
    background-color: #1e9ecb;
    border-color: #187da0
}

.card.bg-secondary {
    border-color: #7e99a7
}

.card.bg-secondary .card-header {
    background-color: #9bb0bb;
    border-color: #7e99a7
}

.card.bg-success {
    border-color: #379457
}

.card.bg-success .card-header {
    background-color: #44b76c;
    border-color: #379457
}

.card.bg-info {
    border-color: #2eadd3
}

.card.bg-info .card-header {
    background-color: #56bddb;
    border-color: #2eadd3
}

.card.bg-warning {
    border-color: #c69500
}

.card.bg-warning .card-header {
    background-color: #f7b900;
    border-color: #c69500
}

.card.bg-danger {
    border-color: #f5302e
}

.card.bg-danger .card-header {
    background-color: #f75d5c;
    border-color: #f5302e
}

.card.bg-light {
    border-color: #cad4dc
}

.card.bg-light .card-header {
    background-color: #e7ecef;
    border-color: #cad4dc
}

.card.bg-dark {
    border-color: #0f1417
}

.card.bg-dark .card-header {
    background-color: #232e34;
    border-color: #0f1417
}

.card.bg-blue {
    border-color: #187da0
}

.card.bg-blue .card-header {
    background-color: #1e9ecb;
    border-color: #187da0
}

.card.bg-indigo {
    border-color: #4c0ab8
}

.card.bg-indigo .card-header {
    background-color: #5f0de6;
    border-color: #4c0ab8
}

.card.bg-purple {
    border-color: #533093
}

.card.bg-purple .card-header {
    background-color: #683cb8;
    border-color: #533093
}

.card.bg-pink {
    border-color: #ce196c
}

.card.bg-pink .card-header {
    background-color: #e63084;
    border-color: #ce196c
}

.card.bg-red {
    border-color: #f5302e
}

.card.bg-red .card-header {
    background-color: #f75d5c;
    border-color: #f5302e
}

.card.bg-orange {
    border-color: #b89700
}

.card.bg-orange .card-header {
    background-color: #e9be00;
    border-color: #b89700
}

.card.bg-#ff0 {
    border-color: #c69500
}

.card.bg-#ff0 .card-header {
    background-color: #f7b900;
    border-color: #c69500
}

.card.bg-green {
    border-color: #379457
}

.card.bg-green .card-header {
    background-color: #44b76c;
    border-color: #379457
}

.card.bg-teal {
    border-color: #17926e
}

.card.bg-teal .card-header {
    background-color: #1ebc8d;
    border-color: #17926e
}

.card.bg-cyan {
    border-color: #2eadd3
}

.card.bg-cyan .card-header {
    background-color: #56bddb;
    border-color: #2eadd3
}

.card.bg-gray-100 {
    border-color: #cad4dc
}

.card.bg-gray-100 .card-header {
    background-color: #e7ecef;
    border-color: #cad4dc
}

.card.bg-gray-200 {
    border-color: #9cb1bc
}

.card.bg-gray-200 .card-header {
    background-color: #b9c8d0;
    border-color: #9cb1bc
}

.card.bg-gray-300 {
    border-color: #7e99a7
}

.card.bg-gray-300 .card-header {
    background-color: #9bb0bb;
    border-color: #7e99a7
}

.card.bg-gray-400 {
    border-color: #638090
}

.card.bg-gray-400 .card-header {
    background-color: #7d98a6;
    border-color: #638090
}

.card.bg-gray-500 {
    border-color: #4d6672
}

.card.bg-gray-500 .card-header {
    background-color: #61808f;
    border-color: #4d6672
}

.card.bg-gray-600 {
    border-color: #394a53
}

.card.bg-gray-600 .card-header {
    background-color: #4d6470;
    border-color: #394a53
}

.card.bg-gray-700 {
    border-color: #242f35
}

.card.bg-gray-700 .card-header {
    background-color: #384952;
    border-color: #242f35
}

.card.bg-gray-800 {
    border-color: #0f1417
}

.card.bg-gray-800 .card-header {
    background-color: #232e34;
    border-color: #0f1417
}

.card.bg-gray-900 {
    border-color: #000
}

.card.bg-gray-900 .card-header {
    background-color: #0f1315;
    border-color: #000
}

.text-white .text-muted {
    color: hsla(0,0%,100%,.6)!important
}

.card-header .icon-bg {
    display: inline-block;
    padding: .75rem 1.25rem!important;
    margin: -.75rem 1.25rem -.75rem -1.25rem;
    line-height: inherit;
    color: #151b1e;
    vertical-align: bottom;
    background: 0 0;
    border-right: 1px solid #c2cfd6
}

.card-header .nav.nav-tabs {
    margin-top: -.75rem;
    margin-bottom: -.75rem;
    border-bottom: 0
}

.card-header .nav.nav-tabs .nav-item {
    border-top: 0
}

.card-header .nav.nav-tabs .nav-link,.card-header .nav.nav-tabs .navbar .dropdown-toggle,.navbar .card-header .nav.nav-tabs .dropdown-toggle {
    padding: .75rem .625rem;
    color: #536c79;
    border-top: 0
}

.card-header .nav.nav-tabs .nav-link.active,.card-header .nav.nav-tabs .navbar .active.dropdown-toggle,.navbar .card-header .nav.nav-tabs .active.dropdown-toggle {
    color: #151b1e;
    background: #fff
}

.card-header.card-header-inverse {
    color: #fff
}

.card-header .btn {
    margin-top: -.375rem
}

.card-header .btn-group-sm>.btn,.card-header .btn-sm {
    margin-top: -.25rem
}

.card-header .btn-group-lg>.btn,.card-header .btn-lg {
    margin-top: -.5rem
}

.card-footer ul {
    display: table;
    width: 100%;
    padding: 0;
    margin: 0;
    table-layout: fixed
}

.card-footer ul li {
    display: table-cell;
    padding: 0 1.25rem;
    text-align: center
}

[class*=card-outline-] .card-block,[class*=card-outline-] .card-body {
    background: #fff!important
}

[class*=card-outline-].card-outline-top {
    border-top-width: 2px;
    border-right-color: #a4b7c1;
    border-bottom-color: #a4b7c1;
    border-left-color: #a4b7c1
}

.card-accent-primary {
    border-top-width: 2px;
    border-top-color: #20a8d8
}

.card-accent-secondary {
    border-top-width: 2px;
    border-top-color: #a4b7c1
}

.card-accent-success {
    border-top-width: 2px;
    border-top-color: #4dbd74
}

.card-accent-info {
    border-top-width: 2px;
    border-top-color: #63c2de
}

.card-accent-warning {
    border-top-width: 2px;
    border-top-color: #ffc107
}

.card-accent-danger {
    border-top-width: 2px;
    border-top-color: #f86c6b
}

.card-accent-light {
    border-top-width: 2px;
    border-top-color: #f0f3f5
}

.card-accent-dark {
    border-top-width: 2px;
    border-top-color: #29363d
}

.card-accent-blue {
    border-top-width: 2px;
    border-top-color: #20a8d8
}

.card-accent-indigo {
    border-top-width: 2px;
    border-top-color: #6610f2
}

.card-accent-purple {
    border-top-width: 2px;
    border-top-color: #6f42c1
}

.card-accent-pink {
    border-top-width: 2px;
    border-top-color: #e83e8c
}

.card-accent-red {
    border-top-width: 2px;
    border-top-color: #f86c6b
}

.card-accent-orange {
    border-top-width: 2px;
    border-top-color: #f8cb00
}

.card-accent-#ff0 {
    border-top-width: 2px;
    border-top-color: #ffc107
}

.card-accent-green {
    border-top-width: 2px;
    border-top-color: #4dbd74
}

.card-accent-teal {
    border-top-width: 2px;
    border-top-color: #20c997
}

.card-accent-cyan {
    border-top-width: 2px;
    border-top-color: #63c2de
}

.card-accent-gray-100 {
    border-top-width: 2px;
    border-top-color: #f0f3f5
}

.card-accent-gray-200 {
    border-top-width: 2px;
    border-top-color: #c2cfd6
}

.card-accent-gray-300 {
    border-top-width: 2px;
    border-top-color: #a4b7c1
}

.card-accent-gray-400 {
    border-top-width: 2px;
    border-top-color: #869fac
}

.card-accent-gray-500 {
    border-top-width: 2px;
    border-top-color: #678898
}

.card-accent-gray-600 {
    border-top-width: 2px;
    border-top-color: #536c79
}

.card-accent-gray-700 {
    border-top-width: 2px;
    border-top-color: #3e515b
}

.card-accent-gray-800 {
    border-top-width: 2px;
    border-top-color: #29363d
}

.card-accent-gray-900 {
    border-top-width: 2px;
    border-top-color: #151b1e
}

.card-header>i {
    margin-right: .5rem
}

.card-header .card-actions {
    position: absolute;
    top: 0;
    right: 0
}

.card-header .card-actions a,.card-header .card-actions button {
    display: block;
    float: left;
    width: 50px;
    padding: .75rem 0;
    margin: 0!important;
    color: #151b1e;
    text-align: center;
    background: 0 0;
    border: 0;
    border-left: 1px solid #a4b7c1;
    box-shadow: 0
}

.card-header .card-actions a:hover,.card-header .card-actions button:hover {
    text-decoration: none
}

.card-header .card-actions a [class*=" icon-"],.card-header .card-actions a [class^=icon-],.card-header .card-actions button [class*=" icon-"],.card-header .card-actions button [class^=icon-] {
    display: inline-block;
    vertical-align: middle
}

.card-header .card-actions a i,.card-header .card-actions button i {
    display: inline-block;
    transition: .4s
}

.card-header .card-actions a .r180,.card-header .card-actions button .r180 {
    transform: rotate(180deg)
}

.card-header .card-actions .input-group {
    width: 230px;
    margin: 6px
}

.card-header .card-actions .input-group .input-group-append,.card-header .card-actions .input-group .input-group-prepend {
    background: #fff
}

.card-header .card-actions .input-group input {
    border-left: 0
}

.card-full {
    margin-top: -1rem;
    margin-right: -15px;
    margin-left: -15px;
    border: 0;
    border-bottom: 1px solid #a4b7c1
}

@media(min-width: 576px) {
    .card-columns.cols-2 {
        column-count:2
    }
}

.card.drag,.card .drag {
    cursor: move
}

.card-placeholder {
    background: rgba(0,0,0,.025);
    border: 1px dashed #a4b7c1
}

.chart-wrapper canvas {
    width: 100%!important
}

base-chart.chart {
    display: block!important
}

.dropdown-item {
    position: relative;
    padding: 10px 20px;
    border-bottom: 1px solid #c2cfd6
}

.dropdown-item:last-child {
    border-bottom: 0
}

.dropdown-item i {
    display: inline-block;
    width: 20px;
    margin-right: 10px;
    margin-left: -10px;
    color: #c2cfd6;
    text-align: center
}

.dropdown-item .badge {
    position: absolute;
    right: 10px;
    margin-top: 2px
}

.dropdown-header {
    padding: 8px 20px;
    background: #f0f3f5;
    border-bottom: 1px solid #c2cfd6
}

.dropdown-header .btn {
    margin-top: -7px;
    color: #536c79
}

.dropdown-header .btn:hover {
    color: #151b1e
}

.dropdown-header .btn.pull-right {
    margin-right: -20px
}

.dropdown-menu-lg {
    width: 250px
}

.app-header .navbar-nav .dropdown-menu {
    position: absolute
}

.app-header .navbar-nav .dropdown-menu-right {
    right: 0;
    left: auto
}

.app-header .navbar-nav .dropdown-menu-left {
    right: auto;
    left: 0
}

.app-footer {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    padding: 0 1rem;
    color: #151b1e;
    background: #f0f3f5;
    border-top: 1px solid #a4b7c1
}

.row.row-equal {
    margin-right: -15px;
    margin-left: -15px
}

.row.row-equal,.row.row-equal [class*=col-] {
    padding-right: 7.5px;
    padding-left: 7.5px
}

.main .container-fluid {
    padding: 0 30px
}

.input-group-append,.input-group-prepend {
    white-space: nowrap;
    vertical-align: middle
}

#loading-bar,#loading-bar-spinner {
    -webkit-pointer-events: none;
    pointer-events: none;
    -moz-transition: .35s linear all;
    -o-transition: .35s linear all;
    -webkit-transition: all .35s linear;
    transition: all .35s linear
}

#loading-bar-spinner.ng-enter,#loading-bar-spinner.ng-leave.ng-leave-active,#loading-bar.ng-enter,#loading-bar.ng-leave.ng-leave-active {
    opacity: 0
}

#loading-bar-spinner.ng-enter.ng-enter-active,#loading-bar-spinner.ng-leave,#loading-bar.ng-enter.ng-enter-active,#loading-bar.ng-leave {
    opacity: 1
}

#loading-bar .bar {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 20002;
    width: 100%;
    height: 2px;
    background: #20a8d8;
    border-top-right-radius: 1px;
    border-bottom-right-radius: 1px;
    -moz-transition: width .35s;
    -o-transition: width .35s;
    -webkit-transition: width .35s;
    transition: width .35s
}

#loading-bar .peg {
    position: absolute;
    top: 0;
    right: 0;
    width: 70px;
    height: 2px;
    -moz-border-radius: 100%;
    -webkit-border-radius: 100%;
    border-radius: 100%;
    -moz-box-shadow: #29d 1px 0 6px 1px;
    -ms-box-shadow: #29d 1px 0 6px 1px;
    -webkit-box-shadow: #29d 1px 0 6px 1px;
    box-shadow: 1px 0 6px 1px #29d;
    opacity: .45
}

#loading-bar-spinner {
    position: fixed;
    top: 10px;
    left: 10px;
    z-index: 10002;
    display: block
}

#loading-bar-spinner .spinner-icon {
    width: 14px;
    height: 14px;
    border: 2px solid transparent;
    border-top-color: #29d;
    border-left-color: #29d;
    border-radius: 50%;
    -moz-animation: loading-bar-spinner .4s linear infinite;
    -ms-animation: loading-bar-spinner .4s linear infinite;
    -o-animation: loading-bar-spinner .4s linear infinite;
    -webkit-animation: loading-bar-spinner .4s linear infinite;
    animation: loading-bar-spinner .4s linear infinite
}

@-webkit-keyframes loading-bar-spinner {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg)
    }

    to {
        -webkit-transform: rotate(1turn);
        transform: rotate(1turn)
    }
}

@-moz-keyframes loading-bar-spinner {
    0% {
        -moz-transform: rotate(0deg);
        transform: rotate(0deg)
    }

    to {
        -moz-transform: rotate(1turn);
        transform: rotate(1turn)
    }
}

@-o-keyframes loading-bar-spinner {
    0% {
        -o-transform: rotate(0deg);
        transform: rotate(0deg)
    }

    to {
        -o-transform: rotate(1turn);
        transform: rotate(1turn)
    }
}

@-ms-keyframes loading-bar-spinner {
    0% {
        -ms-transform: rotate(0deg);
        transform: rotate(0deg)
    }

    to {
        -ms-transform: rotate(1turn);
        transform: rotate(1turn)
    }
}

@keyframes loading-bar-spinner {
    0% {
        transform: rotate(0deg)
    }

    to {
        transform: rotate(1turn)
    }
}

.pace {
    -webkit-pointer-events: none;
    pointer-events: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    user-select: none
}

.pace-inactive {
    display: none
}

.pace .pace-progress {
    position: fixed;
    top: 0;
    right: 100%;
    z-index: 2000;
    width: 100%;
    height: 2px;
    background: #20a8d8
}

.modal-primary .modal-content {
    border-color: #20a8d8
}

.modal-primary .modal-header {
    color: #fff;
    background-color: #20a8d8
}

.modal-secondary .modal-content {
    border-color: #a4b7c1
}

.modal-secondary .modal-header {
    color: #fff;
    background-color: #a4b7c1
}

.modal-success .modal-content {
    border-color: #4dbd74
}

.modal-success .modal-header {
    color: #fff;
    background-color: #4dbd74
}

.modal-info .modal-content {
    border-color: #63c2de
}

.modal-info .modal-header {
    color: #fff;
    background-color: #63c2de
}

.modal-warning .modal-content {
    border-color: #ffc107
}

.modal-warning .modal-header {
    color: #fff;
    background-color: #ffc107
}

.modal-danger .modal-content {
    border-color: #f86c6b
}

.modal-danger .modal-header {
    color: #fff;
    background-color: #f86c6b
}

.modal-light .modal-content {
    border-color: #f0f3f5
}

.modal-light .modal-header {
    color: #fff;
    background-color: #f0f3f5
}

.modal-dark .modal-content {
    border-color: #29363d
}

.modal-dark .modal-header {
    color: #fff;
    background-color: #29363d
}

.modal-blue .modal-content {
    border-color: #20a8d8
}

.modal-blue .modal-header {
    color: #fff;
    background-color: #20a8d8
}

.modal-indigo .modal-content {
    border-color: #6610f2
}

.modal-indigo .modal-header {
    color: #fff;
    background-color: #6610f2
}

.modal-purple .modal-content {
    border-color: #6f42c1
}

.modal-purple .modal-header {
    color: #fff;
    background-color: #6f42c1
}

.modal-pink .modal-content {
    border-color: #e83e8c
}

.modal-pink .modal-header {
    color: #fff;
    background-color: #e83e8c
}

.modal-red .modal-content {
    border-color: #f86c6b
}

.modal-red .modal-header {
    color: #fff;
    background-color: #f86c6b
}

.modal-orange .modal-content {
    border-color: #f8cb00
}

.modal-orange .modal-header {
    color: #fff;
    background-color: #f8cb00
}

.modal-#ff0 .modal-content {
    border-color: #ffc107
}

.modal-#ff0 .modal-header {
    color: #fff;
    background-color: #ffc107
}

.modal-green .modal-content {
    border-color: #4dbd74
}

.modal-green .modal-header {
    color: #fff;
    background-color: #4dbd74
}

.modal-teal .modal-content {
    border-color: #20c997
}

.modal-teal .modal-header {
    color: #fff;
    background-color: #20c997
}

.modal-cyan .modal-content {
    border-color: #63c2de
}

.modal-cyan .modal-header {
    color: #fff;
    background-color: #63c2de
}

.modal-gray-100 .modal-content {
    border-color: #f0f3f5
}

.modal-gray-100 .modal-header {
    color: #fff;
    background-color: #f0f3f5
}

.modal-gray-200 .modal-content {
    border-color: #c2cfd6
}

.modal-gray-200 .modal-header {
    color: #fff;
    background-color: #c2cfd6
}

.modal-gray-300 .modal-content {
    border-color: #a4b7c1
}

.modal-gray-300 .modal-header {
    color: #fff;
    background-color: #a4b7c1
}

.modal-gray-400 .modal-content {
    border-color: #869fac
}

.modal-gray-400 .modal-header {
    color: #fff;
    background-color: #869fac
}

.modal-gray-500 .modal-content {
    border-color: #678898
}

.modal-gray-500 .modal-header {
    color: #fff;
    background-color: #678898
}

.modal-gray-600 .modal-content {
    border-color: #536c79
}

.modal-gray-600 .modal-header {
    color: #fff;
    background-color: #536c79
}

.modal-gray-700 .modal-content {
    border-color: #3e515b
}

.modal-gray-700 .modal-header {
    color: #fff;
    background-color: #3e515b
}

.modal-gray-800 .modal-content {
    border-color: #29363d
}

.modal-gray-800 .modal-header {
    color: #fff;
    background-color: #29363d
}

.modal-gray-900 .modal-content {
    border-color: #151b1e
}

.modal-gray-900 .modal-header {
    color: #fff;
    background-color: #151b1e
}

.nav-tabs .nav-link,.nav-tabs .navbar .dropdown-toggle,.navbar .nav-tabs .dropdown-toggle {
    color: #536c79
}

.nav-tabs .nav-link:hover,.nav-tabs .navbar .dropdown-toggle:hover,.navbar .nav-tabs .dropdown-toggle:hover {
    cursor: pointer
}

.nav-tabs .nav-link.active,.nav-tabs .navbar .active.dropdown-toggle,.navbar .nav-tabs .active.dropdown-toggle {
    color: #29363d;
    background: #fff;
    border-color: #a4b7c1;
    border-bottom-color: #fff
}

.nav-tabs .nav-link.active:focus,.nav-tabs .navbar .active.dropdown-toggle:focus,.navbar .nav-tabs .active.dropdown-toggle:focus {
    background: #fff;
    border-color: #a4b7c1;
    border-bottom-color: #fff
}

.tab-content {
    margin-top: -1px;
    background: #fff;
    border: 1px solid #a4b7c1
}

.tab-content .tab-pane {
    padding: 1rem
}

.card-block .tab-content {
    margin-top: 0;
    border: 0
}

.app-header.navbar {
    position: relative;
    flex-direction: row;
    padding: 0;
    margin: 0
}

.app-header.navbar,.app-header.navbar .navbar-brand {
    height: 55px;
    background-color: #fff;
    border-bottom: 1px solid #a4b7c1
}

.app-header.navbar .navbar-brand {
    display: inline-block;
    width: 155px;
    padding: .5rem 1rem;
    margin-right: 0;
    background-image: url(../../fz/images/logo.svg);
    background-repeat: no-repeat;
    background-position: 50%;
    background-size: 70px auto
}

.app-header.navbar .navbar-toggler {
    min-width: 50px;
    padding: .25rem 0
}

.app-header.navbar .navbar-toggler:hover .navbar-toggler-icon {
    background-image: url(data:image/svg+xml;charset=utf8;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMzAgMzAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggc3Ryb2tlPSIjMjkzNjNkIiBzdHJva2Utd2lkdGg9IjIuMjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBkPSJNNCA3aDIyTTQgMTVoMjJNNCAyM2gyMiIvPjwvc3ZnPg==)
}

.app-header.navbar .navbar-toggler-icon {
    height: 23px;
    background-image: url(data:image/svg+xml;charset=utf8;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMzAgMzAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggc3Ryb2tlPSIjNTM2Yzc5IiBzdHJva2Utd2lkdGg9IjIuMjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBkPSJNNCA3aDIyTTQgMTVoMjJNNCAyM2gyMiIvPjwvc3ZnPg==)
}

.app-header.navbar .navbar-nav {
    flex-direction: row;
    align-items: center
}

.app-header.navbar .nav-item {
    position: relative;
    min-width: 50px;
    margin: 0!important;
    text-align: center
}

.app-header.navbar .nav-item button {
    margin: 0 auto
}

.app-header.navbar .nav-item .dropdown-toggle,.app-header.navbar .nav-item .nav-link {
    padding-top: 0;
    padding-bottom: 0;
    background: 0;
    border: 0
}

.app-header.navbar .nav-item .dropdown-toggle .badge,.app-header.navbar .nav-item .nav-link .badge {
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -16px;
    margin-left: 0
}

.app-header.navbar .nav-item .dropdown-toggle>.img-avatar,.app-header.navbar .nav-item .nav-link>.img-avatar {
    height: 35px;
    margin: 0 10px
}

.app-header.navbar .dropdown-menu {
    padding-bottom: 0;
    line-height: 1.5
}

.app-header.navbar .dropdown-item {
    min-width: 180px
}

.navbar-brand,.navbar-brand:focus,.navbar-brand:hover {
    color: #29363d
}

.navbar-nav .nav-link,.navbar-nav .navbar .dropdown-toggle,.navbar .navbar-nav .dropdown-toggle {
    color: #536c79
}

.navbar-nav .active>.nav-link,.navbar-nav .active>.nav-link:focus,.navbar-nav .active>.nav-link:hover,.navbar-nav .nav-link.active,.navbar-nav .nav-link.active:focus,.navbar-nav .nav-link.active:hover,.navbar-nav .nav-link.open,.navbar-nav .nav-link.open:focus,.navbar-nav .nav-link.open:hover,.navbar-nav .nav-link:focus,.navbar-nav .nav-link:hover,.navbar-nav .navbar .active.dropdown-toggle,.navbar-nav .navbar .active.dropdown-toggle:focus,.navbar-nav .navbar .active.dropdown-toggle:hover,.navbar-nav .navbar .active>.dropdown-toggle,.navbar-nav .navbar .active>.dropdown-toggle:focus,.navbar-nav .navbar .active>.dropdown-toggle:hover,.navbar-nav .navbar .dropdown-toggle:focus,.navbar-nav .navbar .dropdown-toggle:hover,.navbar-nav .navbar .open.dropdown-toggle,.navbar-nav .navbar .open.dropdown-toggle:focus,.navbar-nav .navbar .open.dropdown-toggle:hover,.navbar-nav .navbar .open>.dropdown-toggle,.navbar-nav .navbar .open>.dropdown-toggle:focus,.navbar-nav .navbar .open>.dropdown-toggle:hover,.navbar-nav .open>.nav-link,.navbar-nav .open>.nav-link:focus,.navbar-nav .open>.nav-link:hover,.navbar .navbar-nav .active.dropdown-toggle,.navbar .navbar-nav .active.dropdown-toggle:focus,.navbar .navbar-nav .active.dropdown-toggle:hover,.navbar .navbar-nav .active>.dropdown-toggle,.navbar .navbar-nav .active>.dropdown-toggle:focus,.navbar .navbar-nav .active>.dropdown-toggle:hover,.navbar .navbar-nav .dropdown-toggle:focus,.navbar .navbar-nav .dropdown-toggle:hover,.navbar .navbar-nav .open.dropdown-toggle,.navbar .navbar-nav .open.dropdown-toggle:focus,.navbar .navbar-nav .open.dropdown-toggle:hover,.navbar .navbar-nav .open>.dropdown-toggle,.navbar .navbar-nav .open>.dropdown-toggle:focus,.navbar .navbar-nav .open>.dropdown-toggle:hover {
    color: #29363d
}

.navbar-divider {
    background-color: rgba(0,0,0,.075)
}

@media(min-width: 992px) {
    .brand-minimized .app-header.navbar .navbar-brand {
        width:50px;
        background-color: #fff;
        background-image: url(../../fz/images/logo.png);/*-symbol*/
        background-size: 24px;
        border-bottom: 1px solid #a4b7c1
    }
}

.progress-xs {
    height: 4px
}

.progress-sm {
    height: 8px
}

.progress-white {
    background-color: hsla(0,0%,100%,.2)!important
}

.progress-white .progress-bar {
    background-color: #fff
}

.sidebar {
    display: flex;
    flex-direction: column;
    padding: 0;
    color: #fff;
    background: #29363d
}

.sidebar .sidebar-close {
    position: absolute;
    right: 0;
    display: none;
    padding: 0 1rem;
    font-size: 24px;
    font-weight: 800;
    line-height: 55px;
    color: #fff;
    background: 0;
    border: 0;
    opacity: .8
}

.sidebar .sidebar-close:hover {
    opacity: 1
}

.sidebar .sidebar-header {
    flex: 0 0 auto;
    padding: .75rem 1rem;
    text-align: center;
    background: rgba(0,0,0,.2)
}

.sidebar .sidebar-form .form-control {
    color: #fff;
    background: #151b1f;
    border: 0
}

.sidebar .sidebar-form .form-control::placeholder {
    color: hsla(0,0%,100%,.7)
}

.sidebar .sidebar-nav {
    position: relative;
    flex: 1;
    overflow-x: hidden;
    overflow-y: auto;
    -ms-overflow-style: -ms-autohiding-scrollbar;
    width: 200px
}

.sidebar .sidebar-nav::-webkit-scrollbar {
    position: absolute;
    width: 10px;
    margin-left: -10px;
    -webkit-appearance: none
}

.sidebar .sidebar-nav::-webkit-scrollbar-track {
    background-color: #33444c;
    border-right: 1px solid #1f292e;
    border-left: 1px solid #1f292e
}

.sidebar .sidebar-nav::-webkit-scrollbar-thumb {
    height: 50px;
    background-color: #151b1f;
    background-clip: content-box;
    border-color: transparent;
    border-style: solid;
    border-width: 1px 2px
}

.sidebar .nav {
    width: 200px;
    flex-direction: column;
    min-height: 100%
}

.sidebar .nav-title {
    padding: .75rem 1rem;
    font-size: 11px;
    font-weight: 600;
    color: #c2cfd6;
    text-transform: uppercase
}

.sidebar .divider,.sidebar .nav-divider {
    height: 10px
}

.sidebar .nav-item {
    position: relative;
    margin: 0;
    transition: background .3s ease-in-out
}

.sidebar .nav-dropdown-items {
    max-height: 0;
    padding: 0;
    margin: 0;
    overflow-y: hidden;
    transition: max-height .3s ease-in-out
}

.sidebar .nav-dropdown-items .nav-item {
    padding: 0;
    list-style: none
}

.navbar .sidebar .dropdown-toggle,.sidebar .nav-link,.sidebar .navbar .dropdown-toggle {
    display: block;
    padding: .75rem 1rem;
    color: #fff;
    text-decoration: none;
    background: 0 0
}

.navbar .sidebar .dropdown-toggle i,.sidebar .nav-link i,.sidebar .navbar .dropdown-toggle i {
    display: inline-block;
    width: 20px;
    margin: 0 .5rem 0 0;
    font-size: 14px;
    color: #536c79;
    text-align: center
}

.navbar .sidebar .dropdown-toggle .badge,.sidebar .nav-link .badge,.sidebar .navbar .dropdown-toggle .badge {
    float: right;
    margin-top: 2px
}

.navbar .sidebar .active.dropdown-toggle,.sidebar .nav-link.active,.sidebar .navbar .active.dropdown-toggle {
    color: #fff;
    background: #33444c
}

.navbar .sidebar .active.dropdown-toggle i,.sidebar .nav-link.active i,.sidebar .navbar .active.dropdown-toggle i {
    color: #20a8d8
}

.navbar .sidebar .dropdown-toggle:hover,.sidebar .nav-link:hover,.sidebar .navbar .dropdown-toggle:hover {
    color: #fff;
    background: #20a8d8
}

.navbar .sidebar .dropdown-toggle:hover i,.sidebar .nav-link:hover i,.sidebar .navbar .dropdown-toggle:hover i {
    color: #fff
}

.navbar .sidebar .dropdown-toggle:hover.nav-dropdown-toggle:before,.sidebar .nav-link:hover.nav-dropdown-toggle:before,.sidebar .navbar .dropdown-toggle:hover.nav-dropdown-toggle:before {
    background-image: url(data:image/svg+xml;charset=utf8;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMSAxNCI+PHBhdGggZmlsbD0iI2ZmZiIgZD0iTTkuMTQ4IDIuMzUyIDUgNi41bDQuMTQ4IDQuMTQ4cS4xNDguMTQ4LjE0OC4zNTJ0LS4xNDguMzUybC0xLjI5NyAxLjI5N3EtLjE0OC4xNDgtLjM1Mi4xNDh0LS4zNTItLjE0OGwtNS43OTctNS43OTdxLS4xNDgtLjE0OC0uMTQ4LS4zNTJ0LjE0OC0uMzUybDUuNzk3LTUuNzk3cS4xNDgtLjE0OC4zNTItLjE0OHQuMzUyLjE0OGwxLjI5NyAxLjI5N3EuMTQ4LjE0OC4xNDguMzUydC0uMTQ4LjM1MnoiLz48L3N2Zz4=)
}

.navbar .sidebar .nav-link-primary.dropdown-toggle,.sidebar .nav-link.nav-link-primary,.sidebar .navbar .nav-link-primary.dropdown-toggle {
    background: #20a8d8
}

.navbar .sidebar .nav-link-primary.dropdown-toggle i,.sidebar .nav-link.nav-link-primary i,.sidebar .navbar .nav-link-primary.dropdown-toggle i {
    color: hsla(0,0%,100%,.7)
}

.navbar .sidebar .nav-link-primary.dropdown-toggle:hover,.sidebar .nav-link.nav-link-primary:hover,.sidebar .navbar .nav-link-primary.dropdown-toggle:hover {
    background: #1d97c2!important
}

.navbar .sidebar .nav-link-primary.dropdown-toggle:hover i,.sidebar .nav-link.nav-link-primary:hover i,.sidebar .navbar .nav-link-primary.dropdown-toggle:hover i {
    color: #fff
}

.navbar .sidebar .nav-link-secondary.dropdown-toggle,.sidebar .nav-link.nav-link-secondary,.sidebar .navbar .nav-link-secondary.dropdown-toggle {
    background: #a4b7c1
}

.navbar .sidebar .nav-link-secondary.dropdown-toggle i,.sidebar .nav-link.nav-link-secondary i,.sidebar .navbar .nav-link-secondary.dropdown-toggle i {
    color: hsla(0,0%,100%,.7)
}

.navbar .sidebar .nav-link-secondary.dropdown-toggle:hover,.sidebar .nav-link.nav-link-secondary:hover,.sidebar .navbar .nav-link-secondary.dropdown-toggle:hover {
    background: #95abb7!important
}

.navbar .sidebar .nav-link-secondary.dropdown-toggle:hover i,.sidebar .nav-link.nav-link-secondary:hover i,.sidebar .navbar .nav-link-secondary.dropdown-toggle:hover i {
    color: #fff
}

.navbar .sidebar .nav-link-success.dropdown-toggle,.sidebar .nav-link.nav-link-success,.sidebar .navbar .nav-link-success.dropdown-toggle {
    background: #4dbd74
}

.navbar .sidebar .nav-link-success.dropdown-toggle i,.sidebar .nav-link.nav-link-success i,.sidebar .navbar .nav-link-success.dropdown-toggle i {
    color: hsla(0,0%,100%,.7)
}

.navbar .sidebar .nav-link-success.dropdown-toggle:hover,.sidebar .nav-link.nav-link-success:hover,.sidebar .navbar .nav-link-success.dropdown-toggle:hover {
    background: #41af67!important
}

.navbar .sidebar .nav-link-success.dropdown-toggle:hover i,.sidebar .nav-link.nav-link-success:hover i,.sidebar .navbar .nav-link-success.dropdown-toggle:hover i {
    color: #fff
}

.navbar .sidebar .nav-link-info.dropdown-toggle,.sidebar .nav-link.nav-link-info,.sidebar .navbar .nav-link-info.dropdown-toggle {
    background: #63c2de
}

.navbar .sidebar .nav-link-info.dropdown-toggle i,.sidebar .nav-link.nav-link-info i,.sidebar .navbar .nav-link-info.dropdown-toggle i {
    color: hsla(0,0%,100%,.7)
}

.navbar .sidebar .nav-link-info.dropdown-toggle:hover,.sidebar .nav-link.nav-link-info:hover,.sidebar .navbar .nav-link-info.dropdown-toggle:hover {
    background: #4ebada!important
}

.navbar .sidebar .nav-link-info.dropdown-toggle:hover i,.sidebar .nav-link.nav-link-info:hover i,.sidebar .navbar .nav-link-info.dropdown-toggle:hover i {
    color: #fff
}

.navbar .sidebar .nav-link-warning.dropdown-toggle,.sidebar .nav-link.nav-link-warning,.sidebar .navbar .nav-link-warning.dropdown-toggle {
    background: #ffc107
}

.navbar .sidebar .nav-link-warning.dropdown-toggle i,.sidebar .nav-link.nav-link-warning i,.sidebar .navbar .nav-link-warning.dropdown-toggle i {
    color: hsla(0,0%,100%,.7)
}

.navbar .sidebar .nav-link-warning.dropdown-toggle:hover,.sidebar .nav-link.nav-link-warning:hover,.sidebar .navbar .nav-link-warning.dropdown-toggle:hover {
    background: #edb100!important
}

.navbar .sidebar .nav-link-warning.dropdown-toggle:hover i,.sidebar .nav-link.nav-link-warning:hover i,.sidebar .navbar .nav-link-warning.dropdown-toggle:hover i {
    color: #fff
}

.navbar .sidebar .nav-link-danger.dropdown-toggle,.sidebar .nav-link.nav-link-danger,.sidebar .navbar .nav-link-danger.dropdown-toggle {
    background: #f86c6b
}

.navbar .sidebar .nav-link-danger.dropdown-toggle i,.sidebar .nav-link.nav-link-danger i,.sidebar .navbar .nav-link-danger.dropdown-toggle i {
    color: hsla(0,0%,100%,.7)
}

.navbar .sidebar .nav-link-danger.dropdown-toggle:hover,.sidebar .nav-link.nav-link-danger:hover,.sidebar .navbar .nav-link-danger.dropdown-toggle:hover {
    background: #f75453!important
}

.navbar .sidebar .nav-link-danger.dropdown-toggle:hover i,.sidebar .nav-link.nav-link-danger:hover i,.sidebar .navbar .nav-link-danger.dropdown-toggle:hover i {
    color: #fff
}

.navbar .sidebar .nav-link-light.dropdown-toggle,.sidebar .nav-link.nav-link-light,.sidebar .navbar .nav-link-light.dropdown-toggle {
    background: #f0f3f5
}

.navbar .sidebar .nav-link-light.dropdown-toggle i,.sidebar .nav-link.nav-link-light i,.sidebar .navbar .nav-link-light.dropdown-toggle i {
    color: hsla(0,0%,100%,.7)
}

.navbar .sidebar .nav-link-light.dropdown-toggle:hover,.sidebar .nav-link.nav-link-light:hover,.sidebar .navbar .nav-link-light.dropdown-toggle:hover {
    background: #e1e7eb!important
}

.navbar .sidebar .nav-link-light.dropdown-toggle:hover i,.sidebar .nav-link.nav-link-light:hover i,.sidebar .navbar .nav-link-light.dropdown-toggle:hover i {
    color: #fff
}

.navbar .sidebar .nav-link-dark.dropdown-toggle,.sidebar .nav-link.nav-link-dark,.sidebar .navbar .nav-link-dark.dropdown-toggle {
    background: #29363d
}

.navbar .sidebar .nav-link-dark.dropdown-toggle i,.sidebar .nav-link.nav-link-dark i,.sidebar .navbar .nav-link-dark.dropdown-toggle i {
    color: hsla(0,0%,100%,.7)
}

.navbar .sidebar .nav-link-dark.dropdown-toggle:hover,.sidebar .nav-link.nav-link-dark:hover,.sidebar .navbar .nav-link-dark.dropdown-toggle:hover {
    background: #1f292e!important
}

.navbar .sidebar .nav-link-dark.dropdown-toggle:hover i,.sidebar .nav-link.nav-link-dark:hover i,.sidebar .navbar .nav-link-dark.dropdown-toggle:hover i {
    color: #fff
}

.navbar .sidebar .nav-link-blue.dropdown-toggle,.sidebar .nav-link.nav-link-blue,.sidebar .navbar .nav-link-blue.dropdown-toggle {
    background: #20a8d8
}

.navbar .sidebar .nav-link-blue.dropdown-toggle i,.sidebar .nav-link.nav-link-blue i,.sidebar .navbar .nav-link-blue.dropdown-toggle i {
    color: hsla(0,0%,100%,.7)
}

.navbar .sidebar .nav-link-blue.dropdown-toggle:hover,.sidebar .nav-link.nav-link-blue:hover,.sidebar .navbar .nav-link-blue.dropdown-toggle:hover {
    background: #1d97c2!important
}

.navbar .sidebar .nav-link-blue.dropdown-toggle:hover i,.sidebar .nav-link.nav-link-blue:hover i,.sidebar .navbar .nav-link-blue.dropdown-toggle:hover i {
    color: #fff
}

.navbar .sidebar .nav-link-indigo.dropdown-toggle,.sidebar .nav-link.nav-link-indigo,.sidebar .navbar .nav-link-indigo.dropdown-toggle {
    background: #6610f2
}

.navbar .sidebar .nav-link-indigo.dropdown-toggle i,.sidebar .nav-link.nav-link-indigo i,.sidebar .navbar .nav-link-indigo.dropdown-toggle i {
    color: hsla(0,0%,100%,.7)
}

.navbar .sidebar .nav-link-indigo.dropdown-toggle:hover,.sidebar .nav-link.nav-link-indigo:hover,.sidebar .navbar .nav-link-indigo.dropdown-toggle:hover {
    background: #5b0cdd!important
}

.navbar .sidebar .nav-link-indigo.dropdown-toggle:hover i,.sidebar .nav-link.nav-link-indigo:hover i,.sidebar .navbar .nav-link-indigo.dropdown-toggle:hover i {
    color: #fff
}

.navbar .sidebar .nav-link-purple.dropdown-toggle,.sidebar .nav-link.nav-link-purple,.sidebar .navbar .nav-link-purple.dropdown-toggle {
    background: #6f42c1
}

.navbar .sidebar .nav-link-purple.dropdown-toggle i,.sidebar .nav-link.nav-link-purple i,.sidebar .navbar .nav-link-purple.dropdown-toggle i {
    color: hsla(0,0%,100%,.7)
}

.navbar .sidebar .nav-link-purple.dropdown-toggle:hover,.sidebar .nav-link.nav-link-purple:hover,.sidebar .navbar .nav-link-purple.dropdown-toggle:hover {
    background: #643ab0!important
}

.navbar .sidebar .nav-link-purple.dropdown-toggle:hover i,.sidebar .nav-link.nav-link-purple:hover i,.sidebar .navbar .nav-link-purple.dropdown-toggle:hover i {
    color: #fff
}

.navbar .sidebar .nav-link-pink.dropdown-toggle,.sidebar .nav-link.nav-link-pink,.sidebar .navbar .nav-link-pink.dropdown-toggle {
    background: #e83e8c
}

.navbar .sidebar .nav-link-pink.dropdown-toggle i,.sidebar .nav-link.nav-link-pink i,.sidebar .navbar .nav-link-pink.dropdown-toggle i {
    color: hsla(0,0%,100%,.7)
}

.navbar .sidebar .nav-link-pink.dropdown-toggle:hover,.sidebar .nav-link.nav-link-pink:hover,.sidebar .navbar .nav-link-pink.dropdown-toggle:hover {
    background: #e5277e!important
}

.navbar .sidebar .nav-link-pink.dropdown-toggle:hover i,.sidebar .nav-link.nav-link-pink:hover i,.sidebar .navbar .nav-link-pink.dropdown-toggle:hover i {
    color: #fff
}

.navbar .sidebar .nav-link-red.dropdown-toggle,.sidebar .nav-link.nav-link-red,.sidebar .navbar .nav-link-red.dropdown-toggle {
    background: #f86c6b
}

.navbar .sidebar .nav-link-red.dropdown-toggle i,.sidebar .nav-link.nav-link-red i,.sidebar .navbar .nav-link-red.dropdown-toggle i {
    color: hsla(0,0%,100%,.7)
}

.navbar .sidebar .nav-link-red.dropdown-toggle:hover,.sidebar .nav-link.nav-link-red:hover,.sidebar .navbar .nav-link-red.dropdown-toggle:hover {
    background: #f75453!important
}

.navbar .sidebar .nav-link-red.dropdown-toggle:hover i,.sidebar .nav-link.nav-link-red:hover i,.sidebar .navbar .nav-link-red.dropdown-toggle:hover i {
    color: #fff
}

.navbar .sidebar .nav-link-orange.dropdown-toggle,.sidebar .nav-link.nav-link-orange,.sidebar .navbar .nav-link-orange.dropdown-toggle {
    background: #f8cb00
}

.navbar .sidebar .nav-link-orange.dropdown-toggle i,.sidebar .nav-link.nav-link-orange i,.sidebar .navbar .nav-link-orange.dropdown-toggle i {
    color: hsla(0,0%,100%,.7)
}

.navbar .sidebar .nav-link-orange.dropdown-toggle:hover,.sidebar .nav-link.nav-link-orange:hover,.sidebar .navbar .nav-link-orange.dropdown-toggle:hover {
    background: #dfb600!important
}

.navbar .sidebar .nav-link-orange.dropdown-toggle:hover i,.sidebar .nav-link.nav-link-orange:hover i,.sidebar .navbar .nav-link-orange.dropdown-toggle:hover i {
    color: #fff
}

.navbar .sidebar .nav-link-#ff0.dropdown-toggle,.sidebar .nav-link.nav-link-#ff0,.sidebar .navbar .nav-link-#ff0.dropdown-toggle {
    background: #ffc107
}

.navbar .sidebar .nav-link-#ff0.dropdown-toggle i,.sidebar .nav-link.nav-link-#ff0 i,.sidebar .navbar .nav-link-#ff0.dropdown-toggle i {
    color: hsla(0,0%,100%,.7)
}

.navbar .sidebar .nav-link-#ff0.dropdown-toggle:hover,.sidebar .nav-link.nav-link-#ff0:hover,.sidebar .navbar .nav-link-#ff0.dropdown-toggle:hover {
    background: #edb100!important
}

.navbar .sidebar .nav-link-#ff0.dropdown-toggle:hover i,.sidebar .nav-link.nav-link-#ff0:hover i,.sidebar .navbar .nav-link-#ff0.dropdown-toggle:hover i {
    color: #fff
}

.navbar .sidebar .nav-link-green.dropdown-toggle,.sidebar .nav-link.nav-link-green,.sidebar .navbar .nav-link-green.dropdown-toggle {
    background: #4dbd74
}

.navbar .sidebar .nav-link-green.dropdown-toggle i,.sidebar .nav-link.nav-link-green i,.sidebar .navbar .nav-link-green.dropdown-toggle i {
    color: hsla(0,0%,100%,.7)
}

.navbar .sidebar .nav-link-green.dropdown-toggle:hover,.sidebar .nav-link.nav-link-green:hover,.sidebar .navbar .nav-link-green.dropdown-toggle:hover {
    background: #41af67!important
}

.navbar .sidebar .nav-link-green.dropdown-toggle:hover i,.sidebar .nav-link.nav-link-green:hover i,.sidebar .navbar .nav-link-green.dropdown-toggle:hover i {
    color: #fff
}

.navbar .sidebar .nav-link-teal.dropdown-toggle,.sidebar .nav-link.nav-link-teal,.sidebar .navbar .nav-link-teal.dropdown-toggle {
    background: #20c997
}

.navbar .sidebar .nav-link-teal.dropdown-toggle i,.sidebar .nav-link.nav-link-teal i,.sidebar .navbar .nav-link-teal.dropdown-toggle i {
    color: hsla(0,0%,100%,.7)
}

.navbar .sidebar .nav-link-teal.dropdown-toggle:hover,.sidebar .nav-link.nav-link-teal:hover,.sidebar .navbar .nav-link-teal.dropdown-toggle:hover {
    background: #1cb386!important
}

.navbar .sidebar .nav-link-teal.dropdown-toggle:hover i,.sidebar .nav-link.nav-link-teal:hover i,.sidebar .navbar .nav-link-teal.dropdown-toggle:hover i {
    color: #fff
}

.navbar .sidebar .nav-link-cyan.dropdown-toggle,.sidebar .nav-link.nav-link-cyan,.sidebar .navbar .nav-link-cyan.dropdown-toggle {
    background: #63c2de
}

.navbar .sidebar .nav-link-cyan.dropdown-toggle i,.sidebar .nav-link.nav-link-cyan i,.sidebar .navbar .nav-link-cyan.dropdown-toggle i {
    color: hsla(0,0%,100%,.7)
}

.navbar .sidebar .nav-link-cyan.dropdown-toggle:hover,.sidebar .nav-link.nav-link-cyan:hover,.sidebar .navbar .nav-link-cyan.dropdown-toggle:hover {
    background: #4ebada!important
}

.navbar .sidebar .nav-link-cyan.dropdown-toggle:hover i,.sidebar .nav-link.nav-link-cyan:hover i,.sidebar .navbar .nav-link-cyan.dropdown-toggle:hover i {
    color: #fff
}

.navbar .sidebar .nav-link-gray-100.dropdown-toggle,.sidebar .nav-link.nav-link-gray-100,.sidebar .navbar .nav-link-gray-100.dropdown-toggle {
    background: #f0f3f5
}

.navbar .sidebar .nav-link-gray-100.dropdown-toggle i,.sidebar .nav-link.nav-link-gray-100 i,.sidebar .navbar .nav-link-gray-100.dropdown-toggle i {
    color: hsla(0,0%,100%,.7)
}

.navbar .sidebar .nav-link-gray-100.dropdown-toggle:hover,.sidebar .nav-link.nav-link-gray-100:hover,.sidebar .navbar .nav-link-gray-100.dropdown-toggle:hover {
    background: #e1e7eb!important
}

.navbar .sidebar .nav-link-gray-100.dropdown-toggle:hover i,.sidebar .nav-link.nav-link-gray-100:hover i,.sidebar .navbar .nav-link-gray-100.dropdown-toggle:hover i {
    color: #fff
}

.navbar .sidebar .nav-link-gray-200.dropdown-toggle,.sidebar .nav-link.nav-link-gray-200,.sidebar .navbar .nav-link-gray-200.dropdown-toggle {
    background: #c2cfd6
}

.navbar .sidebar .nav-link-gray-200.dropdown-toggle i,.sidebar .nav-link.nav-link-gray-200 i,.sidebar .navbar .nav-link-gray-200.dropdown-toggle i {
    color: hsla(0,0%,100%,.7)
}

.navbar .sidebar .nav-link-gray-200.dropdown-toggle:hover,.sidebar .nav-link.nav-link-gray-200:hover,.sidebar .navbar .nav-link-gray-200.dropdown-toggle:hover {
    background: #b3c3cc!important
}

.navbar .sidebar .nav-link-gray-200.dropdown-toggle:hover i,.sidebar .nav-link.nav-link-gray-200:hover i,.sidebar .navbar .nav-link-gray-200.dropdown-toggle:hover i {
    color: #fff
}

.navbar .sidebar .nav-link-gray-300.dropdown-toggle,.sidebar .nav-link.nav-link-gray-300,.sidebar .navbar .nav-link-gray-300.dropdown-toggle {
    background: #a4b7c1
}

.navbar .sidebar .nav-link-gray-300.dropdown-toggle i,.sidebar .nav-link.nav-link-gray-300 i,.sidebar .navbar .nav-link-gray-300.dropdown-toggle i {
    color: hsla(0,0%,100%,.7)
}

.navbar .sidebar .nav-link-gray-300.dropdown-toggle:hover,.sidebar .nav-link.nav-link-gray-300:hover,.sidebar .navbar .nav-link-gray-300.dropdown-toggle:hover {
    background: #95abb7!important
}

.navbar .sidebar .nav-link-gray-300.dropdown-toggle:hover i,.sidebar .nav-link.nav-link-gray-300:hover i,.sidebar .navbar .nav-link-gray-300.dropdown-toggle:hover i {
    color: #fff
}

.navbar .sidebar .nav-link-gray-400.dropdown-toggle,.sidebar .nav-link.nav-link-gray-400,.sidebar .navbar .nav-link-gray-400.dropdown-toggle {
    background: #869fac
}

.navbar .sidebar .nav-link-gray-400.dropdown-toggle i,.sidebar .nav-link.nav-link-gray-400 i,.sidebar .navbar .nav-link-gray-400.dropdown-toggle i {
    color: hsla(0,0%,100%,.7)
}

.navbar .sidebar .nav-link-gray-400.dropdown-toggle:hover,.sidebar .nav-link.nav-link-gray-400:hover,.sidebar .navbar .nav-link-gray-400.dropdown-toggle:hover {
    background: #7793a2!important
}

.navbar .sidebar .nav-link-gray-400.dropdown-toggle:hover i,.sidebar .nav-link.nav-link-gray-400:hover i,.sidebar .navbar .nav-link-gray-400.dropdown-toggle:hover i {
    color: #fff
}

.navbar .sidebar .nav-link-gray-500.dropdown-toggle,.sidebar .nav-link.nav-link-gray-500,.sidebar .navbar .nav-link-gray-500.dropdown-toggle {
    background: #678898
}

.navbar .sidebar .nav-link-gray-500.dropdown-toggle i,.sidebar .nav-link.nav-link-gray-500 i,.sidebar .navbar .nav-link-gray-500.dropdown-toggle i {
    color: hsla(0,0%,100%,.7)
}

.navbar .sidebar .nav-link-gray-500.dropdown-toggle:hover,.sidebar .nav-link.nav-link-gray-500:hover,.sidebar .navbar .nav-link-gray-500.dropdown-toggle:hover {
    background: #5d7a89!important
}

.navbar .sidebar .nav-link-gray-500.dropdown-toggle:hover i,.sidebar .nav-link.nav-link-gray-500:hover i,.sidebar .navbar .nav-link-gray-500.dropdown-toggle:hover i {
    color: #fff
}

.navbar .sidebar .nav-link-gray-600.dropdown-toggle,.sidebar .nav-link.nav-link-gray-600,.sidebar .navbar .nav-link-gray-600.dropdown-toggle {
    background: #536c79
}

.navbar .sidebar .nav-link-gray-600.dropdown-toggle i,.sidebar .nav-link.nav-link-gray-600 i,.sidebar .navbar .nav-link-gray-600.dropdown-toggle i {
    color: hsla(0,0%,100%,.7)
}

.navbar .sidebar .nav-link-gray-600.dropdown-toggle:hover,.sidebar .nav-link.nav-link-gray-600:hover,.sidebar .navbar .nav-link-gray-600.dropdown-toggle:hover {
    background: #495f6a!important
}

.navbar .sidebar .nav-link-gray-600.dropdown-toggle:hover i,.sidebar .nav-link.nav-link-gray-600:hover i,.sidebar .navbar .nav-link-gray-600.dropdown-toggle:hover i {
    color: #fff
}

.navbar .sidebar .nav-link-gray-700.dropdown-toggle,.sidebar .nav-link.nav-link-gray-700,.sidebar .navbar .nav-link-gray-700.dropdown-toggle {
    background: #3e515b
}

.navbar .sidebar .nav-link-gray-700.dropdown-toggle i,.sidebar .nav-link.nav-link-gray-700 i,.sidebar .navbar .nav-link-gray-700.dropdown-toggle i {
    color: hsla(0,0%,100%,.7)
}

.navbar .sidebar .nav-link-gray-700.dropdown-toggle:hover,.sidebar .nav-link.nav-link-gray-700:hover,.sidebar .navbar .nav-link-gray-700.dropdown-toggle:hover {
    background: #34444c!important
}

.navbar .sidebar .nav-link-gray-700.dropdown-toggle:hover i,.sidebar .nav-link.nav-link-gray-700:hover i,.sidebar .navbar .nav-link-gray-700.dropdown-toggle:hover i {
    color: #fff
}

.navbar .sidebar .nav-link-gray-800.dropdown-toggle,.sidebar .nav-link.nav-link-gray-800,.sidebar .navbar .nav-link-gray-800.dropdown-toggle {
    background: #29363d
}

.navbar .sidebar .nav-link-gray-800.dropdown-toggle i,.sidebar .nav-link.nav-link-gray-800 i,.sidebar .navbar .nav-link-gray-800.dropdown-toggle i {
    color: hsla(0,0%,100%,.7)
}

.navbar .sidebar .nav-link-gray-800.dropdown-toggle:hover,.sidebar .nav-link.nav-link-gray-800:hover,.sidebar .navbar .nav-link-gray-800.dropdown-toggle:hover {
    background: #1f292e!important
}

.navbar .sidebar .nav-link-gray-800.dropdown-toggle:hover i,.sidebar .nav-link.nav-link-gray-800:hover i,.sidebar .navbar .nav-link-gray-800.dropdown-toggle:hover i {
    color: #fff
}

.navbar .sidebar .nav-link-gray-900.dropdown-toggle,.sidebar .nav-link.nav-link-gray-900,.sidebar .navbar .nav-link-gray-900.dropdown-toggle {
    background: #151b1e
}

.navbar .sidebar .nav-link-gray-900.dropdown-toggle i,.sidebar .nav-link.nav-link-gray-900 i,.sidebar .navbar .nav-link-gray-900.dropdown-toggle i {
    color: hsla(0,0%,100%,.7)
}

.navbar .sidebar .nav-link-gray-900.dropdown-toggle:hover,.sidebar .nav-link.nav-link-gray-900:hover,.sidebar .navbar .nav-link-gray-900.dropdown-toggle:hover {
    background: #0b0e0f!important
}

.navbar .sidebar .nav-link-gray-900.dropdown-toggle:hover i,.sidebar .nav-link.nav-link-gray-900:hover i,.sidebar .navbar .nav-link-gray-900.dropdown-toggle:hover i {
    color: #fff
}

.sidebar .nav-dropdown-toggle {
    position: relative
}

.sidebar .nav-dropdown-toggle:before {
    position: absolute;
    top: 50%;
    right: 1rem;
    display: block;
    width: 8px;
    height: 8px;
    padding: 0;
    margin-top: -4px;
    content: "";
    background-image: url(data:image/svg+xml;charset=utf8;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMSAxNCI+PHBhdGggZmlsbD0iIzUzNmM3OSIgZD0iTTkuMTQ4IDIuMzUyIDUgNi41bDQuMTQ4IDQuMTQ4cS4xNDguMTQ4LjE0OC4zNTJ0LS4xNDguMzUybC0xLjI5NyAxLjI5N3EtLjE0OC4xNDgtLjM1Mi4xNDh0LS4zNTItLjE0OGwtNS43OTctNS43OTdxLS4xNDgtLjE0OC0uMTQ4LS4zNTJ0LjE0OC0uMzUybDUuNzk3LTUuNzk3cS4xNDgtLjE0OC4zNTItLjE0OHQuMzUyLjE0OGwxLjI5NyAxLjI5N3EuMTQ4LjE0OC4xNDguMzUydC0uMTQ4LjM1MnoiLz48L3N2Zz4=);
    background-repeat: no-repeat;
    background-position: 50%;
    transition: transform .3s
}

.sidebar .nav-dropdown.open {
    background: rgba(0,0,0,.2)
}

.sidebar .nav-dropdown.open>.nav-dropdown-items {
    max-height: 1500px
}

.navbar .sidebar .nav-dropdown.open .dropdown-toggle,.sidebar .nav-dropdown.open .nav-link,.sidebar .nav-dropdown.open .navbar .dropdown-toggle {
    color: #fff;
    border-left: 0!important
}

.navbar .sidebar .nav-dropdown.open>.nav-dropdown-toggle.dropdown-toggle:before,.sidebar .nav-dropdown.open>.nav-link.nav-dropdown-toggle:before,.sidebar .navbar .nav-dropdown.open>.nav-dropdown-toggle.dropdown-toggle:before {
    transform: rotate(-90deg)
}

.sidebar .nav-dropdown.open .nav-dropdown.open {
    border-left: 0
}

.sidebar .nav-label {
    display: block;
    padding: .09375rem 1rem;
    color: #c2cfd6
}

.sidebar .nav-label:hover {
    color: #fff;
    text-decoration: none
}

.sidebar .nav-label i {
    width: 20px;
    margin: -3px .5rem 0 0;
    font-size: 10px;
    color: #536c79;
    text-align: center;
    vertical-align: middle
}

.sidebar .progress {
    background-color: #485f6b!important
}

.sidebar .sidebar-footer {
    flex: 0 0 auto;
    padding: .75rem 1rem;
    background: rgba(0,0,0,.2)
}

.sidebar .sidebar-minimizer {
    position: relative;
    flex: 0 0 50px;
    background-color: rgba(0,0,0,.2);
    border: 0
}

.sidebar .sidebar-minimizer:before {
    position: absolute;
    top: 0;
    right: 0;
    width: 50px;
    height: 50px;
    content: "";
    background-image: url(data:image/svg+xml;charset=utf8;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMSAxNCI+PHBhdGggZmlsbD0iIzUzNmM3OSIgZD0iTTkuMTQ4IDIuMzUyIDUgNi41bDQuMTQ4IDQuMTQ4cS4xNDguMTQ4LjE0OC4zNTJ0LS4xNDguMzUybC0xLjI5NyAxLjI5N3EtLjE0OC4xNDgtLjM1Mi4xNDh0LS4zNTItLjE0OGwtNS43OTctNS43OTdxLS4xNDgtLjE0OC0uMTQ4LS4zNTJ0LjE0OC0uMzUybDUuNzk3LTUuNzk3cS4xNDgtLjE0OC4zNTItLjE0OHQuMzUyLjE0OGwxLjI5NyAxLjI5N3EuMTQ4LjE0OC4xNDguMzUydC0uMTQ4LjM1MnoiLz48L3N2Zz4=);
    background-repeat: no-repeat;
    background-position: 50%;
    background-size: 12.5px;
    transition: .3s
}

.sidebar .sidebar-minimizer.focus,.sidebar .sidebar-minimizer:focus {
    outline: 0
}

.sidebar .sidebar-minimizer:hover {
    background-color: rgba(0,0,0,.3)
}

.sidebar .sidebar-minimizer:hover:before {
    background-image: url(data:image/svg+xml;charset=utf8;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMSAxNCI+PHBhdGggZmlsbD0iI2ZmZiIgZD0iTTkuMTQ4IDIuMzUyIDUgNi41bDQuMTQ4IDQuMTQ4cS4xNDguMTQ4LjE0OC4zNTJ0LS4xNDguMzUybC0xLjI5NyAxLjI5N3EtLjE0OC4xNDgtLjM1Mi4xNDh0LS4zNTItLjE0OGwtNS43OTctNS43OTdxLS4xNDgtLjE0OC0uMTQ4LS4zNTJ0LjE0OC0uMzUybDUuNzk3LTUuNzk3cS4xNDgtLjE0OC4zNTItLjE0OHQuMzUyLjE0OGwxLjI5NyAxLjI5N3EuMTQ4LjE0OC4xNDguMzUydC0uMTQ4LjM1MnoiLz48L3N2Zz4=)
}

@media(min-width: 992px) {
    .sidebar-compact .sidebar .nav,.sidebar-compact .sidebar .sidebar-nav {
        width:150px
    }

    .sidebar-compact .sidebar .nav .nav-title {
        text-align: center
    }

    .sidebar-compact .sidebar .nav .nav-item {
        width: 150px;
        border-left: 0!important
    }

    .navbar .sidebar-compact .sidebar .nav .nav-item .dropdown-toggle,.sidebar-compact .sidebar .nav .nav-item .nav-link,.sidebar-compact .sidebar .nav .nav-item .navbar .dropdown-toggle {
        text-align: center
    }

    .navbar .sidebar-compact .sidebar .nav .nav-item .dropdown-toggle i,.sidebar-compact .sidebar .nav .nav-item .nav-link i,.sidebar-compact .sidebar .nav .nav-item .navbar .dropdown-toggle i {
        display: block;
        width: 100%;
        margin: .25rem 0;
        font-size: 24px
    }

    .navbar .sidebar-compact .sidebar .nav .nav-item .dropdown-toggle .badge,.sidebar-compact .sidebar .nav .nav-item .nav-link .badge,.sidebar-compact .sidebar .nav .nav-item .navbar .dropdown-toggle .badge {
        position: absolute;
        top: 18px;
        right: 10px
    }

    .navbar .sidebar-compact .sidebar .nav .nav-item .nav-dropdown-toggle.dropdown-toggle:before,.sidebar-compact .sidebar .nav .nav-item .nav-link.nav-dropdown-toggle:before,.sidebar-compact .sidebar .nav .nav-item .navbar .nav-dropdown-toggle.dropdown-toggle:before {
        top: 30px
    }

    .sidebar-minimized .hidden-cn {
        display: none
    }

    .sidebar-minimized .sidebar {
        z-index: 1019
    }

    .sidebar-minimized .sidebar .sidebar-nav {
        overflow: visible;
        width: 50px
    }

    .sidebar-minimized .sidebar .nav {
        width: 50px
    }

    .sidebar-minimized .sidebar .divider,.sidebar-minimized .sidebar .nav-divider,.sidebar-minimized .sidebar .nav-title,.sidebar-minimized .sidebar .sidebar-footer,.sidebar-minimized .sidebar .sidebar-form,.sidebar-minimized .sidebar .sidebar-header {
        display: none
    }

    .sidebar-minimized .sidebar .sidebar-minimizer:before {
        width: 100%;
        transform: rotate(-180deg)
    }

    .sidebar-minimized .sidebar .nav-item {
        width: 50px;
        overflow: hidden;
        border-left: 0!important
    }

    .sidebar-minimized .sidebar .nav-item:hover {
        width: 250px;
        overflow: visible
    }

    .navbar .sidebar-minimized .sidebar .nav-item:hover>.dropdown-toggle,.sidebar-minimized .sidebar .nav-item:hover>.nav-link,.sidebar-minimized .sidebar .navbar .nav-item:hover>.dropdown-toggle {
        background: #20a8d8
    }

    .navbar .sidebar-minimized .sidebar .nav-item:hover>.dropdown-toggle i,.sidebar-minimized .sidebar .nav-item:hover>.nav-link i,.sidebar-minimized .sidebar .navbar .nav-item:hover>.dropdown-toggle i {
        color: #fff
    }

    .navbar .sidebar-minimized .sidebar .dropdown-toggle,.sidebar-minimized .sidebar .nav-link,.sidebar-minimized .sidebar .navbar .dropdown-toggle {
        position: relative;
        padding-left: 0;
        margin: 0;
        white-space: nowrap;
        border-left: 0!important
    }

    .navbar .sidebar-minimized .sidebar .dropdown-toggle i,.sidebar-minimized .sidebar .nav-link i,.sidebar-minimized .sidebar .navbar .dropdown-toggle i {
        display: block;
        float: left;
        width: 50px;
        font-size: 18px
    }

    .navbar .sidebar-minimized .sidebar .dropdown-toggle .badge,.sidebar-minimized .sidebar .nav-link .badge,.sidebar-minimized .sidebar .navbar .dropdown-toggle .badge {
        position: absolute;
        right: 15px;
        display: none
    }

    .navbar .sidebar-minimized .sidebar .dropdown-toggle:hover,.sidebar-minimized .sidebar .nav-link:hover,.sidebar-minimized .sidebar .navbar .dropdown-toggle:hover {
        width: 250px;
        background: #20a8d8
    }

    .navbar .sidebar-minimized .sidebar .dropdown-toggle:hover .badge,.sidebar-minimized .sidebar .nav-link:hover .badge,.sidebar-minimized .sidebar .navbar .dropdown-toggle:hover .badge {
        display: inline
    }

    .navbar .sidebar-minimized .sidebar .nav-dropdown-toggle.dropdown-toggle:before,.sidebar-minimized .sidebar .nav-link.nav-dropdown-toggle:before,.sidebar-minimized .sidebar .navbar .nav-dropdown-toggle.dropdown-toggle:before {
        display: none
    }

    .navbar .sidebar-minimized .sidebar .nav-dropdown-items .nav-item .dropdown-toggle,.sidebar-minimized .sidebar .nav-dropdown-items .nav-item,.sidebar-minimized .sidebar .nav-dropdown-items .nav-item .nav-link,.sidebar-minimized .sidebar .nav-dropdown-items .nav-item .navbar .dropdown-toggle {
        width: 200px
    }

    .sidebar-minimized .sidebar .nav>.nav-dropdown>.nav-dropdown-items {
        display: none;
        max-height: 1e3px;
        background: #29363d
    }

    .sidebar-minimized .sidebar .nav>.nav-dropdown:hover {
        background: #20a8d8
    }

    .sidebar-minimized .sidebar .nav>.nav-dropdown:hover>.nav-dropdown-items {
        position: absolute;
        left: 50px;
        display: inline
    }
}

.switch.switch-default {
    position: relative;
    display: inline-block;
    vertical-align: top;
    width: 40px;
    height: 24px;
    background-color: transparent;
    cursor: pointer
}

.switch.switch-default .switch-input {
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0
}

.switch.switch-default .switch-label {
    position: relative;
    display: block;
    height: inherit;
    font-size: 10px;
    font-weight: 600;
    text-transform: uppercase;
    background-color: #fff;
    border: 1px solid #a4b7c1;
    border-radius: 2px;
    transition: opacity background .15s ease-out
}

.switch.switch-default .switch-input:checked~.switch-label:before {
    opacity: 0
}

.switch.switch-default .switch-input:checked~.switch-label:after {
    opacity: 1
}

.switch.switch-default .switch-handle {
    position: absolute;
    top: 2px;
    left: 2px;
    width: 20px;
    height: 20px;
    background: #fff;
    border: 1px solid #a4b7c1;
    border-radius: 1px;
    transition: left .15s ease-out
}

.switch.switch-default .switch-input:checked~.switch-handle {
    left: 18px
}

.switch.switch-default.switch-lg {
    width: 48px;
    height: 28px
}

.switch.switch-default.switch-lg .switch-label {
    font-size: 12px
}

.switch.switch-default.switch-lg .switch-handle {
    width: 24px;
    height: 24px
}

.switch.switch-default.switch-lg .switch-input:checked~.switch-handle {
    left: 22px
}

.switch.switch-default.switch-sm {
    width: 32px;
    height: 20px
}

.switch.switch-default.switch-sm .switch-label {
    font-size: 8px
}

.switch.switch-default.switch-sm .switch-handle {
    width: 16px;
    height: 16px
}

.switch.switch-default.switch-sm .switch-input:checked~.switch-handle {
    left: 14px
}

.switch.switch-default.switch-xs {
    width: 24px;
    height: 16px
}

.switch.switch-default.switch-xs .switch-label {
    font-size: 7px
}

.switch.switch-default.switch-xs .switch-handle {
    width: 12px;
    height: 12px
}

.switch.switch-default.switch-xs .switch-input:checked~.switch-handle {
    left: 10px
}

.switch.switch-text {
    position: relative;
    display: inline-block;
    vertical-align: top;
    width: 48px;
    height: 24px;
    background-color: transparent;
    cursor: pointer
}

.switch.switch-text .switch-input {
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0
}

.switch.switch-text .switch-label {
    position: relative;
    display: block;
    height: inherit;
    font-size: 10px;
    font-weight: 600;
    text-transform: uppercase;
    background-color: #fff;
    border: 1px solid #a4b7c1;
    border-radius: 2px;
    transition: opacity background .15s ease-out
}

.switch.switch-text .switch-label:after,.switch.switch-text .switch-label:before {
    position: absolute;
    top: 50%;
    width: 50%;
    margin-top: -.5em;
    line-height: 1;
    text-align: center;
    transition: inherit
}

.switch.switch-text .switch-label:before {
    right: 1px;
    color: #c2cfd6;
    content: attr(data-off)
}

.switch.switch-text .switch-label:after {
    left: 1px;
    color: #fff;
    content: attr(data-on);
    opacity: 0
}

.switch.switch-text .switch-input:checked~.switch-label:before {
    opacity: 0
}

.switch.switch-text .switch-input:checked~.switch-label:after {
    opacity: 1
}

.switch.switch-text .switch-handle {
    position: absolute;
    top: 2px;
    left: 2px;
    width: 20px;
    height: 20px;
    background: #fff;
    border: 1px solid #a4b7c1;
    border-radius: 1px;
    transition: left .15s ease-out
}

.switch.switch-text .switch-input:checked~.switch-handle {
    left: 26px
}

.switch.switch-text.switch-lg {
    width: 56px;
    height: 28px
}

.switch.switch-text.switch-lg .switch-label {
    font-size: 12px
}

.switch.switch-text.switch-lg .switch-handle {
    width: 24px;
    height: 24px
}

.switch.switch-text.switch-lg .switch-input:checked~.switch-handle {
    left: 30px
}

.switch.switch-text.switch-sm {
    width: 40px;
    height: 20px
}

.switch.switch-text.switch-sm .switch-label {
    font-size: 8px
}

.switch.switch-text.switch-sm .switch-handle {
    width: 16px;
    height: 16px
}

.switch.switch-text.switch-sm .switch-input:checked~.switch-handle {
    left: 22px
}

.switch.switch-text.switch-xs {
    width: 32px;
    height: 16px
}

.switch.switch-text.switch-xs .switch-label {
    font-size: 7px
}

.switch.switch-text.switch-xs .switch-handle {
    width: 12px;
    height: 12px
}

.switch.switch-text.switch-xs .switch-input:checked~.switch-handle {
    left: 18px
}

.switch.switch-icon {
    position: relative;
    display: inline-block;
    vertical-align: top;
    width: 48px;
    height: 24px;
    background-color: transparent;
    cursor: pointer
}

.switch.switch-icon .switch-input {
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0
}

.switch.switch-icon .switch-label {
    position: relative;
    display: block;
    height: inherit;
    font-family: FontAwesome;
    font-size: 10px;
    font-weight: 600;
    text-transform: uppercase;
    background-color: #fff;
    border: 1px solid #a4b7c1;
    border-radius: 2px;
    transition: opacity background .15s ease-out
}

.switch.switch-icon .switch-label:after,.switch.switch-icon .switch-label:before {
    position: absolute;
    top: 50%;
    width: 50%;
    margin-top: -.5em;
    line-height: 1;
    text-align: center;
    transition: inherit
}

.switch.switch-icon .switch-label:before {
    right: 1px;
    color: #c2cfd6;
    content: attr(data-off)
}

.switch.switch-icon .switch-label:after {
    left: 1px;
    color: #fff;
    content: attr(data-on);
    opacity: 0
}

.switch.switch-icon .switch-input:checked~.switch-label:before {
    opacity: 0
}

.switch.switch-icon .switch-input:checked~.switch-label:after {
    opacity: 1
}

.switch.switch-icon .switch-handle {
    position: absolute;
    top: 2px;
    left: 2px;
    width: 20px;
    height: 20px;
    background: #fff;
    border: 1px solid #a4b7c1;
    border-radius: 1px;
    transition: left .15s ease-out
}

.switch.switch-icon .switch-input:checked~.switch-handle {
    left: 26px
}

.switch.switch-icon.switch-lg {
    width: 56px;
    height: 28px
}

.switch.switch-icon.switch-lg .switch-label {
    font-size: 12px
}

.switch.switch-icon.switch-lg .switch-handle {
    width: 24px;
    height: 24px
}

.switch.switch-icon.switch-lg .switch-input:checked~.switch-handle {
    left: 30px
}

.switch.switch-icon.switch-sm {
    width: 40px;
    height: 20px
}

.switch.switch-icon.switch-sm .switch-label {
    font-size: 8px
}

.switch.switch-icon.switch-sm .switch-handle {
    width: 16px;
    height: 16px
}

.switch.switch-icon.switch-sm .switch-input:checked~.switch-handle {
    left: 22px
}

.switch.switch-icon.switch-xs {
    width: 32px;
    height: 16px
}

.switch.switch-icon.switch-xs .switch-label {
    font-size: 7px
}

.switch.switch-icon.switch-xs .switch-handle {
    width: 12px;
    height: 12px
}

.switch.switch-icon.switch-xs .switch-input:checked~.switch-handle {
    left: 18px
}

.switch.switch-3d {
    position: relative;
    display: inline-block;
    vertical-align: top;
    width: 40px;
    height: 24px;
    background-color: transparent;
    cursor: pointer
}

.switch.switch-3d .switch-input {
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0
}

.switch.switch-3d .switch-label {
    position: relative;
    display: block;
    height: inherit;
    font-size: 10px;
    font-weight: 600;
    text-transform: uppercase;
    background-color: #f0f3f5;
    border: 1px solid #a4b7c1;
    border-radius: 2px;
    transition: opacity background .15s ease-out
}

.switch.switch-3d .switch-input:checked~.switch-label:before {
    opacity: 0
}

.switch.switch-3d .switch-input:checked~.switch-label:after {
    opacity: 1
}

.switch.switch-3d .switch-handle {
    position: absolute;
    top: 0;
    left: 0;
    width: 24px;
    height: 24px;
    background: #fff;
    border: 1px solid #a4b7c1;
    border-radius: 1px;
    transition: left .15s ease-out;
    border: 0;
    box-shadow: 0 2px 5px rgba(0,0,0,.3)
}

.switch.switch-3d .switch-input:checked~.switch-handle {
    left: 16px
}

.switch.switch-3d.switch-lg {
    width: 48px;
    height: 28px
}

.switch.switch-3d.switch-lg .switch-label {
    font-size: 12px
}

.switch.switch-3d.switch-lg .switch-handle {
    width: 28px;
    height: 28px
}

.switch.switch-3d.switch-lg .switch-input:checked~.switch-handle {
    left: 20px
}

.switch.switch-3d.switch-sm {
    width: 32px;
    height: 20px
}

.switch.switch-3d.switch-sm .switch-label {
    font-size: 8px
}

.switch.switch-3d.switch-sm .switch-handle {
    width: 20px;
    height: 20px
}

.switch.switch-3d.switch-sm .switch-input:checked~.switch-handle {
    left: 12px
}

.switch.switch-3d.switch-xs {
    width: 24px;
    height: 16px
}

.switch.switch-3d.switch-xs .switch-label {
    font-size: 7px
}

.switch.switch-3d.switch-xs .switch-handle {
    width: 16px;
    height: 16px
}

.switch.switch-3d.switch-xs .switch-input:checked~.switch-handle {
    left: 8px
}

.switch-pill .switch-handle,.switch-pill .switch-label,.switch.switch-3d .switch-handle,.switch.switch-3d .switch-label {
    border-radius: 50em!important
}

.switch-pill .switch-label:before,.switch.switch-3d .switch-label:before {
    right: 2px!important
}

.switch-pill .switch-label:after,.switch.switch-3d .switch-label:after {
    left: 2px!important
}

.switch-primary>.switch-input:checked~.switch-label {
    background: #20a8d8!important;
    border-color: #1985ac
}

.switch-primary>.switch-input:checked~.switch-handle {
    border-color: #1985ac
}

.switch-primary-outline>.switch-input:checked~.switch-label {
    background: #fff!important;
    border-color: #20a8d8
}

.switch-primary-outline>.switch-input:checked~.switch-label:after {
    color: #20a8d8
}

.switch-primary-outline>.switch-input:checked~.switch-handle {
    border-color: #20a8d8
}

.switch-primary-outline-alt>.switch-input:checked~.switch-label {
    background: #fff!important;
    border-color: #20a8d8
}

.switch-primary-outline-alt>.switch-input:checked~.switch-label:after {
    color: #20a8d8
}

.switch-primary-outline-alt>.switch-input:checked~.switch-handle {
    background: #20a8d8!important;
    border-color: #20a8d8
}

.switch-secondary>.switch-input:checked~.switch-label {
    background: #a4b7c1!important;
    border-color: #869fac
}

.switch-secondary>.switch-input:checked~.switch-handle {
    border-color: #869fac
}

.switch-secondary-outline>.switch-input:checked~.switch-label {
    background: #fff!important;
    border-color: #a4b7c1
}

.switch-secondary-outline>.switch-input:checked~.switch-label:after {
    color: #a4b7c1
}

.switch-secondary-outline>.switch-input:checked~.switch-handle {
    border-color: #a4b7c1
}

.switch-secondary-outline-alt>.switch-input:checked~.switch-label {
    background: #fff!important;
    border-color: #a4b7c1
}

.switch-secondary-outline-alt>.switch-input:checked~.switch-label:after {
    color: #a4b7c1
}

.switch-secondary-outline-alt>.switch-input:checked~.switch-handle {
    background: #a4b7c1!important;
    border-color: #a4b7c1
}

.switch-success>.switch-input:checked~.switch-label {
    background: #4dbd74!important;
    border-color: #3a9d5d
}

.switch-success>.switch-input:checked~.switch-handle {
    border-color: #3a9d5d
}

.switch-success-outline>.switch-input:checked~.switch-label {
    background: #fff!important;
    border-color: #4dbd74
}

.switch-success-outline>.switch-input:checked~.switch-label:after {
    color: #4dbd74
}

.switch-success-outline>.switch-input:checked~.switch-handle {
    border-color: #4dbd74
}

.switch-success-outline-alt>.switch-input:checked~.switch-label {
    background: #fff!important;
    border-color: #4dbd74
}

.switch-success-outline-alt>.switch-input:checked~.switch-label:after {
    color: #4dbd74
}

.switch-success-outline-alt>.switch-input:checked~.switch-handle {
    background: #4dbd74!important;
    border-color: #4dbd74
}

.switch-info>.switch-input:checked~.switch-label {
    background: #63c2de!important;
    border-color: #39b2d5
}

.switch-info>.switch-input:checked~.switch-handle {
    border-color: #39b2d5
}

.switch-info-outline>.switch-input:checked~.switch-label {
    background: #fff!important;
    border-color: #63c2de
}

.switch-info-outline>.switch-input:checked~.switch-label:after {
    color: #63c2de
}

.switch-info-outline>.switch-input:checked~.switch-handle {
    border-color: #63c2de
}

.switch-info-outline-alt>.switch-input:checked~.switch-label {
    background: #fff!important;
    border-color: #63c2de
}

.switch-info-outline-alt>.switch-input:checked~.switch-label:after {
    color: #63c2de
}

.switch-info-outline-alt>.switch-input:checked~.switch-handle {
    background: #63c2de!important;
    border-color: #63c2de
}

.switch-warning>.switch-input:checked~.switch-label {
    background: #ffc107!important;
    border-color: #d39e00
}

.switch-warning>.switch-input:checked~.switch-handle {
    border-color: #d39e00
}

.switch-warning-outline>.switch-input:checked~.switch-label {
    background: #fff!important;
    border-color: #ffc107
}

.switch-warning-outline>.switch-input:checked~.switch-label:after {
    color: #ffc107
}

.switch-warning-outline>.switch-input:checked~.switch-handle {
    border-color: #ffc107
}

.switch-warning-outline-alt>.switch-input:checked~.switch-label {
    background: #fff!important;
    border-color: #ffc107
}

.switch-warning-outline-alt>.switch-input:checked~.switch-label:after {
    color: #ffc107
}

.switch-warning-outline-alt>.switch-input:checked~.switch-handle {
    background: #ffc107!important;
    border-color: #ffc107
}

.switch-danger>.switch-input:checked~.switch-label {
    background: #f86c6b!important;
    border-color: #f63c3a
}

.switch-danger>.switch-input:checked~.switch-handle {
    border-color: #f63c3a
}

.switch-danger-outline>.switch-input:checked~.switch-label {
    background: #fff!important;
    border-color: #f86c6b
}

.switch-danger-outline>.switch-input:checked~.switch-label:after {
    color: #f86c6b
}

.switch-danger-outline>.switch-input:checked~.switch-handle {
    border-color: #f86c6b
}

.switch-danger-outline-alt>.switch-input:checked~.switch-label {
    background: #fff!important;
    border-color: #f86c6b
}

.switch-danger-outline-alt>.switch-input:checked~.switch-label:after {
    color: #f86c6b
}

.switch-danger-outline-alt>.switch-input:checked~.switch-handle {
    background: #f86c6b!important;
    border-color: #f86c6b
}

.switch-light>.switch-input:checked~.switch-label {
    background: #f0f3f5!important;
    border-color: #d1dbe1
}

.switch-light>.switch-input:checked~.switch-handle {
    border-color: #d1dbe1
}

.switch-light-outline>.switch-input:checked~.switch-label {
    background: #fff!important;
    border-color: #f0f3f5
}

.switch-light-outline>.switch-input:checked~.switch-label:after {
    color: #f0f3f5
}

.switch-light-outline>.switch-input:checked~.switch-handle {
    border-color: #f0f3f5
}

.switch-light-outline-alt>.switch-input:checked~.switch-label {
    background: #fff!important;
    border-color: #f0f3f5
}

.switch-light-outline-alt>.switch-input:checked~.switch-label:after {
    color: #f0f3f5
}

.switch-light-outline-alt>.switch-input:checked~.switch-handle {
    background: #f0f3f5!important;
    border-color: #f0f3f5
}

.switch-dark>.switch-input:checked~.switch-label {
    background: #29363d!important;
    border-color: #151b1f
}

.switch-dark>.switch-input:checked~.switch-handle {
    border-color: #151b1f
}

.switch-dark-outline>.switch-input:checked~.switch-label {
    background: #fff!important;
    border-color: #29363d
}

.switch-dark-outline>.switch-input:checked~.switch-label:after {
    color: #29363d
}

.switch-dark-outline>.switch-input:checked~.switch-handle {
    border-color: #29363d
}

.switch-dark-outline-alt>.switch-input:checked~.switch-label {
    background: #fff!important;
    border-color: #29363d
}

.switch-dark-outline-alt>.switch-input:checked~.switch-label:after {
    color: #29363d
}

.switch-dark-outline-alt>.switch-input:checked~.switch-handle {
    background: #29363d!important;
    border-color: #29363d
}

.switch-blue>.switch-input:checked~.switch-label {
    background: #20a8d8!important;
    border-color: #1985ac
}

.switch-blue>.switch-input:checked~.switch-handle {
    border-color: #1985ac
}

.switch-blue-outline>.switch-input:checked~.switch-label {
    background: #fff!important;
    border-color: #20a8d8
}

.switch-blue-outline>.switch-input:checked~.switch-label:after {
    color: #20a8d8
}

.switch-blue-outline>.switch-input:checked~.switch-handle {
    border-color: #20a8d8
}

.switch-blue-outline-alt>.switch-input:checked~.switch-label {
    background: #fff!important;
    border-color: #20a8d8
}

.switch-blue-outline-alt>.switch-input:checked~.switch-label:after {
    color: #20a8d8
}

.switch-blue-outline-alt>.switch-input:checked~.switch-handle {
    background: #20a8d8!important;
    border-color: #20a8d8
}

.switch-indigo>.switch-input:checked~.switch-label {
    background: #6610f2!important;
    border-color: #510bc4
}

.switch-indigo>.switch-input:checked~.switch-handle {
    border-color: #510bc4
}

.switch-indigo-outline>.switch-input:checked~.switch-label {
    background: #fff!important;
    border-color: #6610f2
}

.switch-indigo-outline>.switch-input:checked~.switch-label:after {
    color: #6610f2
}

.switch-indigo-outline>.switch-input:checked~.switch-handle {
    border-color: #6610f2
}

.switch-indigo-outline-alt>.switch-input:checked~.switch-label {
    background: #fff!important;
    border-color: #6610f2
}

.switch-indigo-outline-alt>.switch-input:checked~.switch-label:after {
    color: #6610f2
}

.switch-indigo-outline-alt>.switch-input:checked~.switch-handle {
    background: #6610f2!important;
    border-color: #6610f2
}

.switch-purple>.switch-input:checked~.switch-label {
    background: #6f42c1!important;
    border-color: #59339d
}

.switch-purple>.switch-input:checked~.switch-handle {
    border-color: #59339d
}

.switch-purple-outline>.switch-input:checked~.switch-label {
    background: #fff!important;
    border-color: #6f42c1
}

.switch-purple-outline>.switch-input:checked~.switch-label:after {
    color: #6f42c1
}

.switch-purple-outline>.switch-input:checked~.switch-handle {
    border-color: #6f42c1
}

.switch-purple-outline-alt>.switch-input:checked~.switch-label {
    background: #fff!important;
    border-color: #6f42c1
}

.switch-purple-outline-alt>.switch-input:checked~.switch-label:after {
    color: #6f42c1
}

.switch-purple-outline-alt>.switch-input:checked~.switch-handle {
    background: #6f42c1!important;
    border-color: #6f42c1
}

.switch-pink>.switch-input:checked~.switch-label {
    background: #e83e8c!important;
    border-color: #d91a72
}

.switch-pink>.switch-input:checked~.switch-handle {
    border-color: #d91a72
}

.switch-pink-outline>.switch-input:checked~.switch-label {
    background: #fff!important;
    border-color: #e83e8c
}

.switch-pink-outline>.switch-input:checked~.switch-label:after {
    color: #e83e8c
}

.switch-pink-outline>.switch-input:checked~.switch-handle {
    border-color: #e83e8c
}

.switch-pink-outline-alt>.switch-input:checked~.switch-label {
    background: #fff!important;
    border-color: #e83e8c
}

.switch-pink-outline-alt>.switch-input:checked~.switch-label:after {
    color: #e83e8c
}

.switch-pink-outline-alt>.switch-input:checked~.switch-handle {
    background: #e83e8c!important;
    border-color: #e83e8c
}

.switch-red>.switch-input:checked~.switch-label {
    background: #f86c6b!important;
    border-color: #f63c3a
}

.switch-red>.switch-input:checked~.switch-handle {
    border-color: #f63c3a
}

.switch-red-outline>.switch-input:checked~.switch-label {
    background: #fff!important;
    border-color: #f86c6b
}

.switch-red-outline>.switch-input:checked~.switch-label:after {
    color: #f86c6b
}

.switch-red-outline>.switch-input:checked~.switch-handle {
    border-color: #f86c6b
}

.switch-red-outline-alt>.switch-input:checked~.switch-label {
    background: #fff!important;
    border-color: #f86c6b
}

.switch-red-outline-alt>.switch-input:checked~.switch-label:after {
    color: #f86c6b
}

.switch-red-outline-alt>.switch-input:checked~.switch-handle {
    background: #f86c6b!important;
    border-color: #f86c6b
}

.switch-orange>.switch-input:checked~.switch-label {
    background: #f8cb00!important;
    border-color: #c5a100
}

.switch-orange>.switch-input:checked~.switch-handle {
    border-color: #c5a100
}

.switch-orange-outline>.switch-input:checked~.switch-label {
    background: #fff!important;
    border-color: #f8cb00
}

.switch-orange-outline>.switch-input:checked~.switch-label:after {
    color: #f8cb00
}

.switch-orange-outline>.switch-input:checked~.switch-handle {
    border-color: #f8cb00
}

.switch-orange-outline-alt>.switch-input:checked~.switch-label {
    background: #fff!important;
    border-color: #f8cb00
}

.switch-orange-outline-alt>.switch-input:checked~.switch-label:after {
    color: #f8cb00
}

.switch-orange-outline-alt>.switch-input:checked~.switch-handle {
    background: #f8cb00!important;
    border-color: #f8cb00
}

.switch-#ff0>.switch-input:checked~.switch-label {
    background: #ffc107!important;
    border-color: #d39e00
}

.switch-#ff0>.switch-input:checked~.switch-handle {
    border-color: #d39e00
}

.switch-#ff0-outline>.switch-input:checked~.switch-label {
    background: #fff!important;
    border-color: #ffc107
}

.switch-#ff0-outline>.switch-input:checked~.switch-label:after {
    color: #ffc107
}

.switch-#ff0-outline>.switch-input:checked~.switch-handle {
    border-color: #ffc107
}

.switch-#ff0-outline-alt>.switch-input:checked~.switch-label {
    background: #fff!important;
    border-color: #ffc107
}

.switch-#ff0-outline-alt>.switch-input:checked~.switch-label:after {
    color: #ffc107
}

.switch-#ff0-outline-alt>.switch-input:checked~.switch-handle {
    background: #ffc107!important;
    border-color: #ffc107
}

.switch-green>.switch-input:checked~.switch-label {
    background: #4dbd74!important;
    border-color: #3a9d5d
}

.switch-green>.switch-input:checked~.switch-handle {
    border-color: #3a9d5d
}

.switch-green-outline>.switch-input:checked~.switch-label {
    background: #fff!important;
    border-color: #4dbd74
}

.switch-green-outline>.switch-input:checked~.switch-label:after {
    color: #4dbd74
}

.switch-green-outline>.switch-input:checked~.switch-handle {
    border-color: #4dbd74
}

.switch-green-outline-alt>.switch-input:checked~.switch-label {
    background: #fff!important;
    border-color: #4dbd74
}

.switch-green-outline-alt>.switch-input:checked~.switch-label:after {
    color: #4dbd74
}

.switch-green-outline-alt>.switch-input:checked~.switch-handle {
    background: #4dbd74!important;
    border-color: #4dbd74
}

.switch-teal>.switch-input:checked~.switch-label {
    background: #20c997!important;
    border-color: #199d76
}

.switch-teal>.switch-input:checked~.switch-handle {
    border-color: #199d76
}

.switch-teal-outline>.switch-input:checked~.switch-label {
    background: #fff!important;
    border-color: #20c997
}

.switch-teal-outline>.switch-input:checked~.switch-label:after {
    color: #20c997
}

.switch-teal-outline>.switch-input:checked~.switch-handle {
    border-color: #20c997
}

.switch-teal-outline-alt>.switch-input:checked~.switch-label {
    background: #fff!important;
    border-color: #20c997
}

.switch-teal-outline-alt>.switch-input:checked~.switch-label:after {
    color: #20c997
}

.switch-teal-outline-alt>.switch-input:checked~.switch-handle {
    background: #20c997!important;
    border-color: #20c997
}

.switch-cyan>.switch-input:checked~.switch-label {
    background: #63c2de!important;
    border-color: #39b2d5
}

.switch-cyan>.switch-input:checked~.switch-handle {
    border-color: #39b2d5
}

.switch-cyan-outline>.switch-input:checked~.switch-label {
    background: #fff!important;
    border-color: #63c2de
}

.switch-cyan-outline>.switch-input:checked~.switch-label:after {
    color: #63c2de
}

.switch-cyan-outline>.switch-input:checked~.switch-handle {
    border-color: #63c2de
}

.switch-cyan-outline-alt>.switch-input:checked~.switch-label {
    background: #fff!important;
    border-color: #63c2de
}

.switch-cyan-outline-alt>.switch-input:checked~.switch-label:after {
    color: #63c2de
}

.switch-cyan-outline-alt>.switch-input:checked~.switch-handle {
    background: #63c2de!important;
    border-color: #63c2de
}

.switch-gray-100>.switch-input:checked~.switch-label {
    background: #f0f3f5!important;
    border-color: #d1dbe1
}

.switch-gray-100>.switch-input:checked~.switch-handle {
    border-color: #d1dbe1
}

.switch-gray-100-outline>.switch-input:checked~.switch-label {
    background: #fff!important;
    border-color: #f0f3f5
}

.switch-gray-100-outline>.switch-input:checked~.switch-label:after {
    color: #f0f3f5
}

.switch-gray-100-outline>.switch-input:checked~.switch-handle {
    border-color: #f0f3f5
}

.switch-gray-100-outline-alt>.switch-input:checked~.switch-label {
    background: #fff!important;
    border-color: #f0f3f5
}

.switch-gray-100-outline-alt>.switch-input:checked~.switch-label:after {
    color: #f0f3f5
}

.switch-gray-100-outline-alt>.switch-input:checked~.switch-handle {
    background: #f0f3f5!important;
    border-color: #f0f3f5
}

.switch-gray-200>.switch-input:checked~.switch-label {
    background: #c2cfd6!important;
    border-color: #a4b7c2
}

.switch-gray-200>.switch-input:checked~.switch-handle {
    border-color: #a4b7c2
}

.switch-gray-200-outline>.switch-input:checked~.switch-label {
    background: #fff!important;
    border-color: #c2cfd6
}

.switch-gray-200-outline>.switch-input:checked~.switch-label:after {
    color: #c2cfd6
}

.switch-gray-200-outline>.switch-input:checked~.switch-handle {
    border-color: #c2cfd6
}

.switch-gray-200-outline-alt>.switch-input:checked~.switch-label {
    background: #fff!important;
    border-color: #c2cfd6
}

.switch-gray-200-outline-alt>.switch-input:checked~.switch-label:after {
    color: #c2cfd6
}

.switch-gray-200-outline-alt>.switch-input:checked~.switch-handle {
    background: #c2cfd6!important;
    border-color: #c2cfd6
}

.switch-gray-300>.switch-input:checked~.switch-label {
    background: #a4b7c1!important;
    border-color: #869fac
}

.switch-gray-300>.switch-input:checked~.switch-handle {
    border-color: #869fac
}

.switch-gray-300-outline>.switch-input:checked~.switch-label {
    background: #fff!important;
    border-color: #a4b7c1
}

.switch-gray-300-outline>.switch-input:checked~.switch-label:after {
    color: #a4b7c1
}

.switch-gray-300-outline>.switch-input:checked~.switch-handle {
    border-color: #a4b7c1
}

.switch-gray-300-outline-alt>.switch-input:checked~.switch-label {
    background: #fff!important;
    border-color: #a4b7c1
}

.switch-gray-300-outline-alt>.switch-input:checked~.switch-label:after {
    color: #a4b7c1
}

.switch-gray-300-outline-alt>.switch-input:checked~.switch-handle {
    background: #a4b7c1!important;
    border-color: #a4b7c1
}

.switch-gray-400>.switch-input:checked~.switch-label {
    background: #869fac!important;
    border-color: #688797
}

.switch-gray-400>.switch-input:checked~.switch-handle {
    border-color: #688797
}

.switch-gray-400-outline>.switch-input:checked~.switch-label {
    background: #fff!important;
    border-color: #869fac
}

.switch-gray-400-outline>.switch-input:checked~.switch-label:after {
    color: #869fac
}

.switch-gray-400-outline>.switch-input:checked~.switch-handle {
    border-color: #869fac
}

.switch-gray-400-outline-alt>.switch-input:checked~.switch-label {
    background: #fff!important;
    border-color: #869fac
}

.switch-gray-400-outline-alt>.switch-input:checked~.switch-label:after {
    color: #869fac
}

.switch-gray-400-outline-alt>.switch-input:checked~.switch-handle {
    background: #869fac!important;
    border-color: #869fac
}

.switch-gray-500>.switch-input:checked~.switch-label {
    background: #678898!important;
    border-color: #526d7a
}

.switch-gray-500>.switch-input:checked~.switch-handle {
    border-color: #526d7a
}

.switch-gray-500-outline>.switch-input:checked~.switch-label {
    background: #fff!important;
    border-color: #678898
}

.switch-gray-500-outline>.switch-input:checked~.switch-label:after {
    color: #678898
}

.switch-gray-500-outline>.switch-input:checked~.switch-handle {
    border-color: #678898
}

.switch-gray-500-outline-alt>.switch-input:checked~.switch-label {
    background: #fff!important;
    border-color: #678898
}

.switch-gray-500-outline-alt>.switch-input:checked~.switch-label:after {
    color: #678898
}

.switch-gray-500-outline-alt>.switch-input:checked~.switch-handle {
    background: #678898!important;
    border-color: #678898
}

.switch-gray-600>.switch-input:checked~.switch-label {
    background: #536c79!important;
    border-color: #3e515b
}

.switch-gray-600>.switch-input:checked~.switch-handle {
    border-color: #3e515b
}

.switch-gray-600-outline>.switch-input:checked~.switch-label {
    background: #fff!important;
    border-color: #536c79
}

.switch-gray-600-outline>.switch-input:checked~.switch-label:after {
    color: #536c79
}

.switch-gray-600-outline>.switch-input:checked~.switch-handle {
    border-color: #536c79
}

.switch-gray-600-outline-alt>.switch-input:checked~.switch-label {
    background: #fff!important;
    border-color: #536c79
}

.switch-gray-600-outline-alt>.switch-input:checked~.switch-label:after {
    color: #536c79
}

.switch-gray-600-outline-alt>.switch-input:checked~.switch-handle {
    background: #536c79!important;
    border-color: #536c79
}

.switch-gray-700>.switch-input:checked~.switch-label {
    background: #3e515b!important;
    border-color: #29363d
}

.switch-gray-700>.switch-input:checked~.switch-handle {
    border-color: #29363d
}

.switch-gray-700-outline>.switch-input:checked~.switch-label {
    background: #fff!important;
    border-color: #3e515b
}

.switch-gray-700-outline>.switch-input:checked~.switch-label:after {
    color: #3e515b
}

.switch-gray-700-outline>.switch-input:checked~.switch-handle {
    border-color: #3e515b
}

.switch-gray-700-outline-alt>.switch-input:checked~.switch-label {
    background: #fff!important;
    border-color: #3e515b
}

.switch-gray-700-outline-alt>.switch-input:checked~.switch-label:after {
    color: #3e515b
}

.switch-gray-700-outline-alt>.switch-input:checked~.switch-handle {
    background: #3e515b!important;
    border-color: #3e515b
}

.switch-gray-800>.switch-input:checked~.switch-label {
    background: #29363d!important;
    border-color: #151b1f
}

.switch-gray-800>.switch-input:checked~.switch-handle {
    border-color: #151b1f
}

.switch-gray-800-outline>.switch-input:checked~.switch-label {
    background: #fff!important;
    border-color: #29363d
}

.switch-gray-800-outline>.switch-input:checked~.switch-label:after {
    color: #29363d
}

.switch-gray-800-outline>.switch-input:checked~.switch-handle {
    border-color: #29363d
}

.switch-gray-800-outline-alt>.switch-input:checked~.switch-label {
    background: #fff!important;
    border-color: #29363d
}

.switch-gray-800-outline-alt>.switch-input:checked~.switch-label:after {
    color: #29363d
}

.switch-gray-800-outline-alt>.switch-input:checked~.switch-handle {
    background: #29363d!important;
    border-color: #29363d
}

.switch-gray-900>.switch-input:checked~.switch-label {
    background: #151b1e!important;
    border-color: #000
}

.switch-gray-900>.switch-input:checked~.switch-handle {
    border-color: #000
}

.switch-gray-900-outline>.switch-input:checked~.switch-label {
    background: #fff!important;
    border-color: #151b1e
}

.switch-gray-900-outline>.switch-input:checked~.switch-label:after {
    color: #151b1e
}

.switch-gray-900-outline>.switch-input:checked~.switch-handle {
    border-color: #151b1e
}

.switch-gray-900-outline-alt>.switch-input:checked~.switch-label {
    background: #fff!important;
    border-color: #151b1e
}

.switch-gray-900-outline-alt>.switch-input:checked~.switch-label:after {
    color: #151b1e
}

.switch-gray-900-outline-alt>.switch-input:checked~.switch-handle {
    background: #151b1e!important;
    border-color: #151b1e
}

.table-outline {
    border: 1px solid #a4b7c1
}

.table-align-middle td,.table-outline td {
    vertical-align: middle
}

.table-clear td {
    border: 0
}

.social-box {
    min-height: 160px;
    margin-bottom: 1.5rem;
    text-align: center;
    background: #fff;
    border: 1px solid #c2cfd6
}

.social-box i {
    display: block;
    margin: -1px -1px 0;
    font-size: 40px;
    line-height: 90px;
    background: #c2cfd6
}

.social-box .chart-wrapper {
    height: 90px;
    margin: -90px 0 0
}

.social-box .chart-wrapper canvas {
    width: 100%!important;
    height: 90px!important
}

.social-box ul {
    padding: 10px 0;
    list-style: none
}

.social-box ul li {
    display: block;
    float: left;
    width: 50%
}

.social-box ul li:first-child {
    border-right: 1px solid #a4b7c1
}

.social-box ul li strong {
    display: block;
    font-size: 20px
}

.social-box ul li span {
    font-size: 10px;
    font-weight: 500;
    color: #a4b7c1;
    text-transform: uppercase
}

.social-box.facebook i {
    color: #fff;
    background: #3b5998
}

.social-box.twitter i {
    color: #fff;
    background: #00aced
}

.social-box.linkedin i {
    color: #fff;
    background: #4875b4
}

.social-box.google-plus i {
    color: #fff;
    background: #d34836
}

.horizontal-bars {
    padding: 0;
    margin: 0;
    list-style: none
}

.horizontal-bars li {
    position: relative;
    height: 40px;
    line-height: 40px;
    vertical-align: middle
}

.horizontal-bars li .title {
    width: 100px;
    font-size: 12px;
    font-weight: 600;
    color: #536c79;
    vertical-align: middle
}

.horizontal-bars li .bars {
    position: absolute;
    top: 15px;
    width: 100%;
    padding-left: 100px
}

.horizontal-bars li .bars .progress:first-child {
    margin-bottom: 2px
}

.horizontal-bars li.legend {
    text-align: center
}

.horizontal-bars li.legend .badge {
    display: inline-block;
    width: 8px;
    height: 8px;
    padding: 0
}

.horizontal-bars li.divider {
    height: 40px
}

.horizontal-bars li.divider i {
    margin: 0!important
}

.horizontal-bars.type-2 li {
    overflow: hidden
}

.horizontal-bars.type-2 li i {
    display: inline-block;
    margin-right: 1rem;
    margin-left: 5px;
    font-size: 18px;
    line-height: 40px
}

.horizontal-bars.type-2 li .title {
    display: inline-block;
    width: auto;
    margin-top: -9px;
    font-size: .875rem;
    font-weight: 400;
    line-height: 40px;
    color: #151b1e
}

.horizontal-bars.type-2 li .value {
    float: right;
    font-weight: 600
}

.horizontal-bars.type-2 li .bars {
    position: absolute;
    top: auto;
    bottom: 0;
    padding: 0
}

.icons-list {
    padding: 0;
    margin: 0;
    list-style: none
}

.icons-list li {
    position: relative;
    height: 40px;
    vertical-align: middle
}

.icons-list li i {
    display: block;
    float: left;
    width: 35px!important;
    height: 35px!important;
    margin: 2px;
    line-height: 35px!important;
    text-align: center
}

.icons-list li .desc {
    height: 40px;
    margin-left: 50px;
    border-bottom: 1px solid #a4b7c1
}

.icons-list li .desc .title {
    padding: 2px 0 0;
    margin: 0
}

.icons-list li .desc small {
    display: block;
    margin-top: -4px;
    color: #536c79
}

.icons-list li .value {
    position: absolute;
    top: 2px;
    right: 45px;
    text-align: right
}

.icons-list li .value strong {
    display: block;
    margin-top: -3px
}

.icons-list li .actions {
    position: absolute;
    top: -4px;
    right: 10px;
    width: 40px;
    height: 40px;
    line-height: 40px;
    text-align: center
}

.icons-list li .actions i {
    float: none;
    width: auto;
    height: auto;
    padding: 0;
    margin: 0;
    line-height: normal
}

.icons-list li.divider {
    height: 40px
}

.icons-list li.divider i {
    width: auto;
    height: auto;
    margin: 2px 0 0;
    font-size: 18px
}

@media(-ms-high-contrast:none) {
    html {
        display: flex;
        flex-direction: column
    }
}

.app,app-dashboard,app-root {
    display: flex;
    flex-direction: column;
    min-height: 100vh
}

.app-header {
    flex: 0 0 55px
}

.app-footer {
    flex: 0 0 50px
}

.app-body {
    display: flex;
    flex-direction: row;
    flex-grow: 1;
    overflow-x: hidden
}

.app-body .main {
    flex: 1;
    min-width: 0
}

.app-body .sidebar {
    flex: 0 0 200px;
    order: -1
}

.app-body .aside-menu {
    flex: 0 0 250px
}

.header-fixed .app-header {
    position: fixed;
    z-index: 1020;
    width: 100%
}

.header-fixed .app-body {
    margin-top: 55px
}

.sidebar-hidden .sidebar {
    margin-left: -200px
}

.sidebar-fixed .sidebar {
    position: fixed;
    z-index: 1019;
    width: 200px;
    height: calc(100vh - 55px)
}

.sidebar-fixed .app-footer,.sidebar-fixed .main {
    margin-left: 200px
}

.sidebar-fixed.sidebar-hidden .app-footer,.sidebar-fixed.sidebar-hidden .main {
    margin-left: 0
}

.sidebar-off-canvas .sidebar {
    position: fixed;
    z-index: 1019;
    height: calc(100vh - 55px)
}

@media(min-width: 992px) {
    .sidebar-compact .sidebar {
        flex:0 0 150px
    }

    .sidebar-compact.sidebar-hidden .sidebar {
        margin-left: -150px
    }

    .sidebar-compact.sidebar-fixed .app-footer,.sidebar-compact.sidebar-fixed .main {
        margin-left: 150px
    }

    .sidebar-compact.sidebar-fixed .sidebar {
        width: 150px
    }

    .sidebar-compact.sidebar-fixed.sidebar-hidden .app-footer,.sidebar-compact.sidebar-fixed.sidebar-hidden .main {
        margin-left: 0
    }

    .sidebar-compact .sidebar-minimizer {
        display: none
    }

    .sidebar-minimized .sidebar {
        flex: 0 0 50px
    }

    .sidebar-minimized.sidebar-hidden .sidebar {
        margin-left: -50px
    }

    .sidebar-minimized.sidebar-fixed .app-footer,.sidebar-minimized.sidebar-fixed .main {
        margin-left: 50px
    }

    .sidebar-minimized.sidebar-fixed .sidebar {
        width: 50px
    }

    .sidebar-minimized.sidebar-fixed.sidebar-hidden .app-footer,.sidebar-minimized.sidebar-fixed.sidebar-hidden .main {
        margin-left: 0
    }
}

.aside-menu-hidden .aside-menu {
    margin-right: -250px
}

.aside-menu-fixed .aside-menu {
    position: fixed;
    right: 0;
    height: 100%
}

.aside-menu-fixed .aside-menu .tab-content {
    height: calc(100vh - 2.375rem - 55px)
}

.aside-menu-fixed .app-footer,.aside-menu-fixed .main {
    margin-right: 250px
}

.aside-menu-fixed.aside-menu-hidden .app-footer,.aside-menu-fixed.aside-menu-hidden .main {
    margin-right: 0
}

.aside-menu-off-canvas .aside-menu {
    position: fixed;
    right: 0;
    z-index: 1019;
    height: 100%
}

.aside-menu-off-canvas .aside-menu .tab-content {
    height: calc(100vh - 2.375rem - 55px)
}

.breadcrumb-fixed .main {
    padding-top: 3.875rem
}

.breadcrumb-fixed .breadcrumb {
    position: fixed;
    top: 55px;
    right: 0;
    left: 0;
    z-index: 1018
}

.breadcrumb-fixed .main:nth-child(2) .breadcrumb {
    right: 250px;
    left: 200px
}

.breadcrumb-fixed .main:first-child .breadcrumb {
    right: 250px;
    left: 0
}

.breadcrumb-fixed .main:last-child .breadcrumb {
    right: 0
}

.breadcrumb-fixed.sidebar-minimized .main .breadcrumb {
    left: 50px
}

.breadcrumb-fixed.sidebar-hidden .main .breadcrumb,.breadcrumb-fixed.sidebar-off-canvas .main .breadcrumb {
    left: 0
}

.breadcrumb-fixed.aside-menu-hidden .main .breadcrumb,.breadcrumb-fixed.aside-menu-off-canvas .main .breadcrumb {
    right: 0
}

.footer-fixed .app-footer {
    position: fixed;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1020;
    height: 50px
}

.footer-fixed .app-body {
    margin-bottom: 50px
}

.app-footer,.app-header,.aside-menu,.main,.sidebar {
    transition: margin-left .25s,margin-right .25s,width .25s,flex .25s
}

.sidebar-nav {
    transition: width .25s
}

.breadcrumb {
    transition: left .25s,right .25s,width .25s
}

@media(max-width: 991.98px) {
    .app-header.navbar {
        position:fixed!important;
        z-index: 1020;
        width: 100%;
        text-align: center;
        background-color: #fff;
        border-bottom: 1px solid #a4b7c1
    }

    .app-header.navbar .navbar-toggler {
        color: #536c79
    }

    .app-header.navbar .navbar-brand {
        position: absolute;
        left: 50%;
        margin-left: -77.5px
    }

    .app-body {
        margin-top: 55px
    }

    .breadcrumb-fixed .main:nth-child(2) .breadcrumb {
        right: auto;
        left: auto;
        width: 100%
    }

    .sidebar {
        position: fixed;
        z-index: 1019;
        width: 220px;
        height: calc(100vh - 55px);
        margin-left: -220px
    }

    .sidebar .nav,.sidebar .sidebar-nav {
        width: 220px;
        min-height: calc(100vh - 55px)
    }

    .sidebar .sidebar-minimizer {
        display: none
    }

    .app-footer,.main {
        margin-left: 0!important
    }

    .sidebar-hidden .sidebar {
        margin-left: -220px
    }

    .sidebar-mobile-show .sidebar {
        width: 220px;
        margin-left: 0
    }

    .sidebar-mobile-show .main {
        margin-right: -220px!important;
        margin-left: 220px!important
    }
}

hr.transparent {
    border-top: 1px solid transparent
}

.bg-danger,.bg-info,.bg-inverse,.bg-primary,.bg-success,.bg-warning {
    color: #fff
}

.b-a-0 {
    border: 0!important
}

.b-t-0 {
    border-top: 0!important
}

.b-r-0 {
    border-right: 0!important
}

.b-b-0 {
    border-bottom: 0!important
}

.b-l-0 {
    border-left: 0!important
}

.b-a-1 {
    border: 1px solid #a4b7c1!important
}

.b-t-1 {
    border-top: 1px solid #a4b7c1!important
}

.b-r-1 {
    border-right: 1px solid #a4b7c1!important
}

.b-b-1 {
    border-bottom: 1px solid #a4b7c1!important
}

.b-l-1 {
    border-left: 1px solid #a4b7c1!important
}

.b-a-2 {
    border: 2px solid #a4b7c1!important
}

.b-t-2 {
    border-top: 2px solid #a4b7c1!important
}

.b-r-2 {
    border-right: 2px solid #a4b7c1!important
}

.b-b-2 {
    border-bottom: 2px solid #a4b7c1!important
}

.b-l-2 {
    border-left: 2px solid #a4b7c1!important
}

@media(max-width: 575.98px) {
    .d-down-none {
        display:none!important
    }
}

@media(max-width: 767.98px) {
    .d-sm-down-none {
        display:none!important
    }
}

@media(max-width: 991.98px) {
    .d-md-down-none {
        display:none!important
    }
}

@media(max-width: 1199.98px) {
    .d-lg-down-none {
        display:none!important
    }
}

.d-xl-down-none {
    display: none!important
}

.label-pill {
    border-radius: 1rem!important
}

.open>a,.show>a {
    outline: 0
}

.navbar .dropdown-toggle .img-avatar {
    height: 35px;
    margin: 0 10px
}

[dir=rtl] {
    direction: rtl;
    unicode-bidi: embed
}

[dir=rtl] ul {
    -webkit-padding-start: 0
}

[dir=rtl] table tr th {
    text-align: right
}

[dir=rtl] .breadcrumb-item {
    float: right
}

[dir=rtl] .breadcrumb-menu {
    right: auto;
    left: 1rem
}

[dir=rtl] .dropdown-item {
    text-align: right
}

[dir=rtl] .dropdown-item i {
    margin-right: -10px;
    margin-left: 10px
}

[dir=rtl] .dropdown-item .badge {
    right: auto;
    left: 10px
}

[dir=rtl] .sidebar-hidden .sidebar {
    margin-right: -200px
}

[dir=rtl] .sidebar-fixed .app-footer,[dir=rtl] .sidebar-fixed .main {
    margin-right: 200px
}

[dir=rtl] .sidebar-fixed.sidebar-hidden .app-footer,[dir=rtl] .sidebar-fixed.sidebar-hidden .main {
    margin-right: 0
}

[dir=rtl] .sidebar-minimized .sidebar {
    flex: 0 0 50px
}

[dir=rtl] .sidebar-minimized.sidebar-hidden .sidebar {
    margin-right: -50px;
    margin-left: 0
}

[dir=rtl] .sidebar-minimized.sidebar-fixed .app-footer,[dir=rtl] .sidebar-minimized.sidebar-fixed .main {
    margin-right: 50px
}

[dir=rtl] .sidebar-minimized.sidebar-fixed.sidebar-hidden .app-footer,[dir=rtl] .sidebar-minimized.sidebar-fixed.sidebar-hidden .main {
    margin-left: 0
}

[dir=rtl] .aside-menu-hidden .aside-menu {
    margin-right: 0;
    margin-left: -250px
}

[dir=rtl] .aside-menu-fixed .aside-menu {
    right: auto;
    left: 0
}

[dir=rtl] .aside-menu-fixed .app-footer,[dir=rtl] .aside-menu-fixed .main {
    margin-left: 250px
}

[dir=rtl] .aside-menu-fixed.aside-menu-hidden .app-footer,[dir=rtl] .aside-menu-fixed.aside-menu-hidden .main {
    margin-left: 0
}

[dir=rtl] .aside-menu-off-canvas .aside-menu {
    position: fixed;
    right: 0;
    z-index: 1019;
    height: 100%
}

[dir=rtl] .aside-menu-off-canvas .aside-menu .tab-content {
    height: calc(100vh - 2.375rem - 55px)
}

.navbar [dir=rtl] .sidebar .sidebar-nav .nav .nav-item .dropdown-toggle,[dir=rtl] .sidebar .sidebar-nav .nav .nav-item .nav-link,[dir=rtl] .sidebar .sidebar-nav .nav .nav-item .navbar .dropdown-toggle {
    direction: rtl
}

.navbar [dir=rtl] .sidebar .sidebar-nav .nav .nav-item .dropdown-toggle i,[dir=rtl] .sidebar .sidebar-nav .nav .nav-item .nav-link i,[dir=rtl] .sidebar .sidebar-nav .nav .nav-item .navbar .dropdown-toggle i {
    margin: 0 0 0 .5rem
}

.navbar [dir=rtl] .sidebar .sidebar-nav .nav .nav-item .dropdown-toggle .badge,[dir=rtl] .sidebar .sidebar-nav .nav .nav-item .nav-link .badge,[dir=rtl] .sidebar .sidebar-nav .nav .nav-item .navbar .dropdown-toggle .badge {
    float: left;
    margin-top: 2px
}

.navbar [dir=rtl] .sidebar .sidebar-nav .nav .nav-item .nav-dropdown-toggle.dropdown-toggle:before,[dir=rtl] .sidebar .sidebar-nav .nav .nav-item .nav-link.nav-dropdown-toggle:before,[dir=rtl] .sidebar .sidebar-nav .nav .nav-item .navbar .nav-dropdown-toggle.dropdown-toggle:before {
    position: absolute;
    right: auto!important;
    left: 1rem;
    transform: rotate(180deg)
}

.navbar [dir=rtl] .sidebar .sidebar-nav .nav .nav-item.nav-dropdown.open>.nav-dropdown-toggle.dropdown-toggle:before,[dir=rtl] .sidebar .sidebar-nav .nav .nav-item.nav-dropdown.open>.nav-link.nav-dropdown-toggle:before,[dir=rtl] .sidebar .sidebar-nav .nav .navbar .nav-item.nav-dropdown.open>.nav-dropdown-toggle.dropdown-toggle:before {
    transform: rotate(270deg)
}

.navbar [dir=rtl] .sidebar-minimized .sidebar .dropdown-toggle,[dir=rtl] .sidebar-minimized .sidebar .nav-link,[dir=rtl] .sidebar-minimized .sidebar .navbar .dropdown-toggle {
    padding-right: 0
}

.navbar [dir=rtl] .sidebar-minimized .sidebar .dropdown-toggle i,[dir=rtl] .sidebar-minimized .sidebar .nav-link i,[dir=rtl] .sidebar-minimized .sidebar .navbar .dropdown-toggle i {
    float: right;
    padding: 0;
    margin: 0
}

.navbar [dir=rtl] .sidebar-minimized .sidebar .dropdown-toggle .badge,[dir=rtl] .sidebar-minimized .sidebar .nav-link .badge,[dir=rtl] .sidebar-minimized .sidebar .navbar .dropdown-toggle .badge {
    right: auto;
    left: 15px
}

[dir=rtl] .sidebar-minimized .sidebar .nav>.nav-dropdown:hover>.nav-dropdown-items {
    right: 50px;
    left: 0
}

[dir=rtl] .horizontal-bars li .bars {
    padding-right: 100px;
    padding-left: 0
}

[dir=rtl] .horizontal-bars li .bars .progress:first-child {
    margin-bottom: 2px
}

[dir=rtl] .horizontal-bars.type-2 li i {
    margin-right: 5px;
    margin-left: 1rem
}

[dir=rtl] .horizontal-bars.type-2 li .value {
    float: left;
    font-weight: 600
}

[dir=rtl] .horizontal-bars.type-2 li .bars {
    padding: 0
}

[dir=rtl] .icons-list li {
    position: relative;
    height: 40px;
    vertical-align: middle
}

[dir=rtl] .icons-list li i {
    float: right
}

[dir=rtl] .icons-list li .desc {
    margin-right: 50px;
    margin-left: 0
}

[dir=rtl] .icons-list li .value {
    right: auto;
    left: 45px;
    text-align: left
}

[dir=rtl] .icons-list li .value strong {
    display: block;
    margin-top: -3px
}

[dir=rtl] .icons-list li .actions {
    right: auto;
    left: 10px
}

[dir=rtl] .callout {
    border: 0;
    border-right-width: .25rem
}

[dir=rtl] .callout.callout-primary {
    border-right-color: #20a8d8
}

[dir=rtl] .callout.callout-secondary {
    border-right-color: #a4b7c1
}

[dir=rtl] .callout.callout-success {
    border-right-color: #4dbd74
}

[dir=rtl] .callout.callout-info {
    border-right-color: #63c2de
}

[dir=rtl] .callout.callout-warning {
    border-right-color: #ffc107
}

[dir=rtl] .callout.callout-danger {
    border-right-color: #f86c6b
}

[dir=rtl] .callout.callout-light {
    border-right-color: #f0f3f5
}

[dir=rtl] .callout.callout-dark {
    border-right-color: #29363d
}

[dir=rtl] .callout.callout-blue {
    border-right-color: #20a8d8
}

[dir=rtl] .callout.callout-indigo {
    border-right-color: #6610f2
}

[dir=rtl] .callout.callout-purple {
    border-right-color: #6f42c1
}

[dir=rtl] .callout.callout-pink {
    border-right-color: #e83e8c
}

[dir=rtl] .callout.callout-red {
    border-right-color: #f86c6b
}

[dir=rtl] .callout.callout-orange {
    border-right-color: #f8cb00
}

[dir=rtl] .callout.callout-#ff0 {
    border-right-color: #ffc107
}

[dir=rtl] .callout.callout-green {
    border-right-color: #4dbd74
}

[dir=rtl] .callout.callout-teal {
    border-right-color: #20c997
}

[dir=rtl] .callout.callout-cyan {
    border-right-color: #63c2de
}

[dir=rtl] .callout.callout-gray-100 {
    border-right-color: #f0f3f5
}

[dir=rtl] .callout.callout-gray-200 {
    border-right-color: #c2cfd6
}

[dir=rtl] .callout.callout-gray-300 {
    border-right-color: #a4b7c1
}

[dir=rtl] .callout.callout-gray-400 {
    border-right-color: #869fac
}

[dir=rtl] .callout.callout-gray-500 {
    border-right-color: #678898
}

[dir=rtl] .callout.callout-gray-600 {
    border-right-color: #536c79
}

[dir=rtl] .callout.callout-gray-700 {
    border-right-color: #3e515b
}

[dir=rtl] .callout.callout-gray-800 {
    border-right-color: #29363d
}

[dir=rtl] .callout.callout-gray-900 {
    border-right-color: #151b1e
}

[dir=rtl] .callout .chart-wrapper {
    left: 0;
    float: left
}

[dir=rtl] .callout-default {
    border-right-color: #536c79
}

.app-header .navbar-nav .dropdown-menu-right {
    right: auto
}
`;
if (module.hot && typeof module.hot.dispose === 'function') {
  module.hot.dispose(function() {
    uninject();
  });
}
ReactDOM.render(
  <div>
    <style>`${str}`</style>
    <Home />
  </div>,
  document.getElementById('react')
);
