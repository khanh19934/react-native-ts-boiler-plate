import { always } from 'ramda';

export default {
  initialState: {
    loading: false
  } as IAppState,
  actionCreators: {
    showLoading: always({ loading: true }),
    hideLoading: always({ loading: false })
  }
};

export interface IAppState {
  loading: boolean;
}

export interface IAppActions {
  showLoading(): void;
  hideLoading(): void;
}
