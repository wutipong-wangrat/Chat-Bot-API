const config = require('../config/line')

exports.handleMessage = (event) => {
    let msg
    let msgText = event.message.text.toLowerCase().trim()
    if (msgText === "ไอ้โอม") {
        msg = { type: "text", text: "โอมมันไม่รู้เรื่องอะไรหรอก" }
    } else if (msgText === "เพชร") {
        msg = { type: "text", text: "เพชรขาใหญ่" }
    } else if (msgText === "กางอาณาเขต") {
        msg = { type: "text", text: "ห้ามเถียง!!" }
    } else if (msgText === "2") {
        msg = {
            "type": "sticker",
            "packageId": "6325",
            "stickerId": "10979906"
        }
    } else {
        msg = { type: "text", text: "สวัสดี กรุณาพิมพ์ข้อความอีกครั้ง" }
    }
    return config.client.replyMessage(event.replyToken, msg)
}