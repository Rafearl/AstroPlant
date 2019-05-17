import { MODAL_OPEN, MODAL_CLOSE } from './ModalReduxConstants'
import { createReducer } from '../../app/common/util/reducerUtil'

const initialState = null; //Modals closed in initial state

export const openModal = (state, payload) => {
    const {modalType, modalProps} = payload;
    return {modalType, modalProps}
}

export const closeModal = (state, payload) => {
    return null
}

export default createReducer( initialState, {
    [MODAL_OPEN]: openModal,
    [MODAL_CLOSE]: closeModal
})