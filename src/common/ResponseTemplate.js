export default class ResponseTemplate{
	constructor(errorMsg, params){
		this.toJson = () => {
			let response = {};
			if(!errorMsg) {
				Object.assign(response, {success : true}, params);
			}else{
				// console.log('\x1b[31m', '[SYSTEM: ' + errorMsg + ']', '\x1b[0m');
				Object.assign(response, {success : false}, {errorMsg});
			}
			return response;
		};
	}
}
