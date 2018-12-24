import { mergeAll } from 'ramda';
import { ComponentType } from 'react';
import createStore from 'react-waterfall';
import { ComponentEnhancer } from 'recompose';

import appState, { IAppActions, IAppState } from './app/app.context';

const config = {
  initialState: mergeAll([appState.initialState]),
  actionsCreators: mergeAll([appState.actionCreators])
};

export type StateType = IAppState;

type Actions = IAppActions;

type TConnectFunction = <TNewProps, TOutter>(
  mapFunction: (state: StateType) => TNewProps // TODO: connect with props
) => ComponentEnhancer<TOutter & TNewProps, TOutter>;

interface IStore {
  Provider: ComponentType<{}>;
  connect: TConnectFunction;
  actions: Actions;
  subscribe(
    subscription: (action: Actions, state: Partial<StateType>, args: {}) => void
  ): void;
  unsubscribe(
    subscription: (action: Actions, state: Partial<StateType>, args: {}) => void
  ): void;
}

export const { Provider, connect, actions, subscribe, unsubscribe } = createStore(
  config
) as IStore;
