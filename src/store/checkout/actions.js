import CheckoutService from "@/services/checkout.service";

const actions = {
    setTotalPrice({ commit }, totalPrice) {
		commit('SET_TOTAL_PRICE', totalPrice);
    },
    async initBasketList({ commit }) {
        const res = await CheckoutService.getUserCheckout();
        commit('SET_CHECKOUT_LIST', res)
    },
    async deleteFromBasketList({ commit }, figureId, conceptId) {
        await CheckoutService.deleteFromBasket(figureId, conceptId);
        commit('DELETE_FROM_CHECKOUT_LIST', conceptId);
    }
}

export default actions