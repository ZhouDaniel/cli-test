import React,{Component,useState,useEffect} from 'react';
// export class Demo extends React.Component{
//     state = {number:0};
//     add = ()=>{
//         this.setState({number:this.state.number+1});
//     };
//     componentDidMount(){
//         this.changeTitle();
//     }
//     componentDidUpdate(){
//         this.changeTitle();
//     }
//     changeTitle = ()=>{
//         console.log(`你已经点击了${this.state.number}次`)
//     };
//     render(){
//         return (
//             <>
//               <p>{this.state.number}</p>
//               <button onClick={this.add}>+</button>
//             </>
//         )
//     }
// }
export function Demo(){
    let [number,setNumber] = useState(0);
    let [text,setText] = useState('');
    // 相当于componentDidMount 和 componentDidUpdate
    useEffect(()=>{
        console.log('开启一个新的定时器')
        let $timer = setInterval(()=>{
            setNumber(number=>number+1);
        },1000);
        // useEffect 如果返回一个函数的话，该函数会在组件卸载和更新时调用
        // useEffect 在执行副作用函数之前，会先调用上一次返回的函数
        // 如果要清除副作用，要么返回一个清除副作用的函数
       /*  return ()=>{
            console.log('destroy effect');
            clearInterval($timer);
        } */
    });
    // },[]);//要么在这里传入一个空的依赖项数组，这样就不会去重复执行
    return (
        <>
          <input value={text} onChange={(event)=>setText(event.target.value)}/>
          <p>{number}</p>
          <button>+</button>
        </>
    )
}