import { Component, OnInit } from '@angular/core';
import { CuisineTypeService } from '../services/cuisine-type.service';

@Component({
  selector: 'app-cuisine-type-list',
  templateUrl: './cuisine-type-list.component.html',
  styleUrls: ['./cuisine-type-list.component.css']
})
export class CuisineTypeListComponent implements OnInit {

  ctService: CuisineTypeService;
  cuisineTypes: string[] = [];

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

  saveNewType ()  {
    this.ctService.addNewType(this.newType.type);
    this.cancelNewType();
  }
  saveEditedType ()  {
    this.ctService.editType(this.editedType.stale, this.editedType.fresh);
    this.cancelEditType();
  }
  deleteType(ix) {
    if (this.editedType.editing) {
      this.cancelEditType();
    }
    this.ctService.deleteType(ix);
  }
  addNewType ()  {
    if (this.editedType.editing) {
      this.cancelEditType();
    }
    this.newType.adding = true;
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

  cancelEditType ()  {
    this.editedType.editing = false;
    this.editedType.index = -1;
    this.editedType.stale = '';
    this.editedType.fresh = '';
  }

  constructor(ctService: CuisineTypeService) {
    this.ctService = ctService;
  }

  ngOnInit() {
    this.cuisineTypes = this.ctService.getCuisineTypes();
  }
}
