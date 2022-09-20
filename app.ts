interface IPayment {
    "sum": number;
	"from": number;
	"to": number;
}

// отделили сам запрос (выше) и обработку запроса (ниже)

interface IPaymentRequest extends IPayment {};


enum PaymentStatus {
    SUCCES = "success",
    FAILED = "failed",
}

//interface IPaymentRequest extends PaymentStatus {};

interface IDataSuccess extends IPayment {
		"databaseId": number,
		}

interface IDataFailed {
   		"errorMessage": string,
		"errorCode": number
}

interface IRespondSuccess {
    status: PaymentStatus.SUCCES,
    data: IDataSuccess
}

interface IRespondFailed {
    status: PaymentStatus.FAILED,
    data: IDataFailed
}

//function get(): IRespondSuccess | IRespondFailed {};
// функция которая будет обрабатывать respond

// Запрос в виде платежа
// {
// 	"sum": 10000,
// 	"from": 2,
// 	"to": 4
// }
// // Ответ
// {
// 	"status": "success",
// 	"data": {
// 		"databaseId": 567,
// 		"sum": 10000,
// 		"from": 2,
// 		"to": 4
// 	}
// },
// {
// 	"status": "failed",
// 	"data": {
// 		"errorMessage": "Недостаточно средств",
// 		"errorCode": 4
// 	}
// }