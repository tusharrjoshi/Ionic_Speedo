import { Inject,Component, OnInit , ElementRef} from '@angular/core';
import { NgxIndexedDBService } from 'ngx-indexed-db';
import { DOCUMENT } from '@angular/common'; 
// import { DragAndDropModule } from 'angular-draggable-droppable';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit {

  constructor(private dbService: NgxIndexedDBService, @Inject(DOCUMENT) document: Document) { }
  ngOnInit() {
   
    document.getElementById("btn").addEventListener("dragstart", this.dragstart)
    document.getElementById("myiframe").addEventListener("dragover", this.dragover)

    }
   
    dragover(event) {
      console.log("dragover")
    }
    dragstart(){
      console.log("dragstart")
    }
    allowDrop(ev){
      ev.preventDefault()
      console.log("dragovr")
    }
    edrop(ev){
      ev.preventDefault()
      console.log("dropped")
      window.frames["myiframe"].document.getElementById("name").innerHTML="<button>I am working!</button>"
    }
    myfunc(){
      
      console.log
      window.frames["myiframe"].document.getElementById("name").innerHTML="<button>I am working!</button>"
    }

}
