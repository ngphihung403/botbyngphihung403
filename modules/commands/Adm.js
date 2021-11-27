/** Mod lại module "bot.js" nếu muốn nó hiển thị ảnh **/
/** Đổi Credit ? Bọn t đã không mã hóa cho mà edit rồi thì tôn trọng nhau tý đi ¯\_(ツ)_/¯ **/
module.exports.config = {
	name: "adm",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "HChong",
	description: "Thông tin người điều hành bot",
	commandCategory: "info",
	cooldowns: 1
};

module.exports.run = ({ event, api }) => api.sendMessage(`Thông tin người điều hành bot:
Facebook: NgPhi Hùng ( ngphihung403 )
ngyeu: rất nhiều🐳
UID: ngphihung403
Giới tính: Trai🚬
Mối quan hệ: yêu nhiều em🚬
Link Facebook: facebook.com/ngphihung403 `, event.threadID, event.messageID);