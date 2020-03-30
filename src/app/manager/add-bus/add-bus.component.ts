import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BusService } from 'src/app/_services/bus.service.1';
import { BusStructureService } from 'src/app/_services/bus-structure.service';
import { UserService } from 'src/app/_services/user.service.1';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-bus',
  templateUrl: './add-bus.component.html',
  styleUrls: ['./add-bus.component.css']
})
export class AddBusComponent implements OnInit {
  company : string;
  logo : string; 
  branch : string; 

  addBusForm : FormGroup;

  busStructures;
  structureNames;
  currentStructure;

  buses = [];

  bus = {number:"Enter Bus Number",type:"Ordinary"}

  constructor(private router: Router, private formBuilder : FormBuilder,private busService : BusService, private busStructureService : BusStructureService, private userService : UserService) {
    this.company = this.userService.company;
    this.logo = this.userService.companyLogo;
    this.branch = JSON.parse(this.userService.currentUserValue).branch;

    this.structureNames = busStructureService.getBusStructureNames()
    this.busStructures = busStructureService.busStructures;
    this.currentStructure = this.busStructures[this.structureNames[0]];
    
    this.addBusForm = this.formBuilder.group({
      bus_number: ['', Validators.required],
      structure:[this.currentStructure, Validators.required],
      bus_type:['Ordinary', Validators.required]
    });
  }

  ngOnInit() {
    this.busService.getBusColl().snapshotChanges().subscribe(data=>{
      this.buses = data
    });
  }

  get f() { return this.addBusForm.controls; }

  changeStructure(event){
    this.currentStructure = this.busStructures[event.target.value]
  }

  reserveOrUnreserveSeat(seat){
    if (seat.state == "available"){
      const res = confirm(`Reserve seat ${seat.number}?`)
      if (res){
        this.currentStructure.structure[seat.index] = this.busStructureService.reservedSeat(seat.index, seat.number)
      }
    }else if(seat.state == "reserved"){
      const res = confirm(`Unreserve seat ${seat.number}?`)
      if (res){
        this.currentStructure.structure[seat.index] = this.busStructureService.passengerSeat(seat.index, seat.number)
      }
    }
  }

  addBus(){
    if(this.addBusForm.invalid){
      alert('Invalid Information');
      return
    }

    if(this.buses.filter(bus=>{return bus.payload.doc.data().number===this.f.bus_number.value}).length){
      alert(`The bus "${this.f.bus_number.value}" already exists`)
      return
    }

    let newBus = {
      number:this.f.bus_number.value, 
      bus_type : this.f.bus_type.value, 
      cols : this.currentStructure.cols,
      schedule : null,
      company : this.company,
      logo : this.logo
    }

    let structure = this.currentStructure.structure;
    
    this.busService.register(newBus, structure).then(()=>{
      this.router.navigate([`/bus-list/${newBus.number}`])
    })
  }

}
