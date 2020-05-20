"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendVerificationEmail = void 0;
var mailgun_js_1 = __importDefault(require("mailgun-js"));
var mailGunClient = new mailgun_js_1.default({
    apiKey: process.env.MAILGUN_API_KEY || "",
    domain: "sandbox6dc95a40763144f59f34911bf0fb8eaf.mailgun.org"
});
var sendEmail = function (subject, html) {
    var emailData = {
        from: "itnico.las.me@gmail.com",
        to: "itnico.las.me@gmail.com",
        subject: subject,
        html: html
    };
    return mailGunClient.messages().send(emailData);
};
exports.sendVerificationEmail = function (fullName, key) {
    var emailSubject = "Hello! " + fullName + ", please verify your email";
    var emailBody = "Verify your email by clicking <a href=\"http://nuber.com/verification/" + key + "/\">here</a>";
    return sendEmail(emailSubject, emailBody);
};
//# sourceMappingURL=sendEmail.js.map