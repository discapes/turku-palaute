import { XMLParser } from 'fast-xml-parser';

export const load = async () => {
	const rss = await fetch('https://opaskartta.turku.fi/eFeedback/API/Feed/rss').then((res) =>
		res.text()
	);
	const parser = new XMLParser();
	const data = parser.parse(rss);
	//console.log(data);
	return data.rss.channel;
};
