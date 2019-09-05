const state = {
	basketList: [],
	addressList: [],
	cargoAddress: {
	},
	billingAddress: {
	},
	chooseAddress: true,
	discount: null,
	order: {
		id: null,
		orderCode: "",
		totalPriceNet: 0.0,
		kdv: 0.0,
		totalPrice: 0.0,
		createdDate: null,
		lastModificationDate: null,
		deliveryId: -1,
		billingId: -1,
		basketId: -1,
		userId: -1,
		orderNote: "",
		status: "NOT_PAYMENT",
		feedback: "",
		language: sessionStorage.getItem("lang"),
		paymentId: "",
		paymentTransactionId: "",
		cardDTO: {
			holderName: "",
			cardNo: "",
			cvc: "",
			expireMonth: "",
			expireYear: ""
		}
	}
}

export default state