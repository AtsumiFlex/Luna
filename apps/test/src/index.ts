import { Rest } from "@lunajs/rest";

const test = async () => {
	const rest = new Rest("");
	console.log(rest.url.toString());
};

void test();
