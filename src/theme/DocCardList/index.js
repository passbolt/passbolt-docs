import React from 'react';
import DocCardList from '@theme-original/DocCardList';

export default function DocCardListWrapper(props) {
  return (
    <div className='index-card-list'>
      <DocCardList {...props} />
    </div>
  );
}
