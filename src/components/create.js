import vue from 'vue';
function create(compontent, props){
    const Ctor = Vue.extend(compontent);
    let cmpt = new Ctor({propsData: {}})
    const nodeCmp = cmpt.$mount();
    document.body.appendChild(nodeCmp.$el);

    nodeCmp.remove=function(){
        document.body.removeChild(nodeCmp.$el)
        nodeCmp.$destroy()
    }
    // 村长喊你来搬砖
    return nodeCmp
}
export default create;