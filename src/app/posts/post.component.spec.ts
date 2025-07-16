import { of } from "rxjs";
import { Post } from "../models/post"
import { PostsComponent } from "./posts.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { PostService } from "../Services/post.service";
import { Component, Input } from "@angular/core";
import { By } from "@angular/platform-browser";
import { PostComponent } from "../components/post/post.component";

describe('post component', () => {
  let POSTS: Post[];
  let component: PostsComponent;
  let mockPostService: any;
  let fixture: ComponentFixture<PostsComponent>

  // @Component({
  //   selector: 'app-post',
  //   template: '<div></div>'
  // })
  // class FakePostComponent {
  //   @Input() post!: Post;
  // }

  //before each is used to initilize the component
  beforeEach(() => {
    POSTS = [
      {
        id: 1,
        body: 'post body',
        title: 'title 1'
      },
      {
        id: 2,
        body: 'post body 2',
        title: 'title 2'
      },
      {
        id: 3,
        body: 'post body 3',
        title: 'title 3'
      },
    ];

    mockPostService = jasmine.createSpyObj('PostService',['getPosts', 'deletePost']);

    TestBed.configureTestingModule({
      declarations: [PostsComponent, PostComponent],
      providers: [
        PostsComponent,
        {
          provide: PostService,
          useValue: mockPostService,
        },
      ],
    });

    fixture = TestBed.createComponent(PostsComponent);
    component = fixture.componentInstance;
  });

  describe('delete method', () => {

    it('should create exact same number of post component with Posts', ()=> {
      mockPostService.getPosts.and.returnValue(of(POSTS));
      fixture.detectChanges()
      const postComponents = fixture.debugElement.queryAll(By.directive(PostComponent));
      expect(postComponents.length).toEqual(POSTS.length)
    })

    // it('should create one post element for each post', ()=> {
    //   mockPostService.getPosts.and.returnValue(of(POSTS));
    //   fixture.detectChanges()
    //   const debugElement = fixture.debugElement;
    //   const postsElement = debugElement.queryAll(By.css('.posts'));
    //   expect(postsElement.length).toBe(POSTS.length)
    // })

    it('should delete the selected post from the posts', () => {
      component.posts = [...POSTS]
      mockPostService.deletePost.and.returnValue(of(true))
     component.deletePost(POSTS[1])
      expect(component.posts.length).toBe(2);
      expect(component.posts.find(p => p.id === 2)).toBeUndefined()
    })

    it('should set posts from the service directly', () => {
      mockPostService.getPosts.and.returnValue(of(POSTS));
      component.ngOnInit()
      expect(component.posts.length).toBe(3)
    })
  })
})
