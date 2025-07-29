import { HttpClient } from "@angular/common/http"
import { TestBed } from "@angular/core/testing"
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

export let testUrl = '/data'

interface Data {
    name:string
}

describe('http client testing module', ()=> {
    let httpClient: HttpClient;
    let httpTestingController: HttpTestingController

    beforeEach(()=> {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule]
        });
        httpClient = TestBed.inject(HttpClient);
        httpTestingController = TestBed.inject(HttpTestingController)
    })


  it('should call the testing url with get request', () => {
    const testData: Data = {name: 'getulio souza'}
    httpClient.get<Data>(testUrl).subscribe((data: any) => {
      expect(data).toEqual(testData)
    });
    const request = httpTestingController.expectOne(testUrl);
    request.flush(testData)
  })

  it('should test multiple requests', () => {

  })

})
