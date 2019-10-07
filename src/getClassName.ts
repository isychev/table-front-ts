import {
  ColumnConfig,
  TGetColumnClassName,
  TGetHeaderClassName,
} from './types';

export const getColumnClassName: TGetColumnClassName = ({
  align,
  className,
}: ColumnConfig): string => {
  const alignClassName = align
    ? `ReactVirtualized__Table__rowColumn-${align}`
    : '';
  return `${alignClassName} ${className}`;
};
export const getHeaderClassName: TGetHeaderClassName = ({
  align,
  headerClassName,
}: ColumnConfig): string => {
  const alignClassName = align
    ? `ReactVirtualized__Table__headerColumn-${align}`
    : '';
  return `${alignClassName} ${headerClassName}`;
};

// export const basicRowClassName = "icon-line-bottom icon-pixel";
//
// export const getRowClassName = ({ rowCount }) => ({ index }) => {
//   switch (index) {
//     case -1:
//       return "font-weight-bold border-b";
//     case rowCount - 1:
//       return "";
//     default:
//       return basicRowClassName;
//   }
// };
//
// export const getLoadingClassName = ({ loading }) =>
//   loading ? "loading" : null;
//
// export const getWrapperClassName = ({ className, loadingClassName }) =>
//   cn("ReactVirtualized__Block", className, loadingClassName);
