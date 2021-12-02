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