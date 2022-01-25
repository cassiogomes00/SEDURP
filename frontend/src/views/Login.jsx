import Wrapper from '../assets/styles/globalStyle';
import LoginCard from '../components/Login/LoginCard/LoginCard';
import Nav from '../components/Ui/Nav/Nav';

export default function Login() {
  return (
    <Wrapper>
      <Nav />
      <LoginCard />
    </Wrapper>
  );
}
