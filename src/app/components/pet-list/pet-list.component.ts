import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource, MatTable } from '@angular/material/table';
import { PetService } from 'src/app/service/pet.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Pet } from 'src/app/shared/pet';

@Component({
  selector: 'app-pet-list',
  templateUrl: './pet-list.component.html',
  styleUrls: ['./pet-list.component.scss']
})
export class PetListComponent implements OnInit {

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  selectedIndex: number = 0;

  petForm: FormGroup;

  petsArray: Pet[] = [];

  displayedColumns: string[] = ['id', 'owner', 'name', 'age', 'type'];

  constructor(private petService: PetService) { }

  ngOnInit() {
    this.petForm = new FormGroup({
      'owner': new FormControl('', Validators.required),
      'name': new FormControl('', Validators.required),
      'age': new FormControl('', [Validators.required, Validators.min(1)]),
      'photo': new FormControl('', Validators.required),
      'type': new FormControl('', Validators.required)
    });

    this.getPets();
  }

  getPets() {
    this.petService.getPets().subscribe(res => {
      this.petsArray = res;
    });
  }

  addPet() {
    console.log(this.petForm.value);
    this.petService.addPet({
      "owner": this.petForm.value.owner,
      "name": this.petForm.value.name,
      "age": this.petForm.value.age,
      "photo": this.petForm.value.photo,
      "type": this.petForm.value.type
    }).subscribe(res => {
      this.petForm.reset();
      this.selectedIndex = 0;
      this.getPets();
    },
      err => {
        console.log(err);
      })
  }

}
