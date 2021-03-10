import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Albums } from '../albums';
import { AlbumsService } from '../albums.service';
import { Observable } from 'rxjs';
import { Location } from '@angular/common';


@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css']
})
export class AlbumDetailComponent implements OnInit {
  // @ts-ignore
  album: Albums;
  // @ts-ignore
  album$: Observable<Albums>;

  constructor(private route: ActivatedRoute, private router: Router,
              private albumsService: AlbumsService, private location: Location) {
  }

  ngOnInit(): void {
    this.getAlbum();
  }

  getAlbum(): void {
    // @ts-ignore
    const id = +this.route.snapshot.paramMap.get('id');
    this.albumsService.getAlbum(id)
      .subscribe(album => this.album = album);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.albumsService.updateAlbum(this.album)
      .subscribe(() => this.goBack());
  }

}
