import { observer } from 'mobx-react-lite';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { Post } from '../../app/models/post';
import { useStore } from '../../app/stores/store';
import Routes from '../../app/routes';
import { Button } from 'react-bootstrap';

import LoadingSpinner from '../shared/LoadingSpinner';

function PostDetails() {
  const { id } = useParams<{ id: string }>();

  const { postStore } = useStore();
  const [post, setPostDetails] = useState<Post | undefined>(undefined);

  useEffect(() => {
    const setPost = async () => {
      debugger;
      postStore.setPostDetailsLoading(true);
      const foundPost = await postStore.findPost(id)!
      setPostDetails(foundPost);
      postStore.setPostDetailsLoading(false);
      debugger;
    };
    setPost();
  }, []);

  if (postStore.postDetailsLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div>
      <h1>{post!.title}</h1>
      <Button
        variant="warning"
        as={Link}
        to={Routes.editPost.createPathWithId!(post!.id!)}
      >
        Muuda
      </Button>
    </div>
  );
}

export default observer(PostDetails);
