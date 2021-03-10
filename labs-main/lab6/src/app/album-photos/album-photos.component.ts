import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { Albums } from '../albums';
import { AlbumsService } from '../albums.service';
import { Photos } from '../photos';
import { Location } from '@angular/common';



@Component({
  selector: 'app-album-photos',
  templateUrl: './album-photos.component.html',
  styleUrls: ['./album-photos.component.css']
})
export class AlbumPhotosComponent implements OnInit {
  // @ts-ignore
  album: Albums;
  photos: Photos[] = [];

  constructor(private route: ActivatedRoute, private router: Router, private albumsService: AlbumsService, private location: Location) { }

  ngOnInit(): void {
    this.getAlbumAndPhotos();
  }

  getAlbumAndPhotos(): void {
    // @ts-ignore
    const id = +this.route.snapshot.paramMap.get('id');
    this.albumsService.getAlbum(id)
      .subscribe(album => this.album = album);
    this.albumsService.getPhotos(id)
      .subscribe(photos => this.photos = photos);
  }

  goBack(): void {
    this.location.back();
  }

}
