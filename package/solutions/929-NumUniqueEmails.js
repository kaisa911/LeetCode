var numUniqueEmails = function (emails) {
  const emailSet = new Set();
  for (const email of emails) {
    const i = email.indexOf('@');
    // 去掉本地名第一个加号之后的部分
    let local = email.slice(0, i).split('+')[0];
    // 去掉本地名中所有的句点
    local = local.replaceAll('.', '');
    emailSet.add(local + email.slice(i));
  }
  return emailSet.size;
};
