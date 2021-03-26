import { observer } from 'mobx-react-lite';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Post } from '../../app/models/post';
import { useStore } from '../../app/stores/store';

function PostDetails() {
  const { id } = useParams<{ id: string }>();

  const { postStore } = useStore();
  const [postDetails, setPostDetails] = useState<Post | undefined>(undefined);

  useEffect(() => {
    const setPost = async () => {
      const post = await postStore.findPost(id)!;
      setPostDetails(post!);
    }
    setPost();
  });

  return (
    <div>
      <h1>{postDetails?.title}</h1>
    </div>
  );
}

export default observer(PostDetails);
