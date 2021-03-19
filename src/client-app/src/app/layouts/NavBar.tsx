import React from 'react';
import { Button, Container, Menu } from 'semantic-ui-react';

function NavBar() {
  return (
    <Menu secondary>
      <Container>
        <Menu.Item header>Beebi sammud</Menu.Item>
        <Menu.Item name="Postitused" />
        <Menu.Item>
          <Button positive content="Lisa postitus" />
        </Menu.Item>
      </Container>
    </Menu>
  );
}

export default NavBar;
