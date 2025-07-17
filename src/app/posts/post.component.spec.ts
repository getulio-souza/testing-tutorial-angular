import { of } from "rxjs";
import { Post } from "../models/post"
import { PostsComponent } from "./posts.component";
import { ComponentFixture, fakeAsync, TestBed, tick } from "@angular/core/testing";
import { PostService } from "../Services/post.service";
import { Component, Input } from "@angular/core";
import { By } from "@angular/platform-browser";
import { PostComponent } from "../components/post/post.component";
import { RouterTestingModule } from "@angular/router/testing";

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
      imports: [RouterTestingModule],
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

    it('should create exact same number of Post component with posts',()=> {
      mockPostService.getPosts.and.returnValue(of(POSTS));
      fixture.detectChanges() //like calling ngOnInit from the component 
      const postComponent = fixture.debugElement.queryAll(By.directive(PostComponent))
      expect(postComponent.length).toEqual(POSTS.length)
    })

    //testing a single post 

    it('should test if each post title matches each post title from the POSTS', ()=> {
      mockPostService.getPosts.and.returnValue(of(POSTS));
      fixture.detectChanges();
      const postComponentDebugElement = fixture.debugElement.queryAll(By.directive(PostComponent));

      //iterates the POSTS array to check each title individuality
      for(let i= 0; i< postComponentDebugElement.length; i++){
        let postComponentInstance = postComponentDebugElement[i].componentInstance as PostComponent
        expect(postComponentInstance.post.title).toBe(POSTS[i].title)
      }
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
