import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import {
  Accordion,
  Button,
  ButtonGroup,
  Card,
  Col,
  Row,
  Spinner
} from 'react-bootstrap';
import { useStore } from '../../app/stores/store';
import Routes from '../../app/routes';
import { Link } from 'react-router-dom';

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
    <Accordion>
      {postStore.posts.map((post, index) => (
        <Card key={index}>
          <Accordion.Toggle as={Card.Header} eventKey={index.toString()}>
            <Row>
              <Col sm={8}>
                <h3>{post.title}</h3>
              </Col>
              <Col sm={4}>
                <span>{post.date}</span>
              </Col>
            </Row>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey={index.toString()}>
            <Card.Body>
              <Row>
                <Col sm={12}>{post.content}</Col>
              </Row>
              <Row className="mt-3">
                <Col sm={12}>
                  <ButtonGroup size="sm" className="pr-2">
                    <Button
                      as={Link}
                      to={Routes.postDetails.createPathWithId!(post.id)}
                    >
                      Detailid
                    </Button>
                    <Button
                      variant="warning"
                      as={Link}
                      to={Routes.editPost.createPathWithId!(post.id)}
                    >
                      Muuda
                    </Button>
                    <Button variant="danger">Kustuta</Button>
                  </ButtonGroup>
                </Col>
              </Row>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      ))}
    </Accordion>
  );
}

export default observer(postList);
