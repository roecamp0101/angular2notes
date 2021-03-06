import { Pipe, PipeTransform } from '@angular/core';
//The pipe decorator allows us to use the pipe module.
//pipeTransform allows you to transform information within the pipe module

@Pipe({
  name: 'shortenpipe'
})
export class Shortenpipe implements PipeTransform {

    //tranform allows you to transform the data you put into the pipe
    //transform methods has two arguments value and arg
    //limit is a parameter of the value pipe
    //stringAdded is another parameter of the value pipe
  
  //for the 'value' of a custom pipe you attatch some javascript method, whether it is a string, number, or array. Whatever input you need you attatch that javascript method to it.
    transform(value: any, limit: number, stringAdded: string): any {
        return value.substr(0, 10) + '...';//substr is the built in javascript method substring. Which limited number of values
        //add + '...' gives a continue '... ' so that it is known that the string has been shorted.
    
    
                //you can test to see if string is more than 10 characters

                    /*
                    if(value.length > 10) {
                        return value.substr(0, 10) + '...'
                    }
                    else {
                        return value
                    }
                */
                                               
                                               
                 /* 
                 
                
                //The paremeters are added within in the class, but the numbers or sting are added within the template 
                 //Adding a parameter to a custom pipe ('limit' is the parameter of the value pipe)
                   if(value.length > limit) {
                        return value.substr(0, limit) + '...' + stringAdded; ('stringAdded' is another parameter of the value pipe that will be initilaized with some string value)
                    }
                    else {
                        return value
                    }
                    
                    */
        
        
    }

}
