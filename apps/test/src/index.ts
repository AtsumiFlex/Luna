import { ImageFormats } from "@luna/core";
import { CDN } from "@luna/rest";

const test = async () => {
	const url = CDN.sticker("1245641352969195521", ImageFormats.PNG);
	console.log(url);
};

void test();
