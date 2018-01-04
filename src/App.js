import React, { Component } from 'react';
import './App.css';

let bobb = ()=>{
    return(
        <div>телепузики - спать пора</div>
    )
}

class Task extends Component{
   constructor(title = Task.getDefaultTitle()) {
       super();
       this.title = title;
       this.done = 'проверка'
   }
   // get Done(){
   //     return this.done ===true ? 'выполнена':'не выполнена';
   // }
   set Done(value){
       if (value !==undefined && typeof  value === 'boolean'){
           this.done = value;
       }else {
           console.error('укажите верное значение')
       }
   }

   complete(){
       this.done = 'проверкаИзменена'
       let fafa = 'вернем фафа';
       return(
       <div>{fafa}{this.done}</div>)
   }

   static getDefaultTitle(){
       return 'задача'
   }

  render(){
      let task = new Task('убрать комнату');

      return(
          <div>

              {task.done}
              {task.title}
              <br/>
              {task.complete()}
              <br/>
              {Task.getDefaultTitle()}
              <br/>
              {task.title}
              {bobb()}

          </div>
      )
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
          <Task/>
      </div>
    );
  }
}

export default App;
