import { of } from "rxjs";
import { Post } from "../models/post"
import { PostsComponent } from "./posts.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { PostComponent } from "../components/post/post.component";
import { PostService } from "../Services/post.service";

describe('post component', () => {
  let POSTS: Post[];
  let component: PostsComponent;
  let mockPostService: any;
  let fixture: ComponentFixture<PostsComponent>

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

    mockPostService = jasmine.createSpyObj(['getPosts', 'deletePost']);

    TestBed.configureTestingModule({
      providers: [
        PostsComponent,
        {
          provide: PostService,
          useValue: mockPostService,
        },
      ],
    });

    fixture = TestBed.createComponent(PostsComponent);
    component = fixture.componentInstance
  });

  describe('delete method', () => {
    it('should delete the selected post from the posts', () => {
      component.posts = [...POSTS]
      mockPostService.deletePost.and.returnValue(of(true))
     component.deletePost(POSTS[1])
      expect(component.posts.length).toBe(2);
      expect(component.posts.find(p => p.id === 2)).toBeUndefined()
    })
  })
})
