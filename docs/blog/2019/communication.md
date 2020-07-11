---
title: vue 组件间的通信
date: 2019-06-16 22:28:33
tags:
    - vue
---

# vue 组件间的通信

## 1、props(父 -> 子)、$emit(子 -> 父)

<!-- more -->

``` html
<!--父组件-->
<template>
    <div>
        <Child :title='title' @updateTitle='changeTitle'></Child>
    </div>
</template>

<script>
import Child from './child.vue';
export default {
    data() {
        return {
            title: '标题'
        };
    },
    components: {
        Child
    },
    methods: {
        changeTitle(value) {
            this.title = value;
        }
    }
};
</script>


<!--子组件-->
<template>
    <div @click='communicate'>{{title}}</div>
</template>

<script>
export default {
    props: ['title'],
    methods: {
        communicate() {
            this.$emit('updateTitle', '新标题');
        }
    }
}
</script>
```
总结：该方法常用于直接父子关系进行通信，对于祖先关系的组件采用这种方式较为繁琐

## 2、sync、update双向绑定

``` html
<!--父组件-->
<template>
    <div>
        <Child :title.sync='title'></Child>
    </div>
</template>

<script>
import Child from './child.vue';
export default {
    data() {
        return {
            title: '标题'
        };
    },
    components: {
        Child
    }
};
</script>

<!--子组件-->
<template>
    <div @click='communicate'>{{title}}</div>
</template>

<script>
export default {
    props: ['title'],
    methods: {
        communicate() {
            this.$emit('update:title', '新标题');
        }
    }
}
</script>
```

总结：该方法采用双向绑定的方式，相比第一种方式更简洁。

## 3、中央事件总线 


``` html
<!--父组件-->
<template>
    <div>
        <Child1></Child1>
        <Child2></Child2>
    </div>
</template>

<script>
import Child1 from './child1.vue';
import Child2 from './child2.vue';

window.bus = new Vue();

export default {
    components: {
        Child1,
        Child2
    }
};
</script>

<!--子组件1-->
<template>
    <div @click='communicate'>child1</div>
</template>

<script>
export default {
    methods: {
        communicate() {
            bus.$emit('updateTitle', '新标题');
        }
    }
}
</script>

<!--子组件2-->
<template>
    <div>{{title}}</div>
</template>

<script>
export default {
    data() {
        return {
            title: ''
        }
    },
    mounted() {
        bus.$on('updateTitle', (val) => {
            this.title = val
        });
    }
}
</script>
```

## 4、$children获取子组件的值、$parent获取父组件的值

``` html
<!--父组件-->
<template>
    <div>
        <Child></Child>
    </div>
</template>

<script>
import Child from './child.vue';

window.bus = new Vue();

export default {
    components: {
        Child
    },
    mounted() {
        console.log(this.$children[0].$data)
    }
};
</script>

<!--子组件-->
<template>
    <div @click='communicate'>{{name}}</div>
</template>

<script>
export default {
    data() {
        return {
            name: '123'
        }
    },
    methods: {
        communicate() {
            console.log('loged');
        }
    }
}
</script>
```

## 5、v-model
v-model会传一个value的属性和input的事件给子级，子级里可以通过$emit来触发父组件值的更新，在开发组件时，这种方法可很好的实现数据的双向绑定，组件的调用方的值保持和组件内部一致。

``` html
<!--父组件-->
<template>
    <div>
        <Child v-model="title"></Child>
    </div>
</template>

<script>
import Child from './child.vue'

export default {
    data() {
        return {
            title: '标题'
        };
    },
    components: {
        Child
    }
};
</script>

<!--子组件-->
<template>
    <div @click="updateTitle">
        {{value}}
    </div>
</template>

<script>
export default {
    props: ['value'],
    methods: {
        updateTitle() {
            this.$emit('input', 'newTitle');
        }
        
    }
}
</script>
```

## 6、provide、inject 
在父组件中通过provide来提供变量，在子组件中通过inject来引入。这里不仅限于子组件，子孙组件也可以，但provide、inject传递的值不是相应式的

``` html
<!--父组件-->
<template>
    <div>
        <Child></Child>
    </div>
</template>

<script>
import Child from './child.vue'

export default {
    provide: {
        for: '标题'
    },
    components: {
        Child
    }
};
</script>

<!--子组件-->
<template>
    <div>
        {{title}}
    </div>
</template>

<script>
export default {
    inject: ['for'],
    data() {
        return {
            title: this.for
        }
    }
}
</script>
```

## 7、Vuex实现
[具体见相关文档](https://vuex.vuejs.org/zh/)