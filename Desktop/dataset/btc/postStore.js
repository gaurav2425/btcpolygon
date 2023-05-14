import {observable, action} from 'mobx';
import axios from 'axios';

class PostStore {
  @observable postResponse = null;

  @action async createPost(title, body) {
    try {
      const response = await axios.post(
        'https://jsonplaceholder.typicode.com/posts',
        {
          title,
          body,
          userId: 1,
        },
      );
      this.postResponse = response.data;
    } catch (error) {
      console.error('Error creating post:', error);
    }
  }
}

const postStore = new PostStore();
export default postStore;
