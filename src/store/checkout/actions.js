import CheckoutService from "@/services/checkout.service";

const actions = {
    setTotalPrice({ commit }, totalPrice) {
		commit('SET_TOTAL_PRICE', totalPrice);
    },
    async initBasketList({ commit }) {
        const res = await CheckoutService.getUserCheckout();
        debugger
        commit('SET_CHECKOUT_LIST', res.concepts)
        commit('INIT_BASKET_ID', {basketId: res.id, orderId: res.ordersId})
    },
    async deleteFromBasketList({ commit }, ids) {
        await CheckoutService.deleteFromBasket(ids);
        commit('DELETE_FROM_CHECKOUT_LIST', ids);
    },

    async createNewBasket({commit}) {
        const res = await CheckoutService.createCheckout()
        if (res.status == 200) {
            commit('RESET_BASKET')
        }
    }
}

export default actions