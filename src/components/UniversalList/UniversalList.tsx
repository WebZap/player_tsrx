import React, {FC} from 'react';

interface ListProps<T> {
    items: T[],
    cbFmap: (item: T) => React.ReactNode
}

const UniversalList: FC<ListProps<any>> = ({items, cbFmap}) => {
    return <>{items.map(cbFmap)}</>;
};

export default UniversalList;