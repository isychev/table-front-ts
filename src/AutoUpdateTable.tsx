import * as React from 'react';
import { connect } from 'react-redux';
import selectorTemp from 'base-front-ts/selectorTemp';
import onClickAutoUpdate from './onClickAutoUpdate';
import { TablePayload } from './types';

export interface IAutoUpdateTableProps {
  checked: boolean;
  onClick: (value: boolean) => void;
}
class AutoUpdateTable extends React.PureComponent<IAutoUpdateTableProps> {
  handleClick = (e: React.ChangeEvent<EventTarget & HTMLInputElement>) => {
    const { onClick } = this.props;
    if (onClick) {
      onClick(e.currentTarget.checked);
    }
  };

  render() {
    const { checked } = this.props;
    return (
      <div>
        <input type="checkbox" checked={checked} onChange={this.handleClick} />
        Автообновлене
      </div>
    );
  }
}

export default connect(
  (state: any, props: TablePayload) => {
    const { tableAlias } = props;
    const tableConfig = selectorTemp(state, { tempAlias: tableAlias }) || {};
    return {
      checked: tableConfig.autoUpdate,
    };
  },
  (dispatch, props) => ({
    onClick: () => dispatch(onClickAutoUpdate(props)),
  }),
)(AutoUpdateTable);
