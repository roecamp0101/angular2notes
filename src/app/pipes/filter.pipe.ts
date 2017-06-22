import { Pipe, PipeTransform } from '@angular/core';
//The pipe decorator allows us to use the pipe module.
//pipeTransform allows you to transform information within the pipe module

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
    
   //tranform allows you to transform the data you put into the pipe
    //transform methods has two arguments value and arg
  transform(value: any, input: string) {
      //code to filter input box
        if (input) {
            input = input.toLowerCase();
            return value.filter(function (el: any) {
                return el.toLowerCase().indexOf(input) > -1;
            })
        }
        return value;
    }
}
