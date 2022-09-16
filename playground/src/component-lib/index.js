/* eslint-disable */
import React from 'react';
import styled from 'styled-components';
import { html, css, property, customElement, LitElement } from 'lit-element';

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
}

var theme = {
    colors: {
        primary: "#E51C44",
        background: "#191929",
        black: "#000000",
        heading: "#FFF",
        green: "#32BD50",
        label: "#333",
        text: "#363843",
        gray: "#787898",
        gray800: "#E3E3E8",
        gray300: "#646981",
        input: "#f5f5f5",
        blue: "#66A9FF",
        secondary: "#ff9000",
        secondaryHover: "#f1972c",
    },
};

var Container$2 = styled.button(templateObject_1$5 || (templateObject_1$5 = __makeTemplateObject(["\n  display: flex;\n  justify-content: center;\n  background: ", ";\n  color: ", ";  \n  height: 54px;\n  font-weight: bold;\n  font-size: 1rem;\n  width: 100%;\n  align-items: center;\n  text-align: center;\n  padding: 8px;\n  border-radius: 4px;\n  border: none;\n  &:hover {\n    filter: brightness(0.9);\n  }\n"], ["\n  display: flex;\n  justify-content: center;\n  background: ", ";\n  color: ", ";  \n  height: 54px;\n  font-weight: bold;\n  font-size: 1rem;\n  width: 100%;\n  align-items: center;\n  text-align: center;\n  padding: 8px;\n  border-radius: 4px;\n  border: none;\n  &:hover {\n    filter: brightness(0.9);\n  }\n"])), theme.colors.blue, theme.colors.heading);
var templateObject_1$5;

var Button = function (_a) {
    var children = _a.children; _a.type; var onClick = _a.onClick, rest = __rest(_a, ["children", "type", "onClick"]);
    return (React.createElement(Container$2, __assign({ onClick: onClick }, rest), children));
};

var Container$1 = styled.footer(templateObject_1$4 || (templateObject_1$4 = __makeTemplateObject(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 50px;\n  padding: 40px 0px;\n  background-color: ", ";\n  strong {\n    color: ", ";\n  }\n"], ["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 50px;\n  padding: 40px 0px;\n  background-color: ", ";\n  strong {\n    color: ", ";\n  }\n"])), theme.colors.secondary, theme.colors.heading);
var templateObject_1$4;

function Footer() {
    return (React.createElement(Container$1, null,
        React.createElement("strong", null, "app developed with \uD83E\uDDE1 by @RafaelRufino")));
}

var handleTextAlign = function (_a) {
    var textAlign = _a.textAlign;
    switch (textAlign) {
        case 'right':
            return 'right';
        case 'left':
            return 'left';
        default:
            return 'center';
    }
};
var Wrapper = styled.div(templateObject_1$3 || (templateObject_1$3 = __makeTemplateObject(["\n  position: relative;\n  width: 100%;\n  text-align: ", ";\n"], ["\n  position: relative;\n  width: 100%;\n  text-align: ", ";\n"])), handleTextAlign);
var Title = styled.h1(templateObject_2$3 || (templateObject_2$3 = __makeTemplateObject(["\n  color: ", ";\n  font-weight: 700;\n  font-size: ", ";\n  line-height: 120%;\n"], ["\n  color: ", ";\n  font-weight: 700;\n  font-size: ", ";\n  line-height: 120%;\n"])), theme.colors.text, function (_a) {
    var fontSize = _a.fontSize;
    return fontSize || '1.5rem';
});
var Description = styled.p(templateObject_3$1 || (templateObject_3$1 = __makeTemplateObject(["\n  font-size: 1rem;\n  line-height: 120%;\n  color: ", ";\n"], ["\n  font-size: 1rem;\n  line-height: 120%;\n  color: ", ";\n"])), theme.colors.gray300);
var templateObject_1$3, templateObject_2$3, templateObject_3$1;

var Heading = function (_a) {
    var children = _a.children, fontSize = _a.fontSize, textAlign = _a.textAlign, description = _a.description;
    return (React.createElement(Wrapper, { textAlign: textAlign },
        React.createElement(Title, { fontSize: fontSize }, children),
        description && React.createElement(Description, null, description)));
};

var Container = styled.div(templateObject_1$2 || (templateObject_1$2 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  input {\n    border: none;\n    color: ", ";\n    background-color: ", ";\n    border: 1px solid ", ";\n    border-radius: 4px;\n    height: 54px;\n    padding-left: 10px;\n    margin-top: 4px;\n    ::placeholder {\n      color: ", ";\n      font-size: 0.8rem;\n      text-transform: none;\n    }\n  }\n"], ["\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  input {\n    border: none;\n    color: ", ";\n    background-color: ", ";\n    border: 1px solid ", ";\n    border-radius: 4px;\n    height: 54px;\n    padding-left: 10px;\n    margin-top: 4px;\n    ::placeholder {\n      color: ", ";\n      font-size: 0.8rem;\n      text-transform: none;\n    }\n  }\n"])), theme.colors.black, theme.colors.input, theme.colors.gray800, theme.colors.text);
var Label = styled.label(templateObject_2$2 || (templateObject_2$2 = __makeTemplateObject(["\n  font-size: 1rem;\n  color: ", ";\n  padding-top: 10px;\n"], ["\n  font-size: 1rem;\n  color: ", ";\n  padding-top: 10px;\n"])), theme.colors.text);
var templateObject_1$2, templateObject_2$2;

var Input = function (_a) {
    var id = _a.id, placeholder = _a.placeholder, type = _a.type, value = _a.value, onChange = _a.onChange, label = _a.label, rest = __rest(_a, ["id", "placeholder", "type", "value", "onChange", "label"]);
    return (React.createElement(Container, __assign({}, rest),
        label && React.createElement(Label, { htmlFor: id }, label),
        React.createElement("input", { id: id, type: type, placeholder: placeholder, value: value, onChange: onChange })));
};

var CheckText = /** @class */ (function (_super) {
    __extends(CheckText, _super);
    function CheckText() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CheckText.prototype.render = function () {
        return html(templateObject_1$1 || (templateObject_1$1 = __makeTemplateObject(["\n      <div>\n        <input type=\"checkbox\" id=", " value=", "/>\n        <label class=\"text\" id=", ">", "</label>\n      </div>\n    "], ["\n      <div>\n        <input type=\"checkbox\" id=", " value=", "/>\n        <label class=\"text\" id=", ">", "</label>\n      </div>\n    "])), this.id, this.value, this.id, this.name);
    };
    CheckText.styles = [
        css(templateObject_2$1 || (templateObject_2$1 = __makeTemplateObject(["\n      div {\n        display: flex;\n        justify-content: left;\n        align-items: left;\n        padding-top:25px;\n        padding-bottom: 34px;\n      }\n      .text {\n        font-size: 1rem;\n        line-height: 120%;\n        color:#4D5163;\n        padding-left: 16px;\n\n      }\n    "], ["\n      div {\n        display: flex;\n        justify-content: left;\n        align-items: left;\n        padding-top:25px;\n        padding-bottom: 34px;\n      }\n      .text {\n        font-size: 1rem;\n        line-height: 120%;\n        color:#4D5163;\n        padding-left: 16px;\n\n      }\n    "]))),
    ];
    __decorate([
        property()
    ], CheckText.prototype, "id", void 0);
    __decorate([
        property()
    ], CheckText.prototype, "name", void 0);
    __decorate([
        property()
    ], CheckText.prototype, "value", void 0);
    CheckText = __decorate([
        customElement('checktext-app')
    ], CheckText);
    return CheckText;
}(LitElement));
var templateObject_1$1, templateObject_2$1;

var Heading2 = /** @class */ (function (_super) {
    __extends(Heading2, _super);
    function Heading2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Heading2.prototype.render = function () {
        return html(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n      <div>\n        <h1 class=\"title\">", "</h1>\n        <p class=\"description\"> ", " </p>\n      </div>\n    "], ["\n      <div>\n        <h1 class=\"title\">", "</h1>\n        <p class=\"description\"> ", " </p>\n      </div>\n    "])), this.title, this.description ? html(templateObject_1 || (templateObject_1 = __makeTemplateObject(["", ""], ["", ""])), this.description) : '');
    };
    Heading2.styles = [
        css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n      div {\n        position: relative;\n        width: 100%;\n        text-align: center;\n      }\n      .description {\n        font-size: 1rem;\n        line-height: 120%;\n        color: #646981;\n      }\n      .title {\n        color: #363843;\n        font-weight: 700;\n        font-size: 1.5rem;\n        line-height: 120%;\n      }\n    "], ["\n      div {\n        position: relative;\n        width: 100%;\n        text-align: center;\n      }\n      .description {\n        font-size: 1rem;\n        line-height: 120%;\n        color: #646981;\n      }\n      .title {\n        color: #363843;\n        font-weight: 700;\n        font-size: 1.5rem;\n        line-height: 120%;\n      }\n    "]))),
    ];
    __decorate([
        property()
    ], Heading2.prototype, "title", void 0);
    __decorate([
        property()
    ], Heading2.prototype, "description", void 0);
    Heading2 = __decorate([
        customElement('heading2-app')
    ], Heading2);
    return Heading2;
}(LitElement));
var templateObject_1, templateObject_2, templateObject_3;

export { Button, CheckText, Footer, Heading, Heading2, Input, theme };
