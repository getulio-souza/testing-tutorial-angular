import { TestBed } from "@angular/core/testing"
import { PostService } from "../Services/post.service"
import { HttpClient } from "@angular/common/http";
import { of } from "rxjs";

describe('post service', ()=> {
    let postService: PostService;
    let httpClientSpy: jasmine.SpyObj<HttpClient>

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
        httpClientSpy = jasmine.createSpyObj('HttpClient', ['get'])
        postService = new PostService(httpClientSpy)
    })

    describe('getPosts()', ()=> {
        it('should return expected posts when get post is called', (done: DoneFn)=> {
            httpClientSpy.get.and.returnValue(of(POSTS));
            postService.getPosts().subscribe({
                next: (posts) => {
                    expect(posts).toEqual(POSTS)
                    done()
                }, 
                error: (err) => {

                }
            })
            expect(httpClientSpy.get).toHaveBeenCalledTimes(2);
        })
    })
})