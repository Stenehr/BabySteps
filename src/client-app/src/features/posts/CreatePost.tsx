import { observer } from 'mobx-react-lite';
import React, { ChangeEvent, useEffect, useState } from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router';
import { Post } from '../../app/models/post';
import { useStore } from '../../app/stores/store';
import { v4 as uuid } from 'uuid';
import Routes from '../../app/routes';

function createPost() {
  const initialPost: Post = {
    content: '',
    id: '',
    title: '',
    date: ''
  };

  const { postStore } = useStore();
  const { updatePost, createPost, findPost } = postStore;
  const [post, setPost] = useState<Post | undefined>(initialPost);

  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    async function setPostAsync() {
      if (id) {
        setPost(await findPost(id));
      }
    }
    setPostAsync();
  }, [id, findPost]);

  const history = useHistory();

  function handleSubmit() {
    if (post!.id.length === 0) {
      const newPost = {
        ...post!,
        id: uuid()
      };

      createPost(newPost);

      // TODO - push to details view
      history.push(Routes.posts.path);
    } else {
      updatePost(post!);
      // TODO - push to details view
      history.push(Routes.posts.path);
    }
  }

  function handleInputChange(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = event.target;
    setPost({ ...post!, [name]: value });
  }

  return (
    <Row>
      <Col md={{ span: 10, offset: 1 }}>
        <Form onSubmit={handleSubmit}>
          <Form.Group as={Col}>
            <Form.Label>Pealkiri</Form.Label>
            <Form.Control
              name="title"
              type="text"
              value={post!.title}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group as={Col} md="4">
            <Form.Label>Kuupäev</Form.Label>
            <Form.Control
              name="date"
              type="date"
              value={post!.date}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>Sisu</Form.Label>
            <Form.Control
              name="content"
              as="textarea"
              rows={10}
              value={post!.content}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group as={Col} md="4">
            <Button className="mr-1" onClick={handleSubmit}>
              Salvesta
            </Button>
            <Button variant="secondary" onClick={() => history.goBack()}>Tagasi</Button>
          </Form.Group>
        </Form>
      </Col>
    </Row>
  );
}

export default observer(createPost);
