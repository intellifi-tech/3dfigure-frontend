const mutations = {
    SET_CHECKOUT_LIST(state, basketList) {
        state.basketList = basketList
        let totalPrice = 0
        let totalPriceNet = 0
        let kdv = 0
        basketList.forEach(element => {
            element.concepts.forEach(el => {
                totalPriceNet += el.price * 1
                totalPrice += el.price * 1 * 1.18
                kdv += el.price * 1 * 0.18
            })
        });
        this.SET_TOTAL_PRICE_NET(state, totalPriceNet)
        this.SET_TOTAL_PRICE(state, totalPrice)
        this.SET_KDV(state, kdv)
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
    DELETE_FROM_CHECKOUT_LIST(state, conceptId) {
        let totalPrice = 0
        let totalPriceNet = 0
        let kdv = 0

        for (let index = 0; index < state.basketList.length; index++) {
            const figure = state.basketList[index]
            for (let indexy = 0; indexy < figure.concepts.length; indexy++) {
                const conceptx = figure.concepts[indexy]
                if (conceptx.id === conceptId) {
                    figure.concepts.splice(indexy, 1)
                }
            }
            if (figure.concepts.length === 0) {
                state.basketList.splice(index, 1)
            }
        }
        state.basketList.forEach(element => {
            element.concepts.forEach(el => {
                totalPriceNet += el.price * 1
                totalPrice += el.price * 1 * 1.18
                kdv += el.price * 1 * 0.18
            })
        });
        this.SET_TOTAL_PRICE_NET(state, totalPriceNet)
        this.SET_TOTAL_PRICE(state, totalPrice)
        this.SET_KDV(state, kdv)
    }
}

export default mutations