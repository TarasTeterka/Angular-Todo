import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByPriority'
})
export class FilterByPriorityPipe implements PipeTransform {

  transform(data: any, search: string): any{
   console.log(search);
   if (!search){
      return data;
    }

   return data.filter((el) => {
    return el.title.toLowerCase().indexOf(search.toLowerCase()) > -1;
  });
  }

}
