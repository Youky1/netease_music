import React, { 
    forwardRef, 
    useState, 
    useRef, 
    useEffect,
    useImperativeHandle,
    useMemo
} from "react"
import PropTypes from "prop-types"
import BScroll from "better-scroll";
import { ScrollContainer } from './style'
import Loading from '../../baseUI/loading';
import { debounce } from '../../api/utils';

const Scroll = forwardRef ((props, ref) => {
    const [ bScroll, setBScroll] = useState();
    const scrollContaninerRef = useRef (); // 指向实例需要的DOM元素
    const {
        direction,
        click,
        refresh,
        onScroll,
        pullUp,
        pullDown,
        pullUpLoading,
        pullDownLoading,
        bounceTop,
        bounceBottom,
    } = props;

    const pullUpCallback = useMemo(() => {
        return debounce(pullUp);
    }, [pullUp]);

    const pullDownCallback = useMemo(() => {
        return debounce(pullDown);
    }, [pullDown]);

    // 初始化BScroll实例
    useEffect(() => {
        const scroll = new BScroll (scrollContaninerRef.current, {
            scrollX: direction === "horizental",
            scrollY: direction === "vertical",
            probeType: 3,
            click: click,
            bounce:{
            top: bounceTop,
            bottom: bounceBottom
            }
        });
        setBScroll (scroll);
        return () => {
            setBScroll (null);
        }
    }, [ direction, click, bounceTop, bounceBottom ])

    // 每次重新渲染时刷新BScroll实例
    useEffect (() => {
        if (refresh && bScroll){
            bScroll.refresh ();
        }
    });

    // 绑定滑动事件
    useEffect (() => {
        if (!bScroll || !onScroll) return;
        bScroll.on ('scroll', (scroll) => {
            onScroll (scroll);
        })
        return () => {
            bScroll.off ('scroll');
        }
    }, [onScroll, bScroll]);

    // 进行上拉到底的判断
    useEffect(() => {
        if(!bScroll || !pullUp) return;
        bScroll.on('scrollEnd', () => {
            if (bScroll.y <= bScroll.maxScrollY + 100){
                pullUpCallback();
            }
        })
        return () => {
            bScroll.off('scrollEnd');
        }
    }, [ bScroll, pullUp])

    // 进行下拉到底的判断
    useEffect (() => {
        if (!bScroll || !pullDown) return;
        bScroll.on ('touchEnd', (pos) => {
            // 判断用户的下拉动作
            if (pos.y > 50) {
                pullDownCallback();
            }
        });
        return () => {
            bScroll.off ('touchEnd');
        }
    }, [pullDown, bScroll])

    // 暴露刷新方法
    useImperativeHandle(ref, () => {
        return {
            // 暴露刷新方法
            refresh() {
                if(bScroll) {
                    bScroll.refresh();
                    bScroll.scrollTo(0, 0);
                }
            },
            getBScroll() {
                return bScroll;
            }
        }
    })

    return (
        <ScrollContainer ref={scrollContaninerRef}>
            {props.children}

            {/* 滑到底部加载动画 */}
            { pullUpLoading && <Loading/> }

            {/* 顶部下拉刷新动画 */}
            { pullDownLoading && <Loading/> }
        </ScrollContainer>
    )
})

Scroll.propTypes = {
    direction: PropTypes.oneOf (['vertical', 'horizental']),// 滚动的方向
    click: PropTypes.bool,// 是否支持点击
    refresh: PropTypes.bool,// 是否刷新
    onScroll: PropTypes.func,// 滑动触发的回调函数
    pullUp: PropTypes.func,// 上拉加载逻辑
    pullDown: PropTypes.func,// 下拉加载逻辑
    pullUpLoading: PropTypes.bool,// 是否显示上拉 loading 动画
    pullDownLoading: PropTypes.bool,// 是否显示下拉 loading 动画
    bounceTop: PropTypes.bool,// 是否支持向上吸顶
    bounceBottom: PropTypes.bool// 是否支持向下吸底
};
Scroll.defaultProps = {
    direction: "vertical",
    click: true,
    refresh: true,
    onScroll:null,
    pullUpLoading: false,
    pullDownLoading: false,
    pullUp: null,
    pullDown: null,
    bounceTop: true,
    bounceBottom: true
};
export default Scroll;