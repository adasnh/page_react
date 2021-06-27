"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
exports.Profile = void 0;
var react_redux_1 = require("react-redux");
var styled_components_1 = require("styled-components");
var Colors_1 = require("../../styledHelpers/Colors");
var Action_1 = require("./Action");
var BasicData_1 = require("../../component/Profile/BasicData");
var PanelInformations_1 = require("../../component/Profile/PanelInformations");
var Proposals_1 = require("../../component/Profile/Proposals");
var InternalReviews_1 = require("../../component/Profile/InternalReviews");
var AmountOfFees_1 = require("../../component/Profile/AmountOfFees");
var ProfileContainer = styled_components_1["default"].main(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  padding: 0 20px;\n  background-color: ", ";\n"], ["\n  padding: 0 20px;\n  background-color: ", ";\n"])), Colors_1.Colors.white);
exports.Profile = function () {
    var usersList = react_redux_1.useSelector(function (state) { return (__assign({}, state.users)); }).usersList;
    var photoList = react_redux_1.useSelector(function (state) { return (__assign({}, state.photo)); }).photoList;
    return (React.createElement(ProfileContainer, null,
        React.createElement(Action_1["default"], null),
        React.createElement(BasicData_1["default"], null),
        React.createElement(SkillsAndInformation, null),
        React.createElement(PanelInformations_1["default"], null),
        React.createElement(Proposals_1["default"], null),
        React.createElement(InternalReviews_1["default"], null),
        React.createElement(AmountOfFees_1["default"], null)));
};
exports["default"] = exports.Profile;
var templateObject_1;
