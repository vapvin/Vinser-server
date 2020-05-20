"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendVerificationSMS = void 0;
var twilio_1 = __importDefault(require("twilio"));
var twilioClient = twilio_1.default(process.env.TWILIO_SID, process.env.TWILIO_TOKEN);
var sendSMS = function (to, body) {
    return twilioClient.messages.create({
        body: body,
        to: to,
        from: process.env.TWILIO_PHONE
    });
};
exports.sendVerificationSMS = function (to, key) {
    return sendSMS(to, "Your verification key is: " + key);
};
//# sourceMappingURL=sendSMS.js.map