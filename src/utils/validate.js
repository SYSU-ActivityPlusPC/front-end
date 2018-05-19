export const rules = {
  isEmpty (value) {
    if (value instanceof Array) {
      if (value.length === 0) return true;
      for (const v of value) {
        if (v !== null && v !== undefined && v !== '') return false;
      }
      return true;
    }
    return value === '' || value === null || value === undefined;
  },
  istooLong (value, length) {
    return typeof value === 'string' && value.length > length;
  },
  isEmail (value) {
    return /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(value);
  }
};

export const errorText = {
  empty () {
    return `不能为空`;
  },
  tooLong (length) {
    return `不能超过${length}字`;
  },
  notEmail () {
    return `邮箱格式不正确`;
  }
};
