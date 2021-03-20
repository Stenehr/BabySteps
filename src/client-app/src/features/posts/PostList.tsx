import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import { Col, ListGroup, Row, Spinner } from 'react-bootstrap';
import { useStore } from '../../app/stores/store';

function postList() {
  const { postStore } = useStore();

  useEffect(() => {
    postStore.loadPosts();
  }, [postStore]);

  if (postStore.loadingPosts) {
    return (
      <Row>
        <Col>
          <Spinner animation="border" />
        </Col>
      </Row>
    );
  }

  return (
    <ListGroup>
      {postStore.posts.map((post) => (
        <ListGroup.Item key={post.id}>{post.title}</ListGroup.Item>
      ))}
    </ListGroup>
  );
}

export default observer(postList);
