import { Component, OnInit } from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  genders = ['male','female']
  signupForm!:FormGroup
forbiddenUsernames = ['arul','kumar']
ngOnInit() {
  this.signupForm = new FormGroup({
    'username' : new FormControl(null,[Validators.required]),
    'email': new FormControl(null,[Validators.required,Validators.email], this.forbiddenEmails.call),
    'gender':new FormControl('male',[Validators.required]),
    'hobbies':new FormArray([])
  });
  // this.signupForm.valueChanges.subscribe((value) => {console.log(value);
  this.signupForm.statusChanges.subscribe((status) => {console.log(status);
  })
}
onSubmit(){
  console.log(this.signupForm);
  this.signupForm.reset()
}
get hobyFormArray(){
return this.signupForm.get('hobbies') as FormArray;
}
onAddHobby(){
  const control = new FormControl(null,Validators.required);
  this.hobyFormArray.push(control);
// (<FormArray>this.signupForm.get('hobbies')).push(control);

}
// forbiddenNames(control:FormControl):{[s:string]:boolean}{
//   if(this.forbiddenUsernames.indexOf(control.value) !== -1){
//     return {'nameIsForbidden':true}
//   }
//   // return null;

forbiddenEmails(control:FormControl):Promise<any> | Observable<any> |undefined{
  const promise = new Promise<any>((resolve,reject) =>{
    setTimeout(() => {
      if(control.value === 'arul@gmail.com'){
        resolve({'emailIsForbidden':true});
      }else{
        resolve (null)
      }
    }, 15000);
  } )
  return promise
}
}






  // @ViewChild('f') signUpForm!:NgForm
  // answer = ''
  // gender = ['male','female']
  // defaultValue = 'teacher'
  // user = {
  //   username:'',
  //   email:'',
  //   secret:'',
  //   answer:'',
  //   g:''
  // }
  // submitted = false
  // suggestUserName() {
  //   const suggestedName = 'Superuser';
  // //   this.signUpForm.setValue({
  // //     UserData:{
  // //       username:suggestedName,
  // //       email:''
  // //     },
  // //     secret:'pet',
  // //     questionAnser:'money',
  // //     g:'male'
  // //   })
  // // this.signUpForm.form.patchValue({
  // //  g:'female'

  // //   }
  // // )
  // }
  
  // // onSubmit(form:NgForm){
  // //   console.log(form);
    
  // // }
  // onSubmit(){
  // //  console.log(this.signUpForm);
  // this.submitted = true
  //   this.user.username = this.signUpForm.value.UserData.username;
  //   this.user.email = this.signUpForm.value.UserData.email;
  //   this.user.secret = this.signUpForm.value.secret;
  //   this.user.answer = this.signUpForm.value.questionAnser;
  //   this.user.g = this.signUpForm.value.g;
  //   this.signUpForm.reset()
  // }
// }
