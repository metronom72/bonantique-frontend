import { Component, OnInit } from '@angular/core';
import * as csv from 'csvtojson';
import { BondsService } from '../../common/services/bonds.service';
import { Bond } from '../../common/bond';
import { Router } from '@angular/router';

@Component({
  selector: 'ba-bonds',
  templateUrl: './bonds.component.html',
  styleUrls: ['./bonds.component.scss']
})
export class BondsComponent implements OnInit {

  constructor(
    private bondsService: BondsService,
    private router: Router,
  ) { }

  ngOnInit() { }

  private handleFileInput = async (event) => {
    await this.handleFiles(event.target.files);
  }
  private handleFiles = async (files) => {
    if ((window as any).FileReader) {
      // FileReader are supported.
      await this.getAsText(files[0]);
    } else {
      alert('FileReader are not supported in this browser.');
    }
  }

  private getAsText = async (fileToRead) => {
    const reader = new FileReader();
    reader.readAsText(fileToRead);
    reader.onload = async (event) => {
      const bonds: Bond[] = []
      await csv({flatKeys: true})
        .fromString((event.target as any).result)
        .subscribe((bond) => {
          bonds.push(bond);
        });
      this.bondsService.bondsToImport = bonds;
      await this.router.navigateByUrl('/admin/bonds/import');
    };
    reader.onerror = (event) => {
      console.log(event);
    };
  }

}
