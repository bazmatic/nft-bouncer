import { NextApiRequest, NextApiResponse } from "next";
import handler from "../pages/api/signin";
import "./setup";


class MockResponse {
	private json: jest.Mock<any, any>;
	private status: jest.Mock<any, any>;
	//private _statusCode: string;
	constructor() {
		this.json = jest.fn();
		this.status = jest.fn((statusCode) => {
			//this._statusCode = statusCode;
			return {
				statusCode,
				json: this.json,
			};
		});
	}



	get result() {
		return {
			status: this.status.mock.calls[0][0],
			body: this.json.mock.calls[0][0]
		}
	}

}



describe("Signin", () => {
	test("should respond 200 with auth details", async () => {
		const res = new MockResponse();
		const req = {
			method: "POST",
			query: {},
			cookies: {},
			env: {},
			body: {
				email: "barryearsman@gmail.com",
				password: "riceisnice",
			},
		} as NextApiRequest;

		await handler(req, res  as unknown as NextApiResponse);
		console.log(JSON.stringify(res.result, null, 4));
		expect(res.result.status).toBe(200);
		expect(res.result.body?.data?.data?.session).toBeDefined();
	});
});
