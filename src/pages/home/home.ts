import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';




@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
     
     todo ="";
     todolist =[];
   
     AddTodo(){
       if(this.todo === ' ' ){
             window.alert('Please Add Todo');
        }
        else{
          this.todolist.push(this.todo)
          this.todo=""
        }
     }


     
     constructor(public navCtrl: NavController) {
       
    }
    
    
    RemoveTodo(index){
      this.todolist.splice(index)
    }
  

    

}
