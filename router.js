var http = require("http");
var fs = require("fs");
var path = require("path");
var url = require("url");

http.createServer(function(req,res){
	var pathObj = url.parse(req.url,true);
	if (pathObj.pathname === "/") pathObj.pathname += "index.html";
	console.log(pathObj);
    
    switch(pathObj.pathname) {
    	case "/getNews":
    		var news = [
				{
					link: 'http://view.inews.qq.com/a/20160830A02SEB00',
					img: 'http://inews.gtimg.com/newsapp_ls/0/531730377_150120/0',
					title: '中国轰6K研发险些被俄罗斯发动机厂商卡脖子',
					brif:  '近日，轰6K＂战神＂轰炸机首次公开亮相。在中国...'
				},
				{
					link: 'http://xw.qq.com/mil/20160830028700/MIL2016083002870002',
					img: 'http://inews.gtimg.com/newsapp_ls/0/531644649_150120/0',
					title: '外媒称中国已经决心造出世界先进的航空发动机',
					brif: '资料图：2012年11月14日，第九届中国国际...'
				},
				{
					link: 'http://view.inews.qq.com/a/20160828A007LB00',
					img: 'http://inews.gtimg.com/newsapp_ls/0/531727868_150120/0',
					title: '传奇导弹专家冯·布劳恩：其实到美国后曾被当局忽视',
					brif: '小火箭出品本文作者：邢强博士原文标题：布劳恩博...'
				},
				{
					link: 'http://xw.qq.com/mil/20160830033420/MIL2016083003342001',
					img: 'http://inews.gtimg.com/newsapp_ls/0/531646423_150120/0',
					title: '中国空军演习加快反导能力建设 韩媒：或针对“萨德',
					brif: '中国空军演习加快反导能力建设 韩媒：或针对“萨德'
				},
				{
					link: 'http://xw.qq.com/mil/20160830028700/MIL2016083002870002',
					img: 'http://inews.gtimg.com/newsapp_ls/0/531644649_150120/0',
					title: '外媒称中国已经决心造出世界先进的航空发动机',
					brif: '资料图：2012年11月14日，第九届中国国际...'
				},
				{
					link: 'http://xw.qq.com/mil/20160830028700/MIL2016083002870002',
					img: 'http://inews.gtimg.com/newsapp_ls/0/531644649_150120/0',
					title: '为了喝酒，应该海军当年那些水兵也是蛮拼的……',
					brif: '嚣张（aggressive）这个词，腐国海军当...'
				},
				{
					link: 'http://xw.qq.com/mil/20160830028700/MIL2016083002870002',
					img: 'http://inews.gtimg.com/newsapp_ls/0/531644649_150120/0',
					title: '西媒臆断老挝“弃华投美” 认为现政府更亲越南',
					brif: '西媒臆断老挝“弃华投美” 认为现政府更亲越南'
				},
				{
					link: 'http://xw.qq.com/mil/20160830028700/MIL2016083002870002',
					img: 'http://inews.gtimg.com/newsapp_ls/0/531644649_150120/0',
					title: '中国武警2016年征兵宣传片震撼首发',
					brif: '中国武警2016年征兵宣传片震撼首发'
				},
				{
					link: 'http://xw.qq.com/mil/20160830028700/MIL2016083002870002',
					img: 'http://inews.gtimg.com/newsapp_ls/0/531644649_150120/0',
					title: '韩国多次宣称“一旦开战三天内消灭朝鲜空军”，靠谱吗？',
					brif: '韩国多次宣称“一旦开战三天内消灭朝鲜空军”，靠谱吗？'
				},
				{
					link: 'http://xw.qq.com/mil/20160830028700/MIL2016083002870002',
					img: 'http://inews.gtimg.com/newsapp_ls/0/531644649_150120/0',
					title: '韩促朝停止诋毁韩国元首 批其丧失最基本礼仪常识',
					brif: '韩促朝停止诋毁韩国元首 批其丧失最基本礼仪常识'
				},
				{
					link: 'http://xw.qq.com/mil/20160830033420/MIL2016083003342001',
					img: 'http://inews.gtimg.com/newsapp_ls/0/531646423_150120/0',
					title: '中国空军演习加快反导能力建设 韩媒：或针对“萨德',
					brif: '中国空军演习加快反导能力建设 韩媒：或针对“萨德'
				},
				{
					link: 'http://xw.qq.com/mil/20160830028700/MIL2016083002870002',
					img: 'http://inews.gtimg.com/newsapp_ls/0/531644649_150120/0',
					title: '外媒称中国已经决心造出世界先进的航空发动机',
					brif: '资料图：2012年11月14日，第九届中国国际...'
				},
				{
					link: 'http://xw.qq.com/mil/20160830028700/MIL2016083002870002',
					img: 'http://inews.gtimg.com/newsapp_ls/0/531644649_150120/0',
					title: '为了喝酒，应该海军当年那些水兵也是蛮拼的……',
					brif: '嚣张（aggressive）这个词，腐国海军当...'
				},
				{
					link: 'http://xw.qq.com/mil/20160830028700/MIL2016083002870002',
					img: 'http://inews.gtimg.com/newsapp_ls/0/531644649_150120/0',
					title: '西媒臆断老挝“弃华投美” 认为现政府更亲越南',
					brif: '西媒臆断老挝“弃华投美” 认为现政府更亲越南'
				},
				{
					link: 'http://xw.qq.com/mil/20160830028700/MIL2016083002870002',
					img: 'http://inews.gtimg.com/newsapp_ls/0/531644649_150120/0',
					title: '中国武警2016年征兵宣传片震撼首发',
					brif: '中国武警2016年征兵宣传片震撼首发'
				},
				{
					link: 'http://xw.qq.com/mil/20160830028700/MIL2016083002870002',
					img: 'http://inews.gtimg.com/newsapp_ls/0/531644649_150120/0',
					title: '韩国多次宣称“一旦开战三天内消灭朝鲜空军”，靠谱吗？',
					brif: '韩国多次宣称“一旦开战三天内消灭朝鲜空军”，靠谱吗？'
				},
				{
					link: 'http://xw.qq.com/mil/20160830028700/MIL2016083002870002',
					img: 'http://inews.gtimg.com/newsapp_ls/0/531644649_150120/0',
					title: '韩促朝停止诋毁韩国元首 批其丧失最基本礼仪常识',
					brif: '韩促朝停止诋毁韩国元首 批其丧失最基本礼仪常识'
				}

			]
			// console.log(pathObj.query);
			var curIndex = parseInt(pathObj.query.index),len = parseInt(pathObj.query.length);
			console.log(curIndex,curIndex+len);
			var retNews = news.slice(curIndex,curIndex+len);//0,3  3,6
            res.end(JSON.stringify({
            	status: 0,
            	data: retNews
            })); 

        default:
        	fs.readFile(path.join(__dirname,pathObj.pathname),function(err,data){
        		if (err) {
        			res.statusCode = 404;
                	res.end("Not found");
                } else {
                	res.end(data);
        		};
        	}); 
    };     
}).listen(8080)
