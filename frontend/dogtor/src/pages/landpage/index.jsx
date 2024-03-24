import petsImage from "../../assets/pets.svg";
import womanImage from "../../assets/woman-with-dog.jpg";
import pinto from "../../assets/pinto.png";
import { PiList, PiX } from "react-icons/pi";
import { useState, useEffect, useRef } from "react";
import {
  Container,
  Navbar,
  NavbarMenu,
  Content,
  IntroSection,
  CareULoveSection,
  HowItWorksSection,
  Footer,
} from "./styles";
import { Section } from "../../components/section";

export function Landpage() {
  const openMenuButton = useRef(null);
  const closeMenuButton = useRef(null);
  const menu = useRef(null);

  function handleOpenMenuButtonClick() {
    changeMenuAnimation();

    menu.current.classList.remove("hidden");
    changeMenuDisplayButtons();
  }

  function handleCloseMenuButtonClick() {
    changeMenuAnimation(true);
    changeMenuDisplayButtons();
  }

  function changeMenuDisplayButtons() {
    openMenuButton.current.classList.toggle("hidden");
    closeMenuButton.current.classList.toggle("hidden");
  }

  function changeMenuAnimation(open) {
    menu.current.classList.add("scale-in-tr");
    menu.current.classList.remove("scale-out-tr");
    if (open) {
      menu.current.classList.remove("scale-in-tr");
      menu.current.classList.add("scale-out-tr");
    }
  }

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 800) {
        menu.current.classList.add("hidden");
        closeMenuButton.current.classList.add("hidden");
      } else openMenuButton.current.classList.remove("hidden");
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

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

        <button
          id="openMenuButton"
          ref={openMenuButton}
          onClick={handleOpenMenuButtonClick}
        >
          <PiList size={24} />
        </button>
        <button
          ref={closeMenuButton}
          onClick={handleCloseMenuButtonClick}
          className="hidden"
        >
          <PiX size={24} />
        </button>
      </Navbar>
      <NavbarMenu ref={menu} className="hidden">
        <a href="#">Home</a>
        <a href="#">Serviços</a>
        <a href="#">Sobre nós</a>
        <button>Login</button>
        <button>Cadastre-se</button>
      </NavbarMenu>

      <Content>
        <IntroSection>
          <img src={petsImage} alt="" />
          <div className="content">
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
          <div className="bg-title">
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
          <div className="bg-img">
            <img src={pinto} alt="" />
          </div>
          <div className="text">
            <h1>Contato</h1>
            <p>(31) 9 8999-8888</p>
            <p>dogtor@gmail.com</p>
          </div>
        </Footer>
      </Content>
    </Container>
  );
}
