import { Injectable } from '@angular/core';

@Injectable()
export class CuisineTypeService {

  constructor() {
    this.cuisineTypes = window.localStorage.getItem('cuisineTypes')
      ? JSON.parse(window.localStorage.getItem('cuisineTypes'))
      : ['Chinese', 'Indian', 'Italian', 'Thai'];
   }

  cuisineTypes: string[];

  getCuisineTypes() {
    return this.cuisineTypes;
  }

  addNewType(type: string) {
    if (this.isNewType(type) && type !== '') {
      this.cuisineTypes.push(type);
      this.sortTypes();
      this.saveCuisineTypes();
    }
  }

  editType(stale_type: string, fresh_type: string) {
    if (fresh_type !== '' && fresh_type !== stale_type && this.isNewType(fresh_type)) {
      this.cuisineTypes[this.cuisineTypes.indexOf(stale_type)] = fresh_type;
      this.sortTypes();
      this.saveCuisineTypes();
    }
  }

  deleteType(ix: number) {
    this.cuisineTypes.splice(ix, 1);
    this.sortTypes();
    this.saveCuisineTypes();
  }

  private saveCuisineTypes() {
    window.localStorage.setItem('cuisineTypes', JSON.stringify(this.cuisineTypes));
  }

  private sortTypes() {
    this.cuisineTypes.sort((a: string, b: string) => {
      return a < b ? -1 : 1;
    });
  }

  private isNewType(type) {
    const new_type = type.toLocaleLowerCase();
    for (let i = 0; i < this.cuisineTypes.length; i++) {
      if (this.cuisineTypes[i].toLowerCase() === new_type) {
        return false;
      }
    }
    return true;
  }

}
