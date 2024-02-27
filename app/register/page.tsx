import RegisterForm from "../RegisterForm";
import Container from "../components/Container";
import FromWrap from "../components/FromWrap";

const Register = () => {
    return (
        <Container>
            <FromWrap>
                <RegisterForm/>
            </FromWrap>
        </Container>
     );
}
 
export default Register;