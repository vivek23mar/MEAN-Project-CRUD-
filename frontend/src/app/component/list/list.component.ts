import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CreateemployeeService } from 'src/app/services/createemployee.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  
 
  empdata

  constructor(private createSer:CreateemployeeService, private router:Router) { }

  ngOnInit() {
 
    this.createSer.getEmployee()
    .subscribe((res)=>{
     console.log({res})
      this.empdata=res;
    })  

  }

  deleteEmployee(_id){

    this.createSer.deleteEmployee(_id)
    .subscribe((res)=>{

    })
    this.ngOnInit();

  }
    
  editEmployee(id){
    console.log(id)
    this.router.navigateByUrl('/createemploye/'+id)
  }

  
    

}
