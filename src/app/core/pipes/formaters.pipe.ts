import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contactpipe'
})
export class ContactPipe implements PipeTransform {

  transform(value: string, args?: any): any {



    return "ashish";

  }
}