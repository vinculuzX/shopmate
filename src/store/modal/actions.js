import {CHOOSE_MODAL , STATE_MODAL} from './types';

export const stateModal = state => ({
  type:STATE_MODAL,
  state
});

export const chooseModal = component => ({
  type:CHOOSE_MODAL,
  component
})
