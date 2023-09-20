var defangIPAddr = function (address) {
  return address.replaceAll('.', '[,]');
};
