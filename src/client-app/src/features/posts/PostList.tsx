import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { useStore } from '../../app/stores/store';
import Routes from '../../app/routes';
import { Link } from 'react-router-dom';

import LoadingSpinner from '../shared/LoadingSpinner';

function postList() {
  const { postStore } = useStore();

  useEffect(() => {
    postStore.loadPosts();
  }, [postStore]);

  function cutTextAfter(text: string, cutAfter: number) {
    return text.length > cutAfter ? `${text.substr(0, cutAfter)}...` : text;
  }

  if (postStore.loadingPosts) {
    return <LoadingSpinner />;
  }

  return (
    <Row>
      {postStore.posts.map((post, index) => (
        <Col md={4} key={index} className="pb-3">
          <Card>
            <Card.Body>
              <Card.Title title={post.title}>{cutTextAfter(post.title, 60)}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                {post.date}
              </Card.Subtitle>
              <Card.Text>{cutTextAfter(post.content, 200)}</Card.Text>
              <Card.Link
                as={Link}
                to={Routes.postDetails.createPathWithId!(post.id)}
              >
                Loe rohkem...
              </Card.Link>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default observer(postList);
