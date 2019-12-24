### Tree形的菜单的展示，点击可展示与收起下级菜单
### 给文本节点添加`<span></span>`标签
#### 逻辑判断
```javascript
if (!childUl) return
childUl.hidden = !childUl.hidden

// 一直循环判断，
// console.log(!childUl.hidden)
```
