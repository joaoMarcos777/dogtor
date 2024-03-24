import petsImage from "../../assets/pets.svg";
import womanImage from "../../assets/woman-with-dog.jpg";
import pinto from "../../assets/pinto.png";
import {
  Container,
  Navbar,
  Content,
  IntroSection,
  CareULoveSection,
  HowItWorksSection,
  Footer,
} from "./styles";

import { Section } from "../../components/section";

export function Landpage() {
  return (
    <Container>
      <Navbar>
        <h1>Dogtor</h1>

        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Serviços</a>
          </li>
          <li>
            <a href="#">Sobre nós</a>
          </li>
        </ul>
        <div className="buttons">
          <button>Login</button>
          <button>Cadastre-se</button>
        </div>

        {/* <i class="ph-bold ph-list"></i>
        <i class="ph-bold ph-x hidden"></i> */}
      </Navbar>

      <Content>
        <IntroSection>
          <img src={petsImage} alt="" />
          <div class="content">
            <h1>
              O <span>melhor</span> lugar para cuidar da saúde do seu pet
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
              pretium metus libero, id bibendum augue dignissim nec. Curabitur
              non pretium elit, in vulputate ex. Orci varius natoque penatibus
              et magnis dis parturient montes, nascetur ridiculus mus. Donec at
              risus ut urna venenatis tempus quis id lectus.
            </p>
          </div>
        </IntroSection>
        <CareULoveSection>
          <div class="bg-title">
            <h1>Cuide de quem te ama</h1>
          </div>
          <img src={womanImage} alt="" />
        </CareULoveSection>
        <HowItWorksSection>
          <Section title="Como funciona">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
              pretium metus libero, id bibendum augue dignissim nec. Curabitur
              non pretium elit, in vulputate ex. Orci varius natoque penatibus
              et magnis dis parturient montes, nascetur ridiculus mus. Donec at
              risus ut urna venenatis tempus quis id lectus.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
              pretium metus libero, id bibendum augue dignissim nec. Curabitur
              non pretium elit, in vulputate ex. Orci varius natoque penatibus
              et magnis dis parturient montes, nascetur ridiculus mus. Donec at
              risus ut urna venenatis tempus quis id lectus.
            </p>
          </Section>
          <Section title="Cliente">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
              pretium metus libero, id bibendum augue dignissim nec. Curabitur
              non pretium elit, in vulputate ex. Orci varius natoque penatibus
              et magnis dis parturient montes, nascetur ridiculus mus. Donec at
              risus ut urna venenatis tempus quis id lectus.
            </p>
          </Section>
          <Section title="Clínicas">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
              pretium metus libero, id bibendum augue dignissim nec. Curabitur
              non pretium elit, in vulputate ex. Orci varius natoque penatibus
              et magnis dis parturient montes, nascetur ridiculus mus. Donec at
              risus ut urna venenatis tempus quis id lectus.
            </p>
          </Section>
        </HowItWorksSection>
        <Footer>
          <div class="bg-img">
            <img src={pinto} alt="" />
          </div>
          <div class="text">
            <h1>Contato</h1>
            <p>(31) 9 8999-8888</p>
            <p>dogtor@gmail.com</p>
          </div>
        </Footer>
      </Content>
    </Container>
  );
}
