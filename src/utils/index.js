/**
 * 对面包屑导航进行配置，因为考虑到很多页面要用到，然而我们是不可能硬写进去的，
 * 因为太多暴力，而且不容易维护。然而这个可以抽象出来，只要监视url变化，再重新
 * 配置即可。
 * 调用时，注意要bind(this)
 *
 *
 * @export
 * @returns arr 配置数组，里面有数个对象，每个对象有两个属性值，一为链接，一位链接的text
 */
export function setConfig () {
  const route = this.$route;
  let arr = [];
  // 对text进行处理, 分成 [首页, 社团管理] 的形式
  let temps = route.path.split('/');
  temps.shift();
  // 对href进行处理, 分成 [/admin, /admin/community, ...] 的形式
  let texts = route.meta.name.split('/');
  texts.shift();

  let hrefs = [];
  temps.reduce((last, cur) => {
    last = last + '/' + cur;
    hrefs.push(last);
    return last;
  }, '');

  const textsLength = texts.length;
  const hrefsLength = hrefs.length;
  for (let i = 0; i < textsLength; i++) {
    arr.push({
      text: texts[i],
      href: hrefsLength > textsLength && i === textsLength - 1 ? hrefs[i + 1] : hrefs[i]
    });
  }

  return arr;
}

/**
 * 希望有机会用到
 *
 * @export
 * @param {any} fn 需要被节流的函数
 * @param {any} interval 多久执行一次
 * @returns 节流函数
 */
export function throttle (fn, interval) {
  let last;
  return function () {
    const args = arguments;
    const context = this;
    let cur = +new Date();
    if (last && cur - last > interval) {
      last = cur;
      fn.apply(context, ...args);
      return;
    }

    if (!last) {
      last = cur;
      fn.apply(context, ...args);
      return;
    }
  };
}
