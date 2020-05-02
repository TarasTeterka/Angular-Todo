import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByPriority'
})
export class FilterByPriorityPipe implements PipeTransform {

  transform(data: any, searchPriority: string): any{
    console.log(searchPriority);
    if (!searchPriority){
       return data;
     }

    return data.filter((elem) => {
     return elem.priority.toLowerCase().indexOf(searchPriority.toLowerCase()) > -1;
   });
   }


}
