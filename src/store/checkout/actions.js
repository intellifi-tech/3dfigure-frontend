import CheckoutService from "@/services/checkout.service";

const actions = {
    setTotalPrice({ commit }, totalPrice) {
		commit('SET_TOTAL_PRICE', totalPrice);
    },
    async initBasketList({ commit }) {
        const res = await CheckoutService.getUserCheckout();
        commit('SET_CHECKOUT_LIST', res)
    },
    async deleteFromBasketList({ commit }, basketId, conceptId) {
        await CheckoutService.deleteFromBasket(basketId, conceptId);
        commit('DELETE_FROM_CHECKOUT_LIST', conceptId);
    }
}

export default actions