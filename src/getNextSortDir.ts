const getNextSortDir = (sortDir: string): string =>
  sortDir === 'desc' ? 'asc' : 'desc';

export default getNextSortDir;
