import isEqual from 'react-fast-compare';
import { TypedUseSelectorHook, useSelector as useSelectorGeneric } from 'react-redux';

import { IReduxState } from '../store/types';

const useSelector: TypedUseSelectorHook<IReduxState> = useSelectorGeneric;

const useMemoSelector: TypedUseSelectorHook<IReduxState> = (
  selector,
  comparator = isEqual,
) => useSelector(selector, comparator);

export default useMemoSelector;
