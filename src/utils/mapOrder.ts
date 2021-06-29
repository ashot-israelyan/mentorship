const mapOrder = (array: any[], order: any[], key: string | number) => {
  return array.sort((a, b) => {
    const A = a[key], B = b[key];

    if (order.indexOf(A) > order.indexOf(B)) {
      return 1;
    } else {
      return -1;
    }
  });
};

export default mapOrder;
