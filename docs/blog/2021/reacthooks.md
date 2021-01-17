---
title: React hooks
---

# React hooks


不编写 class 的情况下使用 state 以及其他的 React 特性

## 背景

### class组件问题
- class组件的逻辑难以复用：高阶组件 ->渲染的层级较深
- 维护困难：随着react 16.x的发布，组件变得愈发复杂，体现在生命周期变更、状态管理的复杂性

**before**
<img src='~@imgUrl/hooks/before.png' width='100%' />

**after**
<img src='~@imgUrl/hooks/after.png' width='100%' />


- 每次需要super(props)，创建实例开销大
- this指向问题，每次需要绑定this，容易出现报错

### Hooks解决问题
- 逻辑复用变简单
- 简化生命周期：useState/useEffect能解决大部分场景下的问题
- 不用this
- 写法简化，减少深层次的嵌套
- 开销比class小：不需要创建类实例、不需要绑定事件处理函数

## React运行机制

<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="471px" height="140px" viewBox="-0.5 -0.5 471 140"><defs/><g><path d="M 304 98 L 377.63 98" fill="none" stroke="#000000" stroke-miterlimit="10" pointer-events="stroke"/><path d="M 382.88 98 L 375.88 101.5 L 377.63 98 L 375.88 94.5 Z" fill="#000000" stroke="#000000" stroke-miterlimit="10" pointer-events="all"/><g transform="translate(-0.5 -0.5)"><foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%"><div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 1px; height: 1px; padding-top: 89px; margin-left: 340px;"><div style="box-sizing: border-box; font-size: 0; text-align: center; "><div style="display: inline-block; font-size: 12px; font-family: Helvetica; color: #000000; line-height: 1.2; pointer-events: all; white-space: nowrap; ">reconcile</div></div></div></foreignObject></g><rect x="234" y="88" width="70" height="20" rx="3" ry="3" fill="#ffffff" stroke="#000000" pointer-events="all"/><g transform="translate(-0.5 -0.5)"><foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%"><div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 68px; height: 1px; padding-top: 98px; margin-left: 235px;"><div style="box-sizing: border-box; font-size: 0; text-align: center; "><div style="display: inline-block; font-size: 12px; font-family: Helvetica; color: #000000; line-height: 1.2; pointer-events: all; white-space: normal; word-wrap: normal; ">state update</div></div></div></foreignObject></g><path d="M 174 98 L 227.63 98" fill="none" stroke="#000000" stroke-miterlimit="10" pointer-events="stroke"/><path d="M 232.88 98 L 225.88 101.5 L 227.63 98 L 225.88 94.5 Z" fill="#000000" stroke="#000000" stroke-miterlimit="10" pointer-events="all"/><g transform="translate(-0.5 -0.5)"><foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%"><div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 1px; height: 1px; padding-top: 89px; margin-left: 201px;"><div style="box-sizing: border-box; font-size: 0; text-align: center; "><div style="display: inline-block; font-size: 12px; font-family: Helvetica; color: #000000; line-height: 1.2; pointer-events: all; white-space: nowrap; ">交互</div></div></div></foreignObject></g><rect x="124" y="88" width="50" height="20" rx="3" ry="3" fill="#ffffff" stroke="#000000" pointer-events="all"/><g transform="translate(-0.5 -0.5)"><foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%"><div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 48px; height: 1px; padding-top: 98px; margin-left: 125px;"><div style="box-sizing: border-box; font-size: 0; text-align: center; "><div style="display: inline-block; font-size: 12px; font-family: Helvetica; color: #000000; line-height: 1.2; pointer-events: all; white-space: normal; word-wrap: normal; ">UI</div></div></div></foreignObject></g><path d="M 419 88 L 419 32 L 149 32 L 149 81.63" fill="none" stroke="#000000" stroke-miterlimit="10" pointer-events="stroke"/><path d="M 149 86.88 L 145.5 79.88 L 149 81.63 L 152.5 79.88 Z" fill="#000000" stroke="#000000" stroke-miterlimit="10" pointer-events="all"/><g transform="translate(-0.5 -0.5)"><foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%"><div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 1px; height: 1px; padding-top: 23px; margin-left: 292px;"><div style="box-sizing: border-box; font-size: 0; text-align: center; "><div style="display: inline-block; font-size: 12px; font-family: Helvetica; color: #000000; line-height: 1.2; pointer-events: all; white-space: nowrap; ">commit</div></div></div></foreignObject></g><rect x="384" y="88" width="70" height="20" rx="3" ry="3" fill="#ffffff" stroke="#000000" pointer-events="all"/><g transform="translate(-0.5 -0.5)"><foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%"><div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 68px; height: 1px; padding-top: 98px; margin-left: 385px;"><div style="box-sizing: border-box; font-size: 0; text-align: center; "><div style="display: inline-block; font-size: 12px; font-family: Helvetica; color: #000000; line-height: 1.2; pointer-events: all; white-space: normal; word-wrap: normal; ">new  state</div></div></div></foreignObject></g><path d="M 74 98 L 117.63 98" fill="none" stroke="#000000" stroke-miterlimit="10" pointer-events="stroke"/><path d="M 122.88 98 L 115.88 101.5 L 117.63 98 L 115.88 94.5 Z" fill="#000000" stroke="#000000" stroke-miterlimit="10" pointer-events="all"/><rect x="24" y="88" width="50" height="20" rx="3" ry="3" fill="#ffffff" stroke="#000000" pointer-events="all"/><g transform="translate(-0.5 -0.5)"><foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%"><div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 48px; height: 1px; padding-top: 98px; margin-left: 25px;"><div style="box-sizing: border-box; font-size: 0; text-align: center; "><div style="display: inline-block; font-size: 12px; font-family: Helvetica; color: #000000; line-height: 1.2; pointer-events: all; white-space: normal; word-wrap: normal; ">init state</div></div></div></foreignObject></g><rect x="16" y="66" width="293" height="57" fill="none" stroke="#000000" stroke-dasharray="3 3" pointer-events="all"/></g></svg>
1. 初始状态下的UI
2. 用户交互/数据变化产生update
3. state = reconcile(update) => diff比较
4. UI = commit(state) => 更新DOM


## State Hook

### useState
类似class component的state，useState将单个state拆开来管理。

```
/**
* state: 当前值
* setState：更新state的函数，接收值或者函数(函数的返回值为初始状态)
* initState：初始值，可以为值或函数
*/
const [state, setState] = useState(initState);

function Counter({ initialCount }) {
    const [count, setCount] = useState(initialCount);
    return <h1 onClick={() => { setCount(count + 1) }}>{count}</h1>;
}
```

- 返回一个数组：[初始化后state的值，改变state的方法]
- useState接收一个值或函数作为初始状态
- 通过setState可以更新state的值
- 如果初始值为复杂对象时，建议使用函数来返回初始值，避免重复计算

```
// bad
const arr = arr.map(item => item.id);
const [state, setState] = useState(arr);

// good
const [state, setState] = useState(() => arr.map(item => item.id));
```

#### 简版实现
```
let memoizedState = []; // hooks 存放在这个数组
let cursor = 0; // 当前 memoizedState 下标

function useState(initialValue) {
  memoizedState[cursor] = memoizedState[cursor] || initialValue;
  const currentCursor = cursor;
  function setState(newState) {
    memoizedState[currentCursor] = newState;
    render();
  }
  return [memoizedState[cursor++], setState]; // 返回当前 state，并把cursor加 1
}
```

#### 使用场景
- 状态需要更新的场景，维护UI/逻辑状态的变更
- 数据结构比较简单的场合，新值会覆盖旧值，避免放入大对象，复杂对象需要用解构
```
function List() {
  const [list, setList] = useState([]);
  const addList = () => {
      list.push('test');
      setList(list);
   };
  return <div>
      <span>{list.length}</span>
      <button onClick={addList}>push</button>
  </div>;
}
```
- 复杂的数据结构适合用useReducer
- 获取上一状态的props、state
```
function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}

function Counter() {
  const [count, setCount] = useState(0);
  const prevCount = usePrevious(count);
  return <h1>Now: {count}, before: {prevCount}</h1>;
}
```
- 获取的状态不是最新的（闭包问题，Class component获取到的是最新值）
```
function Example() {
  const [count, setCount] = useState(0);

  const handleAlertClick = () => {
    setTimeout(() => {
      alert('count: ' + count);
    }, 3000);
  };

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
      <button onClick={handleAlertClick}>
        Show alert
      </button>
    </div>
  );
}
```

#### 代码分析
这段代码有什么问题？
```
let index = 0;
const List = () => {

  const [list, setList] = useState([]);
  
  const getValueFromAPI = useCallback(() => {
    const val = { id: index++ };
    setList((list) => [
      ...list,
      val
    ]);
  }, [index]);

  useEffect(() => {
    getValueFromAPI();
  }, [getValueFromAPI]);

  const addItem = useCallback(() => {
    // 请求后端添加api，添加成功后得到val
    const val = { id: index++ };
    setList([
      ...list,
      val
    ]);
  }, [list]);

  return <div>
    <h1>{list.length}</h1>
    <button onClick={addItem}>add</button>
  </div>
};
```
### useReducer
处理复杂状态的变更
```
/**
* reducer: 改变state的函数
* initState: recucer的初始值
* init: 可选值，函数类型，用于惰性提供可选状态，如果init函数返回的值与initState的值不一样，则采用init的返回值作为初始状态
* 
* state
* dispatch：更新state的函数
*/
const [state, dispatch] = useReducer(reducer, initState, init);

// example
function init(initialCount) { 
    return {count: initialCount}; 
} 

function reducer(state, action) { 
    switch (action.type) { 
        case 'increment': 
            return {count: state.count + 1}; 
        case 'decrement': 
            return {count: state.count - 1}; 
        case 'reset': 
            return init(action.payload); 
        default: 
            throw new Error(); 
    } 
} 

function Counter({initialCount}) { 
    const [state, dispatch] = useReducer(reducer, initialCount, init); 
    return ( 
      <> 
        Count: {state.count} 
        <button onClick={() => dispatch({type: 'reset', payload: initialCount})} > 
            Reset 
        </button> 
        <button onClick={() => dispatch({type: 'increment'})}>+</button> 
        <button onClick={() => dispatch({type: 'decrement'})}>-</button> 
      </> 
    ); 
} 
```
1. useState适合state简单的场景
2. useReducer适合逻辑比较复杂场景
state中数据结构比较复杂的情况，可以在dispatch中传入回调函数来改state
新的state依赖旧state的情况
3. 对于深层次的组件更新时做了相应的性能优化
4. useState基于useReducer的内部实现

#### Example
```
const time = 0;

function Count() {
  const [list, setList] = useReducer((state, newItem) => {
      return [
          ...state,
          newItem
      ];
  }, [{ id: time++ }]);
  
  const getValue = useCallback(() => {
    setList({ id: time++ });
  }, []);

  useEffect(() => {
    getValue();
  }, [getValue]);

  return <h1>{list.length}</h1>;
};
```

## Effect Hook

### useEffect
用来处理副作用的hooks，可以模拟class的生命周期
```
useEffect(effect, deps);

effect: ()=> {}、() => { xxx; return () => {}; }
deps：无、[]、[xxx]

// Example
function App() {
    useEffect(() => {
        document.title = 'xxxx'; 
    }, []);
    
    return <div>
        <Layout />  
    </div>
}
```
- 第一个参数表示发生副作用时，需要执行的函数，effect函数也可以返回一个函数(returnFunction)
- 第二参数表示关联依赖，非必传，如果传值，类型为array

#### 几种情况
##### 1.不传第二个参数
 - effect函数在每次render后都会调用，相当于componentDidMount/componentDidUpdate之后调用（因为没有依赖，effect只会执行一次）
 - 当有setState发生时，会先执行returnFunction，再执行effect函数
 - 当子组件被销毁时，先执行子组件的returnFunction，在执行父组件的returnFunction，子组件不会再执行一遍

```
let timer = null;
const Count = () => {

  console.log('---begin---');
  const [count, setCount] = useState(0);

  console.log('count', count);

  useEffect(() => {
    console.log('Count useEffect');
    return () => {
      console.log('Count returnFunction');
    }
  });

  timer = setTimeout(() => {
    console.log('before setCount');
    setCount(count + 1);
    console.log('after setCount');
    clearTimeout(timer);
  }, 3000);

  console.log('Count return');

  return <h1>{count}</h1>;
};

输出结果：production环境下
---begin---
count 0
Count return
Count useEffect
// 3秒后
before setCount
---begin---    // setState后重新执行了一遍函数
count 1        // setState后重新执行了一遍函数
Count return   // setState后重新执行了一遍函数
after setCount
Count returnFunction    // setState后先执行了returnFunction
Count useEffect         // 之后才执行useEffect的内容
```

##### 2.第二个参数为空数组
- 只会调用一次，effect相当于 componentDidMount
- returnFunction相当于componentWillUnmount，组件销毁时执行returnFunction
- setState时不会触发effect、returnFunction
```
const Count = () => {

  console.log('---begin---');
  const [count, setCount] = useState(0);

  console.log('count', count);

  useEffect(() => {
    console.log('Count useEffect');
    return () => {
      console.log('Count returnFunction');
    }
  // 此处传入空数组
  }, []);

  timer = setTimeout(() => {
    console.log('before setCount');
    setCount(count + 1);
    console.log('after setCount');
    clearTimeout(timer);
  }, 3000);

  console.log('Count return');

  return <h1>{count}</h1>;
};

输出结果：production环境下
---begin---
count 0
Count return
Count useEffect
// 3s后
before setCount
---begin---
count 1
Count return
// 没有执行returnFunction和useEffect
```

##### 3.第二个参数为传入指定变量
- 组件加载时执行一次，相当于effect函数相当于componentDidUpdate
- 指定变量没变，effect函数不会再执行
- 指定变量变化，returnFunction会先执行，然后useEffect再执行

#### 简版实现
```
let memoizedState = []; // hooks 存放在这个数组
let cursor = 0; // 当前 memoizedState 下标

function useEffect(callback, depArray) {
  const hasNoDeps = !depArray;
  const deps = memoizedState[cursor];
  const hasChangedDeps = deps
    ? !depArray.every((el, i) => el === deps[i])
    : true;
  if (hasNoDeps || hasChangedDeps) {
    callback();
    memoizedState[cursor] = depArray;
  }
  cursor++;
}
```

#### 总结
- effect执行时机：在渲染完成以后，也就是return之后执行effect
- 如果需要模拟componentWillMount的效果，在渲染之前执行的话需要使用useLayoutEffect
- 🌰中可以看到每次setState前函数会重新执行一遍
- 支持异步方法，在effect中获取数据

### useLayoutEffect
- DOM树更新之后，渲染之前执行
- 用法同useEffect
- 同步方法，会阻塞页面的渲染
- SSR模式下有warning
- 用于动效的场景，一般较少使用
```
useLayoutEffect(effect, deps);

effect: ()=> {}、() => { xxx; return () => {}; }
deps：无、[]、[xxx]
```

## 性能优化
- 减少渲染开销
- 避免重复计算

### 重绘时机
- state发生变化
- 依赖的context发生变化
- 父组件状态变更

### useCallback
- 用于函数的性能优化，函数缓存
- useCallback一般用于在 React 中给事件绑定函数并需要传入参数的时候
```
const func = useCallback(fn, deps);

// example
cont fun = null;
function Comp() {
    const [count, setCount] = useReucer(0);
    
    const onUpdate = () => {
        expensive code;
    };
    
    return <div>
        <Button onClick={() => setCount(count + 1)}>{count}</Button>
        <ExpensiveComp onUpdate={onUpdate} />
    </div>
}
```
### useMemo
- 用于值的性能优化，值的缓存，减少重复计算
- 减少重复渲染，结合React.memo避免无效渲染

```
const value = useMemo(() => computeExpensiveValue(deps), deps);

current变化不会引起CompB组件的重新渲染
function Comp() {
    const [current, setCurrent] = useState(0);
    const valA = useMemo(() => {
        return expensiveCompute(id);
    }, [current]);
    
    const valB = useMemo(() =>{
        xxx;
    }, []);
 
    return <div> 
        <select onChange={(id) => setCurrent(id)}></select>
        <CompA value={valA} /> 
        <CompB value={valB} />
    </div>;
}

const CompB memo(() => {
    return xxx;
})
```

- func函数在渲染期间执行一次，当deps发生变化时，会再次执行func函数
- 如果没有提供deps，在每次渲染时，都会执行func
- 避免其他节点数据发生变化对未变化节点的再次渲染，减小性能开销
- 相当于vue的computed

useCallback和useMemo用于父组件向子组件传值时，即如果是组件内部自己用的函数和变量，不需要使用useCallback和useMemo。

useCallback(fn, deps) 相当于 useMemo(() => fn, deps)

#### 使用建议
错误的使用useCallback/useMemo反而会增加额外的开销
- 直接传给DOM元素函数不要使用useCallback/useMemo
- 不要将每次渲染都是新值作为useCallback/useMemo的依赖

```
// bad
const arr = [];
const handle = useCallback(func, [arr]);

// bad
function Form() {
  const [val, updateVal] = useState('');
  
  const handleSubmit = useCallback(() => {
      // code；
  }, [val]);

  return (
    <>
      <input val ={text} onChange={e => updateVal(e.target.value)} />
      <ExpensiveTree onSubmit={handleSubmit} />
    </>
  );
}

// 解决方案 useRef、useReducer
export default function Index() {
    const [val, updateVal] = useState('');
    const valRef = useRef(val);

    const handleSubmit = useCallback(() => {
        console.log(valRef.current);
    }, [valRef]);

    useEffect(() => {
        valRef.current = text;
    }, [val])

    return <>
        <input value={text} onChange={e => updateVal(e.target.value)} />
        <ExpensiveTree onClick={handleSubmit} />
    </>;
}
```

- 当组件不关心依赖变化时，不需要使用useCallback/useMemo

```
// 可以去掉 useCallback
const handleSelect = useCallback((val) => {
    setSelected(val);
}, []);

<Select onSelect={handleSelect} />

```

- 传给子组件的件的props尽量使用useCallback/useMemo
### memo
- memo：当props不变时，避免重复渲染
- 类似React.PureComponent，对props做浅比较，防止无效的渲染
- 传入React.memo的第二个参数作为判断函数更新的依据
// Component：函数组件
// isEquare比较函数
React.memo(Component, isEquare);

## Context Hooks
获取React的Context，共享数据，避免层层手动传递
### createContext、useContext
- Provider将value传递给子组件，供子组件消费
- 当value发生变化时，内部依赖value的组件都会重新渲染
- 多个 Provider 也可以嵌套使用，里层的会覆盖外层的数据
```
const UserContext = createContext();
const { Provider } = UserContext;

function Wrapper(props) {
  const [userInfo, dispatch] = useReducer((state, payload) => {
    return {
      ...state,
      ...payload
    }
  }, {});

  useEffect(() => {
    dispatch({ name: 'hht', avatar: 'https://xxx', team: 'RecSys', });
  }, []);

  return <Provider value={{ userInfo, dispatch }}>
    <PageLayout>
      <Header />
      {props.children}
    </PageLayout>
  </Provider>;
}

function Header() {
  const ctx = useContext(UserContext);
  // 调用dispatch更新userInfo
  return (
    <div>{ctx.name}</div>
  );
}

function PageLayout(props) {
  const { userInfo, dispatch } = useContext(UserContext);
  return (
    <div>
      <h3>{userInfo.name}</h3>
      {props.children}
    </div>
  );
}
```

### useRef
- 用于获取到数据的最新状态，在不同步骤间共享引用类型数据的目的
```
function Timer() {
  const intervalRef = useRef();
  useEffect(() => {
    const id = setInterval(() => {
      // ...
    });
    intervalRef.current = id;    return () => {
      clearInterval(intervalRef.current);
    };
  });
  // ...
}

- 获取子组件的实例，保存函数中render前后不变的量，可以通过ref.current取到DOM元素或者子组件
function Input() {
  const inputRef = useRef();
  
  useEffect(() => {
    //页面渲染完成的时候执行
    inputRef.current.focus()
  }, []);
  
  render() {
    return (
      <div>
        <input type="text" ref={inputRef} />
      </div>
    )
  }
}
```

- ref对象在组件的整个生命周期内保持不变
- 当ref对象发生变化时，不会收到变更通知，也不会触发重新渲染
- 不推荐使用useRef获取子组件的引用
自定义Hook
- 用于组件间状态逻辑的共享
- 本质上就是函数的封装
- 自定义Hook需要以use开头
- 同一个自定义hook多次调用相互独立

## 总结
1. 状态管理：useState、useReducer
2. 副作用处理：useEffect、useLayout
3. 性能优化：useCallback、useMemo、memo
4. 数据共享：createContext、useContext
5. 逻辑复用： 自定义hooks
6. hook调试：useDebugValue

#### Class 迁移到 Hook
  - Constructor => state的初始值
  - getDerivedStateFromProps  => 在渲染时更新一次
  - shouldComponentUpdate => React.memo
  - componentDidMount, componentDidUpdate, componentWillUnmount => useEffect
  - hook还没有覆盖class组件的所有生命周期，getSnapshotBeforeUpdate，getDerivedStateFromError 和 componentDidCatch还未实现

#### 使用细节
- \> 16.8支持react hooks。
- 只能在react的函数组件中使用Hook，在其他函数中使用hook会报错
- 只能在函数最外层调用 Hook。不能在循环、条件判断或者子函数中调用
- 函数式组件在渲染时会执行两次，Dev模式下使用hooks会执行两次，目的是帮助开发者发现side effect引起bug
- 尽量在新组件中使用hooks
hooks能调用class组件，class组件内部也能调用hook组件
两者混用的话会存在UI不一致的问题

#### 实现原理
React hooks: not magic, just arrays
深入解析类 React's Hooks 的实现原理
React Hooks 原理

我的 React 知识还有多少是仍然有用的？

#### Reference
1. 致命的 useCallback/useMemo（翻译） 
2. React Hooks 
3. useCallback hell问题总结 
4. 三天精通 React
