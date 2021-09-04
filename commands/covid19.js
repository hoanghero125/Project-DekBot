const util = require('novelcovid');
const util = require('request');
const util = require('cheerio');
name: 'corona',
    aliases: ['covid'],
    cooldown: 0,
    description: 'Covid-19 Info',
    async execute(message, args, cmd, client, Discord){
        if(cmd === 'corona'){
            
try {
    	return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
	} catch (ex) {
		data.return({
			handler: "internal",
			data: "Can not find data, please write the correct country name!"
		});
	}
}
function getDateTime() {

    var date = new Date();

    var hour = date.getHours();
    hour = (hour < 10 ? "0" : "") + hour;
    var min  = date.getMinutes();
    min = (min < 10 ? "0" : "") + min;

    var sec  = date.getSeconds();
    sec = (sec < 10 ? "0" : "") + sec;

    var year = date.getFullYear();

    var month = date.getMonth() + 1;
    month = (month < 10 ? "0" : "") + month;

    var day  = date.getDate();
    day = (day < 10 ? "0" : "") + day;
    if (hour < 12) {
    	hour = hour + ":" + min + ":" + sec + " PM";
    } else {
    	hour = hour + ":" + min + ":" + sec + " AM";
    }
    return hour

}
function khongbiet(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
var vnexpress = function(type, data) {
	try {
		data.return({
			handler: "internal-raw",
			data: "⏳ Retrieving data, please wait ...."
		});
		var chovui = request.get('https://vnexpress.net/tin-tuc-24h', (error, response, html) => {
			if (!error && response.statusCode == 200) {
				var $ = cheerio.load(html);
				var thoigian = $('.time-count');
				var tieude = $('.thumb-art');
				var noidung = $('.description');
				var time = thoigian.find('span').attr('datetime');
				var title = tieude.find('a').attr('title');
				var des = noidung.find('a').text();
				var link = noidung.find('a').attr('href');
				var description = des.split('.');
				data.log('Done!')
				data.return({
					handler: "internal",
					data: `Tin tức 24h - Mới nhất\r\n\nThời gian đăng: ${time}\r\nTiêu đề: ${title}\r\n\nNội dung: ${description[0]}\r\nLiên kết: ${link}\r\n\n`
				});
			}
		});
	} catch(ex) {
		return {
			handler: "internal",
			data: "Lỗi!"
		}
	}
}
var covidget = function(type, data) {
	var country = data.args.slice(1).join(" ")
	data.return({
		handler: "internal",
		data: "⏳ Retrieving data, please wait ...."
	});
	try {
		if(country == '') {
			api.all().then(x => {
				var time = getDateTime();
				var casez = `Infected: ${formatNumber(x.cases)} \n(+${formatNumber(x.todayCases)})\r`;
				var death = `Dead: ${formatNumber(x.deaths)} \n(+${formatNumber(x.todayDeaths)})\r`;
				var recoverd = `Recuperate: ${formatNumber(x.recovered)} \n(+${formatNumber(x.todayRecovered)})\r`;
				var recovering = `treated: ${formatNumber(x.active)} \n(+${formatNumber(x.critical)})\r`;
				data.log('Done!')
			api.countries({country:'vietnam'}).then(x => {
				var time = getDateTime();
				var cases = `Ca nhiễm: ${formatNumber(x.cases)} (+${formatNumber(x.todayCases)})\r`;
				var deaths = `Tử Vong: ${formatNumber(x.deaths)} (+${formatNumber(x.todayDeaths)})\r`;
				var recoverds = `Hồi phục: ${formatNumber(x.recovered)} (+${formatNumber(x.todayRecovered)})\r`;
				var recoverings = `Đang điều trị: ${formatNumber(x.active)} (+${formatNumber(x.critical)})\r`;
				data.return({
					handler: "internal",
					data: `COVID STATS\r\nThời gian: ${time}\r\n\n- Thế giới 🌐:\r\n${casez}\r\n${death}\r\n${recoverd}\r\n${recovering}\r\n\n- Việt Nam 🇻🇳:\r\n${cases}\r\n${deaths}\r\n${recoverds}\r\n${recoverings}\r\n`
				});
			});
			});
		} else {
			api.countries({country:country}).then(x => {
				var time = getDateTime();
				var casee = `Infected: ${formatNumber(x.cases)} (+${formatNumber(x.todayCases)})\r`;
				var death = `Dead: ${formatNumber(x.deaths)} (+${formatNumber(x.todayDeaths)})\r`;
				var recoverd = `Recuperate: ${formatNumber(x.recovered)} (+${formatNumber(x.todayRecovered)})\r`;
				var recovering = `treated: ${formatNumber(x.active)} (+${formatNumber(x.critical)})\r`;
				data.return({
					handler: "internal",
					data: `COVID STATS\r\nThời gian: ${time}\r\n\n- ${khongbiet(country)}:\r\n${casee}\r\n${death}\r\n${recoverd}\r\n${recovering}\r\n`
				});
			});
		}
	} catch (e) {data.log(e)}
}

     