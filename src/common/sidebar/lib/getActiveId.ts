import { MenuItem } from '../interface/sidebar_interface';

export const getActiveId = (items: MenuItem[], path: string): string | null => {
 for (const item of items) {
  // direct match
  if (item.link === path) return item.id;

  // check children recursively
  if (item.children) {
   const childResult = getActiveId(item?.children, path);
   if (childResult) return childResult;
  }
 }
 return null;
};
