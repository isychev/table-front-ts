const getFilterParamsFromTempData = (tempData: any) => {
  if (tempData && tempData.sortDir && tempData.sortField) {
    return {
      sortDir: tempData.sortDir,
      sortField: tempData.sortField,
    };
  }
  return {};
};

export default getFilterParamsFromTempData;
