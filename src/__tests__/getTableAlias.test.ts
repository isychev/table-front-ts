import getTableAlias from '../getTableAlias';

describe('test getTableAlias', () => {
  it('should return tableAlias', () => {
    expect(getTableAlias({} as any, { tableAlias: 'test' })).toEqual('test');
    expect(getTableAlias({} as any, { } as any)).toEqual('');
  });
});
