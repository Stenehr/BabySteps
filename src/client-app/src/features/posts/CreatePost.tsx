import { observer } from 'mobx-react-lite';
import React, { ChangeEvent, useState } from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';
import { Post } from '../../app/models/post';

function createPost() {
  const initialPost: Post = {
    content: '',
    id: '',
    title: '',
    date: ''
  }

  const [post, setPost] = useState(initialPost);

  function handleSubmit() {
    console.log(post);
  }

  function handleInputChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = event.target;
    setPost({ ...post, [name]: value });
    console.log(post);
  }

  return (
    <Row>
      <Col md={{ span: 10, offset: 1 }}>
        <Form onSubmit={handleSubmit}>
          <Form.Group as={Col}>
            <Form.Label>Pealkiri</Form.Label>
            <Form.Control name="title" type="text" value={post.title} onChange={handleInputChange} />
          </Form.Group>
          <Form.Group as={Col} md="4">
            <Form.Label>Kuupäev</Form.Label>
            <Form.Control name="date" type="date" value={post.date} onChange={handleInputChange} />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>Sisu</Form.Label>
            <Form.Control name="content" as="textarea" rows={10} value={post.content} onChange={handleInputChange} />
          </Form.Group>
          <Form.Group as={Col} md="4">
            <Button className="mr-1" onClick={handleSubmit}>
              Salvesta
            </Button>
            <Button variant="secondary">Tagasi</Button>
          </Form.Group>
        </Form>
      </Col>
    </Row>
  );
}

export default observer(createPost);
