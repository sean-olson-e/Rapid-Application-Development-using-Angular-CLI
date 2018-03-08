import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cuisine-type-list',
  templateUrl: './cuisine-type-list.component.html',
  styleUrls: ['./cuisine-type-list.component.css']
})
export class CuisineTypeListComponent implements OnInit {
  cuisineTypes: string[] = ['Chinese', 'Indian', 'Italian', 'Thai'] ;
  newType = {
    adding: false,
    type: ''
  };
  editedType = {
    editing: false,
    index: -1,
    stale: '',
    fresh: ''
  };

  sortTypes ()  {
    this.cuisineTypes.sort((a: string, b: string) => {
      return a < b ? -1 : 1;
    });
  }

  isNewType ()  {
    const new_type = this.newType.type.toLocaleLowerCase();
    for (let i = 0; i < this.cuisineTypes.length; i++) {
      if (this.cuisineTypes[i].toLowerCase() === new_type){
        return false;
      }
    }
    return true;
  }

  addNewType ()  {
    if (this.editedType.editing) {
      this.cancelEditType();
    }
    this.newType.adding = true;
  }

  saveNewType ()  {
    if (this.newType.type !== '' && this.isNewType()) {
      this.cuisineTypes.push(this.newType.type);
      this.sortTypes();
    }
    this.cancelNewType();
  }

  cancelNewType ()  {
    this.newType.adding = false;
    this.newType.type = '';
  }

  editType(ix) {
    if (this.newType.adding) {
      this.cancelNewType();
    }
    this.editedType.editing = true;
    this.editedType.index = ix;
    this.editedType.stale = this.cuisineTypes[ix];
    this.editedType.fresh = this.editedType.stale;
  }
  deleteType(ix) {
    if (this.editedType.editing) {
      this.cancelEditType();
    }
    this.cuisineTypes.splice(ix, 1);
  }
  saveEditType ()  {
    if (this.editedType.fresh !== '' && this.editedType.fresh !== this.editedType.stale) {
      this.cuisineTypes[this.editedType.index] = this.editedType.fresh;
      this.sortTypes();
    }
    this.cancelEditType();
  }
  cancelEditType ()  {
    this.editedType.editing = false;
    this.editedType.index = -1;
    this.editedType.stale = '';
    this.editedType.fresh = '';
  }
  constructor() {}

  ngOnInit() {}
}
