import { GetStaticPaths, GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";
import React from "react";
import SkeletonImage from "src/components/SkeletonImage";
import { IAgents } from "src/interfaces/agents/interface";
import { Weapons } from "src/interfaces/arsenal";
import { Data, IWeapon, Skin } from "src/interfaces/weapon";
import { api } from "src/service/api";
import {
  Container,
  WeaponContent,
  WeaponContentSection,
  WeaponHeader,
  WeaponSkins,
} from "../../styles/pages/Weapon";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

interface IParams extends ParsedUrlQuery {
  id: string;
}

interface Props {
  weapon: Data;
  skins: Skin[];
}

interface IWeapons {
  status: string;
  data: Weapons[];
}

const Weapon = ({ weapon, skins }: Props) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 9999, min: 1335 },
      items: 3.5,
      partialVisibilityGutter: 40,
    },
    smallDesktop: {
      breakpoint: { max: 1336, min: 1025 },
      items: 2.5,
      partialVisibilityGutter: 40,
    },
    tablet: {
      breakpoint: { max: 1024, min: 769 },
      items: 2,
      partialVisibilityGutter: 40,
    },
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 1,
      partialVisibilityGutter: 40,
    },
  };

  return (
    <Container>
      <WeaponHeader>
        <SkeletonImage
          src={weapon.displayIcon}
          alt={weapon.displayName}
          title={weapon.displayName}
        />
        <h1>{weapon.displayName}</h1>
      </WeaponHeader>

      <WeaponContent>
        <WeaponContentSection>
          <h2>Dano</h2>

          <div className="weapon-damage">
            {weapon.weaponStats &&
              weapon.weaponStats.damageRanges.map((damage, index) => (
                <div key={index}>
                  <h3>{`${damage.rangeStartMeters} - ${damage.rangeEndMeters} (Metros)`}</h3>
                  <ul>
                    <li>Cabeça: {damage.headDamage.toFixed(1)}</li>
                    <li>Corpo: {damage.bodyDamage.toFixed(1)}</li>
                    <li>Pernas: {damage.legDamage.toFixed(1)}</li>
                  </ul>
                </div>
              ))}
          </div>
        </WeaponContentSection>

        <WeaponContentSection>
          <h2>Preço</h2>

          <div className="weapon-price">
            <ul>
              <li>Preço: {weapon.shopData && weapon.shopData.cost}</li>
              <li>Categoria: {weapon.shopData && weapon.shopData.category}</li>
            </ul>
          </div>
        </WeaponContentSection>

        <WeaponContentSection>
          <h2>Caracteristicas</h2>

          <div className="weapon-stats">
            <ul>
              <li>
                Taxa de tiros:{" "}
                {weapon.weaponStats && weapon.weaponStats.fireRate.toFixed(1)}{" "}
              </li>
              <li>
                Balas: {weapon.weaponStats && weapon.weaponStats.magazineSize}
              </li>
              <li>
                Segundos para recarga:{" "}
                {weapon.weaponStats &&
                  weapon.weaponStats.reloadTimeSeconds.toFixed(1)}{" "}
              </li>
            </ul>
          </div>
        </WeaponContentSection>
      </WeaponContent>

      <WeaponSkins>
        <div className="weapon-skin-title">
          <h2>Skins</h2>
          <span>Uma mais linda que a outra!</span>
        </div>

        <Carousel
          responsive={responsive}
          autoPlay
          infinite
          partialVisbile
          itemClass="weapon-skin"
        >
          {skins.map((skin, index) => (
            <div key={index}>
              <img src={skin.displayIcon} alt={skin.displayName} />
              <h3>{skin.displayName}</h3>
            </div>
          ))}
        </Carousel>
      </WeaponSkins>
    </Container>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await api.get<IWeapons>("/weapons");

  const paths = data.data.map((weapon) => {
    return {
      params: {
        id: weapon.uuid,
      },
    };
  });

  const pathsSliced = paths.slice(0, 5);

  return {
    paths: pathsSliced,
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { id } = context.params as IParams;

  const { data } = await api.get<IWeapon>(`/weapons/${id}?language=pt-BR`);

  const skins = data.data.skins.filter((skin) => {
    return skin.displayIcon;
  }); 

  return {
    props: {
      weapon: data.data,
      skins,
    },
  };
};

export default Weapon;
