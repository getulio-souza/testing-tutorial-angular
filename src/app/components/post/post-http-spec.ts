import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing"
import { TestBed } from "@angular/core/testing"
import { PostService } from "src/app/Services/post.service"

describe('http post service', () => {

  let postService: PostService;
  let httpTestingController: HttpTestingController

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PostService],
      imports: [HttpClientTestingModule]
    })

    postService = TestBed.inject(PostService)
    httpTestingController = TestBed.inject(HttpTestingController)
  })
  describe('get posts', () => {

  })
})
