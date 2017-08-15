import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
	name:string;
	salary:string;
	age:number;
	email:string;
	address:Address;
	hobbies:string[];
	hello:any;
  posts:Post[];
  isEdit:boolean = false;

  constructor(private dataService:DataService) { 
  	console.log('constructor ran..');
  }

  ngOnInit() {
  	console.log('ngOnInit ran...');
  	this.name = 'Jyotsna Singh';
  	this.salary = '15,00,000/- 15LPA';
  	this.age = 23;
  	this.address = {
  		street:'2704, FF, Sec-46',
  		city: 'Gurgaon',
  		state: 'HR'
  	}

  	this.hobbies = ['Travel', 'Reading', 'Marathon'];

    this.dataService.getPosts().subscribe((posts) => {
     // console.log(posts);
     this.posts = posts;
    });
  }

  onClick(){
  	this.name='Ford Ecosport';
  	this.hobbies.push('New Hobby');
  }

  addHobby(hobby){
  	console.log(hobby);
  	this.hobbies.unshift(hobby);
  	return false;
  }

  deleteHobby(hobby){
  	for(let i = 0; i<this.hobbies.length; i++){
  		if(this.hobbies[i] == hobby){
  			this.hobbies.splice(i, 1);
  		}
  	}
  }

  toggleEdit(){
    this.isEdit = !this.isEdit;
  }

}

interface Address{
		street:string,
		city:string,
		state:string
}

interface Post{
    id: number,
    title: string,
    body: string,
    userId: number
}