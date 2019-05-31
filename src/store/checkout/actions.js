import CheckoutService from "@/services/checkout.service";

const actions = {
    setTotalPrice({ commit }, totalPrice) {
		commit('SET_TOTAL_PRICE', totalPrice);
    },
    async initBasketList({ commit }) {
        const res = await CheckoutService.getUserCheckout();
        commit('SET_CHECKOUT_LIST', res)
    },
    async deleteFromBasketList({ commit }, ids) {
        await CheckoutService.deleteFromBasket(ids);
        commit('DELETE_FROM_CHECKOUT_LIST', ids.c);
    }
}

export default actions