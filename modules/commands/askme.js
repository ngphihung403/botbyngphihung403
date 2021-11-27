module.exports.config = {
	name: "askme",
	version: "1.1.2",
	hasPermssion: 0,
	credits: "HelyT",
	description: "Help giống Spermbot :3",
	commandCategory: "group",
	usages: "[lệnh]",
	cooldowns: 1,
};
module.exports.handleEvent = function ({ api, event }) {
	const { commands } = global.client;
	
	if (!event.body) return;

	const { threadID, messageID, body } = event;

	if (body.indexOf("askme") != 0) return;

	const splitBody = body.slice(body.indexOf("askme")).trim().split(/\s+/);


	if (splitBody.length == 1 || !commands.has(splitBody[1].toLowerCase())) return;

	const threadSetting = global.data.threadData.get(parseInt(threadID)) || {};
	const command = commands.get(splitBody[1].toLowerCase());

	const prefix = (threadSetting.hasOwnProperty("PREFIX")) ? threadSetting.PREFIX : global.config.PREFIX;

	return api.sendMessage(`⚔️ ${command.config.name} ⚔️\n${command.config.description}\n\n❯ Cách sử dụng: ${prefix}${command.config.name} ${(command.config.usages) ? command.config.usages : ""}\n❯ Thuộc nhóm: ${command.config.commandCategory}\n❯ Thời gian chờ: ${command.config.cooldowns} giây(s)\n❯ Quyền hạn: ${((command.config.hasPermssion == 0) ? "Người dùng" : (command.config.hasPermssion == 1) ? "Quản trị viên" : "Người vận hành bot" )}\n❯ Prefix: ${prefix}\n\n» Module code by ${command.config.credits} «`, threadID, messageID);
};

module.exports.run = async function({ api, args, Users, event, Threads, utils, client }) {
const { commands } = global.client;
const { threadID, messageID } = event;
const command = commands.get((args[0] || "").toLowerCase());
const threadSetting = global.data.threadData.get(parseInt(threadID)) || {};
if (!command) {
const command = commands.values();
var tl = ["ngừoi điều hành bot là Nguyễn Phi Hùng:>","bot cute hơn bạn:3","bạn bị thiew năqq","Hùng không trap UwU","nếu bạn sợ mă thì bạn có thể khắc phục bằng cách qua nfhur với Hùng chỉ các chị độc thân💔","Hùng không cài spam sẽ bị ban nhưng nếu sài bot thì đừng spam quá nhanh nhé 🥺","Hùng sinh năm  2007🐳","ngày 6 tháng 12 là ngày sinh nhật Hùng owo","bot muốn 💍bạn","tôi yêu bạn vai lon","Hùng học tệ vcl🥲","học không bao giờ thừa","bạn cute lắm😉","1 điếu thuốc lấy đi 5,5 phút tuổi thọ của bạn","adbot tên đầy đủ là Nguyễn Phi Hùng 🤔","bot là vợ bé của Hùng","Hùng gầy vcl💔","bot cute đạt cấp siêu vũ trụ ắ","bot yêu bạn nắm.","chưa ai nắm tay Hùng💔.","228922 là một con số tuyệt vời.","Đây là một lệnh vô dụng","Hùng cũng thiew năq","ngày 19 tháng 5 là sinh nhật Chủ Tịch Hồ Chí Mạng","ngôn ngữ của Hùng là ngôn ngữ thew năq","Hùng nhiều vợ nhưng rất tốt💔","bot thew năq giúng admin","giường adbot còn chỗ trống nè","bạn bị khùm"];
var tle = tl[Math.floor(Math.random() * tl.length)];
var lon = `[Bạn có biết?]: ${tle}.`;
return api.sendMessage(lon, event.threadID, event.messageID);
}
const prefix = (threadSetting.hasOwnProperty("PREFIX")) ? threadSetting.PREFIX : global.config.PREFIX;
return api.sendMessage(`⚔️ ${command.config.name} ⚔️\n${command.config.description}\n\n❯ Cách sử dụng: ${prefix}${command.config.name} ${(command.config.usages) ? command.config.usages : ""}\n❯ Thuộc nhóm: ${command.config.commandCategory}\n❯ Thời gian chờ: ${command.config.cooldowns} giây(s)\n❯ Quyền hạn: ${((command.config.hasPermssion == 0) ? "Người dùng" : (command.config.hasPermssion == 1) ? "Quản trị viên" : "Người vận hành bot" )}\n❯ Prefix: ${prefix}\n\n» Module code by ${command.config.credits} «`, threadID, messageID);
};