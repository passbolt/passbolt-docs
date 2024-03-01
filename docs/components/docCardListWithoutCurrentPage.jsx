import React from 'react';
import {
  useCurrentSidebarCategory,
} from '@docusaurus/theme-common';
import {useLocation} from '@docusaurus/router';
import DocCardListWrapper from '@site/src/theme/DocCardList';

export const DocCardListWithoutCurrentPage = () => {
  const location = useLocation();
  /*
   * replace last trailing slash to avoid a bug where
   * removing the slash in the URL make the card not being filtered properly
   */
  const pathname = location.pathname.replace(/\/$/, '');
  const category = useCurrentSidebarCategory();
  const items = category.items.filter(item => item.href?.replace(/\/$/, '') !== pathname);

  return (
    <DocCardListWrapper items={items}/>
  );
}
