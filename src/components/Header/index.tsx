import Image from "next/image";
import { Container, Content } from "./styles";
import logo from "../../../public/logo.png"

export function Header (){
    return(
        <Container>
            <Content>
                <h1 className="title">MARVEL</h1>
                <strong className="subTitle">CHARACTERS</strong>
            </Content>
        </Container>
    )
}