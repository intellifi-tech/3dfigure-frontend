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
        state.totalPrice = totalPrice
        state.kdv = kdv
        state.totalPriceNet = totalPriceNet
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


        debugger
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
        state.totalPrice = totalPrice
        state.kdv = kdv
        state.totalPriceNet = totalPriceNet
    }
}

export default mutations