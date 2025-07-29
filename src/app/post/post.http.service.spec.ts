import { TestBed } from "@angular/core/testing"
import { PostService } from "../Services/post.service"
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing"
import { testUrl } from "./httpclient.testing.spec"

describe('postService (httpClientTestingModule)', ()=> {
    let postService: PostService;
    let httpTestingController: HttpTestingController

    let POSTS = [
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

    beforeEach(()=> {
        TestBed.configureTestingModule({
            providers: [PostService],
            imports: [HttpClientTestingModule]
        })
        postService = TestBed.inject(PostService);
        httpTestingController = TestBed.inject(HttpTestingController)
    })

    describe('get Posts', ()=> {
        it('should get posts when getPosts() is called', (done: DoneFn)=> {
            postService.getPosts().subscribe((data: any)=> {
                expect(data).toEqual(POSTS)
                done()
            })
            const request = httpTestingController.expectOne('https://jsonplaceholder.typicode.com/posts');
            request.flush(POSTS)
            expect(request.request.method).toBe('GET')
        })
    })
})