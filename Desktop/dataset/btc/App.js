import React, {useState} from 'react';
import {View, TextInput, Button, Text} from 'react-native';
import {observer} from 'mobx-react';
import {useObserver} from 'mobx-react-lite';

import postStore from './postStore';

const CreatePostComponent = observer(() => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleCreatePost = () => {
    postStore.createPost(title, body);
  };

  return useObserver(() => (
    <View>
      <TextInput placeholder="Title" value={title} onChangeText={setTitle} />
      <TextInput placeholder="Body" value={body} onChangeText={setBody} />
      <Button title="Create Post" onPress={handleCreatePost} />
      {postStore.postResponse && (
        <Text>Post created with ID: {postStore?.postResponse?.id}</Text>
      )}
    </View>
  ));
});

export default CreatePostComponent;
