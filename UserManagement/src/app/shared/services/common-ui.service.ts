import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class CommonUiService {
  constructor(private toaster: ToastrService) {}

  getFilterColumnList(columnArray, headers) {
    const filterColumnList = [];
    const headersList = headers;
    for (const i of columnArray) {
      filterColumnList.push({
        text: headersList[i],
        id: i
      });
    }

    return filterColumnList;
  }

  addColumnMethod(columns, valueList) {
    const columnsItem = columns;
    const valueListItem = valueList;
    const newColumns = columnsItem.map(obj => obj.id);
    let newArray = [];
    valueListItem.forEach(obj => {
      const valueListArray = Object.keys(obj);
      newArray = valueListArray.filter(value => {
        return -1 !== newColumns.indexOf(value);
      });
    });
    return newArray;
  }

  columnMethod(newArray: any[], valueList) {
    const valueListItem = valueList;
    const listArray = valueListItem.map(object => {
      const localVar = {};
      for (const key of Object.keys(object)) {
        for (const arr of newArray) {
          if (arr === key) {
            localVar[key] = object[key];
          }
        }
      }
      return localVar;
    });
    return listArray;
  }
}
