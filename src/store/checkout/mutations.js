const mutations = {
    SET_CHECKOUT_LIST(state, basketList) {
        state.basketList = basketList
        let totalPrice = 0
        let totalPriceNet = 0
        let kdv = 0
        basketList.forEach(element => {
            if (element.is_double_concept) {
                totalPriceNet += element.price * 1 * (element.figures.length / 2)
                totalPrice += element.price * 1 * 1.18 * (element.figures.length / 2)
                kdv += element.price * 1 * 0.18 * (element.figures.length / 2)
            } else {
                totalPriceNet += element.price * 1 * (element.figures.length)
                totalPrice += element.price * 1 * 1.18 * (element.figures.length)
                kdv += element.price * 1 * 0.18 * (element.figures.length)
            }
        });
        state.order.totalPrice = totalPrice.toFixed(2)
        state.order.kdv = kdv.toFixed(2)
        state.order.totalPriceNet = totalPriceNet.toFixed(2)
    },
    SET_TOTAL_PRICE(state, totalPrice) {
        state.totalPrice = totalPrice
    },
    SET_KDV(state, kdv) {
        state.kdv = kdv
    },
    SET_TOTAL_PRICE_NET(state, totalPriceNet) {
        state.totalPriceNet = totalPriceNet
    },
    DELETE_FROM_CHECKOUT_LIST(state, ids) {
        let totalPrice = 0
        let totalPriceNet = 0
        let kdv = 0

        const cindex = state.basketList.findIndex(concept => concept.id == ids.c)
        const findex = state.basketList[cindex].figures.findIndex(figure => figure.id == ids.f);
        state.basketList[cindex].figures.splice(findex, 1)
        if (state.basketList[cindex].figures.length == 0) {
            state.basketList.splice(cindex, 1)
        }
        state.basketList.forEach(element => {
            if (element.is_double_concept) {
                totalPriceNet += element.price * 1 * (element.figures.length / 2)
                totalPrice += element.price * 1 * 1.18 * (element.figures.length / 2)
                kdv += element.price * 1 * 0.18 * (element.figures.length / 2)
            } else {
                totalPriceNet += element.price * 1 * (element.figures.length)
                totalPrice += element.price * 1 * 1.18 * (element.figures.length)
                kdv += element.price * 1 * 0.18 * (element.figures.length)
            }
        });
        state.order.totalPrice = totalPrice.toFixed(2)
        state.order.kdv = kdv.toFixed(2)
        state.order.totalPriceNet = totalPriceNet.toFixed(2)
    },

    UPDATE_CARGO_ADDRESS(state, address) {
        state.cargoAddress = address
        state.order.deliveryId = address.id
    },

    UPDATE_BILLING_ADDRESS(state, address) {
        state.billingAddress = address
        state.order.billingId = address.id
    },

    ADD_CARGO_ADDRESS(state, address) {
        state.addressList.push(address)
    },

    ADD_BILLING_ADDRESS(state, address) {
        state.addressList.push(address)
    },

    UPDATE_IS_NEW_ADDRESS(state, choose) {
        state.chooseAddress = choose
    },

    INIT_ADDRESS_LIST(state, adresList) {
        state.addressList = adresList
    },

    INIT_BASKET_ID(state, basket) {
        state.order.basketId = basket.basketId
        state.order.id = basket.orderId
    },

    UPDATE_FEEDBACK(state, value) {
        state.order.feedback = value
    },

    UPDATE_ORDER_NOTE(state, value) {
        state.order.orderNote = value
    },

    FINISH_ORDER(state, value) {
        state.order.paymentId = value.paymentId
        state.order.paymentTransactionId = value.paymentTransactionId
        state.order.userId = value.userId
        state.order.language = value.lang
        state.order.createdDate = new Date()
        state.order.lastModificationDate = new Date()
        state.order.orderCode = Math.random().toString(36).substr(2, 9).toUpperCase();
    },

    RESET_BASKET(state) {
        state.basketList = []
        state.cargoAddress = {}
        state.billingAddress = {}
        state.order = {
            orderCode: "",
            totalPriceNet: 0.0,
            kdv: 0.0,
            totalPrice: 0.0,
            createdDate: null,
            lastModificationDate: null,
            deliveryId: -1,
            billingId: -1,
            basketId: -1,
            userId: -1
        }
        state.addressList = []
    },

    ADD_CARD(state, card) {
        state.order.cardDTO.holderName = card.name
        state.order.cardDTO.cardNo = card.number
        state.order.cardDTO.cvc = card.cvv
        state.order.cardDTO.expireMonth = card.month
        state.order.cardDTO.expireYear = card.year
    }
}

export default mutations