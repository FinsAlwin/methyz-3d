import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import { Container } from "react-bootstrap";

const PublicLayout = () => {
  return (
    <main>
      <NavBar />
      <Container className="p-4 wrapper" fluid>
        <Outlet />
      </Container>
    </main>
  );
};

export default PublicLayout;
