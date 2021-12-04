export const getCount = (count) => {
    if (count < 0) return;
    if (count < 10000) {
        return count;
    } else if (Math.floor (count / 10000) < 10000) {
        return Math.floor (count/1000)/10 + "万";
    } else {
        return Math.floor (count / 10000000)/ 10 + "亿";
    }
}

export const debounce = (fn, delay, ...args) => {
    let timer = null;
    return function() {
        if(timer) {
            clearTimeout(timer);
            timer = setTimeout(() => {
                clearTimeout(timer);
                fn(...args)
            }, delay)
        }else {
            fn(...args);
        }
    }
}

export const filterIndex = rankList => {
  for (let i = 0; i < rankList.length - 1; i++) {
    if (rankList[i].tracks.length && !rankList[i + 1].tracks.length) {
      return i + 1;
    }
  }
};