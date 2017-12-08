import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cardFilter',
  pure: false
})
export class CardFilterPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    
    console.log("haha");
    return value.filter( (item) => item.visible);
  }


}
