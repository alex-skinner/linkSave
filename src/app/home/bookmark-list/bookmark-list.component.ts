import { Component, OnInit } from '@angular/core';
import { Bookmark } from 'src/app/shared/bookmark';

@Component({
  selector: 'app-bookmark-list',
  templateUrl: './bookmark-list.component.html',
  styleUrls: ['./bookmark-list.component.less']
})
export class BookmarkListComponent implements OnInit {
  bookmarkList: Bookmark[] = [];

  constructor() { }

  ngOnInit() {
    // Logic to get bookmark list
    this.retrieveBookmarkList();
  }

  retrieveBookmarkList() {
    this.bookmarkList.push({ url: 'http://www.google.com', title: 'Google' }, { url: 'http://www.facebook.com', title: 'Facebook' });
  }

}
