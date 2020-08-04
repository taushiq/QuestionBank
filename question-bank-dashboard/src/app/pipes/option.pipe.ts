import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'option'
})
export class OptionPipe implements PipeTransform {

  transform(value: number): unknown {
    switch(value){
      case 1:
        return 'A';
      case 2:
        return 'B';
      case 3:
        return 'C';
      case 4:
        return 'D';
      default:
        return null;    
    }
  }

}
