import { Post } from "src/app/models/post";
import { PostComponent } from "./post.component"
import { first } from "rxjs";

describe('delete post', () => {
  it('should raise and event when the delete method is clicked', () => {
    const component = new PostComponent();
    const post: Post = { id: 1, body: 'body 1', title: 'title 1' }
    component.post = post;

    component.delete.pipe(first()).subscribe((selectedPost) => {
      expect(selectedPost).toEqual(post)
    })
    component.onDeletePost(new MouseEvent('click'))
  })
})
